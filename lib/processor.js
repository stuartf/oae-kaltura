var util = require('util');

var PreviewAPI = require('oae-preview-processor/lib/api');
var Config = require('oae-config/lib/api').config('oae-kaltura');
var RestUtil = require('oae-rest/lib/util');
var ContentInternalUtil = require('oae-content/lib/internal/util');

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
    var tenant = _getTenantAliasFromPreviewContext(ctx);
    if (Config.getValue(tenant, 'kaltura', 'enabled') &&
        contentObj.resourceSubType === 'file' &&
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
    try {
        _getKalturaClient(ctx, null, function(client){
            var mediaEntry = new KalturaVO.KalturaMediaEntry();
            var mediaType = contentObj.mime.split('/')[0].toUpperCase();

            mediaEntry.mediaType = KalturaConstants.KalturaMediaType[mediaType];

            client.media.add(function(entry){
                _getSignedUrl(ctx, function(url){
                    var resource = new KalturaVO.KalturaUrlResource();
                    resource.url = url;
                    log().trace({ resource:resource });
                    log().trace({ entry: entry });
                    client.media.addContent(function(result){
                        log().trace({ result: result });
                        ctx.addContentMetadata('kaltura-id', result.id);
                        ctx.addContentMetadata('kaltura-dataUrl', result.dataUrl);
                        ctx.addContentMetadata('kaltura-thumbnail', result.thumbnailUrl);
                        ctx.savePreviews(callback);
                    }, entry.id, resource);
                });
            }, mediaEntry);
        });
    } catch(err) {
        callback(err);
    }
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
var _getSignedUrl = function(ctx, callback) {
    //var principalId = ''; //ctx.tenantRestContext.userId;
    var tenant = ctx.content.tenant;
    var versionEndpoint = '/api/content/'+ ctx.contentId + '/revisions?limit=1';
    RestUtil.RestRequest(ctx.tenantRestContext, versionEndpoint, 'GET', null, function(err, response) {
        if (err) {
            throw(err);
        }
        var uri = response[0].uri;
        var url = ctx.tenantRestContext.host + ContentInternalUtil.getDownloadUrlForUri(null, tenant, uri);
        callback(url);
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
    var tenant = _getTenantAliasFromPreviewContext(ctx);
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

/**
 * @param {PreviewContext}  ctx   The current execution context.
 * @api private
 */
var _getTenantAliasFromPreviewContext = function(ctx) {
    return ctx.contentId.split(':')[1];
};
