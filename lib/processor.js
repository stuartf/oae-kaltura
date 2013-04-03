var util = require('util');

var PreviewAPI = require('oae-preview-processor/lib/api');
var Signature = require('oae-util/lib/signature');
var Config = require('oae-config/lib/api').config('oae-kaltura');
var RestUtil = require('oae-rest/lib/util');

var MyConstants = require('./constants');
var KalturaClient = require('./vendor/kcl/KalturaClient');
var KalturaConstants = require('./vendor/kcl/KalturaTypes');

var log = require('oae-logger').logger('oae-kaltura');
var types;

/**
 * Registers the Kaltura processors
 *
 * @param {Object}      config          The configuration
 * @param {Function}    [callback]      Standard callback method.
 * @param {Object}      [callback.err]  Standard error object (if any.)
 */

var init = module.exports.init = function(config, callback) {
    types = [].concat(MyConstants.TYPES.VIDEO, MyConstants.TYPES.AUDIO);
    callback();
};

/**
 * Tell OAE that we handle all video and audio types
 *
 * @param  {PreviewContext}     ctx             The current preview context. It allows you to make requests to the app server to retrieve extra metadata
 * @param  {Content}            contentObj      The content object that needs processing
 * @param  {Function}           callback        Standard callback method.
 * @param  {Object}             callback.err    An error object (if any).
 * @param  {Number}             callback.order  A number that expresses how well suited this PP is to handle this piece of content. A negative number means this PP isn't able to deal with this piece of content. All default OAE processors return a number in the range [0, 10].
 */ 
var test = module.exports.test = function(ctx, contentObj, callback) {
    if (contentObj.resourceSubType === 'file' &&
        types.indexOf(contentObj.mime) !== -1) {
            return callback(null, 100);
    } else {
        return callback(null, -1);
    }
};

/**
 * Uploads a file to Kaltura
 *
 * @param {PreviewContext}      ctx             The preview context associated to this file.
 * @param  {Content}            contentObj      The content object that needs processing
 * @param {Function}            callback        Standard callback method.
 * @param {Object}              callback.err    Standard error object (if any.)
 */
var generatePreviews = module.exports.generatePreviews = function(ctx, contentObj, callback){
    var contentUrl = _getSignedUrl(ctx);
    var client = _getKalturaClient(ctx);
    client.media.addFromUrl(function(entry){
        ctx.addMetadata('kaltura-id', entry.id);
        ctx.addMetadata('kaltura-thumbnail', entry.thumbnailUrl);
        // TODO listen for kaltura to tell us it has finished
        callback(null);
    }, contentUrl);
};

/**
 * Generates a url on which the content can be downloaded.
 * The download link will expire in an hour.
 * The url will only be valid on the current tenant.
 *
 * @param  {PreviewContext}    ctx     Standard context object, representing the currently logged in user and its tenant
 * @return {String}             An URL where the content can be downloaded.
 * @api private
 */
var _getSignedUrl = function(ctx) {
    var duration = 3600; // one hour
    var principalId = ctx.tenantRestContext.userId;
    var tenant = ctx.contentId.split(':')[1];
    var versionEndpoint = '/api/content/'+ ctx.contentId + '/revisions?limit=1';
    RestUtil.RestRequest(ctx.tenantRestContext, versionEndpoint, 'GET', null, function(err, response) {
        var uri = response.uri;
        var body = principalId + ':' + uri;
        var sig = Signature.createRollingSignature(tenant, duration, 0, body);
        return util.format('/api/download/signed?uri=%s&signature=%s&expires=%s', uri, sig.signature, sig.expires);
    });
};

/**
 * @param  {PreviewContext}   ctx    The current execution context.
 * @param  {String}           userId The userID for the Kaltura session
 * @return {KalturaClient}           The KalturaClient
 * @api private
 */
var _getKalturaClient = function(ctx, userId) {
    var tenant = ctx.contentId.split(':')[1];
    var getConf = function(element) {
        return Config.getValue(tenant, 'kaltura', element);
    };

    var partnerId = parseInt(getConf('partner-id'), 10);
    var kalturaConf = new KalturaClient.KalturaConfiguration(partnerId);
    kalturaConf.serviceUrl = getConf('endpoint');

    var client = new KalturaClient.KalturaClient(kalturaConf);
    if (! userId) {
        userId = 'anonymous';
    }
    var session = client.session.start(function(){},
    getConf('admin-secret'), userId, KalturaConstants.KalturaSessionType.ADMIN,
    partnerId, getConf('session-length'));
    client.setKs(session);
    return client;
};
