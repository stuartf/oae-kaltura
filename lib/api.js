var PreviewAPI = require('oae-preview-processor/lib/api');
var Signature = require('oae-util/lib/signature');

var MyConstants = require('./constants');

/**
 * Registers the Kaltura processors
 *
 * @param {Object}      config          The configuration
 * @param {Function}    [callback]      Standard callback method.
 * @param {Object}      [callback.err]  Standard error object (if any.)
 */

var registerMe = module.exports.registerMe = function(config, callback) {
    callback = callback || function(err) { /* error is logged within the implementation */ };
    var types = [].concat(MyConstants.TYPES.VIDEO, PreviewConstants.TYPES.AUDIO);
    registerProcessor('oae-kaltura-processor', 'file', types, 10, generatePreviews);
};

/**
 * Uploads a file to Kaltura
 *
 * @param {PreviewContext}      ctx             The preview context associated to this file.
 * @param {Function}            callback        Standard callback method.
 * @param {Object}              callback.err    Standard error object (if any.)
 */
var generatePreviews = function(ctx, callback){
    var contentUrl = _getSignedUrl(ctx);
    var client = _getKalturaClient(ctx);
    var entry = client.media.addFromUrl(callback, contentUrl);
    ctx.addMetadata('kaltura-id', entry.id);
    ctx.addMetadata('kaltura-thumbnail', entry.thumbnailUrl);
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
    // TODO get the uri
    var body = principalId + ':' + uri;
    var sig = Signature.createRollingSignature(tenant, duration, 0, body);
    return util.format('/api/download/signed?uri=%s&signature=%s&expires=%s', uri, sig.signature, sig.expires);
};

/**
 * @param  {Context}          ctx    The current execution context.
 * @param  {String}           userId The userID for the Kaltura session
 * @return {KalturaClient}           The KalturaClient
 * @api private
 */
var _getKalturaClient = function(ctx, userId) {
    var getConf = function(element) {
        return Config.getValue(ctx.tenant().alias, 'kaltura', element);
    };

    var kalturaConf = new KalturaConfiguration(getConf('partner-id'));
    kalturaConf.serviceUrl = getConf('endpoint');

    var client = new KalturaClient(kalturaConf);
    if (! userId) {
        userId = 'anonymous';
    }
    var session = client.session.start(function(){},
    getConf('admin-secret'), userId, KalturaSessionType.ADMIN,
    getConf('partner-id'), getConf('session-length'));
    client.setKs(session);
    return client;
};
