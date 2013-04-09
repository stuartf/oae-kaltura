var util = require('util');

var PreviewAPI = require('oae-preview-processor/lib/api');
var Signature = require('oae-util/lib/signature');
var Config = require('oae-config/lib/api').config('oae-kaltura');
var RestUtil = require('oae-rest/lib/util');

var MyConstants = require('./constants');
var KalturaClient = require('./vendor/kcl/KalturaClient');
var KalturaVO = require('./vendor/kcl/KalturaVO');
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
    _getKalturaClient(ctx, null, function(client){
        var mediaEntry = new KalturaVO.KalturaMediaEntry();
        var mediaType = contentObj.mime.split('/')[0].toUpperCase();

        mediaEntry.mediaType = KalturaConstants.KalturaMediaType[mediaType];

        client.media.add(function(entry){
            var resource = new KalturaVO.KalturaUrlResource();
            resource.url = _getSignedUrl(ctx);
            log().trace({ entry: entry });
            client.media.addContent(function(result){
                log().debug({ result: result });
                ctx.addMetadata('kaltura-id', entry.id);
                ctx.addMetadata('kaltura-thumbnail', entry.thumbnailUrl);
                callback(null);
            }, entry.id, resource);
        }, mediaEntry);
    });
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
 * @param  {PreviewContext}   ctx       The current execution context.
 * @param  {String}           userId    The userID for the Kaltura session
 * @param  {Function}         callback  A function to call when we have a client
 * @param  {KalturaClient}    callback.client The client
 * @api private
 */
var _getKalturaClient = function(ctx, userId, callback) {
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
    client.session.start(function(session){
        log().trace({session:session});
        client.setKs(session);
        callback(client);
    },
    getConf('admin-secret'), userId, KalturaConstants.KalturaSessionType.ADMIN,
    partnerId, getConf('session-length'));
};
