var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: accessControl.
 * The available service actions:
 * @action  add  Add new Access Control Profile
 *  .
 * @action  get  Get Access Control Profile by id
 *  .
 * @action  update  Update Access Control Profile by id
 *  .
 * @action  delete  Delete Access Control Profile by id
 *  .
 * @action  list  List Access Control Profiles by filter and pager
 *  .
*/
var KalturaAccessControlService = module.exports.KalturaAccessControlService = function(client){
  this.init(client);
}
util.inherits(KalturaAccessControlService, kcb.KalturaServiceBase);
/**
 * Add new Access Control Profile
 *  .
 * @param  accessControl  KalturaAccessControl     (optional).
 * @return  KalturaAccessControl.
 */
KalturaAccessControlService.prototype.add = function(callback, accessControl){
  var kparams = {};
  this.client.addParam(kparams, "accessControl", kcb.toParams(accessControl));
  this.client.queueServiceActionCall("accessControl", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Access Control Profile by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaAccessControl.
 */
KalturaAccessControlService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("accessControl", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Access Control Profile by id
 *  .
 * @param  id  int     (optional).
 * @param  accessControl  KalturaAccessControl     (optional).
 * @return  KalturaAccessControl.
 */
KalturaAccessControlService.prototype.update = function(callback, id, accessControl){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "accessControl", kcb.toParams(accessControl));
  this.client.queueServiceActionCall("accessControl", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Access Control Profile by id
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaAccessControlService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("accessControl", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List Access Control Profiles by filter and pager
 *  .
 * @param  filter  KalturaAccessControlFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaAccessControlListResponse.
 */
KalturaAccessControlService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("accessControl", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: adminUser.
 * The available service actions:
 * @action  updatePassword  Update admin user password and email
 *  DEPRECATED.
 * @action  resetPassword  Reset admin user password and send it to the users email address
 *  .
 * @action  login  Get an admin session using admin email and password (Used for login to the KMC application)
 *  .
 * @action  setInitialPassword  Set initial users password
 *  .
*/
var KalturaAdminUserService = module.exports.KalturaAdminUserService = function(client){
  this.init(client);
}
util.inherits(KalturaAdminUserService, kcb.KalturaServiceBase);
/**
 * Update admin user password and email
 *  DEPRECATED.
 * @param  email  string     (optional).
 * @param  password  string     (optional).
 * @param  newEmail  string    Optional, provide only when you want to update the email (optional).
 * @param  newPassword  string     (optional).
 * @return  KalturaAdminUser.
 */
KalturaAdminUserService.prototype.updatePassword = function(callback, email, password, newEmail, newPassword){
  if(!newEmail)
    newEmail = "";
  if(!newPassword)
    newPassword = "";
  var kparams = {};
  this.client.addParam(kparams, "email", email);
  this.client.addParam(kparams, "password", password);
  this.client.addParam(kparams, "newEmail", newEmail);
  this.client.addParam(kparams, "newPassword", newPassword);
  this.client.queueServiceActionCall("adminUser", "updatePassword", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Reset admin user password and send it to the users email address
 *  .
 * @param  email  string     (optional).
 * @return  .
 */
KalturaAdminUserService.prototype.resetPassword = function(callback, email){
  var kparams = {};
  this.client.addParam(kparams, "email", email);
  this.client.queueServiceActionCall("adminUser", "resetPassword", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get an admin session using admin email and password (Used for login to the KMC application)
 *  .
 * @param  email  string     (optional).
 * @param  password  string     (optional).
 * @param  partnerId  int     (optional, default: null).
 * @return  string.
 */
KalturaAdminUserService.prototype.login = function(callback, email, password, partnerId){
  if(!partnerId)
    partnerId = null;
  var kparams = {};
  this.client.addParam(kparams, "email", email);
  this.client.addParam(kparams, "password", password);
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.queueServiceActionCall("adminUser", "login", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Set initial users password
 *  .
 * @param  hashKey  string     (optional).
 * @param  newPassword  string    new password to set (optional).
 * @return  .
 */
KalturaAdminUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
  var kparams = {};
  this.client.addParam(kparams, "hashKey", hashKey);
  this.client.addParam(kparams, "newPassword", newPassword);
  this.client.queueServiceActionCall("adminUser", "setInitialPassword", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: baseEntry.
 * The available service actions:
 * @action  add  Generic add entry, should be used when the uploaded entry type is not known.
 * @action  addContent  Generic add entry, should be used when the uploaded entry type is not known.
 * @action  addFromUploadedFile  Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @action  get  Get base entry by ID.
 *  .
 * @action  getRemotePaths  Get remote storage existing paths for the asset.
 * @action  update  Update base entry. Only the properties that were set will be updated.
 *  .
 * @action  updateContent  Update base entry. Only the properties that were set will be updated.
 *  .
 * @action  getByIds  Get base entry by comma separated entry ids.
 *  .
 * @action  delete  Delete an entry..
 * @action  list  List base entries by filter with paging support.
 *  .
 * @action  count  Count base entries by filter.
 *  .
 * @action  upload  Upload a file to Kaltura, that can be used to create an entry.
 *  DEPRECATED - use upload.upload or uploadToken.add instead.
 * @action  updateThumbnailJpeg  Update entry thumbnail using a raw jpeg file
 *  .
 * @action  updateThumbnailFromUrl  Update entry thumbnail using url
 *  .
 * @action  updateThumbnailFromSourceEntry  Update entry thumbnail from a different entry by a specified time offset (In seconds)
 *  .
 * @action  flag  Flag inappropriate entry for moderation
 *  .
 * @action  reject  Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *  .
 * @action  approve  Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *  .
 * @action  listFlags  List all pending flags for the entry
 *  .
 * @action  anonymousRank  Anonymously rank an entry, no validation is done on duplicate rankings
 *  .
 * @action  getContextData  .
*/
var KalturaBaseEntryService = module.exports.KalturaBaseEntryService = function(client){
  this.init(client);
}
util.inherits(KalturaBaseEntryService, kcb.KalturaServiceBase);
/**
 * Generic add entry, should be used when the uploaded entry type is not known.
 * @param  entry  KalturaBaseEntry     (optional).
 * @param  type  string     (optional, enum: KalturaEntryType, default: null).
 * @return  KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.add = function(callback, entry, type){
  if(!type)
    type = null;
  var kparams = {};
  this.client.addParam(kparams, "entry", kcb.toParams(entry));
  this.client.addParam(kparams, "type", type);
  this.client.queueServiceActionCall("baseEntry", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Generic add entry, should be used when the uploaded entry type is not known.
 * @param  entryId  string     (optional).
 * @param  resource  KalturaResource     (optional).
 * @return  KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.addContent = function(callback, entryId, resource){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "resource", kcb.toParams(resource));
  this.client.queueServiceActionCall("baseEntry", "addContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @param  entry  KalturaBaseEntry     (optional).
 * @param  uploadTokenId  string     (optional).
 * @param  type  string     (optional, enum: KalturaEntryType, default: null).
 * @return  KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.addFromUploadedFile = function(callback, entry, uploadTokenId, type){
  if(!type)
    type = null;
  var kparams = {};
  this.client.addParam(kparams, "entry", kcb.toParams(entry));
  this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
  this.client.addParam(kparams, "type", type);
  this.client.queueServiceActionCall("baseEntry", "addFromUploadedFile", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get base entry by ID.
 *  .
 * @param  entryId  string    Entry id (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.get = function(callback, entryId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("baseEntry", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset.
 * @param  entryId  string     (optional).
 * @return  KalturaRemotePathListResponse.
 */
KalturaBaseEntryService.prototype.getRemotePaths = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("baseEntry", "getRemotePaths", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update base entry. Only the properties that were set will be updated.
 *  .
 * @param  entryId  string    Entry id to update (optional).
 * @param  baseEntry  KalturaBaseEntry    Base entry metadata to update (optional).
 * @return  KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.update = function(callback, entryId, baseEntry){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "baseEntry", kcb.toParams(baseEntry));
  this.client.queueServiceActionCall("baseEntry", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update base entry. Only the properties that were set will be updated.
 *  .
 * @param  entryId  string    Entry id to update (optional).
 * @param  resource  KalturaResource    Resource to be used to replace entry content (optional).
 * @param  conversionProfileId  int    The conversion profile id to be used on the entry (optional, default: null).
 * @return  KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId){
  if(!conversionProfileId)
    conversionProfileId = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "resource", kcb.toParams(resource));
  this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
  this.client.queueServiceActionCall("baseEntry", "updateContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get base entry by comma separated entry ids.
 *  .
 * @param  entryIds  string    Comma separated string of entry ids (optional).
 * @return  array.
 */
KalturaBaseEntryService.prototype.getByIds = function(callback, entryIds){
  var kparams = {};
  this.client.addParam(kparams, "entryIds", entryIds);
  this.client.queueServiceActionCall("baseEntry", "getByIds", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete an entry..
 * @param  entryId  string    Entry id to delete (optional).
 * @return  .
 */
KalturaBaseEntryService.prototype.deleteAction = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("baseEntry", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List base entries by filter with paging support.
 *  .
 * @param  filter  KalturaBaseEntryFilter    Entry filter (optional, default: null).
 * @param  pager  KalturaFilterPager    Pager (optional, default: null).
 * @return  KalturaBaseEntryListResponse.
 */
KalturaBaseEntryService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("baseEntry", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Count base entries by filter.
 *  .
 * @param  filter  KalturaBaseEntryFilter    Entry filter (optional, default: null).
 * @return  int.
 */
KalturaBaseEntryService.prototype.count = function(callback, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("baseEntry", "count", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Upload a file to Kaltura, that can be used to create an entry.
 *  DEPRECATED - use upload.upload or uploadToken.add instead.
 * @param  fileData  file    The file data (optional).
 * @return  string.
 */
KalturaBaseEntryService.prototype.upload = function(callback, fileData){
  var kparams = {};
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("baseEntry", "upload", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using a raw jpeg file
 *  .
 * @param  entryId  string    Media entry id (optional).
 * @param  fileData  file    Jpeg file data (optional).
 * @return  KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("baseEntry", "updateThumbnailJpeg", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using url
 *  .
 * @param  entryId  string    Media entry id (optional).
 * @param  url  string    file url (optional).
 * @return  KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "url", url);
  this.client.queueServiceActionCall("baseEntry", "updateThumbnailFromUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update entry thumbnail from a different entry by a specified time offset (In seconds)
 *  .
 * @param  entryId  string    Media entry id (optional).
 * @param  sourceEntryId  string    Media entry id (optional).
 * @param  timeOffset  int    Time offset (in seconds) (optional).
 * @return  KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
  this.client.addParam(kparams, "timeOffset", timeOffset);
  this.client.queueServiceActionCall("baseEntry", "updateThumbnailFromSourceEntry", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Flag inappropriate entry for moderation
 *  .
 * @param  moderationFlag  KalturaModerationFlag     (optional).
 * @return  .
 */
KalturaBaseEntryService.prototype.flag = function(callback, moderationFlag){
  var kparams = {};
  this.client.addParam(kparams, "moderationFlag", kcb.toParams(moderationFlag));
  this.client.queueServiceActionCall("baseEntry", "flag", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *  .
 * @param  entryId  string     (optional).
 * @return  .
 */
KalturaBaseEntryService.prototype.reject = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("baseEntry", "reject", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *  .
 * @param  entryId  string     (optional).
 * @return  .
 */
KalturaBaseEntryService.prototype.approve = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("baseEntry", "approve", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List all pending flags for the entry
 *  .
 * @param  entryId  string     (optional).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaModerationFlagListResponse.
 */
KalturaBaseEntryService.prototype.listFlags = function(callback, entryId, pager){
  if(!pager)
    pager = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("baseEntry", "listFlags", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Anonymously rank an entry, no validation is done on duplicate rankings
 *  .
 * @param  entryId  string     (optional).
 * @param  rank  int     (optional).
 * @return  .
 */
KalturaBaseEntryService.prototype.anonymousRank = function(callback, entryId, rank){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "rank", rank);
  this.client.queueServiceActionCall("baseEntry", "anonymousRank", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  entryId  string     (optional).
 * @param  contextDataParams  KalturaEntryContextDataParams     (optional).
 * @return  KalturaEntryContextDataResult.
 */
KalturaBaseEntryService.prototype.getContextData = function(callback, entryId, contextDataParams){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "contextDataParams", kcb.toParams(contextDataParams));
  this.client.queueServiceActionCall("baseEntry", "getContextData", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: bulkUpload.
 * The available service actions:
 * @action  add  Add new bulk upload batch job
 *  Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *  If no conversion profile was specified, partner's default will be used
 *  .
 * @action  get  Get bulk upload batch job by id.
 * @action  list  List bulk upload batch jobs.
 * @action  abort  Aborts the bulk upload and all its child jobs
 *  .
*/
var KalturaBulkUploadService = module.exports.KalturaBulkUploadService = function(client){
  this.init(client);
}
util.inherits(KalturaBulkUploadService, kcb.KalturaServiceBase);
/**
 * Add new bulk upload batch job
 *  Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *  If no conversion profile was specified, partner's default will be used
 *  .
 * @param  conversionProfileId  int    Convertion profile id to use for converting the current bulk (-1 to use partner's default) (optional).
 * @param  csvFileData  file    bulk upload file (optional).
 * @param  bulkUploadType  string     (optional, enum: KalturaBulkUploadType, default: null).
 * @param  uploadedBy  string     (optional, default: null).
 * @return  KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.add = function(callback, conversionProfileId, csvFileData, bulkUploadType, uploadedBy){
  if(!bulkUploadType)
    bulkUploadType = null;
  if(!uploadedBy)
    uploadedBy = null;
  var kparams = {};
  this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
  kfiles = {};
  this.client.addParam(kfiles, "csvFileData", csvFileData);
  this.client.addParam(kparams, "bulkUploadType", bulkUploadType);
  this.client.addParam(kparams, "uploadedBy", uploadedBy);
  this.client.queueServiceActionCall("bulkUpload", "add", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get bulk upload batch job by id.
 * @param  id  int     (optional).
 * @return  KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("bulkUpload", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List bulk upload batch jobs.
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaBulkUploadListResponse.
 */
KalturaBulkUploadService.prototype.listAction = function(callback, pager){
  if(!pager)
    pager = null;
  var kparams = {};
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("bulkUpload", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Aborts the bulk upload and all its child jobs
 *  .
 * @param  id  int    job id (optional).
 * @return  KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.abort = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("bulkUpload", "abort", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: category.
 * The available service actions:
 * @action  add  Add new Category
 *  .
 * @action  get  Get Category by id
 *  .
 * @action  update  Update Category
 *  .
 * @action  delete  Delete a Category
 *  .
 * @action  list  List all categories
 *  .
*/
var KalturaCategoryService = module.exports.KalturaCategoryService = function(client){
  this.init(client);
}
util.inherits(KalturaCategoryService, kcb.KalturaServiceBase);
/**
 * Add new Category
 *  .
 * @param  category  KalturaCategory     (optional).
 * @return  KalturaCategory.
 */
KalturaCategoryService.prototype.add = function(callback, category){
  var kparams = {};
  this.client.addParam(kparams, "category", kcb.toParams(category));
  this.client.queueServiceActionCall("category", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Category by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaCategory.
 */
KalturaCategoryService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("category", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Category
 *  .
 * @param  id  int     (optional).
 * @param  category  KalturaCategory     (optional).
 * @return  KalturaCategory.
 */
KalturaCategoryService.prototype.update = function(callback, id, category){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "category", kcb.toParams(category));
  this.client.queueServiceActionCall("category", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete a Category
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaCategoryService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("category", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List all categories
 *  .
 * @param  filter  KalturaCategoryFilter     (optional, default: null).
 * @return  KalturaCategoryListResponse.
 */
KalturaCategoryService.prototype.listAction = function(callback, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("category", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: conversionProfileAssetParams.
 * The available service actions:
 * @action  list  Lists asset parmas of conversion profile by ID
 *  .
 * @action  update  Update asset parmas of conversion profile by ID
 *  .
*/
var KalturaConversionProfileAssetParamsService = module.exports.KalturaConversionProfileAssetParamsService = function(client){
  this.init(client);
}
util.inherits(KalturaConversionProfileAssetParamsService, kcb.KalturaServiceBase);
/**
 * Lists asset parmas of conversion profile by ID
 *  .
 * @param  filter  KalturaConversionProfileAssetParamsFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaConversionProfileAssetParamsListResponse.
 */
KalturaConversionProfileAssetParamsService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("conversionProfileAssetParams", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update asset parmas of conversion profile by ID
 *  .
 * @param  conversionProfileId  int     (optional).
 * @param  assetParamsId  int     (optional).
 * @param  conversionProfileAssetParams  KalturaConversionProfileAssetParams     (optional).
 * @return  KalturaConversionProfileAssetParams.
 */
KalturaConversionProfileAssetParamsService.prototype.update = function(callback, conversionProfileId, assetParamsId, conversionProfileAssetParams){
  var kparams = {};
  this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
  this.client.addParam(kparams, "assetParamsId", assetParamsId);
  this.client.addParam(kparams, "conversionProfileAssetParams", kcb.toParams(conversionProfileAssetParams));
  this.client.queueServiceActionCall("conversionProfileAssetParams", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: conversionProfile.
 * The available service actions:
 * @action  setAsDefault  Set Conversion Profile to be the partner default
 *  .
 * @action  getDefault  Get the partner's default conversion profile
 *  .
 * @action  add  Add new Conversion Profile
 *  .
 * @action  get  Get Conversion Profile by ID
 *  .
 * @action  update  Update Conversion Profile by ID
 *  .
 * @action  delete  Delete Conversion Profile by ID
 *  .
 * @action  list  List Conversion Profiles by filter with paging support
 *  .
*/
var KalturaConversionProfileService = module.exports.KalturaConversionProfileService = function(client){
  this.init(client);
}
util.inherits(KalturaConversionProfileService, kcb.KalturaServiceBase);
/**
 * Set Conversion Profile to be the partner default
 *  .
 * @param  id  int     (optional).
 * @return  KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.setAsDefault = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("conversionProfile", "setAsDefault", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get the partner's default conversion profile
 *  .
 * @return  KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.getDefault = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("conversionProfile", "getDefault", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add new Conversion Profile
 *  .
 * @param  conversionProfile  KalturaConversionProfile     (optional).
 * @return  KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.add = function(callback, conversionProfile){
  var kparams = {};
  this.client.addParam(kparams, "conversionProfile", kcb.toParams(conversionProfile));
  this.client.queueServiceActionCall("conversionProfile", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Conversion Profile by ID
 *  .
 * @param  id  int     (optional).
 * @return  KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("conversionProfile", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Conversion Profile by ID
 *  .
 * @param  id  int     (optional).
 * @param  conversionProfile  KalturaConversionProfile     (optional).
 * @return  KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.update = function(callback, id, conversionProfile){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "conversionProfile", kcb.toParams(conversionProfile));
  this.client.queueServiceActionCall("conversionProfile", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Conversion Profile by ID
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaConversionProfileService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("conversionProfile", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List Conversion Profiles by filter with paging support
 *  .
 * @param  filter  KalturaConversionProfileFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaConversionProfileListResponse.
 */
KalturaConversionProfileService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("conversionProfile", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: data.
 * The available service actions:
 * @action  add  Adds a new data entry
 *  .
 * @action  get  Get data entry by ID.
 *  .
 * @action  update  Update data entry. Only the properties that were set will be updated.
 *  .
 * @action  delete  Delete a data entry.
 *  .
 * @action  list  List data entries by filter with paging support.
 *  .
*/
var KalturaDataService = module.exports.KalturaDataService = function(client){
  this.init(client);
}
util.inherits(KalturaDataService, kcb.KalturaServiceBase);
/**
 * Adds a new data entry
 *  .
 * @param  dataEntry  KalturaDataEntry    Data entry (optional).
 * @return  KalturaDataEntry.
 */
KalturaDataService.prototype.add = function(callback, dataEntry){
  var kparams = {};
  this.client.addParam(kparams, "dataEntry", kcb.toParams(dataEntry));
  this.client.queueServiceActionCall("data", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get data entry by ID.
 *  .
 * @param  entryId  string    Data entry id (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaDataEntry.
 */
KalturaDataService.prototype.get = function(callback, entryId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("data", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update data entry. Only the properties that were set will be updated.
 *  .
 * @param  entryId  string    Data entry id to update (optional).
 * @param  documentEntry  KalturaDataEntry    Data entry metadata to update (optional).
 * @return  KalturaDataEntry.
 */
KalturaDataService.prototype.update = function(callback, entryId, documentEntry){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "documentEntry", kcb.toParams(documentEntry));
  this.client.queueServiceActionCall("data", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete a data entry.
 *  .
 * @param  entryId  string    Data entry id to delete (optional).
 * @return  .
 */
KalturaDataService.prototype.deleteAction = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("data", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List data entries by filter with paging support.
 *  .
 * @param  filter  KalturaDataEntryFilter    Document entry filter (optional, default: null).
 * @param  pager  KalturaFilterPager    Pager (optional, default: null).
 * @return  KalturaDataListResponse.
 */
KalturaDataService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("data", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: document.
 * The available service actions:
 * @action  addFromUploadedFile  Add new document entry after the specific document file was uploaded and the upload token id exists
 *  .
 * @action  addFromEntry  Copy entry into new entry
 *  .
 * @action  addFromFlavorAsset  Copy flavor asset into new entry
 *  .
 * @action  convert  Convert entry
 *  .
 * @action  get  Get document entry by ID.
 *  .
 * @action  update  Update document entry. Only the properties that were set will be updated.
 *  .
 * @action  delete  Delete a document entry.
 *  .
 * @action  list  List document entries by filter with paging support.
 *  .
 * @action  upload  Upload a document file to Kaltura, then the file can be used to create a document entry.
 *  DEPRECATED - use upload.upload or uploadToken.add instead.
 * @action  convertPptToSwf  This will queue a batch job for converting the document file to swf
 *  Returns the URL where the new swf will be available 
 *  .
*/
var KalturaDocumentService = module.exports.KalturaDocumentService = function(client){
  this.init(client);
}
util.inherits(KalturaDocumentService, kcb.KalturaServiceBase);
/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists
 *  .
 * @param  documentEntry  KalturaDocumentEntry    Document entry metadata (optional).
 * @param  uploadTokenId  string    Upload token id (optional).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
  var kparams = {};
  this.client.addParam(kparams, "documentEntry", kcb.toParams(documentEntry));
  this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
  this.client.queueServiceActionCall("document", "addFromUploadedFile", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Copy entry into new entry
 *  .
 * @param  sourceEntryId  string    Document entry id to copy from (optional).
 * @param  documentEntry  KalturaDocumentEntry    Document entry metadata (optional, default: null).
 * @param  sourceFlavorParamsId  int    The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
  if(!documentEntry)
    documentEntry = null;
  if(!sourceFlavorParamsId)
    sourceFlavorParamsId = null;
  var kparams = {};
  this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
  if (documentEntry != null)
    this.client.addParam(kparams, "documentEntry", kcb.toParams(documentEntry));
  this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
  this.client.queueServiceActionCall("document", "addFromEntry", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry
 *  .
 * @param  sourceFlavorAssetId  string    Flavor asset id to be used as the new entry source (optional).
 * @param  documentEntry  KalturaDocumentEntry    Document entry metadata (optional, default: null).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
  if(!documentEntry)
    documentEntry = null;
  var kparams = {};
  this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
  if (documentEntry != null)
    this.client.addParam(kparams, "documentEntry", kcb.toParams(documentEntry));
  this.client.queueServiceActionCall("document", "addFromFlavorAsset", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Convert entry
 *  .
 * @param  entryId  string    Document entry id (optional).
 * @param  conversionProfileId  int     (optional, default: null).
 * @param  dynamicConversionAttributes  array     (optional, default: null).
 * @return  int.
 */
KalturaDocumentService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
  if(!conversionProfileId)
    conversionProfileId = null;
  if(!dynamicConversionAttributes)
    dynamicConversionAttributes = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
  if(dynamicConversionAttributes != null)
  for(var index in dynamicConversionAttributes)
  {
    var obj = dynamicConversionAttributes[index];
    this.client.addParam(kparams, "dynamicConversionAttributes:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("document", "convert", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get document entry by ID.
 *  .
 * @param  entryId  string    Document entry id (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.get = function(callback, entryId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("document", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update document entry. Only the properties that were set will be updated.
 *  .
 * @param  entryId  string    Document entry id to update (optional).
 * @param  documentEntry  KalturaDocumentEntry    Document entry metadata to update (optional).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.update = function(callback, entryId, documentEntry){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "documentEntry", kcb.toParams(documentEntry));
  this.client.queueServiceActionCall("document", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete a document entry.
 *  .
 * @param  entryId  string    Document entry id to delete (optional).
 * @return  .
 */
KalturaDocumentService.prototype.deleteAction = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("document", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List document entries by filter with paging support.
 *  .
 * @param  filter  KalturaDocumentEntryFilter    Document entry filter (optional, default: null).
 * @param  pager  KalturaFilterPager    Pager (optional, default: null).
 * @return  KalturaDocumentListResponse.
 */
KalturaDocumentService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("document", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Upload a document file to Kaltura, then the file can be used to create a document entry.
 *  DEPRECATED - use upload.upload or uploadToken.add instead.
 * @param  fileData  file    The file data (optional).
 * @return  string.
 */
KalturaDocumentService.prototype.upload = function(callback, fileData){
  var kparams = {};
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("document", "upload", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * This will queue a batch job for converting the document file to swf
 *  Returns the URL where the new swf will be available 
 *  .
 * @param  entryId  string     (optional).
 * @return  string.
 */
KalturaDocumentService.prototype.convertPptToSwf = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("document", "convertPptToSwf", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: EmailIngestionProfile.
 * The available service actions:
 * @action  add  EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @action  getByEmailAddress  Retrieve a EmailIngestionProfile by email address.
 * @action  get  Retrieve a EmailIngestionProfile by id.
 * @action  update  Update an existing EmailIngestionProfile.
 * @action  delete  Delete an existing EmailIngestionProfile.
 * @action  addMediaEntry  add KalturaMediaEntry from email ingestion.
*/
var KalturaEmailIngestionProfileService = module.exports.KalturaEmailIngestionProfileService = function(client){
  this.init(client);
}
util.inherits(KalturaEmailIngestionProfileService, kcb.KalturaServiceBase);
/**
 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @param  EmailIP  KalturaEmailIngestionProfile    Mandatory input parameter of type KalturaEmailIngestionProfile (optional).
 * @return  KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.add = function(callback, EmailIP){
  var kparams = {};
  this.client.addParam(kparams, "EmailIP", kcb.toParams(EmailIP));
  this.client.queueServiceActionCall("EmailIngestionProfile", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a EmailIngestionProfile by email address.
 * @param  emailAddress  string     (optional).
 * @return  KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.getByEmailAddress = function(callback, emailAddress){
  var kparams = {};
  this.client.addParam(kparams, "emailAddress", emailAddress);
  this.client.queueServiceActionCall("EmailIngestionProfile", "getByEmailAddress", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a EmailIngestionProfile by id.
 * @param  id  int     (optional).
 * @return  KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("EmailIngestionProfile", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing EmailIngestionProfile.
 * @param  id  int     (optional).
 * @param  EmailIP  KalturaEmailIngestionProfile     (optional).
 * @return  KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.update = function(callback, id, EmailIP){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "EmailIP", kcb.toParams(EmailIP));
  this.client.queueServiceActionCall("EmailIngestionProfile", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete an existing EmailIngestionProfile.
 * @param  id  int     (optional).
 * @return  .
 */
KalturaEmailIngestionProfileService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("EmailIngestionProfile", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * add KalturaMediaEntry from email ingestion.
 * @param  mediaEntry  KalturaMediaEntry    Media entry metadata (optional).
 * @param  uploadTokenId  string    Upload token id (optional).
 * @param  emailProfId  int     (optional).
 * @param  fromAddress  string     (optional).
 * @param  emailMsgId  string     (optional).
 * @return  KalturaMediaEntry.
 */
KalturaEmailIngestionProfileService.prototype.addMediaEntry = function(callback, mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
  var kparams = {};
  this.client.addParam(kparams, "mediaEntry", kcb.toParams(mediaEntry));
  this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
  this.client.addParam(kparams, "emailProfId", emailProfId);
  this.client.addParam(kparams, "fromAddress", fromAddress);
  this.client.addParam(kparams, "emailMsgId", emailMsgId);
  this.client.queueServiceActionCall("EmailIngestionProfile", "addMediaEntry", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: flavorAsset.
 * The available service actions:
 * @action  add  Add flavor asset.
 * @action  update  Update flavor asset.
 * @action  setContent  Update content of flavor asset.
 * @action  get  Get Flavor Asset by ID
 *  .
 * @action  getByEntryId  Get Flavor Assets for Entry
 *  DEPRECATED - Use thumbAsset.list instead.
 * @action  list  List Flavor Assets by filter and pager
 *  .
 * @action  getWebPlayableByEntryId  Get web playable Flavor Assets for Entry
 *  .
 * @action  convert  Add and convert new Flavor Asset for Entry with specific Flavor Params
 *  .
 * @action  reconvert  Reconvert Flavor Asset by ID
 *  .
 * @action  delete  Delete Flavor Asset by ID
 *  .
 * @action  getUrl  Get download URL for the asset
 *  .
 * @action  getRemotePaths  Get remote storage existing paths for the asset
 *  .
 * @action  getDownloadUrl  Get download URL for the Flavor Asset
 *  DEPRECATED - use getUrl instead.
 * @action  getFlavorAssetsWithParams  Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *  .
*/
var KalturaFlavorAssetService = module.exports.KalturaFlavorAssetService = function(client){
  this.init(client);
}
util.inherits(KalturaFlavorAssetService, kcb.KalturaServiceBase);
/**
 * Add flavor asset.
 * @param  entryId  string     (optional).
 * @param  flavorAsset  KalturaFlavorAsset     (optional).
 * @return  KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.add = function(callback, entryId, flavorAsset){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "flavorAsset", kcb.toParams(flavorAsset));
  this.client.queueServiceActionCall("flavorAsset", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update flavor asset.
 * @param  id  string     (optional).
 * @param  flavorAsset  KalturaFlavorAsset     (optional).
 * @return  KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.update = function(callback, id, flavorAsset){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "flavorAsset", kcb.toParams(flavorAsset));
  this.client.queueServiceActionCall("flavorAsset", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update content of flavor asset.
 * @param  id  string     (optional).
 * @param  contentResource  KalturaContentResource     (optional).
 * @return  KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.setContent = function(callback, id, contentResource){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "contentResource", kcb.toParams(contentResource));
  this.client.queueServiceActionCall("flavorAsset", "setContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Flavor Asset by ID
 *  .
 * @param  id  string     (optional).
 * @return  KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("flavorAsset", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Flavor Assets for Entry
 *  DEPRECATED - Use thumbAsset.list instead.
 * @param  entryId  string     (optional).
 * @return  array.
 */
KalturaFlavorAssetService.prototype.getByEntryId = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("flavorAsset", "getByEntryId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List Flavor Assets by filter and pager
 *  .
 * @param  filter  KalturaAssetFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaFlavorAssetListResponse.
 */
KalturaFlavorAssetService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("flavorAsset", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get web playable Flavor Assets for Entry
 *  .
 * @param  entryId  string     (optional).
 * @return  array.
 */
KalturaFlavorAssetService.prototype.getWebPlayableByEntryId = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("flavorAsset", "getWebPlayableByEntryId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add and convert new Flavor Asset for Entry with specific Flavor Params
 *  .
 * @param  entryId  string     (optional).
 * @param  flavorParamsId  int     (optional).
 * @return  .
 */
KalturaFlavorAssetService.prototype.convert = function(callback, entryId, flavorParamsId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
  this.client.queueServiceActionCall("flavorAsset", "convert", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Reconvert Flavor Asset by ID
 *  .
 * @param  id  string    Flavor Asset ID (optional).
 * @return  .
 */
KalturaFlavorAssetService.prototype.reconvert = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("flavorAsset", "reconvert", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Flavor Asset by ID
 *  .
 * @param  id  string     (optional).
 * @return  .
 */
KalturaFlavorAssetService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("flavorAsset", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get download URL for the asset
 *  .
 * @param  id  string     (optional).
 * @param  storageId  int     (optional, default: null).
 * @return  string.
 */
KalturaFlavorAssetService.prototype.getUrl = function(callback, id, storageId){
  if(!storageId)
    storageId = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "storageId", storageId);
  this.client.queueServiceActionCall("flavorAsset", "getUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset
 *  .
 * @param  id  string     (optional).
 * @return  KalturaRemotePathListResponse.
 */
KalturaFlavorAssetService.prototype.getRemotePaths = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("flavorAsset", "getRemotePaths", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get download URL for the Flavor Asset
 *  DEPRECATED - use getUrl instead.
 * @param  id  string     (optional).
 * @param  useCdn  bool     (optional, default: false).
 * @return  string.
 */
KalturaFlavorAssetService.prototype.getDownloadUrl = function(callback, id, useCdn){
  if(!useCdn)
    useCdn = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "useCdn", useCdn);
  this.client.queueServiceActionCall("flavorAsset", "getDownloadUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *  .
 * @param  entryId  string     (optional).
 * @return  array.
 */
KalturaFlavorAssetService.prototype.getFlavorAssetsWithParams = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("flavorAsset", "getFlavorAssetsWithParams", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: flavorParams.
 * The available service actions:
 * @action  add  Add new Flavor Params
 *  .
 * @action  get  Get Flavor Params by ID
 *  .
 * @action  update  Update Flavor Params by ID
 *  .
 * @action  delete  Delete Flavor Params by ID
 *  .
 * @action  list  List Flavor Params by filter with paging support (By default - all system default params will be listed too)
 *  .
 * @action  getByConversionProfileId  Get Flavor Params by Conversion Profile ID
 *  .
*/
var KalturaFlavorParamsService = module.exports.KalturaFlavorParamsService = function(client){
  this.init(client);
}
util.inherits(KalturaFlavorParamsService, kcb.KalturaServiceBase);
/**
 * Add new Flavor Params
 *  .
 * @param  flavorParams  KalturaFlavorParams     (optional).
 * @return  KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.add = function(callback, flavorParams){
  var kparams = {};
  this.client.addParam(kparams, "flavorParams", kcb.toParams(flavorParams));
  this.client.queueServiceActionCall("flavorParams", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Flavor Params by ID
 *  .
 * @param  id  int     (optional).
 * @return  KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("flavorParams", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Flavor Params by ID
 *  .
 * @param  id  int     (optional).
 * @param  flavorParams  KalturaFlavorParams     (optional).
 * @return  KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.update = function(callback, id, flavorParams){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "flavorParams", kcb.toParams(flavorParams));
  this.client.queueServiceActionCall("flavorParams", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Flavor Params by ID
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaFlavorParamsService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("flavorParams", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List Flavor Params by filter with paging support (By default - all system default params will be listed too)
 *  .
 * @param  filter  KalturaFlavorParamsFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaFlavorParamsListResponse.
 */
KalturaFlavorParamsService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("flavorParams", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Flavor Params by Conversion Profile ID
 *  .
 * @param  conversionProfileId  int     (optional).
 * @return  array.
 */
KalturaFlavorParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
  var kparams = {};
  this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
  this.client.queueServiceActionCall("flavorParams", "getByConversionProfileId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: liveStream.
 * The available service actions:
 * @action  add  Adds new live stream entry.
 *  The entry will be queued for provision.
 *  @action add
 *  @throws KalturaErrors::PROPERTY_VALIDATION_CANNOT_BE_NULL.
 * @action  get  Get live stream entry by ID.
 *  @action get
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
 * @action  update  Update live stream entry. Only the properties that were set will be updated.
 *  @action update
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
 * @action  delete  Delete a live stream entry.
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
 * @action  list  List live stream entries by filter with paging support.
 *  @action list.
 * @action  updateOfflineThumbnailJpeg  Update live stream entry thumbnail using a raw jpeg file
 *  @action updateOfflineThumbnailJpeg
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
 * @action  updateOfflineThumbnailFromUrl  Update entry thumbnail using url
 *  @action updateOfflineThumbnailFromUrl
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
*/
var KalturaLiveStreamService = module.exports.KalturaLiveStreamService = function(client){
  this.init(client);
}
util.inherits(KalturaLiveStreamService, kcb.KalturaServiceBase);
/**
 * Adds new live stream entry.
 *  The entry will be queued for provision.
 *  @action add
 *  @throws KalturaErrors::PROPERTY_VALIDATION_CANNOT_BE_NULL.
 * @param  liveStreamEntry  KalturaLiveStreamAdminEntry    Live stream entry metadata   (optional).
 * @param  sourceType  string     Live stream source type (optional, enum: KalturaSourceType, default: null).
 * @return  KalturaLiveStreamAdminEntry.
 */
KalturaLiveStreamService.prototype.add = function(callback, liveStreamEntry, sourceType){
  if(!sourceType)
    sourceType = null;
  var kparams = {};
  this.client.addParam(kparams, "liveStreamEntry", kcb.toParams(liveStreamEntry));
  this.client.addParam(kparams, "sourceType", sourceType);
  this.client.queueServiceActionCall("liveStream", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get live stream entry by ID.
 *  @action get
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
 * @param  entryId  string    Live stream entry id (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.get = function(callback, entryId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("liveStream", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update live stream entry. Only the properties that were set will be updated.
 *  @action update
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
 * @param  entryId  string    Live stream entry id to update (optional).
 * @param  liveStreamEntry  KalturaLiveStreamAdminEntry    Live stream entry metadata to update (optional).
 * @return  KalturaLiveStreamAdminEntry.
 */
KalturaLiveStreamService.prototype.update = function(callback, entryId, liveStreamEntry){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "liveStreamEntry", kcb.toParams(liveStreamEntry));
  this.client.queueServiceActionCall("liveStream", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete a live stream entry.
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
 * @param  entryId  string    Live stream entry id to delete (optional).
 * @return  .
 */
KalturaLiveStreamService.prototype.deleteAction = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("liveStream", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List live stream entries by filter with paging support.
 *  @action list.
 * @param  filter  KalturaLiveStreamEntryFilter    live stream entry filter (optional, default: null).
 * @param  pager  KalturaFilterPager    Pager (optional, default: null).
 * @return  KalturaLiveStreamListResponse.
 */
KalturaLiveStreamService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("liveStream", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update live stream entry thumbnail using a raw jpeg file
 *  @action updateOfflineThumbnailJpeg
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
 * @param  entryId  string    live stream entry id (optional).
 * @param  fileData  file    Jpeg file data (optional).
 * @return  KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailJpeg = function(callback, entryId, fileData){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("liveStream", "updateOfflineThumbnailJpeg", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using url
 *  @action updateOfflineThumbnailFromUrl
 *  @throws KalturaErrors::ENTRY_ID_NOT_FOUND.
 * @param  entryId  string    live stream entry id (optional).
 * @param  url  string    file url (optional).
 * @return  KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailFromUrl = function(callback, entryId, url){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "url", url);
  this.client.queueServiceActionCall("liveStream", "updateOfflineThumbnailFromUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: mediaInfo.
 * The available service actions:
 * @action  list  List media info objects by filter and pager
 *  .
*/
var KalturaMediaInfoService = module.exports.KalturaMediaInfoService = function(client){
  this.init(client);
}
util.inherits(KalturaMediaInfoService, kcb.KalturaServiceBase);
/**
 * List media info objects by filter and pager
 *  .
 * @param  filter  KalturaMediaInfoFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaMediaInfoListResponse.
 */
KalturaMediaInfoService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("mediaInfo", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: media.
 * The available service actions:
 * @action  add  Add entry.
 * @action  addContent  Add content to entry.
 * @action  addFromUrl  Adds new media entry by importing an HTTP or FTP URL.
 *  The entry will be queued for import and then for conversion.
 *  DEPRECATED - use media.add instead.
 * @action  addFromSearchResult  Adds new media entry by importing the media file from a search provider. 
 *  This action should be used with the search service result.
 *  DEPRECATED - use media.add instead.
 * @action  addFromUploadedFile  Add new entry after the specific media file was uploaded and the upload token id exists
 *  DEPRECATED - use media.add instead.
 * @action  addFromRecordedWebcam  Add new entry after the file was recored on the server and the token id exists
 *  DEPRECATED - use media.add instead.
 * @action  addFromEntry  Copy entry into new entry
 *  DEPRECATED - use media.add instead.
 * @action  addFromFlavorAsset  Copy flavor asset into new entry
 *  DEPRECATED - use media.add instead.
 * @action  convert  Convert entry
 *  .
 * @action  get  Get media entry by ID.
 *  .
 * @action  update  Update media entry. Only the properties that were set will be updated.
 *  .
 * @action  updateContent  Replace media content of the entry
 *  .
 * @action  delete  Delete a media entry.
 *  .
 * @action  approveReplace  Approves media replacement
 *  .
 * @action  cancelReplace  Cancels media replacement
 *  .
 * @action  list  List media entries by filter with paging support.
 *  .
 * @action  count  Count media entries by filter.
 *  .
 * @action  upload  Upload a media file to Kaltura, then the file can be used to create a media entry.
 *  DEPRECATED - use upload.upload or uploadToken.add instead.
 * @action  updateThumbnail  Update media entry thumbnail by a specified time offset (In seconds)
 *  If flavor params id not specified, source flavor will be used by default
 *  DEPRECATED.
 * @action  updateThumbnailFromSourceEntry  Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *  If flavor params id not specified, source flavor will be used by default
 *  DEPRECATED.
 * @action  updateThumbnailJpeg  Update media entry thumbnail using a raw jpeg file
 *  DEPRECATED.
 * @action  updateThumbnailFromUrl  Update entry thumbnail using url
 *  DEPRECATED.
 * @action  requestConversion  Request a new conversion job, this can be used to convert the media entry to a different format
 *  .
 * @action  flag  Flag inappropriate media entry for moderation
 *  .
 * @action  reject  Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *  .
 * @action  approve  Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *  .
 * @action  listFlags  List all pending flags for the media entry.
 * @action  anonymousRank  Anonymously rank a media entry, no validation is done on duplicate rankings
 *  .
*/
var KalturaMediaService = module.exports.KalturaMediaService = function(client){
  this.init(client);
}
util.inherits(KalturaMediaService, kcb.KalturaServiceBase);
/**
 * Add entry.
 * @param  entry  KalturaMediaEntry     (optional).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.add = function(callback, entry){
  var kparams = {};
  this.client.addParam(kparams, "entry", kcb.toParams(entry));
  this.client.queueServiceActionCall("media", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add content to entry.
 * @param  entryId  string     (optional).
 * @param  resource  KalturaResource     (optional, default: null).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.addContent = function(callback, entryId, resource){
  if(!resource)
    resource = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  if (resource != null)
    this.client.addParam(kparams, "resource", kcb.toParams(resource));
  this.client.queueServiceActionCall("media", "addContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Adds new media entry by importing an HTTP or FTP URL.
 *  The entry will be queued for import and then for conversion.
 *  DEPRECATED - use media.add instead.
 * @param  mediaEntry  KalturaMediaEntry    Media entry metadata   (optional).
 * @param  url  string    An HTTP or FTP URL (optional).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromUrl = function(callback, mediaEntry, url){
  var kparams = {};
  this.client.addParam(kparams, "mediaEntry", kcb.toParams(mediaEntry));
  this.client.addParam(kparams, "url", url);
  this.client.queueServiceActionCall("media", "addFromUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Adds new media entry by importing the media file from a search provider. 
 *  This action should be used with the search service result.
 *  DEPRECATED - use media.add instead.
 * @param  mediaEntry  KalturaMediaEntry    Media entry metadata (optional, default: null).
 * @param  searchResult  KalturaSearchResult    Result object from search service (optional, default: null).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromSearchResult = function(callback, mediaEntry, searchResult){
  if(!mediaEntry)
    mediaEntry = null;
  if(!searchResult)
    searchResult = null;
  var kparams = {};
  if (mediaEntry != null)
    this.client.addParam(kparams, "mediaEntry", kcb.toParams(mediaEntry));
  if (searchResult != null)
    this.client.addParam(kparams, "searchResult", kcb.toParams(searchResult));
  this.client.queueServiceActionCall("media", "addFromSearchResult", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add new entry after the specific media file was uploaded and the upload token id exists
 *  DEPRECATED - use media.add instead.
 * @param  mediaEntry  KalturaMediaEntry    Media entry metadata (optional).
 * @param  uploadTokenId  string    Upload token id (optional).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromUploadedFile = function(callback, mediaEntry, uploadTokenId){
  var kparams = {};
  this.client.addParam(kparams, "mediaEntry", kcb.toParams(mediaEntry));
  this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
  this.client.queueServiceActionCall("media", "addFromUploadedFile", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add new entry after the file was recored on the server and the token id exists
 *  DEPRECATED - use media.add instead.
 * @param  mediaEntry  KalturaMediaEntry    Media entry metadata (optional).
 * @param  webcamTokenId  string    Token id for the recored webcam file  (optional).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromRecordedWebcam = function(callback, mediaEntry, webcamTokenId){
  var kparams = {};
  this.client.addParam(kparams, "mediaEntry", kcb.toParams(mediaEntry));
  this.client.addParam(kparams, "webcamTokenId", webcamTokenId);
  this.client.queueServiceActionCall("media", "addFromRecordedWebcam", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Copy entry into new entry
 *  DEPRECATED - use media.add instead.
 * @param  sourceEntryId  string    Media entry id to copy from (optional).
 * @param  mediaEntry  KalturaMediaEntry    Media entry metadata (optional, default: null).
 * @param  sourceFlavorParamsId  int    The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromEntry = function(callback, sourceEntryId, mediaEntry, sourceFlavorParamsId){
  if(!mediaEntry)
    mediaEntry = null;
  if(!sourceFlavorParamsId)
    sourceFlavorParamsId = null;
  var kparams = {};
  this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
  if (mediaEntry != null)
    this.client.addParam(kparams, "mediaEntry", kcb.toParams(mediaEntry));
  this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
  this.client.queueServiceActionCall("media", "addFromEntry", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry
 *  DEPRECATED - use media.add instead.
 * @param  sourceFlavorAssetId  string    Flavor asset id to be used as the new entry source (optional).
 * @param  mediaEntry  KalturaMediaEntry    Media entry metadata (optional, default: null).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, mediaEntry){
  if(!mediaEntry)
    mediaEntry = null;
  var kparams = {};
  this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
  if (mediaEntry != null)
    this.client.addParam(kparams, "mediaEntry", kcb.toParams(mediaEntry));
  this.client.queueServiceActionCall("media", "addFromFlavorAsset", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Convert entry
 *  .
 * @param  entryId  string    Media entry id (optional).
 * @param  conversionProfileId  int     (optional, default: null).
 * @param  dynamicConversionAttributes  array     (optional, default: null).
 * @return  int.
 */
KalturaMediaService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
  if(!conversionProfileId)
    conversionProfileId = null;
  if(!dynamicConversionAttributes)
    dynamicConversionAttributes = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
  if(dynamicConversionAttributes != null)
  for(var index in dynamicConversionAttributes)
  {
    var obj = dynamicConversionAttributes[index];
    this.client.addParam(kparams, "dynamicConversionAttributes:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("media", "convert", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get media entry by ID.
 *  .
 * @param  entryId  string    Media entry id (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.get = function(callback, entryId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("media", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update media entry. Only the properties that were set will be updated.
 *  .
 * @param  entryId  string    Media entry id to update (optional).
 * @param  mediaEntry  KalturaMediaEntry    Media entry metadata to update (optional).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.update = function(callback, entryId, mediaEntry){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "mediaEntry", kcb.toParams(mediaEntry));
  this.client.queueServiceActionCall("media", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Replace media content of the entry
 *  .
 * @param  entryId  string    Media entry id to update (optional).
 * @param  resource  KalturaResource    Resource to be used to replace entry media content (optional).
 * @param  conversionProfileId  int    The conversion profile id to be used on the entry (optional, default: null).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId){
  if(!conversionProfileId)
    conversionProfileId = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "resource", kcb.toParams(resource));
  this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
  this.client.queueServiceActionCall("media", "updateContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete a media entry.
 *  .
 * @param  entryId  string    Media entry id to delete (optional).
 * @return  .
 */
KalturaMediaService.prototype.deleteAction = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("media", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Approves media replacement
 *  .
 * @param  entryId  string    Media entry id to replace (optional).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.approveReplace = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("media", "approveReplace", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Cancels media replacement
 *  .
 * @param  entryId  string    Media entry id to cancel (optional).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.cancelReplace = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("media", "cancelReplace", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List media entries by filter with paging support.
 *  .
 * @param  filter  KalturaMediaEntryFilter    Media entry filter (optional, default: null).
 * @param  pager  KalturaFilterPager    Pager (optional, default: null).
 * @return  KalturaMediaListResponse.
 */
KalturaMediaService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("media", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Count media entries by filter.
 *  .
 * @param  filter  KalturaMediaEntryFilter    Media entry filter (optional, default: null).
 * @return  int.
 */
KalturaMediaService.prototype.count = function(callback, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("media", "count", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Upload a media file to Kaltura, then the file can be used to create a media entry.
 *  DEPRECATED - use upload.upload or uploadToken.add instead.
 * @param  fileData  file    The file data (optional).
 * @return  string.
 */
KalturaMediaService.prototype.upload = function(callback, fileData){
  var kparams = {};
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("media", "upload", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail by a specified time offset (In seconds)
 *  If flavor params id not specified, source flavor will be used by default
 *  DEPRECATED.
 * @param  entryId  string    Media entry id (optional).
 * @param  timeOffset  int    Time offset (in seconds) (optional).
 * @param  flavorParamsId  int    The flavor params id to be used (optional, default: null).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnail = function(callback, entryId, timeOffset, flavorParamsId){
  if(!flavorParamsId)
    flavorParamsId = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "timeOffset", timeOffset);
  this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
  this.client.queueServiceActionCall("media", "updateThumbnail", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *  If flavor params id not specified, source flavor will be used by default
 *  DEPRECATED.
 * @param  entryId  string    Media entry id (optional).
 * @param  sourceEntryId  string    Media entry id (optional).
 * @param  timeOffset  int    Time offset (in seconds) (optional).
 * @param  flavorParamsId  int    The flavor params id to be used (optional, default: null).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset, flavorParamsId){
  if(!flavorParamsId)
    flavorParamsId = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
  this.client.addParam(kparams, "timeOffset", timeOffset);
  this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
  this.client.queueServiceActionCall("media", "updateThumbnailFromSourceEntry", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail using a raw jpeg file
 *  DEPRECATED.
 * @param  entryId  string    Media entry id (optional).
 * @param  fileData  file    Jpeg file data (optional).
 * @return  KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("media", "updateThumbnailJpeg", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using url
 *  DEPRECATED.
 * @param  entryId  string    Media entry id (optional).
 * @param  url  string    file url (optional).
 * @return  KalturaBaseEntry.
 */
KalturaMediaService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "url", url);
  this.client.queueServiceActionCall("media", "updateThumbnailFromUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Request a new conversion job, this can be used to convert the media entry to a different format
 *  .
 * @param  entryId  string    Media entry id (optional).
 * @param  fileFormat  string    Format to convert (optional).
 * @return  int.
 */
KalturaMediaService.prototype.requestConversion = function(callback, entryId, fileFormat){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "fileFormat", fileFormat);
  this.client.queueServiceActionCall("media", "requestConversion", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Flag inappropriate media entry for moderation
 *  .
 * @param  moderationFlag  KalturaModerationFlag     (optional).
 * @return  .
 */
KalturaMediaService.prototype.flag = function(callback, moderationFlag){
  var kparams = {};
  this.client.addParam(kparams, "moderationFlag", kcb.toParams(moderationFlag));
  this.client.queueServiceActionCall("media", "flag", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *  .
 * @param  entryId  string     (optional).
 * @return  .
 */
KalturaMediaService.prototype.reject = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("media", "reject", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *  .
 * @param  entryId  string     (optional).
 * @return  .
 */
KalturaMediaService.prototype.approve = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("media", "approve", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List all pending flags for the media entry.
 * @param  entryId  string     (optional).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaModerationFlagListResponse.
 */
KalturaMediaService.prototype.listFlags = function(callback, entryId, pager){
  if(!pager)
    pager = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("media", "listFlags", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Anonymously rank a media entry, no validation is done on duplicate rankings
 *  .
 * @param  entryId  string     (optional).
 * @param  rank  int     (optional).
 * @return  .
 */
KalturaMediaService.prototype.anonymousRank = function(callback, entryId, rank){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "rank", rank);
  this.client.queueServiceActionCall("media", "anonymousRank", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: mixing.
 * The available service actions:
 * @action  add  Adds a new mix.
 *  If the dataContent is null, a default timeline will be created.
 *  .
 * @action  get  Get mix entry by id.
 *  .
 * @action  update  Update mix entry. Only the properties that were set will be updated.
 *  .
 * @action  delete  Delete a mix entry..
 * @action  list  List entries by filter with paging support.
 *  Return parameter is an array of mix entries.
 *  .
 * @action  count  Count mix entries by filter.
 *  .
 * @action  clone  Clones an existing mix..
 * @action  appendMediaEntry  Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 *  .
 * @action  requestFlattening  Request a new flattening job, flattening is used to convert a video mix to a video file. 
 *  .
 * @action  getMixesByMediaId  Get the mixes in which the media entry is included.
 * @action  getReadyMediaEntries  Get all ready media entries that exist in the given mix id.
 * @action  anonymousRank  Anonymously rank a mix entry, no validation is done on duplicate rankings
 *  .
*/
var KalturaMixingService = module.exports.KalturaMixingService = function(client){
  this.init(client);
}
util.inherits(KalturaMixingService, kcb.KalturaServiceBase);
/**
 * Adds a new mix.
 *  If the dataContent is null, a default timeline will be created.
 *  .
 * @param  mixEntry  KalturaMixEntry    Mix entry metadata (optional).
 * @return  KalturaMixEntry.
 */
KalturaMixingService.prototype.add = function(callback, mixEntry){
  var kparams = {};
  this.client.addParam(kparams, "mixEntry", kcb.toParams(mixEntry));
  this.client.queueServiceActionCall("mixing", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get mix entry by id.
 *  .
 * @param  entryId  string    Mix entry id (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaMixEntry.
 */
KalturaMixingService.prototype.get = function(callback, entryId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("mixing", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update mix entry. Only the properties that were set will be updated.
 *  .
 * @param  entryId  string    Mix entry id to update (optional).
 * @param  mixEntry  KalturaMixEntry    Mix entry metadata to update (optional).
 * @return  KalturaMixEntry.
 */
KalturaMixingService.prototype.update = function(callback, entryId, mixEntry){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "mixEntry", kcb.toParams(mixEntry));
  this.client.queueServiceActionCall("mixing", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete a mix entry..
 * @param  entryId  string    Mix entry id to delete (optional).
 * @return  .
 */
KalturaMixingService.prototype.deleteAction = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("mixing", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List entries by filter with paging support.
 *  Return parameter is an array of mix entries.
 *  .
 * @param  filter  KalturaMixEntryFilter    Mix entry filter (optional, default: null).
 * @param  pager  KalturaFilterPager    Pager (optional, default: null).
 * @return  KalturaMixListResponse.
 */
KalturaMixingService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("mixing", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Count mix entries by filter.
 *  .
 * @param  filter  KalturaMediaEntryFilter    Media entry filter (optional, default: null).
 * @return  int.
 */
KalturaMixingService.prototype.count = function(callback, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("mixing", "count", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Clones an existing mix..
 * @param  entryId  string    Mix entry id to clone (optional).
 * @return  KalturaMixEntry.
 */
KalturaMixingService.prototype.cloneAction = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("mixing", "clone", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 *  .
 * @param  mixEntryId  string    Mix entry to append to its timeline (optional).
 * @param  mediaEntryId  string    Media entry to append to the timeline (optional).
 * @return  KalturaMixEntry.
 */
KalturaMixingService.prototype.appendMediaEntry = function(callback, mixEntryId, mediaEntryId){
  var kparams = {};
  this.client.addParam(kparams, "mixEntryId", mixEntryId);
  this.client.addParam(kparams, "mediaEntryId", mediaEntryId);
  this.client.queueServiceActionCall("mixing", "appendMediaEntry", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Request a new flattening job, flattening is used to convert a video mix to a video file. 
 *  .
 * @param  entryId  string    Mix entry id (optional).
 * @param  fileFormat  string    Format to convert (optional).
 * @param  version  int    Version to flatten (If not set, latest will be used) (optional, default: -1).
 * @return  int.
 */
KalturaMixingService.prototype.requestFlattening = function(callback, entryId, fileFormat, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "fileFormat", fileFormat);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("mixing", "requestFlattening", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get the mixes in which the media entry is included.
 * @param  mediaEntryId  string     (optional).
 * @return  array.
 */
KalturaMixingService.prototype.getMixesByMediaId = function(callback, mediaEntryId){
  var kparams = {};
  this.client.addParam(kparams, "mediaEntryId", mediaEntryId);
  this.client.queueServiceActionCall("mixing", "getMixesByMediaId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get all ready media entries that exist in the given mix id.
 * @param  mixId  string     (optional).
 * @param  version  int    Desired version to get the data from (optional, default: -1).
 * @return  array.
 */
KalturaMixingService.prototype.getReadyMediaEntries = function(callback, mixId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "mixId", mixId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("mixing", "getReadyMediaEntries", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Anonymously rank a mix entry, no validation is done on duplicate rankings
 *  .
 * @param  entryId  string     (optional).
 * @param  rank  int     (optional).
 * @return  .
 */
KalturaMixingService.prototype.anonymousRank = function(callback, entryId, rank){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "rank", rank);
  this.client.queueServiceActionCall("mixing", "anonymousRank", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: notification.
 * The available service actions:
 * @action  getClientNotification  Return the notifications for a specific entry id and type
 *  .
*/
var KalturaNotificationService = module.exports.KalturaNotificationService = function(client){
  this.init(client);
}
util.inherits(KalturaNotificationService, kcb.KalturaServiceBase);
/**
 * Return the notifications for a specific entry id and type
 *  .
 * @param  entryId  string     (optional).
 * @param  type  int     (optional, enum: KalturaNotificationType).
 * @return  KalturaClientNotification.
 */
KalturaNotificationService.prototype.getClientNotification = function(callback, entryId, type){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "type", type);
  this.client.queueServiceActionCall("notification", "getClientNotification", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: partner.
 * The available service actions:
 * @action  register  Register to Kaltura's partner program
 *  .
 * @action  update  Update details and settings of you existing partner
 *  .
 * @action  getSecrets  Retrieve partner secret and admin secret
 *  .
 * @action  getInfo  Retrieve all info about partner
 *  This service gets no parameters, and is using the KS to know which partnerId info should be returned
 *  .
 * @action  getUsage  Get usage statistics for a partner
 *  Calculation is done according to partner's package
 *  Additional data returned is a graph points of streaming usage in a timeframe
 *  The resolution can be "days" or "months"
 *  .
*/
var KalturaPartnerService = module.exports.KalturaPartnerService = function(client){
  this.init(client);
}
util.inherits(KalturaPartnerService, kcb.KalturaServiceBase);
/**
 * Register to Kaltura's partner program
 *  .
 * @param  partner  KalturaPartner     (optional).
 * @param  cmsPassword  string     (optional).
 * @return  KalturaPartner.
 */
KalturaPartnerService.prototype.register = function(callback, partner, cmsPassword){
  if(!cmsPassword)
    cmsPassword = "";
  var kparams = {};
  this.client.addParam(kparams, "partner", kcb.toParams(partner));
  this.client.addParam(kparams, "cmsPassword", cmsPassword);
  this.client.queueServiceActionCall("partner", "register", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update details and settings of you existing partner
 *  .
 * @param  partner  KalturaPartner     (optional).
 * @param  allowEmpty  bool     (optional, default: false).
 * @return  KalturaPartner.
 */
KalturaPartnerService.prototype.update = function(callback, partner, allowEmpty){
  if(!allowEmpty)
    allowEmpty = false;
  var kparams = {};
  this.client.addParam(kparams, "partner", kcb.toParams(partner));
  this.client.addParam(kparams, "allowEmpty", allowEmpty);
  this.client.queueServiceActionCall("partner", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve partner secret and admin secret
 *  .
 * @param  partnerId  int     (optional).
 * @param  adminEmail  string     (optional).
 * @param  cmsPassword  string     (optional).
 * @return  KalturaPartner.
 */
KalturaPartnerService.prototype.getSecrets = function(callback, partnerId, adminEmail, cmsPassword){
  var kparams = {};
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.addParam(kparams, "adminEmail", adminEmail);
  this.client.addParam(kparams, "cmsPassword", cmsPassword);
  this.client.queueServiceActionCall("partner", "getSecrets", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve all info about partner
 *  This service gets no parameters, and is using the KS to know which partnerId info should be returned
 *  .
 * @return  KalturaPartner.
 */
KalturaPartnerService.prototype.getInfo = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("partner", "getInfo", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get usage statistics for a partner
 *  Calculation is done according to partner's package
 *  Additional data returned is a graph points of streaming usage in a timeframe
 *  The resolution can be "days" or "months"
 *  .
 * @param  year  int     (optional).
 * @param  month  int     (optional, default: 1).
 * @param  resolution  string    accepted values are "days" or "months" (optional, default: days).
 * @return  KalturaPartnerUsage.
 */
KalturaPartnerService.prototype.getUsage = function(callback, year, month, resolution){
  if(!year)
    year = "";
  if(!month)
    month = 1;
  if(!resolution)
    resolution = "days";
  var kparams = {};
  this.client.addParam(kparams, "year", year);
  this.client.addParam(kparams, "month", month);
  this.client.addParam(kparams, "resolution", resolution);
  this.client.queueServiceActionCall("partner", "getUsage", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: permissionItem.
 * The available service actions:
 * @action  add  Allows you to add a new KalturaPermissionItem object
 *  .
 * @action  get  Retrieve a KalturaPermissionItem object by ID
 *  .
 * @action  update  Update an existing KalturaPermissionItem object
 *  .
 * @action  delete  Mark the KalturaPermissionItem object as deleted
 *  .
 * @action  list  List KalturaPermissionItem objects
 *  .
*/
var KalturaPermissionItemService = module.exports.KalturaPermissionItemService = function(client){
  this.init(client);
}
util.inherits(KalturaPermissionItemService, kcb.KalturaServiceBase);
/**
 * Allows you to add a new KalturaPermissionItem object
 *  .
 * @param  permissionItem  KalturaPermissionItem     (optional).
 * @return  KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.add = function(callback, permissionItem){
  var kparams = {};
  this.client.addParam(kparams, "permissionItem", kcb.toParams(permissionItem));
  this.client.queueServiceActionCall("permissionItem", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaPermissionItem object by ID
 *  .
 * @param  permissionItemId  int     (optional).
 * @return  KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.get = function(callback, permissionItemId){
  var kparams = {};
  this.client.addParam(kparams, "permissionItemId", permissionItemId);
  this.client.queueServiceActionCall("permissionItem", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing KalturaPermissionItem object
 *  .
 * @param  permissionItemId  int     (optional).
 * @param  permissionItem  KalturaPermissionItem    Id (optional).
 * @return  KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.update = function(callback, permissionItemId, permissionItem){
  var kparams = {};
  this.client.addParam(kparams, "permissionItemId", permissionItemId);
  this.client.addParam(kparams, "permissionItem", kcb.toParams(permissionItem));
  this.client.queueServiceActionCall("permissionItem", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Mark the KalturaPermissionItem object as deleted
 *  .
 * @param  permissionItemId  int     (optional).
 * @return  KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.deleteAction = function(callback, permissionItemId){
  var kparams = {};
  this.client.addParam(kparams, "permissionItemId", permissionItemId);
  this.client.queueServiceActionCall("permissionItem", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List KalturaPermissionItem objects
 *  .
 * @param  filter  KalturaPermissionItemFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaPermissionItemListResponse.
 */
KalturaPermissionItemService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("permissionItem", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: permission.
 * The available service actions:
 * @action  add  Allows you to add a new KalturaPermission object
 *  .
 * @action  get  Retrieve a KalturaPermission object by ID
 *  .
 * @action  update  Update an existing KalturaPermission object
 *  .
 * @action  delete  Mark the KalturaPermission object as deleted
 *  .
 * @action  list  List KalturaPermission objects
 *  .
 * @action  getCurrentPermissions  Return a list of current sessions's allowed permission names
 *  .
*/
var KalturaPermissionService = module.exports.KalturaPermissionService = function(client){
  this.init(client);
}
util.inherits(KalturaPermissionService, kcb.KalturaServiceBase);
/**
 * Allows you to add a new KalturaPermission object
 *  .
 * @param  permission  KalturaPermission     (optional).
 * @return  KalturaPermission.
 */
KalturaPermissionService.prototype.add = function(callback, permission){
  var kparams = {};
  this.client.addParam(kparams, "permission", kcb.toParams(permission));
  this.client.queueServiceActionCall("permission", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaPermission object by ID
 *  .
 * @param  permissionName  string     (optional).
 * @return  KalturaPermission.
 */
KalturaPermissionService.prototype.get = function(callback, permissionName){
  var kparams = {};
  this.client.addParam(kparams, "permissionName", permissionName);
  this.client.queueServiceActionCall("permission", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing KalturaPermission object
 *  .
 * @param  permissionName  string     (optional).
 * @param  permission  KalturaPermission    Name (optional).
 * @return  KalturaPermission.
 */
KalturaPermissionService.prototype.update = function(callback, permissionName, permission){
  var kparams = {};
  this.client.addParam(kparams, "permissionName", permissionName);
  this.client.addParam(kparams, "permission", kcb.toParams(permission));
  this.client.queueServiceActionCall("permission", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Mark the KalturaPermission object as deleted
 *  .
 * @param  permissionName  string     (optional).
 * @return  KalturaPermission.
 */
KalturaPermissionService.prototype.deleteAction = function(callback, permissionName){
  var kparams = {};
  this.client.addParam(kparams, "permissionName", permissionName);
  this.client.queueServiceActionCall("permission", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List KalturaPermission objects
 *  .
 * @param  filter  KalturaPermissionFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaPermissionListResponse.
 */
KalturaPermissionService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("permission", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Return a list of current sessions's allowed permission names
 *  .
 * @return  string.
 */
KalturaPermissionService.prototype.getCurrentPermissions = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("permission", "getCurrentPermissions", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: playlist.
 * The available service actions:
 * @action  add  Add new playlist
 *  Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *  .
 * @action  get  Retrieve a playlist
 *  .
 * @action  update  Update existing playlist
 *  Note - you cannot change playlist type. updated playlist must be of the same type.
 *  .
 * @action  delete  Delete existing playlist
 *  .
 * @action  clone  Clone an existing playlist
 *  .
 * @action  list  List available playlists
 *  .
 * @action  execute  Retrieve playlist for playing purpose
 *  .
 * @action  executeFromContent  Retrieve playlist for playing purpose, based on content
 *  .
 * @action  executeFromFilters  Revrieve playlist for playing purpose, based on media entry filters
 *  .
 * @action  getStatsFromContent  Retrieve playlist statistics
 *  .
*/
var KalturaPlaylistService = module.exports.KalturaPlaylistService = function(client){
  this.init(client);
}
util.inherits(KalturaPlaylistService, kcb.KalturaServiceBase);
/**
 * Add new playlist
 *  Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *  .
 * @param  playlist  KalturaPlaylist     (optional).
 * @param  updateStats  bool     (optional, default: false).
 * @return  KalturaPlaylist.
 */
KalturaPlaylistService.prototype.add = function(callback, playlist, updateStats){
  if(!updateStats)
    updateStats = false;
  var kparams = {};
  this.client.addParam(kparams, "playlist", kcb.toParams(playlist));
  this.client.addParam(kparams, "updateStats", updateStats);
  this.client.queueServiceActionCall("playlist", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a playlist
 *  .
 * @param  id  string     (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaPlaylist.
 */
KalturaPlaylistService.prototype.get = function(callback, id, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("playlist", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update existing playlist
 *  Note - you cannot change playlist type. updated playlist must be of the same type.
 *  .
 * @param  id  string     (optional).
 * @param  playlist  KalturaPlaylist     (optional).
 * @param  updateStats  bool      (optional, default: false).
 * @return  KalturaPlaylist.
 */
KalturaPlaylistService.prototype.update = function(callback, id, playlist, updateStats){
  if(!updateStats)
    updateStats = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "playlist", kcb.toParams(playlist));
  this.client.addParam(kparams, "updateStats", updateStats);
  this.client.queueServiceActionCall("playlist", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete existing playlist
 *  .
 * @param  id  string     (optional).
 * @return  .
 */
KalturaPlaylistService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("playlist", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Clone an existing playlist
 *  .
 * @param  id  string     Id of the playlist to clone (optional).
 * @param  newPlaylist  KalturaPlaylist    Parameters defined here will override the ones in the cloned playlist (optional, default: null).
 * @return  KalturaPlaylist.
 */
KalturaPlaylistService.prototype.cloneAction = function(callback, id, newPlaylist){
  if(!newPlaylist)
    newPlaylist = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  if (newPlaylist != null)
    this.client.addParam(kparams, "newPlaylist", kcb.toParams(newPlaylist));
  this.client.queueServiceActionCall("playlist", "clone", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List available playlists
 *  .
 * @param  filter  KalturaPlaylistFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaPlaylistListResponse.
 */
KalturaPlaylistService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("playlist", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve playlist for playing purpose
 *  .
 * @param  id  string     (optional).
 * @param  detailed  string     (optional).
 * @return  array.
 */
KalturaPlaylistService.prototype.execute = function(callback, id, detailed){
  if(!detailed)
    detailed = "";
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "detailed", detailed);
  this.client.queueServiceActionCall("playlist", "execute", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve playlist for playing purpose, based on content
 *  .
 * @param  playlistType  int      (optional, enum: KalturaPlaylistType).
 * @param  playlistContent  string     (optional).
 * @param  detailed  string     (optional).
 * @return  array.
 */
KalturaPlaylistService.prototype.executeFromContent = function(callback, playlistType, playlistContent, detailed){
  if(!detailed)
    detailed = "";
  var kparams = {};
  this.client.addParam(kparams, "playlistType", playlistType);
  this.client.addParam(kparams, "playlistContent", playlistContent);
  this.client.addParam(kparams, "detailed", detailed);
  this.client.queueServiceActionCall("playlist", "executeFromContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Revrieve playlist for playing purpose, based on media entry filters
 *  .
 * @param  filters  array     (optional).
 * @param  totalResults  int     (optional).
 * @param  detailed  string     (optional).
 * @return  array.
 */
KalturaPlaylistService.prototype.executeFromFilters = function(callback, filters, totalResults, detailed){
  if(!detailed)
    detailed = "";
  var kparams = {};
for(var index in filters)
{
  var obj = filters[index];
  this.client.addParam(kparams, "filters:" + index, kcb.toParams(obj));
}
  this.client.addParam(kparams, "totalResults", totalResults);
  this.client.addParam(kparams, "detailed", detailed);
  this.client.queueServiceActionCall("playlist", "executeFromFilters", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve playlist statistics
 *  .
 * @param  playlistType  int      (optional, enum: KalturaPlaylistType).
 * @param  playlistContent  string     (optional).
 * @return  KalturaPlaylist.
 */
KalturaPlaylistService.prototype.getStatsFromContent = function(callback, playlistType, playlistContent){
  var kparams = {};
  this.client.addParam(kparams, "playlistType", playlistType);
  this.client.addParam(kparams, "playlistContent", playlistContent);
  this.client.queueServiceActionCall("playlist", "getStatsFromContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: report.
 * The available service actions:
 * @action  getGraphs  report getGraphs action allows to get a graph data for a specific report. 
 *  .
 * @action  getTotal  report getTotal action allows to get a graph data for a specific report. 
 *  .
 * @action  getTable  report getTable action allows to get a graph data for a specific report. 
 *  .
 * @action  getUrlForReportAsCsv  will create a Csv file for the given report and return the URL to access it
 *  .
 * @action  execute  .
*/
var KalturaReportService = module.exports.KalturaReportService = function(client){
  this.init(client);
}
util.inherits(KalturaReportService, kcb.KalturaServiceBase);
/**
 * report getGraphs action allows to get a graph data for a specific report. 
 *  .
 * @param  reportType  int      (optional, enum: KalturaReportType).
 * @param  reportInputFilter  KalturaReportInputFilter     (optional).
 * @param  dimension  string     (optional, default: null).
 * @param  objectIds  string    - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return  array.
 */
KalturaReportService.prototype.getGraphs = function(callback, reportType, reportInputFilter, dimension, objectIds){
  if(!dimension)
    dimension = null;
  if(!objectIds)
    objectIds = null;
  var kparams = {};
  this.client.addParam(kparams, "reportType", reportType);
  this.client.addParam(kparams, "reportInputFilter", kcb.toParams(reportInputFilter));
  this.client.addParam(kparams, "dimension", dimension);
  this.client.addParam(kparams, "objectIds", objectIds);
  this.client.queueServiceActionCall("report", "getGraphs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * report getTotal action allows to get a graph data for a specific report. 
 *  .
 * @param  reportType  int      (optional, enum: KalturaReportType).
 * @param  reportInputFilter  KalturaReportInputFilter     (optional).
 * @param  objectIds  string    - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return  KalturaReportTotal.
 */
KalturaReportService.prototype.getTotal = function(callback, reportType, reportInputFilter, objectIds){
  if(!objectIds)
    objectIds = null;
  var kparams = {};
  this.client.addParam(kparams, "reportType", reportType);
  this.client.addParam(kparams, "reportInputFilter", kcb.toParams(reportInputFilter));
  this.client.addParam(kparams, "objectIds", objectIds);
  this.client.queueServiceActionCall("report", "getTotal", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * report getTable action allows to get a graph data for a specific report. 
 *  .
 * @param  reportType  int      (optional, enum: KalturaReportType).
 * @param  reportInputFilter  KalturaReportInputFilter     (optional).
 * @param  pager  KalturaFilterPager     (optional).
 * @param  order  string     (optional, default: null).
 * @param  objectIds  string    - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return  KalturaReportTable.
 */
KalturaReportService.prototype.getTable = function(callback, reportType, reportInputFilter, pager, order, objectIds){
  if(!order)
    order = null;
  if(!objectIds)
    objectIds = null;
  var kparams = {};
  this.client.addParam(kparams, "reportType", reportType);
  this.client.addParam(kparams, "reportInputFilter", kcb.toParams(reportInputFilter));
  this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.addParam(kparams, "order", order);
  this.client.addParam(kparams, "objectIds", objectIds);
  this.client.queueServiceActionCall("report", "getTable", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * will create a Csv file for the given report and return the URL to access it
 *  .
 * @param  reportTitle  string    The title of the report to display at top of CSV  (optional).
 * @param  reportText  string    The text of the filter of the report (optional).
 * @param  headers  string    The headers of the columns - a map between the enumerations on the server side and the their display text   (optional).
 * @param  reportType  int      (optional, enum: KalturaReportType).
 * @param  reportInputFilter  KalturaReportInputFilter     (optional).
 * @param  dimension  string    	   (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @param  order  string     (optional, default: null).
 * @param  objectIds  string    - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return  string.
 */
KalturaReportService.prototype.getUrlForReportAsCsv = function(callback, reportTitle, reportText, headers, reportType, reportInputFilter, dimension, pager, order, objectIds){
  if(!dimension)
    dimension = null;
  if(!pager)
    pager = null;
  if(!order)
    order = null;
  if(!objectIds)
    objectIds = null;
  var kparams = {};
  this.client.addParam(kparams, "reportTitle", reportTitle);
  this.client.addParam(kparams, "reportText", reportText);
  this.client.addParam(kparams, "headers", headers);
  this.client.addParam(kparams, "reportType", reportType);
  this.client.addParam(kparams, "reportInputFilter", kcb.toParams(reportInputFilter));
  this.client.addParam(kparams, "dimension", dimension);
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.addParam(kparams, "order", order);
  this.client.addParam(kparams, "objectIds", objectIds);
  this.client.queueServiceActionCall("report", "getUrlForReportAsCsv", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  id  int     (optional).
 * @param  params  array     (optional, default: null).
 * @return  KalturaReportResponse.
 */
KalturaReportService.prototype.execute = function(callback, id, params){
  if(!params)
    params = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  if(params != null)
  for(var index in params)
  {
    var obj = params[index];
    this.client.addParam(kparams, "params:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("report", "execute", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: schema.
 * The available service actions:
*/
var KalturaSchemaService = module.exports.KalturaSchemaService = function(client){
  this.init(client);
}
util.inherits(KalturaSchemaService, kcb.KalturaServiceBase);

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: search.
 * The available service actions:
 * @action  search  Search for media in one of the supported media providers
 *  .
 * @action  getMediaInfo  Retrieve extra information about media found in search action
 *  Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 *  .
 * @action  searchUrl  Search for media given a specific URL
 *  Kaltura supports a searchURL action on some of the media providers.
 *  This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *  .
 * @action  externalLogin  .
*/
var KalturaSearchService = module.exports.KalturaSearchService = function(client){
  this.init(client);
}
util.inherits(KalturaSearchService, kcb.KalturaServiceBase);
/**
 * Search for media in one of the supported media providers
 *  .
 * @param  search  KalturaSearch    A KalturaSearch object contains the search keywords, media provider and media type (optional).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaSearchResultResponse.
 */
KalturaSearchService.prototype.search = function(callback, search, pager){
  if(!pager)
    pager = null;
  var kparams = {};
  this.client.addParam(kparams, "search", kcb.toParams(search));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("search", "search", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve extra information about media found in search action
 *  Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 *  .
 * @param  searchResult  KalturaSearchResult    KalturaSearchResult object extends KalturaSearch and has all fields required for media:add (optional).
 * @return  KalturaSearchResult.
 */
KalturaSearchService.prototype.getMediaInfo = function(callback, searchResult){
  var kparams = {};
  this.client.addParam(kparams, "searchResult", kcb.toParams(searchResult));
  this.client.queueServiceActionCall("search", "getMediaInfo", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Search for media given a specific URL
 *  Kaltura supports a searchURL action on some of the media providers.
 *  This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *  .
 * @param  mediaType  int     (optional, enum: KalturaMediaType).
 * @param  url  string     (optional).
 * @return  KalturaSearchResult.
 */
KalturaSearchService.prototype.searchUrl = function(callback, mediaType, url){
  var kparams = {};
  this.client.addParam(kparams, "mediaType", mediaType);
  this.client.addParam(kparams, "url", url);
  this.client.queueServiceActionCall("search", "searchUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  searchSource  int     (optional, enum: KalturaSearchProviderType).
 * @param  userName  string     (optional).
 * @param  password  string     (optional).
 * @return  KalturaSearchAuthData.
 */
KalturaSearchService.prototype.externalLogin = function(callback, searchSource, userName, password){
  var kparams = {};
  this.client.addParam(kparams, "searchSource", searchSource);
  this.client.addParam(kparams, "userName", userName);
  this.client.addParam(kparams, "password", password);
  this.client.queueServiceActionCall("search", "externalLogin", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: session.
 * The available service actions:
 * @action  start  Start a session with Kaltura's server.
 *  The result KS is the session key that you should pass to all services that requires a ticket.
 *  .
 * @action  end  End a session with the Kaltura server, making the current KS invalid.
 *  .
 * @action  impersonate  Start an impersonated session with Kaltura's server.
 *  The result KS is the session key that you should pass to all services that requires a ticket.
 *  .
 * @action  startWidgetSession  Start a session for Kaltura's flash widgets
 *  .
*/
var KalturaSessionService = module.exports.KalturaSessionService = function(client){
  this.init(client);
}
util.inherits(KalturaSessionService, kcb.KalturaServiceBase);
/**
 * Start a session with Kaltura's server.
 *  The result KS is the session key that you should pass to all services that requires a ticket.
 *  .
 * @param  secret  string    Remember to provide the correct secret according to the sessionType you want (optional).
 * @param  userId  string     (optional).
 * @param  type  int    Regular session or Admin session (optional, enum: KalturaSessionType).
 * @param  partnerId  int     (optional, default: null).
 * @param  expiry  int    KS expiry time in seconds (optional, default: 86400).
 * @param  privileges  string     (optional, default: null).
 * @return  string.
 */
KalturaSessionService.prototype.start = function(callback, secret, userId, type, partnerId, expiry, privileges){
  if(!userId)
    userId = "";
  if(!type)
    type = 0;
  if(!partnerId)
    partnerId = null;
  if(!expiry)
    expiry = 86400;
  if(!privileges)
    privileges = null;
  var kparams = {};
  this.client.addParam(kparams, "secret", secret);
  this.client.addParam(kparams, "userId", userId);
  this.client.addParam(kparams, "type", type);
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.addParam(kparams, "expiry", expiry);
  this.client.addParam(kparams, "privileges", privileges);
  this.client.queueServiceActionCall("session", "start", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * End a session with the Kaltura server, making the current KS invalid.
 *  .
 * @return  .
 */
KalturaSessionService.prototype.end = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("session", "end", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Start an impersonated session with Kaltura's server.
 *  The result KS is the session key that you should pass to all services that requires a ticket.
 *  .
 * @param  secret  string    Remember to provide the correct secret according to the sessionType you want (optional).
 * @param  impersonatedPartnerId  int     (optional).
 * @param  userId  string     (optional).
 * @param  type  int    Regular session or Admin session (optional, enum: KalturaSessionType).
 * @param  partnerId  int     (optional, default: null).
 * @param  expiry  int    KS expiry time in seconds (optional, default: 86400).
 * @param  privileges  string     (optional, default: null).
 * @return  string.
 */
KalturaSessionService.prototype.impersonate = function(callback, secret, impersonatedPartnerId, userId, type, partnerId, expiry, privileges){
  if(!userId)
    userId = "";
  if(!type)
    type = 0;
  if(!partnerId)
    partnerId = null;
  if(!expiry)
    expiry = 86400;
  if(!privileges)
    privileges = null;
  var kparams = {};
  this.client.addParam(kparams, "secret", secret);
  this.client.addParam(kparams, "impersonatedPartnerId", impersonatedPartnerId);
  this.client.addParam(kparams, "userId", userId);
  this.client.addParam(kparams, "type", type);
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.addParam(kparams, "expiry", expiry);
  this.client.addParam(kparams, "privileges", privileges);
  this.client.queueServiceActionCall("session", "impersonate", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Start a session for Kaltura's flash widgets
 *  .
 * @param  widgetId  string     (optional).
 * @param  expiry  int     (optional, default: 86400).
 * @return  KalturaStartWidgetSessionResponse.
 */
KalturaSessionService.prototype.startWidgetSession = function(callback, widgetId, expiry){
  if(!expiry)
    expiry = 86400;
  var kparams = {};
  this.client.addParam(kparams, "widgetId", widgetId);
  this.client.addParam(kparams, "expiry", expiry);
  this.client.queueServiceActionCall("session", "startWidgetSession", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: stats.
 * The available service actions:
 * @action  collect  Will write to the event log a single line representing the event
 *  KalturaStatsEvent $event
 *  .
 * @action  kmcCollect  Will collect the kmcEvent sent form the KMC client
 *  .
 * @action  reportKceError  .
*/
var KalturaStatsService = module.exports.KalturaStatsService = function(client){
  this.init(client);
}
util.inherits(KalturaStatsService, kcb.KalturaServiceBase);
/**
 * Will write to the event log a single line representing the event
 *  KalturaStatsEvent $event
 *  .
 * @param  event  KalturaStatsEvent     (optional).
 * @return  .
 */
KalturaStatsService.prototype.collect = function(callback, event){
  var kparams = {};
  this.client.addParam(kparams, "event", kcb.toParams(event));
  this.client.queueServiceActionCall("stats", "collect", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Will collect the kmcEvent sent form the KMC client
 *  .
 * @param  kmcEvent  KalturaStatsKmcEvent     (optional).
 * @return  .
 */
KalturaStatsService.prototype.kmcCollect = function(callback, kmcEvent){
  var kparams = {};
  this.client.addParam(kparams, "kmcEvent", kcb.toParams(kmcEvent));
  this.client.queueServiceActionCall("stats", "kmcCollect", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  kalturaCEError  KalturaCEError     (optional).
 * @return  KalturaCEError.
 */
KalturaStatsService.prototype.reportKceError = function(callback, kalturaCEError){
  var kparams = {};
  this.client.addParam(kparams, "kalturaCEError", kcb.toParams(kalturaCEError));
  this.client.queueServiceActionCall("stats", "reportKceError", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: storageProfile.
 * The available service actions:
 * @action  add  Adds a storage profile to the Kaltura DB..
 * @action  updateStatus  .
 * @action  get  Get storage profile by id
 *  .
 * @action  update  Update storage profile by id 
 *  .
 * @action  list  .
*/
var KalturaStorageProfileService = module.exports.KalturaStorageProfileService = function(client){
  this.init(client);
}
util.inherits(KalturaStorageProfileService, kcb.KalturaServiceBase);
/**
 * Adds a storage profile to the Kaltura DB..
 * @param  storageProfile  KalturaStorageProfile     (optional).
 * @return  KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.add = function(callback, storageProfile){
  var kparams = {};
  this.client.addParam(kparams, "storageProfile", kcb.toParams(storageProfile));
  this.client.queueServiceActionCall("storageProfile", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  storageId  int     (optional).
 * @param  status  int     (optional, enum: KalturaStorageProfileStatus).
 * @return  .
 */
KalturaStorageProfileService.prototype.updateStatus = function(callback, storageId, status){
  var kparams = {};
  this.client.addParam(kparams, "storageId", storageId);
  this.client.addParam(kparams, "status", status);
  this.client.queueServiceActionCall("storageProfile", "updateStatus", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get storage profile by id
 *  .
 * @param  storageProfileId  int     (optional).
 * @return  KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.get = function(callback, storageProfileId){
  var kparams = {};
  this.client.addParam(kparams, "storageProfileId", storageProfileId);
  this.client.queueServiceActionCall("storageProfile", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update storage profile by id 
 *  .
 * @param  storageProfileId  int     (optional).
 * @param  storageProfile  KalturaStorageProfile    Id (optional).
 * @return  KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.update = function(callback, storageProfileId, storageProfile){
  var kparams = {};
  this.client.addParam(kparams, "storageProfileId", storageProfileId);
  this.client.addParam(kparams, "storageProfile", kcb.toParams(storageProfile));
  this.client.queueServiceActionCall("storageProfile", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  filter  KalturaStorageProfileFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaStorageProfileListResponse.
 */
KalturaStorageProfileService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("storageProfile", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: syndicationFeed.
 * The available service actions:
 * @action  add  Add new Syndication Feed
 *  .
 * @action  get  Get Syndication Feed by ID
 *  .
 * @action  update  Update Syndication Feed by ID
 *  .
 * @action  delete  Delete Syndication Feed by ID
 *  .
 * @action  list  List Syndication Feeds by filter with paging support
 *  .
 * @action  getEntryCount  get entry count for a syndication feed.
 * @action  requestConversion  request conversion for all entries that doesnt have the required flavor param
 *  returns a comma-separated ids of conversion jobs
 *  @action requestConversion
 *  @param string $feedId
 *  @return string.
*/
var KalturaSyndicationFeedService = module.exports.KalturaSyndicationFeedService = function(client){
  this.init(client);
}
util.inherits(KalturaSyndicationFeedService, kcb.KalturaServiceBase);
/**
 * Add new Syndication Feed
 *  .
 * @param  syndicationFeed  KalturaBaseSyndicationFeed     (optional).
 * @return  KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.add = function(callback, syndicationFeed){
  var kparams = {};
  this.client.addParam(kparams, "syndicationFeed", kcb.toParams(syndicationFeed));
  this.client.queueServiceActionCall("syndicationFeed", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Syndication Feed by ID
 *  .
 * @param  id  string     (optional).
 * @return  KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("syndicationFeed", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Syndication Feed by ID
 *  .
 * @param  id  string     (optional).
 * @param  syndicationFeed  KalturaBaseSyndicationFeed     (optional).
 * @return  KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.update = function(callback, id, syndicationFeed){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "syndicationFeed", kcb.toParams(syndicationFeed));
  this.client.queueServiceActionCall("syndicationFeed", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Syndication Feed by ID
 *  .
 * @param  id  string     (optional).
 * @return  .
 */
KalturaSyndicationFeedService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("syndicationFeed", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List Syndication Feeds by filter with paging support
 *  .
 * @param  filter  KalturaBaseSyndicationFeedFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaBaseSyndicationFeedListResponse.
 */
KalturaSyndicationFeedService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("syndicationFeed", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * get entry count for a syndication feed.
 * @param  feedId  string     (optional).
 * @return  KalturaSyndicationFeedEntryCount.
 */
KalturaSyndicationFeedService.prototype.getEntryCount = function(callback, feedId){
  var kparams = {};
  this.client.addParam(kparams, "feedId", feedId);
  this.client.queueServiceActionCall("syndicationFeed", "getEntryCount", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * request conversion for all entries that doesnt have the required flavor param
 *  returns a comma-separated ids of conversion jobs
 *  @action requestConversion
 *  @param string $feedId
 *  @return string.
 * @param  feedId  string     (optional).
 * @return  string.
 */
KalturaSyndicationFeedService.prototype.requestConversion = function(callback, feedId){
  var kparams = {};
  this.client.addParam(kparams, "feedId", feedId);
  this.client.queueServiceActionCall("syndicationFeed", "requestConversion", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: system.
 * The available service actions:
 * @action  ping  .
*/
var KalturaSystemService = module.exports.KalturaSystemService = function(client){
  this.init(client);
}
util.inherits(KalturaSystemService, kcb.KalturaServiceBase);
/**
 * .
 * @return  bool.
 */
KalturaSystemService.prototype.ping = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("system", "ping", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: thumbAsset.
 * The available service actions:
 * @action  add  Add thumbnail asset.
 * @action  setContent  Update content of thumbnail asset.
 * @action  update  Update thumbnail asset.
 * @action  setAsDefault  Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 *  Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
 *  .
 * @action  generateByEntryId  .
 * @action  generate  .
 * @action  regenerate  .
 * @action  get  .
 * @action  getByEntryId  DEPRECATED - Use thumbAsset.list instead.
 * @action  list  List Thumbnail Assets by filter and pager
 *  .
 * @action  addFromUrl  DEPRECATED - use thumbAsset.add and thumbAsset.setContent instead.
 * @action  addFromImage  .
 * @action  delete  .
 * @action  getUrl  Get download URL for the asset
 *  .
 * @action  getRemotePaths  Get remote storage existing paths for the asset
 *  .
*/
var KalturaThumbAssetService = module.exports.KalturaThumbAssetService = function(client){
  this.init(client);
}
util.inherits(KalturaThumbAssetService, kcb.KalturaServiceBase);
/**
 * Add thumbnail asset.
 * @param  entryId  string     (optional).
 * @param  thumbAsset  KalturaThumbAsset     (optional).
 * @return  KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.add = function(callback, entryId, thumbAsset){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "thumbAsset", kcb.toParams(thumbAsset));
  this.client.queueServiceActionCall("thumbAsset", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update content of thumbnail asset.
 * @param  id  string     (optional).
 * @param  contentResource  KalturaContentResource     (optional).
 * @return  KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.setContent = function(callback, id, contentResource){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "contentResource", kcb.toParams(contentResource));
  this.client.queueServiceActionCall("thumbAsset", "setContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update thumbnail asset.
 * @param  id  string     (optional).
 * @param  thumbAsset  KalturaThumbAsset     (optional).
 * @return  KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.update = function(callback, id, thumbAsset){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "thumbAsset", kcb.toParams(thumbAsset));
  this.client.queueServiceActionCall("thumbAsset", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 *  Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
 *  .
 * @param  thumbAssetId  string     (optional).
 * @return  .
 */
KalturaThumbAssetService.prototype.setAsDefault = function(callback, thumbAssetId){
  var kparams = {};
  this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
  this.client.queueServiceActionCall("thumbAsset", "setAsDefault", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  entryId  string     (optional).
 * @param  destThumbParamsId  int    indicate the id of the ThumbParams to be generate this thumbnail by (optional).
 * @return  KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.generateByEntryId = function(callback, entryId, destThumbParamsId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "destThumbParamsId", destThumbParamsId);
  this.client.queueServiceActionCall("thumbAsset", "generateByEntryId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  entryId  string     (optional).
 * @param  thumbParams  KalturaThumbParams     (optional).
 * @param  sourceAssetId  string    id of the source asset (flavor or thumbnail) to be used as source for the thumbnail generation (optional, default: null).
 * @return  KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.generate = function(callback, entryId, thumbParams, sourceAssetId){
  if(!sourceAssetId)
    sourceAssetId = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "thumbParams", kcb.toParams(thumbParams));
  this.client.addParam(kparams, "sourceAssetId", sourceAssetId);
  this.client.queueServiceActionCall("thumbAsset", "generate", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  thumbAssetId  string     (optional).
 * @return  KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.regenerate = function(callback, thumbAssetId){
  var kparams = {};
  this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
  this.client.queueServiceActionCall("thumbAsset", "regenerate", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  thumbAssetId  string     (optional).
 * @return  KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.get = function(callback, thumbAssetId){
  var kparams = {};
  this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
  this.client.queueServiceActionCall("thumbAsset", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * DEPRECATED - Use thumbAsset.list instead.
 * @param  entryId  string     (optional).
 * @return  array.
 */
KalturaThumbAssetService.prototype.getByEntryId = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("thumbAsset", "getByEntryId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List Thumbnail Assets by filter and pager
 *  .
 * @param  filter  KalturaAssetFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaThumbAssetListResponse.
 */
KalturaThumbAssetService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("thumbAsset", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * DEPRECATED - use thumbAsset.add and thumbAsset.setContent instead.
 * @param  entryId  string     (optional).
 * @param  url  string     (optional).
 * @return  KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.addFromUrl = function(callback, entryId, url){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "url", url);
  this.client.queueServiceActionCall("thumbAsset", "addFromUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  entryId  string     (optional).
 * @param  fileData  file     (optional).
 * @return  KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.addFromImage = function(callback, entryId, fileData){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("thumbAsset", "addFromImage", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  thumbAssetId  string     (optional).
 * @return  .
 */
KalturaThumbAssetService.prototype.deleteAction = function(callback, thumbAssetId){
  var kparams = {};
  this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
  this.client.queueServiceActionCall("thumbAsset", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get download URL for the asset
 *  .
 * @param  id  string     (optional).
 * @param  storageId  int     (optional, default: null).
 * @return  string.
 */
KalturaThumbAssetService.prototype.getUrl = function(callback, id, storageId){
  if(!storageId)
    storageId = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "storageId", storageId);
  this.client.queueServiceActionCall("thumbAsset", "getUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset
 *  .
 * @param  id  string     (optional).
 * @return  KalturaRemotePathListResponse.
 */
KalturaThumbAssetService.prototype.getRemotePaths = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("thumbAsset", "getRemotePaths", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: thumbParams.
 * The available service actions:
 * @action  add  Add new Thumb Params
 *  .
 * @action  get  Get Thumb Params by ID
 *  .
 * @action  update  Update Thumb Params by ID
 *  .
 * @action  delete  Delete Thumb Params by ID
 *  .
 * @action  list  List Thumb Params by filter with paging support (By default - all system default params will be listed too)
 *  .
 * @action  getByConversionProfileId  Get Thumb Params by Conversion Profile ID
 *  .
*/
var KalturaThumbParamsService = module.exports.KalturaThumbParamsService = function(client){
  this.init(client);
}
util.inherits(KalturaThumbParamsService, kcb.KalturaServiceBase);
/**
 * Add new Thumb Params
 *  .
 * @param  thumbParams  KalturaThumbParams     (optional).
 * @return  KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.add = function(callback, thumbParams){
  var kparams = {};
  this.client.addParam(kparams, "thumbParams", kcb.toParams(thumbParams));
  this.client.queueServiceActionCall("thumbParams", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Thumb Params by ID
 *  .
 * @param  id  int     (optional).
 * @return  KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("thumbParams", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Thumb Params by ID
 *  .
 * @param  id  int     (optional).
 * @param  thumbParams  KalturaThumbParams     (optional).
 * @return  KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.update = function(callback, id, thumbParams){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "thumbParams", kcb.toParams(thumbParams));
  this.client.queueServiceActionCall("thumbParams", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Thumb Params by ID
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaThumbParamsService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("thumbParams", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List Thumb Params by filter with paging support (By default - all system default params will be listed too)
 *  .
 * @param  filter  KalturaThumbParamsFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaThumbParamsListResponse.
 */
KalturaThumbParamsService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("thumbParams", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Thumb Params by Conversion Profile ID
 *  .
 * @param  conversionProfileId  int     (optional).
 * @return  array.
 */
KalturaThumbParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
  var kparams = {};
  this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
  this.client.queueServiceActionCall("thumbParams", "getByConversionProfileId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: uiConf.
 * The available service actions:
 * @action  add  UIConf Add action allows you to add a UIConf to Kaltura DB
 *  .
 * @action  update  Update an existing UIConf
 *  .
 * @action  get  Retrieve a UIConf by id
 *  .
 * @action  delete  Delete an existing UIConf
 *  .
 * @action  clone  Clone an existing UIConf
 *  .
 * @action  listTemplates  retrieve a list of available template UIConfs.
 * @action  list  Retrieve a list of available UIConfs
 *  .
 * @action  getAvailableTypes  Retrieve a list of all available versions by object type
 *  .
*/
var KalturaUiConfService = module.exports.KalturaUiConfService = function(client){
  this.init(client);
}
util.inherits(KalturaUiConfService, kcb.KalturaServiceBase);
/**
 * UIConf Add action allows you to add a UIConf to Kaltura DB
 *  .
 * @param  uiConf  KalturaUiConf    Mandatory input parameter of type KalturaUiConf (optional).
 * @return  KalturaUiConf.
 */
KalturaUiConfService.prototype.add = function(callback, uiConf){
  var kparams = {};
  this.client.addParam(kparams, "uiConf", kcb.toParams(uiConf));
  this.client.queueServiceActionCall("uiConf", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing UIConf
 *  .
 * @param  id  int     (optional).
 * @param  uiConf  KalturaUiConf     (optional).
 * @return  KalturaUiConf.
 */
KalturaUiConfService.prototype.update = function(callback, id, uiConf){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "uiConf", kcb.toParams(uiConf));
  this.client.queueServiceActionCall("uiConf", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a UIConf by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaUiConf.
 */
KalturaUiConfService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("uiConf", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete an existing UIConf
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaUiConfService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("uiConf", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Clone an existing UIConf
 *  .
 * @param  id  int     (optional).
 * @return  KalturaUiConf.
 */
KalturaUiConfService.prototype.cloneAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("uiConf", "clone", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * retrieve a list of available template UIConfs.
 * @param  filter  KalturaUiConfFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listTemplates = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("uiConf", "listTemplates", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a list of available UIConfs
 *  .
 * @param  filter  KalturaUiConfFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("uiConf", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a list of all available versions by object type
 *  .
 * @return  array.
 */
KalturaUiConfService.prototype.getAvailableTypes = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("uiConf", "getAvailableTypes", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: upload.
 * The available service actions:
 * @action  upload  .
 * @action  getUploadedFileTokenByFileName  .
*/
var KalturaUploadService = module.exports.KalturaUploadService = function(client){
  this.init(client);
}
util.inherits(KalturaUploadService, kcb.KalturaServiceBase);
/**
 * .
 * @param  fileData  file    The file data (optional).
 * @return  string.
 */
KalturaUploadService.prototype.upload = function(callback, fileData){
  var kparams = {};
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("upload", "upload", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  fileName  string     (optional).
 * @return  KalturaUploadResponse.
 */
KalturaUploadService.prototype.getUploadedFileTokenByFileName = function(callback, fileName){
  var kparams = {};
  this.client.addParam(kparams, "fileName", fileName);
  this.client.queueServiceActionCall("upload", "getUploadedFileTokenByFileName", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: uploadToken.
 * The available service actions:
 * @action  add  Adds new upload token to upload a file
 *  .
 * @action  get  Get upload token by id
 *  .
 * @action  upload  Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients) 
 *  .
 * @action  delete  Deletes the upload token by upload token id
 *  .
 * @action  list  List upload token by filter with pager support. 
 *  When using a user session the service will be restricted to users objects only.
 *  .
*/
var KalturaUploadTokenService = module.exports.KalturaUploadTokenService = function(client){
  this.init(client);
}
util.inherits(KalturaUploadTokenService, kcb.KalturaServiceBase);
/**
 * Adds new upload token to upload a file
 *  .
 * @param  uploadToken  KalturaUploadToken     (optional, default: null).
 * @return  KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.add = function(callback, uploadToken){
  if(!uploadToken)
    uploadToken = null;
  var kparams = {};
  if (uploadToken != null)
    this.client.addParam(kparams, "uploadToken", kcb.toParams(uploadToken));
  this.client.queueServiceActionCall("uploadToken", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get upload token by id
 *  .
 * @param  uploadTokenId  string     (optional).
 * @return  KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.get = function(callback, uploadTokenId){
  var kparams = {};
  this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
  this.client.queueServiceActionCall("uploadToken", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients) 
 *  .
 * @param  uploadTokenId  string     (optional).
 * @param  fileData  file     (optional).
 * @param  resume  bool     (optional, default: false).
 * @param  finalChunk  bool     (optional, default: true).
 * @param  resumeAt  int     (optional, default: -1).
 * @return  KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.upload = function(callback, uploadTokenId, fileData, resume, finalChunk, resumeAt){
  if(!resume)
    resume = false;
  if(!finalChunk)
    finalChunk = true;
  if(!resumeAt)
    resumeAt = -1;
  var kparams = {};
  this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.addParam(kparams, "resume", resume);
  this.client.addParam(kparams, "finalChunk", finalChunk);
  this.client.addParam(kparams, "resumeAt", resumeAt);
  this.client.queueServiceActionCall("uploadToken", "upload", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Deletes the upload token by upload token id
 *  .
 * @param  uploadTokenId  string     (optional).
 * @return  .
 */
KalturaUploadTokenService.prototype.deleteAction = function(callback, uploadTokenId){
  var kparams = {};
  this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
  this.client.queueServiceActionCall("uploadToken", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List upload token by filter with pager support. 
 *  When using a user session the service will be restricted to users objects only.
 *  .
 * @param  filter  KalturaUploadTokenFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaUploadTokenListResponse.
 */
KalturaUploadTokenService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("uploadToken", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: userRole.
 * The available service actions:
 * @action  add  Allows you to add a new KalturaUserRole object
 *  .
 * @action  get  Retrieve a KalturaUserRole object by ID
 *  .
 * @action  update  Update an existing KalturaUserRole object
 *  .
 * @action  delete  Mark the KalturaUserRole object as deleted
 *  .
 * @action  list  List user roles
 *  .
 * @action  clone  Clone role
 *  .
*/
var KalturaUserRoleService = module.exports.KalturaUserRoleService = function(client){
  this.init(client);
}
util.inherits(KalturaUserRoleService, kcb.KalturaServiceBase);
/**
 * Allows you to add a new KalturaUserRole object
 *  .
 * @param  userRole  KalturaUserRole     (optional).
 * @return  KalturaUserRole.
 */
KalturaUserRoleService.prototype.add = function(callback, userRole){
  var kparams = {};
  this.client.addParam(kparams, "userRole", kcb.toParams(userRole));
  this.client.queueServiceActionCall("userRole", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaUserRole object by ID
 *  .
 * @param  userRoleId  int     (optional).
 * @return  KalturaUserRole.
 */
KalturaUserRoleService.prototype.get = function(callback, userRoleId){
  var kparams = {};
  this.client.addParam(kparams, "userRoleId", userRoleId);
  this.client.queueServiceActionCall("userRole", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing KalturaUserRole object
 *  .
 * @param  userRoleId  int     (optional).
 * @param  userRole  KalturaUserRole    Id (optional).
 * @return  KalturaUserRole.
 */
KalturaUserRoleService.prototype.update = function(callback, userRoleId, userRole){
  var kparams = {};
  this.client.addParam(kparams, "userRoleId", userRoleId);
  this.client.addParam(kparams, "userRole", kcb.toParams(userRole));
  this.client.queueServiceActionCall("userRole", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Mark the KalturaUserRole object as deleted
 *  .
 * @param  userRoleId  int     (optional).
 * @return  KalturaUserRole.
 */
KalturaUserRoleService.prototype.deleteAction = function(callback, userRoleId){
  var kparams = {};
  this.client.addParam(kparams, "userRoleId", userRoleId);
  this.client.queueServiceActionCall("userRole", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List user roles
 *  .
 * @param  filter  KalturaUserRoleFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaUserRoleListResponse.
 */
KalturaUserRoleService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("userRole", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Clone role
 *  .
 * @param  userRoleId  int     (optional).
 * @return  KalturaUserRole.
 */
KalturaUserRoleService.prototype.cloneAction = function(callback, userRoleId){
  var kparams = {};
  this.client.addParam(kparams, "userRoleId", userRoleId);
  this.client.queueServiceActionCall("userRole", "clone", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: user.
 * The available service actions:
 * @action  add  Adds a user to the Kaltura DB.
 *  Input param $id is the unique identifier in the partner's system.
 * @action  update  Update existing user, it is possible to update the user id too
 *  .
 * @action  get  Get user by user ID
 *  .
 * @action  getByLoginId  Get user by user's login ID and partner ID
 *  .
 * @action  delete  Mark the user as deleted
 *  .
 * @action  list  List users (When not set in the filter, blocked and deleted users will be returned too)
 *  .
 * @action  notifyBan  Notify about user ban
 *  .
 * @action  login  Get a session using user id and password
 *  .
 * @action  loginByLoginId  Get a session using user's kaltura id and password
 *  .
 * @action  updateLoginData  Update user password and email
 *  .
 * @action  resetPassword  Reset admin user password and send it to the users email address
 *  .
 * @action  setInitialPassword  Set initial users password
 *  .
 * @action  enableLogin  Enable the user to login with a loginId (email) and password.
 *  .
 * @action  disableLogin  Disallow user to login with an id/password.
 *  Passing either a loginId or a userId is allowed.
 *  .
*/
var KalturaUserService = module.exports.KalturaUserService = function(client){
  this.init(client);
}
util.inherits(KalturaUserService, kcb.KalturaServiceBase);
/**
 * Adds a user to the Kaltura DB.
 *  Input param $id is the unique identifier in the partner's system.
 * @param  user  KalturaUser     (optional).
 * @return  KalturaUser.
 */
KalturaUserService.prototype.add = function(callback, user){
  var kparams = {};
  this.client.addParam(kparams, "user", kcb.toParams(user));
  this.client.queueServiceActionCall("user", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update existing user, it is possible to update the user id too
 *  .
 * @param  userId  string     (optional).
 * @param  user  KalturaUser    Id (optional).
 * @return  KalturaUser.
 */
KalturaUserService.prototype.update = function(callback, userId, user){
  var kparams = {};
  this.client.addParam(kparams, "userId", userId);
  this.client.addParam(kparams, "user", kcb.toParams(user));
  this.client.queueServiceActionCall("user", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get user by user ID
 *  .
 * @param  userId  string     (optional).
 * @return  KalturaUser.
 */
KalturaUserService.prototype.get = function(callback, userId){
  var kparams = {};
  this.client.addParam(kparams, "userId", userId);
  this.client.queueServiceActionCall("user", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get user by user's login ID and partner ID
 *  .
 * @param  loginId  string     (optional).
 * @return  KalturaUser.
 */
KalturaUserService.prototype.getByLoginId = function(callback, loginId){
  var kparams = {};
  this.client.addParam(kparams, "loginId", loginId);
  this.client.queueServiceActionCall("user", "getByLoginId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Mark the user as deleted
 *  .
 * @param  userId  string     (optional).
 * @return  KalturaUser.
 */
KalturaUserService.prototype.deleteAction = function(callback, userId){
  var kparams = {};
  this.client.addParam(kparams, "userId", userId);
  this.client.queueServiceActionCall("user", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List users (When not set in the filter, blocked and deleted users will be returned too)
 *  .
 * @param  filter  KalturaUserFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaUserListResponse.
 */
KalturaUserService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("user", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Notify about user ban
 *  .
 * @param  userId  string     (optional).
 * @return  .
 */
KalturaUserService.prototype.notifyBan = function(callback, userId){
  var kparams = {};
  this.client.addParam(kparams, "userId", userId);
  this.client.queueServiceActionCall("user", "notifyBan", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get a session using user id and password
 *  .
 * @param  partnerId  int     (optional).
 * @param  userId  string     (optional).
 * @param  password  string     (optional).
 * @param  expiry  int     (optional, default: 86400).
 * @param  privileges  string     (optional, default: *).
 * @return  string.
 */
KalturaUserService.prototype.login = function(callback, partnerId, userId, password, expiry, privileges){
  if(!expiry)
    expiry = 86400;
  if(!privileges)
    privileges = "*";
  var kparams = {};
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.addParam(kparams, "userId", userId);
  this.client.addParam(kparams, "password", password);
  this.client.addParam(kparams, "expiry", expiry);
  this.client.addParam(kparams, "privileges", privileges);
  this.client.queueServiceActionCall("user", "login", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get a session using user's kaltura id and password
 *  .
 * @param  loginId  string    login email (optional).
 * @param  password  string     (optional).
 * @param  partnerId  int     (optional, default: null).
 * @param  expiry  int     (optional, default: 86400).
 * @param  privileges  string     (optional, default: *).
 * @return  string.
 */
KalturaUserService.prototype.loginByLoginId = function(callback, loginId, password, partnerId, expiry, privileges){
  if(!partnerId)
    partnerId = null;
  if(!expiry)
    expiry = 86400;
  if(!privileges)
    privileges = "*";
  var kparams = {};
  this.client.addParam(kparams, "loginId", loginId);
  this.client.addParam(kparams, "password", password);
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.addParam(kparams, "expiry", expiry);
  this.client.addParam(kparams, "privileges", privileges);
  this.client.queueServiceActionCall("user", "loginByLoginId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update user password and email
 *  .
 * @param  oldLoginId  string     (optional).
 * @param  password  string     (optional).
 * @param  newLoginId  string    Optional, provide only when you want to update the login id (optional).
 * @param  newPassword  string     (optional).
 * @param  newFirstName  string     (optional, default: null).
 * @param  newLastName  string     (optional, default: null).
 * @return  .
 */
KalturaUserService.prototype.updateLoginData = function(callback, oldLoginId, password, newLoginId, newPassword, newFirstName, newLastName){
  if(!newLoginId)
    newLoginId = "";
  if(!newPassword)
    newPassword = "";
  if(!newFirstName)
    newFirstName = null;
  if(!newLastName)
    newLastName = null;
  var kparams = {};
  this.client.addParam(kparams, "oldLoginId", oldLoginId);
  this.client.addParam(kparams, "password", password);
  this.client.addParam(kparams, "newLoginId", newLoginId);
  this.client.addParam(kparams, "newPassword", newPassword);
  this.client.addParam(kparams, "newFirstName", newFirstName);
  this.client.addParam(kparams, "newLastName", newLastName);
  this.client.queueServiceActionCall("user", "updateLoginData", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Reset admin user password and send it to the users email address
 *  .
 * @param  email  string     (optional).
 * @return  .
 */
KalturaUserService.prototype.resetPassword = function(callback, email){
  var kparams = {};
  this.client.addParam(kparams, "email", email);
  this.client.queueServiceActionCall("user", "resetPassword", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Set initial users password
 *  .
 * @param  hashKey  string     (optional).
 * @param  newPassword  string    new password to set (optional).
 * @return  .
 */
KalturaUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
  var kparams = {};
  this.client.addParam(kparams, "hashKey", hashKey);
  this.client.addParam(kparams, "newPassword", newPassword);
  this.client.queueServiceActionCall("user", "setInitialPassword", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Enable the user to login with a loginId (email) and password.
 *  .
 * @param  userId  string     (optional).
 * @param  loginId  string     (optional).
 * @param  password  string     (optional, default: null).
 * @return  KalturaUser.
 */
KalturaUserService.prototype.enableLogin = function(callback, userId, loginId, password){
  if(!password)
    password = null;
  var kparams = {};
  this.client.addParam(kparams, "userId", userId);
  this.client.addParam(kparams, "loginId", loginId);
  this.client.addParam(kparams, "password", password);
  this.client.queueServiceActionCall("user", "enableLogin", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Disallow user to login with an id/password.
 *  Passing either a loginId or a userId is allowed.
 *  .
 * @param  userId  string     (optional, default: null).
 * @param  loginId  string     (optional, default: null).
 * @return  KalturaUser.
 */
KalturaUserService.prototype.disableLogin = function(callback, userId, loginId){
  if(!userId)
    userId = null;
  if(!loginId)
    loginId = null;
  var kparams = {};
  this.client.addParam(kparams, "userId", userId);
  this.client.addParam(kparams, "loginId", loginId);
  this.client.queueServiceActionCall("user", "disableLogin", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: widget.
 * The available service actions:
 * @action  add  Add new widget, can be attached to entry or kshow
 *  SourceWidget is ignored.
 *  .
 * @action  update  Update exisiting widget
 *  .
 * @action  get  Get widget by id
 *  .
 * @action  clone  Add widget based on existing widget.
 *  Must provide valid sourceWidgetId
 *  .
 * @action  list  Retrieve a list of available widget depends on the filter given
 *  .
*/
var KalturaWidgetService = module.exports.KalturaWidgetService = function(client){
  this.init(client);
}
util.inherits(KalturaWidgetService, kcb.KalturaServiceBase);
/**
 * Add new widget, can be attached to entry or kshow
 *  SourceWidget is ignored.
 *  .
 * @param  widget  KalturaWidget     (optional).
 * @return  KalturaWidget.
 */
KalturaWidgetService.prototype.add = function(callback, widget){
  var kparams = {};
  this.client.addParam(kparams, "widget", kcb.toParams(widget));
  this.client.queueServiceActionCall("widget", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update exisiting widget
 *  .
 * @param  id  string     (optional).
 * @param  widget  KalturaWidget     (optional).
 * @return  KalturaWidget.
 */
KalturaWidgetService.prototype.update = function(callback, id, widget){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "widget", kcb.toParams(widget));
  this.client.queueServiceActionCall("widget", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get widget by id
 *  .
 * @param  id  string     (optional).
 * @return  KalturaWidget.
 */
KalturaWidgetService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("widget", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add widget based on existing widget.
 *  Must provide valid sourceWidgetId
 *  .
 * @param  widget  KalturaWidget     (optional).
 * @return  KalturaWidget.
 */
KalturaWidgetService.prototype.cloneAction = function(callback, widget){
  var kparams = {};
  this.client.addParam(kparams, "widget", kcb.toParams(widget));
  this.client.queueServiceActionCall("widget", "clone", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a list of available widget depends on the filter given
 *  .
 * @param  filter  KalturaWidgetFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaWidgetListResponse.
 */
KalturaWidgetService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("widget", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: xInternal.
 * The available service actions:
 * @action  xAddBulkDownload  Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 *  This sevice support the following entries: 
 *  - MediaEntry
 *  - Video will be converted using the flavor params id
 *  - Audio will be downloaded as MP3
 *  - Image will be downloaded as Jpeg
 *  - MixEntry will be flattend using the flavor params id
 *  - Other entry types are not supported
 *  Returns the admin email that the email message will be sent to 
 *  .
*/
var KalturaXInternalService = module.exports.KalturaXInternalService = function(client){
  this.init(client);
}
util.inherits(KalturaXInternalService, kcb.KalturaServiceBase);
/**
 * Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 *  This sevice support the following entries: 
 *  - MediaEntry
 *  - Video will be converted using the flavor params id
 *  - Audio will be downloaded as MP3
 *  - Image will be downloaded as Jpeg
 *  - MixEntry will be flattend using the flavor params id
 *  - Other entry types are not supported
 *  Returns the admin email that the email message will be sent to 
 *  .
 * @param  entryIds  string    Comma separated list of entry ids (optional).
 * @param  flavorParamsId  string     (optional).
 * @return  string.
 */
KalturaXInternalService.prototype.xAddBulkDownload = function(callback, entryIds, flavorParamsId){
  if(!flavorParamsId)
    flavorParamsId = "";
  var kparams = {};
  this.client.addParam(kparams, "entryIds", entryIds);
  this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
  this.client.queueServiceActionCall("xInternal", "xAddBulkDownload", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: metadata.
 * The available service actions:
 * @action  add  Allows you to add a metadata object and metadata content associated with Kaltura object
 *  .
 * @action  addFromFile  Allows you to add a metadata object and metadata file associated with Kaltura object
 *  .
 * @action  addFromUrl  Allows you to add a metadata xml data from remote URL
 *  .
 * @action  addFromBulk  Allows you to add a metadata xml data from remote URL.
 *  Enables different permissions than addFromUrl action.
 *  .
 * @action  get  Retrieve a metadata object by id
 *  .
 * @action  update  Update an existing metadata object with new XML content
 *  .
 * @action  updateFromFile  Update an existing metadata object with new XML file
 *  .
 * @action  list  List metadata objects by filter and pager
 *  .
 * @action  delete  Delete an existing metadata
 *  .
 * @action  invalidate  Mark existing metadata as invalid
 *  Used by batch metadata transform
 *  .
*/
var KalturaMetadataService = module.exports.KalturaMetadataService = function(client){
  this.init(client);
}
util.inherits(KalturaMetadataService, kcb.KalturaServiceBase);
/**
 * Allows you to add a metadata object and metadata content associated with Kaltura object
 *  .
 * @param  metadataProfileId  int     (optional).
 * @param  objectType  string     (optional, enum: KalturaMetadataObjectType).
 * @param  objectId  string     (optional).
 * @param  xmlData  string    XML metadata (optional).
 * @return  KalturaMetadata.
 */
KalturaMetadataService.prototype.add = function(callback, metadataProfileId, objectType, objectId, xmlData){
  var kparams = {};
  this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
  this.client.addParam(kparams, "objectType", objectType);
  this.client.addParam(kparams, "objectId", objectId);
  this.client.addParam(kparams, "xmlData", xmlData);
  this.client.queueServiceActionCall("metadata", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata object and metadata file associated with Kaltura object
 *  .
 * @param  metadataProfileId  int     (optional).
 * @param  objectType  string     (optional, enum: KalturaMetadataObjectType).
 * @param  objectId  string     (optional).
 * @param  xmlFile  file    XML metadata (optional).
 * @return  KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromFile = function(callback, metadataProfileId, objectType, objectId, xmlFile){
  var kparams = {};
  this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
  this.client.addParam(kparams, "objectType", objectType);
  this.client.addParam(kparams, "objectId", objectId);
  kfiles = {};
  this.client.addParam(kfiles, "xmlFile", xmlFile);
  this.client.queueServiceActionCall("metadata", "addFromFile", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata xml data from remote URL
 *  .
 * @param  metadataProfileId  int     (optional).
 * @param  objectType  string     (optional, enum: KalturaMetadataObjectType).
 * @param  objectId  string     (optional).
 * @param  url  string    XML metadata remote url (optional).
 * @return  KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromUrl = function(callback, metadataProfileId, objectType, objectId, url){
  var kparams = {};
  this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
  this.client.addParam(kparams, "objectType", objectType);
  this.client.addParam(kparams, "objectId", objectId);
  this.client.addParam(kparams, "url", url);
  this.client.queueServiceActionCall("metadata", "addFromUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata xml data from remote URL.
 *  Enables different permissions than addFromUrl action.
 *  .
 * @param  metadataProfileId  int     (optional).
 * @param  objectType  string     (optional, enum: KalturaMetadataObjectType).
 * @param  objectId  string     (optional).
 * @param  url  string    XML metadata remote url (optional).
 * @return  KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromBulk = function(callback, metadataProfileId, objectType, objectId, url){
  var kparams = {};
  this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
  this.client.addParam(kparams, "objectType", objectType);
  this.client.addParam(kparams, "objectId", objectId);
  this.client.addParam(kparams, "url", url);
  this.client.queueServiceActionCall("metadata", "addFromBulk", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a metadata object by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaMetadata.
 */
KalturaMetadataService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("metadata", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing metadata object with new XML content
 *  .
 * @param  id  int     (optional).
 * @param  xmlData  string    XML metadata (optional, default: null).
 * @param  version  int    Enable update only if the metadata object version did not change by other process (optional, default: null).
 * @return  KalturaMetadata.
 */
KalturaMetadataService.prototype.update = function(callback, id, xmlData, version){
  if(!xmlData)
    xmlData = null;
  if(!version)
    version = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "xmlData", xmlData);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("metadata", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing metadata object with new XML file
 *  .
 * @param  id  int     (optional).
 * @param  xmlFile  file    XML metadata (optional, default: null).
 * @return  KalturaMetadata.
 */
KalturaMetadataService.prototype.updateFromFile = function(callback, id, xmlFile){
  if(!xmlFile)
    xmlFile = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  kfiles = {};
  this.client.addParam(kfiles, "xmlFile", xmlFile);
  this.client.queueServiceActionCall("metadata", "updateFromFile", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List metadata objects by filter and pager
 *  .
 * @param  filter  KalturaMetadataFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaMetadataListResponse.
 */
KalturaMetadataService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("metadata", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete an existing metadata
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaMetadataService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("metadata", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Mark existing metadata as invalid
 *  Used by batch metadata transform
 *  .
 * @param  id  int     (optional).
 * @param  version  int    Enable update only if the metadata object version did not change by other process (optional, default: null).
 * @return  .
 */
KalturaMetadataService.prototype.invalidate = function(callback, id, version){
  if(!version)
    version = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("metadata", "invalidate", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: metadataProfile.
 * The available service actions:
 * @action  add  Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *  .
 * @action  addFromFile  Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *  .
 * @action  get  Retrieve a metadata profile object by id
 *  .
 * @action  update  Update an existing metadata object
 *  .
 * @action  list  List metadata profile objects by filter and pager
 *  .
 * @action  listFields  List metadata profile fields by metadata profile id
 *  .
 * @action  delete  Delete an existing metadata profile
 *  .
 * @action  revert  Update an existing metadata object definition file
 *  .
 * @action  updateDefinitionFromFile  Update an existing metadata object definition file
 *  .
 * @action  updateViewsFromFile  Update an existing metadata object views file
 *  .
*/
var KalturaMetadataProfileService = module.exports.KalturaMetadataProfileService = function(client){
  this.init(client);
}
util.inherits(KalturaMetadataProfileService, kcb.KalturaServiceBase);
/**
 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *  .
 * @param  metadataProfile  KalturaMetadataProfile     (optional).
 * @param  xsdData  string    XSD metadata definition (optional).
 * @param  viewsData  string    UI views definition (optional, default: null).
 * @return  KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.add = function(callback, metadataProfile, xsdData, viewsData){
  if(!viewsData)
    viewsData = null;
  var kparams = {};
  this.client.addParam(kparams, "metadataProfile", kcb.toParams(metadataProfile));
  this.client.addParam(kparams, "xsdData", xsdData);
  this.client.addParam(kparams, "viewsData", viewsData);
  this.client.queueServiceActionCall("metadataProfile", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *  .
 * @param  metadataProfile  KalturaMetadataProfile     (optional).
 * @param  xsdFile  file    XSD metadata definition (optional).
 * @param  viewsFile  file    UI views definition (optional, default: null).
 * @return  KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.addFromFile = function(callback, metadataProfile, xsdFile, viewsFile){
  if(!viewsFile)
    viewsFile = null;
  var kparams = {};
  this.client.addParam(kparams, "metadataProfile", kcb.toParams(metadataProfile));
  kfiles = {};
  this.client.addParam(kfiles, "xsdFile", xsdFile);
  this.client.addParam(kfiles, "viewsFile", viewsFile);
  this.client.queueServiceActionCall("metadataProfile", "addFromFile", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a metadata profile object by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("metadataProfile", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing metadata object
 *  .
 * @param  id  int     (optional).
 * @param  metadataProfile  KalturaMetadataProfile     (optional).
 * @param  xsdData  string    XSD metadata definition (optional, default: null).
 * @param  viewsData  string    UI views definition (optional, default: null).
 * @return  KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.update = function(callback, id, metadataProfile, xsdData, viewsData){
  if(!xsdData)
    xsdData = null;
  if(!viewsData)
    viewsData = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "metadataProfile", kcb.toParams(metadataProfile));
  this.client.addParam(kparams, "xsdData", xsdData);
  this.client.addParam(kparams, "viewsData", viewsData);
  this.client.queueServiceActionCall("metadataProfile", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List metadata profile objects by filter and pager
 *  .
 * @param  filter  KalturaMetadataProfileFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaMetadataProfileListResponse.
 */
KalturaMetadataProfileService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("metadataProfile", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List metadata profile fields by metadata profile id
 *  .
 * @param  metadataProfileId  int     (optional).
 * @return  KalturaMetadataProfileFieldListResponse.
 */
KalturaMetadataProfileService.prototype.listFields = function(callback, metadataProfileId){
  var kparams = {};
  this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
  this.client.queueServiceActionCall("metadataProfile", "listFields", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete an existing metadata profile
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaMetadataProfileService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("metadataProfile", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing metadata object definition file
 *  .
 * @param  id  int     (optional).
 * @param  toVersion  int     (optional).
 * @return  KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.revert = function(callback, id, toVersion){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "toVersion", toVersion);
  this.client.queueServiceActionCall("metadataProfile", "revert", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing metadata object definition file
 *  .
 * @param  id  int     (optional).
 * @param  xsdFile  file    XSD metadata definition (optional).
 * @return  KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.updateDefinitionFromFile = function(callback, id, xsdFile){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  kfiles = {};
  this.client.addParam(kfiles, "xsdFile", xsdFile);
  this.client.queueServiceActionCall("metadataProfile", "updateDefinitionFromFile", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing metadata object views file
 *  .
 * @param  id  int     (optional).
 * @param  viewsFile  file    UI views file (optional).
 * @return  KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.updateViewsFromFile = function(callback, id, viewsFile){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  kfiles = {};
  this.client.addParam(kfiles, "viewsFile", viewsFile);
  this.client.queueServiceActionCall("metadataProfile", "updateViewsFromFile", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: metadataBatch.
 * The available service actions:
 * @action  getExclusiveImportMetadataJobs  batch getExclusiveImportMetadataJob action allows to get a BatchJob of type METADATA_IMPORT 
 *  .
 * @action  updateExclusiveImportMetadataJob  batch updateExclusiveImportMetadataJob action updates a BatchJob of type METADATA_IMPORT that was claimed using the getExclusiveImportMetadataJobs
 *  .
 * @action  freeExclusiveImportMetadataJob  batch freeExclusiveImportMetadataJob action frees a BatchJob of type ImportMetadata that was claimed using the getExclusiveImportMetadataJobs
 *  .
 * @action  getExclusiveTransformMetadataJobs  batch getExclusiveTransformMetadataJob action allows to get a BatchJob of type METADATA_TRANSFORM 
 *  .
 * @action  updateExclusiveTransformMetadataJob  batch updateExclusiveTransformMetadataJob action updates a BatchJob of type METADATA_TRANSFORM that was claimed using the getExclusiveTransformMetadataJobs
 *  .
 * @action  freeExclusiveTransformMetadataJob  batch freeExclusiveTransformMetadataJob action frees a BatchJob of type TransformMetadata that was claimed using the getExclusiveTransformMetadataJobs
 *  .
 * @action  getTransformMetadataObjects  batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count 
 *  .
 * @action  getExclusiveImportJobs  batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *  .
 * @action  updateExclusiveImportJob  batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @action  freeExclusiveImportJob  batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @action  getExclusiveBulkUploadJobs  batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *  .
 * @action  getExclusiveAlmostDoneBulkUploadJobs  batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *  .
 * @action  updateExclusiveBulkUploadJob  batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @action  freeExclusiveBulkUploadJob  batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @action  addBulkUploadResult  batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *  .
 * @action  getBulkUploadLastResult  batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *  .
 * @action  countBulkUploadEntries  Returns total created entries count
 *  .
 * @action  updateBulkUploadResults  batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *  .
 * @action  getExclusiveAlmostDoneConvertCollectionJobs  batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *  .
 * @action  getExclusiveAlmostDoneConvertProfileJobs  batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *  .
 * @action  updateExclusiveConvertCollectionJob  batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  updateExclusiveConvertProfileJob  batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  freeExclusiveConvertCollectionJob  batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  freeExclusiveConvertProfileJob  batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  getExclusiveConvertCollectionJobs  batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *  .
 * @action  getExclusiveConvertJobs  batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *  .
 * @action  getExclusiveAlmostDoneConvertJobs  batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *  .
 * @action  updateExclusiveConvertJob  batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  updateExclusiveConvertJobSubType  batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  freeExclusiveConvertJob  batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  getExclusivePostConvertJobs  batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *  .
 * @action  updateExclusivePostConvertJob  batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @action  freeExclusivePostConvertJob  batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @action  getExclusiveCaptureThumbJobs  batch getExclusiveCaptureThumbJob action allows to get a BatchJob of type CAPTURE_THUMB 
 *  .
 * @action  updateExclusiveCaptureThumbJob  batch updateExclusiveCaptureThumbJob action updates a BatchJob of type CAPTURE_THUMB that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @action  freeExclusiveCaptureThumbJob  batch freeExclusiveCaptureThumbJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @action  getExclusiveExtractMediaJobs  batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *  .
 * @action  updateExclusiveExtractMediaJob  batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @action  addMediaInfo  batch addMediaInfoAction action saves a media info object
 *  .
 * @action  freeExclusiveExtractMediaJob  batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @action  getExclusiveStorageExportJobs  batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *  .
 * @action  updateExclusiveStorageExportJob  batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @action  freeExclusiveStorageExportJob  batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @action  getExclusiveStorageDeleteJobs  batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *  .
 * @action  updateExclusiveStorageDeleteJob  batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @action  freeExclusiveStorageDeleteJob  batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @action  getExclusiveNotificationJobs  batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *  .
 * @action  updateExclusiveNotificationJob  batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *  .
 * @action  freeExclusiveNotificationJob  batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *  .
 * @action  getExclusiveMailJobs  batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *  .
 * @action  updateExclusiveMailJob  batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @action  freeExclusiveMailJob  batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @action  getExclusiveBulkDownloadJobs  batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *  .
 * @action  getExclusiveAlmostDoneBulkDownloadJobs  batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *  .
 * @action  updateExclusiveBulkDownloadJob  batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @action  freeExclusiveBulkDownloadJob  batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @action  getExclusiveProvisionProvideJobs  batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *  .
 * @action  getExclusiveAlmostDoneProvisionProvideJobs  batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *  .
 * @action  updateExclusiveProvisionProvideJob  batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @action  freeExclusiveProvisionProvideJob  batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @action  getExclusiveProvisionDeleteJobs  batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *  .
 * @action  getExclusiveAlmostDoneProvisionDeleteJobs  batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *  .
 * @action  updateExclusiveProvisionDeleteJob  batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @action  freeExclusiveProvisionDeleteJob  batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @action  resetJobExecutionAttempts  batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *  .
 * @action  freeExclusiveJob  batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *  .
 * @action  getQueueSize  batch getQueueSize action get the queue size for job type 
 *  .
 * @action  getExclusiveJobs  batch getExclusiveJobsAction action allows to get a BatchJob 
 *  .
 * @action  getExclusiveAlmostDone  batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *  .
 * @action  updateExclusiveJob  batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *  .
 * @action  cleanExclusiveJobs  batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *  .
 * @action  logConversion  Add the data to the flavor asset conversion log, creates it if doesn't exists
 *  .
 * @action  checkFileExists  batch checkFileExists action check if the file exists
 *  .
*/
var KalturaMetadataBatchService = module.exports.KalturaMetadataBatchService = function(client){
  this.init(client);
}
util.inherits(KalturaMetadataBatchService, kcb.KalturaServiceBase);
/**
 * batch getExclusiveImportMetadataJob action allows to get a BatchJob of type METADATA_IMPORT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveImportMetadataJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveImportMetadataJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveImportMetadataJob action updates a BatchJob of type METADATA_IMPORT that was claimed using the getExclusiveImportMetadataJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveImportMetadataJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveImportMetadataJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveImportMetadataJob action frees a BatchJob of type ImportMetadata that was claimed using the getExclusiveImportMetadataJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveImportMetadataJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveImportMetadataJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveTransformMetadataJob action allows to get a BatchJob of type METADATA_TRANSFORM 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveTransformMetadataJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveTransformMetadataJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveTransformMetadataJob action updates a BatchJob of type METADATA_TRANSFORM that was claimed using the getExclusiveTransformMetadataJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveTransformMetadataJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveTransformMetadataJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveTransformMetadataJob action frees a BatchJob of type TransformMetadata that was claimed using the getExclusiveTransformMetadataJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveTransformMetadataJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveTransformMetadataJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count 
 *  .
 * @param  metadataProfileId  int    The id of the metadata profile (optional).
 * @param  srcVersion  int    The old metadata profile version (optional).
 * @param  destVersion  int    The new metadata profile version (optional).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaTransformMetadataResponse.
 */
KalturaMetadataBatchService.prototype.getTransformMetadataObjects = function(callback, metadataProfileId, srcVersion, destVersion, pager){
  if(!pager)
    pager = null;
  var kparams = {};
  this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
  this.client.addParam(kparams, "srcVersion", srcVersion);
  this.client.addParam(kparams, "destVersion", destVersion);
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("metadataBatch", "getTransformMetadataObjects", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveImportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveImportJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveImportJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveImportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveImportJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveImportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveBulkUploadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneBulkUploadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveBulkUploadJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveBulkUploadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveBulkUploadJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveBulkUploadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *  .
 * @param  bulkUploadResult  KalturaBulkUploadResult    The results to save to the DB (optional).
 * @param  pluginDataArray  array     (optional, default: null).
 * @return  KalturaBulkUploadResult.
 */
KalturaMetadataBatchService.prototype.addBulkUploadResult = function(callback, bulkUploadResult, pluginDataArray){
  if(!pluginDataArray)
    pluginDataArray = null;
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadResult", kcb.toParams(bulkUploadResult));
  if(pluginDataArray != null)
  for(var index in pluginDataArray)
  {
    var obj = pluginDataArray[index];
    this.client.addParam(kparams, "pluginDataArray:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("metadataBatch", "addBulkUploadResult", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *  .
 * @param  bulkUploadJobId  int    The id of the bulk upload job (optional).
 * @return  KalturaBulkUploadResult.
 */
KalturaMetadataBatchService.prototype.getBulkUploadLastResult = function(callback, bulkUploadJobId){
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
  this.client.queueServiceActionCall("metadataBatch", "getBulkUploadLastResult", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Returns total created entries count
 *  .
 * @param  bulkUploadJobId  int    The id of the bulk upload job (optional).
 * @return  int.
 */
KalturaMetadataBatchService.prototype.countBulkUploadEntries = function(callback, bulkUploadJobId){
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
  this.client.queueServiceActionCall("metadataBatch", "countBulkUploadEntries", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *  .
 * @param  bulkUploadJobId  int    The id of the bulk upload job (optional).
 * @return  int.
 */
KalturaMetadataBatchService.prototype.updateBulkUploadResults = function(callback, bulkUploadJobId){
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
  this.client.queueServiceActionCall("metadataBatch", "updateBulkUploadResults", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneConvertCollectionJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneConvertProfileJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneConvertProfileJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @param  flavorsData  array     (optional, default: null).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveConvertCollectionJob = function(callback, id, lockKey, job, flavorsData){
  if(!flavorsData)
    flavorsData = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  if(flavorsData != null)
  for(var index in flavorsData)
  {
    var obj = flavorsData[index];
    this.client.addParam(kparams, "flavorsData:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveConvertCollectionJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveConvertProfileJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveConvertProfileJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveConvertCollectionJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveConvertCollectionJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveConvertProfileJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveConvertProfileJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveConvertCollectionJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveConvertJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneConvertJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveConvertJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  subType  int     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveConvertJobSubType = function(callback, id, lockKey, subType){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "subType", subType);
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveConvertJobSubType", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusivePostConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusivePostConvertJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusivePostConvertJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusivePostConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusivePostConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusivePostConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveCaptureThumbJob action allows to get a BatchJob of type CAPTURE_THUMB 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveCaptureThumbJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveCaptureThumbJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveCaptureThumbJob action updates a BatchJob of type CAPTURE_THUMB that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveCaptureThumbJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveCaptureThumbJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveCaptureThumbJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveCaptureThumbJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveCaptureThumbJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveExtractMediaJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveExtractMediaJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveExtractMediaJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveExtractMediaJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch addMediaInfoAction action saves a media info object
 *  .
 * @param  mediaInfo  KalturaMediaInfo     (optional).
 * @return  KalturaMediaInfo.
 */
KalturaMetadataBatchService.prototype.addMediaInfo = function(callback, mediaInfo){
  var kparams = {};
  this.client.addParam(kparams, "mediaInfo", kcb.toParams(mediaInfo));
  this.client.queueServiceActionCall("metadataBatch", "addMediaInfo", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveExtractMediaJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveExtractMediaJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveStorageExportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveStorageExportJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveStorageExportJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveStorageExportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveStorageExportJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveStorageExportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveStorageDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveStorageDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveStorageDeleteJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveStorageDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveStorageDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveStorageDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  KalturaBatchGetExclusiveNotificationJobsResponse.
 */
KalturaMetadataBatchService.prototype.getExclusiveNotificationJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveNotificationJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveNotificationJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveNotificationJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveNotificationJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveNotificationJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveMailJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveMailJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveMailJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveMailJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveMailJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveMailJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveBulkDownloadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneBulkDownloadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveBulkDownloadJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveBulkDownloadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveBulkDownloadJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveBulkDownloadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveProvisionProvideJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneProvisionProvideJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveProvisionProvideJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveProvisionProvideJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveProvisionProvideJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveProvisionProvideJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveProvisionDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneProvisionDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveProvisionDeleteJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveProvisionDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveProvisionDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveProvisionDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *  .
 * @param  id  int    The id of the job (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  jobType  string    The type of the job   (optional, enum: KalturaBatchJobType).
 * @return  .
 */
KalturaMetadataBatchService.prototype.resetJobExecutionAttempts = function(callback, id, lockKey, jobType){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.queueServiceActionCall("metadataBatch", "resetJobExecutionAttempts", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *  .
 * @param  id  int    The id of the job (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  jobType  string    The type of the job   (optional, enum: KalturaBatchJobType).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveJob = function(callback, id, lockKey, jobType, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("metadataBatch", "freeExclusiveJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getQueueSize action get the queue size for job type 
 *  .
 * @param  workerQueueFilter  KalturaWorkerQueueFilter    The worker filter   (optional).
 * @return  int.
 */
KalturaMetadataBatchService.prototype.getQueueSize = function(callback, workerQueueFilter){
  var kparams = {};
  this.client.addParam(kparams, "workerQueueFilter", kcb.toParams(workerQueueFilter));
  this.client.queueServiceActionCall("metadataBatch", "getQueueSize", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveJobsAction action allows to get a BatchJob 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param  jobType  string    The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
  if(!filter)
    filter = null;
  if(!jobType)
    jobType = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param  jobType  string    The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return  array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDone = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
  if(!filter)
    filter = null;
  if(!jobType)
    jobType = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDone", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("metadataBatch", "updateExclusiveJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *  .
 * @return  int.
 */
KalturaMetadataBatchService.prototype.cleanExclusiveJobs = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("metadataBatch", "cleanExclusiveJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add the data to the flavor asset conversion log, creates it if doesn't exists
 *  .
 * @param  flavorAssetId  string     (optional).
 * @param  data  string     (optional).
 * @return  .
 */
KalturaMetadataBatchService.prototype.logConversion = function(callback, flavorAssetId, data){
  var kparams = {};
  this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
  this.client.addParam(kparams, "data", data);
  this.client.queueServiceActionCall("metadataBatch", "logConversion", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch checkFileExists action check if the file exists
 *  .
 * @param  localPath  string     (optional).
 * @param  size  int     (optional).
 * @return  KalturaFileExistsResponse.
 */
KalturaMetadataBatchService.prototype.checkFileExists = function(callback, localPath, size){
  var kparams = {};
  this.client.addParam(kparams, "localPath", localPath);
  this.client.addParam(kparams, "size", size);
  this.client.queueServiceActionCall("metadataBatch", "checkFileExists", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: documents.
 * The available service actions:
 * @action  addFromUploadedFile  Add new document entry after the specific document file was uploaded and the upload token id exists
 *  .
 * @action  addFromEntry  Copy entry into new entry
 *  .
 * @action  addFromFlavorAsset  Copy flavor asset into new entry
 *  .
 * @action  convert  Convert entry
 *  .
 * @action  get  Get document entry by ID.
 *  .
 * @action  update  Update document entry. Only the properties that were set will be updated.
 *  .
 * @action  delete  Delete a document entry.
 *  .
 * @action  list  List document entries by filter with paging support.
 *  .
 * @action  upload  Upload a document file to Kaltura, then the file can be used to create a document entry.
 *  DEPRECATED - use upload.upload or uploadToken.add instead.
 * @action  convertPptToSwf  This will queue a batch job for converting the document file to swf
 *  Returns the URL where the new swf will be available 
 *  .
*/
var KalturaDocumentsService = module.exports.KalturaDocumentsService = function(client){
  this.init(client);
}
util.inherits(KalturaDocumentsService, kcb.KalturaServiceBase);
/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists
 *  .
 * @param  documentEntry  KalturaDocumentEntry    Document entry metadata (optional).
 * @param  uploadTokenId  string    Upload token id (optional).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
  var kparams = {};
  this.client.addParam(kparams, "documentEntry", kcb.toParams(documentEntry));
  this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
  this.client.queueServiceActionCall("documents", "addFromUploadedFile", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Copy entry into new entry
 *  .
 * @param  sourceEntryId  string    Document entry id to copy from (optional).
 * @param  documentEntry  KalturaDocumentEntry    Document entry metadata (optional, default: null).
 * @param  sourceFlavorParamsId  int    The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
  if(!documentEntry)
    documentEntry = null;
  if(!sourceFlavorParamsId)
    sourceFlavorParamsId = null;
  var kparams = {};
  this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
  if (documentEntry != null)
    this.client.addParam(kparams, "documentEntry", kcb.toParams(documentEntry));
  this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
  this.client.queueServiceActionCall("documents", "addFromEntry", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry
 *  .
 * @param  sourceFlavorAssetId  string    Flavor asset id to be used as the new entry source (optional).
 * @param  documentEntry  KalturaDocumentEntry    Document entry metadata (optional, default: null).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
  if(!documentEntry)
    documentEntry = null;
  var kparams = {};
  this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
  if (documentEntry != null)
    this.client.addParam(kparams, "documentEntry", kcb.toParams(documentEntry));
  this.client.queueServiceActionCall("documents", "addFromFlavorAsset", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Convert entry
 *  .
 * @param  entryId  string    Document entry id (optional).
 * @param  conversionProfileId  int     (optional, default: null).
 * @param  dynamicConversionAttributes  array     (optional, default: null).
 * @return  int.
 */
KalturaDocumentsService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
  if(!conversionProfileId)
    conversionProfileId = null;
  if(!dynamicConversionAttributes)
    dynamicConversionAttributes = null;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
  if(dynamicConversionAttributes != null)
  for(var index in dynamicConversionAttributes)
  {
    var obj = dynamicConversionAttributes[index];
    this.client.addParam(kparams, "dynamicConversionAttributes:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("documents", "convert", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get document entry by ID.
 *  .
 * @param  entryId  string    Document entry id (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.get = function(callback, entryId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("documents", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update document entry. Only the properties that were set will be updated.
 *  .
 * @param  entryId  string    Document entry id to update (optional).
 * @param  documentEntry  KalturaDocumentEntry    Document entry metadata to update (optional).
 * @return  KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.update = function(callback, entryId, documentEntry){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "documentEntry", kcb.toParams(documentEntry));
  this.client.queueServiceActionCall("documents", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete a document entry.
 *  .
 * @param  entryId  string    Document entry id to delete (optional).
 * @return  .
 */
KalturaDocumentsService.prototype.deleteAction = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("documents", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List document entries by filter with paging support.
 *  .
 * @param  filter  KalturaDocumentEntryFilter    Document entry filter (optional, default: null).
 * @param  pager  KalturaFilterPager    Pager (optional, default: null).
 * @return  KalturaDocumentListResponse.
 */
KalturaDocumentsService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("documents", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Upload a document file to Kaltura, then the file can be used to create a document entry.
 *  DEPRECATED - use upload.upload or uploadToken.add instead.
 * @param  fileData  file    The file data (optional).
 * @return  string.
 */
KalturaDocumentsService.prototype.upload = function(callback, fileData){
  var kparams = {};
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("documents", "upload", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * This will queue a batch job for converting the document file to swf
 *  Returns the URL where the new swf will be available 
 *  .
 * @param  entryId  string     (optional).
 * @return  string.
 */
KalturaDocumentsService.prototype.convertPptToSwf = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("documents", "convertPptToSwf", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: fileSync.
 * The available service actions:
 * @action  list  List file syce objects by filter and pager
 *  .
 * @action  sync  .
*/
var KalturaFileSyncService = module.exports.KalturaFileSyncService = function(client){
  this.init(client);
}
util.inherits(KalturaFileSyncService, kcb.KalturaServiceBase);
/**
 * List file syce objects by filter and pager
 *  .
 * @param  filter  KalturaFileSyncFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaFileSyncListResponse.
 */
KalturaFileSyncService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("fileSync", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  fileSyncId  int     (optional).
 * @param  fileData  file     (optional).
 * @return  KalturaFileSync.
 */
KalturaFileSyncService.prototype.sync = function(callback, fileSyncId, fileData){
  var kparams = {};
  this.client.addParam(kparams, "fileSyncId", fileSyncId);
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("fileSync", "sync", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: systemPartner.
 * The available service actions:
 * @action  get  Retrieve all info about partner
 *  This service gets partner id as parameter and accessable to the admin console partner only
 *  .
 * @action  getUsage  .
 * @action  list  .
 * @action  updateStatus  .
 * @action  getAdminSession  .
 * @action  updateConfiguration  .
 * @action  getConfiguration  .
 * @action  getPackages  .
 * @action  getPackagesClassOfService  .
 * @action  getPackagesVertical  .
 * @action  resetUserPassword  .
 * @action  listUserLoginData  .
*/
var KalturaSystemPartnerService = module.exports.KalturaSystemPartnerService = function(client){
  this.init(client);
}
util.inherits(KalturaSystemPartnerService, kcb.KalturaServiceBase);
/**
 * Retrieve all info about partner
 *  This service gets partner id as parameter and accessable to the admin console partner only
 *  .
 * @param  partnerId  int    X (optional).
 * @return  KalturaPartner.
 */
KalturaSystemPartnerService.prototype.get = function(callback, partnerId){
  var kparams = {};
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.queueServiceActionCall("systemPartner", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  partnerFilter  KalturaPartnerFilter     (optional, default: null).
 * @param  usageFilter  KalturaSystemPartnerUsageFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaSystemPartnerUsageListResponse.
 */
KalturaSystemPartnerService.prototype.getUsage = function(callback, partnerFilter, usageFilter, pager){
  if(!partnerFilter)
    partnerFilter = null;
  if(!usageFilter)
    usageFilter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (partnerFilter != null)
    this.client.addParam(kparams, "partnerFilter", kcb.toParams(partnerFilter));
  if (usageFilter != null)
    this.client.addParam(kparams, "usageFilter", kcb.toParams(usageFilter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("systemPartner", "getUsage", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  filter  KalturaPartnerFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaPartnerListResponse.
 */
KalturaSystemPartnerService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("systemPartner", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  partnerId  int     (optional).
 * @param  status  int     (optional, enum: KalturaPartnerStatus).
 * @return  .
 */
KalturaSystemPartnerService.prototype.updateStatus = function(callback, partnerId, status){
  var kparams = {};
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.addParam(kparams, "status", status);
  this.client.queueServiceActionCall("systemPartner", "updateStatus", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  partnerId  int     (optional).
 * @param  userId  string     (optional, default: null).
 * @return  string.
 */
KalturaSystemPartnerService.prototype.getAdminSession = function(callback, partnerId, userId){
  if(!userId)
    userId = null;
  var kparams = {};
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.addParam(kparams, "userId", userId);
  this.client.queueServiceActionCall("systemPartner", "getAdminSession", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  partnerId  int     (optional).
 * @param  configuration  KalturaSystemPartnerConfiguration     (optional).
 * @return  .
 */
KalturaSystemPartnerService.prototype.updateConfiguration = function(callback, partnerId, configuration){
  var kparams = {};
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.addParam(kparams, "configuration", kcb.toParams(configuration));
  this.client.queueServiceActionCall("systemPartner", "updateConfiguration", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  partnerId  int     (optional).
 * @return  KalturaSystemPartnerConfiguration.
 */
KalturaSystemPartnerService.prototype.getConfiguration = function(callback, partnerId){
  var kparams = {};
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.queueServiceActionCall("systemPartner", "getConfiguration", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @return  array.
 */
KalturaSystemPartnerService.prototype.getPackages = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("systemPartner", "getPackages", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @return  array.
 */
KalturaSystemPartnerService.prototype.getPackagesClassOfService = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("systemPartner", "getPackagesClassOfService", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @return  array.
 */
KalturaSystemPartnerService.prototype.getPackagesVertical = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("systemPartner", "getPackagesVertical", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  userId  string     (optional).
 * @param  partnerId  int     (optional).
 * @param  newPassword  string     (optional).
 * @return  .
 */
KalturaSystemPartnerService.prototype.resetUserPassword = function(callback, userId, partnerId, newPassword){
  var kparams = {};
  this.client.addParam(kparams, "userId", userId);
  this.client.addParam(kparams, "partnerId", partnerId);
  this.client.addParam(kparams, "newPassword", newPassword);
  this.client.queueServiceActionCall("systemPartner", "resetUserPassword", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  filter  KalturaUserLoginDataFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaUserLoginDataListResponse.
 */
KalturaSystemPartnerService.prototype.listUserLoginData = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("systemPartner", "listUserLoginData", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: flavorParamsOutput.
 * The available service actions:
 * @action  list  List flavor params output objects by filter and pager
 *  .
*/
var KalturaFlavorParamsOutputService = module.exports.KalturaFlavorParamsOutputService = function(client){
  this.init(client);
}
util.inherits(KalturaFlavorParamsOutputService, kcb.KalturaServiceBase);
/**
 * List flavor params output objects by filter and pager
 *  .
 * @param  filter  KalturaFlavorParamsOutputFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaFlavorParamsOutputListResponse.
 */
KalturaFlavorParamsOutputService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("flavorParamsOutput", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: thumbParamsOutput.
 * The available service actions:
 * @action  list  List thumb params output objects by filter and pager
 *  .
*/
var KalturaThumbParamsOutputService = module.exports.KalturaThumbParamsOutputService = function(client){
  this.init(client);
}
util.inherits(KalturaThumbParamsOutputService, kcb.KalturaServiceBase);
/**
 * List thumb params output objects by filter and pager
 *  .
 * @param  filter  KalturaThumbParamsOutputFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaThumbParamsOutputListResponse.
 */
KalturaThumbParamsOutputService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("thumbParamsOutput", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: entryAdmin.
 * The available service actions:
 * @action  get  Get base entry by ID with no filters.
 *  .
 * @action  getByFlavorId  Get base entry by flavor ID with no filters.
 *  .
 * @action  getTracks  Get base entry by ID with no filters.
 *  .
*/
var KalturaEntryAdminService = module.exports.KalturaEntryAdminService = function(client){
  this.init(client);
}
util.inherits(KalturaEntryAdminService, kcb.KalturaServiceBase);
/**
 * Get base entry by ID with no filters.
 *  .
 * @param  entryId  string    Entry id (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaBaseEntry.
 */
KalturaEntryAdminService.prototype.get = function(callback, entryId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("entryAdmin", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get base entry by flavor ID with no filters.
 *  .
 * @param  flavorId  string     (optional).
 * @param  version  int    Desired version of the data (optional, default: -1).
 * @return  KalturaBaseEntry.
 */
KalturaEntryAdminService.prototype.getByFlavorId = function(callback, flavorId, version){
  if(!version)
    version = -1;
  var kparams = {};
  this.client.addParam(kparams, "flavorId", flavorId);
  this.client.addParam(kparams, "version", version);
  this.client.queueServiceActionCall("entryAdmin", "getByFlavorId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get base entry by ID with no filters.
 *  .
 * @param  entryId  string    Entry id (optional).
 * @return  KalturaTrackEntryListResponse.
 */
KalturaEntryAdminService.prototype.getTracks = function(callback, entryId){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.queueServiceActionCall("entryAdmin", "getTracks", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: uiConfAdmin.
 * The available service actions:
 * @action  add  Adds new UIConf with no partner limitation
 *  .
 * @action  update  Update an existing UIConf with no partner limitation
 *  .
 * @action  get  Retrieve a UIConf by id with no partner limitation
 *  .
 * @action  delete  Delete an existing UIConf with no partner limitation
 *  .
 * @action  list  Retrieve a list of available UIConfs  with no partner limitation
 *  .
*/
var KalturaUiConfAdminService = module.exports.KalturaUiConfAdminService = function(client){
  this.init(client);
}
util.inherits(KalturaUiConfAdminService, kcb.KalturaServiceBase);
/**
 * Adds new UIConf with no partner limitation
 *  .
 * @param  uiConf  KalturaUiConfAdmin     (optional).
 * @return  KalturaUiConfAdmin.
 */
KalturaUiConfAdminService.prototype.add = function(callback, uiConf){
  var kparams = {};
  this.client.addParam(kparams, "uiConf", kcb.toParams(uiConf));
  this.client.queueServiceActionCall("uiConfAdmin", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing UIConf with no partner limitation
 *  .
 * @param  id  int     (optional).
 * @param  uiConf  KalturaUiConfAdmin     (optional).
 * @return  KalturaUiConfAdmin.
 */
KalturaUiConfAdminService.prototype.update = function(callback, id, uiConf){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "uiConf", kcb.toParams(uiConf));
  this.client.queueServiceActionCall("uiConfAdmin", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a UIConf by id with no partner limitation
 *  .
 * @param  id  int     (optional).
 * @return  KalturaUiConfAdmin.
 */
KalturaUiConfAdminService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("uiConfAdmin", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete an existing UIConf with no partner limitation
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaUiConfAdminService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("uiConfAdmin", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a list of available UIConfs  with no partner limitation
 *  .
 * @param  filter  KalturaUiConfFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaUiConfAdminListResponse.
 */
KalturaUiConfAdminService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("uiConfAdmin", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: reportAdmin.
 * The available service actions:
 * @action  add  .
 * @action  get  .
 * @action  list  .
 * @action  update  .
 * @action  delete  .
 * @action  executeDebug  .
 * @action  getParameters  .
 * @action  getCsvUrl  .
*/
var KalturaReportAdminService = module.exports.KalturaReportAdminService = function(client){
  this.init(client);
}
util.inherits(KalturaReportAdminService, kcb.KalturaServiceBase);
/**
 * .
 * @param  report  KalturaReport     (optional).
 * @return  KalturaReport.
 */
KalturaReportAdminService.prototype.add = function(callback, report){
  var kparams = {};
  this.client.addParam(kparams, "report", kcb.toParams(report));
  this.client.queueServiceActionCall("reportAdmin", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  id  int     (optional).
 * @return  KalturaReport.
 */
KalturaReportAdminService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("reportAdmin", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  filter  KalturaReportFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaReportListResponse.
 */
KalturaReportAdminService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("reportAdmin", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  id  int     (optional).
 * @param  report  KalturaReport     (optional).
 * @return  KalturaReport.
 */
KalturaReportAdminService.prototype.update = function(callback, id, report){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "report", kcb.toParams(report));
  this.client.queueServiceActionCall("reportAdmin", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaReportAdminService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("reportAdmin", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  id  int     (optional).
 * @param  params  array     (optional, default: null).
 * @return  KalturaReportResponse.
 */
KalturaReportAdminService.prototype.executeDebug = function(callback, id, params){
  if(!params)
    params = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  if(params != null)
  for(var index in params)
  {
    var obj = params[index];
    this.client.addParam(kparams, "params:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("reportAdmin", "executeDebug", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  id  int     (optional).
 * @return  array.
 */
KalturaReportAdminService.prototype.getParameters = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("reportAdmin", "getParameters", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  id  int     (optional).
 * @param  reportPartnerId  int     (optional).
 * @return  string.
 */
KalturaReportAdminService.prototype.getCsvUrl = function(callback, id, reportPartnerId){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "reportPartnerId", reportPartnerId);
  this.client.queueServiceActionCall("reportAdmin", "getCsvUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: KalturaInternalTools.
 * The available service actions:
*/
var KalturaKalturaInternalToolsService = module.exports.KalturaKalturaInternalToolsService = function(client){
  this.init(client);
}
util.inherits(KalturaKalturaInternalToolsService, kcb.KalturaServiceBase);

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: kalturaInternalToolsSystemHelper.
 * The available service actions:
 * @action  fromSecureString  KS from Secure String
 *  .
 * @action  iptocountry  from ip to country
 *  .
 * @action  getRemoteAddress  .
*/
var KalturaKalturaInternalToolsSystemHelperService = module.exports.KalturaKalturaInternalToolsSystemHelperService = function(client){
  this.init(client);
}
util.inherits(KalturaKalturaInternalToolsSystemHelperService, kcb.KalturaServiceBase);
/**
 * KS from Secure String
 *  .
 * @param  str  string     (optional).
 * @return  KalturaInternalToolsSession.
 */
KalturaKalturaInternalToolsSystemHelperService.prototype.fromSecureString = function(callback, str){
  var kparams = {};
  this.client.addParam(kparams, "str", str);
  this.client.queueServiceActionCall("kalturaInternalToolsSystemHelper", "fromSecureString", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * from ip to country
 *  .
 * @param  remote_addr  string     (optional).
 * @return  string.
 */
KalturaKalturaInternalToolsSystemHelperService.prototype.iptocountry = function(callback, remote_addr){
  var kparams = {};
  this.client.addParam(kparams, "remote_addr", remote_addr);
  this.client.queueServiceActionCall("kalturaInternalToolsSystemHelper", "iptocountry", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @return  string.
 */
KalturaKalturaInternalToolsSystemHelperService.prototype.getRemoteAddress = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("kalturaInternalToolsSystemHelper", "getRemoteAddress", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: auditTrail.
 * The available service actions:
 * @action  add  Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *  .
 * @action  get  Retrieve an audit trail object by id
 *  .
 * @action  list  List audit trail objects by filter and pager
 *  .
*/
var KalturaAuditTrailService = module.exports.KalturaAuditTrailService = function(client){
  this.init(client);
}
util.inherits(KalturaAuditTrailService, kcb.KalturaServiceBase);
/**
 * Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *  .
 * @param  auditTrail  KalturaAuditTrail     (optional).
 * @return  KalturaAuditTrail.
 */
KalturaAuditTrailService.prototype.add = function(callback, auditTrail){
  var kparams = {};
  this.client.addParam(kparams, "auditTrail", kcb.toParams(auditTrail));
  this.client.queueServiceActionCall("auditTrail", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve an audit trail object by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaAuditTrail.
 */
KalturaAuditTrailService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("auditTrail", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List audit trail objects by filter and pager
 *  .
 * @param  filter  KalturaAuditTrailFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaAuditTrailListResponse.
 */
KalturaAuditTrailService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("auditTrail", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: virusScanProfile.
 * The available service actions:
 * @action  list  List virus scan profile objects by filter and pager
 *  .
 * @action  add  Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *  .
 * @action  get  Retrieve an virus scan profile object by id
 *  .
 * @action  update  Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *  .
 * @action  delete  Mark the virus scan profile as deleted
 *  .
 * @action  scan  Scan flavor asset according to virus scan profile
 *  .
*/
var KalturaVirusScanProfileService = module.exports.KalturaVirusScanProfileService = function(client){
  this.init(client);
}
util.inherits(KalturaVirusScanProfileService, kcb.KalturaServiceBase);
/**
 * List virus scan profile objects by filter and pager
 *  .
 * @param  filter  KalturaVirusScanProfileFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaVirusScanProfileListResponse.
 */
KalturaVirusScanProfileService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("virusScanProfile", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *  .
 * @param  virusScanProfile  KalturaVirusScanProfile     (optional).
 * @return  KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.add = function(callback, virusScanProfile){
  var kparams = {};
  this.client.addParam(kparams, "virusScanProfile", kcb.toParams(virusScanProfile));
  this.client.queueServiceActionCall("virusScanProfile", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve an virus scan profile object by id
 *  .
 * @param  virusScanProfileId  int     (optional).
 * @return  KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.get = function(callback, virusScanProfileId){
  var kparams = {};
  this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
  this.client.queueServiceActionCall("virusScanProfile", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *  .
 * @param  virusScanProfileId  int     (optional).
 * @param  virusScanProfile  KalturaVirusScanProfile    Id (optional).
 * @return  KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.update = function(callback, virusScanProfileId, virusScanProfile){
  var kparams = {};
  this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
  this.client.addParam(kparams, "virusScanProfile", kcb.toParams(virusScanProfile));
  this.client.queueServiceActionCall("virusScanProfile", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Mark the virus scan profile as deleted
 *  .
 * @param  virusScanProfileId  int     (optional).
 * @return  KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.deleteAction = function(callback, virusScanProfileId){
  var kparams = {};
  this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
  this.client.queueServiceActionCall("virusScanProfile", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Scan flavor asset according to virus scan profile
 *  .
 * @param  flavorAssetId  string     (optional).
 * @param  virusScanProfileId  int     (optional, default: null).
 * @return  int.
 */
KalturaVirusScanProfileService.prototype.scan = function(callback, flavorAssetId, virusScanProfileId){
  if(!virusScanProfileId)
    virusScanProfileId = null;
  var kparams = {};
  this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
  this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
  this.client.queueServiceActionCall("virusScanProfile", "scan", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: virusScanBatch.
 * The available service actions:
 * @action  getExclusiveVirusScanJobs  batch getExclusiveVirusScanJob action allows to get a BatchJob of type VIRUS_SCAN 
 *  .
 * @action  updateExclusiveVirusScanJob  batch updateExclusiveVirusScanJob action updates a BatchJob of type VIRUS_SCAN that was claimed using the getExclusiveVirusScanJobs
 *  .
 * @action  freeExclusiveVirusScanJob  batch freeExclusiveVirusScanJob action frees a BatchJob of type VirusScan that was claimed using the getExclusiveVirusScanJobs
 *  .
 * @action  getExclusiveImportJobs  batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *  .
 * @action  updateExclusiveImportJob  batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @action  freeExclusiveImportJob  batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @action  getExclusiveBulkUploadJobs  batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *  .
 * @action  getExclusiveAlmostDoneBulkUploadJobs  batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *  .
 * @action  updateExclusiveBulkUploadJob  batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @action  freeExclusiveBulkUploadJob  batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @action  addBulkUploadResult  batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *  .
 * @action  getBulkUploadLastResult  batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *  .
 * @action  countBulkUploadEntries  Returns total created entries count
 *  .
 * @action  updateBulkUploadResults  batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *  .
 * @action  getExclusiveAlmostDoneConvertCollectionJobs  batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *  .
 * @action  getExclusiveAlmostDoneConvertProfileJobs  batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *  .
 * @action  updateExclusiveConvertCollectionJob  batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  updateExclusiveConvertProfileJob  batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  freeExclusiveConvertCollectionJob  batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  freeExclusiveConvertProfileJob  batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  getExclusiveConvertCollectionJobs  batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *  .
 * @action  getExclusiveConvertJobs  batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *  .
 * @action  getExclusiveAlmostDoneConvertJobs  batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *  .
 * @action  updateExclusiveConvertJob  batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  updateExclusiveConvertJobSubType  batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  freeExclusiveConvertJob  batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  getExclusivePostConvertJobs  batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *  .
 * @action  updateExclusivePostConvertJob  batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @action  freeExclusivePostConvertJob  batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @action  getExclusiveCaptureThumbJobs  batch getExclusiveCaptureThumbJob action allows to get a BatchJob of type CAPTURE_THUMB 
 *  .
 * @action  updateExclusiveCaptureThumbJob  batch updateExclusiveCaptureThumbJob action updates a BatchJob of type CAPTURE_THUMB that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @action  freeExclusiveCaptureThumbJob  batch freeExclusiveCaptureThumbJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @action  getExclusiveExtractMediaJobs  batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *  .
 * @action  updateExclusiveExtractMediaJob  batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @action  addMediaInfo  batch addMediaInfoAction action saves a media info object
 *  .
 * @action  freeExclusiveExtractMediaJob  batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @action  getExclusiveStorageExportJobs  batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *  .
 * @action  updateExclusiveStorageExportJob  batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @action  freeExclusiveStorageExportJob  batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @action  getExclusiveStorageDeleteJobs  batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *  .
 * @action  updateExclusiveStorageDeleteJob  batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @action  freeExclusiveStorageDeleteJob  batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @action  getExclusiveNotificationJobs  batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *  .
 * @action  updateExclusiveNotificationJob  batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *  .
 * @action  freeExclusiveNotificationJob  batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *  .
 * @action  getExclusiveMailJobs  batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *  .
 * @action  updateExclusiveMailJob  batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @action  freeExclusiveMailJob  batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @action  getExclusiveBulkDownloadJobs  batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *  .
 * @action  getExclusiveAlmostDoneBulkDownloadJobs  batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *  .
 * @action  updateExclusiveBulkDownloadJob  batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @action  freeExclusiveBulkDownloadJob  batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @action  getExclusiveProvisionProvideJobs  batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *  .
 * @action  getExclusiveAlmostDoneProvisionProvideJobs  batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *  .
 * @action  updateExclusiveProvisionProvideJob  batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @action  freeExclusiveProvisionProvideJob  batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @action  getExclusiveProvisionDeleteJobs  batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *  .
 * @action  getExclusiveAlmostDoneProvisionDeleteJobs  batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *  .
 * @action  updateExclusiveProvisionDeleteJob  batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @action  freeExclusiveProvisionDeleteJob  batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @action  resetJobExecutionAttempts  batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *  .
 * @action  freeExclusiveJob  batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *  .
 * @action  getQueueSize  batch getQueueSize action get the queue size for job type 
 *  .
 * @action  getExclusiveJobs  batch getExclusiveJobsAction action allows to get a BatchJob 
 *  .
 * @action  getExclusiveAlmostDone  batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *  .
 * @action  updateExclusiveJob  batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *  .
 * @action  cleanExclusiveJobs  batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *  .
 * @action  logConversion  Add the data to the flavor asset conversion log, creates it if doesn't exists
 *  .
 * @action  checkFileExists  batch checkFileExists action check if the file exists
 *  .
*/
var KalturaVirusScanBatchService = module.exports.KalturaVirusScanBatchService = function(client){
  this.init(client);
}
util.inherits(KalturaVirusScanBatchService, kcb.KalturaServiceBase);
/**
 * batch getExclusiveVirusScanJob action allows to get a BatchJob of type VIRUS_SCAN 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveVirusScanJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveVirusScanJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveVirusScanJob action updates a BatchJob of type VIRUS_SCAN that was claimed using the getExclusiveVirusScanJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveVirusScanJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveVirusScanJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveVirusScanJob action frees a BatchJob of type VirusScan that was claimed using the getExclusiveVirusScanJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveVirusScanJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveVirusScanJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveImportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveImportJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveImportJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveImportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveImportJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveImportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveBulkUploadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneBulkUploadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveBulkUploadJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveBulkUploadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveBulkUploadJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveBulkUploadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *  .
 * @param  bulkUploadResult  KalturaBulkUploadResult    The results to save to the DB (optional).
 * @param  pluginDataArray  array     (optional, default: null).
 * @return  KalturaBulkUploadResult.
 */
KalturaVirusScanBatchService.prototype.addBulkUploadResult = function(callback, bulkUploadResult, pluginDataArray){
  if(!pluginDataArray)
    pluginDataArray = null;
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadResult", kcb.toParams(bulkUploadResult));
  if(pluginDataArray != null)
  for(var index in pluginDataArray)
  {
    var obj = pluginDataArray[index];
    this.client.addParam(kparams, "pluginDataArray:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("virusScanBatch", "addBulkUploadResult", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *  .
 * @param  bulkUploadJobId  int    The id of the bulk upload job (optional).
 * @return  KalturaBulkUploadResult.
 */
KalturaVirusScanBatchService.prototype.getBulkUploadLastResult = function(callback, bulkUploadJobId){
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
  this.client.queueServiceActionCall("virusScanBatch", "getBulkUploadLastResult", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Returns total created entries count
 *  .
 * @param  bulkUploadJobId  int    The id of the bulk upload job (optional).
 * @return  int.
 */
KalturaVirusScanBatchService.prototype.countBulkUploadEntries = function(callback, bulkUploadJobId){
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
  this.client.queueServiceActionCall("virusScanBatch", "countBulkUploadEntries", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *  .
 * @param  bulkUploadJobId  int    The id of the bulk upload job (optional).
 * @return  int.
 */
KalturaVirusScanBatchService.prototype.updateBulkUploadResults = function(callback, bulkUploadJobId){
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
  this.client.queueServiceActionCall("virusScanBatch", "updateBulkUploadResults", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneConvertCollectionJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneConvertProfileJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneConvertProfileJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @param  flavorsData  array     (optional, default: null).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveConvertCollectionJob = function(callback, id, lockKey, job, flavorsData){
  if(!flavorsData)
    flavorsData = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  if(flavorsData != null)
  for(var index in flavorsData)
  {
    var obj = flavorsData[index];
    this.client.addParam(kparams, "flavorsData:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveConvertCollectionJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveConvertProfileJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveConvertProfileJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveConvertCollectionJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveConvertCollectionJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveConvertProfileJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveConvertProfileJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveConvertCollectionJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveConvertJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneConvertJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveConvertJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  subType  int     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveConvertJobSubType = function(callback, id, lockKey, subType){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "subType", subType);
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveConvertJobSubType", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusivePostConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusivePostConvertJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusivePostConvertJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusivePostConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusivePostConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusivePostConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveCaptureThumbJob action allows to get a BatchJob of type CAPTURE_THUMB 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveCaptureThumbJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveCaptureThumbJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveCaptureThumbJob action updates a BatchJob of type CAPTURE_THUMB that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveCaptureThumbJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveCaptureThumbJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveCaptureThumbJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveCaptureThumbJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveCaptureThumbJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveExtractMediaJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveExtractMediaJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveExtractMediaJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveExtractMediaJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch addMediaInfoAction action saves a media info object
 *  .
 * @param  mediaInfo  KalturaMediaInfo     (optional).
 * @return  KalturaMediaInfo.
 */
KalturaVirusScanBatchService.prototype.addMediaInfo = function(callback, mediaInfo){
  var kparams = {};
  this.client.addParam(kparams, "mediaInfo", kcb.toParams(mediaInfo));
  this.client.queueServiceActionCall("virusScanBatch", "addMediaInfo", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveExtractMediaJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveExtractMediaJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveStorageExportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveStorageExportJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveStorageExportJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveStorageExportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveStorageExportJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveStorageExportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveStorageDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveStorageDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveStorageDeleteJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveStorageDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveStorageDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveStorageDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  KalturaBatchGetExclusiveNotificationJobsResponse.
 */
KalturaVirusScanBatchService.prototype.getExclusiveNotificationJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveNotificationJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveNotificationJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveNotificationJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveNotificationJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveNotificationJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveMailJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveMailJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveMailJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveMailJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveMailJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveMailJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveBulkDownloadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneBulkDownloadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveBulkDownloadJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveBulkDownloadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveBulkDownloadJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveBulkDownloadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveProvisionProvideJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneProvisionProvideJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveProvisionProvideJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveProvisionProvideJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveProvisionProvideJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveProvisionProvideJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveProvisionDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneProvisionDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveProvisionDeleteJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveProvisionDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveProvisionDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveProvisionDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *  .
 * @param  id  int    The id of the job (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  jobType  string    The type of the job   (optional, enum: KalturaBatchJobType).
 * @return  .
 */
KalturaVirusScanBatchService.prototype.resetJobExecutionAttempts = function(callback, id, lockKey, jobType){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.queueServiceActionCall("virusScanBatch", "resetJobExecutionAttempts", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *  .
 * @param  id  int    The id of the job (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  jobType  string    The type of the job   (optional, enum: KalturaBatchJobType).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveJob = function(callback, id, lockKey, jobType, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getQueueSize action get the queue size for job type 
 *  .
 * @param  workerQueueFilter  KalturaWorkerQueueFilter    The worker filter   (optional).
 * @return  int.
 */
KalturaVirusScanBatchService.prototype.getQueueSize = function(callback, workerQueueFilter){
  var kparams = {};
  this.client.addParam(kparams, "workerQueueFilter", kcb.toParams(workerQueueFilter));
  this.client.queueServiceActionCall("virusScanBatch", "getQueueSize", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveJobsAction action allows to get a BatchJob 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param  jobType  string    The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
  if(!filter)
    filter = null;
  if(!jobType)
    jobType = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param  jobType  string    The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return  array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDone = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
  if(!filter)
    filter = null;
  if(!jobType)
    jobType = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDone", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *  .
 * @return  int.
 */
KalturaVirusScanBatchService.prototype.cleanExclusiveJobs = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("virusScanBatch", "cleanExclusiveJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add the data to the flavor asset conversion log, creates it if doesn't exists
 *  .
 * @param  flavorAssetId  string     (optional).
 * @param  data  string     (optional).
 * @return  .
 */
KalturaVirusScanBatchService.prototype.logConversion = function(callback, flavorAssetId, data){
  var kparams = {};
  this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
  this.client.addParam(kparams, "data", data);
  this.client.queueServiceActionCall("virusScanBatch", "logConversion", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch checkFileExists action check if the file exists
 *  .
 * @param  localPath  string     (optional).
 * @param  size  int     (optional).
 * @return  KalturaFileExistsResponse.
 */
KalturaVirusScanBatchService.prototype.checkFileExists = function(callback, localPath, size){
  var kparams = {};
  this.client.addParam(kparams, "localPath", localPath);
  this.client.addParam(kparams, "size", size);
  this.client.queueServiceActionCall("virusScanBatch", "checkFileExists", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: distributionProfile.
 * The available service actions:
 * @action  add  Add new Distribution Profile
 *  .
 * @action  get  Get Distribution Profile by id
 *  .
 * @action  update  Update Distribution Profile by id
 *  .
 * @action  updateStatus  Update Distribution Profile status by id
 *  .
 * @action  delete  Delete Distribution Profile by id
 *  .
 * @action  list  List all distribution providers
 *  .
 * @action  listByPartner  .
*/
var KalturaDistributionProfileService = module.exports.KalturaDistributionProfileService = function(client){
  this.init(client);
}
util.inherits(KalturaDistributionProfileService, kcb.KalturaServiceBase);
/**
 * Add new Distribution Profile
 *  .
 * @param  distributionProfile  KalturaDistributionProfile     (optional).
 * @return  KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.add = function(callback, distributionProfile){
  var kparams = {};
  this.client.addParam(kparams, "distributionProfile", kcb.toParams(distributionProfile));
  this.client.queueServiceActionCall("distributionProfile", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Distribution Profile by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("distributionProfile", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Distribution Profile by id
 *  .
 * @param  id  int     (optional).
 * @param  distributionProfile  KalturaDistributionProfile     (optional).
 * @return  KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.update = function(callback, id, distributionProfile){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "distributionProfile", kcb.toParams(distributionProfile));
  this.client.queueServiceActionCall("distributionProfile", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Distribution Profile status by id
 *  .
 * @param  id  int     (optional).
 * @param  status  int     (optional, enum: KalturaDistributionProfileStatus).
 * @return  KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.updateStatus = function(callback, id, status){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "status", status);
  this.client.queueServiceActionCall("distributionProfile", "updateStatus", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Distribution Profile by id
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaDistributionProfileService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("distributionProfile", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List all distribution providers
 *  .
 * @param  filter  KalturaDistributionProfileFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaDistributionProfileListResponse.
 */
KalturaDistributionProfileService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("distributionProfile", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  filter  KalturaPartnerFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaDistributionProfileListResponse.
 */
KalturaDistributionProfileService.prototype.listByPartner = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("distributionProfile", "listByPartner", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: entryDistribution.
 * The available service actions:
 * @action  add  Add new Entry Distribution
 *  .
 * @action  get  Get Entry Distribution by id
 *  .
 * @action  validate  Validates Entry Distribution by id for submission
 *  .
 * @action  update  Update Entry Distribution by id
 *  .
 * @action  delete  Delete Entry Distribution by id
 *  .
 * @action  list  List all distribution providers
 *  .
 * @action  submitAdd  Submits Entry Distribution to the remote destination
 *  .
 * @action  submitUpdate  Submits Entry Distribution changes to the remote destination
 *  .
 * @action  submitFetchReport  Submits Entry Distribution report request
 *  .
 * @action  submitDelete  Deletes Entry Distribution from the remote destination
 *  .
 * @action  retrySubmit  Retries last submit action
 *  .
*/
var KalturaEntryDistributionService = module.exports.KalturaEntryDistributionService = function(client){
  this.init(client);
}
util.inherits(KalturaEntryDistributionService, kcb.KalturaServiceBase);
/**
 * Add new Entry Distribution
 *  .
 * @param  entryDistribution  KalturaEntryDistribution     (optional).
 * @return  KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.add = function(callback, entryDistribution){
  var kparams = {};
  this.client.addParam(kparams, "entryDistribution", kcb.toParams(entryDistribution));
  this.client.queueServiceActionCall("entryDistribution", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Entry Distribution by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("entryDistribution", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Validates Entry Distribution by id for submission
 *  .
 * @param  id  int     (optional).
 * @return  KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.validate = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("entryDistribution", "validate", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Entry Distribution by id
 *  .
 * @param  id  int     (optional).
 * @param  entryDistribution  KalturaEntryDistribution     (optional).
 * @return  KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.update = function(callback, id, entryDistribution){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "entryDistribution", kcb.toParams(entryDistribution));
  this.client.queueServiceActionCall("entryDistribution", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Entry Distribution by id
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaEntryDistributionService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("entryDistribution", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List all distribution providers
 *  .
 * @param  filter  KalturaEntryDistributionFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaEntryDistributionListResponse.
 */
KalturaEntryDistributionService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("entryDistribution", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Submits Entry Distribution to the remote destination
 *  .
 * @param  id  int     (optional).
 * @param  submitWhenReady  bool     (optional, default: false).
 * @return  KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitAdd = function(callback, id, submitWhenReady){
  if(!submitWhenReady)
    submitWhenReady = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "submitWhenReady", submitWhenReady);
  this.client.queueServiceActionCall("entryDistribution", "submitAdd", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Submits Entry Distribution changes to the remote destination
 *  .
 * @param  id  int     (optional).
 * @return  KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitUpdate = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("entryDistribution", "submitUpdate", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Submits Entry Distribution report request
 *  .
 * @param  id  int     (optional).
 * @return  KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitFetchReport = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("entryDistribution", "submitFetchReport", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Deletes Entry Distribution from the remote destination
 *  .
 * @param  id  int     (optional).
 * @return  KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitDelete = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("entryDistribution", "submitDelete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retries last submit action
 *  .
 * @param  id  int     (optional).
 * @return  KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.retrySubmit = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("entryDistribution", "retrySubmit", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: distributionProvider.
 * The available service actions:
 * @action  list  List all distribution providers
 *  .
*/
var KalturaDistributionProviderService = module.exports.KalturaDistributionProviderService = function(client){
  this.init(client);
}
util.inherits(KalturaDistributionProviderService, kcb.KalturaServiceBase);
/**
 * List all distribution providers
 *  .
 * @param  filter  KalturaDistributionProviderFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaDistributionProviderListResponse.
 */
KalturaDistributionProviderService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("distributionProvider", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: genericDistributionProvider.
 * The available service actions:
 * @action  add  Add new Generic Distribution Provider
 *  .
 * @action  get  Get Generic Distribution Provider by id
 *  .
 * @action  update  Update Generic Distribution Provider by id
 *  .
 * @action  delete  Delete Generic Distribution Provider by id
 *  .
 * @action  list  List all distribution providers
 *  .
*/
var KalturaGenericDistributionProviderService = module.exports.KalturaGenericDistributionProviderService = function(client){
  this.init(client);
}
util.inherits(KalturaGenericDistributionProviderService, kcb.KalturaServiceBase);
/**
 * Add new Generic Distribution Provider
 *  .
 * @param  genericDistributionProvider  KalturaGenericDistributionProvider     (optional).
 * @return  KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.add = function(callback, genericDistributionProvider){
  var kparams = {};
  this.client.addParam(kparams, "genericDistributionProvider", kcb.toParams(genericDistributionProvider));
  this.client.queueServiceActionCall("genericDistributionProvider", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Generic Distribution Provider by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("genericDistributionProvider", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Generic Distribution Provider by id
 *  .
 * @param  id  int     (optional).
 * @param  genericDistributionProvider  KalturaGenericDistributionProvider     (optional).
 * @return  KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.update = function(callback, id, genericDistributionProvider){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "genericDistributionProvider", kcb.toParams(genericDistributionProvider));
  this.client.queueServiceActionCall("genericDistributionProvider", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Generic Distribution Provider by id
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaGenericDistributionProviderService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("genericDistributionProvider", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List all distribution providers
 *  .
 * @param  filter  KalturaGenericDistributionProviderFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaGenericDistributionProviderListResponse.
 */
KalturaGenericDistributionProviderService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("genericDistributionProvider", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: genericDistributionProviderAction.
 * The available service actions:
 * @action  add  Add new Generic Distribution Provider Action
 *  .
 * @action  addMrssTransform  Add MRSS transform file to generic distribution provider action
 *  .
 * @action  addMrssTransformFromFile  Add MRSS transform file to generic distribution provider action
 *  .
 * @action  addMrssValidate  Add MRSS validate file to generic distribution provider action
 *  .
 * @action  addMrssValidateFromFile  Add MRSS validate file to generic distribution provider action
 *  .
 * @action  addResultsTransform  Add results transform file to generic distribution provider action
 *  .
 * @action  addResultsTransformFromFile  Add MRSS transform file to generic distribution provider action
 *  .
 * @action  get  Get Generic Distribution Provider Action by id
 *  .
 * @action  getByProviderId  Get Generic Distribution Provider Action by provider id
 *  .
 * @action  updateByProviderId  Update Generic Distribution Provider Action by provider id
 *  .
 * @action  update  Update Generic Distribution Provider Action by id
 *  .
 * @action  delete  Delete Generic Distribution Provider Action by id
 *  .
 * @action  deleteByProviderId  Delete Generic Distribution Provider Action by provider id
 *  .
 * @action  list  List all distribution providers
 *  .
*/
var KalturaGenericDistributionProviderActionService = module.exports.KalturaGenericDistributionProviderActionService = function(client){
  this.init(client);
}
util.inherits(KalturaGenericDistributionProviderActionService, kcb.KalturaServiceBase);
/**
 * Add new Generic Distribution Provider Action
 *  .
 * @param  genericDistributionProviderAction  KalturaGenericDistributionProviderAction     (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.add = function(callback, genericDistributionProviderAction){
  var kparams = {};
  this.client.addParam(kparams, "genericDistributionProviderAction", kcb.toParams(genericDistributionProviderAction));
  this.client.queueServiceActionCall("genericDistributionProviderAction", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add MRSS transform file to generic distribution provider action
 *  .
 * @param  id  int    the id of the generic distribution provider action (optional).
 * @param  xslData  string    XSL MRSS transformation data (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssTransform = function(callback, id, xslData){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "xslData", xslData);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "addMrssTransform", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add MRSS transform file to generic distribution provider action
 *  .
 * @param  id  int    the id of the generic distribution provider action (optional).
 * @param  xslFile  file    XSL MRSS transformation file (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssTransformFromFile = function(callback, id, xslFile){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  kfiles = {};
  this.client.addParam(kfiles, "xslFile", xslFile);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "addMrssTransformFromFile", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add MRSS validate file to generic distribution provider action
 *  .
 * @param  id  int    the id of the generic distribution provider action (optional).
 * @param  xsdData  string    XSD MRSS validatation data (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssValidate = function(callback, id, xsdData){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "xsdData", xsdData);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "addMrssValidate", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add MRSS validate file to generic distribution provider action
 *  .
 * @param  id  int    the id of the generic distribution provider action (optional).
 * @param  xsdFile  file    XSD MRSS validatation file (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssValidateFromFile = function(callback, id, xsdFile){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  kfiles = {};
  this.client.addParam(kfiles, "xsdFile", xsdFile);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "addMrssValidateFromFile", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add results transform file to generic distribution provider action
 *  .
 * @param  id  int    the id of the generic distribution provider action (optional).
 * @param  transformData  string    transformation data xsl, xPath or regex (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addResultsTransform = function(callback, id, transformData){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "transformData", transformData);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "addResultsTransform", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add MRSS transform file to generic distribution provider action
 *  .
 * @param  id  int    the id of the generic distribution provider action (optional).
 * @param  transformFile  file    transformation file xsl, xPath or regex (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addResultsTransformFromFile = function(callback, id, transformFile){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  kfiles = {};
  this.client.addParam(kfiles, "transformFile", transformFile);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "addResultsTransformFromFile", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Generic Distribution Provider Action by id
 *  .
 * @param  id  int     (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Generic Distribution Provider Action by provider id
 *  .
 * @param  genericDistributionProviderId  int     (optional).
 * @param  actionType  int     (optional, enum: KalturaDistributionAction).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.getByProviderId = function(callback, genericDistributionProviderId, actionType){
  var kparams = {};
  this.client.addParam(kparams, "genericDistributionProviderId", genericDistributionProviderId);
  this.client.addParam(kparams, "actionType", actionType);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "getByProviderId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Generic Distribution Provider Action by provider id
 *  .
 * @param  genericDistributionProviderId  int     (optional).
 * @param  actionType  int     (optional, enum: KalturaDistributionAction).
 * @param  genericDistributionProviderAction  KalturaGenericDistributionProviderAction     (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.updateByProviderId = function(callback, genericDistributionProviderId, actionType, genericDistributionProviderAction){
  var kparams = {};
  this.client.addParam(kparams, "genericDistributionProviderId", genericDistributionProviderId);
  this.client.addParam(kparams, "actionType", actionType);
  this.client.addParam(kparams, "genericDistributionProviderAction", kcb.toParams(genericDistributionProviderAction));
  this.client.queueServiceActionCall("genericDistributionProviderAction", "updateByProviderId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Generic Distribution Provider Action by id
 *  .
 * @param  id  int     (optional).
 * @param  genericDistributionProviderAction  KalturaGenericDistributionProviderAction     (optional).
 * @return  KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.update = function(callback, id, genericDistributionProviderAction){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "genericDistributionProviderAction", kcb.toParams(genericDistributionProviderAction));
  this.client.queueServiceActionCall("genericDistributionProviderAction", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Generic Distribution Provider Action by id
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaGenericDistributionProviderActionService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Generic Distribution Provider Action by provider id
 *  .
 * @param  genericDistributionProviderId  int     (optional).
 * @param  actionType  int     (optional, enum: KalturaDistributionAction).
 * @return  .
 */
KalturaGenericDistributionProviderActionService.prototype.deleteByProviderId = function(callback, genericDistributionProviderId, actionType){
  var kparams = {};
  this.client.addParam(kparams, "genericDistributionProviderId", genericDistributionProviderId);
  this.client.addParam(kparams, "actionType", actionType);
  this.client.queueServiceActionCall("genericDistributionProviderAction", "deleteByProviderId", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List all distribution providers
 *  .
 * @param  filter  KalturaGenericDistributionProviderActionFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaGenericDistributionProviderActionListResponse.
 */
KalturaGenericDistributionProviderActionService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("genericDistributionProviderAction", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: contentDistributionBatch.
 * The available service actions:
 * @action  getExclusiveDistributionSubmitJobs  batch getExclusiveDistributionSubmitJob action allows to get a BatchJob of type DISTRIBUTION_SUBMIT 
 *  .
 * @action  updateExclusiveDistributionSubmitJob  batch updateExclusiveDistributionSubmitJob action updates a BatchJob of type DISTRIBUTION_SUBMIT that was claimed using the getExclusiveDistributionSubmitJobs
 *  .
 * @action  freeExclusiveDistributionSubmitJob  batch freeExclusiveDistributionSubmitJob action frees a BatchJob of type DistributionSubmit that was claimed using the getExclusiveDistributionSubmitJobs
 *  .
 * @action  getExclusiveAlmostDoneDistributionSubmitJobs  batch getExclusiveAlmostDoneDistributionSubmitJobs action allows to get a BatchJob of type DISTRIBUTION_SUBMIT that wait for remote closure 
 *  .
 * @action  getExclusiveDistributionUpdateJobs  batch getExclusiveDistributionUpdateJob action allows to get a BatchJob of type DISTRIBUTION_UPDATE 
 *  .
 * @action  updateExclusiveDistributionUpdateJob  batch updateExclusiveDistributionUpdateJob action updates a BatchJob of type DISTRIBUTION_UPDATE that was claimed using the getExclusiveDistributionUpdateJobs
 *  .
 * @action  freeExclusiveDistributionUpdateJob  batch freeExclusiveDistributionUpdateJob action frees a BatchJob of type DistributionUpdate that was claimed using the getExclusiveDistributionUpdateJobs
 *  .
 * @action  getExclusiveAlmostDoneDistributionUpdateJobs  batch getExclusiveAlmostDoneDistributionUpdateJobs action allows to get a BatchJob of type DISTRIBUTION_UPDATE that wait for remote closure 
 *  .
 * @action  getExclusiveDistributionEnableJobs  batch getExclusiveDistributionEnableJob action allows to get a BatchJob of type DISTRIBUTION_ENABLE 
 *  .
 * @action  updateExclusiveDistributionEnableJob  batch updateExclusiveDistributionEnableJob action updates a BatchJob of type DISTRIBUTION_ENABLE that was claimed using the getExclusiveDistributionEnableJobs
 *  .
 * @action  freeExclusiveDistributionEnableJob  batch freeExclusiveDistributionEnableJob action frees a BatchJob of type DistributionEnable that was claimed using the getExclusiveDistributionEnableJobs
 *  .
 * @action  getExclusiveAlmostDoneDistributionEnableJobs  batch getExclusiveAlmostDoneDistributionEnableJobs action allows to get a BatchJob of type DISTRIBUTION_ENABLE that wait for remote closure 
 *  .
 * @action  getExclusiveDistributionDisableJobs  batch getExclusiveDistributionDisableJob action allows to get a BatchJob of type DISTRIBUTION_DISABLE 
 *  .
 * @action  updateExclusiveDistributionDisableJob  batch updateExclusiveDistributionDisableJob action updates a BatchJob of type DISTRIBUTION_DISABLE that was claimed using the getExclusiveDistributionDisableJobs
 *  .
 * @action  freeExclusiveDistributionDisableJob  batch freeExclusiveDistributionDisableJob action frees a BatchJob of type DistributionDisable that was claimed using the getExclusiveDistributionDisableJobs
 *  .
 * @action  getExclusiveAlmostDoneDistributionDisableJobs  batch getExclusiveAlmostDoneDistributionDisableJobs action allows to get a BatchJob of type DISTRIBUTION_DISABLE that wait for remote closure 
 *  .
 * @action  getExclusiveDistributionDeleteJobs  batch getExclusiveDistributionDeleteJob action allows to get a BatchJob of type DISTRIBUTION_DELETE 
 *  .
 * @action  updateExclusiveDistributionDeleteJob  batch updateExclusiveDistributionDeleteJob action updates a BatchJob of type DISTRIBUTION_DELETE that was claimed using the getExclusiveDistributionDeleteJobs
 *  .
 * @action  freeExclusiveDistributionDeleteJob  batch freeExclusiveDistributionDeleteJob action frees a BatchJob of type DistributionDelete that was claimed using the getExclusiveDistributionDeleteJobs
 *  .
 * @action  getExclusiveAlmostDoneDistributionDeleteJobs  batch getExclusiveAlmostDoneDistributionDeleteJobs action allows to get a BatchJob of type DISTRIBUTION_DELETE that wait for remote closure 
 *  .
 * @action  getExclusiveDistributionFetchReportJobs  batch getExclusiveDistributionFetchReportJob action allows to get a BatchJob of type DISTRIBUTION_FETCH_REPORT 
 *  .
 * @action  updateExclusiveDistributionFetchReportJob  batch updateExclusiveDistributionFetchReportJob action updates a BatchJob of type DISTRIBUTION_FETCH_REPORT that was claimed using the getExclusiveDistributionFetchReportJobs
 *  .
 * @action  freeExclusiveDistributionFetchReportJob  batch freeExclusiveDistributionFetchReportJob action frees a BatchJob of type DistributionFetchReport that was claimed using the getExclusiveDistributionFetchReportJobs
 *  .
 * @action  getExclusiveAlmostDoneDistributionFetchReportJobs  batch getExclusiveAlmostDoneDistributionFetchReportJobs action allows to get a BatchJob of type DISTRIBUTION_FETCH_REPORT that wait for remote closure 
 *  .
 * @action  updateSunStatus  updates entry distribution sun status in the search engine
 *  .
 * @action  createRequiredJobs  creates all required jobs according to entry distribution dirty flags 
 *  .
 * @action  getAssetUrl  returns absolute valid url for asset file
 *  .
 * @action  getExclusiveImportJobs  batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *  .
 * @action  updateExclusiveImportJob  batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @action  freeExclusiveImportJob  batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @action  getExclusiveBulkUploadJobs  batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *  .
 * @action  getExclusiveAlmostDoneBulkUploadJobs  batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *  .
 * @action  updateExclusiveBulkUploadJob  batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @action  freeExclusiveBulkUploadJob  batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @action  addBulkUploadResult  batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *  .
 * @action  getBulkUploadLastResult  batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *  .
 * @action  countBulkUploadEntries  Returns total created entries count
 *  .
 * @action  updateBulkUploadResults  batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *  .
 * @action  getExclusiveAlmostDoneConvertCollectionJobs  batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *  .
 * @action  getExclusiveAlmostDoneConvertProfileJobs  batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *  .
 * @action  updateExclusiveConvertCollectionJob  batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  updateExclusiveConvertProfileJob  batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  freeExclusiveConvertCollectionJob  batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  freeExclusiveConvertProfileJob  batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  getExclusiveConvertCollectionJobs  batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *  .
 * @action  getExclusiveConvertJobs  batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *  .
 * @action  getExclusiveAlmostDoneConvertJobs  batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *  .
 * @action  updateExclusiveConvertJob  batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  updateExclusiveConvertJobSubType  batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  freeExclusiveConvertJob  batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *  .
 * @action  getExclusivePostConvertJobs  batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *  .
 * @action  updateExclusivePostConvertJob  batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @action  freeExclusivePostConvertJob  batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @action  getExclusiveCaptureThumbJobs  batch getExclusiveCaptureThumbJob action allows to get a BatchJob of type CAPTURE_THUMB 
 *  .
 * @action  updateExclusiveCaptureThumbJob  batch updateExclusiveCaptureThumbJob action updates a BatchJob of type CAPTURE_THUMB that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @action  freeExclusiveCaptureThumbJob  batch freeExclusiveCaptureThumbJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @action  getExclusiveExtractMediaJobs  batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *  .
 * @action  updateExclusiveExtractMediaJob  batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @action  addMediaInfo  batch addMediaInfoAction action saves a media info object
 *  .
 * @action  freeExclusiveExtractMediaJob  batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @action  getExclusiveStorageExportJobs  batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *  .
 * @action  updateExclusiveStorageExportJob  batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @action  freeExclusiveStorageExportJob  batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @action  getExclusiveStorageDeleteJobs  batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *  .
 * @action  updateExclusiveStorageDeleteJob  batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @action  freeExclusiveStorageDeleteJob  batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @action  getExclusiveNotificationJobs  batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *  .
 * @action  updateExclusiveNotificationJob  batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *  .
 * @action  freeExclusiveNotificationJob  batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *  .
 * @action  getExclusiveMailJobs  batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *  .
 * @action  updateExclusiveMailJob  batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @action  freeExclusiveMailJob  batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @action  getExclusiveBulkDownloadJobs  batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *  .
 * @action  getExclusiveAlmostDoneBulkDownloadJobs  batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *  .
 * @action  updateExclusiveBulkDownloadJob  batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @action  freeExclusiveBulkDownloadJob  batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @action  getExclusiveProvisionProvideJobs  batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *  .
 * @action  getExclusiveAlmostDoneProvisionProvideJobs  batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *  .
 * @action  updateExclusiveProvisionProvideJob  batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @action  freeExclusiveProvisionProvideJob  batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @action  getExclusiveProvisionDeleteJobs  batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *  .
 * @action  getExclusiveAlmostDoneProvisionDeleteJobs  batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *  .
 * @action  updateExclusiveProvisionDeleteJob  batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @action  freeExclusiveProvisionDeleteJob  batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @action  resetJobExecutionAttempts  batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *  .
 * @action  freeExclusiveJob  batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *  .
 * @action  getQueueSize  batch getQueueSize action get the queue size for job type 
 *  .
 * @action  getExclusiveJobs  batch getExclusiveJobsAction action allows to get a BatchJob 
 *  .
 * @action  getExclusiveAlmostDone  batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *  .
 * @action  updateExclusiveJob  batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *  .
 * @action  cleanExclusiveJobs  batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *  .
 * @action  logConversion  Add the data to the flavor asset conversion log, creates it if doesn't exists
 *  .
 * @action  checkFileExists  batch checkFileExists action check if the file exists
 *  .
*/
var KalturaContentDistributionBatchService = module.exports.KalturaContentDistributionBatchService = function(client){
  this.init(client);
}
util.inherits(KalturaContentDistributionBatchService, kcb.KalturaServiceBase);
/**
 * batch getExclusiveDistributionSubmitJob action allows to get a BatchJob of type DISTRIBUTION_SUBMIT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveDistributionSubmitJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveDistributionSubmitJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveDistributionSubmitJob action updates a BatchJob of type DISTRIBUTION_SUBMIT that was claimed using the getExclusiveDistributionSubmitJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveDistributionSubmitJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveDistributionSubmitJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveDistributionSubmitJob action frees a BatchJob of type DistributionSubmit that was claimed using the getExclusiveDistributionSubmitJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveDistributionSubmitJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveDistributionSubmitJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneDistributionSubmitJobs action allows to get a BatchJob of type DISTRIBUTION_SUBMIT that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneDistributionSubmitJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneDistributionSubmitJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveDistributionUpdateJob action allows to get a BatchJob of type DISTRIBUTION_UPDATE 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveDistributionUpdateJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveDistributionUpdateJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveDistributionUpdateJob action updates a BatchJob of type DISTRIBUTION_UPDATE that was claimed using the getExclusiveDistributionUpdateJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveDistributionUpdateJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveDistributionUpdateJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveDistributionUpdateJob action frees a BatchJob of type DistributionUpdate that was claimed using the getExclusiveDistributionUpdateJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveDistributionUpdateJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveDistributionUpdateJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneDistributionUpdateJobs action allows to get a BatchJob of type DISTRIBUTION_UPDATE that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneDistributionUpdateJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneDistributionUpdateJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveDistributionEnableJob action allows to get a BatchJob of type DISTRIBUTION_ENABLE 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveDistributionEnableJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveDistributionEnableJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveDistributionEnableJob action updates a BatchJob of type DISTRIBUTION_ENABLE that was claimed using the getExclusiveDistributionEnableJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveDistributionEnableJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveDistributionEnableJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveDistributionEnableJob action frees a BatchJob of type DistributionEnable that was claimed using the getExclusiveDistributionEnableJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveDistributionEnableJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveDistributionEnableJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneDistributionEnableJobs action allows to get a BatchJob of type DISTRIBUTION_ENABLE that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneDistributionEnableJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneDistributionEnableJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveDistributionDisableJob action allows to get a BatchJob of type DISTRIBUTION_DISABLE 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveDistributionDisableJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveDistributionDisableJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveDistributionDisableJob action updates a BatchJob of type DISTRIBUTION_DISABLE that was claimed using the getExclusiveDistributionDisableJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveDistributionDisableJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveDistributionDisableJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveDistributionDisableJob action frees a BatchJob of type DistributionDisable that was claimed using the getExclusiveDistributionDisableJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveDistributionDisableJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveDistributionDisableJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneDistributionDisableJobs action allows to get a BatchJob of type DISTRIBUTION_DISABLE that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneDistributionDisableJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneDistributionDisableJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveDistributionDeleteJob action allows to get a BatchJob of type DISTRIBUTION_DELETE 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveDistributionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveDistributionDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveDistributionDeleteJob action updates a BatchJob of type DISTRIBUTION_DELETE that was claimed using the getExclusiveDistributionDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveDistributionDeleteJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveDistributionDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveDistributionDeleteJob action frees a BatchJob of type DistributionDelete that was claimed using the getExclusiveDistributionDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveDistributionDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveDistributionDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneDistributionDeleteJobs action allows to get a BatchJob of type DISTRIBUTION_DELETE that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneDistributionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneDistributionDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveDistributionFetchReportJob action allows to get a BatchJob of type DISTRIBUTION_FETCH_REPORT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveDistributionFetchReportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveDistributionFetchReportJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveDistributionFetchReportJob action updates a BatchJob of type DISTRIBUTION_FETCH_REPORT that was claimed using the getExclusiveDistributionFetchReportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveDistributionFetchReportJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveDistributionFetchReportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveDistributionFetchReportJob action frees a BatchJob of type DistributionFetchReport that was claimed using the getExclusiveDistributionFetchReportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveDistributionFetchReportJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveDistributionFetchReportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneDistributionFetchReportJobs action allows to get a BatchJob of type DISTRIBUTION_FETCH_REPORT that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneDistributionFetchReportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneDistributionFetchReportJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * updates entry distribution sun status in the search engine
 *  .
 * @return  .
 */
KalturaContentDistributionBatchService.prototype.updateSunStatus = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("contentDistributionBatch", "updateSunStatus", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * creates all required jobs according to entry distribution dirty flags 
 *  .
 * @return  .
 */
KalturaContentDistributionBatchService.prototype.createRequiredJobs = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("contentDistributionBatch", "createRequiredJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * returns absolute valid url for asset file
 *  .
 * @param  assetId  string     (optional).
 * @return  string.
 */
KalturaContentDistributionBatchService.prototype.getAssetUrl = function(callback, assetId){
  var kparams = {};
  this.client.addParam(kparams, "assetId", assetId);
  this.client.queueServiceActionCall("contentDistributionBatch", "getAssetUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveImportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveImportJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveImportJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveImportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveImportJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveImportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveBulkUploadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneBulkUploadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveBulkUploadJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveBulkUploadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveBulkUploadJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveBulkUploadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *  .
 * @param  bulkUploadResult  KalturaBulkUploadResult    The results to save to the DB (optional).
 * @param  pluginDataArray  array     (optional, default: null).
 * @return  KalturaBulkUploadResult.
 */
KalturaContentDistributionBatchService.prototype.addBulkUploadResult = function(callback, bulkUploadResult, pluginDataArray){
  if(!pluginDataArray)
    pluginDataArray = null;
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadResult", kcb.toParams(bulkUploadResult));
  if(pluginDataArray != null)
  for(var index in pluginDataArray)
  {
    var obj = pluginDataArray[index];
    this.client.addParam(kparams, "pluginDataArray:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("contentDistributionBatch", "addBulkUploadResult", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *  .
 * @param  bulkUploadJobId  int    The id of the bulk upload job (optional).
 * @return  KalturaBulkUploadResult.
 */
KalturaContentDistributionBatchService.prototype.getBulkUploadLastResult = function(callback, bulkUploadJobId){
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
  this.client.queueServiceActionCall("contentDistributionBatch", "getBulkUploadLastResult", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Returns total created entries count
 *  .
 * @param  bulkUploadJobId  int    The id of the bulk upload job (optional).
 * @return  int.
 */
KalturaContentDistributionBatchService.prototype.countBulkUploadEntries = function(callback, bulkUploadJobId){
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
  this.client.queueServiceActionCall("contentDistributionBatch", "countBulkUploadEntries", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *  .
 * @param  bulkUploadJobId  int    The id of the bulk upload job (optional).
 * @return  int.
 */
KalturaContentDistributionBatchService.prototype.updateBulkUploadResults = function(callback, bulkUploadJobId){
  var kparams = {};
  this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
  this.client.queueServiceActionCall("contentDistributionBatch", "updateBulkUploadResults", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneConvertCollectionJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneConvertProfileJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneConvertProfileJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @param  flavorsData  array     (optional, default: null).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveConvertCollectionJob = function(callback, id, lockKey, job, flavorsData){
  if(!flavorsData)
    flavorsData = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  if(flavorsData != null)
  for(var index in flavorsData)
  {
    var obj = flavorsData[index];
    this.client.addParam(kparams, "flavorsData:" + index, kcb.toParams(obj));
  }
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveConvertCollectionJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveConvertProfileJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveConvertProfileJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveConvertCollectionJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveConvertCollectionJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveConvertProfileJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveConvertProfileJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveConvertCollectionJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveConvertJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneConvertJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveConvertJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  subType  int     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveConvertJobSubType = function(callback, id, lockKey, subType){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "subType", subType);
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveConvertJobSubType", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusivePostConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusivePostConvertJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusivePostConvertJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusivePostConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusivePostConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusivePostConvertJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveCaptureThumbJob action allows to get a BatchJob of type CAPTURE_THUMB 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveCaptureThumbJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveCaptureThumbJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveCaptureThumbJob action updates a BatchJob of type CAPTURE_THUMB that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveCaptureThumbJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveCaptureThumbJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveCaptureThumbJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveCaptureThumbJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveCaptureThumbJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveCaptureThumbJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveExtractMediaJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveExtractMediaJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveExtractMediaJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveExtractMediaJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch addMediaInfoAction action saves a media info object
 *  .
 * @param  mediaInfo  KalturaMediaInfo     (optional).
 * @return  KalturaMediaInfo.
 */
KalturaContentDistributionBatchService.prototype.addMediaInfo = function(callback, mediaInfo){
  var kparams = {};
  this.client.addParam(kparams, "mediaInfo", kcb.toParams(mediaInfo));
  this.client.queueServiceActionCall("contentDistributionBatch", "addMediaInfo", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveExtractMediaJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveExtractMediaJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveStorageExportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveStorageExportJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveStorageExportJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveStorageExportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveStorageExportJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveStorageExportJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveStorageDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveStorageDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveStorageDeleteJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveStorageDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveStorageDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveStorageDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  KalturaBatchGetExclusiveNotificationJobsResponse.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveNotificationJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveNotificationJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveNotificationJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveNotificationJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveNotificationJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveNotificationJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveMailJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveMailJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveMailJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveMailJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveMailJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveMailJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveBulkDownloadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneBulkDownloadJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveBulkDownloadJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveBulkDownloadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveBulkDownloadJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveBulkDownloadJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveProvisionProvideJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneProvisionProvideJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveProvisionProvideJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveProvisionProvideJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveProvisionProvideJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveProvisionProvideJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveProvisionDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDoneProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDoneProvisionDeleteJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveProvisionDeleteJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveProvisionDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveProvisionDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveProvisionDeleteJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *  .
 * @param  id  int    The id of the job (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  jobType  string    The type of the job   (optional, enum: KalturaBatchJobType).
 * @return  .
 */
KalturaContentDistributionBatchService.prototype.resetJobExecutionAttempts = function(callback, id, lockKey, jobType){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.queueServiceActionCall("contentDistributionBatch", "resetJobExecutionAttempts", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *  .
 * @param  id  int    The id of the job (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param  jobType  string    The type of the job   (optional, enum: KalturaBatchJobType).
 * @param  resetExecutionAttempts  bool    Resets the job execution attampts to zero   (optional, default: false).
 * @return  KalturaFreeJobResponse.
 */
KalturaContentDistributionBatchService.prototype.freeExclusiveJob = function(callback, id, lockKey, jobType, resetExecutionAttempts){
  if(!resetExecutionAttempts)
    resetExecutionAttempts = false;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
  this.client.queueServiceActionCall("contentDistributionBatch", "freeExclusiveJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getQueueSize action get the queue size for job type 
 *  .
 * @param  workerQueueFilter  KalturaWorkerQueueFilter    The worker filter   (optional).
 * @return  int.
 */
KalturaContentDistributionBatchService.prototype.getQueueSize = function(callback, workerQueueFilter){
  var kparams = {};
  this.client.addParam(kparams, "workerQueueFilter", kcb.toParams(workerQueueFilter));
  this.client.queueServiceActionCall("contentDistributionBatch", "getQueueSize", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveJobsAction action allows to get a BatchJob 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param  jobType  string    The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
  if(!filter)
    filter = null;
  if(!jobType)
    jobType = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *  .
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  maxExecutionTime  int    The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param  numberOfJobs  int    The maximum number of jobs to return.  (optional).
 * @param  filter  KalturaBatchJobFilter    Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param  jobType  string    The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return  array.
 */
KalturaContentDistributionBatchService.prototype.getExclusiveAlmostDone = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
  if(!filter)
    filter = null;
  if(!jobType)
    jobType = null;
  var kparams = {};
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
  this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.addParam(kparams, "jobType", jobType);
  this.client.queueServiceActionCall("contentDistributionBatch", "getExclusiveAlmostDone", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *  .
 * @param  id  int    The id of the job to free (optional).
 * @param  lockKey  KalturaExclusiveLockKey    The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param  job  KalturaBatchJob     (optional).
 * @return  KalturaBatchJob.
 */
KalturaContentDistributionBatchService.prototype.updateExclusiveJob = function(callback, id, lockKey, job){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "lockKey", kcb.toParams(lockKey));
  this.client.addParam(kparams, "job", kcb.toParams(job));
  this.client.queueServiceActionCall("contentDistributionBatch", "updateExclusiveJob", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *  .
 * @return  int.
 */
KalturaContentDistributionBatchService.prototype.cleanExclusiveJobs = function(callback){
  var kparams = {};
  this.client.queueServiceActionCall("contentDistributionBatch", "cleanExclusiveJobs", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Add the data to the flavor asset conversion log, creates it if doesn't exists
 *  .
 * @param  flavorAssetId  string     (optional).
 * @param  data  string     (optional).
 * @return  .
 */
KalturaContentDistributionBatchService.prototype.logConversion = function(callback, flavorAssetId, data){
  var kparams = {};
  this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
  this.client.addParam(kparams, "data", data);
  this.client.queueServiceActionCall("contentDistributionBatch", "logConversion", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * batch checkFileExists action check if the file exists
 *  .
 * @param  localPath  string     (optional).
 * @param  size  int     (optional).
 * @return  KalturaFileExistsResponse.
 */
KalturaContentDistributionBatchService.prototype.checkFileExists = function(callback, localPath, size){
  var kparams = {};
  this.client.addParam(kparams, "localPath", localPath);
  this.client.addParam(kparams, "size", size);
  this.client.queueServiceActionCall("contentDistributionBatch", "checkFileExists", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: cuePoint.
 * The available service actions:
 * @action  add  Allows you to add an cue point object associated with an entry
 *  .
 * @action  addFromBulk  Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions
 *  .
 * @action  get  Retrieve an CuePoint object by id
 *  .
 * @action  list  List cue point objects by filter and pager
 *  .
 * @action  count  count cue point objects by filter
 *  .
 * @action  update  Update cue point by id 
 *  .
 * @action  delete  delete cue point by id, and delete all children cue points
 *  .
*/
var KalturaCuePointService = module.exports.KalturaCuePointService = function(client){
  this.init(client);
}
util.inherits(KalturaCuePointService, kcb.KalturaServiceBase);
/**
 * Allows you to add an cue point object associated with an entry
 *  .
 * @param  cuePoint  KalturaCuePoint     (optional).
 * @return  KalturaCuePoint.
 */
KalturaCuePointService.prototype.add = function(callback, cuePoint){
  var kparams = {};
  this.client.addParam(kparams, "cuePoint", kcb.toParams(cuePoint));
  this.client.queueServiceActionCall("cuePoint", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions
 *  .
 * @param  fileData  file     (optional).
 * @return  KalturaCuePointListResponse.
 */
KalturaCuePointService.prototype.addFromBulk = function(callback, fileData){
  var kparams = {};
  kfiles = {};
  this.client.addParam(kfiles, "fileData", fileData);
  this.client.queueServiceActionCall("cuePoint", "addFromBulk", kparams, kfiles);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve an CuePoint object by id
 *  .
 * @param  id  string     (optional).
 * @return  KalturaCuePoint.
 */
KalturaCuePointService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("cuePoint", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List cue point objects by filter and pager
 *  .
 * @param  filter  KalturaCuePointFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaCuePointListResponse.
 */
KalturaCuePointService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("cuePoint", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * count cue point objects by filter
 *  .
 * @param  filter  KalturaCuePointFilter     (optional, default: null).
 * @return  int.
 */
KalturaCuePointService.prototype.count = function(callback, filter){
  if(!filter)
    filter = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  this.client.queueServiceActionCall("cuePoint", "count", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update cue point by id 
 *  .
 * @param  id  string     (optional).
 * @param  cuePoint  KalturaCuePoint     (optional).
 * @return  KalturaCuePoint.
 */
KalturaCuePointService.prototype.update = function(callback, id, cuePoint){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "cuePoint", kcb.toParams(cuePoint));
  this.client.queueServiceActionCall("cuePoint", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * delete cue point by id, and delete all children cue points
 *  .
 * @param  id  string     (optional).
 * @return  .
 */
KalturaCuePointService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("cuePoint", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: shortLink.
 * The available service actions:
 * @action  list  List short link objects by filter and pager
 *  .
 * @action  add  Allows you to add a short link object
 *  .
 * @action  get  Retrieve an short link object by id
 *  .
 * @action  update  Update exisitng short link
 *  .
 * @action  delete  Mark the short link as deleted
 *  .
*/
var KalturaShortLinkService = module.exports.KalturaShortLinkService = function(client){
  this.init(client);
}
util.inherits(KalturaShortLinkService, kcb.KalturaServiceBase);
/**
 * List short link objects by filter and pager
 *  .
 * @param  filter  KalturaShortLinkFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaShortLinkListResponse.
 */
KalturaShortLinkService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("shortLink", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Allows you to add a short link object
 *  .
 * @param  shortLink  KalturaShortLink     (optional).
 * @return  KalturaShortLink.
 */
KalturaShortLinkService.prototype.add = function(callback, shortLink){
  var kparams = {};
  this.client.addParam(kparams, "shortLink", kcb.toParams(shortLink));
  this.client.queueServiceActionCall("shortLink", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve an short link object by id
 *  .
 * @param  id  string     (optional).
 * @return  KalturaShortLink.
 */
KalturaShortLinkService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("shortLink", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update exisitng short link
 *  .
 * @param  id  string     (optional).
 * @param  shortLink  KalturaShortLink     (optional).
 * @return  KalturaShortLink.
 */
KalturaShortLinkService.prototype.update = function(callback, id, shortLink){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "shortLink", kcb.toParams(shortLink));
  this.client.queueServiceActionCall("shortLink", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Mark the short link as deleted
 *  .
 * @param  id  string     (optional).
 * @return  KalturaShortLink.
 */
KalturaShortLinkService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("shortLink", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: dropFolder.
 * The available service actions:
 * @action  add  Allows you to add a new KalturaDropFolder object
 *  .
 * @action  get  Retrieve a KalturaDropFolder object by ID
 *  .
 * @action  update  Update an existing KalturaDropFolder object
 *  .
 * @action  delete  Mark the KalturaDropFolder object as deleted
 *  .
 * @action  list  List KalturaDropFolder objects
 *  .
*/
var KalturaDropFolderService = module.exports.KalturaDropFolderService = function(client){
  this.init(client);
}
util.inherits(KalturaDropFolderService, kcb.KalturaServiceBase);
/**
 * Allows you to add a new KalturaDropFolder object
 *  .
 * @param  dropFolder  KalturaDropFolder     (optional).
 * @return  KalturaDropFolder.
 */
KalturaDropFolderService.prototype.add = function(callback, dropFolder){
  var kparams = {};
  this.client.addParam(kparams, "dropFolder", kcb.toParams(dropFolder));
  this.client.queueServiceActionCall("dropFolder", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaDropFolder object by ID
 *  .
 * @param  dropFolderId  int     (optional).
 * @return  KalturaDropFolder.
 */
KalturaDropFolderService.prototype.get = function(callback, dropFolderId){
  var kparams = {};
  this.client.addParam(kparams, "dropFolderId", dropFolderId);
  this.client.queueServiceActionCall("dropFolder", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing KalturaDropFolder object
 *  .
 * @param  dropFolderId  int     (optional).
 * @param  dropFolder  KalturaDropFolder    Id (optional).
 * @return  KalturaDropFolder.
 */
KalturaDropFolderService.prototype.update = function(callback, dropFolderId, dropFolder){
  var kparams = {};
  this.client.addParam(kparams, "dropFolderId", dropFolderId);
  this.client.addParam(kparams, "dropFolder", kcb.toParams(dropFolder));
  this.client.queueServiceActionCall("dropFolder", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Mark the KalturaDropFolder object as deleted
 *  .
 * @param  dropFolderId  int     (optional).
 * @return  KalturaDropFolder.
 */
KalturaDropFolderService.prototype.deleteAction = function(callback, dropFolderId){
  var kparams = {};
  this.client.addParam(kparams, "dropFolderId", dropFolderId);
  this.client.queueServiceActionCall("dropFolder", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List KalturaDropFolder objects
 *  .
 * @param  filter  KalturaDropFolderFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaDropFolderListResponse.
 */
KalturaDropFolderService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("dropFolder", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: dropFolderFile.
 * The available service actions:
 * @action  add  Allows you to add a new KalturaDropFolderFile object
 *  .
 * @action  get  Retrieve a KalturaDropFolderFile object by ID
 *  .
 * @action  update  Update an existing KalturaDropFolderFile object
 *  .
 * @action  updateStatus  Update status of KalturaDropFolderFile
 *  .
 * @action  delete  Mark the KalturaDropFolderFile object as deleted
 *  .
 * @action  list  List KalturaDropFolderFile objects
 *  .
 * @action  ignore  Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE)
 *  .
*/
var KalturaDropFolderFileService = module.exports.KalturaDropFolderFileService = function(client){
  this.init(client);
}
util.inherits(KalturaDropFolderFileService, kcb.KalturaServiceBase);
/**
 * Allows you to add a new KalturaDropFolderFile object
 *  .
 * @param  dropFolderFile  KalturaDropFolderFile     (optional).
 * @return  KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.add = function(callback, dropFolderFile){
  var kparams = {};
  this.client.addParam(kparams, "dropFolderFile", kcb.toParams(dropFolderFile));
  this.client.queueServiceActionCall("dropFolderFile", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaDropFolderFile object by ID
 *  .
 * @param  dropFolderFileId  int     (optional).
 * @return  KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.get = function(callback, dropFolderFileId){
  var kparams = {};
  this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
  this.client.queueServiceActionCall("dropFolderFile", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update an existing KalturaDropFolderFile object
 *  .
 * @param  dropFolderFileId  int     (optional).
 * @param  dropFolderFile  KalturaDropFolderFile    Id (optional).
 * @return  KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.update = function(callback, dropFolderFileId, dropFolderFile){
  var kparams = {};
  this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
  this.client.addParam(kparams, "dropFolderFile", kcb.toParams(dropFolderFile));
  this.client.queueServiceActionCall("dropFolderFile", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update status of KalturaDropFolderFile
 *  .
 * @param  dropFolderFileId  int     (optional).
 * @param  status  int     (optional, enum: KalturaDropFolderFileStatus).
 * @return  KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.updateStatus = function(callback, dropFolderFileId, status){
  var kparams = {};
  this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
  this.client.addParam(kparams, "status", status);
  this.client.queueServiceActionCall("dropFolderFile", "updateStatus", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Mark the KalturaDropFolderFile object as deleted
 *  .
 * @param  dropFolderFileId  int     (optional).
 * @return  KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.deleteAction = function(callback, dropFolderFileId){
  var kparams = {};
  this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
  this.client.queueServiceActionCall("dropFolderFile", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List KalturaDropFolderFile objects
 *  .
 * @param  filter  KalturaDropFolderFileFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaDropFolderFileListResponse.
 */
KalturaDropFolderFileService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("dropFolderFile", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE)
 *  .
 * @param  dropFolderFileId  int     (optional).
 * @return  KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.ignore = function(callback, dropFolderFileId){
  var kparams = {};
  this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
  this.client.queueServiceActionCall("dropFolderFile", "ignore", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: captionAsset.
 * The available service actions:
 * @action  add  Add caption asset.
 * @action  setContent  Update content of caption asset.
 * @action  update  Update caption asset.
 * @action  getUrl  Get download URL for the asset
 *  .
 * @action  getRemotePaths  Get remote storage existing paths for the asset
 *  .
 * @action  setAsDefault  Markss the caption as default and removes that mark from all other caption assets of the entry.
 *  .
 * @action  get  .
 * @action  list  List caption Assets by filter and pager
 *  .
 * @action  delete  .
*/
var KalturaCaptionAssetService = module.exports.KalturaCaptionAssetService = function(client){
  this.init(client);
}
util.inherits(KalturaCaptionAssetService, kcb.KalturaServiceBase);
/**
 * Add caption asset.
 * @param  entryId  string     (optional).
 * @param  captionAsset  KalturaCaptionAsset     (optional).
 * @return  KalturaCaptionAsset.
 */
KalturaCaptionAssetService.prototype.add = function(callback, entryId, captionAsset){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "captionAsset", kcb.toParams(captionAsset));
  this.client.queueServiceActionCall("captionAsset", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update content of caption asset.
 * @param  id  string     (optional).
 * @param  contentResource  KalturaContentResource     (optional).
 * @return  KalturaCaptionAsset.
 */
KalturaCaptionAssetService.prototype.setContent = function(callback, id, contentResource){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "contentResource", kcb.toParams(contentResource));
  this.client.queueServiceActionCall("captionAsset", "setContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update caption asset.
 * @param  id  string     (optional).
 * @param  captionAsset  KalturaCaptionAsset     (optional).
 * @return  KalturaCaptionAsset.
 */
KalturaCaptionAssetService.prototype.update = function(callback, id, captionAsset){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "captionAsset", kcb.toParams(captionAsset));
  this.client.queueServiceActionCall("captionAsset", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get download URL for the asset
 *  .
 * @param  id  string     (optional).
 * @param  storageId  int     (optional, default: null).
 * @return  string.
 */
KalturaCaptionAssetService.prototype.getUrl = function(callback, id, storageId){
  if(!storageId)
    storageId = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "storageId", storageId);
  this.client.queueServiceActionCall("captionAsset", "getUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset
 *  .
 * @param  id  string     (optional).
 * @return  KalturaRemotePathListResponse.
 */
KalturaCaptionAssetService.prototype.getRemotePaths = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("captionAsset", "getRemotePaths", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Markss the caption as default and removes that mark from all other caption assets of the entry.
 *  .
 * @param  captionAssetId  string     (optional).
 * @return  .
 */
KalturaCaptionAssetService.prototype.setAsDefault = function(callback, captionAssetId){
  var kparams = {};
  this.client.addParam(kparams, "captionAssetId", captionAssetId);
  this.client.queueServiceActionCall("captionAsset", "setAsDefault", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  captionAssetId  string     (optional).
 * @return  KalturaCaptionAsset.
 */
KalturaCaptionAssetService.prototype.get = function(callback, captionAssetId){
  var kparams = {};
  this.client.addParam(kparams, "captionAssetId", captionAssetId);
  this.client.queueServiceActionCall("captionAsset", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List caption Assets by filter and pager
 *  .
 * @param  filter  KalturaAssetFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaCaptionAssetListResponse.
 */
KalturaCaptionAssetService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("captionAsset", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  captionAssetId  string     (optional).
 * @return  .
 */
KalturaCaptionAssetService.prototype.deleteAction = function(callback, captionAssetId){
  var kparams = {};
  this.client.addParam(kparams, "captionAssetId", captionAssetId);
  this.client.queueServiceActionCall("captionAsset", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: captionParams.
 * The available service actions:
 * @action  add  Add new Caption Params
 *  .
 * @action  get  Get Caption Params by ID
 *  .
 * @action  update  Update Caption Params by ID
 *  .
 * @action  delete  Delete Caption Params by ID
 *  .
 * @action  list  List Caption Params by filter with paging support (By default - all system default params will be listed too)
 *  .
*/
var KalturaCaptionParamsService = module.exports.KalturaCaptionParamsService = function(client){
  this.init(client);
}
util.inherits(KalturaCaptionParamsService, kcb.KalturaServiceBase);
/**
 * Add new Caption Params
 *  .
 * @param  captionParams  KalturaCaptionParams     (optional).
 * @return  KalturaCaptionParams.
 */
KalturaCaptionParamsService.prototype.add = function(callback, captionParams){
  var kparams = {};
  this.client.addParam(kparams, "captionParams", kcb.toParams(captionParams));
  this.client.queueServiceActionCall("captionParams", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get Caption Params by ID
 *  .
 * @param  id  int     (optional).
 * @return  KalturaCaptionParams.
 */
KalturaCaptionParamsService.prototype.get = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("captionParams", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update Caption Params by ID
 *  .
 * @param  id  int     (optional).
 * @param  captionParams  KalturaCaptionParams     (optional).
 * @return  KalturaCaptionParams.
 */
KalturaCaptionParamsService.prototype.update = function(callback, id, captionParams){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "captionParams", kcb.toParams(captionParams));
  this.client.queueServiceActionCall("captionParams", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Delete Caption Params by ID
 *  .
 * @param  id  int     (optional).
 * @return  .
 */
KalturaCaptionParamsService.prototype.deleteAction = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("captionParams", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List Caption Params by filter with paging support (By default - all system default params will be listed too)
 *  .
 * @param  filter  KalturaCaptionParamsFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaCaptionParamsListResponse.
 */
KalturaCaptionParamsService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("captionParams", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: captionAssetItem.
 * The available service actions:
 * @action  parse  Parse content of caption asset and index it.
 * @action  search  Search caption asset items by filter, pager and free text
 *  .
*/
var KalturaCaptionAssetItemService = module.exports.KalturaCaptionAssetItemService = function(client){
  this.init(client);
}
util.inherits(KalturaCaptionAssetItemService, kcb.KalturaServiceBase);
/**
 * Parse content of caption asset and index it.
 * @param  captionAssetId  string     (optional).
 * @return  .
 */
KalturaCaptionAssetItemService.prototype.parse = function(callback, captionAssetId){
  var kparams = {};
  this.client.addParam(kparams, "captionAssetId", captionAssetId);
  this.client.queueServiceActionCall("captionAssetItem", "parse", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Search caption asset items by filter, pager and free text
 *  .
 * @param  entryFilter  KalturaBaseEntryFilter     (optional, default: null).
 * @param  captionAssetItemFilter  KalturaCaptionAssetItemFilter     (optional, default: null).
 * @param  captionAssetItemPager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaCaptionAssetItemListResponse.
 */
KalturaCaptionAssetItemService.prototype.search = function(callback, entryFilter, captionAssetItemFilter, captionAssetItemPager){
  if(!entryFilter)
    entryFilter = null;
  if(!captionAssetItemFilter)
    captionAssetItemFilter = null;
  if(!captionAssetItemPager)
    captionAssetItemPager = null;
  var kparams = {};
  if (entryFilter != null)
    this.client.addParam(kparams, "entryFilter", kcb.toParams(entryFilter));
  if (captionAssetItemFilter != null)
    this.client.addParam(kparams, "captionAssetItemFilter", kcb.toParams(captionAssetItemFilter));
  if (captionAssetItemPager != null)
    this.client.addParam(kparams, "captionAssetItemPager", kcb.toParams(captionAssetItemPager));
  this.client.queueServiceActionCall("captionAssetItem", "search", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 *Class definition for the Kaltura service: attachmentAsset.
 * The available service actions:
 * @action  add  Add attachment asset.
 * @action  setContent  Update content of attachment asset.
 * @action  update  Update attachment asset.
 * @action  getUrl  Get download URL for the asset
 *  .
 * @action  getRemotePaths  Get remote storage existing paths for the asset
 *  .
 * @action  get  .
 * @action  list  List attachment Assets by filter and pager
 *  .
 * @action  delete  .
*/
var KalturaAttachmentAssetService = module.exports.KalturaAttachmentAssetService = function(client){
  this.init(client);
}
util.inherits(KalturaAttachmentAssetService, kcb.KalturaServiceBase);
/**
 * Add attachment asset.
 * @param  entryId  string     (optional).
 * @param  attachmentAsset  KalturaAttachmentAsset     (optional).
 * @return  KalturaAttachmentAsset.
 */
KalturaAttachmentAssetService.prototype.add = function(callback, entryId, attachmentAsset){
  var kparams = {};
  this.client.addParam(kparams, "entryId", entryId);
  this.client.addParam(kparams, "attachmentAsset", kcb.toParams(attachmentAsset));
  this.client.queueServiceActionCall("attachmentAsset", "add", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update content of attachment asset.
 * @param  id  string     (optional).
 * @param  contentResource  KalturaContentResource     (optional).
 * @return  KalturaAttachmentAsset.
 */
KalturaAttachmentAssetService.prototype.setContent = function(callback, id, contentResource){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "contentResource", kcb.toParams(contentResource));
  this.client.queueServiceActionCall("attachmentAsset", "setContent", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Update attachment asset.
 * @param  id  string     (optional).
 * @param  attachmentAsset  KalturaAttachmentAsset     (optional).
 * @return  KalturaAttachmentAsset.
 */
KalturaAttachmentAssetService.prototype.update = function(callback, id, attachmentAsset){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "attachmentAsset", kcb.toParams(attachmentAsset));
  this.client.queueServiceActionCall("attachmentAsset", "update", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get download URL for the asset
 *  .
 * @param  id  string     (optional).
 * @param  storageId  int     (optional, default: null).
 * @return  string.
 */
KalturaAttachmentAssetService.prototype.getUrl = function(callback, id, storageId){
  if(!storageId)
    storageId = null;
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.addParam(kparams, "storageId", storageId);
  this.client.queueServiceActionCall("attachmentAsset", "getUrl", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * Get remote storage existing paths for the asset
 *  .
 * @param  id  string     (optional).
 * @return  KalturaRemotePathListResponse.
 */
KalturaAttachmentAssetService.prototype.getRemotePaths = function(callback, id){
  var kparams = {};
  this.client.addParam(kparams, "id", id);
  this.client.queueServiceActionCall("attachmentAsset", "getRemotePaths", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  attachmentAssetId  string     (optional).
 * @return  KalturaAttachmentAsset.
 */
KalturaAttachmentAssetService.prototype.get = function(callback, attachmentAssetId){
  var kparams = {};
  this.client.addParam(kparams, "attachmentAssetId", attachmentAssetId);
  this.client.queueServiceActionCall("attachmentAsset", "get", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * List attachment Assets by filter and pager
 *  .
 * @param  filter  KalturaAssetFilter     (optional, default: null).
 * @param  pager  KalturaFilterPager     (optional, default: null).
 * @return  KalturaAttachmentAssetListResponse.
 */
KalturaAttachmentAssetService.prototype.listAction = function(callback, filter, pager){
  if(!filter)
    filter = null;
  if(!pager)
    pager = null;
  var kparams = {};
  if (filter != null)
    this.client.addParam(kparams, "filter", kcb.toParams(filter));
  if (pager != null)
    this.client.addParam(kparams, "pager", kcb.toParams(pager));
  this.client.queueServiceActionCall("attachmentAsset", "list", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}
/**
 * .
 * @param  attachmentAssetId  string     (optional).
 * @return  .
 */
KalturaAttachmentAssetService.prototype.deleteAction = function(callback, attachmentAssetId){
  var kparams = {};
  this.client.addParam(kparams, "attachmentAssetId", attachmentAssetId);
  this.client.queueServiceActionCall("attachmentAsset", "delete", kparams);
  if (!this.client.isMultiRequest())
    this.client.doQueue(callback);
}

