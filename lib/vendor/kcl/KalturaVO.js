/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseRestriction = module.exports.KalturaBaseRestriction = function(){
};
util.inherits(KalturaBaseRestriction, kcb.KalturaObjectBase);


/**
 * @param  id  int    The id of the Access Control Profile
 *   (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  name  string    The name of the Access Control Profile
 *  .
 * @param  systemName  string    System name of the Access Control Profile
 *  .
 * @param  description  string    The description of the Access Control Profile
 *  .
 * @param  createdAt  int    Creation date as Unix timestamp (In seconds) 
 *   (readOnly).
 * @param  isDefault  int    True if this Conversion Profile is the default
 *  .
 * @param  restrictions  array    Array of Access Control Restrictions
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAccessControl = module.exports.KalturaAccessControl = function(){
  this.id = null;
  this.partnerId = null;
  this.name = null;
  this.systemName = null;
  this.description = null;
  this.createdAt = null;
  this.isDefault = null;
  this.restrictions = null;
};
util.inherits(KalturaAccessControl, kcb.KalturaObjectBase);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSearchItem = module.exports.KalturaSearchItem = function(){
};
util.inherits(KalturaSearchItem, kcb.KalturaObjectBase);


/**
 * @param  orderBy  string    .
 * @param  advancedSearch  KalturaSearchItem    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFilter = module.exports.KalturaFilter = function(){
  this.orderBy = null;
  this.advancedSearch = null;
};
util.inherits(KalturaFilter, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAccessControlBaseFilter = module.exports.KalturaAccessControlBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
};
util.inherits(KalturaAccessControlBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAccessControlFilter = module.exports.KalturaAccessControlFilter = function(){
};
util.inherits(KalturaAccessControlFilter, KalturaAccessControlBaseFilter);


/**
 * @param  pageSize  int    The number of objects to retrieve. (Default is 30, maximum page size is 500).
 *  .
 * @param  pageIndex  int    The page number for which {pageSize} of objects should be retrieved (Default is 1).
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFilterPager = module.exports.KalturaFilterPager = function(){
  this.pageSize = null;
  this.pageIndex = null;
};
util.inherits(KalturaFilterPager, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAccessControlListResponse = module.exports.KalturaAccessControlListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaAccessControlListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  string    .
 * @param  partnerId  int     (readOnly).
 * @param  screenName  string    .
 * @param  fullName  string    DEPRECATED.
 * @param  email  string    .
 * @param  dateOfBirth  int    .
 * @param  country  string    .
 * @param  state  string    .
 * @param  city  string    .
 * @param  zip  string    .
 * @param  thumbnailUrl  string    .
 * @param  description  string    .
 * @param  tags  string    .
 * @param  adminTags  string    Admin tags can be updated only by using an admin session.
 * @param  gender  int    .
 * @param  status  int    .
 * @param  createdAt  int    Creation date as Unix timestamp (In seconds) (readOnly).
 * @param  updatedAt  int    Last update date as Unix timestamp (In seconds) (readOnly).
 * @param  partnerData  string    Can be used to store various partner related data as a string .
 * @param  indexedPartnerDataInt  int    .
 * @param  indexedPartnerDataString  string    .
 * @param  storageSize  int     (readOnly).
 * @param  password  string     (insertOnly).
 * @param  firstName  string    .
 * @param  lastName  string    .
 * @param  isAdmin  bool    .
 * @param  lastLoginTime  int     (readOnly).
 * @param  statusUpdatedAt  int     (readOnly).
 * @param  deletedAt  int     (readOnly).
 * @param  loginEnabled  bool     (readOnly).
 * @param  roleIds  string    .
 * @param  roleNames  string     (readOnly).
 * @param  isAccountOwner  bool     (readOnly).
 * @param  allowedPartnerIds  string    .
 * @param  allowedPartnerPackages  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUser = module.exports.KalturaUser = function(){
  this.id = null;
  this.partnerId = null;
  this.screenName = null;
  this.fullName = null;
  this.email = null;
  this.dateOfBirth = null;
  this.country = null;
  this.state = null;
  this.city = null;
  this.zip = null;
  this.thumbnailUrl = null;
  this.description = null;
  this.tags = null;
  this.adminTags = null;
  this.gender = null;
  this.status = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.partnerData = null;
  this.indexedPartnerDataInt = null;
  this.indexedPartnerDataString = null;
  this.storageSize = null;
  this.password = null;
  this.firstName = null;
  this.lastName = null;
  this.isAdmin = null;
  this.lastLoginTime = null;
  this.statusUpdatedAt = null;
  this.deletedAt = null;
  this.loginEnabled = null;
  this.roleIds = null;
  this.roleNames = null;
  this.isAccountOwner = null;
  this.allowedPartnerIds = null;
  this.allowedPartnerPackages = null;
};
util.inherits(KalturaUser, kcb.KalturaObjectBase);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAdminUser = module.exports.KalturaAdminUser = function(){
};
util.inherits(KalturaAdminUser, KalturaUser);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDynamicEnum = module.exports.KalturaDynamicEnum = function(){
};
util.inherits(KalturaDynamicEnum, kcb.KalturaObjectBase);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaOperationAttributes = module.exports.KalturaOperationAttributes = function(){
};
util.inherits(KalturaOperationAttributes, kcb.KalturaObjectBase);


/**
 * @param  id  string    Auto generated 10 characters alphanumeric string
 *   (readOnly).
 * @param  name  string    Entry name (Min 1 chars)
 *  .
 * @param  description  string    Entry description
 *  .
 * @param  partnerId  int     (readOnly).
 * @param  userId  string    The ID of the user who is the owner of this entry 
 *  .
 * @param  tags  string    Entry tags
 *  .
 * @param  adminTags  string    Entry admin tags can be updated only by administrators
 *  .
 * @param  categories  string    .
 * @param  categoriesIds  string    .
 * @param  status  string     (readOnly).
 * @param  moderationStatus  int    Entry moderation status
 *   (readOnly).
 * @param  moderationCount  int    Number of moderation requests waiting for this entry
 *   (readOnly).
 * @param  type  string    The type of the entry, this is auto filled by the derived entry object
 *  .
 * @param  createdAt  int    Entry creation date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  updatedAt  int    Entry update date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  rank  float    Calculated rank
 *   (readOnly).
 * @param  totalRank  int    The total (sum) of all votes
 *   (readOnly).
 * @param  votes  int    Number of votes
 *   (readOnly).
 * @param  groupId  int    .
 * @param  partnerData  string    Can be used to store various partner related data as a string 
 *  .
 * @param  downloadUrl  string    Download URL for the entry
 *   (readOnly).
 * @param  searchText  string    Indexed search text for full text search (readOnly).
 * @param  licenseType  int    License type used for this entry
 *  .
 * @param  version  int    Version of the entry data (readOnly).
 * @param  thumbnailUrl  string    Thumbnail URL
 *   (insertOnly).
 * @param  accessControlId  int    The Access Control ID assigned to this entry (null when not set, send -1 to remove)  
 *  .
 * @param  startDate  int    Entry scheduling start date (null when not set, send -1 to remove)
 *  .
 * @param  endDate  int    Entry scheduling end date (null when not set, send -1 to remove)
 *  .
 * @param  referenceId  string    Entry external reference id
 *  .
 * @param  replacingEntryId  string    ID of temporary entry that will replace this entry when it's approved and ready for replacement
 *   (readOnly).
 * @param  replacedEntryId  string    ID of the entry that will be replaced when the replacement approved and this entry is ready
 *   (readOnly).
 * @param  replacementStatus  string    Status of the replacement readiness and approval
 *   (readOnly).
 * @param  partnerSortValue  int    Can be used to store various partner related data as a numeric value
 *  .
 * @param  conversionProfileId  int    Override the default ingestion profile  
 *  .
 * @param  rootEntryId  string    ID of source root entry, used for clipped, skipped and cropped entries that created from another entry  
 *   (readOnly).
 * @param  operationAttributes  array    clipping, skipping and cropping attributes that used to create this entry  
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseEntry = module.exports.KalturaBaseEntry = function(){
  this.id = null;
  this.name = null;
  this.description = null;
  this.partnerId = null;
  this.userId = null;
  this.tags = null;
  this.adminTags = null;
  this.categories = null;
  this.categoriesIds = null;
  this.status = null;
  this.moderationStatus = null;
  this.moderationCount = null;
  this.type = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.rank = null;
  this.totalRank = null;
  this.votes = null;
  this.groupId = null;
  this.partnerData = null;
  this.downloadUrl = null;
  this.searchText = null;
  this.licenseType = null;
  this.version = null;
  this.thumbnailUrl = null;
  this.accessControlId = null;
  this.startDate = null;
  this.endDate = null;
  this.referenceId = null;
  this.replacingEntryId = null;
  this.replacedEntryId = null;
  this.replacementStatus = null;
  this.partnerSortValue = null;
  this.conversionProfileId = null;
  this.rootEntryId = null;
  this.operationAttributes = null;
};
util.inherits(KalturaBaseEntry, kcb.KalturaObjectBase);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaResource = module.exports.KalturaResource = function(){
};
util.inherits(KalturaResource, kcb.KalturaObjectBase);


/**
 * @param  storageProfileId  int     (readOnly).
 * @param  uri  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaRemotePath = module.exports.KalturaRemotePath = function(){
  this.storageProfileId = null;
  this.uri = null;
};
util.inherits(KalturaRemotePath, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaRemotePathListResponse = module.exports.KalturaRemotePathListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaRemotePathListResponse, kcb.KalturaObjectBase);


/**
 * @param  idEqual  string    This filter should be in use for retrieving only a specific entry (identified by its entryId).
 *  @var string.
 * @param  idIn  string    This filter should be in use for retrieving few specific entries (string should include comma separated list of entryId strings).
 *  @var string.
 * @param  idNotIn  string    .
 * @param  nameLike  string    This filter should be in use for retrieving specific entries. It should include only one string to search for in entry names (no wildcards, spaces are treated as part of the string).
 *  @var string.
 * @param  nameMultiLikeOr  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *  @var string.
 * @param  nameMultiLikeAnd  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *  @var string.
 * @param  nameEqual  string    This filter should be in use for retrieving entries with a specific name.
 *  @var string.
 * @param  partnerIdEqual  int    This filter should be in use for retrieving only entries which were uploaded by/assigned to users of a specific Kaltura Partner (identified by Partner ID).
 *  @var int.
 * @param  partnerIdIn  string    This filter should be in use for retrieving only entries within Kaltura network which were uploaded by/assigned to users of few Kaltura Partners  (string should include comma separated list of PartnerIDs)
 *  @var string.
 * @param  userIdEqual  string    This filter parameter should be in use for retrieving only entries, uploaded by/assigned to a specific user (identified by user Id).
 *  @var string.
 * @param  tagsLike  string    This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags (no wildcards, spaces are treated as part of the string).
 *  @var string.
 * @param  tagsMultiLikeOr  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *  @var string.
 * @param  tagsMultiLikeAnd  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *  @var string.
 * @param  adminTagsLike  string    This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags set by an ADMIN user (no wildcards, spaces are treated as part of the string).
 *  @var string.
 * @param  adminTagsMultiLikeOr  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *  @var string.
 * @param  adminTagsMultiLikeAnd  string    This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *  @var string.
 * @param  categoriesMatchAnd  string    .
 * @param  categoriesMatchOr  string    .
 * @param  categoriesIdsMatchAnd  string    .
 * @param  categoriesIdsMatchOr  string    .
 * @param  statusEqual  string    This filter should be in use for retrieving only entries, at a specific {@link ?object=KalturaEntryStatus KalturaEntryStatus}.
 *  @var KalturaEntryStatus.
 * @param  statusNotEqual  string    This filter should be in use for retrieving only entries, not at a specific {@link ?object=KalturaEntryStatus KalturaEntryStatus}.
 *  @var KalturaEntryStatus.
 * @param  statusIn  string    This filter should be in use for retrieving only entries, at few specific {@link ?object=KalturaEntryStatus KalturaEntryStatus} (comma separated).
 *  @dynamicType KalturaEntryStatus.
 * @param  statusNotIn  string    This filter should be in use for retrieving only entries, not at few specific {@link ?object=KalturaEntryStatus KalturaEntryStatus} (comma separated).
 *  @dynamicType KalturaEntryStatus.
 * @param  moderationStatusEqual  int    .
 * @param  moderationStatusNotEqual  int    .
 * @param  moderationStatusIn  string    .
 * @param  moderationStatusNotIn  string    .
 * @param  typeEqual  string    .
 * @param  typeIn  string    This filter should be in use for retrieving entries of few {@link ?object=KalturaEntryType KalturaEntryType} (string should include a comma separated list of {@link ?object=KalturaEntryType KalturaEntryType} enumerated parameters).
 *  @dynamicType KalturaEntryType.
 * @param  createdAtGreaterThanOrEqual  int    This filter parameter should be in use for retrieving only entries which were created at Kaltura system after a specific time/date (standard timestamp format).
 *  @var int.
 * @param  createdAtLessThanOrEqual  int    This filter parameter should be in use for retrieving only entries which were created at Kaltura system before a specific time/date (standard timestamp format).
 *  @var int.
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  groupIdEqual  int    .
 * @param  searchTextMatchAnd  string    This filter should be in use for retrieving specific entries while search match the input string within all of the following metadata attributes: name, description, tags, adminTags.
 *  @var string.
 * @param  searchTextMatchOr  string    This filter should be in use for retrieving specific entries while search match the input string within at least one of the following metadata attributes: name, description, tags, adminTags.
 *  @var string.
 * @param  accessControlIdEqual  int    .
 * @param  accessControlIdIn  string    .
 * @param  startDateGreaterThanOrEqual  int    .
 * @param  startDateLessThanOrEqual  int    .
 * @param  startDateGreaterThanOrEqualOrNull  int    .
 * @param  startDateLessThanOrEqualOrNull  int    .
 * @param  endDateGreaterThanOrEqual  int    .
 * @param  endDateLessThanOrEqual  int    .
 * @param  endDateGreaterThanOrEqualOrNull  int    .
 * @param  endDateLessThanOrEqualOrNull  int    .
 * @param  referenceIdEqual  string    .
 * @param  referenceIdIn  string    .
 * @param  replacingEntryIdEqual  string    .
 * @param  replacingEntryIdIn  string    .
 * @param  replacedEntryIdEqual  string    .
 * @param  replacedEntryIdIn  string    .
 * @param  replacementStatusEqual  string    .
 * @param  replacementStatusIn  string    .
 * @param  partnerSortValueGreaterThanOrEqual  int    .
 * @param  partnerSortValueLessThanOrEqual  int    .
 * @param  rootEntryIdEqual  string    .
 * @param  rootEntryIdIn  string    .
 * @param  tagsNameMultiLikeOr  string    .
 * @param  tagsAdminTagsMultiLikeOr  string    .
 * @param  tagsAdminTagsNameMultiLikeOr  string    .
 * @param  tagsNameMultiLikeAnd  string    .
 * @param  tagsAdminTagsMultiLikeAnd  string    .
 * @param  tagsAdminTagsNameMultiLikeAnd  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseEntryBaseFilter = module.exports.KalturaBaseEntryBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.idNotIn = null;
  this.nameLike = null;
  this.nameMultiLikeOr = null;
  this.nameMultiLikeAnd = null;
  this.nameEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.userIdEqual = null;
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.adminTagsLike = null;
  this.adminTagsMultiLikeOr = null;
  this.adminTagsMultiLikeAnd = null;
  this.categoriesMatchAnd = null;
  this.categoriesMatchOr = null;
  this.categoriesIdsMatchAnd = null;
  this.categoriesIdsMatchOr = null;
  this.statusEqual = null;
  this.statusNotEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
  this.moderationStatusEqual = null;
  this.moderationStatusNotEqual = null;
  this.moderationStatusIn = null;
  this.moderationStatusNotIn = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.groupIdEqual = null;
  this.searchTextMatchAnd = null;
  this.searchTextMatchOr = null;
  this.accessControlIdEqual = null;
  this.accessControlIdIn = null;
  this.startDateGreaterThanOrEqual = null;
  this.startDateLessThanOrEqual = null;
  this.startDateGreaterThanOrEqualOrNull = null;
  this.startDateLessThanOrEqualOrNull = null;
  this.endDateGreaterThanOrEqual = null;
  this.endDateLessThanOrEqual = null;
  this.endDateGreaterThanOrEqualOrNull = null;
  this.endDateLessThanOrEqualOrNull = null;
  this.referenceIdEqual = null;
  this.referenceIdIn = null;
  this.replacingEntryIdEqual = null;
  this.replacingEntryIdIn = null;
  this.replacedEntryIdEqual = null;
  this.replacedEntryIdIn = null;
  this.replacementStatusEqual = null;
  this.replacementStatusIn = null;
  this.partnerSortValueGreaterThanOrEqual = null;
  this.partnerSortValueLessThanOrEqual = null;
  this.rootEntryIdEqual = null;
  this.rootEntryIdIn = null;
  this.tagsNameMultiLikeOr = null;
  this.tagsAdminTagsMultiLikeOr = null;
  this.tagsAdminTagsNameMultiLikeOr = null;
  this.tagsNameMultiLikeAnd = null;
  this.tagsAdminTagsMultiLikeAnd = null;
  this.tagsAdminTagsNameMultiLikeAnd = null;
};
util.inherits(KalturaBaseEntryBaseFilter, KalturaFilter);


/**
 * @param  freeText  string    .
 * @param  isRoot  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseEntryFilter = module.exports.KalturaBaseEntryFilter = function(){
  this.freeText = null;
  this.isRoot = null;
};
util.inherits(KalturaBaseEntryFilter, KalturaBaseEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseEntryListResponse = module.exports.KalturaBaseEntryListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaBaseEntryListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int    Moderation flag id (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  userId  string    The user id that added the moderation flag (readOnly).
 * @param  moderationObjectType  int    The type of the moderation flag (entry or user) (readOnly).
 * @param  flaggedEntryId  string    If moderation flag is set for entry, this is the flagged entry id.
 * @param  flaggedUserId  string    If moderation flag is set for user, this is the flagged user id.
 * @param  status  int    The moderation flag status (readOnly).
 * @param  comments  string    The comment that was added to the flag.
 * @param  flagType  int    .
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaModerationFlag = module.exports.KalturaModerationFlag = function(){
  this.id = null;
  this.partnerId = null;
  this.userId = null;
  this.moderationObjectType = null;
  this.flaggedEntryId = null;
  this.flaggedUserId = null;
  this.status = null;
  this.comments = null;
  this.flagType = null;
  this.createdAt = null;
  this.updatedAt = null;
};
util.inherits(KalturaModerationFlag, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaModerationFlagListResponse = module.exports.KalturaModerationFlagListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaModerationFlagListResponse, kcb.KalturaObjectBase);


/**
 * @param  referrer  string    .
 * @param  flavorAssetId  string    .
 * @param  streamerType  string    .
 * @param  mediaProtocol  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaEntryContextDataParams = module.exports.KalturaEntryContextDataParams = function(){
  this.referrer = null;
  this.flavorAssetId = null;
  this.streamerType = null;
  this.mediaProtocol = null;
};
util.inherits(KalturaEntryContextDataParams, kcb.KalturaObjectBase);


/**
 * @param  isSiteRestricted  bool    .
 * @param  isCountryRestricted  bool    .
 * @param  isSessionRestricted  bool    .
 * @param  isIpAddressRestricted  bool    .
 * @param  isUserAgentRestricted  bool    .
 * @param  previewLength  int    .
 * @param  isScheduledNow  bool    .
 * @param  isAdmin  bool    .
 * @param  streamerType  string    http/rtmp/hdnetwork.
 * @param  mediaProtocol  string    http/https, rtmp/rtmpe.
 * @param  storageProfilesXML  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaEntryContextDataResult = module.exports.KalturaEntryContextDataResult = function(){
  this.isSiteRestricted = null;
  this.isCountryRestricted = null;
  this.isSessionRestricted = null;
  this.isIpAddressRestricted = null;
  this.isUserAgentRestricted = null;
  this.previewLength = null;
  this.isScheduledNow = null;
  this.isAdmin = null;
  this.streamerType = null;
  this.mediaProtocol = null;
  this.storageProfilesXML = null;
};
util.inherits(KalturaEntryContextDataResult, kcb.KalturaObjectBase);


/**
 * @param  field  string    .
 * @param  value  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBulkUploadPluginData = module.exports.KalturaBulkUploadPluginData = function(){
  this.field = null;
  this.value = null;
};
util.inherits(KalturaBulkUploadPluginData, kcb.KalturaObjectBase);


/**
 * @param  id  int    The id of the result
 *   (readOnly).
 * @param  bulkUploadJobId  int    The id of the parent job
 *  .
 * @param  lineIndex  int    The index of the line in the CSV
 *  .
 * @param  partnerId  int    .
 * @param  action  int    .
 * @param  entryId  string    .
 * @param  objectId  string    .
 * @param  bulkUploadResultObjectType  string    .
 * @param  entryStatus  int    .
 * @param  rowData  string    The data as recieved in the csv
 *  .
 * @param  title  string    .
 * @param  description  string    .
 * @param  tags  string    .
 * @param  url  string    .
 * @param  contentType  string    .
 * @param  conversionProfileId  int    .
 * @param  accessControlProfileId  int    .
 * @param  category  string    .
 * @param  scheduleStartDate  int    .
 * @param  scheduleEndDate  int    .
 * @param  thumbnailUrl  string    .
 * @param  thumbnailSaved  bool    .
 * @param  partnerData  string    .
 * @param  errorDescription  string    .
 * @param  pluginsData  array    .
 * @param  sshPrivateKey  string    .
 * @param  sshPublicKey  string    .
 * @param  sshKeyPassphrase  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBulkUploadResult = module.exports.KalturaBulkUploadResult = function(){
  this.id = null;
  this.bulkUploadJobId = null;
  this.lineIndex = null;
  this.partnerId = null;
  this.action = null;
  this.entryId = null;
  this.objectId = null;
  this.bulkUploadResultObjectType = null;
  this.entryStatus = null;
  this.rowData = null;
  this.title = null;
  this.description = null;
  this.tags = null;
  this.url = null;
  this.contentType = null;
  this.conversionProfileId = null;
  this.accessControlProfileId = null;
  this.category = null;
  this.scheduleStartDate = null;
  this.scheduleEndDate = null;
  this.thumbnailUrl = null;
  this.thumbnailSaved = null;
  this.partnerData = null;
  this.errorDescription = null;
  this.pluginsData = null;
  this.sshPrivateKey = null;
  this.sshPublicKey = null;
  this.sshKeyPassphrase = null;
};
util.inherits(KalturaBulkUploadResult, kcb.KalturaObjectBase);


/**
 * @param  id  int    .
 * @param  uploadedBy  string    .
 * @param  uploadedByUserId  string    .
 * @param  uploadedOn  int    .
 * @param  numOfEntries  int    .
 * @param  status  int    .
 * @param  logFileUrl  string    .
 * @param  csvFileUrl  string    DEPRECATED.
 * @param  bulkFileUrl  string    .
 * @param  bulkUploadType  string    .
 * @param  results  array    .
 * @param  error  string    .
 * @param  errorType  int    .
 * @param  errorNumber  int    .
 * @param  fileName  string    .
 * @param  description  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBulkUpload = module.exports.KalturaBulkUpload = function(){
  this.id = null;
  this.uploadedBy = null;
  this.uploadedByUserId = null;
  this.uploadedOn = null;
  this.numOfEntries = null;
  this.status = null;
  this.logFileUrl = null;
  this.csvFileUrl = null;
  this.bulkFileUrl = null;
  this.bulkUploadType = null;
  this.results = null;
  this.error = null;
  this.errorType = null;
  this.errorNumber = null;
  this.fileName = null;
  this.description = null;
};
util.inherits(KalturaBulkUpload, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBulkUploadListResponse = module.exports.KalturaBulkUploadListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaBulkUploadListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int    The id of the Category
 *   (readOnly).
 * @param  parentId  int    .
 * @param  depth  int     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  name  string    The name of the Category. 
 *  The following characters are not allowed: '<', '>', ','
 *  .
 * @param  fullName  string    The full name of the Category
 *   (readOnly).
 * @param  entriesCount  int    Number of entries in this Category (including child categories)
 *   (readOnly).
 * @param  createdAt  int    Creation date as Unix timestamp (In seconds)
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCategory = module.exports.KalturaCategory = function(){
  this.id = null;
  this.parentId = null;
  this.depth = null;
  this.partnerId = null;
  this.name = null;
  this.fullName = null;
  this.entriesCount = null;
  this.createdAt = null;
};
util.inherits(KalturaCategory, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  parentIdEqual  int    .
 * @param  parentIdIn  string    .
 * @param  depthEqual  int    .
 * @param  fullNameEqual  string    .
 * @param  fullNameStartsWith  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCategoryBaseFilter = module.exports.KalturaCategoryBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.parentIdEqual = null;
  this.parentIdIn = null;
  this.depthEqual = null;
  this.fullNameEqual = null;
  this.fullNameStartsWith = null;
};
util.inherits(KalturaCategoryBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCategoryFilter = module.exports.KalturaCategoryFilter = function(){
};
util.inherits(KalturaCategoryFilter, KalturaCategoryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCategoryListResponse = module.exports.KalturaCategoryListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaCategoryListResponse, kcb.KalturaObjectBase);


/**
 * @param  conversionProfileIdEqual  int    .
 * @param  conversionProfileIdIn  string    .
 * @param  assetParamsIdEqual  int    .
 * @param  assetParamsIdIn  string    .
 * @param  readyBehaviorEqual  int    .
 * @param  readyBehaviorIn  string    .
 * @param  originEqual  int    .
 * @param  originIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConversionProfileAssetParamsBaseFilter = module.exports.KalturaConversionProfileAssetParamsBaseFilter = function(){
  this.conversionProfileIdEqual = null;
  this.conversionProfileIdIn = null;
  this.assetParamsIdEqual = null;
  this.assetParamsIdIn = null;
  this.readyBehaviorEqual = null;
  this.readyBehaviorIn = null;
  this.originEqual = null;
  this.originIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
};
util.inherits(KalturaConversionProfileAssetParamsBaseFilter, KalturaFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  statusEqual  string    .
 * @param  statusIn  string    .
 * @param  nameEqual  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  defaultEntryIdEqual  string    .
 * @param  defaultEntryIdIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConversionProfileBaseFilter = module.exports.KalturaConversionProfileBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.nameEqual = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.defaultEntryIdEqual = null;
  this.defaultEntryIdIn = null;
};
util.inherits(KalturaConversionProfileBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConversionProfileFilter = module.exports.KalturaConversionProfileFilter = function(){
};
util.inherits(KalturaConversionProfileFilter, KalturaConversionProfileBaseFilter);


/**
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  isSystemDefaultEqual  int    .
 * @param  tagsEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetParamsBaseFilter = module.exports.KalturaAssetParamsBaseFilter = function(){
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.isSystemDefaultEqual = null;
  this.tagsEqual = null;
};
util.inherits(KalturaAssetParamsBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetParamsFilter = module.exports.KalturaAssetParamsFilter = function(){
};
util.inherits(KalturaAssetParamsFilter, KalturaAssetParamsBaseFilter);


/**
 * @param  conversionProfileIdFilter  KalturaConversionProfileFilter    .
 * @param  assetParamsIdFilter  KalturaAssetParamsFilter    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConversionProfileAssetParamsFilter = module.exports.KalturaConversionProfileAssetParamsFilter = function(){
  this.conversionProfileIdFilter = null;
  this.assetParamsIdFilter = null;
};
util.inherits(KalturaConversionProfileAssetParamsFilter, KalturaConversionProfileAssetParamsBaseFilter);


/**
 * @param  conversionProfileId  int    The id of the conversion profile
 *   (readOnly).
 * @param  assetParamsId  int    The id of the asset params
 *   (readOnly).
 * @param  readyBehavior  int    The ingestion origin of the asset params
 *  .
 * @param  origin  int    The ingestion origin of the asset params
 *  .
 * @param  systemName  string    Asset params system name
 *  .
 * @param  forceNoneComplied  int    Starts conversion even if the decision layer reduced the configuration to comply with the source.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConversionProfileAssetParams = module.exports.KalturaConversionProfileAssetParams = function(){
  this.conversionProfileId = null;
  this.assetParamsId = null;
  this.readyBehavior = null;
  this.origin = null;
  this.systemName = null;
  this.forceNoneComplied = null;
};
util.inherits(KalturaConversionProfileAssetParams, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConversionProfileAssetParamsListResponse = module.exports.KalturaConversionProfileAssetParamsListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaConversionProfileAssetParamsListResponse, kcb.KalturaObjectBase);


/**
 * @param  left  int    Crop left point
 *  .
 * @param  top  int    Crop top point
 *  .
 * @param  width  int    Crop width
 *  .
 * @param  height  int    Crop height
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCropDimensions = module.exports.KalturaCropDimensions = function(){
  this.left = null;
  this.top = null;
  this.width = null;
  this.height = null;
};
util.inherits(KalturaCropDimensions, kcb.KalturaObjectBase);


/**
 * @param  id  int    The id of the Conversion Profile
 *   (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  status  string    .
 * @param  name  string    The name of the Conversion Profile
 *  .
 * @param  systemName  string    System name of the Conversion Profile
 *  .
 * @param  tags  string    Comma separated tags
 *  .
 * @param  description  string    The description of the Conversion Profile
 *  .
 * @param  defaultEntryId  string    ID of the default entry to be used for template data
 *  .
 * @param  createdAt  int    Creation date as Unix timestamp (In seconds) 
 *   (readOnly).
 * @param  flavorParamsIds  string    List of included flavor ids (comma separated)
 *  .
 * @param  isDefault  int    Indicates that this conversion profile is system default
 *  .
 * @param  isPartnerDefault  bool    Indicates that this conversion profile is partner default
 *   (readOnly).
 * @param  cropDimensions  KalturaCropDimensions    Cropping dimensions
 *  DEPRECATED.
 * @param  clipStart  int    Clipping start position (in miliseconds)
 *  DEPRECATED.
 * @param  clipDuration  int    Clipping duration (in miliseconds)
 *  DEPRECATED.
 * @param  xslTransformation  string    XSL to transform ingestion MRSS XML
 *  .
 * @param  storageProfileId  int    ID of default storage profile to be used for linked net-storage file syncs
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConversionProfile = module.exports.KalturaConversionProfile = function(){
  this.id = null;
  this.partnerId = null;
  this.status = null;
  this.name = null;
  this.systemName = null;
  this.tags = null;
  this.description = null;
  this.defaultEntryId = null;
  this.createdAt = null;
  this.flavorParamsIds = null;
  this.isDefault = null;
  this.isPartnerDefault = null;
  this.cropDimensions = null;
  this.clipStart = null;
  this.clipDuration = null;
  this.xslTransformation = null;
  this.storageProfileId = null;
};
util.inherits(KalturaConversionProfile, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConversionProfileListResponse = module.exports.KalturaConversionProfileListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaConversionProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  dataContent  string    The data of the entry.
 * @param  retrieveDataContentByGet  bool    indicator whether to return the object for get action with the dataContent field. (insertOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDataEntry = module.exports.KalturaDataEntry = function(){
  this.dataContent = null;
  this.retrieveDataContentByGet = null;
};
util.inherits(KalturaDataEntry, KalturaBaseEntry);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDataEntryBaseFilter = module.exports.KalturaDataEntryBaseFilter = function(){
};
util.inherits(KalturaDataEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDataEntryFilter = module.exports.KalturaDataEntryFilter = function(){
};
util.inherits(KalturaDataEntryFilter, KalturaDataEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDataListResponse = module.exports.KalturaDataListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaDataListResponse, kcb.KalturaObjectBase);


/**
 * @param  documentType  int    The type of the document (insertOnly).
 * @param  assetParamsIds  string    Comma separated asset params ids that exists for this media entry
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentEntry = module.exports.KalturaDocumentEntry = function(){
  this.documentType = null;
  this.assetParamsIds = null;
};
util.inherits(KalturaDocumentEntry, KalturaBaseEntry);


/**
 * @param  flavorParamsId  int    The id of the flavor params, set to null for source flavor
 *  .
 * @param  name  string    Attribute name  
 *  .
 * @param  value  string    Attribute value  
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConversionAttribute = module.exports.KalturaConversionAttribute = function(){
  this.flavorParamsId = null;
  this.name = null;
  this.value = null;
};
util.inherits(KalturaConversionAttribute, kcb.KalturaObjectBase);


/**
 * @param  documentTypeEqual  int    .
 * @param  documentTypeIn  string    .
 * @param  assetParamsIdsMatchOr  string    .
 * @param  assetParamsIdsMatchAnd  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentEntryBaseFilter = module.exports.KalturaDocumentEntryBaseFilter = function(){
  this.documentTypeEqual = null;
  this.documentTypeIn = null;
  this.assetParamsIdsMatchOr = null;
  this.assetParamsIdsMatchAnd = null;
};
util.inherits(KalturaDocumentEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentEntryFilter = module.exports.KalturaDocumentEntryFilter = function(){
};
util.inherits(KalturaDocumentEntryFilter, KalturaDocumentEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentListResponse = module.exports.KalturaDocumentListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaDocumentListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  name  string    .
 * @param  description  string    .
 * @param  emailAddress  string    .
 * @param  mailboxId  string    .
 * @param  partnerId  int     (readOnly).
 * @param  conversionProfile2Id  int    .
 * @param  moderationStatus  int    .
 * @param  status  int     (readOnly).
 * @param  createdAt  string     (readOnly).
 * @param  defaultCategory  string    .
 * @param  defaultUserId  string    .
 * @param  defaultTags  string    .
 * @param  defaultAdminTags  string    .
 * @param  maxAttachmentSizeKbytes  int    .
 * @param  maxAttachmentsPerMail  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaEmailIngestionProfile = module.exports.KalturaEmailIngestionProfile = function(){
  this.id = null;
  this.name = null;
  this.description = null;
  this.emailAddress = null;
  this.mailboxId = null;
  this.partnerId = null;
  this.conversionProfile2Id = null;
  this.moderationStatus = null;
  this.status = null;
  this.createdAt = null;
  this.defaultCategory = null;
  this.defaultUserId = null;
  this.defaultTags = null;
  this.defaultAdminTags = null;
  this.maxAttachmentSizeKbytes = null;
  this.maxAttachmentsPerMail = null;
};
util.inherits(KalturaEmailIngestionProfile, kcb.KalturaObjectBase);


/**
 * @param  plays  int    Number of plays
 *   (readOnly).
 * @param  views  int    Number of views
 *   (readOnly).
 * @param  width  int    The width in pixels
 *   (readOnly).
 * @param  height  int    The height in pixels
 *   (readOnly).
 * @param  duration  int    The duration in seconds
 *   (readOnly).
 * @param  msDuration  int    The duration in miliseconds
 *  .
 * @param  durationType  string    The duration type (short for 0-4 mins, medium for 4-20 mins, long for 20+ mins)
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPlayableEntry = module.exports.KalturaPlayableEntry = function(){
  this.plays = null;
  this.views = null;
  this.width = null;
  this.height = null;
  this.duration = null;
  this.msDuration = null;
  this.durationType = null;
};
util.inherits(KalturaPlayableEntry, KalturaBaseEntry);


/**
 * @param  mediaType  int    The media type of the entry
 *   (insertOnly).
 * @param  conversionQuality  string    Override the default conversion quality
 *  DEPRECATED - use conversionProfileId instead (insertOnly).
 * @param  sourceType  string    The source type of the entry  (insertOnly).
 * @param  searchProviderType  int    The search provider type used to import this entry (insertOnly).
 * @param  searchProviderId  string    The ID of the media in the importing site (insertOnly).
 * @param  creditUserName  string    The user name used for credits.
 * @param  creditUrl  string    The URL for credits.
 * @param  mediaDate  int    The media date extracted from EXIF data (For images) as Unix timestamp (In seconds) (readOnly).
 * @param  dataUrl  string    The URL used for playback. This is not the download URL. (readOnly).
 * @param  flavorParamsIds  string    Comma separated flavor params ids that exists for this media entry
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaEntry = module.exports.KalturaMediaEntry = function(){
  this.mediaType = null;
  this.conversionQuality = null;
  this.sourceType = null;
  this.searchProviderType = null;
  this.searchProviderId = null;
  this.creditUserName = null;
  this.creditUrl = null;
  this.mediaDate = null;
  this.dataUrl = null;
  this.flavorParamsIds = null;
};
util.inherits(KalturaMediaEntry, KalturaPlayableEntry);


/**
 * @param  id  string    The ID of the Flavor Asset
 *   (readOnly).
 * @param  entryId  string    The entry ID of the Flavor Asset
 *   (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  version  int    The version of the Flavor Asset
 *   (readOnly).
 * @param  size  int    The size (in KBytes) of the Flavor Asset
 *   (readOnly).
 * @param  tags  string    Tags used to identify the Flavor Asset in various scenarios
 *  .
 * @param  fileExt  string    The file extension
 *   (insertOnly).
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  deletedAt  int     (readOnly).
 * @param  description  string    System description, error message, warnings and failure cause. (readOnly).
 * @param  partnerData  string    Partner private data.
 * @param  partnerDescription  string    Partner friendly description.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAsset = module.exports.KalturaAsset = function(){
  this.id = null;
  this.entryId = null;
  this.partnerId = null;
  this.version = null;
  this.size = null;
  this.tags = null;
  this.fileExt = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.deletedAt = null;
  this.description = null;
  this.partnerData = null;
  this.partnerDescription = null;
};
util.inherits(KalturaAsset, kcb.KalturaObjectBase);


/**
 * @param  flavorParamsId  int    The Flavor Params used to create this Flavor Asset
 *   (insertOnly).
 * @param  width  int    The width of the Flavor Asset 
 *   (readOnly).
 * @param  height  int    The height of the Flavor Asset
 *   (readOnly).
 * @param  bitrate  int    The overall bitrate (in KBits) of the Flavor Asset 
 *   (readOnly).
 * @param  frameRate  int    The frame rate (in FPS) of the Flavor Asset
 *   (readOnly).
 * @param  isOriginal  bool    True if this Flavor Asset is the original source
 *   (readOnly).
 * @param  isWeb  bool    True if this Flavor Asset is playable in KDP
 *   (readOnly).
 * @param  containerFormat  string    The container format
 *   (readOnly).
 * @param  videoCodecId  string    The video codec
 *   (readOnly).
 * @param  status  int    The status of the Flavor Asset
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorAsset = module.exports.KalturaFlavorAsset = function(){
  this.flavorParamsId = null;
  this.width = null;
  this.height = null;
  this.bitrate = null;
  this.frameRate = null;
  this.isOriginal = null;
  this.isWeb = null;
  this.containerFormat = null;
  this.videoCodecId = null;
  this.status = null;
};
util.inherits(KalturaFlavorAsset, KalturaAsset);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaContentResource = module.exports.KalturaContentResource = function(){
};
util.inherits(KalturaContentResource, KalturaResource);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  entryIdEqual  string    .
 * @param  entryIdIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  sizeGreaterThanOrEqual  int    .
 * @param  sizeLessThanOrEqual  int    .
 * @param  tagsLike  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  deletedAtGreaterThanOrEqual  int    .
 * @param  deletedAtLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetBaseFilter = module.exports.KalturaAssetBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.entryIdEqual = null;
  this.entryIdIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.sizeGreaterThanOrEqual = null;
  this.sizeLessThanOrEqual = null;
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.deletedAtGreaterThanOrEqual = null;
  this.deletedAtLessThanOrEqual = null;
};
util.inherits(KalturaAssetBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetFilter = module.exports.KalturaAssetFilter = function(){
};
util.inherits(KalturaAssetFilter, KalturaAssetBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorAssetListResponse = module.exports.KalturaFlavorAssetListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaFlavorAssetListResponse, kcb.KalturaObjectBase);


/**
 * @param  value  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaString = module.exports.KalturaString = function(){
  this.value = null;
};
util.inherits(KalturaString, kcb.KalturaObjectBase);


/**
 * @param  id  int    The id of the Flavor Params
 *   (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  name  string    The name of the Flavor Params
 *  .
 * @param  systemName  string    System name of the Flavor Params
 *  .
 * @param  description  string    The description of the Flavor Params
 *  .
 * @param  createdAt  int    Creation date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  isSystemDefault  int    True if those Flavor Params are part of system defaults
 *   (readOnly).
 * @param  tags  string    The Flavor Params tags are used to identify the flavor for different usage (e.g. web, hd, mobile)
 *  .
 * @param  requiredPermissions  array    Array of partner permisison names that required for using this asset params
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetParams = module.exports.KalturaAssetParams = function(){
  this.id = null;
  this.partnerId = null;
  this.name = null;
  this.systemName = null;
  this.description = null;
  this.createdAt = null;
  this.isSystemDefault = null;
  this.tags = null;
  this.requiredPermissions = null;
};
util.inherits(KalturaAssetParams, kcb.KalturaObjectBase);


/**
 * @param  videoCodec  string    The video codec of the Flavor Params
 *  .
 * @param  videoBitrate  int    The video bitrate (in KBits) of the Flavor Params
 *  .
 * @param  audioCodec  string    The audio codec of the Flavor Params
 *  .
 * @param  audioBitrate  int    The audio bitrate (in KBits) of the Flavor Params
 *  .
 * @param  audioChannels  int    The number of audio channels for "downmixing"
 *  .
 * @param  audioSampleRate  int    The audio sample rate of the Flavor Params
 *  .
 * @param  width  int    The desired width of the Flavor Params
 *  .
 * @param  height  int    The desired height of the Flavor Params
 *  .
 * @param  frameRate  int    The frame rate of the Flavor Params
 *  .
 * @param  gopSize  int    The gop size of the Flavor Params
 *  .
 * @param  conversionEngines  string    The list of conversion engines (comma separated)
 *  .
 * @param  conversionEnginesExtraParams  string    The list of conversion engines extra params (separated with "|")
 *  .
 * @param  twoPass  bool    .
 * @param  deinterlice  int    .
 * @param  rotate  int    .
 * @param  operators  string    .
 * @param  engineVersion  int    .
 * @param  format  string    The container format of the Flavor Params
 *  .
 * @param  aspectRatioProcessingMode  int    .
 * @param  forceFrameToMultiplication16  int    .
 * @param  videoConstantBitrate  int    .
 * @param  videoBitrateTolerance  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorParams = module.exports.KalturaFlavorParams = function(){
  this.videoCodec = null;
  this.videoBitrate = null;
  this.audioCodec = null;
  this.audioBitrate = null;
  this.audioChannels = null;
  this.audioSampleRate = null;
  this.width = null;
  this.height = null;
  this.frameRate = null;
  this.gopSize = null;
  this.conversionEngines = null;
  this.conversionEnginesExtraParams = null;
  this.twoPass = null;
  this.deinterlice = null;
  this.rotate = null;
  this.operators = null;
  this.engineVersion = null;
  this.format = null;
  this.aspectRatioProcessingMode = null;
  this.forceFrameToMultiplication16 = null;
  this.videoConstantBitrate = null;
  this.videoBitrateTolerance = null;
};
util.inherits(KalturaFlavorParams, KalturaAssetParams);


/**
 * @param  flavorAsset  KalturaFlavorAsset    The Flavor Asset (Can be null when there are params without asset)
 *  .
 * @param  flavorParams  KalturaFlavorParams    The Flavor Params
 *  .
 * @param  entryId  string    The entry id
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorAssetWithParams = module.exports.KalturaFlavorAssetWithParams = function(){
  this.flavorAsset = null;
  this.flavorParams = null;
  this.entryId = null;
};
util.inherits(KalturaFlavorAssetWithParams, kcb.KalturaObjectBase);


/**
 * @param  formatEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorParamsBaseFilter = module.exports.KalturaFlavorParamsBaseFilter = function(){
  this.formatEqual = null;
};
util.inherits(KalturaFlavorParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorParamsFilter = module.exports.KalturaFlavorParamsFilter = function(){
};
util.inherits(KalturaFlavorParamsFilter, KalturaFlavorParamsBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorParamsListResponse = module.exports.KalturaFlavorParamsListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaFlavorParamsListResponse, kcb.KalturaObjectBase);


/**
 * @param  bitrate  int    .
 * @param  width  int    .
 * @param  height  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaLiveStreamBitrate = module.exports.KalturaLiveStreamBitrate = function(){
  this.bitrate = null;
  this.width = null;
  this.height = null;
};
util.inherits(KalturaLiveStreamBitrate, kcb.KalturaObjectBase);


/**
 * @param  offlineMessage  string    The message to be presented when the stream is offline
 *  @var string.
 * @param  streamRemoteId  string    The stream id as provided by the provider
 *  @var string (readOnly).
 * @param  streamRemoteBackupId  string    The backup stream id as provided by the provider
 *  @var string (readOnly).
 * @param  bitrates  array    Array of supported bitrates
 *  @var KalturaLiveStreamBitrateArray.
 * @param  primaryBroadcastingUrl  string    .
 * @param  secondaryBroadcastingUrl  string    .
 * @param  streamName  string    .
 * @param  streamUrl  string    The stream url
 *  @var string.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaLiveStreamEntry = module.exports.KalturaLiveStreamEntry = function(){
  this.offlineMessage = null;
  this.streamRemoteId = null;
  this.streamRemoteBackupId = null;
  this.bitrates = null;
  this.primaryBroadcastingUrl = null;
  this.secondaryBroadcastingUrl = null;
  this.streamName = null;
  this.streamUrl = null;
};
util.inherits(KalturaLiveStreamEntry, KalturaMediaEntry);


/**
 * @param  encodingIP1  string    The broadcast primary ip
 *  .
 * @param  encodingIP2  string    The broadcast secondary ip
 *  .
 * @param  streamPassword  string    The broadcast password
 *  .
 * @param  streamUsername  string    The broadcast username
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaLiveStreamAdminEntry = module.exports.KalturaLiveStreamAdminEntry = function(){
  this.encodingIP1 = null;
  this.encodingIP2 = null;
  this.streamPassword = null;
  this.streamUsername = null;
};
util.inherits(KalturaLiveStreamAdminEntry, KalturaLiveStreamEntry);


/**
 * @param  durationLessThan  int    .
 * @param  durationGreaterThan  int    .
 * @param  durationLessThanOrEqual  int    .
 * @param  durationGreaterThanOrEqual  int    .
 * @param  msDurationLessThan  int    .
 * @param  msDurationGreaterThan  int    .
 * @param  msDurationLessThanOrEqual  int    .
 * @param  msDurationGreaterThanOrEqual  int    .
 * @param  durationTypeMatchOr  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPlayableEntryBaseFilter = module.exports.KalturaPlayableEntryBaseFilter = function(){
  this.durationLessThan = null;
  this.durationGreaterThan = null;
  this.durationLessThanOrEqual = null;
  this.durationGreaterThanOrEqual = null;
  this.msDurationLessThan = null;
  this.msDurationGreaterThan = null;
  this.msDurationLessThanOrEqual = null;
  this.msDurationGreaterThanOrEqual = null;
  this.durationTypeMatchOr = null;
};
util.inherits(KalturaPlayableEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPlayableEntryFilter = module.exports.KalturaPlayableEntryFilter = function(){
};
util.inherits(KalturaPlayableEntryFilter, KalturaPlayableEntryBaseFilter);


/**
 * @param  mediaTypeEqual  int    .
 * @param  mediaTypeIn  string    .
 * @param  mediaDateGreaterThanOrEqual  int    .
 * @param  mediaDateLessThanOrEqual  int    .
 * @param  flavorParamsIdsMatchOr  string    .
 * @param  flavorParamsIdsMatchAnd  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaEntryBaseFilter = module.exports.KalturaMediaEntryBaseFilter = function(){
  this.mediaTypeEqual = null;
  this.mediaTypeIn = null;
  this.mediaDateGreaterThanOrEqual = null;
  this.mediaDateLessThanOrEqual = null;
  this.flavorParamsIdsMatchOr = null;
  this.flavorParamsIdsMatchAnd = null;
};
util.inherits(KalturaMediaEntryBaseFilter, KalturaPlayableEntryFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaEntryFilter = module.exports.KalturaMediaEntryFilter = function(){
};
util.inherits(KalturaMediaEntryFilter, KalturaMediaEntryBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaLiveStreamEntryBaseFilter = module.exports.KalturaLiveStreamEntryBaseFilter = function(){
};
util.inherits(KalturaLiveStreamEntryBaseFilter, KalturaMediaEntryFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaLiveStreamEntryFilter = module.exports.KalturaLiveStreamEntryFilter = function(){
};
util.inherits(KalturaLiveStreamEntryFilter, KalturaLiveStreamEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaLiveStreamListResponse = module.exports.KalturaLiveStreamListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaLiveStreamListResponse, kcb.KalturaObjectBase);


/**
 * @param  flavorAssetIdEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaInfoBaseFilter = module.exports.KalturaMediaInfoBaseFilter = function(){
  this.flavorAssetIdEqual = null;
};
util.inherits(KalturaMediaInfoBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaInfoFilter = module.exports.KalturaMediaInfoFilter = function(){
};
util.inherits(KalturaMediaInfoFilter, KalturaMediaInfoBaseFilter);


/**
 * @param  id  int    The id of the media info
 *   (readOnly).
 * @param  flavorAssetId  string    The id of the related flavor asset
 *  .
 * @param  fileSize  int    The file size
 *  .
 * @param  containerFormat  string    The container format
 *  .
 * @param  containerId  string    The container id
 *  .
 * @param  containerProfile  string    The container profile
 *  .
 * @param  containerDuration  int    The container duration
 *  .
 * @param  containerBitRate  int    The container bit rate
 *  .
 * @param  videoFormat  string    The video format
 *  .
 * @param  videoCodecId  string    The video codec id
 *  .
 * @param  videoDuration  int    The video duration
 *  .
 * @param  videoBitRate  int    The video bit rate
 *  .
 * @param  videoBitRateMode  int    The video bit rate mode
 *  .
 * @param  videoWidth  int    The video width
 *  .
 * @param  videoHeight  int    The video height
 *  .
 * @param  videoFrameRate  float    The video frame rate
 *  .
 * @param  videoDar  float    The video display aspect ratio (dar)
 *  .
 * @param  videoRotation  int    .
 * @param  audioFormat  string    The audio format
 *  .
 * @param  audioCodecId  string    The audio codec id
 *  .
 * @param  audioDuration  int    The audio duration
 *  .
 * @param  audioBitRate  int    The audio bit rate
 *  .
 * @param  audioBitRateMode  int    The audio bit rate mode
 *  .
 * @param  audioChannels  int    The number of audio channels
 *  .
 * @param  audioSamplingRate  int    The audio sampling rate
 *  .
 * @param  audioResolution  int    The audio resolution
 *  .
 * @param  writingLib  string    The writing library
 *  .
 * @param  rawData  string    The data as returned by the mediainfo command line
 *  .
 * @param  multiStreamInfo  string    .
 * @param  scanType  int    .
 * @param  multiStream  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaInfo = module.exports.KalturaMediaInfo = function(){
  this.id = null;
  this.flavorAssetId = null;
  this.fileSize = null;
  this.containerFormat = null;
  this.containerId = null;
  this.containerProfile = null;
  this.containerDuration = null;
  this.containerBitRate = null;
  this.videoFormat = null;
  this.videoCodecId = null;
  this.videoDuration = null;
  this.videoBitRate = null;
  this.videoBitRateMode = null;
  this.videoWidth = null;
  this.videoHeight = null;
  this.videoFrameRate = null;
  this.videoDar = null;
  this.videoRotation = null;
  this.audioFormat = null;
  this.audioCodecId = null;
  this.audioDuration = null;
  this.audioBitRate = null;
  this.audioBitRateMode = null;
  this.audioChannels = null;
  this.audioSamplingRate = null;
  this.audioResolution = null;
  this.writingLib = null;
  this.rawData = null;
  this.multiStreamInfo = null;
  this.scanType = null;
  this.multiStream = null;
};
util.inherits(KalturaMediaInfo, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaInfoListResponse = module.exports.KalturaMediaInfoListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaMediaInfoListResponse, kcb.KalturaObjectBase);


/**
 * @param  keyWords  string    .
 * @param  searchSource  int    .
 * @param  mediaType  int    .
 * @param  extraData  string    Use this field to pass dynamic data for searching
 *  For example - if you set this field to "mymovies_$partner_id"
 *  The $partner_id will be automatically replcaed with your real partner Id
 *  .
 * @param  authData  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSearch = module.exports.KalturaSearch = function(){
  this.keyWords = null;
  this.searchSource = null;
  this.mediaType = null;
  this.extraData = null;
  this.authData = null;
};
util.inherits(KalturaSearch, kcb.KalturaObjectBase);


/**
 * @param  id  string    .
 * @param  title  string    .
 * @param  thumbUrl  string    .
 * @param  description  string    .
 * @param  tags  string    .
 * @param  url  string    .
 * @param  sourceLink  string    .
 * @param  credit  string    .
 * @param  licenseType  int    .
 * @param  flashPlaybackType  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSearchResult = module.exports.KalturaSearchResult = function(){
  this.id = null;
  this.title = null;
  this.thumbUrl = null;
  this.description = null;
  this.tags = null;
  this.url = null;
  this.sourceLink = null;
  this.credit = null;
  this.licenseType = null;
  this.flashPlaybackType = null;
};
util.inherits(KalturaSearchResult, KalturaSearch);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaListResponse = module.exports.KalturaMediaListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaMediaListResponse, kcb.KalturaObjectBase);


/**
 * @param  hasRealThumbnail  bool    Indicates whether the user has submited a real thumbnail to the mix (Not the one that was generated automaticaly)
 *   (readOnly).
 * @param  editorType  int    The editor type used to edit the metadata
 *  .
 * @param  dataContent  string    The xml data of the mix.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMixEntry = module.exports.KalturaMixEntry = function(){
  this.hasRealThumbnail = null;
  this.editorType = null;
  this.dataContent = null;
};
util.inherits(KalturaMixEntry, KalturaPlayableEntry);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMixEntryBaseFilter = module.exports.KalturaMixEntryBaseFilter = function(){
};
util.inherits(KalturaMixEntryBaseFilter, KalturaPlayableEntryFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMixEntryFilter = module.exports.KalturaMixEntryFilter = function(){
};
util.inherits(KalturaMixEntryFilter, KalturaMixEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMixListResponse = module.exports.KalturaMixListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaMixListResponse, kcb.KalturaObjectBase);


/**
 * @param  url  string    The URL where the notification should be sent to .
 * @param  data  string    The serialized notification data to send.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaClientNotification = module.exports.KalturaClientNotification = function(){
  this.url = null;
  this.data = null;
};
util.inherits(KalturaClientNotification, kcb.KalturaObjectBase);


/**
 * @param  key  string    .
 * @param  value  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaKeyValue = module.exports.KalturaKeyValue = function(){
  this.key = null;
  this.value = null;
};
util.inherits(KalturaKeyValue, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  name  string    .
 * @param  website  string    .
 * @param  notificationUrl  string    .
 * @param  appearInSearch  int    .
 * @param  createdAt  int     (readOnly).
 * @param  adminName  string    deprecated - lastName and firstName replaces this field.
 * @param  adminEmail  string    .
 * @param  description  string    .
 * @param  commercialUse  int    .
 * @param  landingPage  string    .
 * @param  userLandingPage  string    .
 * @param  contentCategories  string    .
 * @param  type  int    .
 * @param  phone  string    .
 * @param  describeYourself  string    .
 * @param  adultContent  bool    .
 * @param  defConversionProfileType  string    .
 * @param  notify  int    .
 * @param  status  int     (readOnly).
 * @param  allowQuickEdit  int    .
 * @param  mergeEntryLists  int    .
 * @param  notificationsConfig  string    .
 * @param  maxUploadSize  int    .
 * @param  partnerPackage  int     (readOnly).
 * @param  secret  string     (readOnly).
 * @param  adminSecret  string     (readOnly).
 * @param  cmsPassword  string     (readOnly).
 * @param  allowMultiNotification  int    .
 * @param  adminLoginUsersQuota  int     (readOnly).
 * @param  adminUserId  string    .
 * @param  firstName  string    firstName and lastName replace the old (deprecated) adminName.
 * @param  lastName  string    lastName and firstName replace the old (deprecated) adminName.
 * @param  country  string    country code (2char) - this field is optional
 *  .
 * @param  state  string    state code (2char) - this field is optional.
 * @param  additionalParams  array     (insertOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPartner = module.exports.KalturaPartner = function(){
  this.id = null;
  this.name = null;
  this.website = null;
  this.notificationUrl = null;
  this.appearInSearch = null;
  this.createdAt = null;
  this.adminName = null;
  this.adminEmail = null;
  this.description = null;
  this.commercialUse = null;
  this.landingPage = null;
  this.userLandingPage = null;
  this.contentCategories = null;
  this.type = null;
  this.phone = null;
  this.describeYourself = null;
  this.adultContent = null;
  this.defConversionProfileType = null;
  this.notify = null;
  this.status = null;
  this.allowQuickEdit = null;
  this.mergeEntryLists = null;
  this.notificationsConfig = null;
  this.maxUploadSize = null;
  this.partnerPackage = null;
  this.secret = null;
  this.adminSecret = null;
  this.cmsPassword = null;
  this.allowMultiNotification = null;
  this.adminLoginUsersQuota = null;
  this.adminUserId = null;
  this.firstName = null;
  this.lastName = null;
  this.country = null;
  this.state = null;
  this.additionalParams = null;
};
util.inherits(KalturaPartner, kcb.KalturaObjectBase);


/**
 * @param  hostingGB  float    Partner total hosting in GB on the disk
 *   (readOnly).
 * @param  Percent  float    percent of usage out of partner's package. if usageGB is 5 and package is 10GB, this value will be 50
 *   (readOnly).
 * @param  packageBW  int    package total BW - actually this is usage, which represents BW+storage
 *   (readOnly).
 * @param  usageGB  int    total usage in GB - including bandwidth and storage
 *   (readOnly).
 * @param  reachedLimitDate  int    date when partner reached the limit of his package (timestamp)
 *   (readOnly).
 * @param  usageGraph  string    a semi-colon separated list of comma-separated key-values to represent a usage graph.
 *  keys could be 1-12 for a year view (1,1.2;2,1.1;3,0.9;...;12,1.4;)
 *  keys could be 1-[28,29,30,31] depending on the requested month, for a daily view in a given month (1,0.4;2,0.2;...;31,0.1;)
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPartnerUsage = module.exports.KalturaPartnerUsage = function(){
  this.hostingGB = null;
  this.Percent = null;
  this.packageBW = null;
  this.usageGB = null;
  this.reachedLimitDate = null;
  this.usageGraph = null;
};
util.inherits(KalturaPartnerUsage, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  type  string     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  tags  string    .
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPermissionItem = module.exports.KalturaPermissionItem = function(){
  this.id = null;
  this.type = null;
  this.partnerId = null;
  this.tags = null;
  this.createdAt = null;
  this.updatedAt = null;
};
util.inherits(KalturaPermissionItem, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPermissionItemBaseFilter = module.exports.KalturaPermissionItemBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
util.inherits(KalturaPermissionItemBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPermissionItemFilter = module.exports.KalturaPermissionItemFilter = function(){
};
util.inherits(KalturaPermissionItemFilter, KalturaPermissionItemBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPermissionItemListResponse = module.exports.KalturaPermissionItemListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaPermissionItemListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  type  int     (readOnly).
 * @param  name  string    .
 * @param  friendlyName  string    .
 * @param  description  string    .
 * @param  status  int    .
 * @param  partnerId  int     (readOnly).
 * @param  dependsOnPermissionNames  string    .
 * @param  tags  string    .
 * @param  permissionItemsIds  string    .
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  partnerGroup  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPermission = module.exports.KalturaPermission = function(){
  this.id = null;
  this.type = null;
  this.name = null;
  this.friendlyName = null;
  this.description = null;
  this.status = null;
  this.partnerId = null;
  this.dependsOnPermissionNames = null;
  this.tags = null;
  this.permissionItemsIds = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.partnerGroup = null;
};
util.inherits(KalturaPermission, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  typeEqual  int    .
 * @param  typeIn  string    .
 * @param  nameEqual  string    .
 * @param  nameIn  string    .
 * @param  friendlyNameLike  string    .
 * @param  descriptionLike  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  dependsOnPermissionNamesMultiLikeOr  string    .
 * @param  dependsOnPermissionNamesMultiLikeAnd  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPermissionBaseFilter = module.exports.KalturaPermissionBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.nameEqual = null;
  this.nameIn = null;
  this.friendlyNameLike = null;
  this.descriptionLike = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.dependsOnPermissionNamesMultiLikeOr = null;
  this.dependsOnPermissionNamesMultiLikeAnd = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
util.inherits(KalturaPermissionBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPermissionFilter = module.exports.KalturaPermissionFilter = function(){
};
util.inherits(KalturaPermissionFilter, KalturaPermissionBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPermissionListResponse = module.exports.KalturaPermissionListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaPermissionListResponse, kcb.KalturaObjectBase);


/**
 * @param  limit  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaEntryFilterForPlaylist = module.exports.KalturaMediaEntryFilterForPlaylist = function(){
  this.limit = null;
};
util.inherits(KalturaMediaEntryFilterForPlaylist, KalturaMediaEntryFilter);


/**
 * @param  playlistContent  string    Content of the playlist - 
 *  XML if the playlistType is dynamic 
 *  text if the playlistType is static 
 *  url if the playlistType is mRss .
 * @param  filters  array    .
 * @param  totalResults  int    .
 * @param  playlistType  int    Type of playlist  .
 * @param  plays  int    Number of plays (readOnly).
 * @param  views  int    Number of views (readOnly).
 * @param  duration  int    The duration in seconds (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPlaylist = module.exports.KalturaPlaylist = function(){
  this.playlistContent = null;
  this.filters = null;
  this.totalResults = null;
  this.playlistType = null;
  this.plays = null;
  this.views = null;
  this.duration = null;
};
util.inherits(KalturaPlaylist, KalturaBaseEntry);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPlaylistBaseFilter = module.exports.KalturaPlaylistBaseFilter = function(){
};
util.inherits(KalturaPlaylistBaseFilter, KalturaBaseEntryFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPlaylistFilter = module.exports.KalturaPlaylistFilter = function(){
};
util.inherits(KalturaPlaylistFilter, KalturaPlaylistBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPlaylistListResponse = module.exports.KalturaPlaylistListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaPlaylistListResponse, kcb.KalturaObjectBase);


/**
 * @param  fromDate  int    .
 * @param  toDate  int    .
 * @param  keywords  string    .
 * @param  searchInTags  bool    .
 * @param  searchInAdminTags  bool    .
 * @param  categories  string    .
 * @param  timeZoneOffset  int    time zone offset in minutes.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaReportInputFilter = module.exports.KalturaReportInputFilter = function(){
  this.fromDate = null;
  this.toDate = null;
  this.keywords = null;
  this.searchInTags = null;
  this.searchInAdminTags = null;
  this.categories = null;
  this.timeZoneOffset = null;
};
util.inherits(KalturaReportInputFilter, kcb.KalturaObjectBase);


/**
 * @param  id  string    .
 * @param  data  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaReportGraph = module.exports.KalturaReportGraph = function(){
  this.id = null;
  this.data = null;
};
util.inherits(KalturaReportGraph, kcb.KalturaObjectBase);


/**
 * @param  header  string    .
 * @param  data  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaReportTotal = module.exports.KalturaReportTotal = function(){
  this.header = null;
  this.data = null;
};
util.inherits(KalturaReportTotal, kcb.KalturaObjectBase);


/**
 * @param  header  string     (readOnly).
 * @param  data  string     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaReportTable = module.exports.KalturaReportTable = function(){
  this.header = null;
  this.data = null;
  this.totalCount = null;
};
util.inherits(KalturaReportTable, kcb.KalturaObjectBase);


/**
 * @param  columns  string    .
 * @param  results  array    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaReportResponse = module.exports.KalturaReportResponse = function(){
  this.columns = null;
  this.results = null;
};
util.inherits(KalturaReportResponse, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  needMediaInfo  bool     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSearchResultResponse = module.exports.KalturaSearchResultResponse = function(){
  this.objects = null;
  this.needMediaInfo = null;
};
util.inherits(KalturaSearchResultResponse, kcb.KalturaObjectBase);


/**
 * @param  authData  string    The authentication data that further should be used for search
 *  .
 * @param  loginUrl  string    Login URL when user need to sign-in and authorize the search.
 * @param  message  string    Information when there was an error.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSearchAuthData = module.exports.KalturaSearchAuthData = function(){
  this.authData = null;
  this.loginUrl = null;
  this.message = null;
};
util.inherits(KalturaSearchAuthData, kcb.KalturaObjectBase);


/**
 * @param  partnerId  int     (readOnly).
 * @param  ks  string     (readOnly).
 * @param  userId  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStartWidgetSessionResponse = module.exports.KalturaStartWidgetSessionResponse = function(){
  this.partnerId = null;
  this.ks = null;
  this.userId = null;
};
util.inherits(KalturaStartWidgetSessionResponse, kcb.KalturaObjectBase);


/**
 * @param  clientVer  string    .
 * @param  eventType  int    .
 * @param  eventTimestamp  float    the client's timestamp of this event
 *  .
 * @param  sessionId  string    a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param  partnerId  int    .
 * @param  entryId  string    .
 * @param  uniqueViewer  string    the UV cookie - creates in the operational system and should be passed on ofr every event .
 * @param  widgetId  string    .
 * @param  uiconfId  int    .
 * @param  userId  string    the partner's user id .
 * @param  currentPoint  int    the timestamp along the video when the event happend .
 * @param  duration  int    the duration of the video in milliseconds - will make it much faster than quering the db for each entry .
 * @param  userIp  string    will be retrieved from the request of the user  (readOnly).
 * @param  processDuration  int    the time in milliseconds the event took.
 * @param  controlId  string    the id of the GUI control - will be used in the future to better understand what the user clicked.
 * @param  seek  bool    true if the user ever used seek in this session .
 * @param  newPoint  int    timestamp of the new point on the timeline of the video after the user seeks .
 * @param  referrer  string    the referrer of the client.
 * @param  isFirstInSession  bool    will indicate if the event is thrown for the first video in the session.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStatsEvent = module.exports.KalturaStatsEvent = function(){
  this.clientVer = null;
  this.eventType = null;
  this.eventTimestamp = null;
  this.sessionId = null;
  this.partnerId = null;
  this.entryId = null;
  this.uniqueViewer = null;
  this.widgetId = null;
  this.uiconfId = null;
  this.userId = null;
  this.currentPoint = null;
  this.duration = null;
  this.userIp = null;
  this.processDuration = null;
  this.controlId = null;
  this.seek = null;
  this.newPoint = null;
  this.referrer = null;
  this.isFirstInSession = null;
};
util.inherits(KalturaStatsEvent, kcb.KalturaObjectBase);


/**
 * @param  clientVer  string    .
 * @param  kmcEventActionPath  string    .
 * @param  kmcEventType  int    .
 * @param  eventTimestamp  float    the client's timestamp of this event
 *  .
 * @param  sessionId  string    a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param  partnerId  int    .
 * @param  entryId  string    .
 * @param  widgetId  string    .
 * @param  uiconfId  int    .
 * @param  userId  string    the partner's user id .
 * @param  userIp  string    will be retrieved from the request of the user  (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStatsKmcEvent = module.exports.KalturaStatsKmcEvent = function(){
  this.clientVer = null;
  this.kmcEventActionPath = null;
  this.kmcEventType = null;
  this.eventTimestamp = null;
  this.sessionId = null;
  this.partnerId = null;
  this.entryId = null;
  this.widgetId = null;
  this.uiconfId = null;
  this.userId = null;
  this.userIp = null;
};
util.inherits(KalturaStatsKmcEvent, kcb.KalturaObjectBase);


/**
 * @param  id  string     (readOnly).
 * @param  partnerId  int    .
 * @param  browser  string    .
 * @param  serverIp  string    .
 * @param  serverOs  string    .
 * @param  phpVersion  string    .
 * @param  ceAdminEmail  string    .
 * @param  type  string    .
 * @param  description  string    .
 * @param  data  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCEError = module.exports.KalturaCEError = function(){
  this.id = null;
  this.partnerId = null;
  this.browser = null;
  this.serverIp = null;
  this.serverOs = null;
  this.phpVersion = null;
  this.ceAdminEmail = null;
  this.type = null;
  this.description = null;
  this.data = null;
};
util.inherits(KalturaCEError, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  name  string    .
 * @param  systemName  string    .
 * @param  desciption  string    .
 * @param  status  int    .
 * @param  protocol  int    .
 * @param  storageUrl  string    .
 * @param  storageBaseDir  string    .
 * @param  storageUsername  string    .
 * @param  storagePassword  string    .
 * @param  storageFtpPassiveMode  bool    .
 * @param  deliveryHttpBaseUrl  string    .
 * @param  deliveryRmpBaseUrl  string    .
 * @param  deliveryIisBaseUrl  string    .
 * @param  minFileSize  int    .
 * @param  maxFileSize  int    .
 * @param  flavorParamsIds  string    .
 * @param  maxConcurrentConnections  int    .
 * @param  pathManagerClass  string    .
 * @param  pathManagerParams  array    .
 * @param  urlManagerClass  string    .
 * @param  urlManagerParams  array    .
 * @param  trigger  int    No need to create enum for temp field
 *  .
 * @param  deliveryPriority  int    Delivery Priority
 *  .
 * @param  deliveryStatus  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStorageProfile = module.exports.KalturaStorageProfile = function(){
  this.id = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.partnerId = null;
  this.name = null;
  this.systemName = null;
  this.desciption = null;
  this.status = null;
  this.protocol = null;
  this.storageUrl = null;
  this.storageBaseDir = null;
  this.storageUsername = null;
  this.storagePassword = null;
  this.storageFtpPassiveMode = null;
  this.deliveryHttpBaseUrl = null;
  this.deliveryRmpBaseUrl = null;
  this.deliveryIisBaseUrl = null;
  this.minFileSize = null;
  this.maxFileSize = null;
  this.flavorParamsIds = null;
  this.maxConcurrentConnections = null;
  this.pathManagerClass = null;
  this.pathManagerParams = null;
  this.urlManagerClass = null;
  this.urlManagerParams = null;
  this.trigger = null;
  this.deliveryPriority = null;
  this.deliveryStatus = null;
};
util.inherits(KalturaStorageProfile, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  protocolEqual  int    .
 * @param  protocolIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStorageProfileBaseFilter = module.exports.KalturaStorageProfileBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.protocolEqual = null;
  this.protocolIn = null;
};
util.inherits(KalturaStorageProfileBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStorageProfileFilter = module.exports.KalturaStorageProfileFilter = function(){
};
util.inherits(KalturaStorageProfileFilter, KalturaStorageProfileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStorageProfileListResponse = module.exports.KalturaStorageProfileListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaStorageProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  string     (readOnly).
 * @param  feedUrl  string     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  playlistId  string    link a playlist that will set what content the feed will include
 *  if empty, all content will be included in feed
 *  .
 * @param  name  string    feed name
 *  .
 * @param  status  int    feed status
 *   (readOnly).
 * @param  type  int    feed type
 *   (insertOnly).
 * @param  landingPage  string    Base URL for each video, on the partners site
 *  This is required by all syndication types..
 * @param  createdAt  int    Creation date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  allowEmbed  bool    allow_embed tells google OR yahoo weather to allow embedding the video on google OR yahoo video results
 *  or just to provide a link to the landing page.
 *  it is applied on the video-player_loc property in the XML (google)
 *  and addes media-player tag (yahoo).
 * @param  playerUiconfId  int    Select a uiconf ID as player skin to include in the kwidget url.
 * @param  flavorParamId  int    .
 * @param  transcodeExistingContent  bool    .
 * @param  addToDefaultConversionProfile  bool    .
 * @param  categories  string    .
 * @param  storageId  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseSyndicationFeed = module.exports.KalturaBaseSyndicationFeed = function(){
  this.id = null;
  this.feedUrl = null;
  this.partnerId = null;
  this.playlistId = null;
  this.name = null;
  this.status = null;
  this.type = null;
  this.landingPage = null;
  this.createdAt = null;
  this.allowEmbed = null;
  this.playerUiconfId = null;
  this.flavorParamId = null;
  this.transcodeExistingContent = null;
  this.addToDefaultConversionProfile = null;
  this.categories = null;
  this.storageId = null;
};
util.inherits(KalturaBaseSyndicationFeed, kcb.KalturaObjectBase);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseSyndicationFeedBaseFilter = module.exports.KalturaBaseSyndicationFeedBaseFilter = function(){
};
util.inherits(KalturaBaseSyndicationFeedBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseSyndicationFeedFilter = module.exports.KalturaBaseSyndicationFeedFilter = function(){
};
util.inherits(KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseSyndicationFeedListResponse = module.exports.KalturaBaseSyndicationFeedListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaBaseSyndicationFeedListResponse, kcb.KalturaObjectBase);


/**
 * @param  totalEntryCount  int    the total count of entries that should appear in the feed without flavor filtering.
 * @param  actualEntryCount  int    count of entries that will appear in the feed (including all relevant filters).
 * @param  requireTranscodingCount  int    count of entries that requires transcoding in order to be included in feed.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSyndicationFeedEntryCount = module.exports.KalturaSyndicationFeedEntryCount = function(){
  this.totalEntryCount = null;
  this.actualEntryCount = null;
  this.requireTranscodingCount = null;
};
util.inherits(KalturaSyndicationFeedEntryCount, kcb.KalturaObjectBase);


/**
 * @param  thumbParamsId  int    The Flavor Params used to create this Flavor Asset
 *   (insertOnly).
 * @param  width  int    The width of the Flavor Asset 
 *   (readOnly).
 * @param  height  int    The height of the Flavor Asset
 *   (readOnly).
 * @param  status  int    The status of the asset
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbAsset = module.exports.KalturaThumbAsset = function(){
  this.thumbParamsId = null;
  this.width = null;
  this.height = null;
  this.status = null;
};
util.inherits(KalturaThumbAsset, KalturaAsset);


/**
 * @param  cropType  int    .
 * @param  quality  int    .
 * @param  cropX  int    .
 * @param  cropY  int    .
 * @param  cropWidth  int    .
 * @param  cropHeight  int    .
 * @param  videoOffset  float    .
 * @param  width  int    .
 * @param  height  int    .
 * @param  scaleWidth  float    .
 * @param  scaleHeight  float    .
 * @param  backgroundColor  string    Hexadecimal value.
 * @param  sourceParamsId  int    Id of the flavor params or the thumbnail params to be used as source for the thumbnail creation.
 * @param  format  string    The container format of the Flavor Params
 *  .
 * @param  density  int    The image density (dpi) for example: 72 or 96
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbParams = module.exports.KalturaThumbParams = function(){
  this.cropType = null;
  this.quality = null;
  this.cropX = null;
  this.cropY = null;
  this.cropWidth = null;
  this.cropHeight = null;
  this.videoOffset = null;
  this.width = null;
  this.height = null;
  this.scaleWidth = null;
  this.scaleHeight = null;
  this.backgroundColor = null;
  this.sourceParamsId = null;
  this.format = null;
  this.density = null;
};
util.inherits(KalturaThumbParams, KalturaAssetParams);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbAssetListResponse = module.exports.KalturaThumbAssetListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaThumbAssetListResponse, kcb.KalturaObjectBase);


/**
 * @param  formatEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbParamsBaseFilter = module.exports.KalturaThumbParamsBaseFilter = function(){
  this.formatEqual = null;
};
util.inherits(KalturaThumbParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbParamsFilter = module.exports.KalturaThumbParamsFilter = function(){
};
util.inherits(KalturaThumbParamsFilter, KalturaThumbParamsBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbParamsListResponse = module.exports.KalturaThumbParamsListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaThumbParamsListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  name  string    Name of the uiConf, this is not a primary key.
 * @param  description  string    .
 * @param  partnerId  int     (readOnly).
 * @param  objType  int    .
 * @param  objTypeAsString  string     (readOnly).
 * @param  width  int    .
 * @param  height  int    .
 * @param  htmlParams  string    .
 * @param  swfUrl  string    .
 * @param  confFilePath  string     (readOnly).
 * @param  confFile  string    .
 * @param  confFileFeatures  string    .
 * @param  confVars  string    .
 * @param  useCdn  bool    .
 * @param  tags  string    .
 * @param  swfUrlVersion  string    .
 * @param  createdAt  int    Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param  updatedAt  int    Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param  creationMode  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUiConf = module.exports.KalturaUiConf = function(){
  this.id = null;
  this.name = null;
  this.description = null;
  this.partnerId = null;
  this.objType = null;
  this.objTypeAsString = null;
  this.width = null;
  this.height = null;
  this.htmlParams = null;
  this.swfUrl = null;
  this.confFilePath = null;
  this.confFile = null;
  this.confFileFeatures = null;
  this.confVars = null;
  this.useCdn = null;
  this.tags = null;
  this.swfUrlVersion = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.creationMode = null;
};
util.inherits(KalturaUiConf, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  nameLike  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  objTypeEqual  int    .
 * @param  objTypeIn  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  creationModeEqual  int    .
 * @param  creationModeIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUiConfBaseFilter = module.exports.KalturaUiConfBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.nameLike = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.objTypeEqual = null;
  this.objTypeIn = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.creationModeEqual = null;
  this.creationModeIn = null;
};
util.inherits(KalturaUiConfBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUiConfFilter = module.exports.KalturaUiConfFilter = function(){
};
util.inherits(KalturaUiConfFilter, KalturaUiConfBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUiConfListResponse = module.exports.KalturaUiConfListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaUiConfListResponse, kcb.KalturaObjectBase);


/**
 * @param  type  int    UiConf Type
 *  .
 * @param  versions  array    Available versions
 *  .
 * @param  directory  string    The direcotry this type is saved at
 *  .
 * @param  filename  string    Filename for this UiConf type
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUiConfTypeInfo = module.exports.KalturaUiConfTypeInfo = function(){
  this.type = null;
  this.versions = null;
  this.directory = null;
  this.filename = null;
};
util.inherits(KalturaUiConfTypeInfo, kcb.KalturaObjectBase);


/**
 * @param  uploadTokenId  string    .
 * @param  fileSize  int    .
 * @param  errorCode  int    .
 * @param  errorDescription  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUploadResponse = module.exports.KalturaUploadResponse = function(){
  this.uploadTokenId = null;
  this.fileSize = null;
  this.errorCode = null;
  this.errorDescription = null;
};
util.inherits(KalturaUploadResponse, kcb.KalturaObjectBase);


/**
 * @param  id  string    Upload token unique ID (readOnly).
 * @param  partnerId  int    Partner ID of the upload token (readOnly).
 * @param  userId  string    User id for the upload token (readOnly).
 * @param  status  int    Status of the upload token (readOnly).
 * @param  fileName  string    Name of the file for the upload token, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param  fileSize  float    File size in bytes, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param  uploadedFileSize  float    Uploaded file size in bytes, can be used to identify how many bytes were uploaded before resuming (readOnly).
 * @param  createdAt  int    Creation date as Unix timestamp (In seconds) (readOnly).
 * @param  updatedAt  int    Last update date as Unix timestamp (In seconds) (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUploadToken = module.exports.KalturaUploadToken = function(){
  this.id = null;
  this.partnerId = null;
  this.userId = null;
  this.status = null;
  this.fileName = null;
  this.fileSize = null;
  this.uploadedFileSize = null;
  this.createdAt = null;
  this.updatedAt = null;
};
util.inherits(KalturaUploadToken, kcb.KalturaObjectBase);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  userIdEqual  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUploadTokenBaseFilter = module.exports.KalturaUploadTokenBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.userIdEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
util.inherits(KalturaUploadTokenBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUploadTokenFilter = module.exports.KalturaUploadTokenFilter = function(){
};
util.inherits(KalturaUploadTokenFilter, KalturaUploadTokenBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUploadTokenListResponse = module.exports.KalturaUploadTokenListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaUploadTokenListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  name  string    .
 * @param  description  string    .
 * @param  status  int    .
 * @param  partnerId  int     (readOnly).
 * @param  permissionNames  string    .
 * @param  tags  string    .
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserRole = module.exports.KalturaUserRole = function(){
  this.id = null;
  this.name = null;
  this.description = null;
  this.status = null;
  this.partnerId = null;
  this.permissionNames = null;
  this.tags = null;
  this.createdAt = null;
  this.updatedAt = null;
};
util.inherits(KalturaUserRole, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  nameEqual  string    .
 * @param  nameIn  string    .
 * @param  descriptionLike  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserRoleBaseFilter = module.exports.KalturaUserRoleBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.nameEqual = null;
  this.nameIn = null;
  this.descriptionLike = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
util.inherits(KalturaUserRoleBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserRoleFilter = module.exports.KalturaUserRoleFilter = function(){
};
util.inherits(KalturaUserRoleFilter, KalturaUserRoleBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserRoleListResponse = module.exports.KalturaUserRoleListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaUserRoleListResponse, kcb.KalturaObjectBase);


/**
 * @param  partnerIdEqual  int    .
 * @param  screenNameLike  string    .
 * @param  screenNameStartsWith  string    .
 * @param  emailLike  string    .
 * @param  emailStartsWith  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  isAdminEqual  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserBaseFilter = module.exports.KalturaUserBaseFilter = function(){
  this.partnerIdEqual = null;
  this.screenNameLike = null;
  this.screenNameStartsWith = null;
  this.emailLike = null;
  this.emailStartsWith = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.isAdminEqual = null;
};
util.inherits(KalturaUserBaseFilter, KalturaFilter);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  loginEnabledEqual  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserFilter = module.exports.KalturaUserFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.loginEnabledEqual = null;
};
util.inherits(KalturaUserFilter, KalturaUserBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserListResponse = module.exports.KalturaUserListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaUserListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  string     (readOnly).
 * @param  sourceWidgetId  string    .
 * @param  rootWidgetId  string     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  entryId  string    .
 * @param  uiConfId  int    .
 * @param  securityType  int    .
 * @param  securityPolicy  int    .
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  partnerData  string    Can be used to store various partner related data as a string .
 * @param  widgetHTML  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaWidget = module.exports.KalturaWidget = function(){
  this.id = null;
  this.sourceWidgetId = null;
  this.rootWidgetId = null;
  this.partnerId = null;
  this.entryId = null;
  this.uiConfId = null;
  this.securityType = null;
  this.securityPolicy = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.partnerData = null;
  this.widgetHTML = null;
};
util.inherits(KalturaWidget, kcb.KalturaObjectBase);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  sourceWidgetIdEqual  string    .
 * @param  rootWidgetIdEqual  string    .
 * @param  partnerIdEqual  int    .
 * @param  entryIdEqual  string    .
 * @param  uiConfIdEqual  int    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  partnerDataLike  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaWidgetBaseFilter = module.exports.KalturaWidgetBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.sourceWidgetIdEqual = null;
  this.rootWidgetIdEqual = null;
  this.partnerIdEqual = null;
  this.entryIdEqual = null;
  this.uiConfIdEqual = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.partnerDataLike = null;
};
util.inherits(KalturaWidgetBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaWidgetFilter = module.exports.KalturaWidgetFilter = function(){
};
util.inherits(KalturaWidgetFilter, KalturaWidgetBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaWidgetListResponse = module.exports.KalturaWidgetListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaWidgetListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  metadataProfileId  int     (readOnly).
 * @param  metadataProfileVersion  int     (readOnly).
 * @param  metadataObjectType  string     (readOnly).
 * @param  objectId  string     (readOnly).
 * @param  version  int     (readOnly).
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  status  int     (readOnly).
 * @param  xml  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadata = module.exports.KalturaMetadata = function(){
  this.id = null;
  this.partnerId = null;
  this.metadataProfileId = null;
  this.metadataProfileVersion = null;
  this.metadataObjectType = null;
  this.objectId = null;
  this.version = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.status = null;
  this.xml = null;
};
util.inherits(KalturaMetadata, kcb.KalturaObjectBase);


/**
 * @param  partnerIdEqual  int    .
 * @param  metadataProfileIdEqual  int    .
 * @param  metadataProfileVersionEqual  int    .
 * @param  metadataProfileVersionGreaterThanOrEqual  int    .
 * @param  metadataProfileVersionLessThanOrEqual  int    .
 * @param  metadataObjectTypeEqual  string    .
 * @param  objectIdEqual  string    .
 * @param  objectIdIn  string    .
 * @param  versionEqual  int    .
 * @param  versionGreaterThanOrEqual  int    .
 * @param  versionLessThanOrEqual  int    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataBaseFilter = module.exports.KalturaMetadataBaseFilter = function(){
  this.partnerIdEqual = null;
  this.metadataProfileIdEqual = null;
  this.metadataProfileVersionEqual = null;
  this.metadataProfileVersionGreaterThanOrEqual = null;
  this.metadataProfileVersionLessThanOrEqual = null;
  this.metadataObjectTypeEqual = null;
  this.objectIdEqual = null;
  this.objectIdIn = null;
  this.versionEqual = null;
  this.versionGreaterThanOrEqual = null;
  this.versionLessThanOrEqual = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
util.inherits(KalturaMetadataBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataFilter = module.exports.KalturaMetadataFilter = function(){
};
util.inherits(KalturaMetadataFilter, KalturaMetadataBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataListResponse = module.exports.KalturaMetadataListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaMetadataListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  metadataObjectType  string    .
 * @param  version  int     (readOnly).
 * @param  name  string    .
 * @param  systemName  string    .
 * @param  description  string    .
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  status  int     (readOnly).
 * @param  xsd  string     (readOnly).
 * @param  views  string     (readOnly).
 * @param  createMode  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataProfile = module.exports.KalturaMetadataProfile = function(){
  this.id = null;
  this.partnerId = null;
  this.metadataObjectType = null;
  this.version = null;
  this.name = null;
  this.systemName = null;
  this.description = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.status = null;
  this.xsd = null;
  this.views = null;
  this.createMode = null;
};
util.inherits(KalturaMetadataProfile, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  metadataObjectTypeEqual  string    .
 * @param  versionEqual  int    .
 * @param  nameEqual  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataProfileBaseFilter = module.exports.KalturaMetadataProfileBaseFilter = function(){
  this.idEqual = null;
  this.partnerIdEqual = null;
  this.metadataObjectTypeEqual = null;
  this.versionEqual = null;
  this.nameEqual = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
util.inherits(KalturaMetadataProfileBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataProfileFilter = module.exports.KalturaMetadataProfileFilter = function(){
};
util.inherits(KalturaMetadataProfileFilter, KalturaMetadataProfileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataProfileListResponse = module.exports.KalturaMetadataProfileListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaMetadataProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  xPath  string     (readOnly).
 * @param  key  string     (readOnly).
 * @param  label  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataProfileField = module.exports.KalturaMetadataProfileField = function(){
  this.id = null;
  this.xPath = null;
  this.key = null;
  this.label = null;
};
util.inherits(KalturaMetadataProfileField, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataProfileFieldListResponse = module.exports.KalturaMetadataProfileFieldListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaMetadataProfileFieldListResponse, kcb.KalturaObjectBase);


/**
 * @param  schedulerId  int    .
 * @param  workerId  int    .
 * @param  batchIndex  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaExclusiveLockKey = module.exports.KalturaExclusiveLockKey = function(){
  this.schedulerId = null;
  this.workerId = null;
  this.batchIndex = null;
};
util.inherits(KalturaExclusiveLockKey, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idGreaterThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  partnerIdNotIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  processorExpirationGreaterThanOrEqual  int    .
 * @param  processorExpirationLessThanOrEqual  int    .
 * @param  executionAttemptsGreaterThanOrEqual  int    .
 * @param  executionAttemptsLessThanOrEqual  int    .
 * @param  lockVersionGreaterThanOrEqual  int    .
 * @param  lockVersionLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseJobBaseFilter = module.exports.KalturaBaseJobBaseFilter = function(){
  this.idEqual = null;
  this.idGreaterThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.partnerIdNotIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.processorExpirationGreaterThanOrEqual = null;
  this.processorExpirationLessThanOrEqual = null;
  this.executionAttemptsGreaterThanOrEqual = null;
  this.executionAttemptsLessThanOrEqual = null;
  this.lockVersionGreaterThanOrEqual = null;
  this.lockVersionLessThanOrEqual = null;
};
util.inherits(KalturaBaseJobBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseJobFilter = module.exports.KalturaBaseJobFilter = function(){
};
util.inherits(KalturaBaseJobFilter, KalturaBaseJobBaseFilter);


/**
 * @param  entryIdEqual  string    .
 * @param  jobTypeEqual  string    .
 * @param  jobTypeIn  string    .
 * @param  jobTypeNotIn  string    .
 * @param  jobSubTypeEqual  int    .
 * @param  jobSubTypeIn  string    .
 * @param  jobSubTypeNotIn  string    .
 * @param  onStressDivertToEqual  int    .
 * @param  onStressDivertToIn  string    .
 * @param  onStressDivertToNotIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 * @param  abortEqual  int    .
 * @param  checkAgainTimeoutGreaterThanOrEqual  int    .
 * @param  checkAgainTimeoutLessThanOrEqual  int    .
 * @param  progressGreaterThanOrEqual  int    .
 * @param  progressLessThanOrEqual  int    .
 * @param  updatesCountGreaterThanOrEqual  int    .
 * @param  updatesCountLessThanOrEqual  int    .
 * @param  priorityGreaterThanOrEqual  int    .
 * @param  priorityLessThanOrEqual  int    .
 * @param  priorityEqual  int    .
 * @param  priorityIn  string    .
 * @param  priorityNotIn  string    .
 * @param  twinJobIdEqual  int    .
 * @param  twinJobIdIn  string    .
 * @param  twinJobIdNotIn  string    .
 * @param  bulkJobIdEqual  int    .
 * @param  bulkJobIdIn  string    .
 * @param  bulkJobIdNotIn  string    .
 * @param  parentJobIdEqual  int    .
 * @param  parentJobIdIn  string    .
 * @param  parentJobIdNotIn  string    .
 * @param  rootJobIdEqual  int    .
 * @param  rootJobIdIn  string    .
 * @param  rootJobIdNotIn  string    .
 * @param  queueTimeGreaterThanOrEqual  int    .
 * @param  queueTimeLessThanOrEqual  int    .
 * @param  finishTimeGreaterThanOrEqual  int    .
 * @param  finishTimeLessThanOrEqual  int    .
 * @param  errTypeEqual  int    .
 * @param  errTypeIn  string    .
 * @param  errTypeNotIn  string    .
 * @param  errNumberEqual  int    .
 * @param  errNumberIn  string    .
 * @param  errNumberNotIn  string    .
 * @param  fileSizeLessThan  int    .
 * @param  fileSizeGreaterThan  int    .
 * @param  lastWorkerRemoteEqual  bool    .
 * @param  schedulerIdEqual  int    .
 * @param  schedulerIdIn  string    .
 * @param  schedulerIdNotIn  string    .
 * @param  workerIdEqual  int    .
 * @param  workerIdIn  string    .
 * @param  workerIdNotIn  string    .
 * @param  batchIndexEqual  int    .
 * @param  batchIndexIn  string    .
 * @param  batchIndexNotIn  string    .
 * @param  lastSchedulerIdEqual  int    .
 * @param  lastSchedulerIdIn  string    .
 * @param  lastSchedulerIdNotIn  string    .
 * @param  lastWorkerIdEqual  int    .
 * @param  lastWorkerIdIn  string    .
 * @param  lastWorkerIdNotIn  string    .
 * @param  dcEqual  int    .
 * @param  dcIn  string    .
 * @param  dcNotIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBatchJobBaseFilter = module.exports.KalturaBatchJobBaseFilter = function(){
  this.entryIdEqual = null;
  this.jobTypeEqual = null;
  this.jobTypeIn = null;
  this.jobTypeNotIn = null;
  this.jobSubTypeEqual = null;
  this.jobSubTypeIn = null;
  this.jobSubTypeNotIn = null;
  this.onStressDivertToEqual = null;
  this.onStressDivertToIn = null;
  this.onStressDivertToNotIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
  this.abortEqual = null;
  this.checkAgainTimeoutGreaterThanOrEqual = null;
  this.checkAgainTimeoutLessThanOrEqual = null;
  this.progressGreaterThanOrEqual = null;
  this.progressLessThanOrEqual = null;
  this.updatesCountGreaterThanOrEqual = null;
  this.updatesCountLessThanOrEqual = null;
  this.priorityGreaterThanOrEqual = null;
  this.priorityLessThanOrEqual = null;
  this.priorityEqual = null;
  this.priorityIn = null;
  this.priorityNotIn = null;
  this.twinJobIdEqual = null;
  this.twinJobIdIn = null;
  this.twinJobIdNotIn = null;
  this.bulkJobIdEqual = null;
  this.bulkJobIdIn = null;
  this.bulkJobIdNotIn = null;
  this.parentJobIdEqual = null;
  this.parentJobIdIn = null;
  this.parentJobIdNotIn = null;
  this.rootJobIdEqual = null;
  this.rootJobIdIn = null;
  this.rootJobIdNotIn = null;
  this.queueTimeGreaterThanOrEqual = null;
  this.queueTimeLessThanOrEqual = null;
  this.finishTimeGreaterThanOrEqual = null;
  this.finishTimeLessThanOrEqual = null;
  this.errTypeEqual = null;
  this.errTypeIn = null;
  this.errTypeNotIn = null;
  this.errNumberEqual = null;
  this.errNumberIn = null;
  this.errNumberNotIn = null;
  this.fileSizeLessThan = null;
  this.fileSizeGreaterThan = null;
  this.lastWorkerRemoteEqual = null;
  this.schedulerIdEqual = null;
  this.schedulerIdIn = null;
  this.schedulerIdNotIn = null;
  this.workerIdEqual = null;
  this.workerIdIn = null;
  this.workerIdNotIn = null;
  this.batchIndexEqual = null;
  this.batchIndexIn = null;
  this.batchIndexNotIn = null;
  this.lastSchedulerIdEqual = null;
  this.lastSchedulerIdIn = null;
  this.lastSchedulerIdNotIn = null;
  this.lastWorkerIdEqual = null;
  this.lastWorkerIdIn = null;
  this.lastWorkerIdNotIn = null;
  this.dcEqual = null;
  this.dcIn = null;
  this.dcNotIn = null;
};
util.inherits(KalturaBatchJobBaseFilter, KalturaBaseJobFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBatchJobFilter = module.exports.KalturaBatchJobFilter = function(){
};
util.inherits(KalturaBatchJobFilter, KalturaBatchJobBaseFilter);


/**
 * @param  id  int     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  deletedAt  int     (readOnly).
 * @param  processorExpiration  int     (readOnly).
 * @param  executionAttempts  int     (readOnly).
 * @param  lockVersion  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBaseJob = module.exports.KalturaBaseJob = function(){
  this.id = null;
  this.partnerId = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.deletedAt = null;
  this.processorExpiration = null;
  this.executionAttempts = null;
  this.lockVersion = null;
};
util.inherits(KalturaBaseJob, kcb.KalturaObjectBase);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaJobData = module.exports.KalturaJobData = function(){
};
util.inherits(KalturaJobData, kcb.KalturaObjectBase);


/**
 * @param  entryId  string    .
 * @param  entryName  string    .
 * @param  jobType  string     (readOnly).
 * @param  jobSubType  int    .
 * @param  onStressDivertTo  int    .
 * @param  data  KalturaJobData    .
 * @param  status  int    .
 * @param  abort  int    .
 * @param  checkAgainTimeout  int    .
 * @param  progress  int    .
 * @param  message  string    .
 * @param  description  string    .
 * @param  updatesCount  int    .
 * @param  priority  int    .
 * @param  twinJobId  int    The id of identical job.
 * @param  bulkJobId  int    The id of the bulk upload job that initiated this job.
 * @param  parentJobId  int    When one job creates another - the parent should set this parentJobId to be its own id..
 * @param  rootJobId  int    The id of the root parent job.
 * @param  queueTime  int    The time that the job was pulled from the queue.
 * @param  finishTime  int    The time that the job was finished or closed as failed.
 * @param  errType  int    .
 * @param  errNumber  int    .
 * @param  fileSize  int    .
 * @param  lastWorkerRemote  bool    .
 * @param  schedulerId  int    .
 * @param  workerId  int    .
 * @param  batchIndex  int    .
 * @param  lastSchedulerId  int    .
 * @param  lastWorkerId  int    .
 * @param  dc  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBatchJob = module.exports.KalturaBatchJob = function(){
  this.entryId = null;
  this.entryName = null;
  this.jobType = null;
  this.jobSubType = null;
  this.onStressDivertTo = null;
  this.data = null;
  this.status = null;
  this.abort = null;
  this.checkAgainTimeout = null;
  this.progress = null;
  this.message = null;
  this.description = null;
  this.updatesCount = null;
  this.priority = null;
  this.twinJobId = null;
  this.bulkJobId = null;
  this.parentJobId = null;
  this.rootJobId = null;
  this.queueTime = null;
  this.finishTime = null;
  this.errType = null;
  this.errNumber = null;
  this.fileSize = null;
  this.lastWorkerRemote = null;
  this.schedulerId = null;
  this.workerId = null;
  this.batchIndex = null;
  this.lastSchedulerId = null;
  this.lastWorkerId = null;
  this.dc = null;
};
util.inherits(KalturaBatchJob, KalturaBaseJob);


/**
 * @param  job  KalturaBatchJob     (readOnly).
 * @param  jobType  string     (readOnly).
 * @param  queueSize  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreeJobResponse = module.exports.KalturaFreeJobResponse = function(){
  this.job = null;
  this.jobType = null;
  this.queueSize = null;
};
util.inherits(KalturaFreeJobResponse, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 * @param  lowerVersionCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTransformMetadataResponse = module.exports.KalturaTransformMetadataResponse = function(){
  this.objects = null;
  this.totalCount = null;
  this.lowerVersionCount = null;
};
util.inherits(KalturaTransformMetadataResponse, kcb.KalturaObjectBase);


/**
 * @param  flavorAssetId  string    .
 * @param  flavorParamsOutputId  int    .
 * @param  readyBehavior  int    .
 * @param  videoBitrate  int    .
 * @param  audioBitrate  int    .
 * @param  destFileSyncLocalPath  string    .
 * @param  destFileSyncRemoteUrl  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConvertCollectionFlavorData = module.exports.KalturaConvertCollectionFlavorData = function(){
  this.flavorAssetId = null;
  this.flavorParamsOutputId = null;
  this.readyBehavior = null;
  this.videoBitrate = null;
  this.audioBitrate = null;
  this.destFileSyncLocalPath = null;
  this.destFileSyncRemoteUrl = null;
};
util.inherits(KalturaConvertCollectionFlavorData, kcb.KalturaObjectBase);


/**
 * @param  puserId  string    .
 * @param  type  int    .
 * @param  objectId  string    .
 * @param  status  int    .
 * @param  notificationData  string    .
 * @param  numberOfAttempts  int    .
 * @param  notificationResult  string    .
 * @param  objType  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNotification = module.exports.KalturaNotification = function(){
  this.puserId = null;
  this.type = null;
  this.objectId = null;
  this.status = null;
  this.notificationData = null;
  this.numberOfAttempts = null;
  this.notificationResult = null;
  this.objType = null;
};
util.inherits(KalturaNotification, KalturaBaseJob);


/**
 * @param  notifications  array     (readOnly).
 * @param  partners  array     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBatchGetExclusiveNotificationJobsResponse = module.exports.KalturaBatchGetExclusiveNotificationJobsResponse = function(){
  this.notifications = null;
  this.partners = null;
};
util.inherits(KalturaBatchGetExclusiveNotificationJobsResponse, kcb.KalturaObjectBase);


/**
 * @param  schedulerId  int    .
 * @param  workerId  int    .
 * @param  jobType  string    .
 * @param  filter  KalturaBatchJobFilter    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaWorkerQueueFilter = module.exports.KalturaWorkerQueueFilter = function(){
  this.schedulerId = null;
  this.workerId = null;
  this.jobType = null;
  this.filter = null;
};
util.inherits(KalturaWorkerQueueFilter, kcb.KalturaObjectBase);


/**
 * @param  exists  bool    Indicates if the file exists
 *  .
 * @param  sizeOk  bool    Indicates if the file size is right
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFileExistsResponse = module.exports.KalturaFileExistsResponse = function(){
  this.exists = null;
  this.sizeOk = null;
};
util.inherits(KalturaFileExistsResponse, kcb.KalturaObjectBase);


/**
 * @param  partnerIdEqual  int    .
 * @param  fileObjectTypeEqual  string    .
 * @param  fileObjectTypeIn  string    .
 * @param  objectIdEqual  string    .
 * @param  objectIdIn  string    .
 * @param  versionEqual  string    .
 * @param  versionIn  string    .
 * @param  objectSubTypeEqual  int    .
 * @param  objectSubTypeIn  string    .
 * @param  dcEqual  string    .
 * @param  dcIn  string    .
 * @param  originalEqual  int    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  readyAtGreaterThanOrEqual  int    .
 * @param  readyAtLessThanOrEqual  int    .
 * @param  syncTimeGreaterThanOrEqual  int    .
 * @param  syncTimeLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  fileTypeEqual  int    .
 * @param  fileTypeIn  string    .
 * @param  linkedIdEqual  int    .
 * @param  linkCountGreaterThanOrEqual  int    .
 * @param  linkCountLessThanOrEqual  int    .
 * @param  fileSizeGreaterThanOrEqual  int    .
 * @param  fileSizeLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFileSyncBaseFilter = module.exports.KalturaFileSyncBaseFilter = function(){
  this.partnerIdEqual = null;
  this.fileObjectTypeEqual = null;
  this.fileObjectTypeIn = null;
  this.objectIdEqual = null;
  this.objectIdIn = null;
  this.versionEqual = null;
  this.versionIn = null;
  this.objectSubTypeEqual = null;
  this.objectSubTypeIn = null;
  this.dcEqual = null;
  this.dcIn = null;
  this.originalEqual = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.readyAtGreaterThanOrEqual = null;
  this.readyAtLessThanOrEqual = null;
  this.syncTimeGreaterThanOrEqual = null;
  this.syncTimeLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.fileTypeEqual = null;
  this.fileTypeIn = null;
  this.linkedIdEqual = null;
  this.linkCountGreaterThanOrEqual = null;
  this.linkCountLessThanOrEqual = null;
  this.fileSizeGreaterThanOrEqual = null;
  this.fileSizeLessThanOrEqual = null;
};
util.inherits(KalturaFileSyncBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFileSyncFilter = module.exports.KalturaFileSyncFilter = function(){
};
util.inherits(KalturaFileSyncFilter, KalturaFileSyncBaseFilter);


/**
 * @param  id  int     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  fileObjectType  string     (readOnly).
 * @param  objectId  string     (readOnly).
 * @param  version  string     (readOnly).
 * @param  objectSubType  int     (readOnly).
 * @param  dc  string     (readOnly).
 * @param  original  int     (readOnly).
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  readyAt  int     (readOnly).
 * @param  syncTime  int     (readOnly).
 * @param  status  int     (readOnly).
 * @param  fileType  int     (readOnly).
 * @param  linkedId  int     (readOnly).
 * @param  linkCount  int     (readOnly).
 * @param  fileRoot  string     (readOnly).
 * @param  filePath  string     (readOnly).
 * @param  fileSize  int     (readOnly).
 * @param  fileUrl  string     (readOnly).
 * @param  fileContent  string     (readOnly).
 * @param  fileDiscSize  int     (readOnly).
 * @param  isCurrentDc  bool     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFileSync = module.exports.KalturaFileSync = function(){
  this.id = null;
  this.partnerId = null;
  this.fileObjectType = null;
  this.objectId = null;
  this.version = null;
  this.objectSubType = null;
  this.dc = null;
  this.original = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.readyAt = null;
  this.syncTime = null;
  this.status = null;
  this.fileType = null;
  this.linkedId = null;
  this.linkCount = null;
  this.fileRoot = null;
  this.filePath = null;
  this.fileSize = null;
  this.fileUrl = null;
  this.fileContent = null;
  this.fileDiscSize = null;
  this.isCurrentDc = null;
};
util.inherits(KalturaFileSync, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFileSyncListResponse = module.exports.KalturaFileSyncListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaFileSyncListResponse, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  nameLike  string    .
 * @param  nameMultiLikeOr  string    .
 * @param  nameMultiLikeAnd  string    .
 * @param  nameEqual  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  partnerPackageEqual  int    .
 * @param  partnerPackageGreaterThanOrEqual  int    .
 * @param  partnerPackageLessThanOrEqual  int    .
 * @param  partnerNameDescriptionWebsiteAdminNameAdminEmailLike  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPartnerBaseFilter = module.exports.KalturaPartnerBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.nameLike = null;
  this.nameMultiLikeOr = null;
  this.nameMultiLikeAnd = null;
  this.nameEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.partnerPackageEqual = null;
  this.partnerPackageGreaterThanOrEqual = null;
  this.partnerPackageLessThanOrEqual = null;
  this.partnerNameDescriptionWebsiteAdminNameAdminEmailLike = null;
};
util.inherits(KalturaPartnerBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPartnerFilter = module.exports.KalturaPartnerFilter = function(){
};
util.inherits(KalturaPartnerFilter, KalturaPartnerBaseFilter);


/**
 * @param  fromDate  int    Date range from
 *  .
 * @param  toDate  int    Date range to
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSystemPartnerUsageFilter = module.exports.KalturaSystemPartnerUsageFilter = function(){
  this.fromDate = null;
  this.toDate = null;
};
util.inherits(KalturaSystemPartnerUsageFilter, KalturaFilter);


/**
 * @param  partnerId  int    Partner ID
 *  .
 * @param  partnerName  string    Partner name
 *  .
 * @param  partnerStatus  int    Partner status
 *  .
 * @param  partnerPackage  int    Partner package
 *  .
 * @param  partnerCreatedAt  int    Partner creation date (Unix timestamp)
 *  .
 * @param  views  int    Number of player loads in the specific date range
 *  .
 * @param  plays  int    Number of plays in the specific date range
 *  .
 * @param  entriesCount  int    Number of new entries created during specific date range
 *  .
 * @param  totalEntriesCount  int    Total number of entries
 *  .
 * @param  videoEntriesCount  int    Number of new video entries created during specific date range
 *  .
 * @param  imageEntriesCount  int    Number of new image entries created during specific date range
 *  .
 * @param  audioEntriesCount  int    Number of new audio entries created during specific date range
 *  .
 * @param  mixEntriesCount  int    Number of new mix entries created during specific date range
 *  .
 * @param  bandwidth  float    The total bandwidth usage during the given date range (in MB)
 *  .
 * @param  totalStorage  float    The total storage consumption (in MB)
 *  .
 * @param  storage  float    The change in storage consumption (new uploads) during the given date range (in MB)
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSystemPartnerUsageItem = module.exports.KalturaSystemPartnerUsageItem = function(){
  this.partnerId = null;
  this.partnerName = null;
  this.partnerStatus = null;
  this.partnerPackage = null;
  this.partnerCreatedAt = null;
  this.views = null;
  this.plays = null;
  this.entriesCount = null;
  this.totalEntriesCount = null;
  this.videoEntriesCount = null;
  this.imageEntriesCount = null;
  this.audioEntriesCount = null;
  this.mixEntriesCount = null;
  this.bandwidth = null;
  this.totalStorage = null;
  this.storage = null;
};
util.inherits(KalturaSystemPartnerUsageItem, kcb.KalturaObjectBase);


/**
 * @param  objects  array    .
 * @param  totalCount  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSystemPartnerUsageListResponse = module.exports.KalturaSystemPartnerUsageListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaSystemPartnerUsageListResponse, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPartnerListResponse = module.exports.KalturaPartnerListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaPartnerListResponse, kcb.KalturaObjectBase);


/**
 * @param  type  string    .
 * @param  max  float    .
 * @param  overagePrice  float    .
 * @param  overageUnit  float    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSystemPartnerLimit = module.exports.KalturaSystemPartnerLimit = function(){
  this.type = null;
  this.max = null;
  this.overagePrice = null;
  this.overageUnit = null;
};
util.inherits(KalturaSystemPartnerLimit, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  partnerName  string    .
 * @param  description  string    .
 * @param  adminName  string    .
 * @param  adminEmail  string    .
 * @param  host  string    .
 * @param  cdnHost  string    .
 * @param  partnerPackage  int    .
 * @param  monitorUsage  int    .
 * @param  moderateContent  bool    .
 * @param  rtmpUrl  string    .
 * @param  storageDeleteFromKaltura  bool    .
 * @param  storageServePriority  int    .
 * @param  kmcVersion  int    .
 * @param  restrictThumbnailByKs  int    .
 * @param  defThumbOffset  int    .
 * @param  defThumbDensity  int    .
 * @param  userSessionRoleId  int    .
 * @param  adminSessionRoleId  int    .
 * @param  alwaysAllowedPermissionNames  string    .
 * @param  importRemoteSourceForConvert  bool    .
 * @param  permissions  array    .
 * @param  notificationsConfig  string    .
 * @param  allowMultiNotification  bool    .
 * @param  loginBlockPeriod  int    .
 * @param  numPrevPassToKeep  int    .
 * @param  passReplaceFreq  int    .
 * @param  isFirstLogin  bool    .
 * @param  partnerGroupType  int    .
 * @param  partnerParentId  int    .
 * @param  limits  array    .
 * @param  streamerType  string    http/rtmp/hdnetwork.
 * @param  mediaProtocol  string    http/https, rtmp/rtmpe.
 * @param  extendedFreeTrailExpiryReason  string    .
 * @param  extendedFreeTrailExpiryDate  int    Unix timestamp (In seconds)
 *  .
 * @param  extendedFreeTrail  int    .
 * @param  crmId  string    .
 * @param  crmLink  string    .
 * @param  verticalClasiffication  string    .
 * @param  partnerPackageClassOfService  string    .
 * @param  enableBulkUploadNotificationsEmails  bool    .
 * @param  deliveryRestrictions  string    .
 * @param  bulkUploadNotificationsEmail  string    .
 * @param  internalUse  bool    .
 * @param  autoModerateEntryFilter  KalturaBaseEntryFilter    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSystemPartnerConfiguration = module.exports.KalturaSystemPartnerConfiguration = function(){
  this.id = null;
  this.partnerName = null;
  this.description = null;
  this.adminName = null;
  this.adminEmail = null;
  this.host = null;
  this.cdnHost = null;
  this.partnerPackage = null;
  this.monitorUsage = null;
  this.moderateContent = null;
  this.rtmpUrl = null;
  this.storageDeleteFromKaltura = null;
  this.storageServePriority = null;
  this.kmcVersion = null;
  this.restrictThumbnailByKs = null;
  this.defThumbOffset = null;
  this.defThumbDensity = null;
  this.userSessionRoleId = null;
  this.adminSessionRoleId = null;
  this.alwaysAllowedPermissionNames = null;
  this.importRemoteSourceForConvert = null;
  this.permissions = null;
  this.notificationsConfig = null;
  this.allowMultiNotification = null;
  this.loginBlockPeriod = null;
  this.numPrevPassToKeep = null;
  this.passReplaceFreq = null;
  this.isFirstLogin = null;
  this.partnerGroupType = null;
  this.partnerParentId = null;
  this.limits = null;
  this.streamerType = null;
  this.mediaProtocol = null;
  this.extendedFreeTrailExpiryReason = null;
  this.extendedFreeTrailExpiryDate = null;
  this.extendedFreeTrail = null;
  this.crmId = null;
  this.crmLink = null;
  this.verticalClasiffication = null;
  this.partnerPackageClassOfService = null;
  this.enableBulkUploadNotificationsEmails = null;
  this.deliveryRestrictions = null;
  this.bulkUploadNotificationsEmail = null;
  this.internalUse = null;
  this.autoModerateEntryFilter = null;
};
util.inherits(KalturaSystemPartnerConfiguration, kcb.KalturaObjectBase);


/**
 * @param  id  int    .
 * @param  name  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSystemPartnerPackage = module.exports.KalturaSystemPartnerPackage = function(){
  this.id = null;
  this.name = null;
};
util.inherits(KalturaSystemPartnerPackage, kcb.KalturaObjectBase);


/**
 * @param  loginEmailEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserLoginDataBaseFilter = module.exports.KalturaUserLoginDataBaseFilter = function(){
  this.loginEmailEqual = null;
};
util.inherits(KalturaUserLoginDataBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserLoginDataFilter = module.exports.KalturaUserLoginDataFilter = function(){
};
util.inherits(KalturaUserLoginDataFilter, KalturaUserLoginDataBaseFilter);


/**
 * @param  id  string    .
 * @param  loginEmail  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserLoginData = module.exports.KalturaUserLoginData = function(){
  this.id = null;
  this.loginEmail = null;
};
util.inherits(KalturaUserLoginData, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserLoginDataListResponse = module.exports.KalturaUserLoginDataListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaUserLoginDataListResponse, kcb.KalturaObjectBase);


/**
 * @param  flavorParamsIdEqual  int    .
 * @param  flavorParamsVersionEqual  string    .
 * @param  flavorAssetIdEqual  string    .
 * @param  flavorAssetVersionEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorParamsOutputBaseFilter = module.exports.KalturaFlavorParamsOutputBaseFilter = function(){
  this.flavorParamsIdEqual = null;
  this.flavorParamsVersionEqual = null;
  this.flavorAssetIdEqual = null;
  this.flavorAssetVersionEqual = null;
};
util.inherits(KalturaFlavorParamsOutputBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorParamsOutputFilter = module.exports.KalturaFlavorParamsOutputFilter = function(){
};
util.inherits(KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputBaseFilter);


/**
 * @param  flavorParamsId  int    .
 * @param  commandLinesStr  string    .
 * @param  flavorParamsVersion  string    .
 * @param  flavorAssetId  string    .
 * @param  flavorAssetVersion  string    .
 * @param  readyBehavior  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorParamsOutput = module.exports.KalturaFlavorParamsOutput = function(){
  this.flavorParamsId = null;
  this.commandLinesStr = null;
  this.flavorParamsVersion = null;
  this.flavorAssetId = null;
  this.flavorAssetVersion = null;
  this.readyBehavior = null;
};
util.inherits(KalturaFlavorParamsOutput, KalturaFlavorParams);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorParamsOutputListResponse = module.exports.KalturaFlavorParamsOutputListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaFlavorParamsOutputListResponse, kcb.KalturaObjectBase);


/**
 * @param  thumbParamsIdEqual  int    .
 * @param  thumbParamsVersionEqual  string    .
 * @param  thumbAssetIdEqual  string    .
 * @param  thumbAssetVersionEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbParamsOutputBaseFilter = module.exports.KalturaThumbParamsOutputBaseFilter = function(){
  this.thumbParamsIdEqual = null;
  this.thumbParamsVersionEqual = null;
  this.thumbAssetIdEqual = null;
  this.thumbAssetVersionEqual = null;
};
util.inherits(KalturaThumbParamsOutputBaseFilter, KalturaThumbParamsFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbParamsOutputFilter = module.exports.KalturaThumbParamsOutputFilter = function(){
};
util.inherits(KalturaThumbParamsOutputFilter, KalturaThumbParamsOutputBaseFilter);


/**
 * @param  thumbParamsId  int    .
 * @param  thumbParamsVersion  string    .
 * @param  thumbAssetId  string    .
 * @param  thumbAssetVersion  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbParamsOutput = module.exports.KalturaThumbParamsOutput = function(){
  this.thumbParamsId = null;
  this.thumbParamsVersion = null;
  this.thumbAssetId = null;
  this.thumbAssetVersion = null;
};
util.inherits(KalturaThumbParamsOutput, KalturaThumbParams);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbParamsOutputListResponse = module.exports.KalturaThumbParamsOutputListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaThumbParamsOutputListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int    .
 * @param  trackEventType  int    .
 * @param  psVersion  string    .
 * @param  context  string    .
 * @param  partnerId  int    .
 * @param  entryId  string    .
 * @param  hostName  string    .
 * @param  userId  string    .
 * @param  changedProperties  string    .
 * @param  paramStr1  string    .
 * @param  paramStr2  string    .
 * @param  paramStr3  string    .
 * @param  ks  string    .
 * @param  description  string    .
 * @param  createdAt  int    .
 * @param  updatedAt  int    .
 * @param  userIp  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTrackEntry = module.exports.KalturaTrackEntry = function(){
  this.id = null;
  this.trackEventType = null;
  this.psVersion = null;
  this.context = null;
  this.partnerId = null;
  this.entryId = null;
  this.hostName = null;
  this.userId = null;
  this.changedProperties = null;
  this.paramStr1 = null;
  this.paramStr2 = null;
  this.paramStr3 = null;
  this.ks = null;
  this.description = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.userIp = null;
};
util.inherits(KalturaTrackEntry, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTrackEntryListResponse = module.exports.KalturaTrackEntryListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaTrackEntryListResponse, kcb.KalturaObjectBase);


/**
 * @param  isPublic  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUiConfAdmin = module.exports.KalturaUiConfAdmin = function(){
  this.isPublic = null;
};
util.inherits(KalturaUiConfAdmin, KalturaUiConf);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUiConfAdminListResponse = module.exports.KalturaUiConfAdminListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaUiConfAdminListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int    Report id
 *   (readOnly).
 * @param  partnerId  int    Partner id associated with the report
 *  .
 * @param  name  string    Report name
 *  .
 * @param  systemName  string    Used to identify system reports in a friendly way
 *  .
 * @param  description  string    Report description
 *  .
 * @param  query  string    Report query
 *  .
 * @param  createdAt  int    Creation date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  updatedAt  int    Last update date as Unix timestamp (In seconds)
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaReport = module.exports.KalturaReport = function(){
  this.id = null;
  this.partnerId = null;
  this.name = null;
  this.systemName = null;
  this.description = null;
  this.query = null;
  this.createdAt = null;
  this.updatedAt = null;
};
util.inherits(KalturaReport, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaReportBaseFilter = module.exports.KalturaReportBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
};
util.inherits(KalturaReportBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaReportFilter = module.exports.KalturaReportFilter = function(){
};
util.inherits(KalturaReportFilter, KalturaReportBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaReportListResponse = module.exports.KalturaReportListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaReportListResponse, kcb.KalturaObjectBase);


/**
 * @param  partner_id  int    .
 * @param  valid_until  int    .
 * @param  partner_pattern  string    .
 * @param  type  int    .
 * @param  error  string    .
 * @param  rand  int    .
 * @param  user  string    .
 * @param  privileges  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaInternalToolsSession = module.exports.KalturaInternalToolsSession = function(){
  this.partner_id = null;
  this.valid_until = null;
  this.partner_pattern = null;
  this.type = null;
  this.error = null;
  this.rand = null;
  this.user = null;
  this.privileges = null;
};
util.inherits(KalturaInternalToolsSession, kcb.KalturaObjectBase);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAuditTrailInfo = module.exports.KalturaAuditTrailInfo = function(){
};
util.inherits(KalturaAuditTrailInfo, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  createdAt  int     (readOnly).
 * @param  parsedAt  int    Indicates when the data was parsed (readOnly).
 * @param  status  int     (readOnly).
 * @param  auditObjectType  string    .
 * @param  objectId  string    .
 * @param  relatedObjectId  string    .
 * @param  relatedObjectType  string    .
 * @param  entryId  string    .
 * @param  masterPartnerId  int     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  requestId  string     (readOnly).
 * @param  userId  string    .
 * @param  action  string    .
 * @param  data  KalturaAuditTrailInfo    .
 * @param  ks  string     (readOnly).
 * @param  context  int     (readOnly).
 * @param  entryPoint  string    The API service and action that called and caused this audit (readOnly).
 * @param  serverName  string     (readOnly).
 * @param  ipAddress  string     (readOnly).
 * @param  userAgent  string     (readOnly).
 * @param  clientTag  string    .
 * @param  description  string    .
 * @param  errorDescription  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAuditTrail = module.exports.KalturaAuditTrail = function(){
  this.id = null;
  this.createdAt = null;
  this.parsedAt = null;
  this.status = null;
  this.auditObjectType = null;
  this.objectId = null;
  this.relatedObjectId = null;
  this.relatedObjectType = null;
  this.entryId = null;
  this.masterPartnerId = null;
  this.partnerId = null;
  this.requestId = null;
  this.userId = null;
  this.action = null;
  this.data = null;
  this.ks = null;
  this.context = null;
  this.entryPoint = null;
  this.serverName = null;
  this.ipAddress = null;
  this.userAgent = null;
  this.clientTag = null;
  this.description = null;
  this.errorDescription = null;
};
util.inherits(KalturaAuditTrail, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  parsedAtGreaterThanOrEqual  int    .
 * @param  parsedAtLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  auditObjectTypeEqual  string    .
 * @param  auditObjectTypeIn  string    .
 * @param  objectIdEqual  string    .
 * @param  objectIdIn  string    .
 * @param  relatedObjectIdEqual  string    .
 * @param  relatedObjectIdIn  string    .
 * @param  relatedObjectTypeEqual  string    .
 * @param  relatedObjectTypeIn  string    .
 * @param  entryIdEqual  string    .
 * @param  entryIdIn  string    .
 * @param  masterPartnerIdEqual  int    .
 * @param  masterPartnerIdIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  requestIdEqual  string    .
 * @param  requestIdIn  string    .
 * @param  userIdEqual  string    .
 * @param  userIdIn  string    .
 * @param  actionEqual  string    .
 * @param  actionIn  string    .
 * @param  ksEqual  string    .
 * @param  contextEqual  int    .
 * @param  contextIn  string    .
 * @param  entryPointEqual  string    .
 * @param  entryPointIn  string    .
 * @param  serverNameEqual  string    .
 * @param  serverNameIn  string    .
 * @param  ipAddressEqual  string    .
 * @param  ipAddressIn  string    .
 * @param  clientTagEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAuditTrailBaseFilter = module.exports.KalturaAuditTrailBaseFilter = function(){
  this.idEqual = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.parsedAtGreaterThanOrEqual = null;
  this.parsedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.auditObjectTypeEqual = null;
  this.auditObjectTypeIn = null;
  this.objectIdEqual = null;
  this.objectIdIn = null;
  this.relatedObjectIdEqual = null;
  this.relatedObjectIdIn = null;
  this.relatedObjectTypeEqual = null;
  this.relatedObjectTypeIn = null;
  this.entryIdEqual = null;
  this.entryIdIn = null;
  this.masterPartnerIdEqual = null;
  this.masterPartnerIdIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.requestIdEqual = null;
  this.requestIdIn = null;
  this.userIdEqual = null;
  this.userIdIn = null;
  this.actionEqual = null;
  this.actionIn = null;
  this.ksEqual = null;
  this.contextEqual = null;
  this.contextIn = null;
  this.entryPointEqual = null;
  this.entryPointIn = null;
  this.serverNameEqual = null;
  this.serverNameIn = null;
  this.ipAddressEqual = null;
  this.ipAddressIn = null;
  this.clientTagEqual = null;
};
util.inherits(KalturaAuditTrailBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAuditTrailFilter = module.exports.KalturaAuditTrailFilter = function(){
};
util.inherits(KalturaAuditTrailFilter, KalturaAuditTrailBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAuditTrailListResponse = module.exports.KalturaAuditTrailListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaAuditTrailListResponse, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  nameEqual  string    .
 * @param  nameLike  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  engineTypeEqual  string    .
 * @param  engineTypeIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVirusScanProfileBaseFilter = module.exports.KalturaVirusScanProfileBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.nameEqual = null;
  this.nameLike = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.engineTypeEqual = null;
  this.engineTypeIn = null;
};
util.inherits(KalturaVirusScanProfileBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVirusScanProfileFilter = module.exports.KalturaVirusScanProfileFilter = function(){
};
util.inherits(KalturaVirusScanProfileFilter, KalturaVirusScanProfileBaseFilter);


/**
 * @param  id  int     (readOnly).
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  name  string    .
 * @param  status  int    .
 * @param  engineType  string    .
 * @param  entryFilter  KalturaBaseEntryFilter    .
 * @param  actionIfInfected  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVirusScanProfile = module.exports.KalturaVirusScanProfile = function(){
  this.id = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.partnerId = null;
  this.name = null;
  this.status = null;
  this.engineType = null;
  this.entryFilter = null;
  this.actionIfInfected = null;
};
util.inherits(KalturaVirusScanProfile, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVirusScanProfileListResponse = module.exports.KalturaVirusScanProfileListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaVirusScanProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  width  int    .
 * @param  height  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionThumbDimensions = module.exports.KalturaDistributionThumbDimensions = function(){
  this.width = null;
  this.height = null;
};
util.inherits(KalturaDistributionThumbDimensions, kcb.KalturaObjectBase);


/**
 * @param  id  int    Auto generated unique id
 *   (readOnly).
 * @param  createdAt  int    Profile creation date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  updatedAt  int    Profile last update date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  providerType  string     (insertOnly).
 * @param  name  string    .
 * @param  status  int    .
 * @param  submitEnabled  int    .
 * @param  updateEnabled  int    .
 * @param  deleteEnabled  int    .
 * @param  reportEnabled  int    .
 * @param  autoCreateFlavors  string    Comma separated flavor params ids that should be auto converted.
 * @param  autoCreateThumb  string    Comma separated thumbnail params ids that should be auto generated.
 * @param  optionalFlavorParamsIds  string    Comma separated flavor params ids that should be submitted if ready.
 * @param  requiredFlavorParamsIds  string    Comma separated flavor params ids that required to be readt before submission.
 * @param  optionalThumbDimensions  array    Thumbnail dimensions that should be submitted if ready.
 * @param  requiredThumbDimensions  array    Thumbnail dimensions that required to be readt before submission.
 * @param  sunriseDefaultOffset  int    If entry distribution sunrise not specified that will be the default since entry creation time, in seconds.
 * @param  sunsetDefaultOffset  int    If entry distribution sunset not specified that will be the default since entry creation time, in seconds.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionProfile = module.exports.KalturaDistributionProfile = function(){
  this.id = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.partnerId = null;
  this.providerType = null;
  this.name = null;
  this.status = null;
  this.submitEnabled = null;
  this.updateEnabled = null;
  this.deleteEnabled = null;
  this.reportEnabled = null;
  this.autoCreateFlavors = null;
  this.autoCreateThumb = null;
  this.optionalFlavorParamsIds = null;
  this.requiredFlavorParamsIds = null;
  this.optionalThumbDimensions = null;
  this.requiredThumbDimensions = null;
  this.sunriseDefaultOffset = null;
  this.sunsetDefaultOffset = null;
};
util.inherits(KalturaDistributionProfile, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionProfileBaseFilter = module.exports.KalturaDistributionProfileBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
util.inherits(KalturaDistributionProfileBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionProfileFilter = module.exports.KalturaDistributionProfileFilter = function(){
};
util.inherits(KalturaDistributionProfileFilter, KalturaDistributionProfileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionProfileListResponse = module.exports.KalturaDistributionProfileListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaDistributionProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  action  int    .
 * @param  errorType  int    .
 * @param  description  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionValidationError = module.exports.KalturaDistributionValidationError = function(){
  this.action = null;
  this.errorType = null;
  this.description = null;
};
util.inherits(KalturaDistributionValidationError, kcb.KalturaObjectBase);


/**
 * @param  id  int    Auto generated unique id
 *   (readOnly).
 * @param  createdAt  int    Entry distribution creation date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  updatedAt  int    Entry distribution last update date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  submittedAt  int    Entry distribution submission date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  entryId  string     (insertOnly).
 * @param  partnerId  int     (readOnly).
 * @param  distributionProfileId  int     (insertOnly).
 * @param  status  int     (readOnly).
 * @param  sunStatus  int     (readOnly).
 * @param  dirtyStatus  int     (readOnly).
 * @param  thumbAssetIds  string    Comma separated thumbnail asset ids.
 * @param  flavorAssetIds  string    Comma separated flavor asset ids.
 * @param  sunrise  int    Entry distribution publish time as Unix timestamp (In seconds)
 *  .
 * @param  sunset  int    Entry distribution un-publish time as Unix timestamp (In seconds)
 *  .
 * @param  remoteId  string    The id as returned from the distributed destination (readOnly).
 * @param  plays  int    The plays as retrieved from the remote destination reports (readOnly).
 * @param  views  int    The views as retrieved from the remote destination reports (readOnly).
 * @param  validationErrors  array     (readOnly).
 * @param  errorType  int     (readOnly).
 * @param  errorNumber  int     (readOnly).
 * @param  errorDescription  string     (readOnly).
 * @param  hasSubmitResultsLog  int     (readOnly).
 * @param  hasSubmitSentDataLog  int     (readOnly).
 * @param  hasUpdateResultsLog  int     (readOnly).
 * @param  hasUpdateSentDataLog  int     (readOnly).
 * @param  hasDeleteResultsLog  int     (readOnly).
 * @param  hasDeleteSentDataLog  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaEntryDistribution = module.exports.KalturaEntryDistribution = function(){
  this.id = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.submittedAt = null;
  this.entryId = null;
  this.partnerId = null;
  this.distributionProfileId = null;
  this.status = null;
  this.sunStatus = null;
  this.dirtyStatus = null;
  this.thumbAssetIds = null;
  this.flavorAssetIds = null;
  this.sunrise = null;
  this.sunset = null;
  this.remoteId = null;
  this.plays = null;
  this.views = null;
  this.validationErrors = null;
  this.errorType = null;
  this.errorNumber = null;
  this.errorDescription = null;
  this.hasSubmitResultsLog = null;
  this.hasSubmitSentDataLog = null;
  this.hasUpdateResultsLog = null;
  this.hasUpdateSentDataLog = null;
  this.hasDeleteResultsLog = null;
  this.hasDeleteSentDataLog = null;
};
util.inherits(KalturaEntryDistribution, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  submittedAtGreaterThanOrEqual  int    .
 * @param  submittedAtLessThanOrEqual  int    .
 * @param  entryIdEqual  string    .
 * @param  entryIdIn  string    .
 * @param  distributionProfileIdEqual  int    .
 * @param  distributionProfileIdIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  dirtyStatusEqual  int    .
 * @param  dirtyStatusIn  string    .
 * @param  sunriseGreaterThanOrEqual  int    .
 * @param  sunriseLessThanOrEqual  int    .
 * @param  sunsetGreaterThanOrEqual  int    .
 * @param  sunsetLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaEntryDistributionBaseFilter = module.exports.KalturaEntryDistributionBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.submittedAtGreaterThanOrEqual = null;
  this.submittedAtLessThanOrEqual = null;
  this.entryIdEqual = null;
  this.entryIdIn = null;
  this.distributionProfileIdEqual = null;
  this.distributionProfileIdIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.dirtyStatusEqual = null;
  this.dirtyStatusIn = null;
  this.sunriseGreaterThanOrEqual = null;
  this.sunriseLessThanOrEqual = null;
  this.sunsetGreaterThanOrEqual = null;
  this.sunsetLessThanOrEqual = null;
};
util.inherits(KalturaEntryDistributionBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaEntryDistributionFilter = module.exports.KalturaEntryDistributionFilter = function(){
};
util.inherits(KalturaEntryDistributionFilter, KalturaEntryDistributionBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaEntryDistributionListResponse = module.exports.KalturaEntryDistributionListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaEntryDistributionListResponse, kcb.KalturaObjectBase);


/**
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionProviderBaseFilter = module.exports.KalturaDistributionProviderBaseFilter = function(){
  this.typeEqual = null;
  this.typeIn = null;
};
util.inherits(KalturaDistributionProviderBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionProviderFilter = module.exports.KalturaDistributionProviderFilter = function(){
};
util.inherits(KalturaDistributionProviderFilter, KalturaDistributionProviderBaseFilter);


/**
 * @param  type  string     (readOnly).
 * @param  name  string    .
 * @param  scheduleUpdateEnabled  bool    .
 * @param  availabilityUpdateEnabled  bool    .
 * @param  deleteInsteadUpdate  bool    .
 * @param  intervalBeforeSunrise  int    .
 * @param  intervalBeforeSunset  int    .
 * @param  updateRequiredEntryFields  string    .
 * @param  updateRequiredMetadataXPaths  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionProvider = module.exports.KalturaDistributionProvider = function(){
  this.type = null;
  this.name = null;
  this.scheduleUpdateEnabled = null;
  this.availabilityUpdateEnabled = null;
  this.deleteInsteadUpdate = null;
  this.intervalBeforeSunrise = null;
  this.intervalBeforeSunset = null;
  this.updateRequiredEntryFields = null;
  this.updateRequiredMetadataXPaths = null;
};
util.inherits(KalturaDistributionProvider, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionProviderListResponse = module.exports.KalturaDistributionProviderListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaDistributionProviderListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int    Auto generated
 *   (readOnly).
 * @param  createdAt  int    Generic distribution provider creation date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  updatedAt  int    Generic distribution provider last update date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  isDefault  bool    .
 * @param  status  int     (readOnly).
 * @param  optionalFlavorParamsIds  string    .
 * @param  requiredFlavorParamsIds  string    .
 * @param  optionalThumbDimensions  array    .
 * @param  requiredThumbDimensions  array    .
 * @param  editableFields  string    .
 * @param  mandatoryFields  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProvider = module.exports.KalturaGenericDistributionProvider = function(){
  this.id = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.partnerId = null;
  this.isDefault = null;
  this.status = null;
  this.optionalFlavorParamsIds = null;
  this.requiredFlavorParamsIds = null;
  this.optionalThumbDimensions = null;
  this.requiredThumbDimensions = null;
  this.editableFields = null;
  this.mandatoryFields = null;
};
util.inherits(KalturaGenericDistributionProvider, KalturaDistributionProvider);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  isDefaultEqual  bool    .
 * @param  isDefaultIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProviderBaseFilter = module.exports.KalturaGenericDistributionProviderBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.isDefaultEqual = null;
  this.isDefaultIn = null;
  this.statusEqual = null;
  this.statusIn = null;
};
util.inherits(KalturaGenericDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProviderFilter = module.exports.KalturaGenericDistributionProviderFilter = function(){
};
util.inherits(KalturaGenericDistributionProviderFilter, KalturaGenericDistributionProviderBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProviderListResponse = module.exports.KalturaGenericDistributionProviderListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaGenericDistributionProviderListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int    Auto generated
 *   (readOnly).
 * @param  createdAt  int    Generic distribution provider action creation date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  updatedAt  int    Generic distribution provider action last update date as Unix timestamp (In seconds)
 *   (readOnly).
 * @param  genericDistributionProviderId  int     (insertOnly).
 * @param  action  int     (insertOnly).
 * @param  status  int     (readOnly).
 * @param  resultsParser  int    .
 * @param  protocol  int    .
 * @param  serverAddress  string    .
 * @param  remotePath  string    .
 * @param  remoteUsername  string    .
 * @param  remotePassword  string    .
 * @param  editableFields  string    .
 * @param  mandatoryFields  string    .
 * @param  mrssTransformer  string     (readOnly).
 * @param  mrssValidator  string     (readOnly).
 * @param  resultsTransformer  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProviderAction = module.exports.KalturaGenericDistributionProviderAction = function(){
  this.id = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.genericDistributionProviderId = null;
  this.action = null;
  this.status = null;
  this.resultsParser = null;
  this.protocol = null;
  this.serverAddress = null;
  this.remotePath = null;
  this.remoteUsername = null;
  this.remotePassword = null;
  this.editableFields = null;
  this.mandatoryFields = null;
  this.mrssTransformer = null;
  this.mrssValidator = null;
  this.resultsTransformer = null;
};
util.inherits(KalturaGenericDistributionProviderAction, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  genericDistributionProviderIdEqual  int    .
 * @param  genericDistributionProviderIdIn  string    .
 * @param  actionEqual  int    .
 * @param  actionIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProviderActionBaseFilter = module.exports.KalturaGenericDistributionProviderActionBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.genericDistributionProviderIdEqual = null;
  this.genericDistributionProviderIdIn = null;
  this.actionEqual = null;
  this.actionIn = null;
};
util.inherits(KalturaGenericDistributionProviderActionBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProviderActionFilter = module.exports.KalturaGenericDistributionProviderActionFilter = function(){
};
util.inherits(KalturaGenericDistributionProviderActionFilter, KalturaGenericDistributionProviderActionBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProviderActionListResponse = module.exports.KalturaGenericDistributionProviderActionListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaGenericDistributionProviderActionListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  string     (readOnly).
 * @param  cuePointType  string     (readOnly).
 * @param  status  int     (readOnly).
 * @param  entryId  string     (insertOnly).
 * @param  partnerId  int     (readOnly).
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  tags  string    .
 * @param  startTime  int    Start tim ein milliseconds.
 * @param  userId  string     (readOnly).
 * @param  partnerData  string    .
 * @param  partnerSortValue  int    .
 * @param  forceStop  int    .
 * @param  thumbOffset  int    .
 * @param  systemName  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCuePoint = module.exports.KalturaCuePoint = function(){
  this.id = null;
  this.cuePointType = null;
  this.status = null;
  this.entryId = null;
  this.partnerId = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.tags = null;
  this.startTime = null;
  this.userId = null;
  this.partnerData = null;
  this.partnerSortValue = null;
  this.forceStop = null;
  this.thumbOffset = null;
  this.systemName = null;
};
util.inherits(KalturaCuePoint, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCuePointListResponse = module.exports.KalturaCuePointListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaCuePointListResponse, kcb.KalturaObjectBase);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  cuePointTypeEqual  string    .
 * @param  cuePointTypeIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  entryIdEqual  string    .
 * @param  entryIdIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  tagsLike  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  startTimeGreaterThanOrEqual  int    .
 * @param  startTimeLessThanOrEqual  int    .
 * @param  userIdEqual  string    .
 * @param  userIdIn  string    .
 * @param  partnerSortValueEqual  int    .
 * @param  partnerSortValueIn  string    .
 * @param  partnerSortValueGreaterThanOrEqual  int    .
 * @param  partnerSortValueLessThanOrEqual  int    .
 * @param  forceStopEqual  int    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCuePointBaseFilter = module.exports.KalturaCuePointBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.cuePointTypeEqual = null;
  this.cuePointTypeIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.entryIdEqual = null;
  this.entryIdIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.startTimeGreaterThanOrEqual = null;
  this.startTimeLessThanOrEqual = null;
  this.userIdEqual = null;
  this.userIdIn = null;
  this.partnerSortValueEqual = null;
  this.partnerSortValueIn = null;
  this.partnerSortValueGreaterThanOrEqual = null;
  this.partnerSortValueLessThanOrEqual = null;
  this.forceStopEqual = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
};
util.inherits(KalturaCuePointBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCuePointFilter = module.exports.KalturaCuePointFilter = function(){
};
util.inherits(KalturaCuePointFilter, KalturaCuePointBaseFilter);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 * @param  expiresAtGreaterThanOrEqual  int    .
 * @param  expiresAtLessThanOrEqual  int    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  userIdEqual  string    .
 * @param  userIdIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaShortLinkBaseFilter = module.exports.KalturaShortLinkBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
  this.expiresAtGreaterThanOrEqual = null;
  this.expiresAtLessThanOrEqual = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.userIdEqual = null;
  this.userIdIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.statusEqual = null;
  this.statusIn = null;
};
util.inherits(KalturaShortLinkBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaShortLinkFilter = module.exports.KalturaShortLinkFilter = function(){
};
util.inherits(KalturaShortLinkFilter, KalturaShortLinkBaseFilter);


/**
 * @param  id  int     (readOnly).
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 * @param  expiresAt  int    .
 * @param  partnerId  int     (readOnly).
 * @param  userId  string    .
 * @param  name  string    .
 * @param  systemName  string    .
 * @param  fullUrl  string    .
 * @param  status  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaShortLink = module.exports.KalturaShortLink = function(){
  this.id = null;
  this.createdAt = null;
  this.updatedAt = null;
  this.expiresAt = null;
  this.partnerId = null;
  this.userId = null;
  this.name = null;
  this.systemName = null;
  this.fullUrl = null;
  this.status = null;
};
util.inherits(KalturaShortLink, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaShortLinkListResponse = module.exports.KalturaShortLinkListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaShortLinkListResponse, kcb.KalturaObjectBase);


/**
 * @param  handlerType  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderFileHandlerConfig = module.exports.KalturaDropFolderFileHandlerConfig = function(){
  this.handlerType = null;
};
util.inherits(KalturaDropFolderFileHandlerConfig, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  partnerId  int     (insertOnly).
 * @param  name  string    .
 * @param  description  string    .
 * @param  type  string    .
 * @param  status  int    .
 * @param  conversionProfileId  int    .
 * @param  dc  int    .
 * @param  path  string    .
 * @param  fileSizeCheckInterval  int    The ammount of time, in seconds, that should pass so that a file with no change in size we'll be treated as "finished uploading to folder".
 * @param  fileDeletePolicy  int    .
 * @param  autoFileDeleteDays  int    .
 * @param  fileHandlerType  string    .
 * @param  fileNamePatterns  string    .
 * @param  fileHandlerConfig  KalturaDropFolderFileHandlerConfig    .
 * @param  tags  string    .
 * @param  ignoreFileNamePatterns  string    .
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolder = module.exports.KalturaDropFolder = function(){
  this.id = null;
  this.partnerId = null;
  this.name = null;
  this.description = null;
  this.type = null;
  this.status = null;
  this.conversionProfileId = null;
  this.dc = null;
  this.path = null;
  this.fileSizeCheckInterval = null;
  this.fileDeletePolicy = null;
  this.autoFileDeleteDays = null;
  this.fileHandlerType = null;
  this.fileNamePatterns = null;
  this.fileHandlerConfig = null;
  this.tags = null;
  this.ignoreFileNamePatterns = null;
  this.createdAt = null;
  this.updatedAt = null;
};
util.inherits(KalturaDropFolder, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  nameLike  string    .
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  conversionProfileIdEqual  int    .
 * @param  conversionProfileIdIn  string    .
 * @param  dcEqual  int    .
 * @param  dcIn  string    .
 * @param  pathLike  string    .
 * @param  fileHandlerTypeEqual  string    .
 * @param  fileHandlerTypeIn  string    .
 * @param  fileNamePatternsLike  string    .
 * @param  fileNamePatternsMultiLikeOr  string    .
 * @param  fileNamePatternsMultiLikeAnd  string    .
 * @param  tagsLike  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderBaseFilter = module.exports.KalturaDropFolderBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.nameLike = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.conversionProfileIdEqual = null;
  this.conversionProfileIdIn = null;
  this.dcEqual = null;
  this.dcIn = null;
  this.pathLike = null;
  this.fileHandlerTypeEqual = null;
  this.fileHandlerTypeIn = null;
  this.fileNamePatternsLike = null;
  this.fileNamePatternsMultiLikeOr = null;
  this.fileNamePatternsMultiLikeAnd = null;
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
util.inherits(KalturaDropFolderBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderFilter = module.exports.KalturaDropFolderFilter = function(){
};
util.inherits(KalturaDropFolderFilter, KalturaDropFolderBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderListResponse = module.exports.KalturaDropFolderListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaDropFolderListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  dropFolderId  int     (insertOnly).
 * @param  fileName  string     (insertOnly).
 * @param  fileSize  int    .
 * @param  fileSizeLastSetAt  int     (readOnly).
 * @param  status  int     (readOnly).
 * @param  parsedSlug  string    .
 * @param  parsedFlavor  string    .
 * @param  errorCode  string    .
 * @param  errorDescription  string    .
 * @param  lastModificationTime  string    .
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderFile = module.exports.KalturaDropFolderFile = function(){
  this.id = null;
  this.partnerId = null;
  this.dropFolderId = null;
  this.fileName = null;
  this.fileSize = null;
  this.fileSizeLastSetAt = null;
  this.status = null;
  this.parsedSlug = null;
  this.parsedFlavor = null;
  this.errorCode = null;
  this.errorDescription = null;
  this.lastModificationTime = null;
  this.createdAt = null;
  this.updatedAt = null;
};
util.inherits(KalturaDropFolderFile, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  dropFolderIdEqual  int    .
 * @param  dropFolderIdIn  string    .
 * @param  fileNameEqual  string    .
 * @param  fileNameIn  string    .
 * @param  fileNameLike  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  parsedSlugEqual  string    .
 * @param  parsedSlugIn  string    .
 * @param  parsedSlugLike  string    .
 * @param  parsedFlavorEqual  string    .
 * @param  parsedFlavorIn  string    .
 * @param  parsedFlavorLike  string    .
 * @param  errorCodeEqual  string    .
 * @param  errorCodeIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  updatedAtGreaterThanOrEqual  int    .
 * @param  updatedAtLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderFileBaseFilter = module.exports.KalturaDropFolderFileBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.dropFolderIdEqual = null;
  this.dropFolderIdIn = null;
  this.fileNameEqual = null;
  this.fileNameIn = null;
  this.fileNameLike = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.parsedSlugEqual = null;
  this.parsedSlugIn = null;
  this.parsedSlugLike = null;
  this.parsedFlavorEqual = null;
  this.parsedFlavorIn = null;
  this.parsedFlavorLike = null;
  this.errorCodeEqual = null;
  this.errorCodeIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.updatedAtGreaterThanOrEqual = null;
  this.updatedAtLessThanOrEqual = null;
};
util.inherits(KalturaDropFolderFileBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderFileFilter = module.exports.KalturaDropFolderFileFilter = function(){
};
util.inherits(KalturaDropFolderFileFilter, KalturaDropFolderFileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderFileListResponse = module.exports.KalturaDropFolderFileListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaDropFolderFileListResponse, kcb.KalturaObjectBase);


/**
 * @param  captionParamsId  int    The Caption Params used to create this Caption Asset
 *   (insertOnly).
 * @param  language  string    The language of the caption asset content
 *  .
 * @param  languageCode  string    The language of the caption asset content
 *   (readOnly).
 * @param  isDefault  int    Is default caption asset of the entry
 *  .
 * @param  label  string    Friendly label
 *  .
 * @param  format  string    The caption format
 *   (insertOnly).
 * @param  status  int    The status of the asset
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionAsset = module.exports.KalturaCaptionAsset = function(){
  this.captionParamsId = null;
  this.language = null;
  this.languageCode = null;
  this.isDefault = null;
  this.label = null;
  this.format = null;
  this.status = null;
};
util.inherits(KalturaCaptionAsset, KalturaAsset);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionAssetListResponse = module.exports.KalturaCaptionAssetListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaCaptionAssetListResponse, kcb.KalturaObjectBase);


/**
 * @param  language  string    The language of the caption content
 *   (insertOnly).
 * @param  isDefault  int    Is default caption asset of the entry
 *  .
 * @param  label  string    Friendly label
 *  .
 * @param  format  string    The caption format
 *   (insertOnly).
 * @param  sourceParamsId  int    Id of the caption params or the flavor params to be used as source for the caption creation.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionParams = module.exports.KalturaCaptionParams = function(){
  this.language = null;
  this.isDefault = null;
  this.label = null;
  this.format = null;
  this.sourceParamsId = null;
};
util.inherits(KalturaCaptionParams, KalturaAssetParams);


/**
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionParamsBaseFilter = module.exports.KalturaCaptionParamsBaseFilter = function(){
  this.formatEqual = null;
  this.formatIn = null;
};
util.inherits(KalturaCaptionParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionParamsFilter = module.exports.KalturaCaptionParamsFilter = function(){
};
util.inherits(KalturaCaptionParamsFilter, KalturaCaptionParamsBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionParamsListResponse = module.exports.KalturaCaptionParamsListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaCaptionParamsListResponse, kcb.KalturaObjectBase);


/**
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionAssetBaseFilter = module.exports.KalturaCaptionAssetBaseFilter = function(){
  this.formatEqual = null;
  this.formatIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
util.inherits(KalturaCaptionAssetBaseFilter, KalturaAssetFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionAssetFilter = module.exports.KalturaCaptionAssetFilter = function(){
};
util.inherits(KalturaCaptionAssetFilter, KalturaCaptionAssetBaseFilter);


/**
 * @param  tagsLike  string    .
 * @param  tagsMultiLikeOr  string    .
 * @param  tagsMultiLikeAnd  string    .
 * @param  contentLike  string    .
 * @param  contentMultiLikeOr  string    .
 * @param  contentMultiLikeAnd  string    .
 * @param  partnerDescriptionLike  string    .
 * @param  partnerDescriptionMultiLikeOr  string    .
 * @param  partnerDescriptionMultiLikeAnd  string    .
 * @param  languageEqual  string    .
 * @param  languageIn  string    .
 * @param  labelEqual  string    .
 * @param  labelIn  string    .
 * @param  startTimeGreaterThanOrEqual  int    .
 * @param  startTimeLessThanOrEqual  int    .
 * @param  endTimeGreaterThanOrEqual  int    .
 * @param  endTimeLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionAssetItemFilter = module.exports.KalturaCaptionAssetItemFilter = function(){
  this.tagsLike = null;
  this.tagsMultiLikeOr = null;
  this.tagsMultiLikeAnd = null;
  this.contentLike = null;
  this.contentMultiLikeOr = null;
  this.contentMultiLikeAnd = null;
  this.partnerDescriptionLike = null;
  this.partnerDescriptionMultiLikeOr = null;
  this.partnerDescriptionMultiLikeAnd = null;
  this.languageEqual = null;
  this.languageIn = null;
  this.labelEqual = null;
  this.labelIn = null;
  this.startTimeGreaterThanOrEqual = null;
  this.startTimeLessThanOrEqual = null;
  this.endTimeGreaterThanOrEqual = null;
  this.endTimeLessThanOrEqual = null;
};
util.inherits(KalturaCaptionAssetItemFilter, KalturaCaptionAssetFilter);


/**
 * @param  asset  KalturaCaptionAsset    The Caption Asset object
 *  .
 * @param  entry  KalturaBaseEntry    The entry object
 *  .
 * @param  startTime  int    .
 * @param  endTime  int    .
 * @param  content  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionAssetItem = module.exports.KalturaCaptionAssetItem = function(){
  this.asset = null;
  this.entry = null;
  this.startTime = null;
  this.endTime = null;
  this.content = null;
};
util.inherits(KalturaCaptionAssetItem, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptionAssetItemListResponse = module.exports.KalturaCaptionAssetItemListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaCaptionAssetItemListResponse, kcb.KalturaObjectBase);


/**
 * @param  filename  string    The filename of the attachment asset content.
 * @param  title  string    Attachment asset title.
 * @param  format  string    The attachment format.
 * @param  status  int    The status of the asset
 *   (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAttachmentAsset = module.exports.KalturaAttachmentAsset = function(){
  this.filename = null;
  this.title = null;
  this.format = null;
  this.status = null;
};
util.inherits(KalturaAttachmentAsset, KalturaAsset);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAttachmentAssetListResponse = module.exports.KalturaAttachmentAssetListResponse = function(){
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaAttachmentAssetListResponse, kcb.KalturaObjectBase);


/**
 * @param  countryRestrictionType  int    Country restriction type (Allow or deny)
 *  .
 * @param  countryList  string    Comma separated list of country codes to allow to deny 
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCountryRestriction = module.exports.KalturaCountryRestriction = function(){
  this.countryRestrictionType = null;
  this.countryList = null;
};
util.inherits(KalturaCountryRestriction, KalturaBaseRestriction);


/**
 * @param  directoryRestrictionType  int    Kaltura directory restriction type
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDirectoryRestriction = module.exports.KalturaDirectoryRestriction = function(){
  this.directoryRestrictionType = null;
};
util.inherits(KalturaDirectoryRestriction, KalturaBaseRestriction);


/**
 * @param  ipAddressRestrictionType  int    Ip address restriction type (Allow or deny)
 *  .
 * @param  ipAddressList  string    Comma separated list of ip address to allow to deny 
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaIpAddressRestriction = module.exports.KalturaIpAddressRestriction = function(){
  this.ipAddressRestrictionType = null;
  this.ipAddressList = null;
};
util.inherits(KalturaIpAddressRestriction, KalturaBaseRestriction);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSessionRestriction = module.exports.KalturaSessionRestriction = function(){
};
util.inherits(KalturaSessionRestriction, KalturaBaseRestriction);


/**
 * @param  previewLength  int    The preview restriction length 
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPreviewRestriction = module.exports.KalturaPreviewRestriction = function(){
  this.previewLength = null;
};
util.inherits(KalturaPreviewRestriction, KalturaSessionRestriction);


/**
 * @param  siteRestrictionType  int    The site restriction type (allow or deny)
 *  .
 * @param  siteList  string    Comma separated list of sites (domains) to allow or deny
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSiteRestriction = module.exports.KalturaSiteRestriction = function(){
  this.siteRestrictionType = null;
  this.siteList = null;
};
util.inherits(KalturaSiteRestriction, KalturaBaseRestriction);


/**
 * @param  userAgentRestrictionType  int    User agent restriction type (Allow or deny)
 *  .
 * @param  userAgentRegexList  string    A comma seperated list of user agent regular expressions
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUserAgentRestriction = module.exports.KalturaUserAgentRestriction = function(){
  this.userAgentRestrictionType = null;
  this.userAgentRegexList = null;
};
util.inherits(KalturaUserAgentRestriction, KalturaBaseRestriction);


/**
 * @param  field  string    .
 * @param  value  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSearchCondition = module.exports.KalturaSearchCondition = function(){
  this.field = null;
  this.value = null;
};
util.inherits(KalturaSearchCondition, KalturaSearchItem);


/**
 * @param  comparison  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSearchComparableCondition = module.exports.KalturaSearchComparableCondition = function(){
  this.comparison = null;
};
util.inherits(KalturaSearchComparableCondition, KalturaSearchCondition);


/**
 * @param  type  int    .
 * @param  items  array    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSearchOperator = module.exports.KalturaSearchOperator = function(){
  this.type = null;
  this.items = null;
};
util.inherits(KalturaSearchOperator, KalturaSearchItem);


/**
 * @param  noDistributionProfiles  bool    .
 * @param  distributionProfileId  int    .
 * @param  distributionSunStatus  int    .
 * @param  entryDistributionFlag  int    .
 * @param  entryDistributionStatus  int    .
 * @param  hasEntryDistributionValidationErrors  bool    .
 * @param  entryDistributionValidationErrors  string    Comma seperated validation error types.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaContentDistributionSearchItem = module.exports.KalturaContentDistributionSearchItem = function(){
  this.noDistributionProfiles = null;
  this.distributionProfileId = null;
  this.distributionSunStatus = null;
  this.entryDistributionFlag = null;
  this.entryDistributionStatus = null;
  this.hasEntryDistributionValidationErrors = null;
  this.entryDistributionValidationErrors = null;
};
util.inherits(KalturaContentDistributionSearchItem, KalturaSearchItem);


/**
 * @param  metadataProfileId  int    .
 * @param  orderBy  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMetadataSearchItem = module.exports.KalturaMetadataSearchItem = function(){
  this.metadataProfileId = null;
  this.orderBy = null;
};
util.inherits(KalturaMetadataSearchItem, KalturaSearchOperator);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 * @param  createdByIdEqual  int    .
 * @param  typeEqual  int    .
 * @param  typeIn  string    .
 * @param  targetTypeEqual  int    .
 * @param  targetTypeIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaControlPanelCommandBaseFilter = module.exports.KalturaControlPanelCommandBaseFilter = function(){
  this.idEqual = null;
  this.idIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
  this.createdByIdEqual = null;
  this.typeEqual = null;
  this.typeIn = null;
  this.targetTypeEqual = null;
  this.targetTypeIn = null;
  this.statusEqual = null;
  this.statusIn = null;
};
util.inherits(KalturaControlPanelCommandBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMailJobBaseFilter = module.exports.KalturaMailJobBaseFilter = function(){
};
util.inherits(KalturaMailJobBaseFilter, KalturaBaseJobFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNotificationBaseFilter = module.exports.KalturaNotificationBaseFilter = function(){
};
util.inherits(KalturaNotificationBaseFilter, KalturaBaseJobFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaControlPanelCommandFilter = module.exports.KalturaControlPanelCommandFilter = function(){
};
util.inherits(KalturaControlPanelCommandFilter, KalturaControlPanelCommandBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMailJobFilter = module.exports.KalturaMailJobFilter = function(){
};
util.inherits(KalturaMailJobFilter, KalturaMailJobBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNotificationFilter = module.exports.KalturaNotificationFilter = function(){
};
util.inherits(KalturaNotificationFilter, KalturaNotificationBaseFilter);


/**
 * @param  jobTypeAndSubTypeIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBatchJobFilterExt = module.exports.KalturaBatchJobFilterExt = function(){
  this.jobTypeAndSubTypeIn = null;
};
util.inherits(KalturaBatchJobFilterExt, KalturaBatchJobFilter);


/**
 * @param  assetParamsIdEqual  int    .
 * @param  assetParamsVersionEqual  string    .
 * @param  assetIdEqual  string    .
 * @param  assetVersionEqual  string    .
 * @param  formatEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetParamsOutputBaseFilter = module.exports.KalturaAssetParamsOutputBaseFilter = function(){
  this.assetParamsIdEqual = null;
  this.assetParamsVersionEqual = null;
  this.assetIdEqual = null;
  this.assetVersionEqual = null;
  this.formatEqual = null;
};
util.inherits(KalturaAssetParamsOutputBaseFilter, KalturaAssetParamsFilter);


/**
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorAssetBaseFilter = module.exports.KalturaFlavorAssetBaseFilter = function(){
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
util.inherits(KalturaFlavorAssetBaseFilter, KalturaAssetFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaFlavorParamsBaseFilter = module.exports.KalturaMediaFlavorParamsBaseFilter = function(){
};
util.inherits(KalturaMediaFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaFlavorParamsOutputBaseFilter = module.exports.KalturaMediaFlavorParamsOutputBaseFilter = function(){
};
util.inherits(KalturaMediaFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbAssetBaseFilter = module.exports.KalturaThumbAssetBaseFilter = function(){
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
util.inherits(KalturaThumbAssetBaseFilter, KalturaAssetFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetParamsOutputFilter = module.exports.KalturaAssetParamsOutputFilter = function(){
};
util.inherits(KalturaAssetParamsOutputFilter, KalturaAssetParamsOutputBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlavorAssetFilter = module.exports.KalturaFlavorAssetFilter = function(){
};
util.inherits(KalturaFlavorAssetFilter, KalturaFlavorAssetBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaFlavorParamsFilter = module.exports.KalturaMediaFlavorParamsFilter = function(){
};
util.inherits(KalturaMediaFlavorParamsFilter, KalturaMediaFlavorParamsBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaFlavorParamsOutputFilter = module.exports.KalturaMediaFlavorParamsOutputFilter = function(){
};
util.inherits(KalturaMediaFlavorParamsOutputFilter, KalturaMediaFlavorParamsOutputBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaThumbAssetFilter = module.exports.KalturaThumbAssetFilter = function(){
};
util.inherits(KalturaThumbAssetFilter, KalturaThumbAssetBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaLiveStreamAdminEntryBaseFilter = module.exports.KalturaLiveStreamAdminEntryBaseFilter = function(){
};
util.inherits(KalturaLiveStreamAdminEntryBaseFilter, KalturaLiveStreamEntryFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaLiveStreamAdminEntryFilter = module.exports.KalturaLiveStreamAdminEntryFilter = function(){
};
util.inherits(KalturaLiveStreamAdminEntryFilter, KalturaLiveStreamAdminEntryBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAdminUserBaseFilter = module.exports.KalturaAdminUserBaseFilter = function(){
};
util.inherits(KalturaAdminUserBaseFilter, KalturaUserFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAdminUserFilter = module.exports.KalturaAdminUserFilter = function(){
};
util.inherits(KalturaAdminUserFilter, KalturaAdminUserBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGoogleVideoSyndicationFeedBaseFilter = module.exports.KalturaGoogleVideoSyndicationFeedBaseFilter = function(){
};
util.inherits(KalturaGoogleVideoSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGoogleVideoSyndicationFeedFilter = module.exports.KalturaGoogleVideoSyndicationFeedFilter = function(){
};
util.inherits(KalturaGoogleVideoSyndicationFeedFilter, KalturaGoogleVideoSyndicationFeedBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaITunesSyndicationFeedBaseFilter = module.exports.KalturaITunesSyndicationFeedBaseFilter = function(){
};
util.inherits(KalturaITunesSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaITunesSyndicationFeedFilter = module.exports.KalturaITunesSyndicationFeedFilter = function(){
};
util.inherits(KalturaITunesSyndicationFeedFilter, KalturaITunesSyndicationFeedBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTubeMogulSyndicationFeedBaseFilter = module.exports.KalturaTubeMogulSyndicationFeedBaseFilter = function(){
};
util.inherits(KalturaTubeMogulSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTubeMogulSyndicationFeedFilter = module.exports.KalturaTubeMogulSyndicationFeedFilter = function(){
};
util.inherits(KalturaTubeMogulSyndicationFeedFilter, KalturaTubeMogulSyndicationFeedBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYahooSyndicationFeedBaseFilter = module.exports.KalturaYahooSyndicationFeedBaseFilter = function(){
};
util.inherits(KalturaYahooSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYahooSyndicationFeedFilter = module.exports.KalturaYahooSyndicationFeedFilter = function(){
};
util.inherits(KalturaYahooSyndicationFeedFilter, KalturaYahooSyndicationFeedBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaApiActionPermissionItemBaseFilter = module.exports.KalturaApiActionPermissionItemBaseFilter = function(){
};
util.inherits(KalturaApiActionPermissionItemBaseFilter, KalturaPermissionItemFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaApiParameterPermissionItemBaseFilter = module.exports.KalturaApiParameterPermissionItemBaseFilter = function(){
};
util.inherits(KalturaApiParameterPermissionItemBaseFilter, KalturaPermissionItemFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaApiActionPermissionItemFilter = module.exports.KalturaApiActionPermissionItemFilter = function(){
};
util.inherits(KalturaApiActionPermissionItemFilter, KalturaApiActionPermissionItemBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaApiParameterPermissionItemFilter = module.exports.KalturaApiParameterPermissionItemFilter = function(){
};
util.inherits(KalturaApiParameterPermissionItemFilter, KalturaApiParameterPermissionItemBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericSyndicationFeedBaseFilter = module.exports.KalturaGenericSyndicationFeedBaseFilter = function(){
};
util.inherits(KalturaGenericSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericSyndicationFeedFilter = module.exports.KalturaGenericSyndicationFeedFilter = function(){
};
util.inherits(KalturaGenericSyndicationFeedFilter, KalturaGenericSyndicationFeedBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericXsltSyndicationFeedBaseFilter = module.exports.KalturaGenericXsltSyndicationFeedBaseFilter = function(){
};
util.inherits(KalturaGenericXsltSyndicationFeedBaseFilter, KalturaGenericSyndicationFeedFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericXsltSyndicationFeedFilter = module.exports.KalturaGenericXsltSyndicationFeedFilter = function(){
};
util.inherits(KalturaGenericXsltSyndicationFeedFilter, KalturaGenericXsltSyndicationFeedBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUiConfAdminBaseFilter = module.exports.KalturaUiConfAdminBaseFilter = function(){
};
util.inherits(KalturaUiConfAdminBaseFilter, KalturaUiConfFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUiConfAdminFilter = module.exports.KalturaUiConfAdminFilter = function(){
};
util.inherits(KalturaUiConfAdminFilter, KalturaUiConfAdminBaseFilter);


/**
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAttachmentAssetBaseFilter = module.exports.KalturaAttachmentAssetBaseFilter = function(){
  this.formatEqual = null;
  this.formatIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
util.inherits(KalturaAttachmentAssetBaseFilter, KalturaAssetFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAttachmentAssetFilter = module.exports.KalturaAttachmentAssetFilter = function(){
};
util.inherits(KalturaAttachmentAssetFilter, KalturaAttachmentAssetBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConfigurableDistributionProfileBaseFilter = module.exports.KalturaConfigurableDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaConfigurableDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProfileBaseFilter = module.exports.KalturaGenericDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaGenericDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSyndicationDistributionProfileBaseFilter = module.exports.KalturaSyndicationDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaSyndicationDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSyndicationDistributionProviderBaseFilter = module.exports.KalturaSyndicationDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaSyndicationDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConfigurableDistributionProfileFilter = module.exports.KalturaConfigurableDistributionProfileFilter = function(){
};
util.inherits(KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProfileFilter = module.exports.KalturaGenericDistributionProfileFilter = function(){
};
util.inherits(KalturaGenericDistributionProfileFilter, KalturaGenericDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSyndicationDistributionProfileFilter = module.exports.KalturaSyndicationDistributionProfileFilter = function(){
};
util.inherits(KalturaSyndicationDistributionProfileFilter, KalturaSyndicationDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSyndicationDistributionProviderFilter = module.exports.KalturaSyndicationDistributionProviderFilter = function(){
};
util.inherits(KalturaSyndicationDistributionProviderFilter, KalturaSyndicationDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAvnDistributionProfileBaseFilter = module.exports.KalturaAvnDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaAvnDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAvnDistributionProviderBaseFilter = module.exports.KalturaAvnDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaAvnDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAvnDistributionProfileFilter = module.exports.KalturaAvnDistributionProfileFilter = function(){
};
util.inherits(KalturaAvnDistributionProfileFilter, KalturaAvnDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAvnDistributionProviderFilter = module.exports.KalturaAvnDistributionProviderFilter = function(){
};
util.inherits(KalturaAvnDistributionProviderFilter, KalturaAvnDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaComcastMrssDistributionProfileBaseFilter = module.exports.KalturaComcastMrssDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaComcastMrssDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaComcastMrssDistributionProviderBaseFilter = module.exports.KalturaComcastMrssDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaComcastMrssDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaComcastMrssDistributionProfileFilter = module.exports.KalturaComcastMrssDistributionProfileFilter = function(){
};
util.inherits(KalturaComcastMrssDistributionProfileFilter, KalturaComcastMrssDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaComcastMrssDistributionProviderFilter = module.exports.KalturaComcastMrssDistributionProviderFilter = function(){
};
util.inherits(KalturaComcastMrssDistributionProviderFilter, KalturaComcastMrssDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDailymotionDistributionProfileBaseFilter = module.exports.KalturaDailymotionDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaDailymotionDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDailymotionDistributionProviderBaseFilter = module.exports.KalturaDailymotionDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaDailymotionDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDailymotionDistributionProfileFilter = module.exports.KalturaDailymotionDistributionProfileFilter = function(){
};
util.inherits(KalturaDailymotionDistributionProfileFilter, KalturaDailymotionDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDailymotionDistributionProviderFilter = module.exports.KalturaDailymotionDistributionProviderFilter = function(){
};
util.inherits(KalturaDailymotionDistributionProviderFilter, KalturaDailymotionDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDoubleClickDistributionProfileBaseFilter = module.exports.KalturaDoubleClickDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaDoubleClickDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDoubleClickDistributionProviderBaseFilter = module.exports.KalturaDoubleClickDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaDoubleClickDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDoubleClickDistributionProfileFilter = module.exports.KalturaDoubleClickDistributionProfileFilter = function(){
};
util.inherits(KalturaDoubleClickDistributionProfileFilter, KalturaDoubleClickDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDoubleClickDistributionProviderFilter = module.exports.KalturaDoubleClickDistributionProviderFilter = function(){
};
util.inherits(KalturaDoubleClickDistributionProviderFilter, KalturaDoubleClickDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaExampleDistributionProfileBaseFilter = module.exports.KalturaExampleDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaExampleDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaExampleDistributionProviderBaseFilter = module.exports.KalturaExampleDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaExampleDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaExampleDistributionProfileFilter = module.exports.KalturaExampleDistributionProfileFilter = function(){
};
util.inherits(KalturaExampleDistributionProfileFilter, KalturaExampleDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaExampleDistributionProviderFilter = module.exports.KalturaExampleDistributionProviderFilter = function(){
};
util.inherits(KalturaExampleDistributionProviderFilter, KalturaExampleDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelDistributionProfileBaseFilter = module.exports.KalturaFreewheelDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaFreewheelDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelDistributionProviderBaseFilter = module.exports.KalturaFreewheelDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaFreewheelDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelDistributionProfileFilter = module.exports.KalturaFreewheelDistributionProfileFilter = function(){
};
util.inherits(KalturaFreewheelDistributionProfileFilter, KalturaFreewheelDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelDistributionProviderFilter = module.exports.KalturaFreewheelDistributionProviderFilter = function(){
};
util.inherits(KalturaFreewheelDistributionProviderFilter, KalturaFreewheelDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelGenericDistributionProfileBaseFilter = module.exports.KalturaFreewheelGenericDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaFreewheelGenericDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelGenericDistributionProviderBaseFilter = module.exports.KalturaFreewheelGenericDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaFreewheelGenericDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelGenericDistributionProfileFilter = module.exports.KalturaFreewheelGenericDistributionProfileFilter = function(){
};
util.inherits(KalturaFreewheelGenericDistributionProfileFilter, KalturaFreewheelGenericDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelGenericDistributionProviderFilter = module.exports.KalturaFreewheelGenericDistributionProviderFilter = function(){
};
util.inherits(KalturaFreewheelGenericDistributionProviderFilter, KalturaFreewheelGenericDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaHuluDistributionProfileBaseFilter = module.exports.KalturaHuluDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaHuluDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaHuluDistributionProviderBaseFilter = module.exports.KalturaHuluDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaHuluDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaHuluDistributionProfileFilter = module.exports.KalturaHuluDistributionProfileFilter = function(){
};
util.inherits(KalturaHuluDistributionProfileFilter, KalturaHuluDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaHuluDistributionProviderFilter = module.exports.KalturaHuluDistributionProviderFilter = function(){
};
util.inherits(KalturaHuluDistributionProviderFilter, KalturaHuluDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaIdeticDistributionProfileBaseFilter = module.exports.KalturaIdeticDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaIdeticDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaIdeticDistributionProviderBaseFilter = module.exports.KalturaIdeticDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaIdeticDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaIdeticDistributionProfileFilter = module.exports.KalturaIdeticDistributionProfileFilter = function(){
};
util.inherits(KalturaIdeticDistributionProfileFilter, KalturaIdeticDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaIdeticDistributionProviderFilter = module.exports.KalturaIdeticDistributionProviderFilter = function(){
};
util.inherits(KalturaIdeticDistributionProviderFilter, KalturaIdeticDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNdnDistributionProfileBaseFilter = module.exports.KalturaNdnDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaNdnDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNdnDistributionProviderBaseFilter = module.exports.KalturaNdnDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaNdnDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNdnDistributionProfileFilter = module.exports.KalturaNdnDistributionProfileFilter = function(){
};
util.inherits(KalturaNdnDistributionProfileFilter, KalturaNdnDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNdnDistributionProviderFilter = module.exports.KalturaNdnDistributionProviderFilter = function(){
};
util.inherits(KalturaNdnDistributionProviderFilter, KalturaNdnDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPodcastDistributionProfileBaseFilter = module.exports.KalturaPodcastDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaPodcastDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPodcastDistributionProviderBaseFilter = module.exports.KalturaPodcastDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaPodcastDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPodcastDistributionProfileFilter = module.exports.KalturaPodcastDistributionProfileFilter = function(){
};
util.inherits(KalturaPodcastDistributionProfileFilter, KalturaPodcastDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPodcastDistributionProviderFilter = module.exports.KalturaPodcastDistributionProviderFilter = function(){
};
util.inherits(KalturaPodcastDistributionProviderFilter, KalturaPodcastDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSynacorHboDistributionProfileBaseFilter = module.exports.KalturaSynacorHboDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaSynacorHboDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSynacorHboDistributionProviderBaseFilter = module.exports.KalturaSynacorHboDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaSynacorHboDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSynacorHboDistributionProfileFilter = module.exports.KalturaSynacorHboDistributionProfileFilter = function(){
};
util.inherits(KalturaSynacorHboDistributionProfileFilter, KalturaSynacorHboDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSynacorHboDistributionProviderFilter = module.exports.KalturaSynacorHboDistributionProviderFilter = function(){
};
util.inherits(KalturaSynacorHboDistributionProviderFilter, KalturaSynacorHboDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTimeWarnerDistributionProfileBaseFilter = module.exports.KalturaTimeWarnerDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaTimeWarnerDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTimeWarnerDistributionProviderBaseFilter = module.exports.KalturaTimeWarnerDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaTimeWarnerDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTimeWarnerDistributionProfileFilter = module.exports.KalturaTimeWarnerDistributionProfileFilter = function(){
};
util.inherits(KalturaTimeWarnerDistributionProfileFilter, KalturaTimeWarnerDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTimeWarnerDistributionProviderFilter = module.exports.KalturaTimeWarnerDistributionProviderFilter = function(){
};
util.inherits(KalturaTimeWarnerDistributionProviderFilter, KalturaTimeWarnerDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTVComDistributionProfileBaseFilter = module.exports.KalturaTVComDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaTVComDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTVComDistributionProviderBaseFilter = module.exports.KalturaTVComDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaTVComDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTVComDistributionProfileFilter = module.exports.KalturaTVComDistributionProfileFilter = function(){
};
util.inherits(KalturaTVComDistributionProfileFilter, KalturaTVComDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTVComDistributionProviderFilter = module.exports.KalturaTVComDistributionProviderFilter = function(){
};
util.inherits(KalturaTVComDistributionProviderFilter, KalturaTVComDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUverseDistributionProfileBaseFilter = module.exports.KalturaUverseDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaUverseDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUverseDistributionProviderBaseFilter = module.exports.KalturaUverseDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaUverseDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUverseDistributionProfileFilter = module.exports.KalturaUverseDistributionProfileFilter = function(){
};
util.inherits(KalturaUverseDistributionProfileFilter, KalturaUverseDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUverseDistributionProviderFilter = module.exports.KalturaUverseDistributionProviderFilter = function(){
};
util.inherits(KalturaUverseDistributionProviderFilter, KalturaUverseDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVerizonVcastDistributionProfileBaseFilter = module.exports.KalturaVerizonVcastDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaVerizonVcastDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVerizonVcastDistributionProviderBaseFilter = module.exports.KalturaVerizonVcastDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaVerizonVcastDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVerizonVcastDistributionProfileFilter = module.exports.KalturaVerizonVcastDistributionProfileFilter = function(){
};
util.inherits(KalturaVerizonVcastDistributionProfileFilter, KalturaVerizonVcastDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVerizonVcastDistributionProviderFilter = module.exports.KalturaVerizonVcastDistributionProviderFilter = function(){
};
util.inherits(KalturaVerizonVcastDistributionProviderFilter, KalturaVerizonVcastDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYahooDistributionProfileBaseFilter = module.exports.KalturaYahooDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaYahooDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYahooDistributionProviderBaseFilter = module.exports.KalturaYahooDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaYahooDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYahooDistributionProfileFilter = module.exports.KalturaYahooDistributionProfileFilter = function(){
};
util.inherits(KalturaYahooDistributionProfileFilter, KalturaYahooDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYahooDistributionProviderFilter = module.exports.KalturaYahooDistributionProviderFilter = function(){
};
util.inherits(KalturaYahooDistributionProviderFilter, KalturaYahooDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYouTubeDistributionProfileBaseFilter = module.exports.KalturaYouTubeDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaYouTubeDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYouTubeDistributionProviderBaseFilter = module.exports.KalturaYouTubeDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaYouTubeDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYouTubeDistributionProfileFilter = module.exports.KalturaYouTubeDistributionProfileFilter = function(){
};
util.inherits(KalturaYouTubeDistributionProfileFilter, KalturaYouTubeDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYouTubeDistributionProviderFilter = module.exports.KalturaYouTubeDistributionProviderFilter = function(){
};
util.inherits(KalturaYouTubeDistributionProviderFilter, KalturaYouTubeDistributionProviderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYoutubeApiDistributionProfileBaseFilter = module.exports.KalturaYoutubeApiDistributionProfileBaseFilter = function(){
};
util.inherits(KalturaYoutubeApiDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYoutubeApiDistributionProviderBaseFilter = module.exports.KalturaYoutubeApiDistributionProviderBaseFilter = function(){
};
util.inherits(KalturaYoutubeApiDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYoutubeApiDistributionProfileFilter = module.exports.KalturaYoutubeApiDistributionProfileFilter = function(){
};
util.inherits(KalturaYoutubeApiDistributionProfileFilter, KalturaYoutubeApiDistributionProfileBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYoutubeApiDistributionProviderFilter = module.exports.KalturaYoutubeApiDistributionProviderFilter = function(){
};
util.inherits(KalturaYoutubeApiDistributionProviderFilter, KalturaYoutubeApiDistributionProviderBaseFilter);


/**
 * @param  protocolTypeEqual  string    .
 * @param  protocolTypeIn  string    .
 * @param  titleLike  string    .
 * @param  titleMultiLikeOr  string    .
 * @param  titleMultiLikeAnd  string    .
 * @param  endTimeGreaterThanOrEqual  int    .
 * @param  endTimeLessThanOrEqual  int    .
 * @param  durationGreaterThanOrEqual  int    .
 * @param  durationLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAdCuePointBaseFilter = module.exports.KalturaAdCuePointBaseFilter = function(){
  this.protocolTypeEqual = null;
  this.protocolTypeIn = null;
  this.titleLike = null;
  this.titleMultiLikeOr = null;
  this.titleMultiLikeAnd = null;
  this.endTimeGreaterThanOrEqual = null;
  this.endTimeLessThanOrEqual = null;
  this.durationGreaterThanOrEqual = null;
  this.durationLessThanOrEqual = null;
};
util.inherits(KalturaAdCuePointBaseFilter, KalturaCuePointFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAdCuePointFilter = module.exports.KalturaAdCuePointFilter = function(){
};
util.inherits(KalturaAdCuePointFilter, KalturaAdCuePointBaseFilter);


/**
 * @param  parentIdEqual  string    .
 * @param  parentIdIn  string    .
 * @param  textLike  string    .
 * @param  textMultiLikeOr  string    .
 * @param  textMultiLikeAnd  string    .
 * @param  endTimeGreaterThanOrEqual  int    .
 * @param  endTimeLessThanOrEqual  int    .
 * @param  durationGreaterThanOrEqual  int    .
 * @param  durationLessThanOrEqual  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAnnotationBaseFilter = module.exports.KalturaAnnotationBaseFilter = function(){
  this.parentIdEqual = null;
  this.parentIdIn = null;
  this.textLike = null;
  this.textMultiLikeOr = null;
  this.textMultiLikeAnd = null;
  this.endTimeGreaterThanOrEqual = null;
  this.endTimeLessThanOrEqual = null;
  this.durationGreaterThanOrEqual = null;
  this.durationLessThanOrEqual = null;
};
util.inherits(KalturaAnnotationBaseFilter, KalturaCuePointFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAnnotationFilter = module.exports.KalturaAnnotationFilter = function(){
};
util.inherits(KalturaAnnotationFilter, KalturaAnnotationBaseFilter);


/**
 * @param  codeLike  string    .
 * @param  codeMultiLikeOr  string    .
 * @param  codeMultiLikeAnd  string    .
 * @param  codeEqual  string    .
 * @param  codeIn  string    .
 * @param  descriptionLike  string    .
 * @param  descriptionMultiLikeOr  string    .
 * @param  descriptionMultiLikeAnd  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCodeCuePointBaseFilter = module.exports.KalturaCodeCuePointBaseFilter = function(){
  this.codeLike = null;
  this.codeMultiLikeOr = null;
  this.codeMultiLikeAnd = null;
  this.codeEqual = null;
  this.codeIn = null;
  this.descriptionLike = null;
  this.descriptionMultiLikeOr = null;
  this.descriptionMultiLikeAnd = null;
};
util.inherits(KalturaCodeCuePointBaseFilter, KalturaCuePointFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCodeCuePointFilter = module.exports.KalturaCodeCuePointFilter = function(){
};
util.inherits(KalturaCodeCuePointFilter, KalturaCodeCuePointBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentFlavorParamsBaseFilter = module.exports.KalturaDocumentFlavorParamsBaseFilter = function(){
};
util.inherits(KalturaDocumentFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentFlavorParamsOutputBaseFilter = module.exports.KalturaDocumentFlavorParamsOutputBaseFilter = function(){
};
util.inherits(KalturaDocumentFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPdfFlavorParamsBaseFilter = module.exports.KalturaPdfFlavorParamsBaseFilter = function(){
};
util.inherits(KalturaPdfFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPdfFlavorParamsOutputBaseFilter = module.exports.KalturaPdfFlavorParamsOutputBaseFilter = function(){
};
util.inherits(KalturaPdfFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSwfFlavorParamsBaseFilter = module.exports.KalturaSwfFlavorParamsBaseFilter = function(){
};
util.inherits(KalturaSwfFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSwfFlavorParamsOutputBaseFilter = module.exports.KalturaSwfFlavorParamsOutputBaseFilter = function(){
};
util.inherits(KalturaSwfFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentFlavorParamsFilter = module.exports.KalturaDocumentFlavorParamsFilter = function(){
};
util.inherits(KalturaDocumentFlavorParamsFilter, KalturaDocumentFlavorParamsBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentFlavorParamsOutputFilter = module.exports.KalturaDocumentFlavorParamsOutputFilter = function(){
};
util.inherits(KalturaDocumentFlavorParamsOutputFilter, KalturaDocumentFlavorParamsOutputBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPdfFlavorParamsFilter = module.exports.KalturaPdfFlavorParamsFilter = function(){
};
util.inherits(KalturaPdfFlavorParamsFilter, KalturaPdfFlavorParamsBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPdfFlavorParamsOutputFilter = module.exports.KalturaPdfFlavorParamsOutputFilter = function(){
};
util.inherits(KalturaPdfFlavorParamsOutputFilter, KalturaPdfFlavorParamsOutputBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSwfFlavorParamsFilter = module.exports.KalturaSwfFlavorParamsFilter = function(){
};
util.inherits(KalturaSwfFlavorParamsFilter, KalturaSwfFlavorParamsBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSwfFlavorParamsOutputFilter = module.exports.KalturaSwfFlavorParamsOutputFilter = function(){
};
util.inherits(KalturaSwfFlavorParamsOutputFilter, KalturaSwfFlavorParamsOutputBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaRemoteDropFolderBaseFilter = module.exports.KalturaRemoteDropFolderBaseFilter = function(){
};
util.inherits(KalturaRemoteDropFolderBaseFilter, KalturaDropFolderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaRemoteDropFolderFilter = module.exports.KalturaRemoteDropFolderFilter = function(){
};
util.inherits(KalturaRemoteDropFolderFilter, KalturaRemoteDropFolderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFtpDropFolderBaseFilter = module.exports.KalturaFtpDropFolderBaseFilter = function(){
};
util.inherits(KalturaFtpDropFolderBaseFilter, KalturaRemoteDropFolderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSshDropFolderBaseFilter = module.exports.KalturaSshDropFolderBaseFilter = function(){
};
util.inherits(KalturaSshDropFolderBaseFilter, KalturaRemoteDropFolderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSshDropFolderFilter = module.exports.KalturaSshDropFolderFilter = function(){
};
util.inherits(KalturaSshDropFolderFilter, KalturaSshDropFolderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaScpDropFolderBaseFilter = module.exports.KalturaScpDropFolderBaseFilter = function(){
};
util.inherits(KalturaScpDropFolderBaseFilter, KalturaSshDropFolderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSftpDropFolderBaseFilter = module.exports.KalturaSftpDropFolderBaseFilter = function(){
};
util.inherits(KalturaSftpDropFolderBaseFilter, KalturaSshDropFolderFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFtpDropFolderFilter = module.exports.KalturaFtpDropFolderFilter = function(){
};
util.inherits(KalturaFtpDropFolderFilter, KalturaFtpDropFolderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaScpDropFolderFilter = module.exports.KalturaScpDropFolderFilter = function(){
};
util.inherits(KalturaScpDropFolderFilter, KalturaScpDropFolderBaseFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSftpDropFolderFilter = module.exports.KalturaSftpDropFolderFilter = function(){
};
util.inherits(KalturaSftpDropFolderFilter, KalturaSftpDropFolderBaseFilter);


/**
 * @param  partnerIdEqual  int    .
 * @param  aggregatedTimeLessThanOrEqual  int    .
 * @param  aggregatedTimeGreaterThanOrEqual  int    .
 * @param  sumTimeViewedLessThanOrEqual  float    .
 * @param  sumTimeViewedGreaterThanOrEqual  float    .
 * @param  averageTimeViewedLessThanOrEqual  float    .
 * @param  averageTimeViewedGreaterThanOrEqual  float    .
 * @param  countPlaysLessThanOrEqual  int    .
 * @param  countPlaysGreaterThanOrEqual  int    .
 * @param  countLoadsLessThanOrEqual  int    .
 * @param  countLoadsGreaterThanOrEqual  int    .
 * @param  countPlays25LessThanOrEqual  int    .
 * @param  countPlays25GreaterThanOrEqual  int    .
 * @param  countPlays50LessThanOrEqual  int    .
 * @param  countPlays50GreaterThanOrEqual  int    .
 * @param  countPlays75LessThanOrEqual  int    .
 * @param  countPlays75GreaterThanOrEqual  int    .
 * @param  countPlays100LessThanOrEqual  int    .
 * @param  countPlays100GreaterThanOrEqual  int    .
 * @param  countEditLessThanOrEqual  int    .
 * @param  countEditGreaterThanOrEqual  int    .
 * @param  countSharesLessThanOrEqual  int    .
 * @param  countSharesGreaterThanOrEqual  int    .
 * @param  countDownloadLessThanOrEqual  int    .
 * @param  countDownloadGreaterThanOrEqual  int    .
 * @param  countReportAbuseLessThanOrEqual  int    .
 * @param  countReportAbuseGreaterThanOrEqual  int    .
 * @param  countMediaEntriesLessThanOrEqual  int    .
 * @param  countMediaEntriesGreaterThanOrEqual  int    .
 * @param  countVideoEntriesLessThanOrEqual  int    .
 * @param  countVideoEntriesGreaterThanOrEqual  int    .
 * @param  countImageEntriesLessThanOrEqual  int    .
 * @param  countImageEntriesGreaterThanOrEqual  int    .
 * @param  countAudioEntriesLessThanOrEqual  int    .
 * @param  countAudioEntriesGreaterThanOrEqual  int    .
 * @param  countMixEntriesLessThanOrEqual  int    .
 * @param  countMixEntriesGreaterThanOrEqual  int    .
 * @param  countPlaylistsLessThanOrEqual  int    .
 * @param  countPlaylistsGreaterThanOrEqual  int    .
 * @param  countBandwidthLessThanOrEqual  string    .
 * @param  countBandwidthGreaterThanOrEqual  string    .
 * @param  countStorageLessThanOrEqual  string    .
 * @param  countStorageGreaterThanOrEqual  string    .
 * @param  countUsersLessThanOrEqual  int    .
 * @param  countUsersGreaterThanOrEqual  int    .
 * @param  countWidgetsLessThanOrEqual  int    .
 * @param  countWidgetsGreaterThanOrEqual  int    .
 * @param  aggregatedStorageLessThanOrEqual  string    .
 * @param  aggregatedStorageGreaterThanOrEqual  string    .
 * @param  aggregatedBandwidthLessThanOrEqual  string    .
 * @param  aggregatedBandwidthGreaterThanOrEqual  string    .
 * @param  countBufferStartLessThanOrEqual  int    .
 * @param  countBufferStartGreaterThanOrEqual  int    .
 * @param  countBufferEndLessThanOrEqual  int    .
 * @param  countBufferEndGreaterThanOrEqual  int    .
 * @param  countOpenFullScreenLessThanOrEqual  int    .
 * @param  countOpenFullScreenGreaterThanOrEqual  int    .
 * @param  countCloseFullScreenLessThanOrEqual  int    .
 * @param  countCloseFullScreenGreaterThanOrEqual  int    .
 * @param  countReplayLessThanOrEqual  int    .
 * @param  countReplayGreaterThanOrEqual  int    .
 * @param  countSeekLessThanOrEqual  int    .
 * @param  countSeekGreaterThanOrEqual  int    .
 * @param  countOpenUploadLessThanOrEqual  int    .
 * @param  countOpenUploadGreaterThanOrEqual  int    .
 * @param  countSavePublishLessThanOrEqual  int    .
 * @param  countSavePublishGreaterThanOrEqual  int    .
 * @param  countCloseEditorLessThanOrEqual  int    .
 * @param  countCloseEditorGreaterThanOrEqual  int    .
 * @param  countPreBumperPlayedLessThanOrEqual  int    .
 * @param  countPreBumperPlayedGreaterThanOrEqual  int    .
 * @param  countPostBumperPlayedLessThanOrEqual  int    .
 * @param  countPostBumperPlayedGreaterThanOrEqual  int    .
 * @param  countBumperClickedLessThanOrEqual  int    .
 * @param  countBumperClickedGreaterThanOrEqual  int    .
 * @param  countPrerollStartedLessThanOrEqual  int    .
 * @param  countPrerollStartedGreaterThanOrEqual  int    .
 * @param  countMidrollStartedLessThanOrEqual  int    .
 * @param  countMidrollStartedGreaterThanOrEqual  int    .
 * @param  countPostrollStartedLessThanOrEqual  int    .
 * @param  countPostrollStartedGreaterThanOrEqual  int    .
 * @param  countOverlayStartedLessThanOrEqual  int    .
 * @param  countOverlayStartedGreaterThanOrEqual  int    .
 * @param  countPrerollClickedLessThanOrEqual  int    .
 * @param  countPrerollClickedGreaterThanOrEqual  int    .
 * @param  countMidrollClickedLessThanOrEqual  int    .
 * @param  countMidrollClickedGreaterThanOrEqual  int    .
 * @param  countPostrollClickedLessThanOrEqual  int    .
 * @param  countPostrollClickedGreaterThanOrEqual  int    .
 * @param  countOverlayClickedLessThanOrEqual  int    .
 * @param  countOverlayClickedGreaterThanOrEqual  int    .
 * @param  countPreroll25LessThanOrEqual  int    .
 * @param  countPreroll25GreaterThanOrEqual  int    .
 * @param  countPreroll50LessThanOrEqual  int    .
 * @param  countPreroll50GreaterThanOrEqual  int    .
 * @param  countPreroll75LessThanOrEqual  int    .
 * @param  countPreroll75GreaterThanOrEqual  int    .
 * @param  countMidroll25LessThanOrEqual  int    .
 * @param  countMidroll25GreaterThanOrEqual  int    .
 * @param  countMidroll50LessThanOrEqual  int    .
 * @param  countMidroll50GreaterThanOrEqual  int    .
 * @param  countMidroll75LessThanOrEqual  int    .
 * @param  countMidroll75GreaterThanOrEqual  int    .
 * @param  countPostroll25LessThanOrEqual  int    .
 * @param  countPostroll25GreaterThanOrEqual  int    .
 * @param  countPostroll50LessThanOrEqual  int    .
 * @param  countPostroll50GreaterThanOrEqual  int    .
 * @param  countPostroll75LessThanOrEqual  int    .
 * @param  countPostroll75GreaterThanOrEqual  int    .
 * @param  countLiveStreamingBandwidthLessThanOrEqual  string    .
 * @param  countLiveStreamingBandwidthGreaterThanOrEqual  string    .
 * @param  aggregatedLiveStreamingBandwidthLessThanOrEqual  string    .
 * @param  aggregatedLiveStreamingBandwidthGreaterThanOrEqual  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDwhHourlyPartnerBaseFilter = module.exports.KalturaDwhHourlyPartnerBaseFilter = function(){
  this.partnerIdEqual = null;
  this.aggregatedTimeLessThanOrEqual = null;
  this.aggregatedTimeGreaterThanOrEqual = null;
  this.sumTimeViewedLessThanOrEqual = null;
  this.sumTimeViewedGreaterThanOrEqual = null;
  this.averageTimeViewedLessThanOrEqual = null;
  this.averageTimeViewedGreaterThanOrEqual = null;
  this.countPlaysLessThanOrEqual = null;
  this.countPlaysGreaterThanOrEqual = null;
  this.countLoadsLessThanOrEqual = null;
  this.countLoadsGreaterThanOrEqual = null;
  this.countPlays25LessThanOrEqual = null;
  this.countPlays25GreaterThanOrEqual = null;
  this.countPlays50LessThanOrEqual = null;
  this.countPlays50GreaterThanOrEqual = null;
  this.countPlays75LessThanOrEqual = null;
  this.countPlays75GreaterThanOrEqual = null;
  this.countPlays100LessThanOrEqual = null;
  this.countPlays100GreaterThanOrEqual = null;
  this.countEditLessThanOrEqual = null;
  this.countEditGreaterThanOrEqual = null;
  this.countSharesLessThanOrEqual = null;
  this.countSharesGreaterThanOrEqual = null;
  this.countDownloadLessThanOrEqual = null;
  this.countDownloadGreaterThanOrEqual = null;
  this.countReportAbuseLessThanOrEqual = null;
  this.countReportAbuseGreaterThanOrEqual = null;
  this.countMediaEntriesLessThanOrEqual = null;
  this.countMediaEntriesGreaterThanOrEqual = null;
  this.countVideoEntriesLessThanOrEqual = null;
  this.countVideoEntriesGreaterThanOrEqual = null;
  this.countImageEntriesLessThanOrEqual = null;
  this.countImageEntriesGreaterThanOrEqual = null;
  this.countAudioEntriesLessThanOrEqual = null;
  this.countAudioEntriesGreaterThanOrEqual = null;
  this.countMixEntriesLessThanOrEqual = null;
  this.countMixEntriesGreaterThanOrEqual = null;
  this.countPlaylistsLessThanOrEqual = null;
  this.countPlaylistsGreaterThanOrEqual = null;
  this.countBandwidthLessThanOrEqual = null;
  this.countBandwidthGreaterThanOrEqual = null;
  this.countStorageLessThanOrEqual = null;
  this.countStorageGreaterThanOrEqual = null;
  this.countUsersLessThanOrEqual = null;
  this.countUsersGreaterThanOrEqual = null;
  this.countWidgetsLessThanOrEqual = null;
  this.countWidgetsGreaterThanOrEqual = null;
  this.aggregatedStorageLessThanOrEqual = null;
  this.aggregatedStorageGreaterThanOrEqual = null;
  this.aggregatedBandwidthLessThanOrEqual = null;
  this.aggregatedBandwidthGreaterThanOrEqual = null;
  this.countBufferStartLessThanOrEqual = null;
  this.countBufferStartGreaterThanOrEqual = null;
  this.countBufferEndLessThanOrEqual = null;
  this.countBufferEndGreaterThanOrEqual = null;
  this.countOpenFullScreenLessThanOrEqual = null;
  this.countOpenFullScreenGreaterThanOrEqual = null;
  this.countCloseFullScreenLessThanOrEqual = null;
  this.countCloseFullScreenGreaterThanOrEqual = null;
  this.countReplayLessThanOrEqual = null;
  this.countReplayGreaterThanOrEqual = null;
  this.countSeekLessThanOrEqual = null;
  this.countSeekGreaterThanOrEqual = null;
  this.countOpenUploadLessThanOrEqual = null;
  this.countOpenUploadGreaterThanOrEqual = null;
  this.countSavePublishLessThanOrEqual = null;
  this.countSavePublishGreaterThanOrEqual = null;
  this.countCloseEditorLessThanOrEqual = null;
  this.countCloseEditorGreaterThanOrEqual = null;
  this.countPreBumperPlayedLessThanOrEqual = null;
  this.countPreBumperPlayedGreaterThanOrEqual = null;
  this.countPostBumperPlayedLessThanOrEqual = null;
  this.countPostBumperPlayedGreaterThanOrEqual = null;
  this.countBumperClickedLessThanOrEqual = null;
  this.countBumperClickedGreaterThanOrEqual = null;
  this.countPrerollStartedLessThanOrEqual = null;
  this.countPrerollStartedGreaterThanOrEqual = null;
  this.countMidrollStartedLessThanOrEqual = null;
  this.countMidrollStartedGreaterThanOrEqual = null;
  this.countPostrollStartedLessThanOrEqual = null;
  this.countPostrollStartedGreaterThanOrEqual = null;
  this.countOverlayStartedLessThanOrEqual = null;
  this.countOverlayStartedGreaterThanOrEqual = null;
  this.countPrerollClickedLessThanOrEqual = null;
  this.countPrerollClickedGreaterThanOrEqual = null;
  this.countMidrollClickedLessThanOrEqual = null;
  this.countMidrollClickedGreaterThanOrEqual = null;
  this.countPostrollClickedLessThanOrEqual = null;
  this.countPostrollClickedGreaterThanOrEqual = null;
  this.countOverlayClickedLessThanOrEqual = null;
  this.countOverlayClickedGreaterThanOrEqual = null;
  this.countPreroll25LessThanOrEqual = null;
  this.countPreroll25GreaterThanOrEqual = null;
  this.countPreroll50LessThanOrEqual = null;
  this.countPreroll50GreaterThanOrEqual = null;
  this.countPreroll75LessThanOrEqual = null;
  this.countPreroll75GreaterThanOrEqual = null;
  this.countMidroll25LessThanOrEqual = null;
  this.countMidroll25GreaterThanOrEqual = null;
  this.countMidroll50LessThanOrEqual = null;
  this.countMidroll50GreaterThanOrEqual = null;
  this.countMidroll75LessThanOrEqual = null;
  this.countMidroll75GreaterThanOrEqual = null;
  this.countPostroll25LessThanOrEqual = null;
  this.countPostroll25GreaterThanOrEqual = null;
  this.countPostroll50LessThanOrEqual = null;
  this.countPostroll50GreaterThanOrEqual = null;
  this.countPostroll75LessThanOrEqual = null;
  this.countPostroll75GreaterThanOrEqual = null;
  this.countLiveStreamingBandwidthLessThanOrEqual = null;
  this.countLiveStreamingBandwidthGreaterThanOrEqual = null;
  this.aggregatedLiveStreamingBandwidthLessThanOrEqual = null;
  this.aggregatedLiveStreamingBandwidthGreaterThanOrEqual = null;
};
util.inherits(KalturaDwhHourlyPartnerBaseFilter, KalturaFilter);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDwhHourlyPartnerFilter = module.exports.KalturaDwhHourlyPartnerFilter = function(){
};
util.inherits(KalturaDwhHourlyPartnerFilter, KalturaDwhHourlyPartnerBaseFilter);


/**
 * @param  offset  int    Offset in milliseconds.
 * @param  duration  int    Duration in milliseconds.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaClipAttributes = module.exports.KalturaClipAttributes = function(){
  this.offset = null;
  this.duration = null;
};
util.inherits(KalturaClipAttributes, KalturaOperationAttributes);


/**
 * @param  resource  KalturaContentResource    The content resource to associate with asset params.
 * @param  assetParamsId  int    The asset params to associate with the reaource.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetParamsResourceContainer = module.exports.KalturaAssetParamsResourceContainer = function(){
  this.resource = null;
  this.assetParamsId = null;
};
util.inherits(KalturaAssetParamsResourceContainer, KalturaResource);


/**
 * @param  assetId  string    ID of the source asset .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetResource = module.exports.KalturaAssetResource = function(){
  this.assetId = null;
};
util.inherits(KalturaAssetResource, KalturaContentResource);


/**
 * @param  resources  array    Array of resources associated with asset params ids.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetsParamsResourceContainers = module.exports.KalturaAssetsParamsResourceContainers = function(){
  this.resources = null;
};
util.inherits(KalturaAssetsParamsResourceContainers, KalturaResource);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDataCenterContentResource = module.exports.KalturaDataCenterContentResource = function(){
};
util.inherits(KalturaDataCenterContentResource, KalturaContentResource);


/**
 * @param  entryId  string    ID of the source entry .
 * @param  flavorParamsId  int    ID of the source flavor params, set to null to use the source flavor.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaEntryResource = module.exports.KalturaEntryResource = function(){
  this.entryId = null;
  this.flavorParamsId = null;
};
util.inherits(KalturaEntryResource, KalturaContentResource);


/**
 * @param  fileSyncObjectType  int    The object type of the file sync object .
 * @param  objectSubType  int    The object sub-type of the file sync object .
 * @param  objectId  string    The object id of the file sync object .
 * @param  version  string    The version of the file sync object .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFileSyncResource = module.exports.KalturaFileSyncResource = function(){
  this.fileSyncObjectType = null;
  this.objectSubType = null;
  this.objectId = null;
  this.version = null;
};
util.inherits(KalturaFileSyncResource, KalturaContentResource);


/**
 * @param  resource  KalturaContentResource    Only KalturaEntryResource and KalturaAssetResource are supported.
 * @param  operationAttributes  array    .
 * @param  assetParamsId  int    ID of alternative asset params to be used instead of the system default flavor params .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaOperationResource = module.exports.KalturaOperationResource = function(){
  this.resource = null;
  this.operationAttributes = null;
  this.assetParamsId = null;
};
util.inherits(KalturaOperationResource, KalturaContentResource);


/**
 * @param  url  string    Remote URL, FTP, HTTP or HTTPS .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUrlResource = module.exports.KalturaUrlResource = function(){
  this.url = null;
};
util.inherits(KalturaUrlResource, KalturaContentResource);


/**
 * @param  storageProfileId  int    ID of storage profile to be associated with the created file sync, used for file serving URL composing. .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaRemoteStorageResource = module.exports.KalturaRemoteStorageResource = function(){
  this.storageProfileId = null;
};
util.inherits(KalturaRemoteStorageResource, KalturaUrlResource);


/**
 * @param  resources  array    Array of remote stoage resources .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaRemoteStorageResources = module.exports.KalturaRemoteStorageResources = function(){
  this.resources = null;
};
util.inherits(KalturaRemoteStorageResources, KalturaContentResource);


/**
 * @param  localFilePath  string    Full path to the local file .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaServerFileResource = module.exports.KalturaServerFileResource = function(){
  this.localFilePath = null;
};
util.inherits(KalturaServerFileResource, KalturaDataCenterContentResource);


/**
 * @param  privateKey  string    SSH private key.
 * @param  publicKey  string    SSH public key.
 * @param  keyPassphrase  string    Passphrase for SSH keys.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSshUrlResource = module.exports.KalturaSshUrlResource = function(){
  this.privateKey = null;
  this.publicKey = null;
  this.keyPassphrase = null;
};
util.inherits(KalturaSshUrlResource, KalturaUrlResource);


/**
 * @param  token  string    Token that returned from upload.upload action or uploadToken.add action. .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUploadedFileTokenResource = module.exports.KalturaUploadedFileTokenResource = function(){
  this.token = null;
};
util.inherits(KalturaUploadedFileTokenResource, KalturaDataCenterContentResource);


/**
 * @param  token  string    Token that returned from media server such as FMS or red5. .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaWebcamTokenResource = module.exports.KalturaWebcamTokenResource = function(){
  this.token = null;
};
util.inherits(KalturaWebcamTokenResource, KalturaDataCenterContentResource);


/**
 * @param  dropFolderFileId  int    Id of the drop folder file object.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderFileResource = module.exports.KalturaDropFolderFileResource = function(){
  this.dropFolderFileId = null;
};
util.inherits(KalturaDropFolderFileResource, KalturaDataCenterContentResource);


/**
 * @param  assetParamsId  int    .
 * @param  assetParamsVersion  string    .
 * @param  assetId  string    .
 * @param  assetVersion  string    .
 * @param  readyBehavior  int    .
 * @param  format  string    The container format of the Flavor Params
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAssetParamsOutput = module.exports.KalturaAssetParamsOutput = function(){
  this.assetParamsId = null;
  this.assetParamsVersion = null;
  this.assetId = null;
  this.assetVersion = null;
  this.readyBehavior = null;
  this.format = null;
};
util.inherits(KalturaAssetParamsOutput, KalturaAssetParams);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaFlavorParamsOutput = module.exports.KalturaMediaFlavorParamsOutput = function(){
};
util.inherits(KalturaMediaFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMediaFlavorParams = module.exports.KalturaMediaFlavorParams = function(){
};
util.inherits(KalturaMediaFlavorParams, KalturaFlavorParams);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentFlavorParamsOutput = module.exports.KalturaDocumentFlavorParamsOutput = function(){
};
util.inherits(KalturaDocumentFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDocumentFlavorParams = module.exports.KalturaDocumentFlavorParams = function(){
};
util.inherits(KalturaDocumentFlavorParams, KalturaFlavorParams);


/**
 * @param  readonly  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPdfFlavorParamsOutput = module.exports.KalturaPdfFlavorParamsOutput = function(){
  this.readonly = null;
};
util.inherits(KalturaPdfFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 * @param  readonly  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPdfFlavorParams = module.exports.KalturaPdfFlavorParams = function(){
  this.readonly = null;
};
util.inherits(KalturaPdfFlavorParams, KalturaFlavorParams);


/**
 * @param  flashVersion  int    .
 * @param  poly2Bitmap  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSwfFlavorParamsOutput = module.exports.KalturaSwfFlavorParamsOutput = function(){
  this.flashVersion = null;
  this.poly2Bitmap = null;
};
util.inherits(KalturaSwfFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 * @param  flashVersion  int    .
 * @param  poly2Bitmap  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSwfFlavorParams = module.exports.KalturaSwfFlavorParams = function(){
  this.flashVersion = null;
  this.poly2Bitmap = null;
};
util.inherits(KalturaSwfFlavorParams, KalturaFlavorParams);


/**
 * @param  service  string    .
 * @param  action  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaApiActionPermissionItem = module.exports.KalturaApiActionPermissionItem = function(){
  this.service = null;
  this.action = null;
};
util.inherits(KalturaApiActionPermissionItem, KalturaPermissionItem);


/**
 * @param  object  string    .
 * @param  parameter  string    .
 * @param  action  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaApiParameterPermissionItem = module.exports.KalturaApiParameterPermissionItem = function(){
  this.object = null;
  this.parameter = null;
  this.action = null;
};
util.inherits(KalturaApiParameterPermissionItem, KalturaPermissionItem);


/**
 * @param  feedDescription  string    feed description
 *  .
 * @param  feedLandingPage  string    feed landing page (i.e publisher website)
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericSyndicationFeed = module.exports.KalturaGenericSyndicationFeed = function(){
  this.feedDescription = null;
  this.feedLandingPage = null;
};
util.inherits(KalturaGenericSyndicationFeed, KalturaBaseSyndicationFeed);


/**
 * @param  xslt  string    .
 * @param  itemXpathsToExtend  array    This parameter determines which custom metadata fields of type related-entry should be
 *  expanded to contain the kaltura MRSS feed of the related entry. Related-entry fields not
 *  included in this list will contain only the related entry id.
 *  This property contains a list xPaths in the Kaltura MRSS.
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericXsltSyndicationFeed = module.exports.KalturaGenericXsltSyndicationFeed = function(){
  this.xslt = null;
  this.itemXpathsToExtend = null;
};
util.inherits(KalturaGenericXsltSyndicationFeed, KalturaGenericSyndicationFeed);


/**
 * @param  adultContent  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGoogleVideoSyndicationFeed = module.exports.KalturaGoogleVideoSyndicationFeed = function(){
  this.adultContent = null;
};
util.inherits(KalturaGoogleVideoSyndicationFeed, KalturaBaseSyndicationFeed);


/**
 * @param  feedDescription  string    feed description
 *  .
 * @param  language  string    feed language
 *  .
 * @param  feedLandingPage  string    feed landing page (i.e publisher website)
 *  .
 * @param  ownerName  string    author/publisher name
 *  .
 * @param  ownerEmail  string    publisher email
 *  .
 * @param  feedImageUrl  string    podcast thumbnail
 *  .
 * @param  category  string     (readOnly).
 * @param  adultContent  string    .
 * @param  feedAuthor  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaITunesSyndicationFeed = module.exports.KalturaITunesSyndicationFeed = function(){
  this.feedDescription = null;
  this.language = null;
  this.feedLandingPage = null;
  this.ownerName = null;
  this.ownerEmail = null;
  this.feedImageUrl = null;
  this.category = null;
  this.adultContent = null;
  this.feedAuthor = null;
};
util.inherits(KalturaITunesSyndicationFeed, KalturaBaseSyndicationFeed);


/**
 * @param  category  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTubeMogulSyndicationFeed = module.exports.KalturaTubeMogulSyndicationFeed = function(){
  this.category = null;
};
util.inherits(KalturaTubeMogulSyndicationFeed, KalturaBaseSyndicationFeed);


/**
 * @param  category  string     (readOnly).
 * @param  adultContent  string    .
 * @param  feedDescription  string    feed description
 *  .
 * @param  feedLandingPage  string    feed landing page (i.e publisher website)
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYahooSyndicationFeed = module.exports.KalturaYahooSyndicationFeed = function(){
  this.category = null;
  this.adultContent = null;
  this.feedDescription = null;
  this.feedLandingPage = null;
};
util.inherits(KalturaYahooSyndicationFeed, KalturaBaseSyndicationFeed);


/**
 * @param  mailType  int    .
 * @param  mailPriority  int    .
 * @param  status  int    .
 * @param  recipientName  string    .
 * @param  recipientEmail  string    .
 * @param  recipientId  int    kuserId  .
 * @param  fromName  string    .
 * @param  fromEmail  string    .
 * @param  bodyParams  string    .
 * @param  subjectParams  string    .
 * @param  templatePath  string    .
 * @param  culture  int    .
 * @param  campaignId  int    .
 * @param  minSendDate  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMailJob = module.exports.KalturaMailJob = function(){
  this.mailType = null;
  this.mailPriority = null;
  this.status = null;
  this.recipientName = null;
  this.recipientEmail = null;
  this.recipientId = null;
  this.fromName = null;
  this.fromEmail = null;
  this.bodyParams = null;
  this.subjectParams = null;
  this.templatePath = null;
  this.culture = null;
  this.campaignId = null;
  this.minSendDate = null;
};
util.inherits(KalturaMailJob, KalturaBaseJob);


/**
 * @param  streamID  string    .
 * @param  backupStreamID  string    .
 * @param  rtmp  string    .
 * @param  encoderIP  string    .
 * @param  backupEncoderIP  string    .
 * @param  encoderPassword  string    .
 * @param  encoderUsername  string    .
 * @param  endDate  int    .
 * @param  returnVal  string    .
 * @param  mediaType  int    .
 * @param  primaryBroadcastingUrl  string    .
 * @param  secondaryBroadcastingUrl  string    .
 * @param  streamName  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaProvisionJobData = module.exports.KalturaProvisionJobData = function(){
  this.streamID = null;
  this.backupStreamID = null;
  this.rtmp = null;
  this.encoderIP = null;
  this.backupEncoderIP = null;
  this.encoderPassword = null;
  this.encoderUsername = null;
  this.endDate = null;
  this.returnVal = null;
  this.mediaType = null;
  this.primaryBroadcastingUrl = null;
  this.secondaryBroadcastingUrl = null;
  this.streamName = null;
};
util.inherits(KalturaProvisionJobData, KalturaJobData);


/**
 * @param  wsdlUsername  string    .
 * @param  wsdlPassword  string    .
 * @param  cpcode  string    .
 * @param  emailId  string    .
 * @param  primaryContact  string    .
 * @param  secondaryContact  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAkamaiProvisionJobData = module.exports.KalturaAkamaiProvisionJobData = function(){
  this.wsdlUsername = null;
  this.wsdlPassword = null;
  this.cpcode = null;
  this.emailId = null;
  this.primaryContact = null;
  this.secondaryContact = null;
};
util.inherits(KalturaAkamaiProvisionJobData, KalturaProvisionJobData);


/**
 * @param  entryIds  string    Comma separated list of entry ids
 *  .
 * @param  flavorParamsId  int    Flavor params id to use for conversion
 *  .
 * @param  puserId  string    The id of the requesting user
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBulkDownloadJobData = module.exports.KalturaBulkDownloadJobData = function(){
  this.entryIds = null;
  this.flavorParamsId = null;
  this.puserId = null;
};
util.inherits(KalturaBulkDownloadJobData, KalturaJobData);


/**
 * @param  userId  string    .
 * @param  uploadedBy  string    The screen name of the user
 *  .
 * @param  conversionProfileId  int    Selected profile id for all bulk entries
 *  .
 * @param  resultsFileLocalPath  string    Created by the API
 *  .
 * @param  resultsFileUrl  string    Created by the API
 *  .
 * @param  numOfEntries  int    Number of created entries
 *  .
 * @param  filePath  string    The bulk upload file path.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBulkUploadJobData = module.exports.KalturaBulkUploadJobData = function(){
  this.userId = null;
  this.uploadedBy = null;
  this.conversionProfileId = null;
  this.resultsFileLocalPath = null;
  this.resultsFileUrl = null;
  this.numOfEntries = null;
  this.filePath = null;
};
util.inherits(KalturaBulkUploadJobData, KalturaJobData);


/**
 * @param  srcFileSyncLocalPath  string    .
 * @param  actualSrcFileSyncLocalPath  string    The translated path as used by the scheduler.
 * @param  srcFileSyncRemoteUrl  string    .
 * @param  thumbParamsOutputId  int    .
 * @param  thumbParamsOutput  KalturaThumbParamsOutput    .
 * @param  thumbAssetId  string    .
 * @param  srcAssetType  string    .
 * @param  thumbPath  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCaptureThumbJobData = module.exports.KalturaCaptureThumbJobData = function(){
  this.srcFileSyncLocalPath = null;
  this.actualSrcFileSyncLocalPath = null;
  this.srcFileSyncRemoteUrl = null;
  this.thumbParamsOutputId = null;
  this.thumbParamsOutput = null;
  this.thumbAssetId = null;
  this.srcAssetType = null;
  this.thumbPath = null;
};
util.inherits(KalturaCaptureThumbJobData, KalturaJobData);


/**
 * @param  srcFileSyncLocalPath  string    .
 * @param  actualSrcFileSyncLocalPath  string    The translated path as used by the scheduler.
 * @param  srcFileSyncRemoteUrl  string    .
 * @param  engineVersion  int    .
 * @param  flavorParamsOutputId  int    .
 * @param  flavorParamsOutput  KalturaFlavorParamsOutput    .
 * @param  mediaInfoId  int    .
 * @param  currentOperationSet  int    .
 * @param  currentOperationIndex  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConvartableJobData = module.exports.KalturaConvartableJobData = function(){
  this.srcFileSyncLocalPath = null;
  this.actualSrcFileSyncLocalPath = null;
  this.srcFileSyncRemoteUrl = null;
  this.engineVersion = null;
  this.flavorParamsOutputId = null;
  this.flavorParamsOutput = null;
  this.mediaInfoId = null;
  this.currentOperationSet = null;
  this.currentOperationIndex = null;
};
util.inherits(KalturaConvartableJobData, KalturaJobData);


/**
 * @param  destDirLocalPath  string    .
 * @param  destDirRemoteUrl  string    .
 * @param  destFileName  string    .
 * @param  inputXmlLocalPath  string    .
 * @param  inputXmlRemoteUrl  string    .
 * @param  commandLinesStr  string    .
 * @param  flavors  array    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConvertCollectionJobData = module.exports.KalturaConvertCollectionJobData = function(){
  this.destDirLocalPath = null;
  this.destDirRemoteUrl = null;
  this.destFileName = null;
  this.inputXmlLocalPath = null;
  this.inputXmlRemoteUrl = null;
  this.commandLinesStr = null;
  this.flavors = null;
};
util.inherits(KalturaConvertCollectionJobData, KalturaConvartableJobData);


/**
 * @param  destFileSyncLocalPath  string    .
 * @param  destFileSyncRemoteUrl  string    .
 * @param  logFileSyncLocalPath  string    .
 * @param  flavorAssetId  string    .
 * @param  remoteMediaId  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConvertJobData = module.exports.KalturaConvertJobData = function(){
  this.destFileSyncLocalPath = null;
  this.destFileSyncRemoteUrl = null;
  this.logFileSyncLocalPath = null;
  this.flavorAssetId = null;
  this.remoteMediaId = null;
};
util.inherits(KalturaConvertJobData, KalturaConvartableJobData);


/**
 * @param  inputFileSyncLocalPath  string    .
 * @param  thumbHeight  int    The height of last created thumbnail, will be used to comapare if this thumbnail is the best we can have
 *  .
 * @param  thumbBitrate  int    The bit rate of last created thumbnail, will be used to comapare if this thumbnail is the best we can have
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConvertProfileJobData = module.exports.KalturaConvertProfileJobData = function(){
  this.inputFileSyncLocalPath = null;
  this.thumbHeight = null;
  this.thumbBitrate = null;
};
util.inherits(KalturaConvertProfileJobData, KalturaJobData);


/**
 * @param  flavorAssetId  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaExtractMediaJobData = module.exports.KalturaExtractMediaJobData = function(){
  this.flavorAssetId = null;
};
util.inherits(KalturaExtractMediaJobData, KalturaConvartableJobData);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFlattenJobData = module.exports.KalturaFlattenJobData = function(){
};
util.inherits(KalturaFlattenJobData, KalturaJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileLocalPath  string    .
 * @param  flavorAssetId  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaImportJobData = module.exports.KalturaImportJobData = function(){
  this.srcFileUrl = null;
  this.destFileLocalPath = null;
  this.flavorAssetId = null;
};
util.inherits(KalturaImportJobData, KalturaJobData);


/**
 * @param  mailType  int    .
 * @param  mailPriority  int    .
 * @param  status  int    .
 * @param  recipientName  string    .
 * @param  recipientEmail  string    .
 * @param  recipientId  int    kuserId  .
 * @param  fromName  string    .
 * @param  fromEmail  string    .
 * @param  bodyParams  string    .
 * @param  subjectParams  string    .
 * @param  templatePath  string    .
 * @param  culture  int    .
 * @param  campaignId  int    .
 * @param  minSendDate  int    .
 * @param  isHtml  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaMailJobData = module.exports.KalturaMailJobData = function(){
  this.mailType = null;
  this.mailPriority = null;
  this.status = null;
  this.recipientName = null;
  this.recipientEmail = null;
  this.recipientId = null;
  this.fromName = null;
  this.fromEmail = null;
  this.bodyParams = null;
  this.subjectParams = null;
  this.templatePath = null;
  this.culture = null;
  this.campaignId = null;
  this.minSendDate = null;
  this.isHtml = null;
};
util.inherits(KalturaMailJobData, KalturaJobData);


/**
 * @param  userId  string    .
 * @param  type  int    .
 * @param  typeAsString  string    .
 * @param  objectId  string    .
 * @param  status  int    .
 * @param  data  string    .
 * @param  numberOfAttempts  int    .
 * @param  notificationResult  string    .
 * @param  objType  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNotificationJobData = module.exports.KalturaNotificationJobData = function(){
  this.userId = null;
  this.type = null;
  this.typeAsString = null;
  this.objectId = null;
  this.status = null;
  this.data = null;
  this.numberOfAttempts = null;
  this.notificationResult = null;
  this.objType = null;
};
util.inherits(KalturaNotificationJobData, KalturaJobData);


/**
 * @param  flavorAssetId  string    .
 * @param  createThumb  bool    Indicates if a thumbnail should be created
 *  .
 * @param  thumbPath  string    The path of the created thumbnail
 *  .
 * @param  thumbOffset  int    The position of the thumbnail in the media file
 *  .
 * @param  thumbHeight  int    The height of the movie, will be used to comapare if this thumbnail is the best we can have
 *  .
 * @param  thumbBitrate  int    The bit rate of the movie, will be used to comapare if this thumbnail is the best we can have
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPostConvertJobData = module.exports.KalturaPostConvertJobData = function(){
  this.flavorAssetId = null;
  this.createThumb = null;
  this.thumbPath = null;
  this.thumbOffset = null;
  this.thumbHeight = null;
  this.thumbBitrate = null;
};
util.inherits(KalturaPostConvertJobData, KalturaConvartableJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileLocalPath  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPullJobData = module.exports.KalturaPullJobData = function(){
  this.srcFileUrl = null;
  this.destFileLocalPath = null;
};
util.inherits(KalturaPullJobData, KalturaJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileUrl  string    Should be set by the API
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaRemoteConvertJobData = module.exports.KalturaRemoteConvertJobData = function(){
  this.srcFileUrl = null;
  this.destFileUrl = null;
};
util.inherits(KalturaRemoteConvertJobData, KalturaConvartableJobData);


/**
 * @param  privateKey  string    .
 * @param  publicKey  string    .
 * @param  passPhrase  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSshImportJobData = module.exports.KalturaSshImportJobData = function(){
  this.privateKey = null;
  this.publicKey = null;
  this.passPhrase = null;
};
util.inherits(KalturaSshImportJobData, KalturaImportJobData);


/**
 * @param  serverUrl  string    .
 * @param  serverUsername  string    .
 * @param  serverPassword  string    .
 * @param  ftpPassiveMode  bool    .
 * @param  srcFileSyncLocalPath  string    .
 * @param  srcFileSyncId  string    .
 * @param  destFileSyncStoredPath  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStorageJobData = module.exports.KalturaStorageJobData = function(){
  this.serverUrl = null;
  this.serverUsername = null;
  this.serverPassword = null;
  this.ftpPassiveMode = null;
  this.srcFileSyncLocalPath = null;
  this.srcFileSyncId = null;
  this.destFileSyncStoredPath = null;
};
util.inherits(KalturaStorageJobData, KalturaJobData);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStorageDeleteJobData = module.exports.KalturaStorageDeleteJobData = function(){
};
util.inherits(KalturaStorageDeleteJobData, KalturaStorageJobData);


/**
 * @param  force  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaStorageExportJobData = module.exports.KalturaStorageExportJobData = function(){
  this.force = null;
};
util.inherits(KalturaStorageExportJobData, KalturaStorageJobData);


/**
 * @param  csvVersion  int    The version of the csv file
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBulkUploadCsvJobData = module.exports.KalturaBulkUploadCsvJobData = function(){
  this.csvVersion = null;
};
util.inherits(KalturaBulkUploadCsvJobData, KalturaBulkUploadJobData);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaBulkUploadXmlJobData = module.exports.KalturaBulkUploadXmlJobData = function(){
};
util.inherits(KalturaBulkUploadXmlJobData, KalturaBulkUploadJobData);


/**
 * @param  captionAssetId  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaParseCaptionAssetJobData = module.exports.KalturaParseCaptionAssetJobData = function(){
  this.captionAssetId = null;
};
util.inherits(KalturaParseCaptionAssetJobData, KalturaJobData);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionJobProviderData = module.exports.KalturaDistributionJobProviderData = function(){
};
util.inherits(KalturaDistributionJobProviderData, kcb.KalturaObjectBase);


/**
 * @param  version  string    .
 * @param  assetId  string    .
 * @param  remoteId  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionRemoteMediaFile = module.exports.KalturaDistributionRemoteMediaFile = function(){
  this.version = null;
  this.assetId = null;
  this.remoteId = null;
};
util.inherits(KalturaDistributionRemoteMediaFile, kcb.KalturaObjectBase);


/**
 * @param  distributionProfileId  int    .
 * @param  distributionProfile  KalturaDistributionProfile    .
 * @param  entryDistributionId  int    .
 * @param  entryDistribution  KalturaEntryDistribution    .
 * @param  remoteId  string    Id of the media in the remote system.
 * @param  providerType  string    .
 * @param  providerData  KalturaDistributionJobProviderData    Additional data that relevant for the provider only.
 * @param  results  string    The results as returned from the remote destination.
 * @param  sentData  string    The data as sent to the remote destination.
 * @param  mediaFiles  array    Stores array of media files that submitted to the destination site
 *  Could be used later for media update .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionJobData = module.exports.KalturaDistributionJobData = function(){
  this.distributionProfileId = null;
  this.distributionProfile = null;
  this.entryDistributionId = null;
  this.entryDistribution = null;
  this.remoteId = null;
  this.providerType = null;
  this.providerData = null;
  this.results = null;
  this.sentData = null;
  this.mediaFiles = null;
};
util.inherits(KalturaDistributionJobData, KalturaJobData);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionDeleteJobData = module.exports.KalturaDistributionDeleteJobData = function(){
};
util.inherits(KalturaDistributionDeleteJobData, KalturaDistributionJobData);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionUpdateJobData = module.exports.KalturaDistributionUpdateJobData = function(){
};
util.inherits(KalturaDistributionUpdateJobData, KalturaDistributionJobData);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionDisableJobData = module.exports.KalturaDistributionDisableJobData = function(){
};
util.inherits(KalturaDistributionDisableJobData, KalturaDistributionUpdateJobData);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionEnableJobData = module.exports.KalturaDistributionEnableJobData = function(){
};
util.inherits(KalturaDistributionEnableJobData, KalturaDistributionUpdateJobData);


/**
 * @param  plays  int    .
 * @param  views  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionFetchReportJobData = module.exports.KalturaDistributionFetchReportJobData = function(){
  this.plays = null;
  this.views = null;
};
util.inherits(KalturaDistributionFetchReportJobData, KalturaDistributionJobData);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionSubmitJobData = module.exports.KalturaDistributionSubmitJobData = function(){
};
util.inherits(KalturaDistributionSubmitJobData, KalturaDistributionJobData);


/**
 * @param  dropFolderFileId  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderImportJobData = module.exports.KalturaDropFolderImportJobData = function(){
  this.dropFolderFileId = null;
};
util.inherits(KalturaDropFolderImportJobData, KalturaSshImportJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileLocalPath  string    .
 * @param  metadataId  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaImportMetadataJobData = module.exports.KalturaImportMetadataJobData = function(){
  this.srcFileUrl = null;
  this.destFileLocalPath = null;
  this.metadataId = null;
};
util.inherits(KalturaImportMetadataJobData, KalturaJobData);


/**
 * @param  srcXslPath  string    .
 * @param  srcVersion  int    .
 * @param  destVersion  int    .
 * @param  destXsdPath  string    .
 * @param  metadataProfileId  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTransformMetadataJobData = module.exports.KalturaTransformMetadataJobData = function(){
  this.srcXslPath = null;
  this.srcVersion = null;
  this.destVersion = null;
  this.destXsdPath = null;
  this.metadataProfileId = null;
};
util.inherits(KalturaTransformMetadataJobData, KalturaJobData);


/**
 * @param  sourceUrl  string    .
 * @param  filesyncId  string    .
 * @param  tmpFilePath  string    .
 * @param  destFilePath  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFileSyncImportJobData = module.exports.KalturaFileSyncImportJobData = function(){
  this.sourceUrl = null;
  this.filesyncId = null;
  this.tmpFilePath = null;
  this.destFilePath = null;
};
util.inherits(KalturaFileSyncImportJobData, KalturaJobData);


/**
 * @param  srcFilePath  string    .
 * @param  flavorAssetId  string    .
 * @param  scanResult  int    .
 * @param  virusFoundAction  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVirusScanJobData = module.exports.KalturaVirusScanJobData = function(){
  this.srcFilePath = null;
  this.flavorAssetId = null;
  this.scanResult = null;
  this.virusFoundAction = null;
};
util.inherits(KalturaVirusScanJobData, KalturaJobData);


/**
 * @param  descriptor  string    .
 * @param  oldValue  string    .
 * @param  newValue  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAuditTrailChangeItem = module.exports.KalturaAuditTrailChangeItem = function(){
  this.descriptor = null;
  this.oldValue = null;
  this.newValue = null;
};
util.inherits(KalturaAuditTrailChangeItem, kcb.KalturaObjectBase);


/**
 * @param  changedItems  array    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAuditTrailChangeInfo = module.exports.KalturaAuditTrailChangeInfo = function(){
  this.changedItems = null;
};
util.inherits(KalturaAuditTrailChangeInfo, KalturaAuditTrailInfo);


/**
 * @param  version  string    .
 * @param  objectSubType  int    .
 * @param  dc  int    .
 * @param  original  bool    .
 * @param  fileType  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAuditTrailFileSyncCreateInfo = module.exports.KalturaAuditTrailFileSyncCreateInfo = function(){
  this.version = null;
  this.objectSubType = null;
  this.dc = null;
  this.original = null;
  this.fileType = null;
};
util.inherits(KalturaAuditTrailFileSyncCreateInfo, KalturaAuditTrailInfo);


/**
 * @param  info  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAuditTrailTextInfo = module.exports.KalturaAuditTrailTextInfo = function(){
  this.info = null;
};
util.inherits(KalturaAuditTrailTextInfo, KalturaAuditTrailInfo);


/**
 * @param  fieldName  string    A value taken from a connector field enum which associates the current configuration to that connector field
 *  Field enum class should be returned by the provider's getFieldEnumClass function..
 * @param  userFriendlyFieldName  string    A string that will be shown to the user as the field name in error messages related to the current field.
 * @param  entryMrssXslt  string    An XSLT string that extracts the right value from the Kaltura entry MRSS XML.
 *  The value of the current connector field will be the one that is returned from transforming the Kaltura entry MRSS XML using this XSLT string..
 * @param  isRequired  int    Is the field required to have a value for submission ?.
 * @param  updateOnChange  bool    Trigger distribution update when this field changes or not ?.
 * @param  updateParams  array    Entry column or metadata xpath that should trigger an update
 *  TODO: find a better solution for this.
 * @param  isDefault  bool    Is this field config is the default for the distribution provider? (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionFieldConfig = module.exports.KalturaDistributionFieldConfig = function(){
  this.fieldName = null;
  this.userFriendlyFieldName = null;
  this.entryMrssXslt = null;
  this.isRequired = null;
  this.updateOnChange = null;
  this.updateParams = null;
  this.isDefault = null;
};
util.inherits(KalturaDistributionFieldConfig, kcb.KalturaObjectBase);


/**
 * @param  fieldConfigArray  array    .
 * @param  itemXpathsToExtend  array    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaConfigurableDistributionProfile = module.exports.KalturaConfigurableDistributionProfile = function(){
  this.fieldConfigArray = null;
  this.itemXpathsToExtend = null;
};
util.inherits(KalturaConfigurableDistributionProfile, KalturaDistributionProfile);


/**
 * @param  protocol  int    .
 * @param  serverUrl  string    .
 * @param  serverPath  string    .
 * @param  username  string    .
 * @param  password  string    .
 * @param  ftpPassiveMode  bool    .
 * @param  httpFieldName  string    .
 * @param  httpFileName  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProfileAction = module.exports.KalturaGenericDistributionProfileAction = function(){
  this.protocol = null;
  this.serverUrl = null;
  this.serverPath = null;
  this.username = null;
  this.password = null;
  this.ftpPassiveMode = null;
  this.httpFieldName = null;
  this.httpFileName = null;
};
util.inherits(KalturaGenericDistributionProfileAction, kcb.KalturaObjectBase);


/**
 * @param  genericProviderId  int     (insertOnly).
 * @param  submitAction  KalturaGenericDistributionProfileAction    .
 * @param  updateAction  KalturaGenericDistributionProfileAction    .
 * @param  deleteAction  KalturaGenericDistributionProfileAction    .
 * @param  fetchReportAction  KalturaGenericDistributionProfileAction    .
 * @param  updateRequiredEntryFields  string    .
 * @param  updateRequiredMetadataXPaths  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaGenericDistributionProfile = module.exports.KalturaGenericDistributionProfile = function(){
  this.genericProviderId = null;
  this.submitAction = null;
  this.updateAction = null;
  this.deleteAction = null;
  this.fetchReportAction = null;
  this.updateRequiredEntryFields = null;
  this.updateRequiredMetadataXPaths = null;
};
util.inherits(KalturaGenericDistributionProfile, KalturaDistributionProfile);


/**
 * @param  xsl  string    .
 * @param  feedId  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSyndicationDistributionProfile = module.exports.KalturaSyndicationDistributionProfile = function(){
  this.xsl = null;
  this.feedId = null;
};
util.inherits(KalturaSyndicationDistributionProfile, KalturaDistributionProfile);


/**
 * @param  feedUrl  string     (readOnly).
 * @param  feedTitle  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAvnDistributionProfile = module.exports.KalturaAvnDistributionProfile = function(){
  this.feedUrl = null;
  this.feedTitle = null;
};
util.inherits(KalturaAvnDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  metadataProfileId  int    .
 * @param  feedUrl  string     (readOnly).
 * @param  feedTitle  string    .
 * @param  feedLink  string    .
 * @param  feedDescription  string    .
 * @param  feedLastBuildDate  string    .
 * @param  itemLink  string    .
 * @param  cPlatformTvSeries  array    .
 * @param  cPlatformTvSeriesField  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaComcastMrssDistributionProfile = module.exports.KalturaComcastMrssDistributionProfile = function(){
  this.metadataProfileId = null;
  this.feedUrl = null;
  this.feedTitle = null;
  this.feedLink = null;
  this.feedDescription = null;
  this.feedLastBuildDate = null;
  this.itemLink = null;
  this.cPlatformTvSeries = null;
  this.cPlatformTvSeriesField = null;
};
util.inherits(KalturaComcastMrssDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  user  string    .
 * @param  password  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDailymotionDistributionProfile = module.exports.KalturaDailymotionDistributionProfile = function(){
  this.user = null;
  this.password = null;
};
util.inherits(KalturaDailymotionDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  channelTitle  string    .
 * @param  channelLink  string    .
 * @param  channelDescription  string    .
 * @param  feedUrl  string     (readOnly).
 * @param  cuePointsProvider  string    .
 * @param  itemsPerPage  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDoubleClickDistributionProfile = module.exports.KalturaDoubleClickDistributionProfile = function(){
  this.channelTitle = null;
  this.channelLink = null;
  this.channelDescription = null;
  this.feedUrl = null;
  this.cuePointsProvider = null;
  this.itemsPerPage = null;
};
util.inherits(KalturaDoubleClickDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  username  string    .
 * @param  password  string    .
 * @param  accountId  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaExampleDistributionProfile = module.exports.KalturaExampleDistributionProfile = function(){
  this.username = null;
  this.password = null;
  this.accountId = null;
};
util.inherits(KalturaExampleDistributionProfile, KalturaDistributionProfile);


/**
 * @param  apikey  string    .
 * @param  email  string    .
 * @param  sftpPass  string    .
 * @param  sftpLogin  string    .
 * @param  accountId  string    .
 * @param  metadataProfileId  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelDistributionProfile = module.exports.KalturaFreewheelDistributionProfile = function(){
  this.apikey = null;
  this.email = null;
  this.sftpPass = null;
  this.sftpLogin = null;
  this.accountId = null;
  this.metadataProfileId = null;
};
util.inherits(KalturaFreewheelDistributionProfile, KalturaDistributionProfile);


/**
 * @param  apikey  string    .
 * @param  email  string    .
 * @param  sftpPass  string    .
 * @param  sftpLogin  string    .
 * @param  contentOwner  string    .
 * @param  upstreamVideoId  string    .
 * @param  upstreamNetworkName  string    .
 * @param  upstreamNetworkId  string    .
 * @param  categoryId  string    .
 * @param  replaceGroup  bool    .
 * @param  replaceAirDates  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelGenericDistributionProfile = module.exports.KalturaFreewheelGenericDistributionProfile = function(){
  this.apikey = null;
  this.email = null;
  this.sftpPass = null;
  this.sftpLogin = null;
  this.contentOwner = null;
  this.upstreamVideoId = null;
  this.upstreamNetworkName = null;
  this.upstreamNetworkId = null;
  this.categoryId = null;
  this.replaceGroup = null;
  this.replaceAirDates = null;
};
util.inherits(KalturaFreewheelGenericDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  sftpHost  string    .
 * @param  sftpLogin  string    .
 * @param  sftpPass  string    .
 * @param  seriesChannel  string    .
 * @param  seriesPrimaryCategory  string    .
 * @param  seriesAdditionalCategories  array    .
 * @param  seasonNumber  string    .
 * @param  seasonSynopsis  string    .
 * @param  seasonTuneInInformation  string    .
 * @param  videoMediaType  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaHuluDistributionProfile = module.exports.KalturaHuluDistributionProfile = function(){
  this.sftpHost = null;
  this.sftpLogin = null;
  this.sftpPass = null;
  this.seriesChannel = null;
  this.seriesPrimaryCategory = null;
  this.seriesAdditionalCategories = null;
  this.seasonNumber = null;
  this.seasonSynopsis = null;
  this.seasonTuneInInformation = null;
  this.videoMediaType = null;
};
util.inherits(KalturaHuluDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  ftpPath  string    .
 * @param  username  string    .
 * @param  password  string    .
 * @param  domain  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaIdeticDistributionProfile = module.exports.KalturaIdeticDistributionProfile = function(){
  this.ftpPath = null;
  this.username = null;
  this.password = null;
  this.domain = null;
};
util.inherits(KalturaIdeticDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  feedUrl  string     (readOnly).
 * @param  channelTitle  string    .
 * @param  channelLink  string    .
 * @param  channelDescription  string    .
 * @param  channelLanguage  string    .
 * @param  channelCopyright  string    .
 * @param  channelImageTitle  string    .
 * @param  channelImageUrl  string    .
 * @param  channelImageLink  string    .
 * @param  itemMediaRating  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNdnDistributionProfile = module.exports.KalturaNdnDistributionProfile = function(){
  this.feedUrl = null;
  this.channelTitle = null;
  this.channelLink = null;
  this.channelDescription = null;
  this.channelLanguage = null;
  this.channelCopyright = null;
  this.channelImageTitle = null;
  this.channelImageUrl = null;
  this.channelImageLink = null;
  this.itemMediaRating = null;
};
util.inherits(KalturaNdnDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  xsl  string    .
 * @param  feedId  string     (readOnly).
 * @param  metadataProfileId  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPodcastDistributionProfile = module.exports.KalturaPodcastDistributionProfile = function(){
  this.xsl = null;
  this.feedId = null;
  this.metadataProfileId = null;
};
util.inherits(KalturaPodcastDistributionProfile, KalturaDistributionProfile);


/**
 * @param  feedUrl  string     (readOnly).
 * @param  feedTitle  string    .
 * @param  feedSubtitle  string    .
 * @param  feedLink  string    .
 * @param  feedAuthorName  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSynacorHboDistributionProfile = module.exports.KalturaSynacorHboDistributionProfile = function(){
  this.feedUrl = null;
  this.feedTitle = null;
  this.feedSubtitle = null;
  this.feedLink = null;
  this.feedAuthorName = null;
};
util.inherits(KalturaSynacorHboDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  feedUrl  string     (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTimeWarnerDistributionProfile = module.exports.KalturaTimeWarnerDistributionProfile = function(){
  this.feedUrl = null;
};
util.inherits(KalturaTimeWarnerDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  metadataProfileId  int    .
 * @param  feedUrl  string     (readOnly).
 * @param  feedTitle  string    .
 * @param  feedLink  string    .
 * @param  feedDescription  string    .
 * @param  feedLanguage  string    .
 * @param  feedCopyright  string    .
 * @param  feedImageTitle  string    .
 * @param  feedImageUrl  string    .
 * @param  feedImageLink  string    .
 * @param  feedImageWidth  int    .
 * @param  feedImageHeight  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTVComDistributionProfile = module.exports.KalturaTVComDistributionProfile = function(){
  this.metadataProfileId = null;
  this.feedUrl = null;
  this.feedTitle = null;
  this.feedLink = null;
  this.feedDescription = null;
  this.feedLanguage = null;
  this.feedCopyright = null;
  this.feedImageTitle = null;
  this.feedImageUrl = null;
  this.feedImageLink = null;
  this.feedImageWidth = null;
  this.feedImageHeight = null;
};
util.inherits(KalturaTVComDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  feedUrl  string     (readOnly).
 * @param  channelTitle  string    .
 * @param  channelLink  string    .
 * @param  channelDescription  string    .
 * @param  channelLanguage  string    .
 * @param  channelCopyright  string    .
 * @param  channelImageTitle  string    .
 * @param  channelImageUrl  string    .
 * @param  channelImageLink  string    .
 * @param  ftpHost  string    .
 * @param  ftpLogin  string    .
 * @param  ftpPassword  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUverseDistributionProfile = module.exports.KalturaUverseDistributionProfile = function(){
  this.feedUrl = null;
  this.channelTitle = null;
  this.channelLink = null;
  this.channelDescription = null;
  this.channelLanguage = null;
  this.channelCopyright = null;
  this.channelImageTitle = null;
  this.channelImageUrl = null;
  this.channelImageLink = null;
  this.ftpHost = null;
  this.ftpLogin = null;
  this.ftpPassword = null;
};
util.inherits(KalturaUverseDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  ftpHost  string    .
 * @param  ftpLogin  string    .
 * @param  ftpPass  string    .
 * @param  providerName  string    .
 * @param  providerId  string    .
 * @param  entitlement  string    .
 * @param  priority  string    .
 * @param  allowStreaming  string    .
 * @param  streamingPriceCode  string    .
 * @param  allowDownload  string    .
 * @param  downloadPriceCode  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVerizonVcastDistributionProfile = module.exports.KalturaVerizonVcastDistributionProfile = function(){
  this.ftpHost = null;
  this.ftpLogin = null;
  this.ftpPass = null;
  this.providerName = null;
  this.providerId = null;
  this.entitlement = null;
  this.priority = null;
  this.allowStreaming = null;
  this.streamingPriceCode = null;
  this.allowDownload = null;
  this.downloadPriceCode = null;
};
util.inherits(KalturaVerizonVcastDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  ftpPath  string    .
 * @param  ftpUsername  string    .
 * @param  ftpPassword  string    .
 * @param  ftpHost  string    .
 * @param  contactTelephone  string    .
 * @param  contactEmail  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYahooDistributionProfile = module.exports.KalturaYahooDistributionProfile = function(){
  this.ftpPath = null;
  this.ftpUsername = null;
  this.ftpPassword = null;
  this.ftpHost = null;
  this.contactTelephone = null;
  this.contactEmail = null;
};
util.inherits(KalturaYahooDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  username  string    .
 * @param  notificationEmail  string    .
 * @param  sftpHost  string    .
 * @param  sftpLogin  string    .
 * @param  sftpPublicKey  string    .
 * @param  sftpPrivateKey  string    .
 * @param  sftpBaseDir  string    .
 * @param  ownerName  string    .
 * @param  defaultCategory  string    .
 * @param  allowComments  string    .
 * @param  allowEmbedding  string    .
 * @param  allowRatings  string    .
 * @param  allowResponses  string    .
 * @param  commercialPolicy  string    .
 * @param  ugcPolicy  string    .
 * @param  target  string    .
 * @param  adServerPartnerId  string    .
 * @param  enableAdServer  bool    .
 * @param  allowPreRollAds  bool    .
 * @param  allowPostRollAds  bool    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYouTubeDistributionProfile = module.exports.KalturaYouTubeDistributionProfile = function(){
  this.username = null;
  this.notificationEmail = null;
  this.sftpHost = null;
  this.sftpLogin = null;
  this.sftpPublicKey = null;
  this.sftpPrivateKey = null;
  this.sftpBaseDir = null;
  this.ownerName = null;
  this.defaultCategory = null;
  this.allowComments = null;
  this.allowEmbedding = null;
  this.allowRatings = null;
  this.allowResponses = null;
  this.commercialPolicy = null;
  this.ugcPolicy = null;
  this.target = null;
  this.adServerPartnerId = null;
  this.enableAdServer = null;
  this.allowPreRollAds = null;
  this.allowPostRollAds = null;
};
util.inherits(KalturaYouTubeDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  username  string    .
 * @param  password  string    .
 * @param  defaultCategory  string    .
 * @param  allowComments  string    .
 * @param  allowEmbedding  string    .
 * @param  allowRatings  string    .
 * @param  allowResponses  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYoutubeApiDistributionProfile = module.exports.KalturaYoutubeApiDistributionProfile = function(){
  this.username = null;
  this.password = null;
  this.defaultCategory = null;
  this.allowComments = null;
  this.allowEmbedding = null;
  this.allowRatings = null;
  this.allowResponses = null;
};
util.inherits(KalturaYoutubeApiDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  fieldName  string    .
 * @param  validationErrorType  int    .
 * @param  validationErrorParam  string    Parameter of the validation error
 *  For example, minimum value for KalturaDistributionValidationErrorType::STRING_TOO_SHORT validation error.
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionValidationErrorInvalidData = module.exports.KalturaDistributionValidationErrorInvalidData = function(){
  this.fieldName = null;
  this.validationErrorType = null;
  this.validationErrorParam = null;
};
util.inherits(KalturaDistributionValidationErrorInvalidData, KalturaDistributionValidationError);


/**
 * @param  metadataProfileId  int    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionValidationErrorInvalidMetadata = module.exports.KalturaDistributionValidationErrorInvalidMetadata = function(){
  this.metadataProfileId = null;
};
util.inherits(KalturaDistributionValidationErrorInvalidMetadata, KalturaDistributionValidationErrorInvalidData);


/**
 * @param  flavorParamsId  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionValidationErrorMissingFlavor = module.exports.KalturaDistributionValidationErrorMissingFlavor = function(){
  this.flavorParamsId = null;
};
util.inherits(KalturaDistributionValidationErrorMissingFlavor, KalturaDistributionValidationError);


/**
 * @param  fieldName  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionValidationErrorMissingMetadata = module.exports.KalturaDistributionValidationErrorMissingMetadata = function(){
  this.fieldName = null;
};
util.inherits(KalturaDistributionValidationErrorMissingMetadata, KalturaDistributionValidationError);


/**
 * @param  dimensions  KalturaDistributionThumbDimensions    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDistributionValidationErrorMissingThumbnail = module.exports.KalturaDistributionValidationErrorMissingThumbnail = function(){
  this.dimensions = null;
};
util.inherits(KalturaDistributionValidationErrorMissingThumbnail, KalturaDistributionValidationError);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSyndicationDistributionProvider = module.exports.KalturaSyndicationDistributionProvider = function(){
};
util.inherits(KalturaSyndicationDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAvnDistributionProvider = module.exports.KalturaAvnDistributionProvider = function(){
};
util.inherits(KalturaAvnDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaComcastMrssDistributionProvider = module.exports.KalturaComcastMrssDistributionProvider = function(){
};
util.inherits(KalturaComcastMrssDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDailymotionDistributionProvider = module.exports.KalturaDailymotionDistributionProvider = function(){
};
util.inherits(KalturaDailymotionDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDoubleClickDistributionProvider = module.exports.KalturaDoubleClickDistributionProvider = function(){
};
util.inherits(KalturaDoubleClickDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaExampleDistributionProvider = module.exports.KalturaExampleDistributionProvider = function(){
};
util.inherits(KalturaExampleDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelDistributionProvider = module.exports.KalturaFreewheelDistributionProvider = function(){
};
util.inherits(KalturaFreewheelDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFreewheelGenericDistributionProvider = module.exports.KalturaFreewheelGenericDistributionProvider = function(){
};
util.inherits(KalturaFreewheelGenericDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaHuluDistributionProvider = module.exports.KalturaHuluDistributionProvider = function(){
};
util.inherits(KalturaHuluDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaIdeticDistributionProvider = module.exports.KalturaIdeticDistributionProvider = function(){
};
util.inherits(KalturaIdeticDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaNdnDistributionProvider = module.exports.KalturaNdnDistributionProvider = function(){
};
util.inherits(KalturaNdnDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaPodcastDistributionProvider = module.exports.KalturaPodcastDistributionProvider = function(){
};
util.inherits(KalturaPodcastDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSynacorHboDistributionProvider = module.exports.KalturaSynacorHboDistributionProvider = function(){
};
util.inherits(KalturaSynacorHboDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTimeWarnerDistributionProvider = module.exports.KalturaTimeWarnerDistributionProvider = function(){
};
util.inherits(KalturaTimeWarnerDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaTVComDistributionProvider = module.exports.KalturaTVComDistributionProvider = function(){
};
util.inherits(KalturaTVComDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaUverseDistributionProvider = module.exports.KalturaUverseDistributionProvider = function(){
};
util.inherits(KalturaUverseDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaVerizonVcastDistributionProvider = module.exports.KalturaVerizonVcastDistributionProvider = function(){
};
util.inherits(KalturaVerizonVcastDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYahooDistributionProvider = module.exports.KalturaYahooDistributionProvider = function(){
};
util.inherits(KalturaYahooDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYouTubeDistributionProvider = module.exports.KalturaYouTubeDistributionProvider = function(){
};
util.inherits(KalturaYouTubeDistributionProvider, KalturaDistributionProvider);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaYoutubeApiDistributionProvider = module.exports.KalturaYoutubeApiDistributionProvider = function(){
};
util.inherits(KalturaYoutubeApiDistributionProvider, KalturaDistributionProvider);


/**
 * @param  protocolType  string     (insertOnly).
 * @param  sourceUrl  string    .
 * @param  adType  string    .
 * @param  title  string    .
 * @param  endTime  int    .
 * @param  duration  int    Duration in milliseconds (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAdCuePoint = module.exports.KalturaAdCuePoint = function(){
  this.protocolType = null;
  this.sourceUrl = null;
  this.adType = null;
  this.title = null;
  this.endTime = null;
  this.duration = null;
};
util.inherits(KalturaAdCuePoint, KalturaCuePoint);


/**
 * @param  parentId  string     (insertOnly).
 * @param  text  string    .
 * @param  endTime  int    End time in milliseconds.
 * @param  duration  int    Duration in milliseconds (readOnly).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaAnnotation = module.exports.KalturaAnnotation = function(){
  this.parentId = null;
  this.text = null;
  this.endTime = null;
  this.duration = null;
};
util.inherits(KalturaAnnotation, KalturaCuePoint);


/**
 * @param  code  string    .
 * @param  description  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaCodeCuePoint = module.exports.KalturaCodeCuePoint = function(){
  this.code = null;
  this.description = null;
};
util.inherits(KalturaCodeCuePoint, KalturaCuePoint);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderXmlBulkUploadFileHandlerConfig = module.exports.KalturaDropFolderXmlBulkUploadFileHandlerConfig = function(){
};
util.inherits(KalturaDropFolderXmlBulkUploadFileHandlerConfig, KalturaDropFolderFileHandlerConfig);


/**
 * @param  contentMatchPolicy  int    .
 * @param  slugRegex  string    Regular expression that defines valid file names to be handled.
 *  The following might be extracted from the file name and used if defined:
 *  - (?P<referenceId>\w+) - will be used as the drop folder file's parsed slug.
 *  - (?P<flavorName>\w+)  - will be used as the drop folder file's parsed flavor.
 *  .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaDropFolderContentFileHandlerConfig = module.exports.KalturaDropFolderContentFileHandlerConfig = function(){
  this.contentMatchPolicy = null;
  this.slugRegex = null;
};
util.inherits(KalturaDropFolderContentFileHandlerConfig, KalturaDropFolderFileHandlerConfig);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaRemoteDropFolder = module.exports.KalturaRemoteDropFolder = function(){
};
util.inherits(KalturaRemoteDropFolder, KalturaDropFolder);


/**
 * @param  host  string    .
 * @param  port  int    .
 * @param  username  string    .
 * @param  password  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaFtpDropFolder = module.exports.KalturaFtpDropFolder = function(){
  this.host = null;
  this.port = null;
  this.username = null;
  this.password = null;
};
util.inherits(KalturaFtpDropFolder, KalturaRemoteDropFolder);


/**
 * @param  host  string    .
 * @param  port  int    .
 * @param  username  string    .
 * @param  password  string    .
 * @param  privateKey  string    .
 * @param  publicKey  string    .
 * @param  passPhrase  string    .
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSshDropFolder = module.exports.KalturaSshDropFolder = function(){
  this.host = null;
  this.port = null;
  this.username = null;
  this.password = null;
  this.privateKey = null;
  this.publicKey = null;
  this.passPhrase = null;
};
util.inherits(KalturaSshDropFolder, KalturaRemoteDropFolder);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaScpDropFolder = module.exports.KalturaScpDropFolder = function(){
};
util.inherits(KalturaScpDropFolder, KalturaSshDropFolder);


/**
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var KalturaSftpDropFolder = module.exports.KalturaSftpDropFolder = function(){
};
util.inherits(KalturaSftpDropFolder, KalturaSshDropFolder);


