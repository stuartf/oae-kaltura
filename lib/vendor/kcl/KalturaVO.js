var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 */
var KalturaBaseRestriction = module.exports.KalturaBaseRestriction = function(){
KalturaBaseRestriction.super_.call(this);
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
var KalturaAccessControl = module.exports.KalturaAccessControl = function(){
KalturaAccessControl.super_.call(this);
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
var KalturaSearchItem = module.exports.KalturaSearchItem = function(){
KalturaSearchItem.super_.call(this);
};
util.inherits(KalturaSearchItem, kcb.KalturaObjectBase);


/**
 * @param  orderBy  string    .
 * @param  advancedSearch  KalturaSearchItem    .
 */
var KalturaFilter = module.exports.KalturaFilter = function(){
KalturaFilter.super_.call(this);
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
var KalturaAccessControlBaseFilter = module.exports.KalturaAccessControlBaseFilter = function(){
KalturaAccessControlBaseFilter.super_.call(this);
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
var KalturaAccessControlFilter = module.exports.KalturaAccessControlFilter = function(){
KalturaAccessControlFilter.super_.call(this);
};
util.inherits(KalturaAccessControlFilter, KalturaAccessControlBaseFilter);


/**
 * @param  pageSize  int    The number of objects to retrieve. (Default is 30, maximum page size is 500).
 *  .
 * @param  pageIndex  int    The page number for which {pageSize} of objects should be retrieved (Default is 1).
 *  .
 */
var KalturaFilterPager = module.exports.KalturaFilterPager = function(){
KalturaFilterPager.super_.call(this);
  this.pageSize = null;
  this.pageIndex = null;
};
util.inherits(KalturaFilterPager, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaAccessControlListResponse = module.exports.KalturaAccessControlListResponse = function(){
KalturaAccessControlListResponse.super_.call(this);
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
var KalturaUser = module.exports.KalturaUser = function(){
KalturaUser.super_.call(this);
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
var KalturaAdminUser = module.exports.KalturaAdminUser = function(){
KalturaAdminUser.super_.call(this);
};
util.inherits(KalturaAdminUser, KalturaUser);


/**
 */
var KalturaDynamicEnum = module.exports.KalturaDynamicEnum = function(){
KalturaDynamicEnum.super_.call(this);
};
util.inherits(KalturaDynamicEnum, kcb.KalturaObjectBase);


/**
 */
var KalturaOperationAttributes = module.exports.KalturaOperationAttributes = function(){
KalturaOperationAttributes.super_.call(this);
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
var KalturaBaseEntry = module.exports.KalturaBaseEntry = function(){
KalturaBaseEntry.super_.call(this);
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
var KalturaResource = module.exports.KalturaResource = function(){
KalturaResource.super_.call(this);
};
util.inherits(KalturaResource, kcb.KalturaObjectBase);


/**
 * @param  storageProfileId  int     (readOnly).
 * @param  uri  string     (readOnly).
 */
var KalturaRemotePath = module.exports.KalturaRemotePath = function(){
KalturaRemotePath.super_.call(this);
  this.storageProfileId = null;
  this.uri = null;
};
util.inherits(KalturaRemotePath, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaRemotePathListResponse = module.exports.KalturaRemotePathListResponse = function(){
KalturaRemotePathListResponse.super_.call(this);
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
var KalturaBaseEntryBaseFilter = module.exports.KalturaBaseEntryBaseFilter = function(){
KalturaBaseEntryBaseFilter.super_.call(this);
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
var KalturaBaseEntryFilter = module.exports.KalturaBaseEntryFilter = function(){
KalturaBaseEntryFilter.super_.call(this);
  this.freeText = null;
  this.isRoot = null;
};
util.inherits(KalturaBaseEntryFilter, KalturaBaseEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaBaseEntryListResponse = module.exports.KalturaBaseEntryListResponse = function(){
KalturaBaseEntryListResponse.super_.call(this);
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
var KalturaModerationFlag = module.exports.KalturaModerationFlag = function(){
KalturaModerationFlag.super_.call(this);
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
var KalturaModerationFlagListResponse = module.exports.KalturaModerationFlagListResponse = function(){
KalturaModerationFlagListResponse.super_.call(this);
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
var KalturaEntryContextDataParams = module.exports.KalturaEntryContextDataParams = function(){
KalturaEntryContextDataParams.super_.call(this);
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
var KalturaEntryContextDataResult = module.exports.KalturaEntryContextDataResult = function(){
KalturaEntryContextDataResult.super_.call(this);
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
var KalturaBulkUploadPluginData = module.exports.KalturaBulkUploadPluginData = function(){
KalturaBulkUploadPluginData.super_.call(this);
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
var KalturaBulkUploadResult = module.exports.KalturaBulkUploadResult = function(){
KalturaBulkUploadResult.super_.call(this);
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
var KalturaBulkUpload = module.exports.KalturaBulkUpload = function(){
KalturaBulkUpload.super_.call(this);
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
var KalturaBulkUploadListResponse = module.exports.KalturaBulkUploadListResponse = function(){
KalturaBulkUploadListResponse.super_.call(this);
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
var KalturaCategory = module.exports.KalturaCategory = function(){
KalturaCategory.super_.call(this);
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
var KalturaCategoryBaseFilter = module.exports.KalturaCategoryBaseFilter = function(){
KalturaCategoryBaseFilter.super_.call(this);
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
var KalturaCategoryFilter = module.exports.KalturaCategoryFilter = function(){
KalturaCategoryFilter.super_.call(this);
};
util.inherits(KalturaCategoryFilter, KalturaCategoryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaCategoryListResponse = module.exports.KalturaCategoryListResponse = function(){
KalturaCategoryListResponse.super_.call(this);
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
var KalturaConversionProfileAssetParamsBaseFilter = module.exports.KalturaConversionProfileAssetParamsBaseFilter = function(){
KalturaConversionProfileAssetParamsBaseFilter.super_.call(this);
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
var KalturaConversionProfileBaseFilter = module.exports.KalturaConversionProfileBaseFilter = function(){
KalturaConversionProfileBaseFilter.super_.call(this);
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
var KalturaConversionProfileFilter = module.exports.KalturaConversionProfileFilter = function(){
KalturaConversionProfileFilter.super_.call(this);
};
util.inherits(KalturaConversionProfileFilter, KalturaConversionProfileBaseFilter);


/**
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  isSystemDefaultEqual  int    .
 * @param  tagsEqual  string    .
 */
var KalturaAssetParamsBaseFilter = module.exports.KalturaAssetParamsBaseFilter = function(){
KalturaAssetParamsBaseFilter.super_.call(this);
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.isSystemDefaultEqual = null;
  this.tagsEqual = null;
};
util.inherits(KalturaAssetParamsBaseFilter, KalturaFilter);


/**
 */
var KalturaAssetParamsFilter = module.exports.KalturaAssetParamsFilter = function(){
KalturaAssetParamsFilter.super_.call(this);
};
util.inherits(KalturaAssetParamsFilter, KalturaAssetParamsBaseFilter);


/**
 * @param  conversionProfileIdFilter  KalturaConversionProfileFilter    .
 * @param  assetParamsIdFilter  KalturaAssetParamsFilter    .
 */
var KalturaConversionProfileAssetParamsFilter = module.exports.KalturaConversionProfileAssetParamsFilter = function(){
KalturaConversionProfileAssetParamsFilter.super_.call(this);
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
var KalturaConversionProfileAssetParams = module.exports.KalturaConversionProfileAssetParams = function(){
KalturaConversionProfileAssetParams.super_.call(this);
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
var KalturaConversionProfileAssetParamsListResponse = module.exports.KalturaConversionProfileAssetParamsListResponse = function(){
KalturaConversionProfileAssetParamsListResponse.super_.call(this);
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
var KalturaCropDimensions = module.exports.KalturaCropDimensions = function(){
KalturaCropDimensions.super_.call(this);
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
var KalturaConversionProfile = module.exports.KalturaConversionProfile = function(){
KalturaConversionProfile.super_.call(this);
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
var KalturaConversionProfileListResponse = module.exports.KalturaConversionProfileListResponse = function(){
KalturaConversionProfileListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaConversionProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  dataContent  string    The data of the entry.
 * @param  retrieveDataContentByGet  bool    indicator whether to return the object for get action with the dataContent field. (insertOnly).
 */
var KalturaDataEntry = module.exports.KalturaDataEntry = function(){
KalturaDataEntry.super_.call(this);
  this.dataContent = null;
  this.retrieveDataContentByGet = null;
};
util.inherits(KalturaDataEntry, KalturaBaseEntry);


/**
 */
var KalturaDataEntryBaseFilter = module.exports.KalturaDataEntryBaseFilter = function(){
KalturaDataEntryBaseFilter.super_.call(this);
};
util.inherits(KalturaDataEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
var KalturaDataEntryFilter = module.exports.KalturaDataEntryFilter = function(){
KalturaDataEntryFilter.super_.call(this);
};
util.inherits(KalturaDataEntryFilter, KalturaDataEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaDataListResponse = module.exports.KalturaDataListResponse = function(){
KalturaDataListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaDataListResponse, kcb.KalturaObjectBase);


/**
 * @param  documentType  int    The type of the document (insertOnly).
 * @param  assetParamsIds  string    Comma separated asset params ids that exists for this media entry
 *   (readOnly).
 */
var KalturaDocumentEntry = module.exports.KalturaDocumentEntry = function(){
KalturaDocumentEntry.super_.call(this);
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
var KalturaConversionAttribute = module.exports.KalturaConversionAttribute = function(){
KalturaConversionAttribute.super_.call(this);
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
var KalturaDocumentEntryBaseFilter = module.exports.KalturaDocumentEntryBaseFilter = function(){
KalturaDocumentEntryBaseFilter.super_.call(this);
  this.documentTypeEqual = null;
  this.documentTypeIn = null;
  this.assetParamsIdsMatchOr = null;
  this.assetParamsIdsMatchAnd = null;
};
util.inherits(KalturaDocumentEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
var KalturaDocumentEntryFilter = module.exports.KalturaDocumentEntryFilter = function(){
KalturaDocumentEntryFilter.super_.call(this);
};
util.inherits(KalturaDocumentEntryFilter, KalturaDocumentEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaDocumentListResponse = module.exports.KalturaDocumentListResponse = function(){
KalturaDocumentListResponse.super_.call(this);
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
var KalturaEmailIngestionProfile = module.exports.KalturaEmailIngestionProfile = function(){
KalturaEmailIngestionProfile.super_.call(this);
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
var KalturaPlayableEntry = module.exports.KalturaPlayableEntry = function(){
KalturaPlayableEntry.super_.call(this);
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
var KalturaMediaEntry = module.exports.KalturaMediaEntry = function(){
KalturaMediaEntry.super_.call(this);
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
var KalturaAsset = module.exports.KalturaAsset = function(){
KalturaAsset.super_.call(this);
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
var KalturaFlavorAsset = module.exports.KalturaFlavorAsset = function(){
KalturaFlavorAsset.super_.call(this);
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
var KalturaContentResource = module.exports.KalturaContentResource = function(){
KalturaContentResource.super_.call(this);
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
var KalturaAssetBaseFilter = module.exports.KalturaAssetBaseFilter = function(){
KalturaAssetBaseFilter.super_.call(this);
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
var KalturaAssetFilter = module.exports.KalturaAssetFilter = function(){
KalturaAssetFilter.super_.call(this);
};
util.inherits(KalturaAssetFilter, KalturaAssetBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaFlavorAssetListResponse = module.exports.KalturaFlavorAssetListResponse = function(){
KalturaFlavorAssetListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaFlavorAssetListResponse, kcb.KalturaObjectBase);


/**
 * @param  value  string    .
 */
var KalturaString = module.exports.KalturaString = function(){
KalturaString.super_.call(this);
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
var KalturaAssetParams = module.exports.KalturaAssetParams = function(){
KalturaAssetParams.super_.call(this);
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
var KalturaFlavorParams = module.exports.KalturaFlavorParams = function(){
KalturaFlavorParams.super_.call(this);
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
var KalturaFlavorAssetWithParams = module.exports.KalturaFlavorAssetWithParams = function(){
KalturaFlavorAssetWithParams.super_.call(this);
  this.flavorAsset = null;
  this.flavorParams = null;
  this.entryId = null;
};
util.inherits(KalturaFlavorAssetWithParams, kcb.KalturaObjectBase);


/**
 * @param  formatEqual  string    .
 */
var KalturaFlavorParamsBaseFilter = module.exports.KalturaFlavorParamsBaseFilter = function(){
KalturaFlavorParamsBaseFilter.super_.call(this);
  this.formatEqual = null;
};
util.inherits(KalturaFlavorParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
var KalturaFlavorParamsFilter = module.exports.KalturaFlavorParamsFilter = function(){
KalturaFlavorParamsFilter.super_.call(this);
};
util.inherits(KalturaFlavorParamsFilter, KalturaFlavorParamsBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaFlavorParamsListResponse = module.exports.KalturaFlavorParamsListResponse = function(){
KalturaFlavorParamsListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaFlavorParamsListResponse, kcb.KalturaObjectBase);


/**
 * @param  bitrate  int    .
 * @param  width  int    .
 * @param  height  int    .
 */
var KalturaLiveStreamBitrate = module.exports.KalturaLiveStreamBitrate = function(){
KalturaLiveStreamBitrate.super_.call(this);
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
var KalturaLiveStreamEntry = module.exports.KalturaLiveStreamEntry = function(){
KalturaLiveStreamEntry.super_.call(this);
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
var KalturaLiveStreamAdminEntry = module.exports.KalturaLiveStreamAdminEntry = function(){
KalturaLiveStreamAdminEntry.super_.call(this);
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
var KalturaPlayableEntryBaseFilter = module.exports.KalturaPlayableEntryBaseFilter = function(){
KalturaPlayableEntryBaseFilter.super_.call(this);
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
var KalturaPlayableEntryFilter = module.exports.KalturaPlayableEntryFilter = function(){
KalturaPlayableEntryFilter.super_.call(this);
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
var KalturaMediaEntryBaseFilter = module.exports.KalturaMediaEntryBaseFilter = function(){
KalturaMediaEntryBaseFilter.super_.call(this);
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
var KalturaMediaEntryFilter = module.exports.KalturaMediaEntryFilter = function(){
KalturaMediaEntryFilter.super_.call(this);
};
util.inherits(KalturaMediaEntryFilter, KalturaMediaEntryBaseFilter);


/**
 */
var KalturaLiveStreamEntryBaseFilter = module.exports.KalturaLiveStreamEntryBaseFilter = function(){
KalturaLiveStreamEntryBaseFilter.super_.call(this);
};
util.inherits(KalturaLiveStreamEntryBaseFilter, KalturaMediaEntryFilter);


/**
 */
var KalturaLiveStreamEntryFilter = module.exports.KalturaLiveStreamEntryFilter = function(){
KalturaLiveStreamEntryFilter.super_.call(this);
};
util.inherits(KalturaLiveStreamEntryFilter, KalturaLiveStreamEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaLiveStreamListResponse = module.exports.KalturaLiveStreamListResponse = function(){
KalturaLiveStreamListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaLiveStreamListResponse, kcb.KalturaObjectBase);


/**
 * @param  flavorAssetIdEqual  string    .
 */
var KalturaMediaInfoBaseFilter = module.exports.KalturaMediaInfoBaseFilter = function(){
KalturaMediaInfoBaseFilter.super_.call(this);
  this.flavorAssetIdEqual = null;
};
util.inherits(KalturaMediaInfoBaseFilter, KalturaFilter);


/**
 */
var KalturaMediaInfoFilter = module.exports.KalturaMediaInfoFilter = function(){
KalturaMediaInfoFilter.super_.call(this);
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
var KalturaMediaInfo = module.exports.KalturaMediaInfo = function(){
KalturaMediaInfo.super_.call(this);
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
var KalturaMediaInfoListResponse = module.exports.KalturaMediaInfoListResponse = function(){
KalturaMediaInfoListResponse.super_.call(this);
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
var KalturaSearch = module.exports.KalturaSearch = function(){
KalturaSearch.super_.call(this);
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
var KalturaSearchResult = module.exports.KalturaSearchResult = function(){
KalturaSearchResult.super_.call(this);
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
var KalturaMediaListResponse = module.exports.KalturaMediaListResponse = function(){
KalturaMediaListResponse.super_.call(this);
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
var KalturaMixEntry = module.exports.KalturaMixEntry = function(){
KalturaMixEntry.super_.call(this);
  this.hasRealThumbnail = null;
  this.editorType = null;
  this.dataContent = null;
};
util.inherits(KalturaMixEntry, KalturaPlayableEntry);


/**
 */
var KalturaMixEntryBaseFilter = module.exports.KalturaMixEntryBaseFilter = function(){
KalturaMixEntryBaseFilter.super_.call(this);
};
util.inherits(KalturaMixEntryBaseFilter, KalturaPlayableEntryFilter);


/**
 */
var KalturaMixEntryFilter = module.exports.KalturaMixEntryFilter = function(){
KalturaMixEntryFilter.super_.call(this);
};
util.inherits(KalturaMixEntryFilter, KalturaMixEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaMixListResponse = module.exports.KalturaMixListResponse = function(){
KalturaMixListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaMixListResponse, kcb.KalturaObjectBase);


/**
 * @param  url  string    The URL where the notification should be sent to .
 * @param  data  string    The serialized notification data to send.
 */
var KalturaClientNotification = module.exports.KalturaClientNotification = function(){
KalturaClientNotification.super_.call(this);
  this.url = null;
  this.data = null;
};
util.inherits(KalturaClientNotification, kcb.KalturaObjectBase);


/**
 * @param  key  string    .
 * @param  value  string    .
 */
var KalturaKeyValue = module.exports.KalturaKeyValue = function(){
KalturaKeyValue.super_.call(this);
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
var KalturaPartner = module.exports.KalturaPartner = function(){
KalturaPartner.super_.call(this);
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
var KalturaPartnerUsage = module.exports.KalturaPartnerUsage = function(){
KalturaPartnerUsage.super_.call(this);
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
var KalturaPermissionItem = module.exports.KalturaPermissionItem = function(){
KalturaPermissionItem.super_.call(this);
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
var KalturaPermissionItemBaseFilter = module.exports.KalturaPermissionItemBaseFilter = function(){
KalturaPermissionItemBaseFilter.super_.call(this);
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
var KalturaPermissionItemFilter = module.exports.KalturaPermissionItemFilter = function(){
KalturaPermissionItemFilter.super_.call(this);
};
util.inherits(KalturaPermissionItemFilter, KalturaPermissionItemBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaPermissionItemListResponse = module.exports.KalturaPermissionItemListResponse = function(){
KalturaPermissionItemListResponse.super_.call(this);
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
var KalturaPermission = module.exports.KalturaPermission = function(){
KalturaPermission.super_.call(this);
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
var KalturaPermissionBaseFilter = module.exports.KalturaPermissionBaseFilter = function(){
KalturaPermissionBaseFilter.super_.call(this);
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
var KalturaPermissionFilter = module.exports.KalturaPermissionFilter = function(){
KalturaPermissionFilter.super_.call(this);
};
util.inherits(KalturaPermissionFilter, KalturaPermissionBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaPermissionListResponse = module.exports.KalturaPermissionListResponse = function(){
KalturaPermissionListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaPermissionListResponse, kcb.KalturaObjectBase);


/**
 * @param  limit  int    .
 */
var KalturaMediaEntryFilterForPlaylist = module.exports.KalturaMediaEntryFilterForPlaylist = function(){
KalturaMediaEntryFilterForPlaylist.super_.call(this);
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
var KalturaPlaylist = module.exports.KalturaPlaylist = function(){
KalturaPlaylist.super_.call(this);
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
var KalturaPlaylistBaseFilter = module.exports.KalturaPlaylistBaseFilter = function(){
KalturaPlaylistBaseFilter.super_.call(this);
};
util.inherits(KalturaPlaylistBaseFilter, KalturaBaseEntryFilter);


/**
 */
var KalturaPlaylistFilter = module.exports.KalturaPlaylistFilter = function(){
KalturaPlaylistFilter.super_.call(this);
};
util.inherits(KalturaPlaylistFilter, KalturaPlaylistBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaPlaylistListResponse = module.exports.KalturaPlaylistListResponse = function(){
KalturaPlaylistListResponse.super_.call(this);
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
var KalturaReportInputFilter = module.exports.KalturaReportInputFilter = function(){
KalturaReportInputFilter.super_.call(this);
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
var KalturaReportGraph = module.exports.KalturaReportGraph = function(){
KalturaReportGraph.super_.call(this);
  this.id = null;
  this.data = null;
};
util.inherits(KalturaReportGraph, kcb.KalturaObjectBase);


/**
 * @param  header  string    .
 * @param  data  string    .
 */
var KalturaReportTotal = module.exports.KalturaReportTotal = function(){
KalturaReportTotal.super_.call(this);
  this.header = null;
  this.data = null;
};
util.inherits(KalturaReportTotal, kcb.KalturaObjectBase);


/**
 * @param  header  string     (readOnly).
 * @param  data  string     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaReportTable = module.exports.KalturaReportTable = function(){
KalturaReportTable.super_.call(this);
  this.header = null;
  this.data = null;
  this.totalCount = null;
};
util.inherits(KalturaReportTable, kcb.KalturaObjectBase);


/**
 * @param  columns  string    .
 * @param  results  array    .
 */
var KalturaReportResponse = module.exports.KalturaReportResponse = function(){
KalturaReportResponse.super_.call(this);
  this.columns = null;
  this.results = null;
};
util.inherits(KalturaReportResponse, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  needMediaInfo  bool     (readOnly).
 */
var KalturaSearchResultResponse = module.exports.KalturaSearchResultResponse = function(){
KalturaSearchResultResponse.super_.call(this);
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
var KalturaSearchAuthData = module.exports.KalturaSearchAuthData = function(){
KalturaSearchAuthData.super_.call(this);
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
var KalturaStartWidgetSessionResponse = module.exports.KalturaStartWidgetSessionResponse = function(){
KalturaStartWidgetSessionResponse.super_.call(this);
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
var KalturaStatsEvent = module.exports.KalturaStatsEvent = function(){
KalturaStatsEvent.super_.call(this);
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
var KalturaStatsKmcEvent = module.exports.KalturaStatsKmcEvent = function(){
KalturaStatsKmcEvent.super_.call(this);
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
var KalturaCEError = module.exports.KalturaCEError = function(){
KalturaCEError.super_.call(this);
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
var KalturaStorageProfile = module.exports.KalturaStorageProfile = function(){
KalturaStorageProfile.super_.call(this);
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
var KalturaStorageProfileBaseFilter = module.exports.KalturaStorageProfileBaseFilter = function(){
KalturaStorageProfileBaseFilter.super_.call(this);
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
var KalturaStorageProfileFilter = module.exports.KalturaStorageProfileFilter = function(){
KalturaStorageProfileFilter.super_.call(this);
};
util.inherits(KalturaStorageProfileFilter, KalturaStorageProfileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaStorageProfileListResponse = module.exports.KalturaStorageProfileListResponse = function(){
KalturaStorageProfileListResponse.super_.call(this);
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
var KalturaBaseSyndicationFeed = module.exports.KalturaBaseSyndicationFeed = function(){
KalturaBaseSyndicationFeed.super_.call(this);
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
var KalturaBaseSyndicationFeedBaseFilter = module.exports.KalturaBaseSyndicationFeedBaseFilter = function(){
KalturaBaseSyndicationFeedBaseFilter.super_.call(this);
};
util.inherits(KalturaBaseSyndicationFeedBaseFilter, KalturaFilter);


/**
 */
var KalturaBaseSyndicationFeedFilter = module.exports.KalturaBaseSyndicationFeedFilter = function(){
KalturaBaseSyndicationFeedFilter.super_.call(this);
};
util.inherits(KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaBaseSyndicationFeedListResponse = module.exports.KalturaBaseSyndicationFeedListResponse = function(){
KalturaBaseSyndicationFeedListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaBaseSyndicationFeedListResponse, kcb.KalturaObjectBase);


/**
 * @param  totalEntryCount  int    the total count of entries that should appear in the feed without flavor filtering.
 * @param  actualEntryCount  int    count of entries that will appear in the feed (including all relevant filters).
 * @param  requireTranscodingCount  int    count of entries that requires transcoding in order to be included in feed.
 */
var KalturaSyndicationFeedEntryCount = module.exports.KalturaSyndicationFeedEntryCount = function(){
KalturaSyndicationFeedEntryCount.super_.call(this);
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
var KalturaThumbAsset = module.exports.KalturaThumbAsset = function(){
KalturaThumbAsset.super_.call(this);
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
var KalturaThumbParams = module.exports.KalturaThumbParams = function(){
KalturaThumbParams.super_.call(this);
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
var KalturaThumbAssetListResponse = module.exports.KalturaThumbAssetListResponse = function(){
KalturaThumbAssetListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaThumbAssetListResponse, kcb.KalturaObjectBase);


/**
 * @param  formatEqual  string    .
 */
var KalturaThumbParamsBaseFilter = module.exports.KalturaThumbParamsBaseFilter = function(){
KalturaThumbParamsBaseFilter.super_.call(this);
  this.formatEqual = null;
};
util.inherits(KalturaThumbParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
var KalturaThumbParamsFilter = module.exports.KalturaThumbParamsFilter = function(){
KalturaThumbParamsFilter.super_.call(this);
};
util.inherits(KalturaThumbParamsFilter, KalturaThumbParamsBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaThumbParamsListResponse = module.exports.KalturaThumbParamsListResponse = function(){
KalturaThumbParamsListResponse.super_.call(this);
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
var KalturaUiConf = module.exports.KalturaUiConf = function(){
KalturaUiConf.super_.call(this);
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
var KalturaUiConfBaseFilter = module.exports.KalturaUiConfBaseFilter = function(){
KalturaUiConfBaseFilter.super_.call(this);
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
var KalturaUiConfFilter = module.exports.KalturaUiConfFilter = function(){
KalturaUiConfFilter.super_.call(this);
};
util.inherits(KalturaUiConfFilter, KalturaUiConfBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaUiConfListResponse = module.exports.KalturaUiConfListResponse = function(){
KalturaUiConfListResponse.super_.call(this);
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
var KalturaUiConfTypeInfo = module.exports.KalturaUiConfTypeInfo = function(){
KalturaUiConfTypeInfo.super_.call(this);
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
var KalturaUploadResponse = module.exports.KalturaUploadResponse = function(){
KalturaUploadResponse.super_.call(this);
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
var KalturaUploadToken = module.exports.KalturaUploadToken = function(){
KalturaUploadToken.super_.call(this);
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
var KalturaUploadTokenBaseFilter = module.exports.KalturaUploadTokenBaseFilter = function(){
KalturaUploadTokenBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.userIdEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
util.inherits(KalturaUploadTokenBaseFilter, KalturaFilter);


/**
 */
var KalturaUploadTokenFilter = module.exports.KalturaUploadTokenFilter = function(){
KalturaUploadTokenFilter.super_.call(this);
};
util.inherits(KalturaUploadTokenFilter, KalturaUploadTokenBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaUploadTokenListResponse = module.exports.KalturaUploadTokenListResponse = function(){
KalturaUploadTokenListResponse.super_.call(this);
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
var KalturaUserRole = module.exports.KalturaUserRole = function(){
KalturaUserRole.super_.call(this);
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
var KalturaUserRoleBaseFilter = module.exports.KalturaUserRoleBaseFilter = function(){
KalturaUserRoleBaseFilter.super_.call(this);
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
var KalturaUserRoleFilter = module.exports.KalturaUserRoleFilter = function(){
KalturaUserRoleFilter.super_.call(this);
};
util.inherits(KalturaUserRoleFilter, KalturaUserRoleBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaUserRoleListResponse = module.exports.KalturaUserRoleListResponse = function(){
KalturaUserRoleListResponse.super_.call(this);
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
var KalturaUserBaseFilter = module.exports.KalturaUserBaseFilter = function(){
KalturaUserBaseFilter.super_.call(this);
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
var KalturaUserFilter = module.exports.KalturaUserFilter = function(){
KalturaUserFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.loginEnabledEqual = null;
};
util.inherits(KalturaUserFilter, KalturaUserBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaUserListResponse = module.exports.KalturaUserListResponse = function(){
KalturaUserListResponse.super_.call(this);
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
var KalturaWidget = module.exports.KalturaWidget = function(){
KalturaWidget.super_.call(this);
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
var KalturaWidgetBaseFilter = module.exports.KalturaWidgetBaseFilter = function(){
KalturaWidgetBaseFilter.super_.call(this);
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
var KalturaWidgetFilter = module.exports.KalturaWidgetFilter = function(){
KalturaWidgetFilter.super_.call(this);
};
util.inherits(KalturaWidgetFilter, KalturaWidgetBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaWidgetListResponse = module.exports.KalturaWidgetListResponse = function(){
KalturaWidgetListResponse.super_.call(this);
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
var KalturaMetadata = module.exports.KalturaMetadata = function(){
KalturaMetadata.super_.call(this);
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
var KalturaMetadataBaseFilter = module.exports.KalturaMetadataBaseFilter = function(){
KalturaMetadataBaseFilter.super_.call(this);
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
var KalturaMetadataFilter = module.exports.KalturaMetadataFilter = function(){
KalturaMetadataFilter.super_.call(this);
};
util.inherits(KalturaMetadataFilter, KalturaMetadataBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaMetadataListResponse = module.exports.KalturaMetadataListResponse = function(){
KalturaMetadataListResponse.super_.call(this);
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
var KalturaMetadataProfile = module.exports.KalturaMetadataProfile = function(){
KalturaMetadataProfile.super_.call(this);
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
var KalturaMetadataProfileBaseFilter = module.exports.KalturaMetadataProfileBaseFilter = function(){
KalturaMetadataProfileBaseFilter.super_.call(this);
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
var KalturaMetadataProfileFilter = module.exports.KalturaMetadataProfileFilter = function(){
KalturaMetadataProfileFilter.super_.call(this);
};
util.inherits(KalturaMetadataProfileFilter, KalturaMetadataProfileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaMetadataProfileListResponse = module.exports.KalturaMetadataProfileListResponse = function(){
KalturaMetadataProfileListResponse.super_.call(this);
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
var KalturaMetadataProfileField = module.exports.KalturaMetadataProfileField = function(){
KalturaMetadataProfileField.super_.call(this);
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
var KalturaMetadataProfileFieldListResponse = module.exports.KalturaMetadataProfileFieldListResponse = function(){
KalturaMetadataProfileFieldListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaMetadataProfileFieldListResponse, kcb.KalturaObjectBase);


/**
 * @param  schedulerId  int    .
 * @param  workerId  int    .
 * @param  batchIndex  int    .
 */
var KalturaExclusiveLockKey = module.exports.KalturaExclusiveLockKey = function(){
KalturaExclusiveLockKey.super_.call(this);
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
var KalturaBaseJobBaseFilter = module.exports.KalturaBaseJobBaseFilter = function(){
KalturaBaseJobBaseFilter.super_.call(this);
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
var KalturaBaseJobFilter = module.exports.KalturaBaseJobFilter = function(){
KalturaBaseJobFilter.super_.call(this);
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
var KalturaBatchJobBaseFilter = module.exports.KalturaBatchJobBaseFilter = function(){
KalturaBatchJobBaseFilter.super_.call(this);
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
var KalturaBatchJobFilter = module.exports.KalturaBatchJobFilter = function(){
KalturaBatchJobFilter.super_.call(this);
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
var KalturaBaseJob = module.exports.KalturaBaseJob = function(){
KalturaBaseJob.super_.call(this);
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
var KalturaJobData = module.exports.KalturaJobData = function(){
KalturaJobData.super_.call(this);
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
var KalturaBatchJob = module.exports.KalturaBatchJob = function(){
KalturaBatchJob.super_.call(this);
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
var KalturaFreeJobResponse = module.exports.KalturaFreeJobResponse = function(){
KalturaFreeJobResponse.super_.call(this);
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
var KalturaTransformMetadataResponse = module.exports.KalturaTransformMetadataResponse = function(){
KalturaTransformMetadataResponse.super_.call(this);
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
var KalturaConvertCollectionFlavorData = module.exports.KalturaConvertCollectionFlavorData = function(){
KalturaConvertCollectionFlavorData.super_.call(this);
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
var KalturaNotification = module.exports.KalturaNotification = function(){
KalturaNotification.super_.call(this);
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
var KalturaBatchGetExclusiveNotificationJobsResponse = module.exports.KalturaBatchGetExclusiveNotificationJobsResponse = function(){
KalturaBatchGetExclusiveNotificationJobsResponse.super_.call(this);
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
var KalturaWorkerQueueFilter = module.exports.KalturaWorkerQueueFilter = function(){
KalturaWorkerQueueFilter.super_.call(this);
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
var KalturaFileExistsResponse = module.exports.KalturaFileExistsResponse = function(){
KalturaFileExistsResponse.super_.call(this);
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
var KalturaFileSyncBaseFilter = module.exports.KalturaFileSyncBaseFilter = function(){
KalturaFileSyncBaseFilter.super_.call(this);
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
var KalturaFileSyncFilter = module.exports.KalturaFileSyncFilter = function(){
KalturaFileSyncFilter.super_.call(this);
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
var KalturaFileSync = module.exports.KalturaFileSync = function(){
KalturaFileSync.super_.call(this);
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
var KalturaFileSyncListResponse = module.exports.KalturaFileSyncListResponse = function(){
KalturaFileSyncListResponse.super_.call(this);
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
var KalturaPartnerBaseFilter = module.exports.KalturaPartnerBaseFilter = function(){
KalturaPartnerBaseFilter.super_.call(this);
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
var KalturaPartnerFilter = module.exports.KalturaPartnerFilter = function(){
KalturaPartnerFilter.super_.call(this);
};
util.inherits(KalturaPartnerFilter, KalturaPartnerBaseFilter);


/**
 * @param  fromDate  int    Date range from
 *  .
 * @param  toDate  int    Date range to
 *  .
 */
var KalturaSystemPartnerUsageFilter = module.exports.KalturaSystemPartnerUsageFilter = function(){
KalturaSystemPartnerUsageFilter.super_.call(this);
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
var KalturaSystemPartnerUsageItem = module.exports.KalturaSystemPartnerUsageItem = function(){
KalturaSystemPartnerUsageItem.super_.call(this);
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
var KalturaSystemPartnerUsageListResponse = module.exports.KalturaSystemPartnerUsageListResponse = function(){
KalturaSystemPartnerUsageListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaSystemPartnerUsageListResponse, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaPartnerListResponse = module.exports.KalturaPartnerListResponse = function(){
KalturaPartnerListResponse.super_.call(this);
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
var KalturaSystemPartnerLimit = module.exports.KalturaSystemPartnerLimit = function(){
KalturaSystemPartnerLimit.super_.call(this);
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
var KalturaSystemPartnerConfiguration = module.exports.KalturaSystemPartnerConfiguration = function(){
KalturaSystemPartnerConfiguration.super_.call(this);
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
var KalturaSystemPartnerPackage = module.exports.KalturaSystemPartnerPackage = function(){
KalturaSystemPartnerPackage.super_.call(this);
  this.id = null;
  this.name = null;
};
util.inherits(KalturaSystemPartnerPackage, kcb.KalturaObjectBase);


/**
 * @param  loginEmailEqual  string    .
 */
var KalturaUserLoginDataBaseFilter = module.exports.KalturaUserLoginDataBaseFilter = function(){
KalturaUserLoginDataBaseFilter.super_.call(this);
  this.loginEmailEqual = null;
};
util.inherits(KalturaUserLoginDataBaseFilter, KalturaFilter);


/**
 */
var KalturaUserLoginDataFilter = module.exports.KalturaUserLoginDataFilter = function(){
KalturaUserLoginDataFilter.super_.call(this);
};
util.inherits(KalturaUserLoginDataFilter, KalturaUserLoginDataBaseFilter);


/**
 * @param  id  string    .
 * @param  loginEmail  string    .
 */
var KalturaUserLoginData = module.exports.KalturaUserLoginData = function(){
KalturaUserLoginData.super_.call(this);
  this.id = null;
  this.loginEmail = null;
};
util.inherits(KalturaUserLoginData, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaUserLoginDataListResponse = module.exports.KalturaUserLoginDataListResponse = function(){
KalturaUserLoginDataListResponse.super_.call(this);
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
var KalturaFlavorParamsOutputBaseFilter = module.exports.KalturaFlavorParamsOutputBaseFilter = function(){
KalturaFlavorParamsOutputBaseFilter.super_.call(this);
  this.flavorParamsIdEqual = null;
  this.flavorParamsVersionEqual = null;
  this.flavorAssetIdEqual = null;
  this.flavorAssetVersionEqual = null;
};
util.inherits(KalturaFlavorParamsOutputBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var KalturaFlavorParamsOutputFilter = module.exports.KalturaFlavorParamsOutputFilter = function(){
KalturaFlavorParamsOutputFilter.super_.call(this);
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
var KalturaFlavorParamsOutput = module.exports.KalturaFlavorParamsOutput = function(){
KalturaFlavorParamsOutput.super_.call(this);
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
var KalturaFlavorParamsOutputListResponse = module.exports.KalturaFlavorParamsOutputListResponse = function(){
KalturaFlavorParamsOutputListResponse.super_.call(this);
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
var KalturaThumbParamsOutputBaseFilter = module.exports.KalturaThumbParamsOutputBaseFilter = function(){
KalturaThumbParamsOutputBaseFilter.super_.call(this);
  this.thumbParamsIdEqual = null;
  this.thumbParamsVersionEqual = null;
  this.thumbAssetIdEqual = null;
  this.thumbAssetVersionEqual = null;
};
util.inherits(KalturaThumbParamsOutputBaseFilter, KalturaThumbParamsFilter);


/**
 */
var KalturaThumbParamsOutputFilter = module.exports.KalturaThumbParamsOutputFilter = function(){
KalturaThumbParamsOutputFilter.super_.call(this);
};
util.inherits(KalturaThumbParamsOutputFilter, KalturaThumbParamsOutputBaseFilter);


/**
 * @param  thumbParamsId  int    .
 * @param  thumbParamsVersion  string    .
 * @param  thumbAssetId  string    .
 * @param  thumbAssetVersion  string    .
 */
var KalturaThumbParamsOutput = module.exports.KalturaThumbParamsOutput = function(){
KalturaThumbParamsOutput.super_.call(this);
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
var KalturaThumbParamsOutputListResponse = module.exports.KalturaThumbParamsOutputListResponse = function(){
KalturaThumbParamsOutputListResponse.super_.call(this);
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
var KalturaTrackEntry = module.exports.KalturaTrackEntry = function(){
KalturaTrackEntry.super_.call(this);
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
var KalturaTrackEntryListResponse = module.exports.KalturaTrackEntryListResponse = function(){
KalturaTrackEntryListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaTrackEntryListResponse, kcb.KalturaObjectBase);


/**
 * @param  isPublic  bool    .
 */
var KalturaUiConfAdmin = module.exports.KalturaUiConfAdmin = function(){
KalturaUiConfAdmin.super_.call(this);
  this.isPublic = null;
};
util.inherits(KalturaUiConfAdmin, KalturaUiConf);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaUiConfAdminListResponse = module.exports.KalturaUiConfAdminListResponse = function(){
KalturaUiConfAdminListResponse.super_.call(this);
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
var KalturaReport = module.exports.KalturaReport = function(){
KalturaReport.super_.call(this);
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
var KalturaReportBaseFilter = module.exports.KalturaReportBaseFilter = function(){
KalturaReportBaseFilter.super_.call(this);
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
var KalturaReportFilter = module.exports.KalturaReportFilter = function(){
KalturaReportFilter.super_.call(this);
};
util.inherits(KalturaReportFilter, KalturaReportBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaReportListResponse = module.exports.KalturaReportListResponse = function(){
KalturaReportListResponse.super_.call(this);
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
var KalturaInternalToolsSession = module.exports.KalturaInternalToolsSession = function(){
KalturaInternalToolsSession.super_.call(this);
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
var KalturaAuditTrailInfo = module.exports.KalturaAuditTrailInfo = function(){
KalturaAuditTrailInfo.super_.call(this);
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
var KalturaAuditTrail = module.exports.KalturaAuditTrail = function(){
KalturaAuditTrail.super_.call(this);
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
var KalturaAuditTrailBaseFilter = module.exports.KalturaAuditTrailBaseFilter = function(){
KalturaAuditTrailBaseFilter.super_.call(this);
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
var KalturaAuditTrailFilter = module.exports.KalturaAuditTrailFilter = function(){
KalturaAuditTrailFilter.super_.call(this);
};
util.inherits(KalturaAuditTrailFilter, KalturaAuditTrailBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaAuditTrailListResponse = module.exports.KalturaAuditTrailListResponse = function(){
KalturaAuditTrailListResponse.super_.call(this);
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
var KalturaVirusScanProfileBaseFilter = module.exports.KalturaVirusScanProfileBaseFilter = function(){
KalturaVirusScanProfileBaseFilter.super_.call(this);
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
var KalturaVirusScanProfileFilter = module.exports.KalturaVirusScanProfileFilter = function(){
KalturaVirusScanProfileFilter.super_.call(this);
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
var KalturaVirusScanProfile = module.exports.KalturaVirusScanProfile = function(){
KalturaVirusScanProfile.super_.call(this);
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
var KalturaVirusScanProfileListResponse = module.exports.KalturaVirusScanProfileListResponse = function(){
KalturaVirusScanProfileListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaVirusScanProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  width  int    .
 * @param  height  int    .
 */
var KalturaDistributionThumbDimensions = module.exports.KalturaDistributionThumbDimensions = function(){
KalturaDistributionThumbDimensions.super_.call(this);
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
var KalturaDistributionProfile = module.exports.KalturaDistributionProfile = function(){
KalturaDistributionProfile.super_.call(this);
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
var KalturaDistributionProfileBaseFilter = module.exports.KalturaDistributionProfileBaseFilter = function(){
KalturaDistributionProfileBaseFilter.super_.call(this);
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
var KalturaDistributionProfileFilter = module.exports.KalturaDistributionProfileFilter = function(){
KalturaDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaDistributionProfileFilter, KalturaDistributionProfileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaDistributionProfileListResponse = module.exports.KalturaDistributionProfileListResponse = function(){
KalturaDistributionProfileListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaDistributionProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  action  int    .
 * @param  errorType  int    .
 * @param  description  string    .
 */
var KalturaDistributionValidationError = module.exports.KalturaDistributionValidationError = function(){
KalturaDistributionValidationError.super_.call(this);
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
var KalturaEntryDistribution = module.exports.KalturaEntryDistribution = function(){
KalturaEntryDistribution.super_.call(this);
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
var KalturaEntryDistributionBaseFilter = module.exports.KalturaEntryDistributionBaseFilter = function(){
KalturaEntryDistributionBaseFilter.super_.call(this);
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
var KalturaEntryDistributionFilter = module.exports.KalturaEntryDistributionFilter = function(){
KalturaEntryDistributionFilter.super_.call(this);
};
util.inherits(KalturaEntryDistributionFilter, KalturaEntryDistributionBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaEntryDistributionListResponse = module.exports.KalturaEntryDistributionListResponse = function(){
KalturaEntryDistributionListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaEntryDistributionListResponse, kcb.KalturaObjectBase);


/**
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 */
var KalturaDistributionProviderBaseFilter = module.exports.KalturaDistributionProviderBaseFilter = function(){
KalturaDistributionProviderBaseFilter.super_.call(this);
  this.typeEqual = null;
  this.typeIn = null;
};
util.inherits(KalturaDistributionProviderBaseFilter, KalturaFilter);


/**
 */
var KalturaDistributionProviderFilter = module.exports.KalturaDistributionProviderFilter = function(){
KalturaDistributionProviderFilter.super_.call(this);
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
var KalturaDistributionProvider = module.exports.KalturaDistributionProvider = function(){
KalturaDistributionProvider.super_.call(this);
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
var KalturaDistributionProviderListResponse = module.exports.KalturaDistributionProviderListResponse = function(){
KalturaDistributionProviderListResponse.super_.call(this);
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
var KalturaGenericDistributionProvider = module.exports.KalturaGenericDistributionProvider = function(){
KalturaGenericDistributionProvider.super_.call(this);
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
var KalturaGenericDistributionProviderBaseFilter = module.exports.KalturaGenericDistributionProviderBaseFilter = function(){
KalturaGenericDistributionProviderBaseFilter.super_.call(this);
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
var KalturaGenericDistributionProviderFilter = module.exports.KalturaGenericDistributionProviderFilter = function(){
KalturaGenericDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaGenericDistributionProviderFilter, KalturaGenericDistributionProviderBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaGenericDistributionProviderListResponse = module.exports.KalturaGenericDistributionProviderListResponse = function(){
KalturaGenericDistributionProviderListResponse.super_.call(this);
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
var KalturaGenericDistributionProviderAction = module.exports.KalturaGenericDistributionProviderAction = function(){
KalturaGenericDistributionProviderAction.super_.call(this);
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
var KalturaGenericDistributionProviderActionBaseFilter = module.exports.KalturaGenericDistributionProviderActionBaseFilter = function(){
KalturaGenericDistributionProviderActionBaseFilter.super_.call(this);
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
var KalturaGenericDistributionProviderActionFilter = module.exports.KalturaGenericDistributionProviderActionFilter = function(){
KalturaGenericDistributionProviderActionFilter.super_.call(this);
};
util.inherits(KalturaGenericDistributionProviderActionFilter, KalturaGenericDistributionProviderActionBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaGenericDistributionProviderActionListResponse = module.exports.KalturaGenericDistributionProviderActionListResponse = function(){
KalturaGenericDistributionProviderActionListResponse.super_.call(this);
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
var KalturaCuePoint = module.exports.KalturaCuePoint = function(){
KalturaCuePoint.super_.call(this);
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
var KalturaCuePointListResponse = module.exports.KalturaCuePointListResponse = function(){
KalturaCuePointListResponse.super_.call(this);
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
var KalturaCuePointBaseFilter = module.exports.KalturaCuePointBaseFilter = function(){
KalturaCuePointBaseFilter.super_.call(this);
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
var KalturaCuePointFilter = module.exports.KalturaCuePointFilter = function(){
KalturaCuePointFilter.super_.call(this);
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
var KalturaShortLinkBaseFilter = module.exports.KalturaShortLinkBaseFilter = function(){
KalturaShortLinkBaseFilter.super_.call(this);
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
var KalturaShortLinkFilter = module.exports.KalturaShortLinkFilter = function(){
KalturaShortLinkFilter.super_.call(this);
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
var KalturaShortLink = module.exports.KalturaShortLink = function(){
KalturaShortLink.super_.call(this);
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
var KalturaShortLinkListResponse = module.exports.KalturaShortLinkListResponse = function(){
KalturaShortLinkListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
util.inherits(KalturaShortLinkListResponse, kcb.KalturaObjectBase);


/**
 * @param  handlerType  string     (readOnly).
 */
var KalturaDropFolderFileHandlerConfig = module.exports.KalturaDropFolderFileHandlerConfig = function(){
KalturaDropFolderFileHandlerConfig.super_.call(this);
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
var KalturaDropFolder = module.exports.KalturaDropFolder = function(){
KalturaDropFolder.super_.call(this);
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
var KalturaDropFolderBaseFilter = module.exports.KalturaDropFolderBaseFilter = function(){
KalturaDropFolderBaseFilter.super_.call(this);
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
var KalturaDropFolderFilter = module.exports.KalturaDropFolderFilter = function(){
KalturaDropFolderFilter.super_.call(this);
};
util.inherits(KalturaDropFolderFilter, KalturaDropFolderBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaDropFolderListResponse = module.exports.KalturaDropFolderListResponse = function(){
KalturaDropFolderListResponse.super_.call(this);
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
var KalturaDropFolderFile = module.exports.KalturaDropFolderFile = function(){
KalturaDropFolderFile.super_.call(this);
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
var KalturaDropFolderFileBaseFilter = module.exports.KalturaDropFolderFileBaseFilter = function(){
KalturaDropFolderFileBaseFilter.super_.call(this);
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
var KalturaDropFolderFileFilter = module.exports.KalturaDropFolderFileFilter = function(){
KalturaDropFolderFileFilter.super_.call(this);
};
util.inherits(KalturaDropFolderFileFilter, KalturaDropFolderFileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaDropFolderFileListResponse = module.exports.KalturaDropFolderFileListResponse = function(){
KalturaDropFolderFileListResponse.super_.call(this);
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
var KalturaCaptionAsset = module.exports.KalturaCaptionAsset = function(){
KalturaCaptionAsset.super_.call(this);
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
var KalturaCaptionAssetListResponse = module.exports.KalturaCaptionAssetListResponse = function(){
KalturaCaptionAssetListResponse.super_.call(this);
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
var KalturaCaptionParams = module.exports.KalturaCaptionParams = function(){
KalturaCaptionParams.super_.call(this);
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
var KalturaCaptionParamsBaseFilter = module.exports.KalturaCaptionParamsBaseFilter = function(){
KalturaCaptionParamsBaseFilter.super_.call(this);
  this.formatEqual = null;
  this.formatIn = null;
};
util.inherits(KalturaCaptionParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
var KalturaCaptionParamsFilter = module.exports.KalturaCaptionParamsFilter = function(){
KalturaCaptionParamsFilter.super_.call(this);
};
util.inherits(KalturaCaptionParamsFilter, KalturaCaptionParamsBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
var KalturaCaptionParamsListResponse = module.exports.KalturaCaptionParamsListResponse = function(){
KalturaCaptionParamsListResponse.super_.call(this);
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
var KalturaCaptionAssetBaseFilter = module.exports.KalturaCaptionAssetBaseFilter = function(){
KalturaCaptionAssetBaseFilter.super_.call(this);
  this.formatEqual = null;
  this.formatIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
util.inherits(KalturaCaptionAssetBaseFilter, KalturaAssetFilter);


/**
 */
var KalturaCaptionAssetFilter = module.exports.KalturaCaptionAssetFilter = function(){
KalturaCaptionAssetFilter.super_.call(this);
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
var KalturaCaptionAssetItemFilter = module.exports.KalturaCaptionAssetItemFilter = function(){
KalturaCaptionAssetItemFilter.super_.call(this);
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
var KalturaCaptionAssetItem = module.exports.KalturaCaptionAssetItem = function(){
KalturaCaptionAssetItem.super_.call(this);
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
var KalturaCaptionAssetItemListResponse = module.exports.KalturaCaptionAssetItemListResponse = function(){
KalturaCaptionAssetItemListResponse.super_.call(this);
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
var KalturaAttachmentAsset = module.exports.KalturaAttachmentAsset = function(){
KalturaAttachmentAsset.super_.call(this);
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
var KalturaAttachmentAssetListResponse = module.exports.KalturaAttachmentAssetListResponse = function(){
KalturaAttachmentAssetListResponse.super_.call(this);
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
var KalturaCountryRestriction = module.exports.KalturaCountryRestriction = function(){
KalturaCountryRestriction.super_.call(this);
  this.countryRestrictionType = null;
  this.countryList = null;
};
util.inherits(KalturaCountryRestriction, KalturaBaseRestriction);


/**
 * @param  directoryRestrictionType  int    Kaltura directory restriction type
 *  .
 */
var KalturaDirectoryRestriction = module.exports.KalturaDirectoryRestriction = function(){
KalturaDirectoryRestriction.super_.call(this);
  this.directoryRestrictionType = null;
};
util.inherits(KalturaDirectoryRestriction, KalturaBaseRestriction);


/**
 * @param  ipAddressRestrictionType  int    Ip address restriction type (Allow or deny)
 *  .
 * @param  ipAddressList  string    Comma separated list of ip address to allow to deny 
 *  .
 */
var KalturaIpAddressRestriction = module.exports.KalturaIpAddressRestriction = function(){
KalturaIpAddressRestriction.super_.call(this);
  this.ipAddressRestrictionType = null;
  this.ipAddressList = null;
};
util.inherits(KalturaIpAddressRestriction, KalturaBaseRestriction);


/**
 */
var KalturaSessionRestriction = module.exports.KalturaSessionRestriction = function(){
KalturaSessionRestriction.super_.call(this);
};
util.inherits(KalturaSessionRestriction, KalturaBaseRestriction);


/**
 * @param  previewLength  int    The preview restriction length 
 *  .
 */
var KalturaPreviewRestriction = module.exports.KalturaPreviewRestriction = function(){
KalturaPreviewRestriction.super_.call(this);
  this.previewLength = null;
};
util.inherits(KalturaPreviewRestriction, KalturaSessionRestriction);


/**
 * @param  siteRestrictionType  int    The site restriction type (allow or deny)
 *  .
 * @param  siteList  string    Comma separated list of sites (domains) to allow or deny
 *  .
 */
var KalturaSiteRestriction = module.exports.KalturaSiteRestriction = function(){
KalturaSiteRestriction.super_.call(this);
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
var KalturaUserAgentRestriction = module.exports.KalturaUserAgentRestriction = function(){
KalturaUserAgentRestriction.super_.call(this);
  this.userAgentRestrictionType = null;
  this.userAgentRegexList = null;
};
util.inherits(KalturaUserAgentRestriction, KalturaBaseRestriction);


/**
 * @param  field  string    .
 * @param  value  string    .
 */
var KalturaSearchCondition = module.exports.KalturaSearchCondition = function(){
KalturaSearchCondition.super_.call(this);
  this.field = null;
  this.value = null;
};
util.inherits(KalturaSearchCondition, KalturaSearchItem);


/**
 * @param  comparison  int    .
 */
var KalturaSearchComparableCondition = module.exports.KalturaSearchComparableCondition = function(){
KalturaSearchComparableCondition.super_.call(this);
  this.comparison = null;
};
util.inherits(KalturaSearchComparableCondition, KalturaSearchCondition);


/**
 * @param  type  int    .
 * @param  items  array    .
 */
var KalturaSearchOperator = module.exports.KalturaSearchOperator = function(){
KalturaSearchOperator.super_.call(this);
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
var KalturaContentDistributionSearchItem = module.exports.KalturaContentDistributionSearchItem = function(){
KalturaContentDistributionSearchItem.super_.call(this);
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
var KalturaMetadataSearchItem = module.exports.KalturaMetadataSearchItem = function(){
KalturaMetadataSearchItem.super_.call(this);
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
var KalturaControlPanelCommandBaseFilter = module.exports.KalturaControlPanelCommandBaseFilter = function(){
KalturaControlPanelCommandBaseFilter.super_.call(this);
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
var KalturaMailJobBaseFilter = module.exports.KalturaMailJobBaseFilter = function(){
KalturaMailJobBaseFilter.super_.call(this);
};
util.inherits(KalturaMailJobBaseFilter, KalturaBaseJobFilter);


/**
 */
var KalturaNotificationBaseFilter = module.exports.KalturaNotificationBaseFilter = function(){
KalturaNotificationBaseFilter.super_.call(this);
};
util.inherits(KalturaNotificationBaseFilter, KalturaBaseJobFilter);


/**
 */
var KalturaControlPanelCommandFilter = module.exports.KalturaControlPanelCommandFilter = function(){
KalturaControlPanelCommandFilter.super_.call(this);
};
util.inherits(KalturaControlPanelCommandFilter, KalturaControlPanelCommandBaseFilter);


/**
 */
var KalturaMailJobFilter = module.exports.KalturaMailJobFilter = function(){
KalturaMailJobFilter.super_.call(this);
};
util.inherits(KalturaMailJobFilter, KalturaMailJobBaseFilter);


/**
 */
var KalturaNotificationFilter = module.exports.KalturaNotificationFilter = function(){
KalturaNotificationFilter.super_.call(this);
};
util.inherits(KalturaNotificationFilter, KalturaNotificationBaseFilter);


/**
 * @param  jobTypeAndSubTypeIn  string    .
 */
var KalturaBatchJobFilterExt = module.exports.KalturaBatchJobFilterExt = function(){
KalturaBatchJobFilterExt.super_.call(this);
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
var KalturaAssetParamsOutputBaseFilter = module.exports.KalturaAssetParamsOutputBaseFilter = function(){
KalturaAssetParamsOutputBaseFilter.super_.call(this);
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
var KalturaFlavorAssetBaseFilter = module.exports.KalturaFlavorAssetBaseFilter = function(){
KalturaFlavorAssetBaseFilter.super_.call(this);
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
util.inherits(KalturaFlavorAssetBaseFilter, KalturaAssetFilter);


/**
 */
var KalturaMediaFlavorParamsBaseFilter = module.exports.KalturaMediaFlavorParamsBaseFilter = function(){
KalturaMediaFlavorParamsBaseFilter.super_.call(this);
};
util.inherits(KalturaMediaFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var KalturaMediaFlavorParamsOutputBaseFilter = module.exports.KalturaMediaFlavorParamsOutputBaseFilter = function(){
KalturaMediaFlavorParamsOutputBaseFilter.super_.call(this);
};
util.inherits(KalturaMediaFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
var KalturaThumbAssetBaseFilter = module.exports.KalturaThumbAssetBaseFilter = function(){
KalturaThumbAssetBaseFilter.super_.call(this);
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
util.inherits(KalturaThumbAssetBaseFilter, KalturaAssetFilter);


/**
 */
var KalturaAssetParamsOutputFilter = module.exports.KalturaAssetParamsOutputFilter = function(){
KalturaAssetParamsOutputFilter.super_.call(this);
};
util.inherits(KalturaAssetParamsOutputFilter, KalturaAssetParamsOutputBaseFilter);


/**
 */
var KalturaFlavorAssetFilter = module.exports.KalturaFlavorAssetFilter = function(){
KalturaFlavorAssetFilter.super_.call(this);
};
util.inherits(KalturaFlavorAssetFilter, KalturaFlavorAssetBaseFilter);


/**
 */
var KalturaMediaFlavorParamsFilter = module.exports.KalturaMediaFlavorParamsFilter = function(){
KalturaMediaFlavorParamsFilter.super_.call(this);
};
util.inherits(KalturaMediaFlavorParamsFilter, KalturaMediaFlavorParamsBaseFilter);


/**
 */
var KalturaMediaFlavorParamsOutputFilter = module.exports.KalturaMediaFlavorParamsOutputFilter = function(){
KalturaMediaFlavorParamsOutputFilter.super_.call(this);
};
util.inherits(KalturaMediaFlavorParamsOutputFilter, KalturaMediaFlavorParamsOutputBaseFilter);


/**
 */
var KalturaThumbAssetFilter = module.exports.KalturaThumbAssetFilter = function(){
KalturaThumbAssetFilter.super_.call(this);
};
util.inherits(KalturaThumbAssetFilter, KalturaThumbAssetBaseFilter);


/**
 */
var KalturaLiveStreamAdminEntryBaseFilter = module.exports.KalturaLiveStreamAdminEntryBaseFilter = function(){
KalturaLiveStreamAdminEntryBaseFilter.super_.call(this);
};
util.inherits(KalturaLiveStreamAdminEntryBaseFilter, KalturaLiveStreamEntryFilter);


/**
 */
var KalturaLiveStreamAdminEntryFilter = module.exports.KalturaLiveStreamAdminEntryFilter = function(){
KalturaLiveStreamAdminEntryFilter.super_.call(this);
};
util.inherits(KalturaLiveStreamAdminEntryFilter, KalturaLiveStreamAdminEntryBaseFilter);


/**
 */
var KalturaAdminUserBaseFilter = module.exports.KalturaAdminUserBaseFilter = function(){
KalturaAdminUserBaseFilter.super_.call(this);
};
util.inherits(KalturaAdminUserBaseFilter, KalturaUserFilter);


/**
 */
var KalturaAdminUserFilter = module.exports.KalturaAdminUserFilter = function(){
KalturaAdminUserFilter.super_.call(this);
};
util.inherits(KalturaAdminUserFilter, KalturaAdminUserBaseFilter);


/**
 */
var KalturaGoogleVideoSyndicationFeedBaseFilter = module.exports.KalturaGoogleVideoSyndicationFeedBaseFilter = function(){
KalturaGoogleVideoSyndicationFeedBaseFilter.super_.call(this);
};
util.inherits(KalturaGoogleVideoSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var KalturaGoogleVideoSyndicationFeedFilter = module.exports.KalturaGoogleVideoSyndicationFeedFilter = function(){
KalturaGoogleVideoSyndicationFeedFilter.super_.call(this);
};
util.inherits(KalturaGoogleVideoSyndicationFeedFilter, KalturaGoogleVideoSyndicationFeedBaseFilter);


/**
 */
var KalturaITunesSyndicationFeedBaseFilter = module.exports.KalturaITunesSyndicationFeedBaseFilter = function(){
KalturaITunesSyndicationFeedBaseFilter.super_.call(this);
};
util.inherits(KalturaITunesSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var KalturaITunesSyndicationFeedFilter = module.exports.KalturaITunesSyndicationFeedFilter = function(){
KalturaITunesSyndicationFeedFilter.super_.call(this);
};
util.inherits(KalturaITunesSyndicationFeedFilter, KalturaITunesSyndicationFeedBaseFilter);


/**
 */
var KalturaTubeMogulSyndicationFeedBaseFilter = module.exports.KalturaTubeMogulSyndicationFeedBaseFilter = function(){
KalturaTubeMogulSyndicationFeedBaseFilter.super_.call(this);
};
util.inherits(KalturaTubeMogulSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var KalturaTubeMogulSyndicationFeedFilter = module.exports.KalturaTubeMogulSyndicationFeedFilter = function(){
KalturaTubeMogulSyndicationFeedFilter.super_.call(this);
};
util.inherits(KalturaTubeMogulSyndicationFeedFilter, KalturaTubeMogulSyndicationFeedBaseFilter);


/**
 */
var KalturaYahooSyndicationFeedBaseFilter = module.exports.KalturaYahooSyndicationFeedBaseFilter = function(){
KalturaYahooSyndicationFeedBaseFilter.super_.call(this);
};
util.inherits(KalturaYahooSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var KalturaYahooSyndicationFeedFilter = module.exports.KalturaYahooSyndicationFeedFilter = function(){
KalturaYahooSyndicationFeedFilter.super_.call(this);
};
util.inherits(KalturaYahooSyndicationFeedFilter, KalturaYahooSyndicationFeedBaseFilter);


/**
 */
var KalturaApiActionPermissionItemBaseFilter = module.exports.KalturaApiActionPermissionItemBaseFilter = function(){
KalturaApiActionPermissionItemBaseFilter.super_.call(this);
};
util.inherits(KalturaApiActionPermissionItemBaseFilter, KalturaPermissionItemFilter);


/**
 */
var KalturaApiParameterPermissionItemBaseFilter = module.exports.KalturaApiParameterPermissionItemBaseFilter = function(){
KalturaApiParameterPermissionItemBaseFilter.super_.call(this);
};
util.inherits(KalturaApiParameterPermissionItemBaseFilter, KalturaPermissionItemFilter);


/**
 */
var KalturaApiActionPermissionItemFilter = module.exports.KalturaApiActionPermissionItemFilter = function(){
KalturaApiActionPermissionItemFilter.super_.call(this);
};
util.inherits(KalturaApiActionPermissionItemFilter, KalturaApiActionPermissionItemBaseFilter);


/**
 */
var KalturaApiParameterPermissionItemFilter = module.exports.KalturaApiParameterPermissionItemFilter = function(){
KalturaApiParameterPermissionItemFilter.super_.call(this);
};
util.inherits(KalturaApiParameterPermissionItemFilter, KalturaApiParameterPermissionItemBaseFilter);


/**
 */
var KalturaGenericSyndicationFeedBaseFilter = module.exports.KalturaGenericSyndicationFeedBaseFilter = function(){
KalturaGenericSyndicationFeedBaseFilter.super_.call(this);
};
util.inherits(KalturaGenericSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
var KalturaGenericSyndicationFeedFilter = module.exports.KalturaGenericSyndicationFeedFilter = function(){
KalturaGenericSyndicationFeedFilter.super_.call(this);
};
util.inherits(KalturaGenericSyndicationFeedFilter, KalturaGenericSyndicationFeedBaseFilter);


/**
 */
var KalturaGenericXsltSyndicationFeedBaseFilter = module.exports.KalturaGenericXsltSyndicationFeedBaseFilter = function(){
KalturaGenericXsltSyndicationFeedBaseFilter.super_.call(this);
};
util.inherits(KalturaGenericXsltSyndicationFeedBaseFilter, KalturaGenericSyndicationFeedFilter);


/**
 */
var KalturaGenericXsltSyndicationFeedFilter = module.exports.KalturaGenericXsltSyndicationFeedFilter = function(){
KalturaGenericXsltSyndicationFeedFilter.super_.call(this);
};
util.inherits(KalturaGenericXsltSyndicationFeedFilter, KalturaGenericXsltSyndicationFeedBaseFilter);


/**
 */
var KalturaUiConfAdminBaseFilter = module.exports.KalturaUiConfAdminBaseFilter = function(){
KalturaUiConfAdminBaseFilter.super_.call(this);
};
util.inherits(KalturaUiConfAdminBaseFilter, KalturaUiConfFilter);


/**
 */
var KalturaUiConfAdminFilter = module.exports.KalturaUiConfAdminFilter = function(){
KalturaUiConfAdminFilter.super_.call(this);
};
util.inherits(KalturaUiConfAdminFilter, KalturaUiConfAdminBaseFilter);


/**
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
var KalturaAttachmentAssetBaseFilter = module.exports.KalturaAttachmentAssetBaseFilter = function(){
KalturaAttachmentAssetBaseFilter.super_.call(this);
  this.formatEqual = null;
  this.formatIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
util.inherits(KalturaAttachmentAssetBaseFilter, KalturaAssetFilter);


/**
 */
var KalturaAttachmentAssetFilter = module.exports.KalturaAttachmentAssetFilter = function(){
KalturaAttachmentAssetFilter.super_.call(this);
};
util.inherits(KalturaAttachmentAssetFilter, KalturaAttachmentAssetBaseFilter);


/**
 */
var KalturaConfigurableDistributionProfileBaseFilter = module.exports.KalturaConfigurableDistributionProfileBaseFilter = function(){
KalturaConfigurableDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaConfigurableDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var KalturaGenericDistributionProfileBaseFilter = module.exports.KalturaGenericDistributionProfileBaseFilter = function(){
KalturaGenericDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaGenericDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var KalturaSyndicationDistributionProfileBaseFilter = module.exports.KalturaSyndicationDistributionProfileBaseFilter = function(){
KalturaSyndicationDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaSyndicationDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var KalturaSyndicationDistributionProviderBaseFilter = module.exports.KalturaSyndicationDistributionProviderBaseFilter = function(){
KalturaSyndicationDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaSyndicationDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaConfigurableDistributionProfileFilter = module.exports.KalturaConfigurableDistributionProfileFilter = function(){
KalturaConfigurableDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileBaseFilter);


/**
 */
var KalturaGenericDistributionProfileFilter = module.exports.KalturaGenericDistributionProfileFilter = function(){
KalturaGenericDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaGenericDistributionProfileFilter, KalturaGenericDistributionProfileBaseFilter);


/**
 */
var KalturaSyndicationDistributionProfileFilter = module.exports.KalturaSyndicationDistributionProfileFilter = function(){
KalturaSyndicationDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaSyndicationDistributionProfileFilter, KalturaSyndicationDistributionProfileBaseFilter);


/**
 */
var KalturaSyndicationDistributionProviderFilter = module.exports.KalturaSyndicationDistributionProviderFilter = function(){
KalturaSyndicationDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaSyndicationDistributionProviderFilter, KalturaSyndicationDistributionProviderBaseFilter);


/**
 */
var KalturaAvnDistributionProfileBaseFilter = module.exports.KalturaAvnDistributionProfileBaseFilter = function(){
KalturaAvnDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaAvnDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaAvnDistributionProviderBaseFilter = module.exports.KalturaAvnDistributionProviderBaseFilter = function(){
KalturaAvnDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaAvnDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaAvnDistributionProfileFilter = module.exports.KalturaAvnDistributionProfileFilter = function(){
KalturaAvnDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaAvnDistributionProfileFilter, KalturaAvnDistributionProfileBaseFilter);


/**
 */
var KalturaAvnDistributionProviderFilter = module.exports.KalturaAvnDistributionProviderFilter = function(){
KalturaAvnDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaAvnDistributionProviderFilter, KalturaAvnDistributionProviderBaseFilter);


/**
 */
var KalturaComcastMrssDistributionProfileBaseFilter = module.exports.KalturaComcastMrssDistributionProfileBaseFilter = function(){
KalturaComcastMrssDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaComcastMrssDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaComcastMrssDistributionProviderBaseFilter = module.exports.KalturaComcastMrssDistributionProviderBaseFilter = function(){
KalturaComcastMrssDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaComcastMrssDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaComcastMrssDistributionProfileFilter = module.exports.KalturaComcastMrssDistributionProfileFilter = function(){
KalturaComcastMrssDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaComcastMrssDistributionProfileFilter, KalturaComcastMrssDistributionProfileBaseFilter);


/**
 */
var KalturaComcastMrssDistributionProviderFilter = module.exports.KalturaComcastMrssDistributionProviderFilter = function(){
KalturaComcastMrssDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaComcastMrssDistributionProviderFilter, KalturaComcastMrssDistributionProviderBaseFilter);


/**
 */
var KalturaDailymotionDistributionProfileBaseFilter = module.exports.KalturaDailymotionDistributionProfileBaseFilter = function(){
KalturaDailymotionDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaDailymotionDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaDailymotionDistributionProviderBaseFilter = module.exports.KalturaDailymotionDistributionProviderBaseFilter = function(){
KalturaDailymotionDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaDailymotionDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaDailymotionDistributionProfileFilter = module.exports.KalturaDailymotionDistributionProfileFilter = function(){
KalturaDailymotionDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaDailymotionDistributionProfileFilter, KalturaDailymotionDistributionProfileBaseFilter);


/**
 */
var KalturaDailymotionDistributionProviderFilter = module.exports.KalturaDailymotionDistributionProviderFilter = function(){
KalturaDailymotionDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaDailymotionDistributionProviderFilter, KalturaDailymotionDistributionProviderBaseFilter);


/**
 */
var KalturaDoubleClickDistributionProfileBaseFilter = module.exports.KalturaDoubleClickDistributionProfileBaseFilter = function(){
KalturaDoubleClickDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaDoubleClickDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaDoubleClickDistributionProviderBaseFilter = module.exports.KalturaDoubleClickDistributionProviderBaseFilter = function(){
KalturaDoubleClickDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaDoubleClickDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaDoubleClickDistributionProfileFilter = module.exports.KalturaDoubleClickDistributionProfileFilter = function(){
KalturaDoubleClickDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaDoubleClickDistributionProfileFilter, KalturaDoubleClickDistributionProfileBaseFilter);


/**
 */
var KalturaDoubleClickDistributionProviderFilter = module.exports.KalturaDoubleClickDistributionProviderFilter = function(){
KalturaDoubleClickDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaDoubleClickDistributionProviderFilter, KalturaDoubleClickDistributionProviderBaseFilter);


/**
 */
var KalturaExampleDistributionProfileBaseFilter = module.exports.KalturaExampleDistributionProfileBaseFilter = function(){
KalturaExampleDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaExampleDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var KalturaExampleDistributionProviderBaseFilter = module.exports.KalturaExampleDistributionProviderBaseFilter = function(){
KalturaExampleDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaExampleDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaExampleDistributionProfileFilter = module.exports.KalturaExampleDistributionProfileFilter = function(){
KalturaExampleDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaExampleDistributionProfileFilter, KalturaExampleDistributionProfileBaseFilter);


/**
 */
var KalturaExampleDistributionProviderFilter = module.exports.KalturaExampleDistributionProviderFilter = function(){
KalturaExampleDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaExampleDistributionProviderFilter, KalturaExampleDistributionProviderBaseFilter);


/**
 */
var KalturaFreewheelDistributionProfileBaseFilter = module.exports.KalturaFreewheelDistributionProfileBaseFilter = function(){
KalturaFreewheelDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaFreewheelDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var KalturaFreewheelDistributionProviderBaseFilter = module.exports.KalturaFreewheelDistributionProviderBaseFilter = function(){
KalturaFreewheelDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaFreewheelDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaFreewheelDistributionProfileFilter = module.exports.KalturaFreewheelDistributionProfileFilter = function(){
KalturaFreewheelDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaFreewheelDistributionProfileFilter, KalturaFreewheelDistributionProfileBaseFilter);


/**
 */
var KalturaFreewheelDistributionProviderFilter = module.exports.KalturaFreewheelDistributionProviderFilter = function(){
KalturaFreewheelDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaFreewheelDistributionProviderFilter, KalturaFreewheelDistributionProviderBaseFilter);


/**
 */
var KalturaFreewheelGenericDistributionProfileBaseFilter = module.exports.KalturaFreewheelGenericDistributionProfileBaseFilter = function(){
KalturaFreewheelGenericDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaFreewheelGenericDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaFreewheelGenericDistributionProviderBaseFilter = module.exports.KalturaFreewheelGenericDistributionProviderBaseFilter = function(){
KalturaFreewheelGenericDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaFreewheelGenericDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaFreewheelGenericDistributionProfileFilter = module.exports.KalturaFreewheelGenericDistributionProfileFilter = function(){
KalturaFreewheelGenericDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaFreewheelGenericDistributionProfileFilter, KalturaFreewheelGenericDistributionProfileBaseFilter);


/**
 */
var KalturaFreewheelGenericDistributionProviderFilter = module.exports.KalturaFreewheelGenericDistributionProviderFilter = function(){
KalturaFreewheelGenericDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaFreewheelGenericDistributionProviderFilter, KalturaFreewheelGenericDistributionProviderBaseFilter);


/**
 */
var KalturaHuluDistributionProfileBaseFilter = module.exports.KalturaHuluDistributionProfileBaseFilter = function(){
KalturaHuluDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaHuluDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaHuluDistributionProviderBaseFilter = module.exports.KalturaHuluDistributionProviderBaseFilter = function(){
KalturaHuluDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaHuluDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaHuluDistributionProfileFilter = module.exports.KalturaHuluDistributionProfileFilter = function(){
KalturaHuluDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaHuluDistributionProfileFilter, KalturaHuluDistributionProfileBaseFilter);


/**
 */
var KalturaHuluDistributionProviderFilter = module.exports.KalturaHuluDistributionProviderFilter = function(){
KalturaHuluDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaHuluDistributionProviderFilter, KalturaHuluDistributionProviderBaseFilter);


/**
 */
var KalturaIdeticDistributionProfileBaseFilter = module.exports.KalturaIdeticDistributionProfileBaseFilter = function(){
KalturaIdeticDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaIdeticDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaIdeticDistributionProviderBaseFilter = module.exports.KalturaIdeticDistributionProviderBaseFilter = function(){
KalturaIdeticDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaIdeticDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaIdeticDistributionProfileFilter = module.exports.KalturaIdeticDistributionProfileFilter = function(){
KalturaIdeticDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaIdeticDistributionProfileFilter, KalturaIdeticDistributionProfileBaseFilter);


/**
 */
var KalturaIdeticDistributionProviderFilter = module.exports.KalturaIdeticDistributionProviderFilter = function(){
KalturaIdeticDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaIdeticDistributionProviderFilter, KalturaIdeticDistributionProviderBaseFilter);


/**
 */
var KalturaNdnDistributionProfileBaseFilter = module.exports.KalturaNdnDistributionProfileBaseFilter = function(){
KalturaNdnDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaNdnDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaNdnDistributionProviderBaseFilter = module.exports.KalturaNdnDistributionProviderBaseFilter = function(){
KalturaNdnDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaNdnDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaNdnDistributionProfileFilter = module.exports.KalturaNdnDistributionProfileFilter = function(){
KalturaNdnDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaNdnDistributionProfileFilter, KalturaNdnDistributionProfileBaseFilter);


/**
 */
var KalturaNdnDistributionProviderFilter = module.exports.KalturaNdnDistributionProviderFilter = function(){
KalturaNdnDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaNdnDistributionProviderFilter, KalturaNdnDistributionProviderBaseFilter);


/**
 */
var KalturaPodcastDistributionProfileBaseFilter = module.exports.KalturaPodcastDistributionProfileBaseFilter = function(){
KalturaPodcastDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaPodcastDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
var KalturaPodcastDistributionProviderBaseFilter = module.exports.KalturaPodcastDistributionProviderBaseFilter = function(){
KalturaPodcastDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaPodcastDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaPodcastDistributionProfileFilter = module.exports.KalturaPodcastDistributionProfileFilter = function(){
KalturaPodcastDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaPodcastDistributionProfileFilter, KalturaPodcastDistributionProfileBaseFilter);


/**
 */
var KalturaPodcastDistributionProviderFilter = module.exports.KalturaPodcastDistributionProviderFilter = function(){
KalturaPodcastDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaPodcastDistributionProviderFilter, KalturaPodcastDistributionProviderBaseFilter);


/**
 */
var KalturaSynacorHboDistributionProfileBaseFilter = module.exports.KalturaSynacorHboDistributionProfileBaseFilter = function(){
KalturaSynacorHboDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaSynacorHboDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaSynacorHboDistributionProviderBaseFilter = module.exports.KalturaSynacorHboDistributionProviderBaseFilter = function(){
KalturaSynacorHboDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaSynacorHboDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaSynacorHboDistributionProfileFilter = module.exports.KalturaSynacorHboDistributionProfileFilter = function(){
KalturaSynacorHboDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaSynacorHboDistributionProfileFilter, KalturaSynacorHboDistributionProfileBaseFilter);


/**
 */
var KalturaSynacorHboDistributionProviderFilter = module.exports.KalturaSynacorHboDistributionProviderFilter = function(){
KalturaSynacorHboDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaSynacorHboDistributionProviderFilter, KalturaSynacorHboDistributionProviderBaseFilter);


/**
 */
var KalturaTimeWarnerDistributionProfileBaseFilter = module.exports.KalturaTimeWarnerDistributionProfileBaseFilter = function(){
KalturaTimeWarnerDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaTimeWarnerDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaTimeWarnerDistributionProviderBaseFilter = module.exports.KalturaTimeWarnerDistributionProviderBaseFilter = function(){
KalturaTimeWarnerDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaTimeWarnerDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaTimeWarnerDistributionProfileFilter = module.exports.KalturaTimeWarnerDistributionProfileFilter = function(){
KalturaTimeWarnerDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaTimeWarnerDistributionProfileFilter, KalturaTimeWarnerDistributionProfileBaseFilter);


/**
 */
var KalturaTimeWarnerDistributionProviderFilter = module.exports.KalturaTimeWarnerDistributionProviderFilter = function(){
KalturaTimeWarnerDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaTimeWarnerDistributionProviderFilter, KalturaTimeWarnerDistributionProviderBaseFilter);


/**
 */
var KalturaTVComDistributionProfileBaseFilter = module.exports.KalturaTVComDistributionProfileBaseFilter = function(){
KalturaTVComDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaTVComDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaTVComDistributionProviderBaseFilter = module.exports.KalturaTVComDistributionProviderBaseFilter = function(){
KalturaTVComDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaTVComDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaTVComDistributionProfileFilter = module.exports.KalturaTVComDistributionProfileFilter = function(){
KalturaTVComDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaTVComDistributionProfileFilter, KalturaTVComDistributionProfileBaseFilter);


/**
 */
var KalturaTVComDistributionProviderFilter = module.exports.KalturaTVComDistributionProviderFilter = function(){
KalturaTVComDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaTVComDistributionProviderFilter, KalturaTVComDistributionProviderBaseFilter);


/**
 */
var KalturaUverseDistributionProfileBaseFilter = module.exports.KalturaUverseDistributionProfileBaseFilter = function(){
KalturaUverseDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaUverseDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaUverseDistributionProviderBaseFilter = module.exports.KalturaUverseDistributionProviderBaseFilter = function(){
KalturaUverseDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaUverseDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaUverseDistributionProfileFilter = module.exports.KalturaUverseDistributionProfileFilter = function(){
KalturaUverseDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaUverseDistributionProfileFilter, KalturaUverseDistributionProfileBaseFilter);


/**
 */
var KalturaUverseDistributionProviderFilter = module.exports.KalturaUverseDistributionProviderFilter = function(){
KalturaUverseDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaUverseDistributionProviderFilter, KalturaUverseDistributionProviderBaseFilter);


/**
 */
var KalturaVerizonVcastDistributionProfileBaseFilter = module.exports.KalturaVerizonVcastDistributionProfileBaseFilter = function(){
KalturaVerizonVcastDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaVerizonVcastDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaVerizonVcastDistributionProviderBaseFilter = module.exports.KalturaVerizonVcastDistributionProviderBaseFilter = function(){
KalturaVerizonVcastDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaVerizonVcastDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaVerizonVcastDistributionProfileFilter = module.exports.KalturaVerizonVcastDistributionProfileFilter = function(){
KalturaVerizonVcastDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaVerizonVcastDistributionProfileFilter, KalturaVerizonVcastDistributionProfileBaseFilter);


/**
 */
var KalturaVerizonVcastDistributionProviderFilter = module.exports.KalturaVerizonVcastDistributionProviderFilter = function(){
KalturaVerizonVcastDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaVerizonVcastDistributionProviderFilter, KalturaVerizonVcastDistributionProviderBaseFilter);


/**
 */
var KalturaYahooDistributionProfileBaseFilter = module.exports.KalturaYahooDistributionProfileBaseFilter = function(){
KalturaYahooDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaYahooDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaYahooDistributionProviderBaseFilter = module.exports.KalturaYahooDistributionProviderBaseFilter = function(){
KalturaYahooDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaYahooDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaYahooDistributionProfileFilter = module.exports.KalturaYahooDistributionProfileFilter = function(){
KalturaYahooDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaYahooDistributionProfileFilter, KalturaYahooDistributionProfileBaseFilter);


/**
 */
var KalturaYahooDistributionProviderFilter = module.exports.KalturaYahooDistributionProviderFilter = function(){
KalturaYahooDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaYahooDistributionProviderFilter, KalturaYahooDistributionProviderBaseFilter);


/**
 */
var KalturaYouTubeDistributionProfileBaseFilter = module.exports.KalturaYouTubeDistributionProfileBaseFilter = function(){
KalturaYouTubeDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaYouTubeDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaYouTubeDistributionProviderBaseFilter = module.exports.KalturaYouTubeDistributionProviderBaseFilter = function(){
KalturaYouTubeDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaYouTubeDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaYouTubeDistributionProfileFilter = module.exports.KalturaYouTubeDistributionProfileFilter = function(){
KalturaYouTubeDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaYouTubeDistributionProfileFilter, KalturaYouTubeDistributionProfileBaseFilter);


/**
 */
var KalturaYouTubeDistributionProviderFilter = module.exports.KalturaYouTubeDistributionProviderFilter = function(){
KalturaYouTubeDistributionProviderFilter.super_.call(this);
};
util.inherits(KalturaYouTubeDistributionProviderFilter, KalturaYouTubeDistributionProviderBaseFilter);


/**
 */
var KalturaYoutubeApiDistributionProfileBaseFilter = module.exports.KalturaYoutubeApiDistributionProfileBaseFilter = function(){
KalturaYoutubeApiDistributionProfileBaseFilter.super_.call(this);
};
util.inherits(KalturaYoutubeApiDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
var KalturaYoutubeApiDistributionProviderBaseFilter = module.exports.KalturaYoutubeApiDistributionProviderBaseFilter = function(){
KalturaYoutubeApiDistributionProviderBaseFilter.super_.call(this);
};
util.inherits(KalturaYoutubeApiDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
var KalturaYoutubeApiDistributionProfileFilter = module.exports.KalturaYoutubeApiDistributionProfileFilter = function(){
KalturaYoutubeApiDistributionProfileFilter.super_.call(this);
};
util.inherits(KalturaYoutubeApiDistributionProfileFilter, KalturaYoutubeApiDistributionProfileBaseFilter);


/**
 */
var KalturaYoutubeApiDistributionProviderFilter = module.exports.KalturaYoutubeApiDistributionProviderFilter = function(){
KalturaYoutubeApiDistributionProviderFilter.super_.call(this);
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
var KalturaAdCuePointBaseFilter = module.exports.KalturaAdCuePointBaseFilter = function(){
KalturaAdCuePointBaseFilter.super_.call(this);
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
var KalturaAdCuePointFilter = module.exports.KalturaAdCuePointFilter = function(){
KalturaAdCuePointFilter.super_.call(this);
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
var KalturaAnnotationBaseFilter = module.exports.KalturaAnnotationBaseFilter = function(){
KalturaAnnotationBaseFilter.super_.call(this);
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
var KalturaAnnotationFilter = module.exports.KalturaAnnotationFilter = function(){
KalturaAnnotationFilter.super_.call(this);
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
var KalturaCodeCuePointBaseFilter = module.exports.KalturaCodeCuePointBaseFilter = function(){
KalturaCodeCuePointBaseFilter.super_.call(this);
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
var KalturaCodeCuePointFilter = module.exports.KalturaCodeCuePointFilter = function(){
KalturaCodeCuePointFilter.super_.call(this);
};
util.inherits(KalturaCodeCuePointFilter, KalturaCodeCuePointBaseFilter);


/**
 */
var KalturaDocumentFlavorParamsBaseFilter = module.exports.KalturaDocumentFlavorParamsBaseFilter = function(){
KalturaDocumentFlavorParamsBaseFilter.super_.call(this);
};
util.inherits(KalturaDocumentFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var KalturaDocumentFlavorParamsOutputBaseFilter = module.exports.KalturaDocumentFlavorParamsOutputBaseFilter = function(){
KalturaDocumentFlavorParamsOutputBaseFilter.super_.call(this);
};
util.inherits(KalturaDocumentFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
var KalturaPdfFlavorParamsBaseFilter = module.exports.KalturaPdfFlavorParamsBaseFilter = function(){
KalturaPdfFlavorParamsBaseFilter.super_.call(this);
};
util.inherits(KalturaPdfFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var KalturaPdfFlavorParamsOutputBaseFilter = module.exports.KalturaPdfFlavorParamsOutputBaseFilter = function(){
KalturaPdfFlavorParamsOutputBaseFilter.super_.call(this);
};
util.inherits(KalturaPdfFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
var KalturaSwfFlavorParamsBaseFilter = module.exports.KalturaSwfFlavorParamsBaseFilter = function(){
KalturaSwfFlavorParamsBaseFilter.super_.call(this);
};
util.inherits(KalturaSwfFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
var KalturaSwfFlavorParamsOutputBaseFilter = module.exports.KalturaSwfFlavorParamsOutputBaseFilter = function(){
KalturaSwfFlavorParamsOutputBaseFilter.super_.call(this);
};
util.inherits(KalturaSwfFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
var KalturaDocumentFlavorParamsFilter = module.exports.KalturaDocumentFlavorParamsFilter = function(){
KalturaDocumentFlavorParamsFilter.super_.call(this);
};
util.inherits(KalturaDocumentFlavorParamsFilter, KalturaDocumentFlavorParamsBaseFilter);


/**
 */
var KalturaDocumentFlavorParamsOutputFilter = module.exports.KalturaDocumentFlavorParamsOutputFilter = function(){
KalturaDocumentFlavorParamsOutputFilter.super_.call(this);
};
util.inherits(KalturaDocumentFlavorParamsOutputFilter, KalturaDocumentFlavorParamsOutputBaseFilter);


/**
 */
var KalturaPdfFlavorParamsFilter = module.exports.KalturaPdfFlavorParamsFilter = function(){
KalturaPdfFlavorParamsFilter.super_.call(this);
};
util.inherits(KalturaPdfFlavorParamsFilter, KalturaPdfFlavorParamsBaseFilter);


/**
 */
var KalturaPdfFlavorParamsOutputFilter = module.exports.KalturaPdfFlavorParamsOutputFilter = function(){
KalturaPdfFlavorParamsOutputFilter.super_.call(this);
};
util.inherits(KalturaPdfFlavorParamsOutputFilter, KalturaPdfFlavorParamsOutputBaseFilter);


/**
 */
var KalturaSwfFlavorParamsFilter = module.exports.KalturaSwfFlavorParamsFilter = function(){
KalturaSwfFlavorParamsFilter.super_.call(this);
};
util.inherits(KalturaSwfFlavorParamsFilter, KalturaSwfFlavorParamsBaseFilter);


/**
 */
var KalturaSwfFlavorParamsOutputFilter = module.exports.KalturaSwfFlavorParamsOutputFilter = function(){
KalturaSwfFlavorParamsOutputFilter.super_.call(this);
};
util.inherits(KalturaSwfFlavorParamsOutputFilter, KalturaSwfFlavorParamsOutputBaseFilter);


/**
 */
var KalturaRemoteDropFolderBaseFilter = module.exports.KalturaRemoteDropFolderBaseFilter = function(){
KalturaRemoteDropFolderBaseFilter.super_.call(this);
};
util.inherits(KalturaRemoteDropFolderBaseFilter, KalturaDropFolderFilter);


/**
 */
var KalturaRemoteDropFolderFilter = module.exports.KalturaRemoteDropFolderFilter = function(){
KalturaRemoteDropFolderFilter.super_.call(this);
};
util.inherits(KalturaRemoteDropFolderFilter, KalturaRemoteDropFolderBaseFilter);


/**
 */
var KalturaFtpDropFolderBaseFilter = module.exports.KalturaFtpDropFolderBaseFilter = function(){
KalturaFtpDropFolderBaseFilter.super_.call(this);
};
util.inherits(KalturaFtpDropFolderBaseFilter, KalturaRemoteDropFolderFilter);


/**
 */
var KalturaSshDropFolderBaseFilter = module.exports.KalturaSshDropFolderBaseFilter = function(){
KalturaSshDropFolderBaseFilter.super_.call(this);
};
util.inherits(KalturaSshDropFolderBaseFilter, KalturaRemoteDropFolderFilter);


/**
 */
var KalturaSshDropFolderFilter = module.exports.KalturaSshDropFolderFilter = function(){
KalturaSshDropFolderFilter.super_.call(this);
};
util.inherits(KalturaSshDropFolderFilter, KalturaSshDropFolderBaseFilter);


/**
 */
var KalturaScpDropFolderBaseFilter = module.exports.KalturaScpDropFolderBaseFilter = function(){
KalturaScpDropFolderBaseFilter.super_.call(this);
};
util.inherits(KalturaScpDropFolderBaseFilter, KalturaSshDropFolderFilter);


/**
 */
var KalturaSftpDropFolderBaseFilter = module.exports.KalturaSftpDropFolderBaseFilter = function(){
KalturaSftpDropFolderBaseFilter.super_.call(this);
};
util.inherits(KalturaSftpDropFolderBaseFilter, KalturaSshDropFolderFilter);


/**
 */
var KalturaFtpDropFolderFilter = module.exports.KalturaFtpDropFolderFilter = function(){
KalturaFtpDropFolderFilter.super_.call(this);
};
util.inherits(KalturaFtpDropFolderFilter, KalturaFtpDropFolderBaseFilter);


/**
 */
var KalturaScpDropFolderFilter = module.exports.KalturaScpDropFolderFilter = function(){
KalturaScpDropFolderFilter.super_.call(this);
};
util.inherits(KalturaScpDropFolderFilter, KalturaScpDropFolderBaseFilter);


/**
 */
var KalturaSftpDropFolderFilter = module.exports.KalturaSftpDropFolderFilter = function(){
KalturaSftpDropFolderFilter.super_.call(this);
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
var KalturaDwhHourlyPartnerBaseFilter = module.exports.KalturaDwhHourlyPartnerBaseFilter = function(){
KalturaDwhHourlyPartnerBaseFilter.super_.call(this);
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
var KalturaDwhHourlyPartnerFilter = module.exports.KalturaDwhHourlyPartnerFilter = function(){
KalturaDwhHourlyPartnerFilter.super_.call(this);
};
util.inherits(KalturaDwhHourlyPartnerFilter, KalturaDwhHourlyPartnerBaseFilter);


/**
 * @param  offset  int    Offset in milliseconds.
 * @param  duration  int    Duration in milliseconds.
 */
var KalturaClipAttributes = module.exports.KalturaClipAttributes = function(){
KalturaClipAttributes.super_.call(this);
  this.offset = null;
  this.duration = null;
};
util.inherits(KalturaClipAttributes, KalturaOperationAttributes);


/**
 * @param  resource  KalturaContentResource    The content resource to associate with asset params.
 * @param  assetParamsId  int    The asset params to associate with the reaource.
 */
var KalturaAssetParamsResourceContainer = module.exports.KalturaAssetParamsResourceContainer = function(){
KalturaAssetParamsResourceContainer.super_.call(this);
  this.resource = null;
  this.assetParamsId = null;
};
util.inherits(KalturaAssetParamsResourceContainer, KalturaResource);


/**
 * @param  assetId  string    ID of the source asset .
 */
var KalturaAssetResource = module.exports.KalturaAssetResource = function(){
KalturaAssetResource.super_.call(this);
  this.assetId = null;
};
util.inherits(KalturaAssetResource, KalturaContentResource);


/**
 * @param  resources  array    Array of resources associated with asset params ids.
 */
var KalturaAssetsParamsResourceContainers = module.exports.KalturaAssetsParamsResourceContainers = function(){
KalturaAssetsParamsResourceContainers.super_.call(this);
  this.resources = null;
};
util.inherits(KalturaAssetsParamsResourceContainers, KalturaResource);


/**
 */
var KalturaDataCenterContentResource = module.exports.KalturaDataCenterContentResource = function(){
KalturaDataCenterContentResource.super_.call(this);
};
util.inherits(KalturaDataCenterContentResource, KalturaContentResource);


/**
 * @param  entryId  string    ID of the source entry .
 * @param  flavorParamsId  int    ID of the source flavor params, set to null to use the source flavor.
 */
var KalturaEntryResource = module.exports.KalturaEntryResource = function(){
KalturaEntryResource.super_.call(this);
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
var KalturaFileSyncResource = module.exports.KalturaFileSyncResource = function(){
KalturaFileSyncResource.super_.call(this);
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
var KalturaOperationResource = module.exports.KalturaOperationResource = function(){
KalturaOperationResource.super_.call(this);
  this.resource = null;
  this.operationAttributes = null;
  this.assetParamsId = null;
};
util.inherits(KalturaOperationResource, KalturaContentResource);


/**
 * @param  url  string    Remote URL, FTP, HTTP or HTTPS .
 */
var KalturaUrlResource = module.exports.KalturaUrlResource = function(){
KalturaUrlResource.super_.call(this);
  this.url = null;
};
util.inherits(KalturaUrlResource, KalturaContentResource);


/**
 * @param  storageProfileId  int    ID of storage profile to be associated with the created file sync, used for file serving URL composing. .
 */
var KalturaRemoteStorageResource = module.exports.KalturaRemoteStorageResource = function(){
KalturaRemoteStorageResource.super_.call(this);
  this.storageProfileId = null;
};
util.inherits(KalturaRemoteStorageResource, KalturaUrlResource);


/**
 * @param  resources  array    Array of remote stoage resources .
 */
var KalturaRemoteStorageResources = module.exports.KalturaRemoteStorageResources = function(){
KalturaRemoteStorageResources.super_.call(this);
  this.resources = null;
};
util.inherits(KalturaRemoteStorageResources, KalturaContentResource);


/**
 * @param  localFilePath  string    Full path to the local file .
 */
var KalturaServerFileResource = module.exports.KalturaServerFileResource = function(){
KalturaServerFileResource.super_.call(this);
  this.localFilePath = null;
};
util.inherits(KalturaServerFileResource, KalturaDataCenterContentResource);


/**
 * @param  privateKey  string    SSH private key.
 * @param  publicKey  string    SSH public key.
 * @param  keyPassphrase  string    Passphrase for SSH keys.
 */
var KalturaSshUrlResource = module.exports.KalturaSshUrlResource = function(){
KalturaSshUrlResource.super_.call(this);
  this.privateKey = null;
  this.publicKey = null;
  this.keyPassphrase = null;
};
util.inherits(KalturaSshUrlResource, KalturaUrlResource);


/**
 * @param  token  string    Token that returned from upload.upload action or uploadToken.add action. .
 */
var KalturaUploadedFileTokenResource = module.exports.KalturaUploadedFileTokenResource = function(){
KalturaUploadedFileTokenResource.super_.call(this);
  this.token = null;
};
util.inherits(KalturaUploadedFileTokenResource, KalturaDataCenterContentResource);


/**
 * @param  token  string    Token that returned from media server such as FMS or red5. .
 */
var KalturaWebcamTokenResource = module.exports.KalturaWebcamTokenResource = function(){
KalturaWebcamTokenResource.super_.call(this);
  this.token = null;
};
util.inherits(KalturaWebcamTokenResource, KalturaDataCenterContentResource);


/**
 * @param  dropFolderFileId  int    Id of the drop folder file object.
 */
var KalturaDropFolderFileResource = module.exports.KalturaDropFolderFileResource = function(){
KalturaDropFolderFileResource.super_.call(this);
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
var KalturaAssetParamsOutput = module.exports.KalturaAssetParamsOutput = function(){
KalturaAssetParamsOutput.super_.call(this);
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
var KalturaMediaFlavorParamsOutput = module.exports.KalturaMediaFlavorParamsOutput = function(){
KalturaMediaFlavorParamsOutput.super_.call(this);
};
util.inherits(KalturaMediaFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 */
var KalturaMediaFlavorParams = module.exports.KalturaMediaFlavorParams = function(){
KalturaMediaFlavorParams.super_.call(this);
};
util.inherits(KalturaMediaFlavorParams, KalturaFlavorParams);


/**
 */
var KalturaDocumentFlavorParamsOutput = module.exports.KalturaDocumentFlavorParamsOutput = function(){
KalturaDocumentFlavorParamsOutput.super_.call(this);
};
util.inherits(KalturaDocumentFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 */
var KalturaDocumentFlavorParams = module.exports.KalturaDocumentFlavorParams = function(){
KalturaDocumentFlavorParams.super_.call(this);
};
util.inherits(KalturaDocumentFlavorParams, KalturaFlavorParams);


/**
 * @param  readonly  bool    .
 */
var KalturaPdfFlavorParamsOutput = module.exports.KalturaPdfFlavorParamsOutput = function(){
KalturaPdfFlavorParamsOutput.super_.call(this);
  this.readonly = null;
};
util.inherits(KalturaPdfFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 * @param  readonly  bool    .
 */
var KalturaPdfFlavorParams = module.exports.KalturaPdfFlavorParams = function(){
KalturaPdfFlavorParams.super_.call(this);
  this.readonly = null;
};
util.inherits(KalturaPdfFlavorParams, KalturaFlavorParams);


/**
 * @param  flashVersion  int    .
 * @param  poly2Bitmap  bool    .
 */
var KalturaSwfFlavorParamsOutput = module.exports.KalturaSwfFlavorParamsOutput = function(){
KalturaSwfFlavorParamsOutput.super_.call(this);
  this.flashVersion = null;
  this.poly2Bitmap = null;
};
util.inherits(KalturaSwfFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 * @param  flashVersion  int    .
 * @param  poly2Bitmap  bool    .
 */
var KalturaSwfFlavorParams = module.exports.KalturaSwfFlavorParams = function(){
KalturaSwfFlavorParams.super_.call(this);
  this.flashVersion = null;
  this.poly2Bitmap = null;
};
util.inherits(KalturaSwfFlavorParams, KalturaFlavorParams);


/**
 * @param  service  string    .
 * @param  action  string    .
 */
var KalturaApiActionPermissionItem = module.exports.KalturaApiActionPermissionItem = function(){
KalturaApiActionPermissionItem.super_.call(this);
  this.service = null;
  this.action = null;
};
util.inherits(KalturaApiActionPermissionItem, KalturaPermissionItem);


/**
 * @param  object  string    .
 * @param  parameter  string    .
 * @param  action  string    .
 */
var KalturaApiParameterPermissionItem = module.exports.KalturaApiParameterPermissionItem = function(){
KalturaApiParameterPermissionItem.super_.call(this);
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
var KalturaGenericSyndicationFeed = module.exports.KalturaGenericSyndicationFeed = function(){
KalturaGenericSyndicationFeed.super_.call(this);
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
var KalturaGenericXsltSyndicationFeed = module.exports.KalturaGenericXsltSyndicationFeed = function(){
KalturaGenericXsltSyndicationFeed.super_.call(this);
  this.xslt = null;
  this.itemXpathsToExtend = null;
};
util.inherits(KalturaGenericXsltSyndicationFeed, KalturaGenericSyndicationFeed);


/**
 * @param  adultContent  string    .
 */
var KalturaGoogleVideoSyndicationFeed = module.exports.KalturaGoogleVideoSyndicationFeed = function(){
KalturaGoogleVideoSyndicationFeed.super_.call(this);
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
var KalturaITunesSyndicationFeed = module.exports.KalturaITunesSyndicationFeed = function(){
KalturaITunesSyndicationFeed.super_.call(this);
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
var KalturaTubeMogulSyndicationFeed = module.exports.KalturaTubeMogulSyndicationFeed = function(){
KalturaTubeMogulSyndicationFeed.super_.call(this);
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
var KalturaYahooSyndicationFeed = module.exports.KalturaYahooSyndicationFeed = function(){
KalturaYahooSyndicationFeed.super_.call(this);
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
var KalturaMailJob = module.exports.KalturaMailJob = function(){
KalturaMailJob.super_.call(this);
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
var KalturaProvisionJobData = module.exports.KalturaProvisionJobData = function(){
KalturaProvisionJobData.super_.call(this);
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
var KalturaAkamaiProvisionJobData = module.exports.KalturaAkamaiProvisionJobData = function(){
KalturaAkamaiProvisionJobData.super_.call(this);
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
var KalturaBulkDownloadJobData = module.exports.KalturaBulkDownloadJobData = function(){
KalturaBulkDownloadJobData.super_.call(this);
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
var KalturaBulkUploadJobData = module.exports.KalturaBulkUploadJobData = function(){
KalturaBulkUploadJobData.super_.call(this);
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
var KalturaCaptureThumbJobData = module.exports.KalturaCaptureThumbJobData = function(){
KalturaCaptureThumbJobData.super_.call(this);
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
var KalturaConvartableJobData = module.exports.KalturaConvartableJobData = function(){
KalturaConvartableJobData.super_.call(this);
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
var KalturaConvertCollectionJobData = module.exports.KalturaConvertCollectionJobData = function(){
KalturaConvertCollectionJobData.super_.call(this);
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
var KalturaConvertJobData = module.exports.KalturaConvertJobData = function(){
KalturaConvertJobData.super_.call(this);
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
var KalturaConvertProfileJobData = module.exports.KalturaConvertProfileJobData = function(){
KalturaConvertProfileJobData.super_.call(this);
  this.inputFileSyncLocalPath = null;
  this.thumbHeight = null;
  this.thumbBitrate = null;
};
util.inherits(KalturaConvertProfileJobData, KalturaJobData);


/**
 * @param  flavorAssetId  string    .
 */
var KalturaExtractMediaJobData = module.exports.KalturaExtractMediaJobData = function(){
KalturaExtractMediaJobData.super_.call(this);
  this.flavorAssetId = null;
};
util.inherits(KalturaExtractMediaJobData, KalturaConvartableJobData);


/**
 */
var KalturaFlattenJobData = module.exports.KalturaFlattenJobData = function(){
KalturaFlattenJobData.super_.call(this);
};
util.inherits(KalturaFlattenJobData, KalturaJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileLocalPath  string    .
 * @param  flavorAssetId  string    .
 */
var KalturaImportJobData = module.exports.KalturaImportJobData = function(){
KalturaImportJobData.super_.call(this);
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
var KalturaMailJobData = module.exports.KalturaMailJobData = function(){
KalturaMailJobData.super_.call(this);
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
var KalturaNotificationJobData = module.exports.KalturaNotificationJobData = function(){
KalturaNotificationJobData.super_.call(this);
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
var KalturaPostConvertJobData = module.exports.KalturaPostConvertJobData = function(){
KalturaPostConvertJobData.super_.call(this);
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
var KalturaPullJobData = module.exports.KalturaPullJobData = function(){
KalturaPullJobData.super_.call(this);
  this.srcFileUrl = null;
  this.destFileLocalPath = null;
};
util.inherits(KalturaPullJobData, KalturaJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileUrl  string    Should be set by the API
 *  .
 */
var KalturaRemoteConvertJobData = module.exports.KalturaRemoteConvertJobData = function(){
KalturaRemoteConvertJobData.super_.call(this);
  this.srcFileUrl = null;
  this.destFileUrl = null;
};
util.inherits(KalturaRemoteConvertJobData, KalturaConvartableJobData);


/**
 * @param  privateKey  string    .
 * @param  publicKey  string    .
 * @param  passPhrase  string    .
 */
var KalturaSshImportJobData = module.exports.KalturaSshImportJobData = function(){
KalturaSshImportJobData.super_.call(this);
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
var KalturaStorageJobData = module.exports.KalturaStorageJobData = function(){
KalturaStorageJobData.super_.call(this);
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
var KalturaStorageDeleteJobData = module.exports.KalturaStorageDeleteJobData = function(){
KalturaStorageDeleteJobData.super_.call(this);
};
util.inherits(KalturaStorageDeleteJobData, KalturaStorageJobData);


/**
 * @param  force  bool    .
 */
var KalturaStorageExportJobData = module.exports.KalturaStorageExportJobData = function(){
KalturaStorageExportJobData.super_.call(this);
  this.force = null;
};
util.inherits(KalturaStorageExportJobData, KalturaStorageJobData);


/**
 * @param  csvVersion  int    The version of the csv file
 *  .
 */
var KalturaBulkUploadCsvJobData = module.exports.KalturaBulkUploadCsvJobData = function(){
KalturaBulkUploadCsvJobData.super_.call(this);
  this.csvVersion = null;
};
util.inherits(KalturaBulkUploadCsvJobData, KalturaBulkUploadJobData);


/**
 */
var KalturaBulkUploadXmlJobData = module.exports.KalturaBulkUploadXmlJobData = function(){
KalturaBulkUploadXmlJobData.super_.call(this);
};
util.inherits(KalturaBulkUploadXmlJobData, KalturaBulkUploadJobData);


/**
 * @param  captionAssetId  string    .
 */
var KalturaParseCaptionAssetJobData = module.exports.KalturaParseCaptionAssetJobData = function(){
KalturaParseCaptionAssetJobData.super_.call(this);
  this.captionAssetId = null;
};
util.inherits(KalturaParseCaptionAssetJobData, KalturaJobData);


/**
 */
var KalturaDistributionJobProviderData = module.exports.KalturaDistributionJobProviderData = function(){
KalturaDistributionJobProviderData.super_.call(this);
};
util.inherits(KalturaDistributionJobProviderData, kcb.KalturaObjectBase);


/**
 * @param  version  string    .
 * @param  assetId  string    .
 * @param  remoteId  string    .
 */
var KalturaDistributionRemoteMediaFile = module.exports.KalturaDistributionRemoteMediaFile = function(){
KalturaDistributionRemoteMediaFile.super_.call(this);
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
var KalturaDistributionJobData = module.exports.KalturaDistributionJobData = function(){
KalturaDistributionJobData.super_.call(this);
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
var KalturaDistributionDeleteJobData = module.exports.KalturaDistributionDeleteJobData = function(){
KalturaDistributionDeleteJobData.super_.call(this);
};
util.inherits(KalturaDistributionDeleteJobData, KalturaDistributionJobData);


/**
 */
var KalturaDistributionUpdateJobData = module.exports.KalturaDistributionUpdateJobData = function(){
KalturaDistributionUpdateJobData.super_.call(this);
};
util.inherits(KalturaDistributionUpdateJobData, KalturaDistributionJobData);


/**
 */
var KalturaDistributionDisableJobData = module.exports.KalturaDistributionDisableJobData = function(){
KalturaDistributionDisableJobData.super_.call(this);
};
util.inherits(KalturaDistributionDisableJobData, KalturaDistributionUpdateJobData);


/**
 */
var KalturaDistributionEnableJobData = module.exports.KalturaDistributionEnableJobData = function(){
KalturaDistributionEnableJobData.super_.call(this);
};
util.inherits(KalturaDistributionEnableJobData, KalturaDistributionUpdateJobData);


/**
 * @param  plays  int    .
 * @param  views  int    .
 */
var KalturaDistributionFetchReportJobData = module.exports.KalturaDistributionFetchReportJobData = function(){
KalturaDistributionFetchReportJobData.super_.call(this);
  this.plays = null;
  this.views = null;
};
util.inherits(KalturaDistributionFetchReportJobData, KalturaDistributionJobData);


/**
 */
var KalturaDistributionSubmitJobData = module.exports.KalturaDistributionSubmitJobData = function(){
KalturaDistributionSubmitJobData.super_.call(this);
};
util.inherits(KalturaDistributionSubmitJobData, KalturaDistributionJobData);


/**
 * @param  dropFolderFileId  int    .
 */
var KalturaDropFolderImportJobData = module.exports.KalturaDropFolderImportJobData = function(){
KalturaDropFolderImportJobData.super_.call(this);
  this.dropFolderFileId = null;
};
util.inherits(KalturaDropFolderImportJobData, KalturaSshImportJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileLocalPath  string    .
 * @param  metadataId  int    .
 */
var KalturaImportMetadataJobData = module.exports.KalturaImportMetadataJobData = function(){
KalturaImportMetadataJobData.super_.call(this);
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
var KalturaTransformMetadataJobData = module.exports.KalturaTransformMetadataJobData = function(){
KalturaTransformMetadataJobData.super_.call(this);
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
var KalturaFileSyncImportJobData = module.exports.KalturaFileSyncImportJobData = function(){
KalturaFileSyncImportJobData.super_.call(this);
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
var KalturaVirusScanJobData = module.exports.KalturaVirusScanJobData = function(){
KalturaVirusScanJobData.super_.call(this);
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
var KalturaAuditTrailChangeItem = module.exports.KalturaAuditTrailChangeItem = function(){
KalturaAuditTrailChangeItem.super_.call(this);
  this.descriptor = null;
  this.oldValue = null;
  this.newValue = null;
};
util.inherits(KalturaAuditTrailChangeItem, kcb.KalturaObjectBase);


/**
 * @param  changedItems  array    .
 */
var KalturaAuditTrailChangeInfo = module.exports.KalturaAuditTrailChangeInfo = function(){
KalturaAuditTrailChangeInfo.super_.call(this);
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
var KalturaAuditTrailFileSyncCreateInfo = module.exports.KalturaAuditTrailFileSyncCreateInfo = function(){
KalturaAuditTrailFileSyncCreateInfo.super_.call(this);
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
var KalturaAuditTrailTextInfo = module.exports.KalturaAuditTrailTextInfo = function(){
KalturaAuditTrailTextInfo.super_.call(this);
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
var KalturaDistributionFieldConfig = module.exports.KalturaDistributionFieldConfig = function(){
KalturaDistributionFieldConfig.super_.call(this);
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
var KalturaConfigurableDistributionProfile = module.exports.KalturaConfigurableDistributionProfile = function(){
KalturaConfigurableDistributionProfile.super_.call(this);
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
var KalturaGenericDistributionProfileAction = module.exports.KalturaGenericDistributionProfileAction = function(){
KalturaGenericDistributionProfileAction.super_.call(this);
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
var KalturaGenericDistributionProfile = module.exports.KalturaGenericDistributionProfile = function(){
KalturaGenericDistributionProfile.super_.call(this);
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
var KalturaSyndicationDistributionProfile = module.exports.KalturaSyndicationDistributionProfile = function(){
KalturaSyndicationDistributionProfile.super_.call(this);
  this.xsl = null;
  this.feedId = null;
};
util.inherits(KalturaSyndicationDistributionProfile, KalturaDistributionProfile);


/**
 * @param  feedUrl  string     (readOnly).
 * @param  feedTitle  string    .
 */
var KalturaAvnDistributionProfile = module.exports.KalturaAvnDistributionProfile = function(){
KalturaAvnDistributionProfile.super_.call(this);
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
var KalturaComcastMrssDistributionProfile = module.exports.KalturaComcastMrssDistributionProfile = function(){
KalturaComcastMrssDistributionProfile.super_.call(this);
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
var KalturaDailymotionDistributionProfile = module.exports.KalturaDailymotionDistributionProfile = function(){
KalturaDailymotionDistributionProfile.super_.call(this);
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
var KalturaDoubleClickDistributionProfile = module.exports.KalturaDoubleClickDistributionProfile = function(){
KalturaDoubleClickDistributionProfile.super_.call(this);
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
var KalturaExampleDistributionProfile = module.exports.KalturaExampleDistributionProfile = function(){
KalturaExampleDistributionProfile.super_.call(this);
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
var KalturaFreewheelDistributionProfile = module.exports.KalturaFreewheelDistributionProfile = function(){
KalturaFreewheelDistributionProfile.super_.call(this);
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
var KalturaFreewheelGenericDistributionProfile = module.exports.KalturaFreewheelGenericDistributionProfile = function(){
KalturaFreewheelGenericDistributionProfile.super_.call(this);
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
var KalturaHuluDistributionProfile = module.exports.KalturaHuluDistributionProfile = function(){
KalturaHuluDistributionProfile.super_.call(this);
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
var KalturaIdeticDistributionProfile = module.exports.KalturaIdeticDistributionProfile = function(){
KalturaIdeticDistributionProfile.super_.call(this);
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
var KalturaNdnDistributionProfile = module.exports.KalturaNdnDistributionProfile = function(){
KalturaNdnDistributionProfile.super_.call(this);
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
var KalturaPodcastDistributionProfile = module.exports.KalturaPodcastDistributionProfile = function(){
KalturaPodcastDistributionProfile.super_.call(this);
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
var KalturaSynacorHboDistributionProfile = module.exports.KalturaSynacorHboDistributionProfile = function(){
KalturaSynacorHboDistributionProfile.super_.call(this);
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
var KalturaTimeWarnerDistributionProfile = module.exports.KalturaTimeWarnerDistributionProfile = function(){
KalturaTimeWarnerDistributionProfile.super_.call(this);
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
var KalturaTVComDistributionProfile = module.exports.KalturaTVComDistributionProfile = function(){
KalturaTVComDistributionProfile.super_.call(this);
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
var KalturaUverseDistributionProfile = module.exports.KalturaUverseDistributionProfile = function(){
KalturaUverseDistributionProfile.super_.call(this);
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
var KalturaVerizonVcastDistributionProfile = module.exports.KalturaVerizonVcastDistributionProfile = function(){
KalturaVerizonVcastDistributionProfile.super_.call(this);
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
var KalturaYahooDistributionProfile = module.exports.KalturaYahooDistributionProfile = function(){
KalturaYahooDistributionProfile.super_.call(this);
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
var KalturaYouTubeDistributionProfile = module.exports.KalturaYouTubeDistributionProfile = function(){
KalturaYouTubeDistributionProfile.super_.call(this);
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
var KalturaYoutubeApiDistributionProfile = module.exports.KalturaYoutubeApiDistributionProfile = function(){
KalturaYoutubeApiDistributionProfile.super_.call(this);
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
var KalturaDistributionValidationErrorInvalidData = module.exports.KalturaDistributionValidationErrorInvalidData = function(){
KalturaDistributionValidationErrorInvalidData.super_.call(this);
  this.fieldName = null;
  this.validationErrorType = null;
  this.validationErrorParam = null;
};
util.inherits(KalturaDistributionValidationErrorInvalidData, KalturaDistributionValidationError);


/**
 * @param  metadataProfileId  int    .
 */
var KalturaDistributionValidationErrorInvalidMetadata = module.exports.KalturaDistributionValidationErrorInvalidMetadata = function(){
KalturaDistributionValidationErrorInvalidMetadata.super_.call(this);
  this.metadataProfileId = null;
};
util.inherits(KalturaDistributionValidationErrorInvalidMetadata, KalturaDistributionValidationErrorInvalidData);


/**
 * @param  flavorParamsId  string    .
 */
var KalturaDistributionValidationErrorMissingFlavor = module.exports.KalturaDistributionValidationErrorMissingFlavor = function(){
KalturaDistributionValidationErrorMissingFlavor.super_.call(this);
  this.flavorParamsId = null;
};
util.inherits(KalturaDistributionValidationErrorMissingFlavor, KalturaDistributionValidationError);


/**
 * @param  fieldName  string    .
 */
var KalturaDistributionValidationErrorMissingMetadata = module.exports.KalturaDistributionValidationErrorMissingMetadata = function(){
KalturaDistributionValidationErrorMissingMetadata.super_.call(this);
  this.fieldName = null;
};
util.inherits(KalturaDistributionValidationErrorMissingMetadata, KalturaDistributionValidationError);


/**
 * @param  dimensions  KalturaDistributionThumbDimensions    .
 */
var KalturaDistributionValidationErrorMissingThumbnail = module.exports.KalturaDistributionValidationErrorMissingThumbnail = function(){
KalturaDistributionValidationErrorMissingThumbnail.super_.call(this);
  this.dimensions = null;
};
util.inherits(KalturaDistributionValidationErrorMissingThumbnail, KalturaDistributionValidationError);


/**
 */
var KalturaSyndicationDistributionProvider = module.exports.KalturaSyndicationDistributionProvider = function(){
KalturaSyndicationDistributionProvider.super_.call(this);
};
util.inherits(KalturaSyndicationDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaAvnDistributionProvider = module.exports.KalturaAvnDistributionProvider = function(){
KalturaAvnDistributionProvider.super_.call(this);
};
util.inherits(KalturaAvnDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaComcastMrssDistributionProvider = module.exports.KalturaComcastMrssDistributionProvider = function(){
KalturaComcastMrssDistributionProvider.super_.call(this);
};
util.inherits(KalturaComcastMrssDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaDailymotionDistributionProvider = module.exports.KalturaDailymotionDistributionProvider = function(){
KalturaDailymotionDistributionProvider.super_.call(this);
};
util.inherits(KalturaDailymotionDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaDoubleClickDistributionProvider = module.exports.KalturaDoubleClickDistributionProvider = function(){
KalturaDoubleClickDistributionProvider.super_.call(this);
};
util.inherits(KalturaDoubleClickDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaExampleDistributionProvider = module.exports.KalturaExampleDistributionProvider = function(){
KalturaExampleDistributionProvider.super_.call(this);
};
util.inherits(KalturaExampleDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaFreewheelDistributionProvider = module.exports.KalturaFreewheelDistributionProvider = function(){
KalturaFreewheelDistributionProvider.super_.call(this);
};
util.inherits(KalturaFreewheelDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaFreewheelGenericDistributionProvider = module.exports.KalturaFreewheelGenericDistributionProvider = function(){
KalturaFreewheelGenericDistributionProvider.super_.call(this);
};
util.inherits(KalturaFreewheelGenericDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaHuluDistributionProvider = module.exports.KalturaHuluDistributionProvider = function(){
KalturaHuluDistributionProvider.super_.call(this);
};
util.inherits(KalturaHuluDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaIdeticDistributionProvider = module.exports.KalturaIdeticDistributionProvider = function(){
KalturaIdeticDistributionProvider.super_.call(this);
};
util.inherits(KalturaIdeticDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaNdnDistributionProvider = module.exports.KalturaNdnDistributionProvider = function(){
KalturaNdnDistributionProvider.super_.call(this);
};
util.inherits(KalturaNdnDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaPodcastDistributionProvider = module.exports.KalturaPodcastDistributionProvider = function(){
KalturaPodcastDistributionProvider.super_.call(this);
};
util.inherits(KalturaPodcastDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaSynacorHboDistributionProvider = module.exports.KalturaSynacorHboDistributionProvider = function(){
KalturaSynacorHboDistributionProvider.super_.call(this);
};
util.inherits(KalturaSynacorHboDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaTimeWarnerDistributionProvider = module.exports.KalturaTimeWarnerDistributionProvider = function(){
KalturaTimeWarnerDistributionProvider.super_.call(this);
};
util.inherits(KalturaTimeWarnerDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaTVComDistributionProvider = module.exports.KalturaTVComDistributionProvider = function(){
KalturaTVComDistributionProvider.super_.call(this);
};
util.inherits(KalturaTVComDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaUverseDistributionProvider = module.exports.KalturaUverseDistributionProvider = function(){
KalturaUverseDistributionProvider.super_.call(this);
};
util.inherits(KalturaUverseDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaVerizonVcastDistributionProvider = module.exports.KalturaVerizonVcastDistributionProvider = function(){
KalturaVerizonVcastDistributionProvider.super_.call(this);
};
util.inherits(KalturaVerizonVcastDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaYahooDistributionProvider = module.exports.KalturaYahooDistributionProvider = function(){
KalturaYahooDistributionProvider.super_.call(this);
};
util.inherits(KalturaYahooDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaYouTubeDistributionProvider = module.exports.KalturaYouTubeDistributionProvider = function(){
KalturaYouTubeDistributionProvider.super_.call(this);
};
util.inherits(KalturaYouTubeDistributionProvider, KalturaDistributionProvider);


/**
 */
var KalturaYoutubeApiDistributionProvider = module.exports.KalturaYoutubeApiDistributionProvider = function(){
KalturaYoutubeApiDistributionProvider.super_.call(this);
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
var KalturaAdCuePoint = module.exports.KalturaAdCuePoint = function(){
KalturaAdCuePoint.super_.call(this);
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
var KalturaAnnotation = module.exports.KalturaAnnotation = function(){
KalturaAnnotation.super_.call(this);
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
var KalturaCodeCuePoint = module.exports.KalturaCodeCuePoint = function(){
KalturaCodeCuePoint.super_.call(this);
  this.code = null;
  this.description = null;
};
util.inherits(KalturaCodeCuePoint, KalturaCuePoint);


/**
 */
var KalturaDropFolderXmlBulkUploadFileHandlerConfig = module.exports.KalturaDropFolderXmlBulkUploadFileHandlerConfig = function(){
KalturaDropFolderXmlBulkUploadFileHandlerConfig.super_.call(this);
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
var KalturaDropFolderContentFileHandlerConfig = module.exports.KalturaDropFolderContentFileHandlerConfig = function(){
KalturaDropFolderContentFileHandlerConfig.super_.call(this);
  this.contentMatchPolicy = null;
  this.slugRegex = null;
};
util.inherits(KalturaDropFolderContentFileHandlerConfig, KalturaDropFolderFileHandlerConfig);


/**
 */
var KalturaRemoteDropFolder = module.exports.KalturaRemoteDropFolder = function(){
KalturaRemoteDropFolder.super_.call(this);
};
util.inherits(KalturaRemoteDropFolder, KalturaDropFolder);


/**
 * @param  host  string    .
 * @param  port  int    .
 * @param  username  string    .
 * @param  password  string    .
 */
var KalturaFtpDropFolder = module.exports.KalturaFtpDropFolder = function(){
KalturaFtpDropFolder.super_.call(this);
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
var KalturaSshDropFolder = module.exports.KalturaSshDropFolder = function(){
KalturaSshDropFolder.super_.call(this);
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
var KalturaScpDropFolder = module.exports.KalturaScpDropFolder = function(){
KalturaScpDropFolder.super_.call(this);
};
util.inherits(KalturaScpDropFolder, KalturaSshDropFolder);


/**
 */
var KalturaSftpDropFolder = module.exports.KalturaSftpDropFolder = function(){
KalturaSftpDropFolder.super_.call(this);
};
util.inherits(KalturaSftpDropFolder, KalturaSshDropFolder);


