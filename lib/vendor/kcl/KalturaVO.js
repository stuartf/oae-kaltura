var util = require('util');
var kcb = require('./KalturaClientBase');
/**
 */
function KalturaBaseRestriction(){
  KalturaBaseRestriction.super_.call(this);
};
module.exports.KalturaBaseRestriction = KalturaBaseRestriction;

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
function KalturaAccessControl(){
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
module.exports.KalturaAccessControl = KalturaAccessControl;

util.inherits(KalturaAccessControl, kcb.KalturaObjectBase);


/**
 */
function KalturaSearchItem(){
  KalturaSearchItem.super_.call(this);
};
module.exports.KalturaSearchItem = KalturaSearchItem;

util.inherits(KalturaSearchItem, kcb.KalturaObjectBase);


/**
 * @param  orderBy  string    .
 * @param  advancedSearch  KalturaSearchItem    .
 */
function KalturaFilter(){
  KalturaFilter.super_.call(this);
  this.orderBy = null;
  this.advancedSearch = null;
};
module.exports.KalturaFilter = KalturaFilter;

util.inherits(KalturaFilter, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  createdAtGreaterThanOrEqual  int    .
 * @param  createdAtLessThanOrEqual  int    .
 */
function KalturaAccessControlBaseFilter(){
  KalturaAccessControlBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.createdAtGreaterThanOrEqual = null;
  this.createdAtLessThanOrEqual = null;
};
module.exports.KalturaAccessControlBaseFilter = KalturaAccessControlBaseFilter;

util.inherits(KalturaAccessControlBaseFilter, KalturaFilter);


/**
 */
function KalturaAccessControlFilter(){
  KalturaAccessControlFilter.super_.call(this);
};
module.exports.KalturaAccessControlFilter = KalturaAccessControlFilter;

util.inherits(KalturaAccessControlFilter, KalturaAccessControlBaseFilter);


/**
 * @param  pageSize  int    The number of objects to retrieve. (Default is 30, maximum page size is 500).
 *  .
 * @param  pageIndex  int    The page number for which {pageSize} of objects should be retrieved (Default is 1).
 *  .
 */
function KalturaFilterPager(){
  KalturaFilterPager.super_.call(this);
  this.pageSize = null;
  this.pageIndex = null;
};
module.exports.KalturaFilterPager = KalturaFilterPager;

util.inherits(KalturaFilterPager, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaAccessControlListResponse(){
  KalturaAccessControlListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaAccessControlListResponse = KalturaAccessControlListResponse;

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
function KalturaUser(){
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
module.exports.KalturaUser = KalturaUser;

util.inherits(KalturaUser, kcb.KalturaObjectBase);


/**
 */
function KalturaAdminUser(){
  KalturaAdminUser.super_.call(this);
};
module.exports.KalturaAdminUser = KalturaAdminUser;

util.inherits(KalturaAdminUser, KalturaUser);


/**
 */
function KalturaDynamicEnum(){
  KalturaDynamicEnum.super_.call(this);
};
module.exports.KalturaDynamicEnum = KalturaDynamicEnum;

util.inherits(KalturaDynamicEnum, kcb.KalturaObjectBase);


/**
 */
function KalturaOperationAttributes(){
  KalturaOperationAttributes.super_.call(this);
};
module.exports.KalturaOperationAttributes = KalturaOperationAttributes;

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
function KalturaBaseEntry(){
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
module.exports.KalturaBaseEntry = KalturaBaseEntry;

util.inherits(KalturaBaseEntry, kcb.KalturaObjectBase);


/**
 */
function KalturaResource(){
  KalturaResource.super_.call(this);
};
module.exports.KalturaResource = KalturaResource;

util.inherits(KalturaResource, kcb.KalturaObjectBase);


/**
 * @param  storageProfileId  int     (readOnly).
 * @param  uri  string     (readOnly).
 */
function KalturaRemotePath(){
  KalturaRemotePath.super_.call(this);
  this.storageProfileId = null;
  this.uri = null;
};
module.exports.KalturaRemotePath = KalturaRemotePath;

util.inherits(KalturaRemotePath, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaRemotePathListResponse(){
  KalturaRemotePathListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaRemotePathListResponse = KalturaRemotePathListResponse;

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
function KalturaBaseEntryBaseFilter(){
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
module.exports.KalturaBaseEntryBaseFilter = KalturaBaseEntryBaseFilter;

util.inherits(KalturaBaseEntryBaseFilter, KalturaFilter);


/**
 * @param  freeText  string    .
 * @param  isRoot  int    .
 */
function KalturaBaseEntryFilter(){
  KalturaBaseEntryFilter.super_.call(this);
  this.freeText = null;
  this.isRoot = null;
};
module.exports.KalturaBaseEntryFilter = KalturaBaseEntryFilter;

util.inherits(KalturaBaseEntryFilter, KalturaBaseEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaBaseEntryListResponse(){
  KalturaBaseEntryListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaBaseEntryListResponse = KalturaBaseEntryListResponse;

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
function KalturaModerationFlag(){
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
module.exports.KalturaModerationFlag = KalturaModerationFlag;

util.inherits(KalturaModerationFlag, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaModerationFlagListResponse(){
  KalturaModerationFlagListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaModerationFlagListResponse = KalturaModerationFlagListResponse;

util.inherits(KalturaModerationFlagListResponse, kcb.KalturaObjectBase);


/**
 * @param  referrer  string    .
 * @param  flavorAssetId  string    .
 * @param  streamerType  string    .
 * @param  mediaProtocol  string    .
 */
function KalturaEntryContextDataParams(){
  KalturaEntryContextDataParams.super_.call(this);
  this.referrer = null;
  this.flavorAssetId = null;
  this.streamerType = null;
  this.mediaProtocol = null;
};
module.exports.KalturaEntryContextDataParams = KalturaEntryContextDataParams;

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
function KalturaEntryContextDataResult(){
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
module.exports.KalturaEntryContextDataResult = KalturaEntryContextDataResult;

util.inherits(KalturaEntryContextDataResult, kcb.KalturaObjectBase);


/**
 * @param  field  string    .
 * @param  value  string    .
 */
function KalturaBulkUploadPluginData(){
  KalturaBulkUploadPluginData.super_.call(this);
  this.field = null;
  this.value = null;
};
module.exports.KalturaBulkUploadPluginData = KalturaBulkUploadPluginData;

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
function KalturaBulkUploadResult(){
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
module.exports.KalturaBulkUploadResult = KalturaBulkUploadResult;

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
function KalturaBulkUpload(){
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
module.exports.KalturaBulkUpload = KalturaBulkUpload;

util.inherits(KalturaBulkUpload, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaBulkUploadListResponse(){
  KalturaBulkUploadListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaBulkUploadListResponse = KalturaBulkUploadListResponse;

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
function KalturaCategory(){
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
module.exports.KalturaCategory = KalturaCategory;

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
function KalturaCategoryBaseFilter(){
  KalturaCategoryBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.parentIdEqual = null;
  this.parentIdIn = null;
  this.depthEqual = null;
  this.fullNameEqual = null;
  this.fullNameStartsWith = null;
};
module.exports.KalturaCategoryBaseFilter = KalturaCategoryBaseFilter;

util.inherits(KalturaCategoryBaseFilter, KalturaFilter);


/**
 */
function KalturaCategoryFilter(){
  KalturaCategoryFilter.super_.call(this);
};
module.exports.KalturaCategoryFilter = KalturaCategoryFilter;

util.inherits(KalturaCategoryFilter, KalturaCategoryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaCategoryListResponse(){
  KalturaCategoryListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaCategoryListResponse = KalturaCategoryListResponse;

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
function KalturaConversionProfileAssetParamsBaseFilter(){
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
module.exports.KalturaConversionProfileAssetParamsBaseFilter = KalturaConversionProfileAssetParamsBaseFilter;

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
function KalturaConversionProfileBaseFilter(){
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
module.exports.KalturaConversionProfileBaseFilter = KalturaConversionProfileBaseFilter;

util.inherits(KalturaConversionProfileBaseFilter, KalturaFilter);


/**
 */
function KalturaConversionProfileFilter(){
  KalturaConversionProfileFilter.super_.call(this);
};
module.exports.KalturaConversionProfileFilter = KalturaConversionProfileFilter;

util.inherits(KalturaConversionProfileFilter, KalturaConversionProfileBaseFilter);


/**
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 * @param  isSystemDefaultEqual  int    .
 * @param  tagsEqual  string    .
 */
function KalturaAssetParamsBaseFilter(){
  KalturaAssetParamsBaseFilter.super_.call(this);
  this.systemNameEqual = null;
  this.systemNameIn = null;
  this.isSystemDefaultEqual = null;
  this.tagsEqual = null;
};
module.exports.KalturaAssetParamsBaseFilter = KalturaAssetParamsBaseFilter;

util.inherits(KalturaAssetParamsBaseFilter, KalturaFilter);


/**
 */
function KalturaAssetParamsFilter(){
  KalturaAssetParamsFilter.super_.call(this);
};
module.exports.KalturaAssetParamsFilter = KalturaAssetParamsFilter;

util.inherits(KalturaAssetParamsFilter, KalturaAssetParamsBaseFilter);


/**
 * @param  conversionProfileIdFilter  KalturaConversionProfileFilter    .
 * @param  assetParamsIdFilter  KalturaAssetParamsFilter    .
 */
function KalturaConversionProfileAssetParamsFilter(){
  KalturaConversionProfileAssetParamsFilter.super_.call(this);
  this.conversionProfileIdFilter = null;
  this.assetParamsIdFilter = null;
};
module.exports.KalturaConversionProfileAssetParamsFilter = KalturaConversionProfileAssetParamsFilter;

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
function KalturaConversionProfileAssetParams(){
  KalturaConversionProfileAssetParams.super_.call(this);
  this.conversionProfileId = null;
  this.assetParamsId = null;
  this.readyBehavior = null;
  this.origin = null;
  this.systemName = null;
  this.forceNoneComplied = null;
};
module.exports.KalturaConversionProfileAssetParams = KalturaConversionProfileAssetParams;

util.inherits(KalturaConversionProfileAssetParams, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaConversionProfileAssetParamsListResponse(){
  KalturaConversionProfileAssetParamsListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaConversionProfileAssetParamsListResponse = KalturaConversionProfileAssetParamsListResponse;

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
function KalturaCropDimensions(){
  KalturaCropDimensions.super_.call(this);
  this.left = null;
  this.top = null;
  this.width = null;
  this.height = null;
};
module.exports.KalturaCropDimensions = KalturaCropDimensions;

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
function KalturaConversionProfile(){
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
module.exports.KalturaConversionProfile = KalturaConversionProfile;

util.inherits(KalturaConversionProfile, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaConversionProfileListResponse(){
  KalturaConversionProfileListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaConversionProfileListResponse = KalturaConversionProfileListResponse;

util.inherits(KalturaConversionProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  dataContent  string    The data of the entry.
 * @param  retrieveDataContentByGet  bool    indicator whether to return the object for get action with the dataContent field. (insertOnly).
 */
function KalturaDataEntry(){
  KalturaDataEntry.super_.call(this);
  this.dataContent = null;
  this.retrieveDataContentByGet = null;
};
module.exports.KalturaDataEntry = KalturaDataEntry;

util.inherits(KalturaDataEntry, KalturaBaseEntry);


/**
 */
function KalturaDataEntryBaseFilter(){
  KalturaDataEntryBaseFilter.super_.call(this);
};
module.exports.KalturaDataEntryBaseFilter = KalturaDataEntryBaseFilter;

util.inherits(KalturaDataEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
function KalturaDataEntryFilter(){
  KalturaDataEntryFilter.super_.call(this);
};
module.exports.KalturaDataEntryFilter = KalturaDataEntryFilter;

util.inherits(KalturaDataEntryFilter, KalturaDataEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaDataListResponse(){
  KalturaDataListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaDataListResponse = KalturaDataListResponse;

util.inherits(KalturaDataListResponse, kcb.KalturaObjectBase);


/**
 * @param  documentType  int    The type of the document (insertOnly).
 * @param  assetParamsIds  string    Comma separated asset params ids that exists for this media entry
 *   (readOnly).
 */
function KalturaDocumentEntry(){
  KalturaDocumentEntry.super_.call(this);
  this.documentType = null;
  this.assetParamsIds = null;
};
module.exports.KalturaDocumentEntry = KalturaDocumentEntry;

util.inherits(KalturaDocumentEntry, KalturaBaseEntry);


/**
 * @param  flavorParamsId  int    The id of the flavor params, set to null for source flavor
 *  .
 * @param  name  string    Attribute name  
 *  .
 * @param  value  string    Attribute value  
 *  .
 */
function KalturaConversionAttribute(){
  KalturaConversionAttribute.super_.call(this);
  this.flavorParamsId = null;
  this.name = null;
  this.value = null;
};
module.exports.KalturaConversionAttribute = KalturaConversionAttribute;

util.inherits(KalturaConversionAttribute, kcb.KalturaObjectBase);


/**
 * @param  documentTypeEqual  int    .
 * @param  documentTypeIn  string    .
 * @param  assetParamsIdsMatchOr  string    .
 * @param  assetParamsIdsMatchAnd  string    .
 */
function KalturaDocumentEntryBaseFilter(){
  KalturaDocumentEntryBaseFilter.super_.call(this);
  this.documentTypeEqual = null;
  this.documentTypeIn = null;
  this.assetParamsIdsMatchOr = null;
  this.assetParamsIdsMatchAnd = null;
};
module.exports.KalturaDocumentEntryBaseFilter = KalturaDocumentEntryBaseFilter;

util.inherits(KalturaDocumentEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
function KalturaDocumentEntryFilter(){
  KalturaDocumentEntryFilter.super_.call(this);
};
module.exports.KalturaDocumentEntryFilter = KalturaDocumentEntryFilter;

util.inherits(KalturaDocumentEntryFilter, KalturaDocumentEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaDocumentListResponse(){
  KalturaDocumentListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaDocumentListResponse = KalturaDocumentListResponse;

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
function KalturaEmailIngestionProfile(){
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
module.exports.KalturaEmailIngestionProfile = KalturaEmailIngestionProfile;

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
function KalturaPlayableEntry(){
  KalturaPlayableEntry.super_.call(this);
  this.plays = null;
  this.views = null;
  this.width = null;
  this.height = null;
  this.duration = null;
  this.msDuration = null;
  this.durationType = null;
};
module.exports.KalturaPlayableEntry = KalturaPlayableEntry;

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
function KalturaMediaEntry(){
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
module.exports.KalturaMediaEntry = KalturaMediaEntry;

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
function KalturaAsset(){
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
module.exports.KalturaAsset = KalturaAsset;

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
function KalturaFlavorAsset(){
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
module.exports.KalturaFlavorAsset = KalturaFlavorAsset;

util.inherits(KalturaFlavorAsset, KalturaAsset);


/**
 */
function KalturaContentResource(){
  KalturaContentResource.super_.call(this);
};
module.exports.KalturaContentResource = KalturaContentResource;

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
function KalturaAssetBaseFilter(){
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
module.exports.KalturaAssetBaseFilter = KalturaAssetBaseFilter;

util.inherits(KalturaAssetBaseFilter, KalturaFilter);


/**
 */
function KalturaAssetFilter(){
  KalturaAssetFilter.super_.call(this);
};
module.exports.KalturaAssetFilter = KalturaAssetFilter;

util.inherits(KalturaAssetFilter, KalturaAssetBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaFlavorAssetListResponse(){
  KalturaFlavorAssetListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaFlavorAssetListResponse = KalturaFlavorAssetListResponse;

util.inherits(KalturaFlavorAssetListResponse, kcb.KalturaObjectBase);


/**
 * @param  value  string    .
 */
function KalturaString(){
  KalturaString.super_.call(this);
  this.value = null;
};
module.exports.KalturaString = KalturaString;

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
function KalturaAssetParams(){
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
module.exports.KalturaAssetParams = KalturaAssetParams;

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
function KalturaFlavorParams(){
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
module.exports.KalturaFlavorParams = KalturaFlavorParams;

util.inherits(KalturaFlavorParams, KalturaAssetParams);


/**
 * @param  flavorAsset  KalturaFlavorAsset    The Flavor Asset (Can be null when there are params without asset)
 *  .
 * @param  flavorParams  KalturaFlavorParams    The Flavor Params
 *  .
 * @param  entryId  string    The entry id
 *  .
 */
function KalturaFlavorAssetWithParams(){
  KalturaFlavorAssetWithParams.super_.call(this);
  this.flavorAsset = null;
  this.flavorParams = null;
  this.entryId = null;
};
module.exports.KalturaFlavorAssetWithParams = KalturaFlavorAssetWithParams;

util.inherits(KalturaFlavorAssetWithParams, kcb.KalturaObjectBase);


/**
 * @param  formatEqual  string    .
 */
function KalturaFlavorParamsBaseFilter(){
  KalturaFlavorParamsBaseFilter.super_.call(this);
  this.formatEqual = null;
};
module.exports.KalturaFlavorParamsBaseFilter = KalturaFlavorParamsBaseFilter;

util.inherits(KalturaFlavorParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
function KalturaFlavorParamsFilter(){
  KalturaFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaFlavorParamsFilter = KalturaFlavorParamsFilter;

util.inherits(KalturaFlavorParamsFilter, KalturaFlavorParamsBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaFlavorParamsListResponse(){
  KalturaFlavorParamsListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaFlavorParamsListResponse = KalturaFlavorParamsListResponse;

util.inherits(KalturaFlavorParamsListResponse, kcb.KalturaObjectBase);


/**
 * @param  bitrate  int    .
 * @param  width  int    .
 * @param  height  int    .
 */
function KalturaLiveStreamBitrate(){
  KalturaLiveStreamBitrate.super_.call(this);
  this.bitrate = null;
  this.width = null;
  this.height = null;
};
module.exports.KalturaLiveStreamBitrate = KalturaLiveStreamBitrate;

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
function KalturaLiveStreamEntry(){
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
module.exports.KalturaLiveStreamEntry = KalturaLiveStreamEntry;

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
function KalturaLiveStreamAdminEntry(){
  KalturaLiveStreamAdminEntry.super_.call(this);
  this.encodingIP1 = null;
  this.encodingIP2 = null;
  this.streamPassword = null;
  this.streamUsername = null;
};
module.exports.KalturaLiveStreamAdminEntry = KalturaLiveStreamAdminEntry;

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
function KalturaPlayableEntryBaseFilter(){
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
module.exports.KalturaPlayableEntryBaseFilter = KalturaPlayableEntryBaseFilter;

util.inherits(KalturaPlayableEntryBaseFilter, KalturaBaseEntryFilter);


/**
 */
function KalturaPlayableEntryFilter(){
  KalturaPlayableEntryFilter.super_.call(this);
};
module.exports.KalturaPlayableEntryFilter = KalturaPlayableEntryFilter;

util.inherits(KalturaPlayableEntryFilter, KalturaPlayableEntryBaseFilter);


/**
 * @param  mediaTypeEqual  int    .
 * @param  mediaTypeIn  string    .
 * @param  mediaDateGreaterThanOrEqual  int    .
 * @param  mediaDateLessThanOrEqual  int    .
 * @param  flavorParamsIdsMatchOr  string    .
 * @param  flavorParamsIdsMatchAnd  string    .
 */
function KalturaMediaEntryBaseFilter(){
  KalturaMediaEntryBaseFilter.super_.call(this);
  this.mediaTypeEqual = null;
  this.mediaTypeIn = null;
  this.mediaDateGreaterThanOrEqual = null;
  this.mediaDateLessThanOrEqual = null;
  this.flavorParamsIdsMatchOr = null;
  this.flavorParamsIdsMatchAnd = null;
};
module.exports.KalturaMediaEntryBaseFilter = KalturaMediaEntryBaseFilter;

util.inherits(KalturaMediaEntryBaseFilter, KalturaPlayableEntryFilter);


/**
 */
function KalturaMediaEntryFilter(){
  KalturaMediaEntryFilter.super_.call(this);
};
module.exports.KalturaMediaEntryFilter = KalturaMediaEntryFilter;

util.inherits(KalturaMediaEntryFilter, KalturaMediaEntryBaseFilter);


/**
 */
function KalturaLiveStreamEntryBaseFilter(){
  KalturaLiveStreamEntryBaseFilter.super_.call(this);
};
module.exports.KalturaLiveStreamEntryBaseFilter = KalturaLiveStreamEntryBaseFilter;

util.inherits(KalturaLiveStreamEntryBaseFilter, KalturaMediaEntryFilter);


/**
 */
function KalturaLiveStreamEntryFilter(){
  KalturaLiveStreamEntryFilter.super_.call(this);
};
module.exports.KalturaLiveStreamEntryFilter = KalturaLiveStreamEntryFilter;

util.inherits(KalturaLiveStreamEntryFilter, KalturaLiveStreamEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaLiveStreamListResponse(){
  KalturaLiveStreamListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaLiveStreamListResponse = KalturaLiveStreamListResponse;

util.inherits(KalturaLiveStreamListResponse, kcb.KalturaObjectBase);


/**
 * @param  flavorAssetIdEqual  string    .
 */
function KalturaMediaInfoBaseFilter(){
  KalturaMediaInfoBaseFilter.super_.call(this);
  this.flavorAssetIdEqual = null;
};
module.exports.KalturaMediaInfoBaseFilter = KalturaMediaInfoBaseFilter;

util.inherits(KalturaMediaInfoBaseFilter, KalturaFilter);


/**
 */
function KalturaMediaInfoFilter(){
  KalturaMediaInfoFilter.super_.call(this);
};
module.exports.KalturaMediaInfoFilter = KalturaMediaInfoFilter;

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
function KalturaMediaInfo(){
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
module.exports.KalturaMediaInfo = KalturaMediaInfo;

util.inherits(KalturaMediaInfo, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaMediaInfoListResponse(){
  KalturaMediaInfoListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaMediaInfoListResponse = KalturaMediaInfoListResponse;

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
function KalturaSearch(){
  KalturaSearch.super_.call(this);
  this.keyWords = null;
  this.searchSource = null;
  this.mediaType = null;
  this.extraData = null;
  this.authData = null;
};
module.exports.KalturaSearch = KalturaSearch;

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
function KalturaSearchResult(){
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
module.exports.KalturaSearchResult = KalturaSearchResult;

util.inherits(KalturaSearchResult, KalturaSearch);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaMediaListResponse(){
  KalturaMediaListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaMediaListResponse = KalturaMediaListResponse;

util.inherits(KalturaMediaListResponse, kcb.KalturaObjectBase);


/**
 * @param  hasRealThumbnail  bool    Indicates whether the user has submited a real thumbnail to the mix (Not the one that was generated automaticaly)
 *   (readOnly).
 * @param  editorType  int    The editor type used to edit the metadata
 *  .
 * @param  dataContent  string    The xml data of the mix.
 */
function KalturaMixEntry(){
  KalturaMixEntry.super_.call(this);
  this.hasRealThumbnail = null;
  this.editorType = null;
  this.dataContent = null;
};
module.exports.KalturaMixEntry = KalturaMixEntry;

util.inherits(KalturaMixEntry, KalturaPlayableEntry);


/**
 */
function KalturaMixEntryBaseFilter(){
  KalturaMixEntryBaseFilter.super_.call(this);
};
module.exports.KalturaMixEntryBaseFilter = KalturaMixEntryBaseFilter;

util.inherits(KalturaMixEntryBaseFilter, KalturaPlayableEntryFilter);


/**
 */
function KalturaMixEntryFilter(){
  KalturaMixEntryFilter.super_.call(this);
};
module.exports.KalturaMixEntryFilter = KalturaMixEntryFilter;

util.inherits(KalturaMixEntryFilter, KalturaMixEntryBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaMixListResponse(){
  KalturaMixListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaMixListResponse = KalturaMixListResponse;

util.inherits(KalturaMixListResponse, kcb.KalturaObjectBase);


/**
 * @param  url  string    The URL where the notification should be sent to .
 * @param  data  string    The serialized notification data to send.
 */
function KalturaClientNotification(){
  KalturaClientNotification.super_.call(this);
  this.url = null;
  this.data = null;
};
module.exports.KalturaClientNotification = KalturaClientNotification;

util.inherits(KalturaClientNotification, kcb.KalturaObjectBase);


/**
 * @param  key  string    .
 * @param  value  string    .
 */
function KalturaKeyValue(){
  KalturaKeyValue.super_.call(this);
  this.key = null;
  this.value = null;
};
module.exports.KalturaKeyValue = KalturaKeyValue;

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
function KalturaPartner(){
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
module.exports.KalturaPartner = KalturaPartner;

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
function KalturaPartnerUsage(){
  KalturaPartnerUsage.super_.call(this);
  this.hostingGB = null;
  this.Percent = null;
  this.packageBW = null;
  this.usageGB = null;
  this.reachedLimitDate = null;
  this.usageGraph = null;
};
module.exports.KalturaPartnerUsage = KalturaPartnerUsage;

util.inherits(KalturaPartnerUsage, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  type  string     (readOnly).
 * @param  partnerId  int     (readOnly).
 * @param  tags  string    .
 * @param  createdAt  int     (readOnly).
 * @param  updatedAt  int     (readOnly).
 */
function KalturaPermissionItem(){
  KalturaPermissionItem.super_.call(this);
  this.id = null;
  this.type = null;
  this.partnerId = null;
  this.tags = null;
  this.createdAt = null;
  this.updatedAt = null;
};
module.exports.KalturaPermissionItem = KalturaPermissionItem;

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
function KalturaPermissionItemBaseFilter(){
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
module.exports.KalturaPermissionItemBaseFilter = KalturaPermissionItemBaseFilter;

util.inherits(KalturaPermissionItemBaseFilter, KalturaFilter);


/**
 */
function KalturaPermissionItemFilter(){
  KalturaPermissionItemFilter.super_.call(this);
};
module.exports.KalturaPermissionItemFilter = KalturaPermissionItemFilter;

util.inherits(KalturaPermissionItemFilter, KalturaPermissionItemBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaPermissionItemListResponse(){
  KalturaPermissionItemListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaPermissionItemListResponse = KalturaPermissionItemListResponse;

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
function KalturaPermission(){
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
module.exports.KalturaPermission = KalturaPermission;

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
function KalturaPermissionBaseFilter(){
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
module.exports.KalturaPermissionBaseFilter = KalturaPermissionBaseFilter;

util.inherits(KalturaPermissionBaseFilter, KalturaFilter);


/**
 */
function KalturaPermissionFilter(){
  KalturaPermissionFilter.super_.call(this);
};
module.exports.KalturaPermissionFilter = KalturaPermissionFilter;

util.inherits(KalturaPermissionFilter, KalturaPermissionBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaPermissionListResponse(){
  KalturaPermissionListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaPermissionListResponse = KalturaPermissionListResponse;

util.inherits(KalturaPermissionListResponse, kcb.KalturaObjectBase);


/**
 * @param  limit  int    .
 */
function KalturaMediaEntryFilterForPlaylist(){
  KalturaMediaEntryFilterForPlaylist.super_.call(this);
  this.limit = null;
};
module.exports.KalturaMediaEntryFilterForPlaylist = KalturaMediaEntryFilterForPlaylist;

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
function KalturaPlaylist(){
  KalturaPlaylist.super_.call(this);
  this.playlistContent = null;
  this.filters = null;
  this.totalResults = null;
  this.playlistType = null;
  this.plays = null;
  this.views = null;
  this.duration = null;
};
module.exports.KalturaPlaylist = KalturaPlaylist;

util.inherits(KalturaPlaylist, KalturaBaseEntry);


/**
 */
function KalturaPlaylistBaseFilter(){
  KalturaPlaylistBaseFilter.super_.call(this);
};
module.exports.KalturaPlaylistBaseFilter = KalturaPlaylistBaseFilter;

util.inherits(KalturaPlaylistBaseFilter, KalturaBaseEntryFilter);


/**
 */
function KalturaPlaylistFilter(){
  KalturaPlaylistFilter.super_.call(this);
};
module.exports.KalturaPlaylistFilter = KalturaPlaylistFilter;

util.inherits(KalturaPlaylistFilter, KalturaPlaylistBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaPlaylistListResponse(){
  KalturaPlaylistListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaPlaylistListResponse = KalturaPlaylistListResponse;

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
function KalturaReportInputFilter(){
  KalturaReportInputFilter.super_.call(this);
  this.fromDate = null;
  this.toDate = null;
  this.keywords = null;
  this.searchInTags = null;
  this.searchInAdminTags = null;
  this.categories = null;
  this.timeZoneOffset = null;
};
module.exports.KalturaReportInputFilter = KalturaReportInputFilter;

util.inherits(KalturaReportInputFilter, kcb.KalturaObjectBase);


/**
 * @param  id  string    .
 * @param  data  string    .
 */
function KalturaReportGraph(){
  KalturaReportGraph.super_.call(this);
  this.id = null;
  this.data = null;
};
module.exports.KalturaReportGraph = KalturaReportGraph;

util.inherits(KalturaReportGraph, kcb.KalturaObjectBase);


/**
 * @param  header  string    .
 * @param  data  string    .
 */
function KalturaReportTotal(){
  KalturaReportTotal.super_.call(this);
  this.header = null;
  this.data = null;
};
module.exports.KalturaReportTotal = KalturaReportTotal;

util.inherits(KalturaReportTotal, kcb.KalturaObjectBase);


/**
 * @param  header  string     (readOnly).
 * @param  data  string     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaReportTable(){
  KalturaReportTable.super_.call(this);
  this.header = null;
  this.data = null;
  this.totalCount = null;
};
module.exports.KalturaReportTable = KalturaReportTable;

util.inherits(KalturaReportTable, kcb.KalturaObjectBase);


/**
 * @param  columns  string    .
 * @param  results  array    .
 */
function KalturaReportResponse(){
  KalturaReportResponse.super_.call(this);
  this.columns = null;
  this.results = null;
};
module.exports.KalturaReportResponse = KalturaReportResponse;

util.inherits(KalturaReportResponse, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  needMediaInfo  bool     (readOnly).
 */
function KalturaSearchResultResponse(){
  KalturaSearchResultResponse.super_.call(this);
  this.objects = null;
  this.needMediaInfo = null;
};
module.exports.KalturaSearchResultResponse = KalturaSearchResultResponse;

util.inherits(KalturaSearchResultResponse, kcb.KalturaObjectBase);


/**
 * @param  authData  string    The authentication data that further should be used for search
 *  .
 * @param  loginUrl  string    Login URL when user need to sign-in and authorize the search.
 * @param  message  string    Information when there was an error.
 */
function KalturaSearchAuthData(){
  KalturaSearchAuthData.super_.call(this);
  this.authData = null;
  this.loginUrl = null;
  this.message = null;
};
module.exports.KalturaSearchAuthData = KalturaSearchAuthData;

util.inherits(KalturaSearchAuthData, kcb.KalturaObjectBase);


/**
 * @param  partnerId  int     (readOnly).
 * @param  ks  string     (readOnly).
 * @param  userId  string     (readOnly).
 */
function KalturaStartWidgetSessionResponse(){
  KalturaStartWidgetSessionResponse.super_.call(this);
  this.partnerId = null;
  this.ks = null;
  this.userId = null;
};
module.exports.KalturaStartWidgetSessionResponse = KalturaStartWidgetSessionResponse;

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
function KalturaStatsEvent(){
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
module.exports.KalturaStatsEvent = KalturaStatsEvent;

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
function KalturaStatsKmcEvent(){
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
module.exports.KalturaStatsKmcEvent = KalturaStatsKmcEvent;

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
function KalturaCEError(){
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
module.exports.KalturaCEError = KalturaCEError;

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
function KalturaStorageProfile(){
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
module.exports.KalturaStorageProfile = KalturaStorageProfile;

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
function KalturaStorageProfileBaseFilter(){
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
module.exports.KalturaStorageProfileBaseFilter = KalturaStorageProfileBaseFilter;

util.inherits(KalturaStorageProfileBaseFilter, KalturaFilter);


/**
 */
function KalturaStorageProfileFilter(){
  KalturaStorageProfileFilter.super_.call(this);
};
module.exports.KalturaStorageProfileFilter = KalturaStorageProfileFilter;

util.inherits(KalturaStorageProfileFilter, KalturaStorageProfileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaStorageProfileListResponse(){
  KalturaStorageProfileListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaStorageProfileListResponse = KalturaStorageProfileListResponse;

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
function KalturaBaseSyndicationFeed(){
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
module.exports.KalturaBaseSyndicationFeed = KalturaBaseSyndicationFeed;

util.inherits(KalturaBaseSyndicationFeed, kcb.KalturaObjectBase);


/**
 */
function KalturaBaseSyndicationFeedBaseFilter(){
  KalturaBaseSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaBaseSyndicationFeedBaseFilter = KalturaBaseSyndicationFeedBaseFilter;

util.inherits(KalturaBaseSyndicationFeedBaseFilter, KalturaFilter);


/**
 */
function KalturaBaseSyndicationFeedFilter(){
  KalturaBaseSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaBaseSyndicationFeedFilter = KalturaBaseSyndicationFeedFilter;

util.inherits(KalturaBaseSyndicationFeedFilter, KalturaBaseSyndicationFeedBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaBaseSyndicationFeedListResponse(){
  KalturaBaseSyndicationFeedListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaBaseSyndicationFeedListResponse = KalturaBaseSyndicationFeedListResponse;

util.inherits(KalturaBaseSyndicationFeedListResponse, kcb.KalturaObjectBase);


/**
 * @param  totalEntryCount  int    the total count of entries that should appear in the feed without flavor filtering.
 * @param  actualEntryCount  int    count of entries that will appear in the feed (including all relevant filters).
 * @param  requireTranscodingCount  int    count of entries that requires transcoding in order to be included in feed.
 */
function KalturaSyndicationFeedEntryCount(){
  KalturaSyndicationFeedEntryCount.super_.call(this);
  this.totalEntryCount = null;
  this.actualEntryCount = null;
  this.requireTranscodingCount = null;
};
module.exports.KalturaSyndicationFeedEntryCount = KalturaSyndicationFeedEntryCount;

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
function KalturaThumbAsset(){
  KalturaThumbAsset.super_.call(this);
  this.thumbParamsId = null;
  this.width = null;
  this.height = null;
  this.status = null;
};
module.exports.KalturaThumbAsset = KalturaThumbAsset;

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
function KalturaThumbParams(){
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
module.exports.KalturaThumbParams = KalturaThumbParams;

util.inherits(KalturaThumbParams, KalturaAssetParams);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaThumbAssetListResponse(){
  KalturaThumbAssetListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaThumbAssetListResponse = KalturaThumbAssetListResponse;

util.inherits(KalturaThumbAssetListResponse, kcb.KalturaObjectBase);


/**
 * @param  formatEqual  string    .
 */
function KalturaThumbParamsBaseFilter(){
  KalturaThumbParamsBaseFilter.super_.call(this);
  this.formatEqual = null;
};
module.exports.KalturaThumbParamsBaseFilter = KalturaThumbParamsBaseFilter;

util.inherits(KalturaThumbParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
function KalturaThumbParamsFilter(){
  KalturaThumbParamsFilter.super_.call(this);
};
module.exports.KalturaThumbParamsFilter = KalturaThumbParamsFilter;

util.inherits(KalturaThumbParamsFilter, KalturaThumbParamsBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaThumbParamsListResponse(){
  KalturaThumbParamsListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaThumbParamsListResponse = KalturaThumbParamsListResponse;

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
function KalturaUiConf(){
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
module.exports.KalturaUiConf = KalturaUiConf;

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
function KalturaUiConfBaseFilter(){
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
module.exports.KalturaUiConfBaseFilter = KalturaUiConfBaseFilter;

util.inherits(KalturaUiConfBaseFilter, KalturaFilter);


/**
 */
function KalturaUiConfFilter(){
  KalturaUiConfFilter.super_.call(this);
};
module.exports.KalturaUiConfFilter = KalturaUiConfFilter;

util.inherits(KalturaUiConfFilter, KalturaUiConfBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaUiConfListResponse(){
  KalturaUiConfListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaUiConfListResponse = KalturaUiConfListResponse;

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
function KalturaUiConfTypeInfo(){
  KalturaUiConfTypeInfo.super_.call(this);
  this.type = null;
  this.versions = null;
  this.directory = null;
  this.filename = null;
};
module.exports.KalturaUiConfTypeInfo = KalturaUiConfTypeInfo;

util.inherits(KalturaUiConfTypeInfo, kcb.KalturaObjectBase);


/**
 * @param  uploadTokenId  string    .
 * @param  fileSize  int    .
 * @param  errorCode  int    .
 * @param  errorDescription  string    .
 */
function KalturaUploadResponse(){
  KalturaUploadResponse.super_.call(this);
  this.uploadTokenId = null;
  this.fileSize = null;
  this.errorCode = null;
  this.errorDescription = null;
};
module.exports.KalturaUploadResponse = KalturaUploadResponse;

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
function KalturaUploadToken(){
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
module.exports.KalturaUploadToken = KalturaUploadToken;

util.inherits(KalturaUploadToken, kcb.KalturaObjectBase);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  userIdEqual  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 */
function KalturaUploadTokenBaseFilter(){
  KalturaUploadTokenBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.userIdEqual = null;
  this.statusEqual = null;
  this.statusIn = null;
};
module.exports.KalturaUploadTokenBaseFilter = KalturaUploadTokenBaseFilter;

util.inherits(KalturaUploadTokenBaseFilter, KalturaFilter);


/**
 */
function KalturaUploadTokenFilter(){
  KalturaUploadTokenFilter.super_.call(this);
};
module.exports.KalturaUploadTokenFilter = KalturaUploadTokenFilter;

util.inherits(KalturaUploadTokenFilter, KalturaUploadTokenBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaUploadTokenListResponse(){
  KalturaUploadTokenListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaUploadTokenListResponse = KalturaUploadTokenListResponse;

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
function KalturaUserRole(){
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
module.exports.KalturaUserRole = KalturaUserRole;

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
function KalturaUserRoleBaseFilter(){
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
module.exports.KalturaUserRoleBaseFilter = KalturaUserRoleBaseFilter;

util.inherits(KalturaUserRoleBaseFilter, KalturaFilter);


/**
 */
function KalturaUserRoleFilter(){
  KalturaUserRoleFilter.super_.call(this);
};
module.exports.KalturaUserRoleFilter = KalturaUserRoleFilter;

util.inherits(KalturaUserRoleFilter, KalturaUserRoleBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaUserRoleListResponse(){
  KalturaUserRoleListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaUserRoleListResponse = KalturaUserRoleListResponse;

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
function KalturaUserBaseFilter(){
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
module.exports.KalturaUserBaseFilter = KalturaUserBaseFilter;

util.inherits(KalturaUserBaseFilter, KalturaFilter);


/**
 * @param  idEqual  string    .
 * @param  idIn  string    .
 * @param  loginEnabledEqual  bool    .
 */
function KalturaUserFilter(){
  KalturaUserFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.loginEnabledEqual = null;
};
module.exports.KalturaUserFilter = KalturaUserFilter;

util.inherits(KalturaUserFilter, KalturaUserBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaUserListResponse(){
  KalturaUserListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaUserListResponse = KalturaUserListResponse;

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
function KalturaWidget(){
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
module.exports.KalturaWidget = KalturaWidget;

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
function KalturaWidgetBaseFilter(){
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
module.exports.KalturaWidgetBaseFilter = KalturaWidgetBaseFilter;

util.inherits(KalturaWidgetBaseFilter, KalturaFilter);


/**
 */
function KalturaWidgetFilter(){
  KalturaWidgetFilter.super_.call(this);
};
module.exports.KalturaWidgetFilter = KalturaWidgetFilter;

util.inherits(KalturaWidgetFilter, KalturaWidgetBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaWidgetListResponse(){
  KalturaWidgetListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaWidgetListResponse = KalturaWidgetListResponse;

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
function KalturaMetadata(){
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
module.exports.KalturaMetadata = KalturaMetadata;

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
function KalturaMetadataBaseFilter(){
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
module.exports.KalturaMetadataBaseFilter = KalturaMetadataBaseFilter;

util.inherits(KalturaMetadataBaseFilter, KalturaFilter);


/**
 */
function KalturaMetadataFilter(){
  KalturaMetadataFilter.super_.call(this);
};
module.exports.KalturaMetadataFilter = KalturaMetadataFilter;

util.inherits(KalturaMetadataFilter, KalturaMetadataBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaMetadataListResponse(){
  KalturaMetadataListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaMetadataListResponse = KalturaMetadataListResponse;

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
function KalturaMetadataProfile(){
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
module.exports.KalturaMetadataProfile = KalturaMetadataProfile;

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
function KalturaMetadataProfileBaseFilter(){
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
module.exports.KalturaMetadataProfileBaseFilter = KalturaMetadataProfileBaseFilter;

util.inherits(KalturaMetadataProfileBaseFilter, KalturaFilter);


/**
 */
function KalturaMetadataProfileFilter(){
  KalturaMetadataProfileFilter.super_.call(this);
};
module.exports.KalturaMetadataProfileFilter = KalturaMetadataProfileFilter;

util.inherits(KalturaMetadataProfileFilter, KalturaMetadataProfileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaMetadataProfileListResponse(){
  KalturaMetadataProfileListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaMetadataProfileListResponse = KalturaMetadataProfileListResponse;

util.inherits(KalturaMetadataProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  id  int     (readOnly).
 * @param  xPath  string     (readOnly).
 * @param  key  string     (readOnly).
 * @param  label  string     (readOnly).
 */
function KalturaMetadataProfileField(){
  KalturaMetadataProfileField.super_.call(this);
  this.id = null;
  this.xPath = null;
  this.key = null;
  this.label = null;
};
module.exports.KalturaMetadataProfileField = KalturaMetadataProfileField;

util.inherits(KalturaMetadataProfileField, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaMetadataProfileFieldListResponse(){
  KalturaMetadataProfileFieldListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaMetadataProfileFieldListResponse = KalturaMetadataProfileFieldListResponse;

util.inherits(KalturaMetadataProfileFieldListResponse, kcb.KalturaObjectBase);


/**
 * @param  schedulerId  int    .
 * @param  workerId  int    .
 * @param  batchIndex  int    .
 */
function KalturaExclusiveLockKey(){
  KalturaExclusiveLockKey.super_.call(this);
  this.schedulerId = null;
  this.workerId = null;
  this.batchIndex = null;
};
module.exports.KalturaExclusiveLockKey = KalturaExclusiveLockKey;

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
function KalturaBaseJobBaseFilter(){
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
module.exports.KalturaBaseJobBaseFilter = KalturaBaseJobBaseFilter;

util.inherits(KalturaBaseJobBaseFilter, KalturaFilter);


/**
 */
function KalturaBaseJobFilter(){
  KalturaBaseJobFilter.super_.call(this);
};
module.exports.KalturaBaseJobFilter = KalturaBaseJobFilter;

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
function KalturaBatchJobBaseFilter(){
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
module.exports.KalturaBatchJobBaseFilter = KalturaBatchJobBaseFilter;

util.inherits(KalturaBatchJobBaseFilter, KalturaBaseJobFilter);


/**
 */
function KalturaBatchJobFilter(){
  KalturaBatchJobFilter.super_.call(this);
};
module.exports.KalturaBatchJobFilter = KalturaBatchJobFilter;

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
function KalturaBaseJob(){
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
module.exports.KalturaBaseJob = KalturaBaseJob;

util.inherits(KalturaBaseJob, kcb.KalturaObjectBase);


/**
 */
function KalturaJobData(){
  KalturaJobData.super_.call(this);
};
module.exports.KalturaJobData = KalturaJobData;

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
function KalturaBatchJob(){
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
module.exports.KalturaBatchJob = KalturaBatchJob;

util.inherits(KalturaBatchJob, KalturaBaseJob);


/**
 * @param  job  KalturaBatchJob     (readOnly).
 * @param  jobType  string     (readOnly).
 * @param  queueSize  int     (readOnly).
 */
function KalturaFreeJobResponse(){
  KalturaFreeJobResponse.super_.call(this);
  this.job = null;
  this.jobType = null;
  this.queueSize = null;
};
module.exports.KalturaFreeJobResponse = KalturaFreeJobResponse;

util.inherits(KalturaFreeJobResponse, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 * @param  lowerVersionCount  int     (readOnly).
 */
function KalturaTransformMetadataResponse(){
  KalturaTransformMetadataResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
  this.lowerVersionCount = null;
};
module.exports.KalturaTransformMetadataResponse = KalturaTransformMetadataResponse;

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
function KalturaConvertCollectionFlavorData(){
  KalturaConvertCollectionFlavorData.super_.call(this);
  this.flavorAssetId = null;
  this.flavorParamsOutputId = null;
  this.readyBehavior = null;
  this.videoBitrate = null;
  this.audioBitrate = null;
  this.destFileSyncLocalPath = null;
  this.destFileSyncRemoteUrl = null;
};
module.exports.KalturaConvertCollectionFlavorData = KalturaConvertCollectionFlavorData;

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
function KalturaNotification(){
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
module.exports.KalturaNotification = KalturaNotification;

util.inherits(KalturaNotification, KalturaBaseJob);


/**
 * @param  notifications  array     (readOnly).
 * @param  partners  array     (readOnly).
 */
function KalturaBatchGetExclusiveNotificationJobsResponse(){
  KalturaBatchGetExclusiveNotificationJobsResponse.super_.call(this);
  this.notifications = null;
  this.partners = null;
};
module.exports.KalturaBatchGetExclusiveNotificationJobsResponse = KalturaBatchGetExclusiveNotificationJobsResponse;

util.inherits(KalturaBatchGetExclusiveNotificationJobsResponse, kcb.KalturaObjectBase);


/**
 * @param  schedulerId  int    .
 * @param  workerId  int    .
 * @param  jobType  string    .
 * @param  filter  KalturaBatchJobFilter    .
 */
function KalturaWorkerQueueFilter(){
  KalturaWorkerQueueFilter.super_.call(this);
  this.schedulerId = null;
  this.workerId = null;
  this.jobType = null;
  this.filter = null;
};
module.exports.KalturaWorkerQueueFilter = KalturaWorkerQueueFilter;

util.inherits(KalturaWorkerQueueFilter, kcb.KalturaObjectBase);


/**
 * @param  exists  bool    Indicates if the file exists
 *  .
 * @param  sizeOk  bool    Indicates if the file size is right
 *  .
 */
function KalturaFileExistsResponse(){
  KalturaFileExistsResponse.super_.call(this);
  this.exists = null;
  this.sizeOk = null;
};
module.exports.KalturaFileExistsResponse = KalturaFileExistsResponse;

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
function KalturaFileSyncBaseFilter(){
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
module.exports.KalturaFileSyncBaseFilter = KalturaFileSyncBaseFilter;

util.inherits(KalturaFileSyncBaseFilter, KalturaFilter);


/**
 */
function KalturaFileSyncFilter(){
  KalturaFileSyncFilter.super_.call(this);
};
module.exports.KalturaFileSyncFilter = KalturaFileSyncFilter;

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
function KalturaFileSync(){
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
module.exports.KalturaFileSync = KalturaFileSync;

util.inherits(KalturaFileSync, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaFileSyncListResponse(){
  KalturaFileSyncListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaFileSyncListResponse = KalturaFileSyncListResponse;

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
function KalturaPartnerBaseFilter(){
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
module.exports.KalturaPartnerBaseFilter = KalturaPartnerBaseFilter;

util.inherits(KalturaPartnerBaseFilter, KalturaFilter);


/**
 */
function KalturaPartnerFilter(){
  KalturaPartnerFilter.super_.call(this);
};
module.exports.KalturaPartnerFilter = KalturaPartnerFilter;

util.inherits(KalturaPartnerFilter, KalturaPartnerBaseFilter);


/**
 * @param  fromDate  int    Date range from
 *  .
 * @param  toDate  int    Date range to
 *  .
 */
function KalturaSystemPartnerUsageFilter(){
  KalturaSystemPartnerUsageFilter.super_.call(this);
  this.fromDate = null;
  this.toDate = null;
};
module.exports.KalturaSystemPartnerUsageFilter = KalturaSystemPartnerUsageFilter;

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
function KalturaSystemPartnerUsageItem(){
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
module.exports.KalturaSystemPartnerUsageItem = KalturaSystemPartnerUsageItem;

util.inherits(KalturaSystemPartnerUsageItem, kcb.KalturaObjectBase);


/**
 * @param  objects  array    .
 * @param  totalCount  int    .
 */
function KalturaSystemPartnerUsageListResponse(){
  KalturaSystemPartnerUsageListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaSystemPartnerUsageListResponse = KalturaSystemPartnerUsageListResponse;

util.inherits(KalturaSystemPartnerUsageListResponse, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaPartnerListResponse(){
  KalturaPartnerListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaPartnerListResponse = KalturaPartnerListResponse;

util.inherits(KalturaPartnerListResponse, kcb.KalturaObjectBase);


/**
 * @param  type  string    .
 * @param  max  float    .
 * @param  overagePrice  float    .
 * @param  overageUnit  float    .
 */
function KalturaSystemPartnerLimit(){
  KalturaSystemPartnerLimit.super_.call(this);
  this.type = null;
  this.max = null;
  this.overagePrice = null;
  this.overageUnit = null;
};
module.exports.KalturaSystemPartnerLimit = KalturaSystemPartnerLimit;

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
function KalturaSystemPartnerConfiguration(){
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
module.exports.KalturaSystemPartnerConfiguration = KalturaSystemPartnerConfiguration;

util.inherits(KalturaSystemPartnerConfiguration, kcb.KalturaObjectBase);


/**
 * @param  id  int    .
 * @param  name  string    .
 */
function KalturaSystemPartnerPackage(){
  KalturaSystemPartnerPackage.super_.call(this);
  this.id = null;
  this.name = null;
};
module.exports.KalturaSystemPartnerPackage = KalturaSystemPartnerPackage;

util.inherits(KalturaSystemPartnerPackage, kcb.KalturaObjectBase);


/**
 * @param  loginEmailEqual  string    .
 */
function KalturaUserLoginDataBaseFilter(){
  KalturaUserLoginDataBaseFilter.super_.call(this);
  this.loginEmailEqual = null;
};
module.exports.KalturaUserLoginDataBaseFilter = KalturaUserLoginDataBaseFilter;

util.inherits(KalturaUserLoginDataBaseFilter, KalturaFilter);


/**
 */
function KalturaUserLoginDataFilter(){
  KalturaUserLoginDataFilter.super_.call(this);
};
module.exports.KalturaUserLoginDataFilter = KalturaUserLoginDataFilter;

util.inherits(KalturaUserLoginDataFilter, KalturaUserLoginDataBaseFilter);


/**
 * @param  id  string    .
 * @param  loginEmail  string    .
 */
function KalturaUserLoginData(){
  KalturaUserLoginData.super_.call(this);
  this.id = null;
  this.loginEmail = null;
};
module.exports.KalturaUserLoginData = KalturaUserLoginData;

util.inherits(KalturaUserLoginData, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaUserLoginDataListResponse(){
  KalturaUserLoginDataListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaUserLoginDataListResponse = KalturaUserLoginDataListResponse;

util.inherits(KalturaUserLoginDataListResponse, kcb.KalturaObjectBase);


/**
 * @param  flavorParamsIdEqual  int    .
 * @param  flavorParamsVersionEqual  string    .
 * @param  flavorAssetIdEqual  string    .
 * @param  flavorAssetVersionEqual  string    .
 */
function KalturaFlavorParamsOutputBaseFilter(){
  KalturaFlavorParamsOutputBaseFilter.super_.call(this);
  this.flavorParamsIdEqual = null;
  this.flavorParamsVersionEqual = null;
  this.flavorAssetIdEqual = null;
  this.flavorAssetVersionEqual = null;
};
module.exports.KalturaFlavorParamsOutputBaseFilter = KalturaFlavorParamsOutputBaseFilter;

util.inherits(KalturaFlavorParamsOutputBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaFlavorParamsOutputFilter(){
  KalturaFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaFlavorParamsOutputFilter = KalturaFlavorParamsOutputFilter;

util.inherits(KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputBaseFilter);


/**
 * @param  flavorParamsId  int    .
 * @param  commandLinesStr  string    .
 * @param  flavorParamsVersion  string    .
 * @param  flavorAssetId  string    .
 * @param  flavorAssetVersion  string    .
 * @param  readyBehavior  int    .
 */
function KalturaFlavorParamsOutput(){
  KalturaFlavorParamsOutput.super_.call(this);
  this.flavorParamsId = null;
  this.commandLinesStr = null;
  this.flavorParamsVersion = null;
  this.flavorAssetId = null;
  this.flavorAssetVersion = null;
  this.readyBehavior = null;
};
module.exports.KalturaFlavorParamsOutput = KalturaFlavorParamsOutput;

util.inherits(KalturaFlavorParamsOutput, KalturaFlavorParams);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaFlavorParamsOutputListResponse(){
  KalturaFlavorParamsOutputListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaFlavorParamsOutputListResponse = KalturaFlavorParamsOutputListResponse;

util.inherits(KalturaFlavorParamsOutputListResponse, kcb.KalturaObjectBase);


/**
 * @param  thumbParamsIdEqual  int    .
 * @param  thumbParamsVersionEqual  string    .
 * @param  thumbAssetIdEqual  string    .
 * @param  thumbAssetVersionEqual  string    .
 */
function KalturaThumbParamsOutputBaseFilter(){
  KalturaThumbParamsOutputBaseFilter.super_.call(this);
  this.thumbParamsIdEqual = null;
  this.thumbParamsVersionEqual = null;
  this.thumbAssetIdEqual = null;
  this.thumbAssetVersionEqual = null;
};
module.exports.KalturaThumbParamsOutputBaseFilter = KalturaThumbParamsOutputBaseFilter;

util.inherits(KalturaThumbParamsOutputBaseFilter, KalturaThumbParamsFilter);


/**
 */
function KalturaThumbParamsOutputFilter(){
  KalturaThumbParamsOutputFilter.super_.call(this);
};
module.exports.KalturaThumbParamsOutputFilter = KalturaThumbParamsOutputFilter;

util.inherits(KalturaThumbParamsOutputFilter, KalturaThumbParamsOutputBaseFilter);


/**
 * @param  thumbParamsId  int    .
 * @param  thumbParamsVersion  string    .
 * @param  thumbAssetId  string    .
 * @param  thumbAssetVersion  string    .
 */
function KalturaThumbParamsOutput(){
  KalturaThumbParamsOutput.super_.call(this);
  this.thumbParamsId = null;
  this.thumbParamsVersion = null;
  this.thumbAssetId = null;
  this.thumbAssetVersion = null;
};
module.exports.KalturaThumbParamsOutput = KalturaThumbParamsOutput;

util.inherits(KalturaThumbParamsOutput, KalturaThumbParams);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaThumbParamsOutputListResponse(){
  KalturaThumbParamsOutputListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaThumbParamsOutputListResponse = KalturaThumbParamsOutputListResponse;

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
function KalturaTrackEntry(){
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
module.exports.KalturaTrackEntry = KalturaTrackEntry;

util.inherits(KalturaTrackEntry, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaTrackEntryListResponse(){
  KalturaTrackEntryListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaTrackEntryListResponse = KalturaTrackEntryListResponse;

util.inherits(KalturaTrackEntryListResponse, kcb.KalturaObjectBase);


/**
 * @param  isPublic  bool    .
 */
function KalturaUiConfAdmin(){
  KalturaUiConfAdmin.super_.call(this);
  this.isPublic = null;
};
module.exports.KalturaUiConfAdmin = KalturaUiConfAdmin;

util.inherits(KalturaUiConfAdmin, KalturaUiConf);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaUiConfAdminListResponse(){
  KalturaUiConfAdminListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaUiConfAdminListResponse = KalturaUiConfAdminListResponse;

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
function KalturaReport(){
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
module.exports.KalturaReport = KalturaReport;

util.inherits(KalturaReport, kcb.KalturaObjectBase);


/**
 * @param  idEqual  int    .
 * @param  idIn  string    .
 * @param  partnerIdEqual  int    .
 * @param  partnerIdIn  string    .
 * @param  systemNameEqual  string    .
 * @param  systemNameIn  string    .
 */
function KalturaReportBaseFilter(){
  KalturaReportBaseFilter.super_.call(this);
  this.idEqual = null;
  this.idIn = null;
  this.partnerIdEqual = null;
  this.partnerIdIn = null;
  this.systemNameEqual = null;
  this.systemNameIn = null;
};
module.exports.KalturaReportBaseFilter = KalturaReportBaseFilter;

util.inherits(KalturaReportBaseFilter, KalturaFilter);


/**
 */
function KalturaReportFilter(){
  KalturaReportFilter.super_.call(this);
};
module.exports.KalturaReportFilter = KalturaReportFilter;

util.inherits(KalturaReportFilter, KalturaReportBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaReportListResponse(){
  KalturaReportListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaReportListResponse = KalturaReportListResponse;

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
function KalturaInternalToolsSession(){
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
module.exports.KalturaInternalToolsSession = KalturaInternalToolsSession;

util.inherits(KalturaInternalToolsSession, kcb.KalturaObjectBase);


/**
 */
function KalturaAuditTrailInfo(){
  KalturaAuditTrailInfo.super_.call(this);
};
module.exports.KalturaAuditTrailInfo = KalturaAuditTrailInfo;

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
function KalturaAuditTrail(){
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
module.exports.KalturaAuditTrail = KalturaAuditTrail;

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
function KalturaAuditTrailBaseFilter(){
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
module.exports.KalturaAuditTrailBaseFilter = KalturaAuditTrailBaseFilter;

util.inherits(KalturaAuditTrailBaseFilter, KalturaFilter);


/**
 */
function KalturaAuditTrailFilter(){
  KalturaAuditTrailFilter.super_.call(this);
};
module.exports.KalturaAuditTrailFilter = KalturaAuditTrailFilter;

util.inherits(KalturaAuditTrailFilter, KalturaAuditTrailBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaAuditTrailListResponse(){
  KalturaAuditTrailListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaAuditTrailListResponse = KalturaAuditTrailListResponse;

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
function KalturaVirusScanProfileBaseFilter(){
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
module.exports.KalturaVirusScanProfileBaseFilter = KalturaVirusScanProfileBaseFilter;

util.inherits(KalturaVirusScanProfileBaseFilter, KalturaFilter);


/**
 */
function KalturaVirusScanProfileFilter(){
  KalturaVirusScanProfileFilter.super_.call(this);
};
module.exports.KalturaVirusScanProfileFilter = KalturaVirusScanProfileFilter;

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
function KalturaVirusScanProfile(){
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
module.exports.KalturaVirusScanProfile = KalturaVirusScanProfile;

util.inherits(KalturaVirusScanProfile, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaVirusScanProfileListResponse(){
  KalturaVirusScanProfileListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaVirusScanProfileListResponse = KalturaVirusScanProfileListResponse;

util.inherits(KalturaVirusScanProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  width  int    .
 * @param  height  int    .
 */
function KalturaDistributionThumbDimensions(){
  KalturaDistributionThumbDimensions.super_.call(this);
  this.width = null;
  this.height = null;
};
module.exports.KalturaDistributionThumbDimensions = KalturaDistributionThumbDimensions;

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
function KalturaDistributionProfile(){
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
module.exports.KalturaDistributionProfile = KalturaDistributionProfile;

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
function KalturaDistributionProfileBaseFilter(){
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
module.exports.KalturaDistributionProfileBaseFilter = KalturaDistributionProfileBaseFilter;

util.inherits(KalturaDistributionProfileBaseFilter, KalturaFilter);


/**
 */
function KalturaDistributionProfileFilter(){
  KalturaDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaDistributionProfileFilter = KalturaDistributionProfileFilter;

util.inherits(KalturaDistributionProfileFilter, KalturaDistributionProfileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaDistributionProfileListResponse(){
  KalturaDistributionProfileListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaDistributionProfileListResponse = KalturaDistributionProfileListResponse;

util.inherits(KalturaDistributionProfileListResponse, kcb.KalturaObjectBase);


/**
 * @param  action  int    .
 * @param  errorType  int    .
 * @param  description  string    .
 */
function KalturaDistributionValidationError(){
  KalturaDistributionValidationError.super_.call(this);
  this.action = null;
  this.errorType = null;
  this.description = null;
};
module.exports.KalturaDistributionValidationError = KalturaDistributionValidationError;

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
function KalturaEntryDistribution(){
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
module.exports.KalturaEntryDistribution = KalturaEntryDistribution;

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
function KalturaEntryDistributionBaseFilter(){
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
module.exports.KalturaEntryDistributionBaseFilter = KalturaEntryDistributionBaseFilter;

util.inherits(KalturaEntryDistributionBaseFilter, KalturaFilter);


/**
 */
function KalturaEntryDistributionFilter(){
  KalturaEntryDistributionFilter.super_.call(this);
};
module.exports.KalturaEntryDistributionFilter = KalturaEntryDistributionFilter;

util.inherits(KalturaEntryDistributionFilter, KalturaEntryDistributionBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaEntryDistributionListResponse(){
  KalturaEntryDistributionListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaEntryDistributionListResponse = KalturaEntryDistributionListResponse;

util.inherits(KalturaEntryDistributionListResponse, kcb.KalturaObjectBase);


/**
 * @param  typeEqual  string    .
 * @param  typeIn  string    .
 */
function KalturaDistributionProviderBaseFilter(){
  KalturaDistributionProviderBaseFilter.super_.call(this);
  this.typeEqual = null;
  this.typeIn = null;
};
module.exports.KalturaDistributionProviderBaseFilter = KalturaDistributionProviderBaseFilter;

util.inherits(KalturaDistributionProviderBaseFilter, KalturaFilter);


/**
 */
function KalturaDistributionProviderFilter(){
  KalturaDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaDistributionProviderFilter = KalturaDistributionProviderFilter;

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
function KalturaDistributionProvider(){
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
module.exports.KalturaDistributionProvider = KalturaDistributionProvider;

util.inherits(KalturaDistributionProvider, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaDistributionProviderListResponse(){
  KalturaDistributionProviderListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaDistributionProviderListResponse = KalturaDistributionProviderListResponse;

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
function KalturaGenericDistributionProvider(){
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
module.exports.KalturaGenericDistributionProvider = KalturaGenericDistributionProvider;

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
function KalturaGenericDistributionProviderBaseFilter(){
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
module.exports.KalturaGenericDistributionProviderBaseFilter = KalturaGenericDistributionProviderBaseFilter;

util.inherits(KalturaGenericDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaGenericDistributionProviderFilter(){
  KalturaGenericDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaGenericDistributionProviderFilter = KalturaGenericDistributionProviderFilter;

util.inherits(KalturaGenericDistributionProviderFilter, KalturaGenericDistributionProviderBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaGenericDistributionProviderListResponse(){
  KalturaGenericDistributionProviderListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaGenericDistributionProviderListResponse = KalturaGenericDistributionProviderListResponse;

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
function KalturaGenericDistributionProviderAction(){
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
module.exports.KalturaGenericDistributionProviderAction = KalturaGenericDistributionProviderAction;

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
function KalturaGenericDistributionProviderActionBaseFilter(){
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
module.exports.KalturaGenericDistributionProviderActionBaseFilter = KalturaGenericDistributionProviderActionBaseFilter;

util.inherits(KalturaGenericDistributionProviderActionBaseFilter, KalturaFilter);


/**
 */
function KalturaGenericDistributionProviderActionFilter(){
  KalturaGenericDistributionProviderActionFilter.super_.call(this);
};
module.exports.KalturaGenericDistributionProviderActionFilter = KalturaGenericDistributionProviderActionFilter;

util.inherits(KalturaGenericDistributionProviderActionFilter, KalturaGenericDistributionProviderActionBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaGenericDistributionProviderActionListResponse(){
  KalturaGenericDistributionProviderActionListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaGenericDistributionProviderActionListResponse = KalturaGenericDistributionProviderActionListResponse;

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
function KalturaCuePoint(){
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
module.exports.KalturaCuePoint = KalturaCuePoint;

util.inherits(KalturaCuePoint, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaCuePointListResponse(){
  KalturaCuePointListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaCuePointListResponse = KalturaCuePointListResponse;

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
function KalturaCuePointBaseFilter(){
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
module.exports.KalturaCuePointBaseFilter = KalturaCuePointBaseFilter;

util.inherits(KalturaCuePointBaseFilter, KalturaFilter);


/**
 */
function KalturaCuePointFilter(){
  KalturaCuePointFilter.super_.call(this);
};
module.exports.KalturaCuePointFilter = KalturaCuePointFilter;

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
function KalturaShortLinkBaseFilter(){
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
module.exports.KalturaShortLinkBaseFilter = KalturaShortLinkBaseFilter;

util.inherits(KalturaShortLinkBaseFilter, KalturaFilter);


/**
 */
function KalturaShortLinkFilter(){
  KalturaShortLinkFilter.super_.call(this);
};
module.exports.KalturaShortLinkFilter = KalturaShortLinkFilter;

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
function KalturaShortLink(){
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
module.exports.KalturaShortLink = KalturaShortLink;

util.inherits(KalturaShortLink, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaShortLinkListResponse(){
  KalturaShortLinkListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaShortLinkListResponse = KalturaShortLinkListResponse;

util.inherits(KalturaShortLinkListResponse, kcb.KalturaObjectBase);


/**
 * @param  handlerType  string     (readOnly).
 */
function KalturaDropFolderFileHandlerConfig(){
  KalturaDropFolderFileHandlerConfig.super_.call(this);
  this.handlerType = null;
};
module.exports.KalturaDropFolderFileHandlerConfig = KalturaDropFolderFileHandlerConfig;

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
function KalturaDropFolder(){
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
module.exports.KalturaDropFolder = KalturaDropFolder;

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
function KalturaDropFolderBaseFilter(){
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
module.exports.KalturaDropFolderBaseFilter = KalturaDropFolderBaseFilter;

util.inherits(KalturaDropFolderBaseFilter, KalturaFilter);


/**
 */
function KalturaDropFolderFilter(){
  KalturaDropFolderFilter.super_.call(this);
};
module.exports.KalturaDropFolderFilter = KalturaDropFolderFilter;

util.inherits(KalturaDropFolderFilter, KalturaDropFolderBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaDropFolderListResponse(){
  KalturaDropFolderListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaDropFolderListResponse = KalturaDropFolderListResponse;

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
function KalturaDropFolderFile(){
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
module.exports.KalturaDropFolderFile = KalturaDropFolderFile;

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
function KalturaDropFolderFileBaseFilter(){
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
module.exports.KalturaDropFolderFileBaseFilter = KalturaDropFolderFileBaseFilter;

util.inherits(KalturaDropFolderFileBaseFilter, KalturaFilter);


/**
 */
function KalturaDropFolderFileFilter(){
  KalturaDropFolderFileFilter.super_.call(this);
};
module.exports.KalturaDropFolderFileFilter = KalturaDropFolderFileFilter;

util.inherits(KalturaDropFolderFileFilter, KalturaDropFolderFileBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaDropFolderFileListResponse(){
  KalturaDropFolderFileListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaDropFolderFileListResponse = KalturaDropFolderFileListResponse;

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
function KalturaCaptionAsset(){
  KalturaCaptionAsset.super_.call(this);
  this.captionParamsId = null;
  this.language = null;
  this.languageCode = null;
  this.isDefault = null;
  this.label = null;
  this.format = null;
  this.status = null;
};
module.exports.KalturaCaptionAsset = KalturaCaptionAsset;

util.inherits(KalturaCaptionAsset, KalturaAsset);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaCaptionAssetListResponse(){
  KalturaCaptionAssetListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaCaptionAssetListResponse = KalturaCaptionAssetListResponse;

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
function KalturaCaptionParams(){
  KalturaCaptionParams.super_.call(this);
  this.language = null;
  this.isDefault = null;
  this.label = null;
  this.format = null;
  this.sourceParamsId = null;
};
module.exports.KalturaCaptionParams = KalturaCaptionParams;

util.inherits(KalturaCaptionParams, KalturaAssetParams);


/**
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 */
function KalturaCaptionParamsBaseFilter(){
  KalturaCaptionParamsBaseFilter.super_.call(this);
  this.formatEqual = null;
  this.formatIn = null;
};
module.exports.KalturaCaptionParamsBaseFilter = KalturaCaptionParamsBaseFilter;

util.inherits(KalturaCaptionParamsBaseFilter, KalturaAssetParamsFilter);


/**
 */
function KalturaCaptionParamsFilter(){
  KalturaCaptionParamsFilter.super_.call(this);
};
module.exports.KalturaCaptionParamsFilter = KalturaCaptionParamsFilter;

util.inherits(KalturaCaptionParamsFilter, KalturaCaptionParamsBaseFilter);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaCaptionParamsListResponse(){
  KalturaCaptionParamsListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaCaptionParamsListResponse = KalturaCaptionParamsListResponse;

util.inherits(KalturaCaptionParamsListResponse, kcb.KalturaObjectBase);


/**
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
function KalturaCaptionAssetBaseFilter(){
  KalturaCaptionAssetBaseFilter.super_.call(this);
  this.formatEqual = null;
  this.formatIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
module.exports.KalturaCaptionAssetBaseFilter = KalturaCaptionAssetBaseFilter;

util.inherits(KalturaCaptionAssetBaseFilter, KalturaAssetFilter);


/**
 */
function KalturaCaptionAssetFilter(){
  KalturaCaptionAssetFilter.super_.call(this);
};
module.exports.KalturaCaptionAssetFilter = KalturaCaptionAssetFilter;

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
function KalturaCaptionAssetItemFilter(){
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
module.exports.KalturaCaptionAssetItemFilter = KalturaCaptionAssetItemFilter;

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
function KalturaCaptionAssetItem(){
  KalturaCaptionAssetItem.super_.call(this);
  this.asset = null;
  this.entry = null;
  this.startTime = null;
  this.endTime = null;
  this.content = null;
};
module.exports.KalturaCaptionAssetItem = KalturaCaptionAssetItem;

util.inherits(KalturaCaptionAssetItem, kcb.KalturaObjectBase);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaCaptionAssetItemListResponse(){
  KalturaCaptionAssetItemListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaCaptionAssetItemListResponse = KalturaCaptionAssetItemListResponse;

util.inherits(KalturaCaptionAssetItemListResponse, kcb.KalturaObjectBase);


/**
 * @param  filename  string    The filename of the attachment asset content.
 * @param  title  string    Attachment asset title.
 * @param  format  string    The attachment format.
 * @param  status  int    The status of the asset
 *   (readOnly).
 */
function KalturaAttachmentAsset(){
  KalturaAttachmentAsset.super_.call(this);
  this.filename = null;
  this.title = null;
  this.format = null;
  this.status = null;
};
module.exports.KalturaAttachmentAsset = KalturaAttachmentAsset;

util.inherits(KalturaAttachmentAsset, KalturaAsset);


/**
 * @param  objects  array     (readOnly).
 * @param  totalCount  int     (readOnly).
 */
function KalturaAttachmentAssetListResponse(){
  KalturaAttachmentAssetListResponse.super_.call(this);
  this.objects = null;
  this.totalCount = null;
};
module.exports.KalturaAttachmentAssetListResponse = KalturaAttachmentAssetListResponse;

util.inherits(KalturaAttachmentAssetListResponse, kcb.KalturaObjectBase);


/**
 * @param  countryRestrictionType  int    Country restriction type (Allow or deny)
 *  .
 * @param  countryList  string    Comma separated list of country codes to allow to deny 
 *  .
 */
function KalturaCountryRestriction(){
  KalturaCountryRestriction.super_.call(this);
  this.countryRestrictionType = null;
  this.countryList = null;
};
module.exports.KalturaCountryRestriction = KalturaCountryRestriction;

util.inherits(KalturaCountryRestriction, KalturaBaseRestriction);


/**
 * @param  directoryRestrictionType  int    Kaltura directory restriction type
 *  .
 */
function KalturaDirectoryRestriction(){
  KalturaDirectoryRestriction.super_.call(this);
  this.directoryRestrictionType = null;
};
module.exports.KalturaDirectoryRestriction = KalturaDirectoryRestriction;

util.inherits(KalturaDirectoryRestriction, KalturaBaseRestriction);


/**
 * @param  ipAddressRestrictionType  int    Ip address restriction type (Allow or deny)
 *  .
 * @param  ipAddressList  string    Comma separated list of ip address to allow to deny 
 *  .
 */
function KalturaIpAddressRestriction(){
  KalturaIpAddressRestriction.super_.call(this);
  this.ipAddressRestrictionType = null;
  this.ipAddressList = null;
};
module.exports.KalturaIpAddressRestriction = KalturaIpAddressRestriction;

util.inherits(KalturaIpAddressRestriction, KalturaBaseRestriction);


/**
 */
function KalturaSessionRestriction(){
  KalturaSessionRestriction.super_.call(this);
};
module.exports.KalturaSessionRestriction = KalturaSessionRestriction;

util.inherits(KalturaSessionRestriction, KalturaBaseRestriction);


/**
 * @param  previewLength  int    The preview restriction length 
 *  .
 */
function KalturaPreviewRestriction(){
  KalturaPreviewRestriction.super_.call(this);
  this.previewLength = null;
};
module.exports.KalturaPreviewRestriction = KalturaPreviewRestriction;

util.inherits(KalturaPreviewRestriction, KalturaSessionRestriction);


/**
 * @param  siteRestrictionType  int    The site restriction type (allow or deny)
 *  .
 * @param  siteList  string    Comma separated list of sites (domains) to allow or deny
 *  .
 */
function KalturaSiteRestriction(){
  KalturaSiteRestriction.super_.call(this);
  this.siteRestrictionType = null;
  this.siteList = null;
};
module.exports.KalturaSiteRestriction = KalturaSiteRestriction;

util.inherits(KalturaSiteRestriction, KalturaBaseRestriction);


/**
 * @param  userAgentRestrictionType  int    User agent restriction type (Allow or deny)
 *  .
 * @param  userAgentRegexList  string    A comma seperated list of user agent regular expressions
 *  .
 */
function KalturaUserAgentRestriction(){
  KalturaUserAgentRestriction.super_.call(this);
  this.userAgentRestrictionType = null;
  this.userAgentRegexList = null;
};
module.exports.KalturaUserAgentRestriction = KalturaUserAgentRestriction;

util.inherits(KalturaUserAgentRestriction, KalturaBaseRestriction);


/**
 * @param  field  string    .
 * @param  value  string    .
 */
function KalturaSearchCondition(){
  KalturaSearchCondition.super_.call(this);
  this.field = null;
  this.value = null;
};
module.exports.KalturaSearchCondition = KalturaSearchCondition;

util.inherits(KalturaSearchCondition, KalturaSearchItem);


/**
 * @param  comparison  int    .
 */
function KalturaSearchComparableCondition(){
  KalturaSearchComparableCondition.super_.call(this);
  this.comparison = null;
};
module.exports.KalturaSearchComparableCondition = KalturaSearchComparableCondition;

util.inherits(KalturaSearchComparableCondition, KalturaSearchCondition);


/**
 * @param  type  int    .
 * @param  items  array    .
 */
function KalturaSearchOperator(){
  KalturaSearchOperator.super_.call(this);
  this.type = null;
  this.items = null;
};
module.exports.KalturaSearchOperator = KalturaSearchOperator;

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
function KalturaContentDistributionSearchItem(){
  KalturaContentDistributionSearchItem.super_.call(this);
  this.noDistributionProfiles = null;
  this.distributionProfileId = null;
  this.distributionSunStatus = null;
  this.entryDistributionFlag = null;
  this.entryDistributionStatus = null;
  this.hasEntryDistributionValidationErrors = null;
  this.entryDistributionValidationErrors = null;
};
module.exports.KalturaContentDistributionSearchItem = KalturaContentDistributionSearchItem;

util.inherits(KalturaContentDistributionSearchItem, KalturaSearchItem);


/**
 * @param  metadataProfileId  int    .
 * @param  orderBy  string    .
 */
function KalturaMetadataSearchItem(){
  KalturaMetadataSearchItem.super_.call(this);
  this.metadataProfileId = null;
  this.orderBy = null;
};
module.exports.KalturaMetadataSearchItem = KalturaMetadataSearchItem;

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
function KalturaControlPanelCommandBaseFilter(){
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
module.exports.KalturaControlPanelCommandBaseFilter = KalturaControlPanelCommandBaseFilter;

util.inherits(KalturaControlPanelCommandBaseFilter, KalturaFilter);


/**
 */
function KalturaMailJobBaseFilter(){
  KalturaMailJobBaseFilter.super_.call(this);
};
module.exports.KalturaMailJobBaseFilter = KalturaMailJobBaseFilter;

util.inherits(KalturaMailJobBaseFilter, KalturaBaseJobFilter);


/**
 */
function KalturaNotificationBaseFilter(){
  KalturaNotificationBaseFilter.super_.call(this);
};
module.exports.KalturaNotificationBaseFilter = KalturaNotificationBaseFilter;

util.inherits(KalturaNotificationBaseFilter, KalturaBaseJobFilter);


/**
 */
function KalturaControlPanelCommandFilter(){
  KalturaControlPanelCommandFilter.super_.call(this);
};
module.exports.KalturaControlPanelCommandFilter = KalturaControlPanelCommandFilter;

util.inherits(KalturaControlPanelCommandFilter, KalturaControlPanelCommandBaseFilter);


/**
 */
function KalturaMailJobFilter(){
  KalturaMailJobFilter.super_.call(this);
};
module.exports.KalturaMailJobFilter = KalturaMailJobFilter;

util.inherits(KalturaMailJobFilter, KalturaMailJobBaseFilter);


/**
 */
function KalturaNotificationFilter(){
  KalturaNotificationFilter.super_.call(this);
};
module.exports.KalturaNotificationFilter = KalturaNotificationFilter;

util.inherits(KalturaNotificationFilter, KalturaNotificationBaseFilter);


/**
 * @param  jobTypeAndSubTypeIn  string    .
 */
function KalturaBatchJobFilterExt(){
  KalturaBatchJobFilterExt.super_.call(this);
  this.jobTypeAndSubTypeIn = null;
};
module.exports.KalturaBatchJobFilterExt = KalturaBatchJobFilterExt;

util.inherits(KalturaBatchJobFilterExt, KalturaBatchJobFilter);


/**
 * @param  assetParamsIdEqual  int    .
 * @param  assetParamsVersionEqual  string    .
 * @param  assetIdEqual  string    .
 * @param  assetVersionEqual  string    .
 * @param  formatEqual  string    .
 */
function KalturaAssetParamsOutputBaseFilter(){
  KalturaAssetParamsOutputBaseFilter.super_.call(this);
  this.assetParamsIdEqual = null;
  this.assetParamsVersionEqual = null;
  this.assetIdEqual = null;
  this.assetVersionEqual = null;
  this.formatEqual = null;
};
module.exports.KalturaAssetParamsOutputBaseFilter = KalturaAssetParamsOutputBaseFilter;

util.inherits(KalturaAssetParamsOutputBaseFilter, KalturaAssetParamsFilter);


/**
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
function KalturaFlavorAssetBaseFilter(){
  KalturaFlavorAssetBaseFilter.super_.call(this);
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
module.exports.KalturaFlavorAssetBaseFilter = KalturaFlavorAssetBaseFilter;

util.inherits(KalturaFlavorAssetBaseFilter, KalturaAssetFilter);


/**
 */
function KalturaMediaFlavorParamsBaseFilter(){
  KalturaMediaFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaMediaFlavorParamsBaseFilter = KalturaMediaFlavorParamsBaseFilter;

util.inherits(KalturaMediaFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaMediaFlavorParamsOutputBaseFilter(){
  KalturaMediaFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaMediaFlavorParamsOutputBaseFilter = KalturaMediaFlavorParamsOutputBaseFilter;

util.inherits(KalturaMediaFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
function KalturaThumbAssetBaseFilter(){
  KalturaThumbAssetBaseFilter.super_.call(this);
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
module.exports.KalturaThumbAssetBaseFilter = KalturaThumbAssetBaseFilter;

util.inherits(KalturaThumbAssetBaseFilter, KalturaAssetFilter);


/**
 */
function KalturaAssetParamsOutputFilter(){
  KalturaAssetParamsOutputFilter.super_.call(this);
};
module.exports.KalturaAssetParamsOutputFilter = KalturaAssetParamsOutputFilter;

util.inherits(KalturaAssetParamsOutputFilter, KalturaAssetParamsOutputBaseFilter);


/**
 */
function KalturaFlavorAssetFilter(){
  KalturaFlavorAssetFilter.super_.call(this);
};
module.exports.KalturaFlavorAssetFilter = KalturaFlavorAssetFilter;

util.inherits(KalturaFlavorAssetFilter, KalturaFlavorAssetBaseFilter);


/**
 */
function KalturaMediaFlavorParamsFilter(){
  KalturaMediaFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaMediaFlavorParamsFilter = KalturaMediaFlavorParamsFilter;

util.inherits(KalturaMediaFlavorParamsFilter, KalturaMediaFlavorParamsBaseFilter);


/**
 */
function KalturaMediaFlavorParamsOutputFilter(){
  KalturaMediaFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaMediaFlavorParamsOutputFilter = KalturaMediaFlavorParamsOutputFilter;

util.inherits(KalturaMediaFlavorParamsOutputFilter, KalturaMediaFlavorParamsOutputBaseFilter);


/**
 */
function KalturaThumbAssetFilter(){
  KalturaThumbAssetFilter.super_.call(this);
};
module.exports.KalturaThumbAssetFilter = KalturaThumbAssetFilter;

util.inherits(KalturaThumbAssetFilter, KalturaThumbAssetBaseFilter);


/**
 */
function KalturaLiveStreamAdminEntryBaseFilter(){
  KalturaLiveStreamAdminEntryBaseFilter.super_.call(this);
};
module.exports.KalturaLiveStreamAdminEntryBaseFilter = KalturaLiveStreamAdminEntryBaseFilter;

util.inherits(KalturaLiveStreamAdminEntryBaseFilter, KalturaLiveStreamEntryFilter);


/**
 */
function KalturaLiveStreamAdminEntryFilter(){
  KalturaLiveStreamAdminEntryFilter.super_.call(this);
};
module.exports.KalturaLiveStreamAdminEntryFilter = KalturaLiveStreamAdminEntryFilter;

util.inherits(KalturaLiveStreamAdminEntryFilter, KalturaLiveStreamAdminEntryBaseFilter);


/**
 */
function KalturaAdminUserBaseFilter(){
  KalturaAdminUserBaseFilter.super_.call(this);
};
module.exports.KalturaAdminUserBaseFilter = KalturaAdminUserBaseFilter;

util.inherits(KalturaAdminUserBaseFilter, KalturaUserFilter);


/**
 */
function KalturaAdminUserFilter(){
  KalturaAdminUserFilter.super_.call(this);
};
module.exports.KalturaAdminUserFilter = KalturaAdminUserFilter;

util.inherits(KalturaAdminUserFilter, KalturaAdminUserBaseFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedBaseFilter(){
  KalturaGoogleVideoSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaGoogleVideoSyndicationFeedBaseFilter = KalturaGoogleVideoSyndicationFeedBaseFilter;

util.inherits(KalturaGoogleVideoSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedFilter(){
  KalturaGoogleVideoSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaGoogleVideoSyndicationFeedFilter = KalturaGoogleVideoSyndicationFeedFilter;

util.inherits(KalturaGoogleVideoSyndicationFeedFilter, KalturaGoogleVideoSyndicationFeedBaseFilter);


/**
 */
function KalturaITunesSyndicationFeedBaseFilter(){
  KalturaITunesSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaITunesSyndicationFeedBaseFilter = KalturaITunesSyndicationFeedBaseFilter;

util.inherits(KalturaITunesSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaITunesSyndicationFeedFilter(){
  KalturaITunesSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaITunesSyndicationFeedFilter = KalturaITunesSyndicationFeedFilter;

util.inherits(KalturaITunesSyndicationFeedFilter, KalturaITunesSyndicationFeedBaseFilter);


/**
 */
function KalturaTubeMogulSyndicationFeedBaseFilter(){
  KalturaTubeMogulSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaTubeMogulSyndicationFeedBaseFilter = KalturaTubeMogulSyndicationFeedBaseFilter;

util.inherits(KalturaTubeMogulSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaTubeMogulSyndicationFeedFilter(){
  KalturaTubeMogulSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaTubeMogulSyndicationFeedFilter = KalturaTubeMogulSyndicationFeedFilter;

util.inherits(KalturaTubeMogulSyndicationFeedFilter, KalturaTubeMogulSyndicationFeedBaseFilter);


/**
 */
function KalturaYahooSyndicationFeedBaseFilter(){
  KalturaYahooSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaYahooSyndicationFeedBaseFilter = KalturaYahooSyndicationFeedBaseFilter;

util.inherits(KalturaYahooSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaYahooSyndicationFeedFilter(){
  KalturaYahooSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaYahooSyndicationFeedFilter = KalturaYahooSyndicationFeedFilter;

util.inherits(KalturaYahooSyndicationFeedFilter, KalturaYahooSyndicationFeedBaseFilter);


/**
 */
function KalturaApiActionPermissionItemBaseFilter(){
  KalturaApiActionPermissionItemBaseFilter.super_.call(this);
};
module.exports.KalturaApiActionPermissionItemBaseFilter = KalturaApiActionPermissionItemBaseFilter;

util.inherits(KalturaApiActionPermissionItemBaseFilter, KalturaPermissionItemFilter);


/**
 */
function KalturaApiParameterPermissionItemBaseFilter(){
  KalturaApiParameterPermissionItemBaseFilter.super_.call(this);
};
module.exports.KalturaApiParameterPermissionItemBaseFilter = KalturaApiParameterPermissionItemBaseFilter;

util.inherits(KalturaApiParameterPermissionItemBaseFilter, KalturaPermissionItemFilter);


/**
 */
function KalturaApiActionPermissionItemFilter(){
  KalturaApiActionPermissionItemFilter.super_.call(this);
};
module.exports.KalturaApiActionPermissionItemFilter = KalturaApiActionPermissionItemFilter;

util.inherits(KalturaApiActionPermissionItemFilter, KalturaApiActionPermissionItemBaseFilter);


/**
 */
function KalturaApiParameterPermissionItemFilter(){
  KalturaApiParameterPermissionItemFilter.super_.call(this);
};
module.exports.KalturaApiParameterPermissionItemFilter = KalturaApiParameterPermissionItemFilter;

util.inherits(KalturaApiParameterPermissionItemFilter, KalturaApiParameterPermissionItemBaseFilter);


/**
 */
function KalturaGenericSyndicationFeedBaseFilter(){
  KalturaGenericSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaGenericSyndicationFeedBaseFilter = KalturaGenericSyndicationFeedBaseFilter;

util.inherits(KalturaGenericSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaGenericSyndicationFeedFilter(){
  KalturaGenericSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaGenericSyndicationFeedFilter = KalturaGenericSyndicationFeedFilter;

util.inherits(KalturaGenericSyndicationFeedFilter, KalturaGenericSyndicationFeedBaseFilter);


/**
 */
function KalturaGenericXsltSyndicationFeedBaseFilter(){
  KalturaGenericXsltSyndicationFeedBaseFilter.super_.call(this);
};
module.exports.KalturaGenericXsltSyndicationFeedBaseFilter = KalturaGenericXsltSyndicationFeedBaseFilter;

util.inherits(KalturaGenericXsltSyndicationFeedBaseFilter, KalturaGenericSyndicationFeedFilter);


/**
 */
function KalturaGenericXsltSyndicationFeedFilter(){
  KalturaGenericXsltSyndicationFeedFilter.super_.call(this);
};
module.exports.KalturaGenericXsltSyndicationFeedFilter = KalturaGenericXsltSyndicationFeedFilter;

util.inherits(KalturaGenericXsltSyndicationFeedFilter, KalturaGenericXsltSyndicationFeedBaseFilter);


/**
 */
function KalturaUiConfAdminBaseFilter(){
  KalturaUiConfAdminBaseFilter.super_.call(this);
};
module.exports.KalturaUiConfAdminBaseFilter = KalturaUiConfAdminBaseFilter;

util.inherits(KalturaUiConfAdminBaseFilter, KalturaUiConfFilter);


/**
 */
function KalturaUiConfAdminFilter(){
  KalturaUiConfAdminFilter.super_.call(this);
};
module.exports.KalturaUiConfAdminFilter = KalturaUiConfAdminFilter;

util.inherits(KalturaUiConfAdminFilter, KalturaUiConfAdminBaseFilter);


/**
 * @param  formatEqual  string    .
 * @param  formatIn  string    .
 * @param  statusEqual  int    .
 * @param  statusIn  string    .
 * @param  statusNotIn  string    .
 */
function KalturaAttachmentAssetBaseFilter(){
  KalturaAttachmentAssetBaseFilter.super_.call(this);
  this.formatEqual = null;
  this.formatIn = null;
  this.statusEqual = null;
  this.statusIn = null;
  this.statusNotIn = null;
};
module.exports.KalturaAttachmentAssetBaseFilter = KalturaAttachmentAssetBaseFilter;

util.inherits(KalturaAttachmentAssetBaseFilter, KalturaAssetFilter);


/**
 */
function KalturaAttachmentAssetFilter(){
  KalturaAttachmentAssetFilter.super_.call(this);
};
module.exports.KalturaAttachmentAssetFilter = KalturaAttachmentAssetFilter;

util.inherits(KalturaAttachmentAssetFilter, KalturaAttachmentAssetBaseFilter);


/**
 */
function KalturaConfigurableDistributionProfileBaseFilter(){
  KalturaConfigurableDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaConfigurableDistributionProfileBaseFilter = KalturaConfigurableDistributionProfileBaseFilter;

util.inherits(KalturaConfigurableDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
function KalturaGenericDistributionProfileBaseFilter(){
  KalturaGenericDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaGenericDistributionProfileBaseFilter = KalturaGenericDistributionProfileBaseFilter;

util.inherits(KalturaGenericDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
function KalturaSyndicationDistributionProfileBaseFilter(){
  KalturaSyndicationDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaSyndicationDistributionProfileBaseFilter = KalturaSyndicationDistributionProfileBaseFilter;

util.inherits(KalturaSyndicationDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
function KalturaSyndicationDistributionProviderBaseFilter(){
  KalturaSyndicationDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaSyndicationDistributionProviderBaseFilter = KalturaSyndicationDistributionProviderBaseFilter;

util.inherits(KalturaSyndicationDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaConfigurableDistributionProfileFilter(){
  KalturaConfigurableDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaConfigurableDistributionProfileFilter = KalturaConfigurableDistributionProfileFilter;

util.inherits(KalturaConfigurableDistributionProfileFilter, KalturaConfigurableDistributionProfileBaseFilter);


/**
 */
function KalturaGenericDistributionProfileFilter(){
  KalturaGenericDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaGenericDistributionProfileFilter = KalturaGenericDistributionProfileFilter;

util.inherits(KalturaGenericDistributionProfileFilter, KalturaGenericDistributionProfileBaseFilter);


/**
 */
function KalturaSyndicationDistributionProfileFilter(){
  KalturaSyndicationDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaSyndicationDistributionProfileFilter = KalturaSyndicationDistributionProfileFilter;

util.inherits(KalturaSyndicationDistributionProfileFilter, KalturaSyndicationDistributionProfileBaseFilter);


/**
 */
function KalturaSyndicationDistributionProviderFilter(){
  KalturaSyndicationDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaSyndicationDistributionProviderFilter = KalturaSyndicationDistributionProviderFilter;

util.inherits(KalturaSyndicationDistributionProviderFilter, KalturaSyndicationDistributionProviderBaseFilter);


/**
 */
function KalturaAvnDistributionProfileBaseFilter(){
  KalturaAvnDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaAvnDistributionProfileBaseFilter = KalturaAvnDistributionProfileBaseFilter;

util.inherits(KalturaAvnDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaAvnDistributionProviderBaseFilter(){
  KalturaAvnDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaAvnDistributionProviderBaseFilter = KalturaAvnDistributionProviderBaseFilter;

util.inherits(KalturaAvnDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaAvnDistributionProfileFilter(){
  KalturaAvnDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaAvnDistributionProfileFilter = KalturaAvnDistributionProfileFilter;

util.inherits(KalturaAvnDistributionProfileFilter, KalturaAvnDistributionProfileBaseFilter);


/**
 */
function KalturaAvnDistributionProviderFilter(){
  KalturaAvnDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaAvnDistributionProviderFilter = KalturaAvnDistributionProviderFilter;

util.inherits(KalturaAvnDistributionProviderFilter, KalturaAvnDistributionProviderBaseFilter);


/**
 */
function KalturaComcastMrssDistributionProfileBaseFilter(){
  KalturaComcastMrssDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaComcastMrssDistributionProfileBaseFilter = KalturaComcastMrssDistributionProfileBaseFilter;

util.inherits(KalturaComcastMrssDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaComcastMrssDistributionProviderBaseFilter(){
  KalturaComcastMrssDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaComcastMrssDistributionProviderBaseFilter = KalturaComcastMrssDistributionProviderBaseFilter;

util.inherits(KalturaComcastMrssDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaComcastMrssDistributionProfileFilter(){
  KalturaComcastMrssDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaComcastMrssDistributionProfileFilter = KalturaComcastMrssDistributionProfileFilter;

util.inherits(KalturaComcastMrssDistributionProfileFilter, KalturaComcastMrssDistributionProfileBaseFilter);


/**
 */
function KalturaComcastMrssDistributionProviderFilter(){
  KalturaComcastMrssDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaComcastMrssDistributionProviderFilter = KalturaComcastMrssDistributionProviderFilter;

util.inherits(KalturaComcastMrssDistributionProviderFilter, KalturaComcastMrssDistributionProviderBaseFilter);


/**
 */
function KalturaDailymotionDistributionProfileBaseFilter(){
  KalturaDailymotionDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaDailymotionDistributionProfileBaseFilter = KalturaDailymotionDistributionProfileBaseFilter;

util.inherits(KalturaDailymotionDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaDailymotionDistributionProviderBaseFilter(){
  KalturaDailymotionDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaDailymotionDistributionProviderBaseFilter = KalturaDailymotionDistributionProviderBaseFilter;

util.inherits(KalturaDailymotionDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaDailymotionDistributionProfileFilter(){
  KalturaDailymotionDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaDailymotionDistributionProfileFilter = KalturaDailymotionDistributionProfileFilter;

util.inherits(KalturaDailymotionDistributionProfileFilter, KalturaDailymotionDistributionProfileBaseFilter);


/**
 */
function KalturaDailymotionDistributionProviderFilter(){
  KalturaDailymotionDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaDailymotionDistributionProviderFilter = KalturaDailymotionDistributionProviderFilter;

util.inherits(KalturaDailymotionDistributionProviderFilter, KalturaDailymotionDistributionProviderBaseFilter);


/**
 */
function KalturaDoubleClickDistributionProfileBaseFilter(){
  KalturaDoubleClickDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaDoubleClickDistributionProfileBaseFilter = KalturaDoubleClickDistributionProfileBaseFilter;

util.inherits(KalturaDoubleClickDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaDoubleClickDistributionProviderBaseFilter(){
  KalturaDoubleClickDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaDoubleClickDistributionProviderBaseFilter = KalturaDoubleClickDistributionProviderBaseFilter;

util.inherits(KalturaDoubleClickDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaDoubleClickDistributionProfileFilter(){
  KalturaDoubleClickDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaDoubleClickDistributionProfileFilter = KalturaDoubleClickDistributionProfileFilter;

util.inherits(KalturaDoubleClickDistributionProfileFilter, KalturaDoubleClickDistributionProfileBaseFilter);


/**
 */
function KalturaDoubleClickDistributionProviderFilter(){
  KalturaDoubleClickDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaDoubleClickDistributionProviderFilter = KalturaDoubleClickDistributionProviderFilter;

util.inherits(KalturaDoubleClickDistributionProviderFilter, KalturaDoubleClickDistributionProviderBaseFilter);


/**
 */
function KalturaExampleDistributionProfileBaseFilter(){
  KalturaExampleDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaExampleDistributionProfileBaseFilter = KalturaExampleDistributionProfileBaseFilter;

util.inherits(KalturaExampleDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
function KalturaExampleDistributionProviderBaseFilter(){
  KalturaExampleDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaExampleDistributionProviderBaseFilter = KalturaExampleDistributionProviderBaseFilter;

util.inherits(KalturaExampleDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaExampleDistributionProfileFilter(){
  KalturaExampleDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaExampleDistributionProfileFilter = KalturaExampleDistributionProfileFilter;

util.inherits(KalturaExampleDistributionProfileFilter, KalturaExampleDistributionProfileBaseFilter);


/**
 */
function KalturaExampleDistributionProviderFilter(){
  KalturaExampleDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaExampleDistributionProviderFilter = KalturaExampleDistributionProviderFilter;

util.inherits(KalturaExampleDistributionProviderFilter, KalturaExampleDistributionProviderBaseFilter);


/**
 */
function KalturaFreewheelDistributionProfileBaseFilter(){
  KalturaFreewheelDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaFreewheelDistributionProfileBaseFilter = KalturaFreewheelDistributionProfileBaseFilter;

util.inherits(KalturaFreewheelDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
function KalturaFreewheelDistributionProviderBaseFilter(){
  KalturaFreewheelDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaFreewheelDistributionProviderBaseFilter = KalturaFreewheelDistributionProviderBaseFilter;

util.inherits(KalturaFreewheelDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaFreewheelDistributionProfileFilter(){
  KalturaFreewheelDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaFreewheelDistributionProfileFilter = KalturaFreewheelDistributionProfileFilter;

util.inherits(KalturaFreewheelDistributionProfileFilter, KalturaFreewheelDistributionProfileBaseFilter);


/**
 */
function KalturaFreewheelDistributionProviderFilter(){
  KalturaFreewheelDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaFreewheelDistributionProviderFilter = KalturaFreewheelDistributionProviderFilter;

util.inherits(KalturaFreewheelDistributionProviderFilter, KalturaFreewheelDistributionProviderBaseFilter);


/**
 */
function KalturaFreewheelGenericDistributionProfileBaseFilter(){
  KalturaFreewheelGenericDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaFreewheelGenericDistributionProfileBaseFilter = KalturaFreewheelGenericDistributionProfileBaseFilter;

util.inherits(KalturaFreewheelGenericDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaFreewheelGenericDistributionProviderBaseFilter(){
  KalturaFreewheelGenericDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaFreewheelGenericDistributionProviderBaseFilter = KalturaFreewheelGenericDistributionProviderBaseFilter;

util.inherits(KalturaFreewheelGenericDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaFreewheelGenericDistributionProfileFilter(){
  KalturaFreewheelGenericDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaFreewheelGenericDistributionProfileFilter = KalturaFreewheelGenericDistributionProfileFilter;

util.inherits(KalturaFreewheelGenericDistributionProfileFilter, KalturaFreewheelGenericDistributionProfileBaseFilter);


/**
 */
function KalturaFreewheelGenericDistributionProviderFilter(){
  KalturaFreewheelGenericDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaFreewheelGenericDistributionProviderFilter = KalturaFreewheelGenericDistributionProviderFilter;

util.inherits(KalturaFreewheelGenericDistributionProviderFilter, KalturaFreewheelGenericDistributionProviderBaseFilter);


/**
 */
function KalturaHuluDistributionProfileBaseFilter(){
  KalturaHuluDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaHuluDistributionProfileBaseFilter = KalturaHuluDistributionProfileBaseFilter;

util.inherits(KalturaHuluDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaHuluDistributionProviderBaseFilter(){
  KalturaHuluDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaHuluDistributionProviderBaseFilter = KalturaHuluDistributionProviderBaseFilter;

util.inherits(KalturaHuluDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaHuluDistributionProfileFilter(){
  KalturaHuluDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaHuluDistributionProfileFilter = KalturaHuluDistributionProfileFilter;

util.inherits(KalturaHuluDistributionProfileFilter, KalturaHuluDistributionProfileBaseFilter);


/**
 */
function KalturaHuluDistributionProviderFilter(){
  KalturaHuluDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaHuluDistributionProviderFilter = KalturaHuluDistributionProviderFilter;

util.inherits(KalturaHuluDistributionProviderFilter, KalturaHuluDistributionProviderBaseFilter);


/**
 */
function KalturaIdeticDistributionProfileBaseFilter(){
  KalturaIdeticDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaIdeticDistributionProfileBaseFilter = KalturaIdeticDistributionProfileBaseFilter;

util.inherits(KalturaIdeticDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaIdeticDistributionProviderBaseFilter(){
  KalturaIdeticDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaIdeticDistributionProviderBaseFilter = KalturaIdeticDistributionProviderBaseFilter;

util.inherits(KalturaIdeticDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaIdeticDistributionProfileFilter(){
  KalturaIdeticDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaIdeticDistributionProfileFilter = KalturaIdeticDistributionProfileFilter;

util.inherits(KalturaIdeticDistributionProfileFilter, KalturaIdeticDistributionProfileBaseFilter);


/**
 */
function KalturaIdeticDistributionProviderFilter(){
  KalturaIdeticDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaIdeticDistributionProviderFilter = KalturaIdeticDistributionProviderFilter;

util.inherits(KalturaIdeticDistributionProviderFilter, KalturaIdeticDistributionProviderBaseFilter);


/**
 */
function KalturaNdnDistributionProfileBaseFilter(){
  KalturaNdnDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaNdnDistributionProfileBaseFilter = KalturaNdnDistributionProfileBaseFilter;

util.inherits(KalturaNdnDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaNdnDistributionProviderBaseFilter(){
  KalturaNdnDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaNdnDistributionProviderBaseFilter = KalturaNdnDistributionProviderBaseFilter;

util.inherits(KalturaNdnDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaNdnDistributionProfileFilter(){
  KalturaNdnDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaNdnDistributionProfileFilter = KalturaNdnDistributionProfileFilter;

util.inherits(KalturaNdnDistributionProfileFilter, KalturaNdnDistributionProfileBaseFilter);


/**
 */
function KalturaNdnDistributionProviderFilter(){
  KalturaNdnDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaNdnDistributionProviderFilter = KalturaNdnDistributionProviderFilter;

util.inherits(KalturaNdnDistributionProviderFilter, KalturaNdnDistributionProviderBaseFilter);


/**
 */
function KalturaPodcastDistributionProfileBaseFilter(){
  KalturaPodcastDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaPodcastDistributionProfileBaseFilter = KalturaPodcastDistributionProfileBaseFilter;

util.inherits(KalturaPodcastDistributionProfileBaseFilter, KalturaDistributionProfileFilter);


/**
 */
function KalturaPodcastDistributionProviderBaseFilter(){
  KalturaPodcastDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaPodcastDistributionProviderBaseFilter = KalturaPodcastDistributionProviderBaseFilter;

util.inherits(KalturaPodcastDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaPodcastDistributionProfileFilter(){
  KalturaPodcastDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaPodcastDistributionProfileFilter = KalturaPodcastDistributionProfileFilter;

util.inherits(KalturaPodcastDistributionProfileFilter, KalturaPodcastDistributionProfileBaseFilter);


/**
 */
function KalturaPodcastDistributionProviderFilter(){
  KalturaPodcastDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaPodcastDistributionProviderFilter = KalturaPodcastDistributionProviderFilter;

util.inherits(KalturaPodcastDistributionProviderFilter, KalturaPodcastDistributionProviderBaseFilter);


/**
 */
function KalturaSynacorHboDistributionProfileBaseFilter(){
  KalturaSynacorHboDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaSynacorHboDistributionProfileBaseFilter = KalturaSynacorHboDistributionProfileBaseFilter;

util.inherits(KalturaSynacorHboDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaSynacorHboDistributionProviderBaseFilter(){
  KalturaSynacorHboDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaSynacorHboDistributionProviderBaseFilter = KalturaSynacorHboDistributionProviderBaseFilter;

util.inherits(KalturaSynacorHboDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaSynacorHboDistributionProfileFilter(){
  KalturaSynacorHboDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaSynacorHboDistributionProfileFilter = KalturaSynacorHboDistributionProfileFilter;

util.inherits(KalturaSynacorHboDistributionProfileFilter, KalturaSynacorHboDistributionProfileBaseFilter);


/**
 */
function KalturaSynacorHboDistributionProviderFilter(){
  KalturaSynacorHboDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaSynacorHboDistributionProviderFilter = KalturaSynacorHboDistributionProviderFilter;

util.inherits(KalturaSynacorHboDistributionProviderFilter, KalturaSynacorHboDistributionProviderBaseFilter);


/**
 */
function KalturaTimeWarnerDistributionProfileBaseFilter(){
  KalturaTimeWarnerDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaTimeWarnerDistributionProfileBaseFilter = KalturaTimeWarnerDistributionProfileBaseFilter;

util.inherits(KalturaTimeWarnerDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaTimeWarnerDistributionProviderBaseFilter(){
  KalturaTimeWarnerDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaTimeWarnerDistributionProviderBaseFilter = KalturaTimeWarnerDistributionProviderBaseFilter;

util.inherits(KalturaTimeWarnerDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaTimeWarnerDistributionProfileFilter(){
  KalturaTimeWarnerDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaTimeWarnerDistributionProfileFilter = KalturaTimeWarnerDistributionProfileFilter;

util.inherits(KalturaTimeWarnerDistributionProfileFilter, KalturaTimeWarnerDistributionProfileBaseFilter);


/**
 */
function KalturaTimeWarnerDistributionProviderFilter(){
  KalturaTimeWarnerDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaTimeWarnerDistributionProviderFilter = KalturaTimeWarnerDistributionProviderFilter;

util.inherits(KalturaTimeWarnerDistributionProviderFilter, KalturaTimeWarnerDistributionProviderBaseFilter);


/**
 */
function KalturaTVComDistributionProfileBaseFilter(){
  KalturaTVComDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaTVComDistributionProfileBaseFilter = KalturaTVComDistributionProfileBaseFilter;

util.inherits(KalturaTVComDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaTVComDistributionProviderBaseFilter(){
  KalturaTVComDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaTVComDistributionProviderBaseFilter = KalturaTVComDistributionProviderBaseFilter;

util.inherits(KalturaTVComDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaTVComDistributionProfileFilter(){
  KalturaTVComDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaTVComDistributionProfileFilter = KalturaTVComDistributionProfileFilter;

util.inherits(KalturaTVComDistributionProfileFilter, KalturaTVComDistributionProfileBaseFilter);


/**
 */
function KalturaTVComDistributionProviderFilter(){
  KalturaTVComDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaTVComDistributionProviderFilter = KalturaTVComDistributionProviderFilter;

util.inherits(KalturaTVComDistributionProviderFilter, KalturaTVComDistributionProviderBaseFilter);


/**
 */
function KalturaUverseDistributionProfileBaseFilter(){
  KalturaUverseDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaUverseDistributionProfileBaseFilter = KalturaUverseDistributionProfileBaseFilter;

util.inherits(KalturaUverseDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaUverseDistributionProviderBaseFilter(){
  KalturaUverseDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaUverseDistributionProviderBaseFilter = KalturaUverseDistributionProviderBaseFilter;

util.inherits(KalturaUverseDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaUverseDistributionProfileFilter(){
  KalturaUverseDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaUverseDistributionProfileFilter = KalturaUverseDistributionProfileFilter;

util.inherits(KalturaUverseDistributionProfileFilter, KalturaUverseDistributionProfileBaseFilter);


/**
 */
function KalturaUverseDistributionProviderFilter(){
  KalturaUverseDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaUverseDistributionProviderFilter = KalturaUverseDistributionProviderFilter;

util.inherits(KalturaUverseDistributionProviderFilter, KalturaUverseDistributionProviderBaseFilter);


/**
 */
function KalturaVerizonVcastDistributionProfileBaseFilter(){
  KalturaVerizonVcastDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaVerizonVcastDistributionProfileBaseFilter = KalturaVerizonVcastDistributionProfileBaseFilter;

util.inherits(KalturaVerizonVcastDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaVerizonVcastDistributionProviderBaseFilter(){
  KalturaVerizonVcastDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaVerizonVcastDistributionProviderBaseFilter = KalturaVerizonVcastDistributionProviderBaseFilter;

util.inherits(KalturaVerizonVcastDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaVerizonVcastDistributionProfileFilter(){
  KalturaVerizonVcastDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaVerizonVcastDistributionProfileFilter = KalturaVerizonVcastDistributionProfileFilter;

util.inherits(KalturaVerizonVcastDistributionProfileFilter, KalturaVerizonVcastDistributionProfileBaseFilter);


/**
 */
function KalturaVerizonVcastDistributionProviderFilter(){
  KalturaVerizonVcastDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaVerizonVcastDistributionProviderFilter = KalturaVerizonVcastDistributionProviderFilter;

util.inherits(KalturaVerizonVcastDistributionProviderFilter, KalturaVerizonVcastDistributionProviderBaseFilter);


/**
 */
function KalturaYahooDistributionProfileBaseFilter(){
  KalturaYahooDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaYahooDistributionProfileBaseFilter = KalturaYahooDistributionProfileBaseFilter;

util.inherits(KalturaYahooDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaYahooDistributionProviderBaseFilter(){
  KalturaYahooDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaYahooDistributionProviderBaseFilter = KalturaYahooDistributionProviderBaseFilter;

util.inherits(KalturaYahooDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaYahooDistributionProfileFilter(){
  KalturaYahooDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaYahooDistributionProfileFilter = KalturaYahooDistributionProfileFilter;

util.inherits(KalturaYahooDistributionProfileFilter, KalturaYahooDistributionProfileBaseFilter);


/**
 */
function KalturaYahooDistributionProviderFilter(){
  KalturaYahooDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaYahooDistributionProviderFilter = KalturaYahooDistributionProviderFilter;

util.inherits(KalturaYahooDistributionProviderFilter, KalturaYahooDistributionProviderBaseFilter);


/**
 */
function KalturaYouTubeDistributionProfileBaseFilter(){
  KalturaYouTubeDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaYouTubeDistributionProfileBaseFilter = KalturaYouTubeDistributionProfileBaseFilter;

util.inherits(KalturaYouTubeDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaYouTubeDistributionProviderBaseFilter(){
  KalturaYouTubeDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaYouTubeDistributionProviderBaseFilter = KalturaYouTubeDistributionProviderBaseFilter;

util.inherits(KalturaYouTubeDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaYouTubeDistributionProfileFilter(){
  KalturaYouTubeDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaYouTubeDistributionProfileFilter = KalturaYouTubeDistributionProfileFilter;

util.inherits(KalturaYouTubeDistributionProfileFilter, KalturaYouTubeDistributionProfileBaseFilter);


/**
 */
function KalturaYouTubeDistributionProviderFilter(){
  KalturaYouTubeDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaYouTubeDistributionProviderFilter = KalturaYouTubeDistributionProviderFilter;

util.inherits(KalturaYouTubeDistributionProviderFilter, KalturaYouTubeDistributionProviderBaseFilter);


/**
 */
function KalturaYoutubeApiDistributionProfileBaseFilter(){
  KalturaYoutubeApiDistributionProfileBaseFilter.super_.call(this);
};
module.exports.KalturaYoutubeApiDistributionProfileBaseFilter = KalturaYoutubeApiDistributionProfileBaseFilter;

util.inherits(KalturaYoutubeApiDistributionProfileBaseFilter, KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaYoutubeApiDistributionProviderBaseFilter(){
  KalturaYoutubeApiDistributionProviderBaseFilter.super_.call(this);
};
module.exports.KalturaYoutubeApiDistributionProviderBaseFilter = KalturaYoutubeApiDistributionProviderBaseFilter;

util.inherits(KalturaYoutubeApiDistributionProviderBaseFilter, KalturaDistributionProviderFilter);


/**
 */
function KalturaYoutubeApiDistributionProfileFilter(){
  KalturaYoutubeApiDistributionProfileFilter.super_.call(this);
};
module.exports.KalturaYoutubeApiDistributionProfileFilter = KalturaYoutubeApiDistributionProfileFilter;

util.inherits(KalturaYoutubeApiDistributionProfileFilter, KalturaYoutubeApiDistributionProfileBaseFilter);


/**
 */
function KalturaYoutubeApiDistributionProviderFilter(){
  KalturaYoutubeApiDistributionProviderFilter.super_.call(this);
};
module.exports.KalturaYoutubeApiDistributionProviderFilter = KalturaYoutubeApiDistributionProviderFilter;

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
function KalturaAdCuePointBaseFilter(){
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
module.exports.KalturaAdCuePointBaseFilter = KalturaAdCuePointBaseFilter;

util.inherits(KalturaAdCuePointBaseFilter, KalturaCuePointFilter);


/**
 */
function KalturaAdCuePointFilter(){
  KalturaAdCuePointFilter.super_.call(this);
};
module.exports.KalturaAdCuePointFilter = KalturaAdCuePointFilter;

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
function KalturaAnnotationBaseFilter(){
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
module.exports.KalturaAnnotationBaseFilter = KalturaAnnotationBaseFilter;

util.inherits(KalturaAnnotationBaseFilter, KalturaCuePointFilter);


/**
 */
function KalturaAnnotationFilter(){
  KalturaAnnotationFilter.super_.call(this);
};
module.exports.KalturaAnnotationFilter = KalturaAnnotationFilter;

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
function KalturaCodeCuePointBaseFilter(){
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
module.exports.KalturaCodeCuePointBaseFilter = KalturaCodeCuePointBaseFilter;

util.inherits(KalturaCodeCuePointBaseFilter, KalturaCuePointFilter);


/**
 */
function KalturaCodeCuePointFilter(){
  KalturaCodeCuePointFilter.super_.call(this);
};
module.exports.KalturaCodeCuePointFilter = KalturaCodeCuePointFilter;

util.inherits(KalturaCodeCuePointFilter, KalturaCodeCuePointBaseFilter);


/**
 */
function KalturaDocumentFlavorParamsBaseFilter(){
  KalturaDocumentFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaDocumentFlavorParamsBaseFilter = KalturaDocumentFlavorParamsBaseFilter;

util.inherits(KalturaDocumentFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaDocumentFlavorParamsOutputBaseFilter(){
  KalturaDocumentFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaDocumentFlavorParamsOutputBaseFilter = KalturaDocumentFlavorParamsOutputBaseFilter;

util.inherits(KalturaDocumentFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaPdfFlavorParamsBaseFilter(){
  KalturaPdfFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaPdfFlavorParamsBaseFilter = KalturaPdfFlavorParamsBaseFilter;

util.inherits(KalturaPdfFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaPdfFlavorParamsOutputBaseFilter(){
  KalturaPdfFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaPdfFlavorParamsOutputBaseFilter = KalturaPdfFlavorParamsOutputBaseFilter;

util.inherits(KalturaPdfFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaSwfFlavorParamsBaseFilter(){
  KalturaSwfFlavorParamsBaseFilter.super_.call(this);
};
module.exports.KalturaSwfFlavorParamsBaseFilter = KalturaSwfFlavorParamsBaseFilter;

util.inherits(KalturaSwfFlavorParamsBaseFilter, KalturaFlavorParamsFilter);


/**
 */
function KalturaSwfFlavorParamsOutputBaseFilter(){
  KalturaSwfFlavorParamsOutputBaseFilter.super_.call(this);
};
module.exports.KalturaSwfFlavorParamsOutputBaseFilter = KalturaSwfFlavorParamsOutputBaseFilter;

util.inherits(KalturaSwfFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaDocumentFlavorParamsFilter(){
  KalturaDocumentFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaDocumentFlavorParamsFilter = KalturaDocumentFlavorParamsFilter;

util.inherits(KalturaDocumentFlavorParamsFilter, KalturaDocumentFlavorParamsBaseFilter);


/**
 */
function KalturaDocumentFlavorParamsOutputFilter(){
  KalturaDocumentFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaDocumentFlavorParamsOutputFilter = KalturaDocumentFlavorParamsOutputFilter;

util.inherits(KalturaDocumentFlavorParamsOutputFilter, KalturaDocumentFlavorParamsOutputBaseFilter);


/**
 */
function KalturaPdfFlavorParamsFilter(){
  KalturaPdfFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaPdfFlavorParamsFilter = KalturaPdfFlavorParamsFilter;

util.inherits(KalturaPdfFlavorParamsFilter, KalturaPdfFlavorParamsBaseFilter);


/**
 */
function KalturaPdfFlavorParamsOutputFilter(){
  KalturaPdfFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaPdfFlavorParamsOutputFilter = KalturaPdfFlavorParamsOutputFilter;

util.inherits(KalturaPdfFlavorParamsOutputFilter, KalturaPdfFlavorParamsOutputBaseFilter);


/**
 */
function KalturaSwfFlavorParamsFilter(){
  KalturaSwfFlavorParamsFilter.super_.call(this);
};
module.exports.KalturaSwfFlavorParamsFilter = KalturaSwfFlavorParamsFilter;

util.inherits(KalturaSwfFlavorParamsFilter, KalturaSwfFlavorParamsBaseFilter);


/**
 */
function KalturaSwfFlavorParamsOutputFilter(){
  KalturaSwfFlavorParamsOutputFilter.super_.call(this);
};
module.exports.KalturaSwfFlavorParamsOutputFilter = KalturaSwfFlavorParamsOutputFilter;

util.inherits(KalturaSwfFlavorParamsOutputFilter, KalturaSwfFlavorParamsOutputBaseFilter);


/**
 */
function KalturaRemoteDropFolderBaseFilter(){
  KalturaRemoteDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaRemoteDropFolderBaseFilter = KalturaRemoteDropFolderBaseFilter;

util.inherits(KalturaRemoteDropFolderBaseFilter, KalturaDropFolderFilter);


/**
 */
function KalturaRemoteDropFolderFilter(){
  KalturaRemoteDropFolderFilter.super_.call(this);
};
module.exports.KalturaRemoteDropFolderFilter = KalturaRemoteDropFolderFilter;

util.inherits(KalturaRemoteDropFolderFilter, KalturaRemoteDropFolderBaseFilter);


/**
 */
function KalturaFtpDropFolderBaseFilter(){
  KalturaFtpDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaFtpDropFolderBaseFilter = KalturaFtpDropFolderBaseFilter;

util.inherits(KalturaFtpDropFolderBaseFilter, KalturaRemoteDropFolderFilter);


/**
 */
function KalturaSshDropFolderBaseFilter(){
  KalturaSshDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaSshDropFolderBaseFilter = KalturaSshDropFolderBaseFilter;

util.inherits(KalturaSshDropFolderBaseFilter, KalturaRemoteDropFolderFilter);


/**
 */
function KalturaSshDropFolderFilter(){
  KalturaSshDropFolderFilter.super_.call(this);
};
module.exports.KalturaSshDropFolderFilter = KalturaSshDropFolderFilter;

util.inherits(KalturaSshDropFolderFilter, KalturaSshDropFolderBaseFilter);


/**
 */
function KalturaScpDropFolderBaseFilter(){
  KalturaScpDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaScpDropFolderBaseFilter = KalturaScpDropFolderBaseFilter;

util.inherits(KalturaScpDropFolderBaseFilter, KalturaSshDropFolderFilter);


/**
 */
function KalturaSftpDropFolderBaseFilter(){
  KalturaSftpDropFolderBaseFilter.super_.call(this);
};
module.exports.KalturaSftpDropFolderBaseFilter = KalturaSftpDropFolderBaseFilter;

util.inherits(KalturaSftpDropFolderBaseFilter, KalturaSshDropFolderFilter);


/**
 */
function KalturaFtpDropFolderFilter(){
  KalturaFtpDropFolderFilter.super_.call(this);
};
module.exports.KalturaFtpDropFolderFilter = KalturaFtpDropFolderFilter;

util.inherits(KalturaFtpDropFolderFilter, KalturaFtpDropFolderBaseFilter);


/**
 */
function KalturaScpDropFolderFilter(){
  KalturaScpDropFolderFilter.super_.call(this);
};
module.exports.KalturaScpDropFolderFilter = KalturaScpDropFolderFilter;

util.inherits(KalturaScpDropFolderFilter, KalturaScpDropFolderBaseFilter);


/**
 */
function KalturaSftpDropFolderFilter(){
  KalturaSftpDropFolderFilter.super_.call(this);
};
module.exports.KalturaSftpDropFolderFilter = KalturaSftpDropFolderFilter;

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
function KalturaDwhHourlyPartnerBaseFilter(){
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
module.exports.KalturaDwhHourlyPartnerBaseFilter = KalturaDwhHourlyPartnerBaseFilter;

util.inherits(KalturaDwhHourlyPartnerBaseFilter, KalturaFilter);


/**
 */
function KalturaDwhHourlyPartnerFilter(){
  KalturaDwhHourlyPartnerFilter.super_.call(this);
};
module.exports.KalturaDwhHourlyPartnerFilter = KalturaDwhHourlyPartnerFilter;

util.inherits(KalturaDwhHourlyPartnerFilter, KalturaDwhHourlyPartnerBaseFilter);


/**
 * @param  offset  int    Offset in milliseconds.
 * @param  duration  int    Duration in milliseconds.
 */
function KalturaClipAttributes(){
  KalturaClipAttributes.super_.call(this);
  this.offset = null;
  this.duration = null;
};
module.exports.KalturaClipAttributes = KalturaClipAttributes;

util.inherits(KalturaClipAttributes, KalturaOperationAttributes);


/**
 * @param  resource  KalturaContentResource    The content resource to associate with asset params.
 * @param  assetParamsId  int    The asset params to associate with the reaource.
 */
function KalturaAssetParamsResourceContainer(){
  KalturaAssetParamsResourceContainer.super_.call(this);
  this.resource = null;
  this.assetParamsId = null;
};
module.exports.KalturaAssetParamsResourceContainer = KalturaAssetParamsResourceContainer;

util.inherits(KalturaAssetParamsResourceContainer, KalturaResource);


/**
 * @param  assetId  string    ID of the source asset .
 */
function KalturaAssetResource(){
  KalturaAssetResource.super_.call(this);
  this.assetId = null;
};
module.exports.KalturaAssetResource = KalturaAssetResource;

util.inherits(KalturaAssetResource, KalturaContentResource);


/**
 * @param  resources  array    Array of resources associated with asset params ids.
 */
function KalturaAssetsParamsResourceContainers(){
  KalturaAssetsParamsResourceContainers.super_.call(this);
  this.resources = null;
};
module.exports.KalturaAssetsParamsResourceContainers = KalturaAssetsParamsResourceContainers;

util.inherits(KalturaAssetsParamsResourceContainers, KalturaResource);


/**
 */
function KalturaDataCenterContentResource(){
  KalturaDataCenterContentResource.super_.call(this);
};
module.exports.KalturaDataCenterContentResource = KalturaDataCenterContentResource;

util.inherits(KalturaDataCenterContentResource, KalturaContentResource);


/**
 * @param  entryId  string    ID of the source entry .
 * @param  flavorParamsId  int    ID of the source flavor params, set to null to use the source flavor.
 */
function KalturaEntryResource(){
  KalturaEntryResource.super_.call(this);
  this.entryId = null;
  this.flavorParamsId = null;
};
module.exports.KalturaEntryResource = KalturaEntryResource;

util.inherits(KalturaEntryResource, KalturaContentResource);


/**
 * @param  fileSyncObjectType  int    The object type of the file sync object .
 * @param  objectSubType  int    The object sub-type of the file sync object .
 * @param  objectId  string    The object id of the file sync object .
 * @param  version  string    The version of the file sync object .
 */
function KalturaFileSyncResource(){
  KalturaFileSyncResource.super_.call(this);
  this.fileSyncObjectType = null;
  this.objectSubType = null;
  this.objectId = null;
  this.version = null;
};
module.exports.KalturaFileSyncResource = KalturaFileSyncResource;

util.inherits(KalturaFileSyncResource, KalturaContentResource);


/**
 * @param  resource  KalturaContentResource    Only KalturaEntryResource and KalturaAssetResource are supported.
 * @param  operationAttributes  array    .
 * @param  assetParamsId  int    ID of alternative asset params to be used instead of the system default flavor params .
 */
function KalturaOperationResource(){
  KalturaOperationResource.super_.call(this);
  this.resource = null;
  this.operationAttributes = null;
  this.assetParamsId = null;
};
module.exports.KalturaOperationResource = KalturaOperationResource;

util.inherits(KalturaOperationResource, KalturaContentResource);


/**
 * @param  url  string    Remote URL, FTP, HTTP or HTTPS .
 */
function KalturaUrlResource(){
  KalturaUrlResource.super_.call(this);
  this.url = null;
};
module.exports.KalturaUrlResource = KalturaUrlResource;

util.inherits(KalturaUrlResource, KalturaContentResource);


/**
 * @param  storageProfileId  int    ID of storage profile to be associated with the created file sync, used for file serving URL composing. .
 */
function KalturaRemoteStorageResource(){
  KalturaRemoteStorageResource.super_.call(this);
  this.storageProfileId = null;
};
module.exports.KalturaRemoteStorageResource = KalturaRemoteStorageResource;

util.inherits(KalturaRemoteStorageResource, KalturaUrlResource);


/**
 * @param  resources  array    Array of remote stoage resources .
 */
function KalturaRemoteStorageResources(){
  KalturaRemoteStorageResources.super_.call(this);
  this.resources = null;
};
module.exports.KalturaRemoteStorageResources = KalturaRemoteStorageResources;

util.inherits(KalturaRemoteStorageResources, KalturaContentResource);


/**
 * @param  localFilePath  string    Full path to the local file .
 */
function KalturaServerFileResource(){
  KalturaServerFileResource.super_.call(this);
  this.localFilePath = null;
};
module.exports.KalturaServerFileResource = KalturaServerFileResource;

util.inherits(KalturaServerFileResource, KalturaDataCenterContentResource);


/**
 * @param  privateKey  string    SSH private key.
 * @param  publicKey  string    SSH public key.
 * @param  keyPassphrase  string    Passphrase for SSH keys.
 */
function KalturaSshUrlResource(){
  KalturaSshUrlResource.super_.call(this);
  this.privateKey = null;
  this.publicKey = null;
  this.keyPassphrase = null;
};
module.exports.KalturaSshUrlResource = KalturaSshUrlResource;

util.inherits(KalturaSshUrlResource, KalturaUrlResource);


/**
 * @param  token  string    Token that returned from upload.upload action or uploadToken.add action. .
 */
function KalturaUploadedFileTokenResource(){
  KalturaUploadedFileTokenResource.super_.call(this);
  this.token = null;
};
module.exports.KalturaUploadedFileTokenResource = KalturaUploadedFileTokenResource;

util.inherits(KalturaUploadedFileTokenResource, KalturaDataCenterContentResource);


/**
 * @param  token  string    Token that returned from media server such as FMS or red5. .
 */
function KalturaWebcamTokenResource(){
  KalturaWebcamTokenResource.super_.call(this);
  this.token = null;
};
module.exports.KalturaWebcamTokenResource = KalturaWebcamTokenResource;

util.inherits(KalturaWebcamTokenResource, KalturaDataCenterContentResource);


/**
 * @param  dropFolderFileId  int    Id of the drop folder file object.
 */
function KalturaDropFolderFileResource(){
  KalturaDropFolderFileResource.super_.call(this);
  this.dropFolderFileId = null;
};
module.exports.KalturaDropFolderFileResource = KalturaDropFolderFileResource;

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
function KalturaAssetParamsOutput(){
  KalturaAssetParamsOutput.super_.call(this);
  this.assetParamsId = null;
  this.assetParamsVersion = null;
  this.assetId = null;
  this.assetVersion = null;
  this.readyBehavior = null;
  this.format = null;
};
module.exports.KalturaAssetParamsOutput = KalturaAssetParamsOutput;

util.inherits(KalturaAssetParamsOutput, KalturaAssetParams);


/**
 */
function KalturaMediaFlavorParamsOutput(){
  KalturaMediaFlavorParamsOutput.super_.call(this);
};
module.exports.KalturaMediaFlavorParamsOutput = KalturaMediaFlavorParamsOutput;

util.inherits(KalturaMediaFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 */
function KalturaMediaFlavorParams(){
  KalturaMediaFlavorParams.super_.call(this);
};
module.exports.KalturaMediaFlavorParams = KalturaMediaFlavorParams;

util.inherits(KalturaMediaFlavorParams, KalturaFlavorParams);


/**
 */
function KalturaDocumentFlavorParamsOutput(){
  KalturaDocumentFlavorParamsOutput.super_.call(this);
};
module.exports.KalturaDocumentFlavorParamsOutput = KalturaDocumentFlavorParamsOutput;

util.inherits(KalturaDocumentFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 */
function KalturaDocumentFlavorParams(){
  KalturaDocumentFlavorParams.super_.call(this);
};
module.exports.KalturaDocumentFlavorParams = KalturaDocumentFlavorParams;

util.inherits(KalturaDocumentFlavorParams, KalturaFlavorParams);


/**
 * @param  readonly  bool    .
 */
function KalturaPdfFlavorParamsOutput(){
  KalturaPdfFlavorParamsOutput.super_.call(this);
  this.readonly = null;
};
module.exports.KalturaPdfFlavorParamsOutput = KalturaPdfFlavorParamsOutput;

util.inherits(KalturaPdfFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 * @param  readonly  bool    .
 */
function KalturaPdfFlavorParams(){
  KalturaPdfFlavorParams.super_.call(this);
  this.readonly = null;
};
module.exports.KalturaPdfFlavorParams = KalturaPdfFlavorParams;

util.inherits(KalturaPdfFlavorParams, KalturaFlavorParams);


/**
 * @param  flashVersion  int    .
 * @param  poly2Bitmap  bool    .
 */
function KalturaSwfFlavorParamsOutput(){
  KalturaSwfFlavorParamsOutput.super_.call(this);
  this.flashVersion = null;
  this.poly2Bitmap = null;
};
module.exports.KalturaSwfFlavorParamsOutput = KalturaSwfFlavorParamsOutput;

util.inherits(KalturaSwfFlavorParamsOutput, KalturaFlavorParamsOutput);


/**
 * @param  flashVersion  int    .
 * @param  poly2Bitmap  bool    .
 */
function KalturaSwfFlavorParams(){
  KalturaSwfFlavorParams.super_.call(this);
  this.flashVersion = null;
  this.poly2Bitmap = null;
};
module.exports.KalturaSwfFlavorParams = KalturaSwfFlavorParams;

util.inherits(KalturaSwfFlavorParams, KalturaFlavorParams);


/**
 * @param  service  string    .
 * @param  action  string    .
 */
function KalturaApiActionPermissionItem(){
  KalturaApiActionPermissionItem.super_.call(this);
  this.service = null;
  this.action = null;
};
module.exports.KalturaApiActionPermissionItem = KalturaApiActionPermissionItem;

util.inherits(KalturaApiActionPermissionItem, KalturaPermissionItem);


/**
 * @param  object  string    .
 * @param  parameter  string    .
 * @param  action  string    .
 */
function KalturaApiParameterPermissionItem(){
  KalturaApiParameterPermissionItem.super_.call(this);
  this.object = null;
  this.parameter = null;
  this.action = null;
};
module.exports.KalturaApiParameterPermissionItem = KalturaApiParameterPermissionItem;

util.inherits(KalturaApiParameterPermissionItem, KalturaPermissionItem);


/**
 * @param  feedDescription  string    feed description
 *  .
 * @param  feedLandingPage  string    feed landing page (i.e publisher website)
 *  .
 */
function KalturaGenericSyndicationFeed(){
  KalturaGenericSyndicationFeed.super_.call(this);
  this.feedDescription = null;
  this.feedLandingPage = null;
};
module.exports.KalturaGenericSyndicationFeed = KalturaGenericSyndicationFeed;

util.inherits(KalturaGenericSyndicationFeed, KalturaBaseSyndicationFeed);


/**
 * @param  xslt  string    .
 * @param  itemXpathsToExtend  array    This parameter determines which custom metadata fields of type related-entry should be
 *  expanded to contain the kaltura MRSS feed of the related entry. Related-entry fields not
 *  included in this list will contain only the related entry id.
 *  This property contains a list xPaths in the Kaltura MRSS.
 *  .
 */
function KalturaGenericXsltSyndicationFeed(){
  KalturaGenericXsltSyndicationFeed.super_.call(this);
  this.xslt = null;
  this.itemXpathsToExtend = null;
};
module.exports.KalturaGenericXsltSyndicationFeed = KalturaGenericXsltSyndicationFeed;

util.inherits(KalturaGenericXsltSyndicationFeed, KalturaGenericSyndicationFeed);


/**
 * @param  adultContent  string    .
 */
function KalturaGoogleVideoSyndicationFeed(){
  KalturaGoogleVideoSyndicationFeed.super_.call(this);
  this.adultContent = null;
};
module.exports.KalturaGoogleVideoSyndicationFeed = KalturaGoogleVideoSyndicationFeed;

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
function KalturaITunesSyndicationFeed(){
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
module.exports.KalturaITunesSyndicationFeed = KalturaITunesSyndicationFeed;

util.inherits(KalturaITunesSyndicationFeed, KalturaBaseSyndicationFeed);


/**
 * @param  category  string     (readOnly).
 */
function KalturaTubeMogulSyndicationFeed(){
  KalturaTubeMogulSyndicationFeed.super_.call(this);
  this.category = null;
};
module.exports.KalturaTubeMogulSyndicationFeed = KalturaTubeMogulSyndicationFeed;

util.inherits(KalturaTubeMogulSyndicationFeed, KalturaBaseSyndicationFeed);


/**
 * @param  category  string     (readOnly).
 * @param  adultContent  string    .
 * @param  feedDescription  string    feed description
 *  .
 * @param  feedLandingPage  string    feed landing page (i.e publisher website)
 *  .
 */
function KalturaYahooSyndicationFeed(){
  KalturaYahooSyndicationFeed.super_.call(this);
  this.category = null;
  this.adultContent = null;
  this.feedDescription = null;
  this.feedLandingPage = null;
};
module.exports.KalturaYahooSyndicationFeed = KalturaYahooSyndicationFeed;

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
function KalturaMailJob(){
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
module.exports.KalturaMailJob = KalturaMailJob;

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
function KalturaProvisionJobData(){
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
module.exports.KalturaProvisionJobData = KalturaProvisionJobData;

util.inherits(KalturaProvisionJobData, KalturaJobData);


/**
 * @param  wsdlUsername  string    .
 * @param  wsdlPassword  string    .
 * @param  cpcode  string    .
 * @param  emailId  string    .
 * @param  primaryContact  string    .
 * @param  secondaryContact  string    .
 */
function KalturaAkamaiProvisionJobData(){
  KalturaAkamaiProvisionJobData.super_.call(this);
  this.wsdlUsername = null;
  this.wsdlPassword = null;
  this.cpcode = null;
  this.emailId = null;
  this.primaryContact = null;
  this.secondaryContact = null;
};
module.exports.KalturaAkamaiProvisionJobData = KalturaAkamaiProvisionJobData;

util.inherits(KalturaAkamaiProvisionJobData, KalturaProvisionJobData);


/**
 * @param  entryIds  string    Comma separated list of entry ids
 *  .
 * @param  flavorParamsId  int    Flavor params id to use for conversion
 *  .
 * @param  puserId  string    The id of the requesting user
 *  .
 */
function KalturaBulkDownloadJobData(){
  KalturaBulkDownloadJobData.super_.call(this);
  this.entryIds = null;
  this.flavorParamsId = null;
  this.puserId = null;
};
module.exports.KalturaBulkDownloadJobData = KalturaBulkDownloadJobData;

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
function KalturaBulkUploadJobData(){
  KalturaBulkUploadJobData.super_.call(this);
  this.userId = null;
  this.uploadedBy = null;
  this.conversionProfileId = null;
  this.resultsFileLocalPath = null;
  this.resultsFileUrl = null;
  this.numOfEntries = null;
  this.filePath = null;
};
module.exports.KalturaBulkUploadJobData = KalturaBulkUploadJobData;

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
function KalturaCaptureThumbJobData(){
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
module.exports.KalturaCaptureThumbJobData = KalturaCaptureThumbJobData;

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
function KalturaConvartableJobData(){
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
module.exports.KalturaConvartableJobData = KalturaConvartableJobData;

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
function KalturaConvertCollectionJobData(){
  KalturaConvertCollectionJobData.super_.call(this);
  this.destDirLocalPath = null;
  this.destDirRemoteUrl = null;
  this.destFileName = null;
  this.inputXmlLocalPath = null;
  this.inputXmlRemoteUrl = null;
  this.commandLinesStr = null;
  this.flavors = null;
};
module.exports.KalturaConvertCollectionJobData = KalturaConvertCollectionJobData;

util.inherits(KalturaConvertCollectionJobData, KalturaConvartableJobData);


/**
 * @param  destFileSyncLocalPath  string    .
 * @param  destFileSyncRemoteUrl  string    .
 * @param  logFileSyncLocalPath  string    .
 * @param  flavorAssetId  string    .
 * @param  remoteMediaId  string    .
 */
function KalturaConvertJobData(){
  KalturaConvertJobData.super_.call(this);
  this.destFileSyncLocalPath = null;
  this.destFileSyncRemoteUrl = null;
  this.logFileSyncLocalPath = null;
  this.flavorAssetId = null;
  this.remoteMediaId = null;
};
module.exports.KalturaConvertJobData = KalturaConvertJobData;

util.inherits(KalturaConvertJobData, KalturaConvartableJobData);


/**
 * @param  inputFileSyncLocalPath  string    .
 * @param  thumbHeight  int    The height of last created thumbnail, will be used to comapare if this thumbnail is the best we can have
 *  .
 * @param  thumbBitrate  int    The bit rate of last created thumbnail, will be used to comapare if this thumbnail is the best we can have
 *  .
 */
function KalturaConvertProfileJobData(){
  KalturaConvertProfileJobData.super_.call(this);
  this.inputFileSyncLocalPath = null;
  this.thumbHeight = null;
  this.thumbBitrate = null;
};
module.exports.KalturaConvertProfileJobData = KalturaConvertProfileJobData;

util.inherits(KalturaConvertProfileJobData, KalturaJobData);


/**
 * @param  flavorAssetId  string    .
 */
function KalturaExtractMediaJobData(){
  KalturaExtractMediaJobData.super_.call(this);
  this.flavorAssetId = null;
};
module.exports.KalturaExtractMediaJobData = KalturaExtractMediaJobData;

util.inherits(KalturaExtractMediaJobData, KalturaConvartableJobData);


/**
 */
function KalturaFlattenJobData(){
  KalturaFlattenJobData.super_.call(this);
};
module.exports.KalturaFlattenJobData = KalturaFlattenJobData;

util.inherits(KalturaFlattenJobData, KalturaJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileLocalPath  string    .
 * @param  flavorAssetId  string    .
 */
function KalturaImportJobData(){
  KalturaImportJobData.super_.call(this);
  this.srcFileUrl = null;
  this.destFileLocalPath = null;
  this.flavorAssetId = null;
};
module.exports.KalturaImportJobData = KalturaImportJobData;

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
function KalturaMailJobData(){
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
module.exports.KalturaMailJobData = KalturaMailJobData;

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
function KalturaNotificationJobData(){
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
module.exports.KalturaNotificationJobData = KalturaNotificationJobData;

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
function KalturaPostConvertJobData(){
  KalturaPostConvertJobData.super_.call(this);
  this.flavorAssetId = null;
  this.createThumb = null;
  this.thumbPath = null;
  this.thumbOffset = null;
  this.thumbHeight = null;
  this.thumbBitrate = null;
};
module.exports.KalturaPostConvertJobData = KalturaPostConvertJobData;

util.inherits(KalturaPostConvertJobData, KalturaConvartableJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileLocalPath  string    .
 */
function KalturaPullJobData(){
  KalturaPullJobData.super_.call(this);
  this.srcFileUrl = null;
  this.destFileLocalPath = null;
};
module.exports.KalturaPullJobData = KalturaPullJobData;

util.inherits(KalturaPullJobData, KalturaJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileUrl  string    Should be set by the API
 *  .
 */
function KalturaRemoteConvertJobData(){
  KalturaRemoteConvertJobData.super_.call(this);
  this.srcFileUrl = null;
  this.destFileUrl = null;
};
module.exports.KalturaRemoteConvertJobData = KalturaRemoteConvertJobData;

util.inherits(KalturaRemoteConvertJobData, KalturaConvartableJobData);


/**
 * @param  privateKey  string    .
 * @param  publicKey  string    .
 * @param  passPhrase  string    .
 */
function KalturaSshImportJobData(){
  KalturaSshImportJobData.super_.call(this);
  this.privateKey = null;
  this.publicKey = null;
  this.passPhrase = null;
};
module.exports.KalturaSshImportJobData = KalturaSshImportJobData;

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
function KalturaStorageJobData(){
  KalturaStorageJobData.super_.call(this);
  this.serverUrl = null;
  this.serverUsername = null;
  this.serverPassword = null;
  this.ftpPassiveMode = null;
  this.srcFileSyncLocalPath = null;
  this.srcFileSyncId = null;
  this.destFileSyncStoredPath = null;
};
module.exports.KalturaStorageJobData = KalturaStorageJobData;

util.inherits(KalturaStorageJobData, KalturaJobData);


/**
 */
function KalturaStorageDeleteJobData(){
  KalturaStorageDeleteJobData.super_.call(this);
};
module.exports.KalturaStorageDeleteJobData = KalturaStorageDeleteJobData;

util.inherits(KalturaStorageDeleteJobData, KalturaStorageJobData);


/**
 * @param  force  bool    .
 */
function KalturaStorageExportJobData(){
  KalturaStorageExportJobData.super_.call(this);
  this.force = null;
};
module.exports.KalturaStorageExportJobData = KalturaStorageExportJobData;

util.inherits(KalturaStorageExportJobData, KalturaStorageJobData);


/**
 * @param  csvVersion  int    The version of the csv file
 *  .
 */
function KalturaBulkUploadCsvJobData(){
  KalturaBulkUploadCsvJobData.super_.call(this);
  this.csvVersion = null;
};
module.exports.KalturaBulkUploadCsvJobData = KalturaBulkUploadCsvJobData;

util.inherits(KalturaBulkUploadCsvJobData, KalturaBulkUploadJobData);


/**
 */
function KalturaBulkUploadXmlJobData(){
  KalturaBulkUploadXmlJobData.super_.call(this);
};
module.exports.KalturaBulkUploadXmlJobData = KalturaBulkUploadXmlJobData;

util.inherits(KalturaBulkUploadXmlJobData, KalturaBulkUploadJobData);


/**
 * @param  captionAssetId  string    .
 */
function KalturaParseCaptionAssetJobData(){
  KalturaParseCaptionAssetJobData.super_.call(this);
  this.captionAssetId = null;
};
module.exports.KalturaParseCaptionAssetJobData = KalturaParseCaptionAssetJobData;

util.inherits(KalturaParseCaptionAssetJobData, KalturaJobData);


/**
 */
function KalturaDistributionJobProviderData(){
  KalturaDistributionJobProviderData.super_.call(this);
};
module.exports.KalturaDistributionJobProviderData = KalturaDistributionJobProviderData;

util.inherits(KalturaDistributionJobProviderData, kcb.KalturaObjectBase);


/**
 * @param  version  string    .
 * @param  assetId  string    .
 * @param  remoteId  string    .
 */
function KalturaDistributionRemoteMediaFile(){
  KalturaDistributionRemoteMediaFile.super_.call(this);
  this.version = null;
  this.assetId = null;
  this.remoteId = null;
};
module.exports.KalturaDistributionRemoteMediaFile = KalturaDistributionRemoteMediaFile;

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
function KalturaDistributionJobData(){
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
module.exports.KalturaDistributionJobData = KalturaDistributionJobData;

util.inherits(KalturaDistributionJobData, KalturaJobData);


/**
 */
function KalturaDistributionDeleteJobData(){
  KalturaDistributionDeleteJobData.super_.call(this);
};
module.exports.KalturaDistributionDeleteJobData = KalturaDistributionDeleteJobData;

util.inherits(KalturaDistributionDeleteJobData, KalturaDistributionJobData);


/**
 */
function KalturaDistributionUpdateJobData(){
  KalturaDistributionUpdateJobData.super_.call(this);
};
module.exports.KalturaDistributionUpdateJobData = KalturaDistributionUpdateJobData;

util.inherits(KalturaDistributionUpdateJobData, KalturaDistributionJobData);


/**
 */
function KalturaDistributionDisableJobData(){
  KalturaDistributionDisableJobData.super_.call(this);
};
module.exports.KalturaDistributionDisableJobData = KalturaDistributionDisableJobData;

util.inherits(KalturaDistributionDisableJobData, KalturaDistributionUpdateJobData);


/**
 */
function KalturaDistributionEnableJobData(){
  KalturaDistributionEnableJobData.super_.call(this);
};
module.exports.KalturaDistributionEnableJobData = KalturaDistributionEnableJobData;

util.inherits(KalturaDistributionEnableJobData, KalturaDistributionUpdateJobData);


/**
 * @param  plays  int    .
 * @param  views  int    .
 */
function KalturaDistributionFetchReportJobData(){
  KalturaDistributionFetchReportJobData.super_.call(this);
  this.plays = null;
  this.views = null;
};
module.exports.KalturaDistributionFetchReportJobData = KalturaDistributionFetchReportJobData;

util.inherits(KalturaDistributionFetchReportJobData, KalturaDistributionJobData);


/**
 */
function KalturaDistributionSubmitJobData(){
  KalturaDistributionSubmitJobData.super_.call(this);
};
module.exports.KalturaDistributionSubmitJobData = KalturaDistributionSubmitJobData;

util.inherits(KalturaDistributionSubmitJobData, KalturaDistributionJobData);


/**
 * @param  dropFolderFileId  int    .
 */
function KalturaDropFolderImportJobData(){
  KalturaDropFolderImportJobData.super_.call(this);
  this.dropFolderFileId = null;
};
module.exports.KalturaDropFolderImportJobData = KalturaDropFolderImportJobData;

util.inherits(KalturaDropFolderImportJobData, KalturaSshImportJobData);


/**
 * @param  srcFileUrl  string    .
 * @param  destFileLocalPath  string    .
 * @param  metadataId  int    .
 */
function KalturaImportMetadataJobData(){
  KalturaImportMetadataJobData.super_.call(this);
  this.srcFileUrl = null;
  this.destFileLocalPath = null;
  this.metadataId = null;
};
module.exports.KalturaImportMetadataJobData = KalturaImportMetadataJobData;

util.inherits(KalturaImportMetadataJobData, KalturaJobData);


/**
 * @param  srcXslPath  string    .
 * @param  srcVersion  int    .
 * @param  destVersion  int    .
 * @param  destXsdPath  string    .
 * @param  metadataProfileId  int    .
 */
function KalturaTransformMetadataJobData(){
  KalturaTransformMetadataJobData.super_.call(this);
  this.srcXslPath = null;
  this.srcVersion = null;
  this.destVersion = null;
  this.destXsdPath = null;
  this.metadataProfileId = null;
};
module.exports.KalturaTransformMetadataJobData = KalturaTransformMetadataJobData;

util.inherits(KalturaTransformMetadataJobData, KalturaJobData);


/**
 * @param  sourceUrl  string    .
 * @param  filesyncId  string    .
 * @param  tmpFilePath  string    .
 * @param  destFilePath  string    .
 */
function KalturaFileSyncImportJobData(){
  KalturaFileSyncImportJobData.super_.call(this);
  this.sourceUrl = null;
  this.filesyncId = null;
  this.tmpFilePath = null;
  this.destFilePath = null;
};
module.exports.KalturaFileSyncImportJobData = KalturaFileSyncImportJobData;

util.inherits(KalturaFileSyncImportJobData, KalturaJobData);


/**
 * @param  srcFilePath  string    .
 * @param  flavorAssetId  string    .
 * @param  scanResult  int    .
 * @param  virusFoundAction  int    .
 */
function KalturaVirusScanJobData(){
  KalturaVirusScanJobData.super_.call(this);
  this.srcFilePath = null;
  this.flavorAssetId = null;
  this.scanResult = null;
  this.virusFoundAction = null;
};
module.exports.KalturaVirusScanJobData = KalturaVirusScanJobData;

util.inherits(KalturaVirusScanJobData, KalturaJobData);


/**
 * @param  descriptor  string    .
 * @param  oldValue  string    .
 * @param  newValue  string    .
 */
function KalturaAuditTrailChangeItem(){
  KalturaAuditTrailChangeItem.super_.call(this);
  this.descriptor = null;
  this.oldValue = null;
  this.newValue = null;
};
module.exports.KalturaAuditTrailChangeItem = KalturaAuditTrailChangeItem;

util.inherits(KalturaAuditTrailChangeItem, kcb.KalturaObjectBase);


/**
 * @param  changedItems  array    .
 */
function KalturaAuditTrailChangeInfo(){
  KalturaAuditTrailChangeInfo.super_.call(this);
  this.changedItems = null;
};
module.exports.KalturaAuditTrailChangeInfo = KalturaAuditTrailChangeInfo;

util.inherits(KalturaAuditTrailChangeInfo, KalturaAuditTrailInfo);


/**
 * @param  version  string    .
 * @param  objectSubType  int    .
 * @param  dc  int    .
 * @param  original  bool    .
 * @param  fileType  int    .
 */
function KalturaAuditTrailFileSyncCreateInfo(){
  KalturaAuditTrailFileSyncCreateInfo.super_.call(this);
  this.version = null;
  this.objectSubType = null;
  this.dc = null;
  this.original = null;
  this.fileType = null;
};
module.exports.KalturaAuditTrailFileSyncCreateInfo = KalturaAuditTrailFileSyncCreateInfo;

util.inherits(KalturaAuditTrailFileSyncCreateInfo, KalturaAuditTrailInfo);


/**
 * @param  info  string    .
 */
function KalturaAuditTrailTextInfo(){
  KalturaAuditTrailTextInfo.super_.call(this);
  this.info = null;
};
module.exports.KalturaAuditTrailTextInfo = KalturaAuditTrailTextInfo;

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
function KalturaDistributionFieldConfig(){
  KalturaDistributionFieldConfig.super_.call(this);
  this.fieldName = null;
  this.userFriendlyFieldName = null;
  this.entryMrssXslt = null;
  this.isRequired = null;
  this.updateOnChange = null;
  this.updateParams = null;
  this.isDefault = null;
};
module.exports.KalturaDistributionFieldConfig = KalturaDistributionFieldConfig;

util.inherits(KalturaDistributionFieldConfig, kcb.KalturaObjectBase);


/**
 * @param  fieldConfigArray  array    .
 * @param  itemXpathsToExtend  array    .
 */
function KalturaConfigurableDistributionProfile(){
  KalturaConfigurableDistributionProfile.super_.call(this);
  this.fieldConfigArray = null;
  this.itemXpathsToExtend = null;
};
module.exports.KalturaConfigurableDistributionProfile = KalturaConfigurableDistributionProfile;

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
function KalturaGenericDistributionProfileAction(){
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
module.exports.KalturaGenericDistributionProfileAction = KalturaGenericDistributionProfileAction;

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
function KalturaGenericDistributionProfile(){
  KalturaGenericDistributionProfile.super_.call(this);
  this.genericProviderId = null;
  this.submitAction = null;
  this.updateAction = null;
  this.deleteAction = null;
  this.fetchReportAction = null;
  this.updateRequiredEntryFields = null;
  this.updateRequiredMetadataXPaths = null;
};
module.exports.KalturaGenericDistributionProfile = KalturaGenericDistributionProfile;

util.inherits(KalturaGenericDistributionProfile, KalturaDistributionProfile);


/**
 * @param  xsl  string    .
 * @param  feedId  string     (readOnly).
 */
function KalturaSyndicationDistributionProfile(){
  KalturaSyndicationDistributionProfile.super_.call(this);
  this.xsl = null;
  this.feedId = null;
};
module.exports.KalturaSyndicationDistributionProfile = KalturaSyndicationDistributionProfile;

util.inherits(KalturaSyndicationDistributionProfile, KalturaDistributionProfile);


/**
 * @param  feedUrl  string     (readOnly).
 * @param  feedTitle  string    .
 */
function KalturaAvnDistributionProfile(){
  KalturaAvnDistributionProfile.super_.call(this);
  this.feedUrl = null;
  this.feedTitle = null;
};
module.exports.KalturaAvnDistributionProfile = KalturaAvnDistributionProfile;

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
function KalturaComcastMrssDistributionProfile(){
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
module.exports.KalturaComcastMrssDistributionProfile = KalturaComcastMrssDistributionProfile;

util.inherits(KalturaComcastMrssDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  user  string    .
 * @param  password  string    .
 */
function KalturaDailymotionDistributionProfile(){
  KalturaDailymotionDistributionProfile.super_.call(this);
  this.user = null;
  this.password = null;
};
module.exports.KalturaDailymotionDistributionProfile = KalturaDailymotionDistributionProfile;

util.inherits(KalturaDailymotionDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  channelTitle  string    .
 * @param  channelLink  string    .
 * @param  channelDescription  string    .
 * @param  feedUrl  string     (readOnly).
 * @param  cuePointsProvider  string    .
 * @param  itemsPerPage  string    .
 */
function KalturaDoubleClickDistributionProfile(){
  KalturaDoubleClickDistributionProfile.super_.call(this);
  this.channelTitle = null;
  this.channelLink = null;
  this.channelDescription = null;
  this.feedUrl = null;
  this.cuePointsProvider = null;
  this.itemsPerPage = null;
};
module.exports.KalturaDoubleClickDistributionProfile = KalturaDoubleClickDistributionProfile;

util.inherits(KalturaDoubleClickDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  username  string    .
 * @param  password  string    .
 * @param  accountId  string    .
 */
function KalturaExampleDistributionProfile(){
  KalturaExampleDistributionProfile.super_.call(this);
  this.username = null;
  this.password = null;
  this.accountId = null;
};
module.exports.KalturaExampleDistributionProfile = KalturaExampleDistributionProfile;

util.inherits(KalturaExampleDistributionProfile, KalturaDistributionProfile);


/**
 * @param  apikey  string    .
 * @param  email  string    .
 * @param  sftpPass  string    .
 * @param  sftpLogin  string    .
 * @param  accountId  string    .
 * @param  metadataProfileId  int    .
 */
function KalturaFreewheelDistributionProfile(){
  KalturaFreewheelDistributionProfile.super_.call(this);
  this.apikey = null;
  this.email = null;
  this.sftpPass = null;
  this.sftpLogin = null;
  this.accountId = null;
  this.metadataProfileId = null;
};
module.exports.KalturaFreewheelDistributionProfile = KalturaFreewheelDistributionProfile;

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
function KalturaFreewheelGenericDistributionProfile(){
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
module.exports.KalturaFreewheelGenericDistributionProfile = KalturaFreewheelGenericDistributionProfile;

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
function KalturaHuluDistributionProfile(){
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
module.exports.KalturaHuluDistributionProfile = KalturaHuluDistributionProfile;

util.inherits(KalturaHuluDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  ftpPath  string    .
 * @param  username  string    .
 * @param  password  string    .
 * @param  domain  string    .
 */
function KalturaIdeticDistributionProfile(){
  KalturaIdeticDistributionProfile.super_.call(this);
  this.ftpPath = null;
  this.username = null;
  this.password = null;
  this.domain = null;
};
module.exports.KalturaIdeticDistributionProfile = KalturaIdeticDistributionProfile;

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
function KalturaNdnDistributionProfile(){
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
module.exports.KalturaNdnDistributionProfile = KalturaNdnDistributionProfile;

util.inherits(KalturaNdnDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  xsl  string    .
 * @param  feedId  string     (readOnly).
 * @param  metadataProfileId  int    .
 */
function KalturaPodcastDistributionProfile(){
  KalturaPodcastDistributionProfile.super_.call(this);
  this.xsl = null;
  this.feedId = null;
  this.metadataProfileId = null;
};
module.exports.KalturaPodcastDistributionProfile = KalturaPodcastDistributionProfile;

util.inherits(KalturaPodcastDistributionProfile, KalturaDistributionProfile);


/**
 * @param  feedUrl  string     (readOnly).
 * @param  feedTitle  string    .
 * @param  feedSubtitle  string    .
 * @param  feedLink  string    .
 * @param  feedAuthorName  string    .
 */
function KalturaSynacorHboDistributionProfile(){
  KalturaSynacorHboDistributionProfile.super_.call(this);
  this.feedUrl = null;
  this.feedTitle = null;
  this.feedSubtitle = null;
  this.feedLink = null;
  this.feedAuthorName = null;
};
module.exports.KalturaSynacorHboDistributionProfile = KalturaSynacorHboDistributionProfile;

util.inherits(KalturaSynacorHboDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  feedUrl  string     (readOnly).
 */
function KalturaTimeWarnerDistributionProfile(){
  KalturaTimeWarnerDistributionProfile.super_.call(this);
  this.feedUrl = null;
};
module.exports.KalturaTimeWarnerDistributionProfile = KalturaTimeWarnerDistributionProfile;

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
function KalturaTVComDistributionProfile(){
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
module.exports.KalturaTVComDistributionProfile = KalturaTVComDistributionProfile;

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
function KalturaUverseDistributionProfile(){
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
module.exports.KalturaUverseDistributionProfile = KalturaUverseDistributionProfile;

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
function KalturaVerizonVcastDistributionProfile(){
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
module.exports.KalturaVerizonVcastDistributionProfile = KalturaVerizonVcastDistributionProfile;

util.inherits(KalturaVerizonVcastDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  ftpPath  string    .
 * @param  ftpUsername  string    .
 * @param  ftpPassword  string    .
 * @param  ftpHost  string    .
 * @param  contactTelephone  string    .
 * @param  contactEmail  string    .
 */
function KalturaYahooDistributionProfile(){
  KalturaYahooDistributionProfile.super_.call(this);
  this.ftpPath = null;
  this.ftpUsername = null;
  this.ftpPassword = null;
  this.ftpHost = null;
  this.contactTelephone = null;
  this.contactEmail = null;
};
module.exports.KalturaYahooDistributionProfile = KalturaYahooDistributionProfile;

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
function KalturaYouTubeDistributionProfile(){
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
module.exports.KalturaYouTubeDistributionProfile = KalturaYouTubeDistributionProfile;

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
function KalturaYoutubeApiDistributionProfile(){
  KalturaYoutubeApiDistributionProfile.super_.call(this);
  this.username = null;
  this.password = null;
  this.defaultCategory = null;
  this.allowComments = null;
  this.allowEmbedding = null;
  this.allowRatings = null;
  this.allowResponses = null;
};
module.exports.KalturaYoutubeApiDistributionProfile = KalturaYoutubeApiDistributionProfile;

util.inherits(KalturaYoutubeApiDistributionProfile, KalturaConfigurableDistributionProfile);


/**
 * @param  fieldName  string    .
 * @param  validationErrorType  int    .
 * @param  validationErrorParam  string    Parameter of the validation error
 *  For example, minimum value for KalturaDistributionValidationErrorType::STRING_TOO_SHORT validation error.
 */
function KalturaDistributionValidationErrorInvalidData(){
  KalturaDistributionValidationErrorInvalidData.super_.call(this);
  this.fieldName = null;
  this.validationErrorType = null;
  this.validationErrorParam = null;
};
module.exports.KalturaDistributionValidationErrorInvalidData = KalturaDistributionValidationErrorInvalidData;

util.inherits(KalturaDistributionValidationErrorInvalidData, KalturaDistributionValidationError);


/**
 * @param  metadataProfileId  int    .
 */
function KalturaDistributionValidationErrorInvalidMetadata(){
  KalturaDistributionValidationErrorInvalidMetadata.super_.call(this);
  this.metadataProfileId = null;
};
module.exports.KalturaDistributionValidationErrorInvalidMetadata = KalturaDistributionValidationErrorInvalidMetadata;

util.inherits(KalturaDistributionValidationErrorInvalidMetadata, KalturaDistributionValidationErrorInvalidData);


/**
 * @param  flavorParamsId  string    .
 */
function KalturaDistributionValidationErrorMissingFlavor(){
  KalturaDistributionValidationErrorMissingFlavor.super_.call(this);
  this.flavorParamsId = null;
};
module.exports.KalturaDistributionValidationErrorMissingFlavor = KalturaDistributionValidationErrorMissingFlavor;

util.inherits(KalturaDistributionValidationErrorMissingFlavor, KalturaDistributionValidationError);


/**
 * @param  fieldName  string    .
 */
function KalturaDistributionValidationErrorMissingMetadata(){
  KalturaDistributionValidationErrorMissingMetadata.super_.call(this);
  this.fieldName = null;
};
module.exports.KalturaDistributionValidationErrorMissingMetadata = KalturaDistributionValidationErrorMissingMetadata;

util.inherits(KalturaDistributionValidationErrorMissingMetadata, KalturaDistributionValidationError);


/**
 * @param  dimensions  KalturaDistributionThumbDimensions    .
 */
function KalturaDistributionValidationErrorMissingThumbnail(){
  KalturaDistributionValidationErrorMissingThumbnail.super_.call(this);
  this.dimensions = null;
};
module.exports.KalturaDistributionValidationErrorMissingThumbnail = KalturaDistributionValidationErrorMissingThumbnail;

util.inherits(KalturaDistributionValidationErrorMissingThumbnail, KalturaDistributionValidationError);


/**
 */
function KalturaSyndicationDistributionProvider(){
  KalturaSyndicationDistributionProvider.super_.call(this);
};
module.exports.KalturaSyndicationDistributionProvider = KalturaSyndicationDistributionProvider;

util.inherits(KalturaSyndicationDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaAvnDistributionProvider(){
  KalturaAvnDistributionProvider.super_.call(this);
};
module.exports.KalturaAvnDistributionProvider = KalturaAvnDistributionProvider;

util.inherits(KalturaAvnDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaComcastMrssDistributionProvider(){
  KalturaComcastMrssDistributionProvider.super_.call(this);
};
module.exports.KalturaComcastMrssDistributionProvider = KalturaComcastMrssDistributionProvider;

util.inherits(KalturaComcastMrssDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaDailymotionDistributionProvider(){
  KalturaDailymotionDistributionProvider.super_.call(this);
};
module.exports.KalturaDailymotionDistributionProvider = KalturaDailymotionDistributionProvider;

util.inherits(KalturaDailymotionDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaDoubleClickDistributionProvider(){
  KalturaDoubleClickDistributionProvider.super_.call(this);
};
module.exports.KalturaDoubleClickDistributionProvider = KalturaDoubleClickDistributionProvider;

util.inherits(KalturaDoubleClickDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaExampleDistributionProvider(){
  KalturaExampleDistributionProvider.super_.call(this);
};
module.exports.KalturaExampleDistributionProvider = KalturaExampleDistributionProvider;

util.inherits(KalturaExampleDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaFreewheelDistributionProvider(){
  KalturaFreewheelDistributionProvider.super_.call(this);
};
module.exports.KalturaFreewheelDistributionProvider = KalturaFreewheelDistributionProvider;

util.inherits(KalturaFreewheelDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaFreewheelGenericDistributionProvider(){
  KalturaFreewheelGenericDistributionProvider.super_.call(this);
};
module.exports.KalturaFreewheelGenericDistributionProvider = KalturaFreewheelGenericDistributionProvider;

util.inherits(KalturaFreewheelGenericDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaHuluDistributionProvider(){
  KalturaHuluDistributionProvider.super_.call(this);
};
module.exports.KalturaHuluDistributionProvider = KalturaHuluDistributionProvider;

util.inherits(KalturaHuluDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaIdeticDistributionProvider(){
  KalturaIdeticDistributionProvider.super_.call(this);
};
module.exports.KalturaIdeticDistributionProvider = KalturaIdeticDistributionProvider;

util.inherits(KalturaIdeticDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaNdnDistributionProvider(){
  KalturaNdnDistributionProvider.super_.call(this);
};
module.exports.KalturaNdnDistributionProvider = KalturaNdnDistributionProvider;

util.inherits(KalturaNdnDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaPodcastDistributionProvider(){
  KalturaPodcastDistributionProvider.super_.call(this);
};
module.exports.KalturaPodcastDistributionProvider = KalturaPodcastDistributionProvider;

util.inherits(KalturaPodcastDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaSynacorHboDistributionProvider(){
  KalturaSynacorHboDistributionProvider.super_.call(this);
};
module.exports.KalturaSynacorHboDistributionProvider = KalturaSynacorHboDistributionProvider;

util.inherits(KalturaSynacorHboDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaTimeWarnerDistributionProvider(){
  KalturaTimeWarnerDistributionProvider.super_.call(this);
};
module.exports.KalturaTimeWarnerDistributionProvider = KalturaTimeWarnerDistributionProvider;

util.inherits(KalturaTimeWarnerDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaTVComDistributionProvider(){
  KalturaTVComDistributionProvider.super_.call(this);
};
module.exports.KalturaTVComDistributionProvider = KalturaTVComDistributionProvider;

util.inherits(KalturaTVComDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaUverseDistributionProvider(){
  KalturaUverseDistributionProvider.super_.call(this);
};
module.exports.KalturaUverseDistributionProvider = KalturaUverseDistributionProvider;

util.inherits(KalturaUverseDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaVerizonVcastDistributionProvider(){
  KalturaVerizonVcastDistributionProvider.super_.call(this);
};
module.exports.KalturaVerizonVcastDistributionProvider = KalturaVerizonVcastDistributionProvider;

util.inherits(KalturaVerizonVcastDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaYahooDistributionProvider(){
  KalturaYahooDistributionProvider.super_.call(this);
};
module.exports.KalturaYahooDistributionProvider = KalturaYahooDistributionProvider;

util.inherits(KalturaYahooDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaYouTubeDistributionProvider(){
  KalturaYouTubeDistributionProvider.super_.call(this);
};
module.exports.KalturaYouTubeDistributionProvider = KalturaYouTubeDistributionProvider;

util.inherits(KalturaYouTubeDistributionProvider, KalturaDistributionProvider);


/**
 */
function KalturaYoutubeApiDistributionProvider(){
  KalturaYoutubeApiDistributionProvider.super_.call(this);
};
module.exports.KalturaYoutubeApiDistributionProvider = KalturaYoutubeApiDistributionProvider;

util.inherits(KalturaYoutubeApiDistributionProvider, KalturaDistributionProvider);


/**
 * @param  protocolType  string     (insertOnly).
 * @param  sourceUrl  string    .
 * @param  adType  string    .
 * @param  title  string    .
 * @param  endTime  int    .
 * @param  duration  int    Duration in milliseconds (readOnly).
 */
function KalturaAdCuePoint(){
  KalturaAdCuePoint.super_.call(this);
  this.protocolType = null;
  this.sourceUrl = null;
  this.adType = null;
  this.title = null;
  this.endTime = null;
  this.duration = null;
};
module.exports.KalturaAdCuePoint = KalturaAdCuePoint;

util.inherits(KalturaAdCuePoint, KalturaCuePoint);


/**
 * @param  parentId  string     (insertOnly).
 * @param  text  string    .
 * @param  endTime  int    End time in milliseconds.
 * @param  duration  int    Duration in milliseconds (readOnly).
 */
function KalturaAnnotation(){
  KalturaAnnotation.super_.call(this);
  this.parentId = null;
  this.text = null;
  this.endTime = null;
  this.duration = null;
};
module.exports.KalturaAnnotation = KalturaAnnotation;

util.inherits(KalturaAnnotation, KalturaCuePoint);


/**
 * @param  code  string    .
 * @param  description  string    .
 */
function KalturaCodeCuePoint(){
  KalturaCodeCuePoint.super_.call(this);
  this.code = null;
  this.description = null;
};
module.exports.KalturaCodeCuePoint = KalturaCodeCuePoint;

util.inherits(KalturaCodeCuePoint, KalturaCuePoint);


/**
 */
function KalturaDropFolderXmlBulkUploadFileHandlerConfig(){
  KalturaDropFolderXmlBulkUploadFileHandlerConfig.super_.call(this);
};
module.exports.KalturaDropFolderXmlBulkUploadFileHandlerConfig = KalturaDropFolderXmlBulkUploadFileHandlerConfig;

util.inherits(KalturaDropFolderXmlBulkUploadFileHandlerConfig, KalturaDropFolderFileHandlerConfig);


/**
 * @param  contentMatchPolicy  int    .
 * @param  slugRegex  string    Regular expression that defines valid file names to be handled.
 *  The following might be extracted from the file name and used if defined:
 *  - (?P<referenceId>\w+) - will be used as the drop folder file's parsed slug.
 *  - (?P<flavorName>\w+)  - will be used as the drop folder file's parsed flavor.
 *  .
 */
function KalturaDropFolderContentFileHandlerConfig(){
  KalturaDropFolderContentFileHandlerConfig.super_.call(this);
  this.contentMatchPolicy = null;
  this.slugRegex = null;
};
module.exports.KalturaDropFolderContentFileHandlerConfig = KalturaDropFolderContentFileHandlerConfig;

util.inherits(KalturaDropFolderContentFileHandlerConfig, KalturaDropFolderFileHandlerConfig);


/**
 */
function KalturaRemoteDropFolder(){
  KalturaRemoteDropFolder.super_.call(this);
};
module.exports.KalturaRemoteDropFolder = KalturaRemoteDropFolder;

util.inherits(KalturaRemoteDropFolder, KalturaDropFolder);


/**
 * @param  host  string    .
 * @param  port  int    .
 * @param  username  string    .
 * @param  password  string    .
 */
function KalturaFtpDropFolder(){
  KalturaFtpDropFolder.super_.call(this);
  this.host = null;
  this.port = null;
  this.username = null;
  this.password = null;
};
module.exports.KalturaFtpDropFolder = KalturaFtpDropFolder;

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
function KalturaSshDropFolder(){
  KalturaSshDropFolder.super_.call(this);
  this.host = null;
  this.port = null;
  this.username = null;
  this.password = null;
  this.privateKey = null;
  this.publicKey = null;
  this.passPhrase = null;
};
module.exports.KalturaSshDropFolder = KalturaSshDropFolder;

util.inherits(KalturaSshDropFolder, KalturaRemoteDropFolder);


/**
 */
function KalturaScpDropFolder(){
  KalturaScpDropFolder.super_.call(this);
};
module.exports.KalturaScpDropFolder = KalturaScpDropFolder;

util.inherits(KalturaScpDropFolder, KalturaSshDropFolder);


/**
 */
function KalturaSftpDropFolder(){
  KalturaSftpDropFolder.super_.call(this);
};
module.exports.KalturaSftpDropFolder = KalturaSftpDropFolder;

util.inherits(KalturaSftpDropFolder, KalturaSshDropFolder);


