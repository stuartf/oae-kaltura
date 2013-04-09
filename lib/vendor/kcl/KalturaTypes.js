
var KalturaAccessControlOrderBy = module.exports.KalturaAccessControlOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaAdCuePointOrderBy = module.exports.KalturaAdCuePointOrderBy = {
END_TIME_ASC : "+endTime",
END_TIME_DESC : "-endTime",
DURATION_ASC : "+duration",
DURATION_DESC : "-duration",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
START_TIME_ASC : "+startTime",
START_TIME_DESC : "-startTime",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaAdProtocolType = module.exports.KalturaAdProtocolType = {
CUSTOM : "0",
VAST : "1",
VAST_2_0 : "2",
VPAID : "3",
};

var KalturaAdType = module.exports.KalturaAdType = {
VIDEO : "1",
OVERLAY : "2",
};

var KalturaAdminUserOrderBy = module.exports.KalturaAdminUserOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaAnnotationOrderBy = module.exports.KalturaAnnotationOrderBy = {
END_TIME_ASC : "+endTime",
END_TIME_DESC : "-endTime",
DURATION_ASC : "+duration",
DURATION_DESC : "-duration",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
START_TIME_ASC : "+startTime",
START_TIME_DESC : "-startTime",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaApiActionPermissionItemOrderBy = module.exports.KalturaApiActionPermissionItemOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaApiParameterPermissionItemAction = module.exports.KalturaApiParameterPermissionItemAction = {
READ : "read",
UPDATE : "update",
INSERT : "insert",
USEAGE : "all",
};

var KalturaApiParameterPermissionItemOrderBy = module.exports.KalturaApiParameterPermissionItemOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaAssetOrderBy = module.exports.KalturaAssetOrderBy = {
SIZE_ASC : "+size",
SIZE_DESC : "-size",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
DELETED_AT_ASC : "+deletedAt",
DELETED_AT_DESC : "-deletedAt",
};

var KalturaAssetParamsOrderBy = module.exports.KalturaAssetParamsOrderBy = {
};

var KalturaAssetParamsOrigin = module.exports.KalturaAssetParamsOrigin = {
CONVERT : 0,
INGEST : 1,
CONVERT_WHEN_MISSING : 2,
};

var KalturaAssetParamsOutputOrderBy = module.exports.KalturaAssetParamsOutputOrderBy = {
};

var KalturaAssetStatus = module.exports.KalturaAssetStatus = {
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
};

var KalturaAssetType = module.exports.KalturaAssetType = {
FLAVOR : "1",
THUMBNAIL : "2",
DOCUMENT : "document.Document",
SWF : "document.SWF",
PDF : "document.PDF",
CAPTION : "caption.Caption",
ATTACHMENT : "attachment.Attachment",
};

var KalturaAttachmentAssetOrderBy = module.exports.KalturaAttachmentAssetOrderBy = {
SIZE_ASC : "+size",
SIZE_DESC : "-size",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
DELETED_AT_ASC : "+deletedAt",
DELETED_AT_DESC : "-deletedAt",
};

var KalturaAttachmentAssetStatus = module.exports.KalturaAttachmentAssetStatus = {
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
};

var KalturaAttachmentType = module.exports.KalturaAttachmentType = {
TEXT : "1",
MEDIA : "2",
DOCUMENT : "3",
};

var KalturaAudioCodec = module.exports.KalturaAudioCodec = {
NONE : "",
MP3 : "mp3",
AAC : "aac",
VORBIS : "vorbis",
WMA : "wma",
WMAPRO : "wmapro",
AMRNB : "amrnb",
MPEG2 : "mpeg2",
COPY : "copy",
};

var KalturaAuditTrailAction = module.exports.KalturaAuditTrailAction = {
CREATED : "CREATED",
COPIED : "COPIED",
CHANGED : "CHANGED",
DELETED : "DELETED",
VIEWED : "VIEWED",
CONTENT_VIEWED : "CONTENT_VIEWED",
FILE_SYNC_CREATED : "FILE_SYNC_CREATED",
RELATION_ADDED : "RELATION_ADDED",
RELATION_REMOVED : "RELATION_REMOVED",
};

var KalturaAuditTrailContext = module.exports.KalturaAuditTrailContext = {
CLIENT : -1,
SCRIPT : 0,
PS2 : 1,
API_V3 : 2,
};

var KalturaAuditTrailFileSyncType = module.exports.KalturaAuditTrailFileSyncType = {
FILE : 1,
LINK : 2,
URL : 3,
};

var KalturaAuditTrailObjectType = module.exports.KalturaAuditTrailObjectType = {
ACCESS_CONTROL : "accessControl",
ADMIN_KUSER : "adminKuser",
BATCH_JOB : "BatchJob",
CATEGORY : "category",
CONVERSION_PROFILE_2 : "conversionProfile2",
EMAIL_INGESTION_PROFILE : "EmailIngestionProfile",
ENTRY : "entry",
FILE_SYNC : "FileSync",
FLAVOR_ASSET : "flavorAsset",
THUMBNAIL_ASSET : "thumbAsset",
FLAVOR_PARAMS : "flavorParams",
THUMBNAIL_PARAMS : "thumbParams",
FLAVOR_PARAMS_CONVERSION_PROFILE : "flavorParamsConversionProfile",
FLAVOR_PARAMS_OUTPUT : "flavorParamsOutput",
THUMBNAIL_PARAMS_OUTPUT : "thumbParamsOutput",
KSHOW : "kshow",
KSHOW_KUSER : "KshowKuser",
KUSER : "kuser",
MEDIA_INFO : "mediaInfo",
MODERATION : "moderation",
PARTNER : "Partner",
ROUGHCUT : "roughcutEntry",
SYNDICATION : "syndicationFeed",
UI_CONF : "uiConf",
UPLOAD_TOKEN : "UploadToken",
WIDGET : "widget",
METADATA : "Metadata",
METADATA_PROFILE : "MetadataProfile",
USER_LOGIN_DATA : "UserLoginData",
USER_ROLE : "UserRole",
PERMISSION : "Permission",
};

var KalturaAuditTrailOrderBy = module.exports.KalturaAuditTrailOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
PARSED_AT_ASC : "+parsedAt",
PARSED_AT_DESC : "-parsedAt",
};

var KalturaAuditTrailStatus = module.exports.KalturaAuditTrailStatus = {
PENDING : 1,
READY : 2,
FAILED : 3,
};

var KalturaAvnDistributionProfileOrderBy = module.exports.KalturaAvnDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaAvnDistributionProviderOrderBy = module.exports.KalturaAvnDistributionProviderOrderBy = {
};

var KalturaBaseEntryOrderBy = module.exports.KalturaBaseEntryOrderBy = {
NAME_ASC : "+name",
NAME_DESC : "-name",
MODERATION_COUNT_ASC : "+moderationCount",
MODERATION_COUNT_DESC : "-moderationCount",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
RANK_ASC : "+rank",
RANK_DESC : "-rank",
START_DATE_ASC : "+startDate",
START_DATE_DESC : "-startDate",
END_DATE_ASC : "+endDate",
END_DATE_DESC : "-endDate",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaBaseJobOrderBy = module.exports.KalturaBaseJobOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
PROCESSOR_EXPIRATION_ASC : "+processorExpiration",
PROCESSOR_EXPIRATION_DESC : "-processorExpiration",
EXECUTION_ATTEMPTS_ASC : "+executionAttempts",
EXECUTION_ATTEMPTS_DESC : "-executionAttempts",
LOCK_VERSION_ASC : "+lockVersion",
LOCK_VERSION_DESC : "-lockVersion",
};

var KalturaBaseSyndicationFeedOrderBy = module.exports.KalturaBaseSyndicationFeedOrderBy = {
PLAYLIST_ID_ASC : "+playlistId",
PLAYLIST_ID_DESC : "-playlistId",
NAME_ASC : "+name",
NAME_DESC : "-name",
TYPE_ASC : "+type",
TYPE_DESC : "-type",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaBatchJobErrorTypes = module.exports.KalturaBatchJobErrorTypes = {
APP : 0,
RUNTIME : 1,
HTTP : 2,
CURL : 3,
KALTURA_API : 4,
KALTURA_CLIENT : 5,
};

var KalturaBatchJobOrderBy = module.exports.KalturaBatchJobOrderBy = {
STATUS_ASC : "+status",
STATUS_DESC : "-status",
CHECK_AGAIN_TIMEOUT_ASC : "+checkAgainTimeout",
CHECK_AGAIN_TIMEOUT_DESC : "-checkAgainTimeout",
PROGRESS_ASC : "+progress",
PROGRESS_DESC : "-progress",
UPDATES_COUNT_ASC : "+updatesCount",
UPDATES_COUNT_DESC : "-updatesCount",
PRIORITY_ASC : "+priority",
PRIORITY_DESC : "-priority",
QUEUE_TIME_ASC : "+queueTime",
QUEUE_TIME_DESC : "-queueTime",
FINISH_TIME_ASC : "+finishTime",
FINISH_TIME_DESC : "-finishTime",
FILE_SIZE_ASC : "+fileSize",
FILE_SIZE_DESC : "-fileSize",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
PROCESSOR_EXPIRATION_ASC : "+processorExpiration",
PROCESSOR_EXPIRATION_DESC : "-processorExpiration",
EXECUTION_ATTEMPTS_ASC : "+executionAttempts",
EXECUTION_ATTEMPTS_DESC : "-executionAttempts",
LOCK_VERSION_ASC : "+lockVersion",
LOCK_VERSION_DESC : "-lockVersion",
};

var KalturaBatchJobStatus = module.exports.KalturaBatchJobStatus = {
PENDING : 0,
QUEUED : 1,
PROCESSING : 2,
PROCESSED : 3,
MOVEFILE : 4,
FINISHED : 5,
FAILED : 6,
ABORTED : 7,
ALMOST_DONE : 8,
RETRY : 9,
FATAL : 10,
DONT_PROCESS : 11,
};

var KalturaBatchJobType = module.exports.KalturaBatchJobType = {
CONVERT : "0",
IMPORT : "1",
DELETE : "2",
FLATTEN : "3",
BULKUPLOAD : "4",
DVDCREATOR : "5",
DOWNLOAD : "6",
OOCONVERT : "7",
CONVERT_PROFILE : "10",
POSTCONVERT : "11",
PULL : "12",
REMOTE_CONVERT : "13",
EXTRACT_MEDIA : "14",
MAIL : "15",
NOTIFICATION : "16",
CLEANUP : "17",
SCHEDULER_HELPER : "18",
BULKDOWNLOAD : "19",
DB_CLEANUP : "20",
PROVISION_PROVIDE : "21",
CONVERT_COLLECTION : "22",
STORAGE_EXPORT : "23",
PROVISION_DELETE : "24",
STORAGE_DELETE : "25",
EMAIL_INGESTION : "26",
METADATA_IMPORT : "27",
METADATA_TRANSFORM : "28",
FILESYNC_IMPORT : "29",
CAPTURE_THUMB : "30",
VIRUS_SCAN : "virusScan.VirusScan",
DISTRIBUTION_SUBMIT : "contentDistribution.DistributionSubmit",
DISTRIBUTION_UPDATE : "contentDistribution.DistributionUpdate",
DISTRIBUTION_DELETE : "contentDistribution.DistributionDelete",
DISTRIBUTION_FETCH_REPORT : "contentDistribution.DistributionFetchReport",
DISTRIBUTION_ENABLE : "contentDistribution.DistributionEnable",
DISTRIBUTION_DISABLE : "contentDistribution.DistributionDisable",
DISTRIBUTION_SYNC : "contentDistribution.DistributionSync",
DROP_FOLDER_WATCHER : "dropFolder.DropFolderWatcher",
DROP_FOLDER_HANDLER : "dropFolder.DropFolderHandler",
PARSE_CAPTION_ASSET : "captionSearch.parseCaptionAsset",
};

var KalturaBitRateMode = module.exports.KalturaBitRateMode = {
CBR : 1,
VBR : 2,
};

var KalturaBulkUploadAction = module.exports.KalturaBulkUploadAction = {
ADD : 1,
UPDATE : 2,
DELETE : 3,
REPLACE : 4,
TRANSFORM_XSLT : 5,
};

var KalturaBulkUploadCsvVersion = module.exports.KalturaBulkUploadCsvVersion = {
V1 : 1,
V2 : 2,
V3 : 3,
};

var KalturaBulkUploadResultObjectType = module.exports.KalturaBulkUploadResultObjectType = {
ENTRY : "1",
};

var KalturaBulkUploadType = module.exports.KalturaBulkUploadType = {
CSV : "bulkUploadCsv.CSV",
XML : "bulkUploadXml.XML",
DROP_FOLDER_XML : "dropFolderXmlBulkUpload.DROP_FOLDER_XML",
};

var KalturaCaptionAssetOrderBy = module.exports.KalturaCaptionAssetOrderBy = {
SIZE_ASC : "+size",
SIZE_DESC : "-size",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
DELETED_AT_ASC : "+deletedAt",
DELETED_AT_DESC : "-deletedAt",
};

var KalturaCaptionAssetStatus = module.exports.KalturaCaptionAssetStatus = {
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
};

var KalturaCaptionParamsOrderBy = module.exports.KalturaCaptionParamsOrderBy = {
};

var KalturaCaptionType = module.exports.KalturaCaptionType = {
SRT : "1",
DFXP : "2",
};

var KalturaCategoryOrderBy = module.exports.KalturaCategoryOrderBy = {
DEPTH_ASC : "+depth",
DEPTH_DESC : "-depth",
FULL_NAME_ASC : "+fullName",
FULL_NAME_DESC : "-fullName",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaCodeCuePointOrderBy = module.exports.KalturaCodeCuePointOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
START_TIME_ASC : "+startTime",
START_TIME_DESC : "-startTime",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaComcastMrssDistributionProfileOrderBy = module.exports.KalturaComcastMrssDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaComcastMrssDistributionProviderOrderBy = module.exports.KalturaComcastMrssDistributionProviderOrderBy = {
};

var KalturaCommercialUseType = module.exports.KalturaCommercialUseType = {
COMMERCIAL_USE : 1,
NON_COMMERCIAL_USE : 0,
};

var KalturaConfigurableDistributionProfileOrderBy = module.exports.KalturaConfigurableDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaContainerFormat = module.exports.KalturaContainerFormat = {
FLV : "flv",
MP4 : "mp4",
AVI : "avi",
MOV : "mov",
MP3 : "mp3",
_3GP : "3gp",
OGG : "ogg",
WMV : "wmv",
WMA : "wma",
ISMV : "ismv",
MKV : "mkv",
WEBM : "webm",
MPEG : "mpeg",
MPEGTS : "mpegts",
APPLEHTTP : "applehttp",
SWF : "swf",
PDF : "pdf",
JPG : "jpg",
};

var KalturaControlPanelCommandOrderBy = module.exports.KalturaControlPanelCommandOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaControlPanelCommandStatus = module.exports.KalturaControlPanelCommandStatus = {
PENDING : 1,
HANDLED : 2,
DONE : 3,
FAILED : 4,
};

var KalturaControlPanelCommandTargetType = module.exports.KalturaControlPanelCommandTargetType = {
DATA_CENTER : 1,
SCHEDULER : 2,
JOB_TYPE : 3,
JOB : 4,
BATCH : 5,
};

var KalturaControlPanelCommandType = module.exports.KalturaControlPanelCommandType = {
STOP : 1,
START : 2,
CONFIG : 3,
KILL : 4,
};

var KalturaConversionProfileAssetParamsOrderBy = module.exports.KalturaConversionProfileAssetParamsOrderBy = {
};

var KalturaConversionProfileOrderBy = module.exports.KalturaConversionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaConversionProfileStatus = module.exports.KalturaConversionProfileStatus = {
DISABLED : "1",
ENABLED : "2",
DELETED : "3",
};

var KalturaCountryRestrictionType = module.exports.KalturaCountryRestrictionType = {
RESTRICT_COUNTRY_LIST : 0,
ALLOW_COUNTRY_LIST : 1,
};

var KalturaCuePointOrderBy = module.exports.KalturaCuePointOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
START_TIME_ASC : "+startTime",
START_TIME_DESC : "-startTime",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaCuePointStatus = module.exports.KalturaCuePointStatus = {
READY : 1,
DELETED : 2,
};

var KalturaCuePointType = module.exports.KalturaCuePointType = {
AD : "adCuePoint.Ad",
CODE : "codeCuePoint.Code",
};

var KalturaDailymotionDistributionProfileOrderBy = module.exports.KalturaDailymotionDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaDailymotionDistributionProviderOrderBy = module.exports.KalturaDailymotionDistributionProviderOrderBy = {
};

var KalturaDataEntryOrderBy = module.exports.KalturaDataEntryOrderBy = {
NAME_ASC : "+name",
NAME_DESC : "-name",
MODERATION_COUNT_ASC : "+moderationCount",
MODERATION_COUNT_DESC : "-moderationCount",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
RANK_ASC : "+rank",
RANK_DESC : "-rank",
START_DATE_ASC : "+startDate",
START_DATE_DESC : "-startDate",
END_DATE_ASC : "+endDate",
END_DATE_DESC : "-endDate",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaDirectoryRestrictionType = module.exports.KalturaDirectoryRestrictionType = {
DONT_DISPLAY : 0,
DISPLAY_WITH_LINK : 1,
};

var KalturaDistributionAction = module.exports.KalturaDistributionAction = {
SUBMIT : 1,
UPDATE : 2,
DELETE : 3,
FETCH_REPORT : 4,
};

var KalturaDistributionErrorType = module.exports.KalturaDistributionErrorType = {
MISSING_FLAVOR : 1,
MISSING_THUMBNAIL : 2,
MISSING_METADATA : 3,
INVALID_DATA : 4,
};

var KalturaDistributionFieldRequiredStatus = module.exports.KalturaDistributionFieldRequiredStatus = {
NOT_REQUIRED : 0,
REQUIRED_BY_PROVIDER : 1,
REQUIRED_BY_PARTNER : 2,
};

var KalturaDistributionProfileActionStatus = module.exports.KalturaDistributionProfileActionStatus = {
DISABLED : 1,
AUTOMATIC : 2,
MANUAL : 3,
};

var KalturaDistributionProfileOrderBy = module.exports.KalturaDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaDistributionProfileStatus = module.exports.KalturaDistributionProfileStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

var KalturaDistributionProtocol = module.exports.KalturaDistributionProtocol = {
FTP : 1,
SCP : 2,
SFTP : 3,
HTTP : 4,
HTTPS : 5,
};

var KalturaDistributionProviderOrderBy = module.exports.KalturaDistributionProviderOrderBy = {
};

var KalturaDistributionProviderType = module.exports.KalturaDistributionProviderType = {
GENERIC : "1",
SYNDICATION : "2",
YOUTUBE : "youTubeDistribution.YOUTUBE",
YOUTUBE_API : "youtubeApiDistribution.YOUTUBE_API",
DAILYMOTION : "dailymotionDistribution.DAILYMOTION",
};

var KalturaDistributionValidationErrorType = module.exports.KalturaDistributionValidationErrorType = {
CUSTOM_ERROR : 0,
STRING_EMPTY : 1,
STRING_TOO_LONG : 2,
STRING_TOO_SHORT : 3,
INVALID_FORMAT : 4,
};

var KalturaDocumentEntryOrderBy = module.exports.KalturaDocumentEntryOrderBy = {
NAME_ASC : "+name",
NAME_DESC : "-name",
MODERATION_COUNT_ASC : "+moderationCount",
MODERATION_COUNT_DESC : "-moderationCount",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
RANK_ASC : "+rank",
RANK_DESC : "-rank",
START_DATE_ASC : "+startDate",
START_DATE_DESC : "-startDate",
END_DATE_ASC : "+endDate",
END_DATE_DESC : "-endDate",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaDocumentFlavorParamsOrderBy = module.exports.KalturaDocumentFlavorParamsOrderBy = {
};

var KalturaDocumentFlavorParamsOutputOrderBy = module.exports.KalturaDocumentFlavorParamsOutputOrderBy = {
};

var KalturaDocumentType = module.exports.KalturaDocumentType = {
DOCUMENT : 11,
SWF : 12,
PDF : 13,
};

var KalturaDoubleClickDistributionProfileOrderBy = module.exports.KalturaDoubleClickDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaDoubleClickDistributionProviderOrderBy = module.exports.KalturaDoubleClickDistributionProviderOrderBy = {
};

var KalturaDropFolderContentFileHandlerMatchPolicy = module.exports.KalturaDropFolderContentFileHandlerMatchPolicy = {
ADD_AS_NEW : 1,
MATCH_EXISTING_OR_ADD_AS_NEW : 2,
MATCH_EXISTING_OR_KEEP_IN_FOLDER : 3,
};

var KalturaDropFolderFileDeletePolicy = module.exports.KalturaDropFolderFileDeletePolicy = {
MANUAL_DELETE : 1,
AUTO_DELETE : 2,
};

var KalturaDropFolderFileErrorCode = module.exports.KalturaDropFolderFileErrorCode = {
ERROR_UPDATE_ENTRY : "1",
ERROR_ADD_ENTRY : "2",
FLAVOR_NOT_FOUND : "3",
FLAVOR_MISSING_IN_FILE_NAME : "4",
SLUG_REGEX_NO_MATCH : "5",
ERROR_READING_FILE : "6",
ERROR_DOWNLOADING_FILE : "7",
LOCAL_FILE_WRONG_SIZE : "dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_SIZE",
LOCAL_FILE_WRONG_CHECKSUM : "dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_CHECKSUM",
ERROR_WRITING_TEMP_FILE : "dropFolderXmlBulkUpload.ERROR_WRITING_TEMP_FILE",
ERROR_ADDING_BULK_UPLOAD : "dropFolderXmlBulkUpload.ERROR_ADDING_BULK_UPLOAD",
};

var KalturaDropFolderFileHandlerType = module.exports.KalturaDropFolderFileHandlerType = {
CONTENT : "1",
XML : "dropFolderXmlBulkUpload.XML",
};

var KalturaDropFolderFileOrderBy = module.exports.KalturaDropFolderFileOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
FILE_NAME_ASC : "+fileName",
FILE_NAME_DESC : "-fileName",
FILE_SIZE_ASC : "+fileSize",
FILE_SIZE_DESC : "-fileSize",
FILE_SIZE_LAST_SET_AT_ASC : "+fileSizeLastSetAt",
FILE_SIZE_LAST_SET_AT_DESC : "-fileSizeLastSetAt",
PARSED_SLUG_ASC : "+parsedSlug",
PARSED_SLUG_DESC : "-parsedSlug",
PARSED_FLAVOR_ASC : "+parsedFlavor",
PARSED_FLAVOR_DESC : "-parsedFlavor",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaDropFolderFileStatus = module.exports.KalturaDropFolderFileStatus = {
UPLOADING : 1,
PENDING : 2,
WAITING : 3,
HANDLED : 4,
IGNORE : 5,
DELETED : 6,
PURGED : 7,
NO_MATCH : 8,
ERROR_HANDLING : 9,
ERROR_DELETING : 10,
DOWNLOADING : 11,
ERROR_DOWNLOADING : 12,
};

var KalturaDropFolderOrderBy = module.exports.KalturaDropFolderOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
NAME_ASC : "+name",
NAME_DESC : "-name",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaDropFolderStatus = module.exports.KalturaDropFolderStatus = {
DISABLED : 0,
ENABLED : 1,
DELETED : 2,
};

var KalturaDropFolderType = module.exports.KalturaDropFolderType = {
LOCAL : "1",
FTP : "2",
SCP : "3",
SFTP : "4",
};

var KalturaDurationType = module.exports.KalturaDurationType = {
NOT_AVAILABLE : "notavailable",
SHORT : "short",
MEDIUM : "medium",
LONG : "long",
};

var KalturaDwhHourlyPartnerOrderBy = module.exports.KalturaDwhHourlyPartnerOrderBy = {
AGGREGATED_TIME_ASC : "+aggregatedTime",
AGGREGATED_TIME_DESC : "-aggregatedTime",
SUM_TIME_VIEWED_ASC : "+sumTimeViewed",
SUM_TIME_VIEWED_DESC : "-sumTimeViewed",
AVERAGE_TIME_VIEWED_ASC : "+averageTimeViewed",
AVERAGE_TIME_VIEWED_DESC : "-averageTimeViewed",
COUNT_PLAYS_ASC : "+countPlays",
COUNT_PLAYS_DESC : "-countPlays",
COUNT_LOADS_ASC : "+countLoads",
COUNT_LOADS_DESC : "-countLoads",
COUNT_PLAYS25_ASC : "+countPlays25",
COUNT_PLAYS25_DESC : "-countPlays25",
COUNT_PLAYS50_ASC : "+countPlays50",
COUNT_PLAYS50_DESC : "-countPlays50",
COUNT_PLAYS75_ASC : "+countPlays75",
COUNT_PLAYS75_DESC : "-countPlays75",
COUNT_PLAYS100_ASC : "+countPlays100",
COUNT_PLAYS100_DESC : "-countPlays100",
COUNT_EDIT_ASC : "+countEdit",
COUNT_EDIT_DESC : "-countEdit",
COUNT_SHARES_ASC : "+countShares",
COUNT_SHARES_DESC : "-countShares",
COUNT_DOWNLOAD_ASC : "+countDownload",
COUNT_DOWNLOAD_DESC : "-countDownload",
COUNT_REPORT_ABUSE_ASC : "+countReportAbuse",
COUNT_REPORT_ABUSE_DESC : "-countReportAbuse",
COUNT_MEDIA_ENTRIES_ASC : "+countMediaEntries",
COUNT_MEDIA_ENTRIES_DESC : "-countMediaEntries",
COUNT_VIDEO_ENTRIES_ASC : "+countVideoEntries",
COUNT_VIDEO_ENTRIES_DESC : "-countVideoEntries",
COUNT_IMAGE_ENTRIES_ASC : "+countImageEntries",
COUNT_IMAGE_ENTRIES_DESC : "-countImageEntries",
COUNT_AUDIO_ENTRIES_ASC : "+countAudioEntries",
COUNT_AUDIO_ENTRIES_DESC : "-countAudioEntries",
COUNT_MIX_ENTRIES_ASC : "+countMixEntries",
COUNT_MIX_ENTRIES_DESC : "-countMixEntries",
COUNT_PLAYLISTS_ASC : "+countPlaylists",
COUNT_PLAYLISTS_DESC : "-countPlaylists",
COUNT_BANDWIDTH_ASC : "+countBandwidth",
COUNT_BANDWIDTH_DESC : "-countBandwidth",
COUNT_STORAGE_ASC : "+countStorage",
COUNT_STORAGE_DESC : "-countStorage",
COUNT_USERS_ASC : "+countUsers",
COUNT_USERS_DESC : "-countUsers",
COUNT_WIDGETS_ASC : "+countWidgets",
COUNT_WIDGETS_DESC : "-countWidgets",
AGGREGATED_STORAGE_ASC : "+aggregatedStorage",
AGGREGATED_STORAGE_DESC : "-aggregatedStorage",
AGGREGATED_BANDWIDTH_ASC : "+aggregatedBandwidth",
AGGREGATED_BANDWIDTH_DESC : "-aggregatedBandwidth",
COUNT_BUFFER_START_ASC : "+countBufferStart",
COUNT_BUFFER_START_DESC : "-countBufferStart",
COUNT_BUFFER_END_ASC : "+countBufferEnd",
COUNT_BUFFER_END_DESC : "-countBufferEnd",
COUNT_OPEN_FULL_SCREEN_ASC : "+countOpenFullScreen",
COUNT_OPEN_FULL_SCREEN_DESC : "-countOpenFullScreen",
COUNT_CLOSE_FULL_SCREEN_ASC : "+countCloseFullScreen",
COUNT_CLOSE_FULL_SCREEN_DESC : "-countCloseFullScreen",
COUNT_REPLAY_ASC : "+countReplay",
COUNT_REPLAY_DESC : "-countReplay",
COUNT_SEEK_ASC : "+countSeek",
COUNT_SEEK_DESC : "-countSeek",
COUNT_OPEN_UPLOAD_ASC : "+countOpenUpload",
COUNT_OPEN_UPLOAD_DESC : "-countOpenUpload",
COUNT_SAVE_PUBLISH_ASC : "+countSavePublish",
COUNT_SAVE_PUBLISH_DESC : "-countSavePublish",
COUNT_CLOSE_EDITOR_ASC : "+countCloseEditor",
COUNT_CLOSE_EDITOR_DESC : "-countCloseEditor",
COUNT_PRE_BUMPER_PLAYED_ASC : "+countPreBumperPlayed",
COUNT_PRE_BUMPER_PLAYED_DESC : "-countPreBumperPlayed",
COUNT_POST_BUMPER_PLAYED_ASC : "+countPostBumperPlayed",
COUNT_POST_BUMPER_PLAYED_DESC : "-countPostBumperPlayed",
COUNT_BUMPER_CLICKED_ASC : "+countBumperClicked",
COUNT_BUMPER_CLICKED_DESC : "-countBumperClicked",
COUNT_PREROLL_STARTED_ASC : "+countPrerollStarted",
COUNT_PREROLL_STARTED_DESC : "-countPrerollStarted",
COUNT_MIDROLL_STARTED_ASC : "+countMidrollStarted",
COUNT_MIDROLL_STARTED_DESC : "-countMidrollStarted",
COUNT_POSTROLL_STARTED_ASC : "+countPostrollStarted",
COUNT_POSTROLL_STARTED_DESC : "-countPostrollStarted",
COUNT_OVERLAY_STARTED_ASC : "+countOverlayStarted",
COUNT_OVERLAY_STARTED_DESC : "-countOverlayStarted",
COUNT_PREROLL_CLICKED_ASC : "+countPrerollClicked",
COUNT_PREROLL_CLICKED_DESC : "-countPrerollClicked",
COUNT_MIDROLL_CLICKED_ASC : "+countMidrollClicked",
COUNT_MIDROLL_CLICKED_DESC : "-countMidrollClicked",
COUNT_POSTROLL_CLICKED_ASC : "+countPostrollClicked",
COUNT_POSTROLL_CLICKED_DESC : "-countPostrollClicked",
COUNT_OVERLAY_CLICKED_ASC : "+countOverlayClicked",
COUNT_OVERLAY_CLICKED_DESC : "-countOverlayClicked",
COUNT_PREROLL25_ASC : "+countPreroll25",
COUNT_PREROLL25_DESC : "-countPreroll25",
COUNT_PREROLL50_ASC : "+countPreroll50",
COUNT_PREROLL50_DESC : "-countPreroll50",
COUNT_PREROLL75_ASC : "+countPreroll75",
COUNT_PREROLL75_DESC : "-countPreroll75",
COUNT_MIDROLL25_ASC : "+countMidroll25",
COUNT_MIDROLL25_DESC : "-countMidroll25",
COUNT_MIDROLL50_ASC : "+countMidroll50",
COUNT_MIDROLL50_DESC : "-countMidroll50",
COUNT_MIDROLL75_ASC : "+countMidroll75",
COUNT_MIDROLL75_DESC : "-countMidroll75",
COUNT_POSTROLL25_ASC : "+countPostroll25",
COUNT_POSTROLL25_DESC : "-countPostroll25",
COUNT_POSTROLL50_ASC : "+countPostroll50",
COUNT_POSTROLL50_DESC : "-countPostroll50",
COUNT_POSTROLL75_ASC : "+countPostroll75",
COUNT_POSTROLL75_DESC : "-countPostroll75",
COUNT_LIVE_STREAMING_BANDWIDTH_ASC : "+countLiveStreamingBandwidth",
COUNT_LIVE_STREAMING_BANDWIDTH_DESC : "-countLiveStreamingBandwidth",
AGGREGATED_LIVE_STREAMING_BANDWIDTH_ASC : "+aggregatedLiveStreamingBandwidth",
AGGREGATED_LIVE_STREAMING_BANDWIDTH_DESC : "-aggregatedLiveStreamingBandwidth",
};

var KalturaEditorType = module.exports.KalturaEditorType = {
SIMPLE : 1,
ADVANCED : 2,
};

var KalturaEmailIngestionProfileStatus = module.exports.KalturaEmailIngestionProfileStatus = {
INACTIVE : 0,
ACTIVE : 1,
};

var KalturaEntryDistributionFlag = module.exports.KalturaEntryDistributionFlag = {
NONE : 0,
SUBMIT_REQUIRED : 1,
DELETE_REQUIRED : 2,
UPDATE_REQUIRED : 3,
ENABLE_REQUIRED : 4,
DISABLE_REQUIRED : 5,
};

var KalturaEntryDistributionOrderBy = module.exports.KalturaEntryDistributionOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
SUBMITTED_AT_ASC : "+submittedAt",
SUBMITTED_AT_DESC : "-submittedAt",
SUNRISE_ASC : "+sunrise",
SUNRISE_DESC : "-sunrise",
SUNSET_ASC : "+sunset",
SUNSET_DESC : "-sunset",
};

var KalturaEntryDistributionStatus = module.exports.KalturaEntryDistributionStatus = {
PENDING : 0,
QUEUED : 1,
READY : 2,
DELETED : 3,
SUBMITTING : 4,
UPDATING : 5,
DELETING : 6,
ERROR_SUBMITTING : 7,
ERROR_UPDATING : 8,
ERROR_DELETING : 9,
REMOVED : 10,
};

var KalturaEntryDistributionSunStatus = module.exports.KalturaEntryDistributionSunStatus = {
BEFORE_SUNRISE : 1,
AFTER_SUNRISE : 2,
AFTER_SUNSET : 3,
};

var KalturaEntryModerationStatus = module.exports.KalturaEntryModerationStatus = {
PENDING_MODERATION : 1,
APPROVED : 2,
REJECTED : 3,
FLAGGED_FOR_REVIEW : 5,
AUTO_APPROVED : 6,
};

var KalturaEntryReplacementStatus = module.exports.KalturaEntryReplacementStatus = {
NONE : "0",
APPROVED_BUT_NOT_READY : "1",
READY_BUT_NOT_APPROVED : "2",
NOT_READY_AND_NOT_APPROVED : "3",
};

var KalturaEntryStatus = module.exports.KalturaEntryStatus = {
ERROR_IMPORTING : "-2",
ERROR_CONVERTING : "-1",
IMPORT : "0",
PRECONVERT : "1",
READY : "2",
DELETED : "3",
PENDING : "4",
MODERATE : "5",
BLOCKED : "6",
NO_CONTENT : "7",
INFECTED : "virusScan.Infected",
SCAN_FAILURE : "virusScan.ScanFailure",
};

var KalturaEntryType = module.exports.KalturaEntryType = {
AUTOMATIC : "-1",
MEDIA_CLIP : "1",
MIX : "2",
PLAYLIST : "5",
DATA : "6",
LIVE_STREAM : "7",
DOCUMENT : "10",
};

var KalturaExampleDistributionProfileOrderBy = module.exports.KalturaExampleDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaExampleDistributionProviderOrderBy = module.exports.KalturaExampleDistributionProviderOrderBy = {
};

var KalturaFileSyncObjectType = module.exports.KalturaFileSyncObjectType = {
ENTRY : "1",
UICONF : "2",
BATCHJOB : "3",
ASSET : "4",
METADATA : "5",
METADATA_PROFILE : "6",
SYNDICATION_FEED : "7",
CONVERSION_PROFILE : "8",
FLAVOR_ASSET : "4",
GENERIC_DISTRIBUTION_ACTION : "contentDistribution.GenericDistributionAction",
ENTRY_DISTRIBUTION : "contentDistribution.EntryDistribution",
DISTRIBUTION_PROFILE : "contentDistribution.DistributionProfile",
};

var KalturaFileSyncOrderBy = module.exports.KalturaFileSyncOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
READY_AT_ASC : "+readyAt",
READY_AT_DESC : "-readyAt",
SYNC_TIME_ASC : "+syncTime",
SYNC_TIME_DESC : "-syncTime",
FILE_SIZE_ASC : "+fileSize",
FILE_SIZE_DESC : "-fileSize",
};

var KalturaFileSyncStatus = module.exports.KalturaFileSyncStatus = {
ERROR : -1,
PENDING : 1,
READY : 2,
DELETED : 3,
PURGED : 4,
};

var KalturaFileSyncType = module.exports.KalturaFileSyncType = {
FILE : 1,
LINK : 2,
URL : 3,
};

var KalturaFlavorAssetOrderBy = module.exports.KalturaFlavorAssetOrderBy = {
SIZE_ASC : "+size",
SIZE_DESC : "-size",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
DELETED_AT_ASC : "+deletedAt",
DELETED_AT_DESC : "-deletedAt",
};

var KalturaFlavorAssetStatus = module.exports.KalturaFlavorAssetStatus = {
CONVERTING : 1,
NOT_APPLICABLE : 4,
TEMP : 5,
WAIT_FOR_CONVERT : 6,
VALIDATING : 8,
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
};

var KalturaFlavorParamsOrderBy = module.exports.KalturaFlavorParamsOrderBy = {
};

var KalturaFlavorParamsOutputOrderBy = module.exports.KalturaFlavorParamsOutputOrderBy = {
};

var KalturaFlavorReadyBehaviorType = module.exports.KalturaFlavorReadyBehaviorType = {
INHERIT_FLAVOR_PARAMS : 0,
REQUIRED : 1,
OPTIONAL : 2,
};

var KalturaFreewheelDistributionProfileOrderBy = module.exports.KalturaFreewheelDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaFreewheelDistributionProviderOrderBy = module.exports.KalturaFreewheelDistributionProviderOrderBy = {
};

var KalturaFreewheelGenericDistributionProfileOrderBy = module.exports.KalturaFreewheelGenericDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaFreewheelGenericDistributionProviderOrderBy = module.exports.KalturaFreewheelGenericDistributionProviderOrderBy = {
};

var KalturaFtpDropFolderOrderBy = module.exports.KalturaFtpDropFolderOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
NAME_ASC : "+name",
NAME_DESC : "-name",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaGender = module.exports.KalturaGender = {
UNKNOWN : 0,
MALE : 1,
FEMALE : 2,
};

var KalturaGenericDistributionProfileOrderBy = module.exports.KalturaGenericDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaGenericDistributionProviderActionOrderBy = module.exports.KalturaGenericDistributionProviderActionOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaGenericDistributionProviderOrderBy = module.exports.KalturaGenericDistributionProviderOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaGenericDistributionProviderParser = module.exports.KalturaGenericDistributionProviderParser = {
XSL : 1,
XPATH : 2,
REGEX : 3,
};

var KalturaGenericDistributionProviderStatus = module.exports.KalturaGenericDistributionProviderStatus = {
ACTIVE : 2,
DELETED : 3,
};

var KalturaGenericSyndicationFeedOrderBy = module.exports.KalturaGenericSyndicationFeedOrderBy = {
PLAYLIST_ID_ASC : "+playlistId",
PLAYLIST_ID_DESC : "-playlistId",
NAME_ASC : "+name",
NAME_DESC : "-name",
TYPE_ASC : "+type",
TYPE_DESC : "-type",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaGenericXsltSyndicationFeedOrderBy = module.exports.KalturaGenericXsltSyndicationFeedOrderBy = {
PLAYLIST_ID_ASC : "+playlistId",
PLAYLIST_ID_DESC : "-playlistId",
NAME_ASC : "+name",
NAME_DESC : "-name",
TYPE_ASC : "+type",
TYPE_DESC : "-type",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaGoogleSyndicationFeedAdultValues = module.exports.KalturaGoogleSyndicationFeedAdultValues = {
YES : "Yes",
NO : "No",
};

var KalturaGoogleVideoSyndicationFeedOrderBy = module.exports.KalturaGoogleVideoSyndicationFeedOrderBy = {
PLAYLIST_ID_ASC : "+playlistId",
PLAYLIST_ID_DESC : "-playlistId",
NAME_ASC : "+name",
NAME_DESC : "-name",
TYPE_ASC : "+type",
TYPE_DESC : "-type",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaHuluDistributionProfileOrderBy = module.exports.KalturaHuluDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaHuluDistributionProviderOrderBy = module.exports.KalturaHuluDistributionProviderOrderBy = {
};

var KalturaITunesSyndicationFeedAdultValues = module.exports.KalturaITunesSyndicationFeedAdultValues = {
YES : "yes",
NO : "no",
CLEAN : "clean",
};

var KalturaITunesSyndicationFeedCategories = module.exports.KalturaITunesSyndicationFeedCategories = {
ARTS : "Arts",
ARTS_DESIGN : "Arts/Design",
ARTS_FASHION_BEAUTY : "Arts/Fashion &amp; Beauty",
ARTS_FOOD : "Arts/Food",
ARTS_LITERATURE : "Arts/Literature",
ARTS_PERFORMING_ARTS : "Arts/Performing Arts",
ARTS_VISUAL_ARTS : "Arts/Visual Arts",
BUSINESS : "Business",
BUSINESS_BUSINESS_NEWS : "Business/Business News",
BUSINESS_CAREERS : "Business/Careers",
BUSINESS_INVESTING : "Business/Investing",
BUSINESS_MANAGEMENT_MARKETING : "Business/Management &amp; Marketing",
BUSINESS_SHOPPING : "Business/Shopping",
COMEDY : "Comedy",
EDUCATION : "Education",
EDUCATION_TECHNOLOGY : "Education/Education Technology",
EDUCATION_HIGHER_EDUCATION : "Education/Higher Education",
EDUCATION_K_12 : "Education/K-12",
EDUCATION_LANGUAGE_COURSES : "Education/Language Courses",
EDUCATION_TRAINING : "Education/Training",
GAMES_HOBBIES : "Games &amp; Hobbies",
GAMES_HOBBIES_AUTOMOTIVE : "Games &amp; Hobbies/Automotive",
GAMES_HOBBIES_AVIATION : "Games &amp; Hobbies/Aviation",
GAMES_HOBBIES_HOBBIES : "Games &amp; Hobbies/Hobbies",
GAMES_HOBBIES_OTHER_GAMES : "Games &amp; Hobbies/Other Games",
GAMES_HOBBIES_VIDEO_GAMES : "Games &amp; Hobbies/Video Games",
GOVERNMENT_ORGANIZATIONS : "Government &amp; Organizations",
GOVERNMENT_ORGANIZATIONS_LOCAL : "Government &amp; Organizations/Local",
GOVERNMENT_ORGANIZATIONS_NATIONAL : "Government &amp; Organizations/National",
GOVERNMENT_ORGANIZATIONS_NON_PROFIT : "Government &amp; Organizations/Non-Profit",
GOVERNMENT_ORGANIZATIONS_REGIONAL : "Government &amp; Organizations/Regional",
HEALTH : "Health",
HEALTH_ALTERNATIVE_HEALTH : "Health/Alternative Health",
HEALTH_FITNESS_NUTRITION : "Health/Fitness &amp; Nutrition",
HEALTH_SELF_HELP : "Health/Self-Help",
HEALTH_SEXUALITY : "Health/Sexuality",
KIDS_FAMILY : "Kids &amp; Family",
MUSIC : "Music",
NEWS_POLITICS : "News &amp; Politics",
RELIGION_SPIRITUALITY : "Religion &amp; Spirituality",
RELIGION_SPIRITUALITY_BUDDHISM : "Religion &amp; Spirituality/Buddhism",
RELIGION_SPIRITUALITY_CHRISTIANITY : "Religion &amp; Spirituality/Christianity",
RELIGION_SPIRITUALITY_HINDUISM : "Religion &amp; Spirituality/Hinduism",
RELIGION_SPIRITUALITY_ISLAM : "Religion &amp; Spirituality/Islam",
RELIGION_SPIRITUALITY_JUDAISM : "Religion &amp; Spirituality/Judaism",
RELIGION_SPIRITUALITY_OTHER : "Religion &amp; Spirituality/Other",
RELIGION_SPIRITUALITY_SPIRITUALITY : "Religion &amp; Spirituality/Spirituality",
SCIENCE_MEDICINE : "Science &amp; Medicine",
SCIENCE_MEDICINE_MEDICINE : "Science &amp; Medicine/Medicine",
SCIENCE_MEDICINE_NATURAL_SCIENCES : "Science &amp; Medicine/Natural Sciences",
SCIENCE_MEDICINE_SOCIAL_SCIENCES : "Science &amp; Medicine/Social Sciences",
SOCIETY_CULTURE : "Society &amp; Culture",
SOCIETY_CULTURE_HISTORY : "Society &amp; Culture/History",
SOCIETY_CULTURE_PERSONAL_JOURNALS : "Society &amp; Culture/Personal Journals",
SOCIETY_CULTURE_PHILOSOPHY : "Society &amp; Culture/Philosophy",
SOCIETY_CULTURE_PLACES_TRAVEL : "Society &amp; Culture/Places &amp; Travel",
SPORTS_RECREATION : "Sports &amp; Recreation",
SPORTS_RECREATION_AMATEUR : "Sports &amp; Recreation/Amateur",
SPORTS_RECREATION_COLLEGE_HIGH_SCHOOL : "Sports &amp; Recreation/College &amp; High School",
SPORTS_RECREATION_OUTDOOR : "Sports &amp; Recreation/Outdoor",
SPORTS_RECREATION_PROFESSIONAL : "Sports &amp; Recreation/Professional",
TECHNOLOGY : "Technology",
TECHNOLOGY_GADGETS : "Technology/Gadgets",
TECHNOLOGY_TECH_NEWS : "Technology/Tech News",
TECHNOLOGY_PODCASTING : "Technology/Podcasting",
TECHNOLOGY_SOFTWARE_HOW_TO : "Technology/Software How-To",
TV_FILM : "TV &amp; Film",
};

var KalturaITunesSyndicationFeedOrderBy = module.exports.KalturaITunesSyndicationFeedOrderBy = {
PLAYLIST_ID_ASC : "+playlistId",
PLAYLIST_ID_DESC : "-playlistId",
NAME_ASC : "+name",
NAME_DESC : "-name",
TYPE_ASC : "+type",
TYPE_DESC : "-type",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaIdeticDistributionProfileOrderBy = module.exports.KalturaIdeticDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaIdeticDistributionProviderOrderBy = module.exports.KalturaIdeticDistributionProviderOrderBy = {
};

var KalturaIpAddressRestrictionType = module.exports.KalturaIpAddressRestrictionType = {
RESTRICT_LIST : 0,
ALLOW_LIST : 1,
};

var KalturaLanguage = module.exports.KalturaLanguage = {
AB : "Abkhazian",
AA : "Afar",
AF : "Afrikaans",
SQ : "Albanian",
AM : "Amharic",
AR : "Arabic",
HY : "Armenian",
AS_ : "Assamese",
AY : "Aymara",
AZ : "Azerbaijani",
BA : "Bashkir",
EU : "Basque",
BN : "Bengali (Bangla)",
DZ : "Bhutani",
BH : "Bihari",
BI : "Bislama",
BR : "Breton",
BG : "Bulgarian",
MY : "Burmese",
BE : "Byelorussian (Belarusian)",
KM : "Cambodian",
CA : "Catalan",
ZH : "Chinese",
CO : "Corsican",
HR : "Croatian",
CS : "Czech",
DA : "Danish",
NL : "Dutch",
EN : "English",
EO : "Esperanto",
ET : "Estonian",
FO : "Faeroese",
FA : "Farsi",
FJ : "Fiji",
FI : "Finnish",
FR : "French",
FY : "Frisian",
GL : "Galician",
GD : "Gaelic (Scottish)",
GV : "Gaelic (Manx)",
KA : "Georgian",
DE : "German",
EL : "Greek",
KL : "Greenlandic",
GN : "Guarani",
GU : "Gujarati",
HA : "Hausa",
HE : "Hebrew",
IW : "Hebrew",
HI : "Hindi",
HU : "Hungarian",
IS : "Icelandic",
ID : "Indonesian",
IN : "Indonesian",
IA : "Interlingua",
IE : "Interlingue",
IU : "Inuktitut",
IK : "Inupiak",
GA : "Irish",
IT : "Italian",
JA : "Japanese",
JV : "Javanese",
KN : "Kannada",
KS : "Kashmiri",
KK : "Kazakh",
RW : "Kinyarwanda (Ruanda)",
KY : "Kirghiz",
RN : "Kirundi (Rundi)",
KO : "Korean",
KU : "Kurdish",
LO : "Laothian",
LA : "Latin",
LV : "Latvian (Lettish)",
LI : "Limburgish ( Limburger)",
LN : "Lingala",
LT : "Lithuanian",
MK : "Macedonian",
MG : "Malagasy",
MS : "Malay",
ML : "Malayalam",
MT : "Maltese",
MI : "Maori",
MR : "Marathi",
MO : "Moldavian",
MN : "Mongolian",
NA : "Nauru",
NE : "Nepali",
NO : "Norwegian",
OC : "Occitan",
OR_ : "Oriya",
OM : "Oromo (Afan, Galla)",
PS : "Pashto (Pushto)",
PL : "Polish",
PT : "Portuguese",
PA : "Punjabi",
QU : "Quechua",
RM : "Rhaeto-Romance",
RO : "Romanian",
RU : "Russian",
SM : "Samoan",
SG : "Sangro",
SA : "Sanskrit",
SR : "Serbian",
SH : "Serbo-Croatian",
ST : "Sesotho",
TN : "Setswana",
SN : "Shona",
SD : "Sindhi",
SI : "Sinhalese",
SS : "Siswati",
SK : "Slovak",
SL : "Slovenian",
SO : "Somali",
ES : "Spanish",
SU : "Sundanese",
SW : "Swahili (Kiswahili)",
SV : "Swedish",
TL : "Tagalog",
TG : "Tajik",
TA : "Tamil",
TT : "Tatar",
TE : "Telugu",
TH : "Thai",
BO : "Tibetan",
TI : "Tigrinya",
TO : "Tonga",
TS : "Tsonga",
TR : "Turkish",
TK : "Turkmen",
TW : "Twi",
UG : "Uighur",
UK : "Ukrainian",
UR : "Urdu",
UZ : "Uzbek",
VI : "Vietnamese",
VO : "Volapuk",
CY : "Welsh",
WO : "Wolof",
XH : "Xhosa",
YI : "Yiddish",
JI : "Yiddish",
YO : "Yoruba",
ZU : "Zulu",
};

var KalturaLanguageCode = module.exports.KalturaLanguageCode = {
AB : "ab",
AA : "aa",
AF : "af",
SQ : "sq",
AM : "am",
AR : "ar",
HY : "hy",
AS_ : "as",
AY : "ay",
AZ : "az",
BA : "ba",
EU : "eu",
BN : "bn",
DZ : "dz",
BH : "bh",
BI : "bi",
BR : "br",
BG : "bg",
MY : "my",
BE : "be",
KM : "km",
CA : "ca",
ZH : "zh",
CO : "co",
HR : "hr",
CS : "cs",
DA : "da",
NL : "nl",
EN : "en",
EO : "eo",
ET : "et",
FO : "fo",
FA : "fa",
FJ : "fj",
FI : "fi",
FR : "fr",
FY : "fy",
GL : "gl",
GD : "gd",
GV : "gv",
KA : "ka",
DE : "de",
EL : "el",
KL : "kl",
GN : "gn",
GU : "gu",
HA : "ha",
HE : "he",
IW : "iw",
HI : "hi",
HU : "hu",
IS : "is",
ID : "id",
IN : "in",
IA : "ia",
IE : "ie",
IU : "iu",
IK : "ik",
GA : "ga",
IT : "it",
JA : "ja",
JV : "jv",
KN : "kn",
KS : "ks",
KK : "kk",
RW : "rw",
KY : "ky",
RN : "rn",
KO : "ko",
KU : "ku",
LO : "lo",
LA : "la",
LV : "lv",
LI : "li",
LN : "ln",
LT : "lt",
MK : "mk",
MG : "mg",
MS : "ms",
ML : "ml",
MT : "mt",
MI : "mi",
MR : "mr",
MO : "mo",
MN : "mn",
NA : "na",
NE : "ne",
NO : "no",
OC : "oc",
OR_ : "or",
OM : "om",
PS : "ps",
PL : "pl",
PT : "pt",
PA : "pa",
QU : "qu",
RM : "rm",
RO : "ro",
RU : "ru",
SM : "sm",
SG : "sg",
SA : "sa",
SR : "sr",
SH : "sh",
ST : "st",
TN : "tn",
SN : "sn",
SD : "sd",
SI : "si",
SS : "ss",
SK : "sk",
SL : "sl",
SO : "so",
ES : "es",
SU : "su",
SW : "sw",
SV : "sv",
TL : "tl",
TG : "tg",
TA : "ta",
TT : "tt",
TE : "te",
TH : "th",
BO : "bo",
TI : "ti",
TO : "to",
TS : "ts",
TR : "tr",
TK : "tk",
TW : "tw",
UG : "ug",
UK : "uk",
UR : "ur",
UZ : "uz",
VI : "vi",
VO : "vo",
CY : "cy",
WO : "wo",
XH : "xh",
YI : "yi",
JI : "ji",
YO : "yo",
ZU : "zu",
};

var KalturaLicenseType = module.exports.KalturaLicenseType = {
UNKNOWN : -1,
NONE : 0,
COPYRIGHTED : 1,
PUBLIC_DOMAIN : 2,
CREATIVECOMMONS_ATTRIBUTION : 3,
CREATIVECOMMONS_ATTRIBUTION_SHARE_ALIKE : 4,
CREATIVECOMMONS_ATTRIBUTION_NO_DERIVATIVES : 5,
CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL : 6,
CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_SHARE_ALIKE : 7,
CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_NO_DERIVATIVES : 8,
GFDL : 9,
GPL : 10,
AFFERO_GPL : 11,
LGPL : 12,
BSD : 13,
APACHE : 14,
MOZILLA : 15,
};

var KalturaLiveStreamAdminEntryOrderBy = module.exports.KalturaLiveStreamAdminEntryOrderBy = {
MEDIA_TYPE_ASC : "+mediaType",
MEDIA_TYPE_DESC : "-mediaType",
PLAYS_ASC : "+plays",
PLAYS_DESC : "-plays",
VIEWS_ASC : "+views",
VIEWS_DESC : "-views",
DURATION_ASC : "+duration",
DURATION_DESC : "-duration",
MS_DURATION_ASC : "+msDuration",
MS_DURATION_DESC : "-msDuration",
NAME_ASC : "+name",
NAME_DESC : "-name",
MODERATION_COUNT_ASC : "+moderationCount",
MODERATION_COUNT_DESC : "-moderationCount",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
RANK_ASC : "+rank",
RANK_DESC : "-rank",
START_DATE_ASC : "+startDate",
START_DATE_DESC : "-startDate",
END_DATE_ASC : "+endDate",
END_DATE_DESC : "-endDate",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaLiveStreamEntryOrderBy = module.exports.KalturaLiveStreamEntryOrderBy = {
MEDIA_TYPE_ASC : "+mediaType",
MEDIA_TYPE_DESC : "-mediaType",
PLAYS_ASC : "+plays",
PLAYS_DESC : "-plays",
VIEWS_ASC : "+views",
VIEWS_DESC : "-views",
DURATION_ASC : "+duration",
DURATION_DESC : "-duration",
MS_DURATION_ASC : "+msDuration",
MS_DURATION_DESC : "-msDuration",
NAME_ASC : "+name",
NAME_DESC : "-name",
MODERATION_COUNT_ASC : "+moderationCount",
MODERATION_COUNT_DESC : "-moderationCount",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
RANK_ASC : "+rank",
RANK_DESC : "-rank",
START_DATE_ASC : "+startDate",
START_DATE_DESC : "-startDate",
END_DATE_ASC : "+endDate",
END_DATE_DESC : "-endDate",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaMailJobOrderBy = module.exports.KalturaMailJobOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
PROCESSOR_EXPIRATION_ASC : "+processorExpiration",
PROCESSOR_EXPIRATION_DESC : "-processorExpiration",
EXECUTION_ATTEMPTS_ASC : "+executionAttempts",
EXECUTION_ATTEMPTS_DESC : "-executionAttempts",
LOCK_VERSION_ASC : "+lockVersion",
LOCK_VERSION_DESC : "-lockVersion",
};

var KalturaMailJobStatus = module.exports.KalturaMailJobStatus = {
PENDING : 1,
SENT : 2,
ERROR : 3,
QUEUED : 4,
};

var KalturaMailType = module.exports.KalturaMailType = {
MAIL_TYPE_KALTURA_NEWSLETTER : 10,
MAIL_TYPE_ADDED_TO_FAVORITES : 11,
MAIL_TYPE_ADDED_TO_CLIP_FAVORITES : 12,
MAIL_TYPE_NEW_COMMENT_IN_PROFILE : 13,
MAIL_TYPE_CLIP_ADDED_YOUR_KALTURA : 20,
MAIL_TYPE_VIDEO_ADDED : 21,
MAIL_TYPE_ROUGHCUT_CREATED : 22,
MAIL_TYPE_ADDED_KALTURA_TO_YOUR_FAVORITES : 23,
MAIL_TYPE_NEW_COMMENT_IN_KALTURA : 24,
MAIL_TYPE_CLIP_ADDED : 30,
MAIL_TYPE_VIDEO_CREATED : 31,
MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES : 32,
MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_CONTRIBUTED : 33,
MAIL_TYPE_CLIP_CONTRIBUTED : 40,
MAIL_TYPE_ROUGHCUT_CREATED_SUBSCRIBED : 41,
MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES_SUBSCRIBED : 42,
MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_SUBSCRIBED : 43,
MAIL_TYPE_REGISTER_CONFIRM : 50,
MAIL_TYPE_PASSWORD_RESET : 51,
MAIL_TYPE_LOGIN_MAIL_RESET : 52,
MAIL_TYPE_REGISTER_CONFIRM_VIDEO_SERVICE : 54,
MAIL_TYPE_VIDEO_READY : 60,
MAIL_TYPE_VIDEO_IS_READY : 62,
MAIL_TYPE_BULK_DOWNLOAD_READY : 63,
MAIL_TYPE_NOTIFY_ERR : 70,
MAIL_TYPE_ACCOUNT_UPGRADE_CONFIRM : 80,
MAIL_TYPE_VIDEO_SERVICE_NOTICE : 81,
MAIL_TYPE_VIDEO_SERVICE_NOTICE_LIMIT_REACHED : 82,
MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_LOCKED : 83,
MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_DELETED : 84,
MAIL_TYPE_VIDEO_SERVICE_NOTICE_UPGRADE_OFFER : 85,
MAIL_TYPE_ACCOUNT_REACTIVE_CONFIRM : 86,
MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD : 110,
MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD_SUCCESS : 111,
MAIL_TYPE_SYSTEM_USER_NEW_PASSWORD : 112,
MAIL_TYPE_SYSTEM_USER_CREDENTIALS_SAVED : 113,
};

var KalturaMediaEntryOrderBy = module.exports.KalturaMediaEntryOrderBy = {
MEDIA_TYPE_ASC : "+mediaType",
MEDIA_TYPE_DESC : "-mediaType",
PLAYS_ASC : "+plays",
PLAYS_DESC : "-plays",
VIEWS_ASC : "+views",
VIEWS_DESC : "-views",
DURATION_ASC : "+duration",
DURATION_DESC : "-duration",
MS_DURATION_ASC : "+msDuration",
MS_DURATION_DESC : "-msDuration",
NAME_ASC : "+name",
NAME_DESC : "-name",
MODERATION_COUNT_ASC : "+moderationCount",
MODERATION_COUNT_DESC : "-moderationCount",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
RANK_ASC : "+rank",
RANK_DESC : "-rank",
START_DATE_ASC : "+startDate",
START_DATE_DESC : "-startDate",
END_DATE_ASC : "+endDate",
END_DATE_DESC : "-endDate",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaMediaFlavorParamsOrderBy = module.exports.KalturaMediaFlavorParamsOrderBy = {
};

var KalturaMediaFlavorParamsOutputOrderBy = module.exports.KalturaMediaFlavorParamsOutputOrderBy = {
};

var KalturaMediaInfoOrderBy = module.exports.KalturaMediaInfoOrderBy = {
};

var KalturaMediaType = module.exports.KalturaMediaType = {
VIDEO : 1,
IMAGE : 2,
AUDIO : 5,
LIVE_STREAM_FLASH : 201,
LIVE_STREAM_WINDOWS_MEDIA : 202,
LIVE_STREAM_REAL_MEDIA : 203,
LIVE_STREAM_QUICKTIME : 204,
};

var KalturaMetadataObjectType = module.exports.KalturaMetadataObjectType = {
ENTRY : "1",
AD_CUE_POINT : "adCuePointMetadata.AdCuePoint",
CODE_CUE_POINT : "codeCuePointMetadata.CodeCuePoint",
};

var KalturaMetadataOrderBy = module.exports.KalturaMetadataOrderBy = {
METADATA_PROFILE_VERSION_ASC : "+metadataProfileVersion",
METADATA_PROFILE_VERSION_DESC : "-metadataProfileVersion",
VERSION_ASC : "+version",
VERSION_DESC : "-version",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaMetadataProfileCreateMode = module.exports.KalturaMetadataProfileCreateMode = {
API : 1,
KMC : 2,
};

var KalturaMetadataProfileOrderBy = module.exports.KalturaMetadataProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaMetadataProfileStatus = module.exports.KalturaMetadataProfileStatus = {
ACTIVE : 1,
DEPRECATED : 2,
TRANSFORMING : 3,
};

var KalturaMetadataStatus = module.exports.KalturaMetadataStatus = {
VALID : 1,
INVALID : 2,
DELETED : 3,
};

var KalturaMixEntryOrderBy = module.exports.KalturaMixEntryOrderBy = {
PLAYS_ASC : "+plays",
PLAYS_DESC : "-plays",
VIEWS_ASC : "+views",
VIEWS_DESC : "-views",
DURATION_ASC : "+duration",
DURATION_DESC : "-duration",
MS_DURATION_ASC : "+msDuration",
MS_DURATION_DESC : "-msDuration",
NAME_ASC : "+name",
NAME_DESC : "-name",
MODERATION_COUNT_ASC : "+moderationCount",
MODERATION_COUNT_DESC : "-moderationCount",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
RANK_ASC : "+rank",
RANK_DESC : "-rank",
START_DATE_ASC : "+startDate",
START_DATE_DESC : "-startDate",
END_DATE_ASC : "+endDate",
END_DATE_DESC : "-endDate",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaModerationFlagStatus = module.exports.KalturaModerationFlagStatus = {
PENDING : 1,
MODERATED : 2,
};

var KalturaModerationFlagType = module.exports.KalturaModerationFlagType = {
SEXUAL_CONTENT : 1,
VIOLENT_REPULSIVE : 2,
HARMFUL_DANGEROUS : 3,
SPAM_COMMERCIALS : 4,
};

var KalturaModerationObjectType = module.exports.KalturaModerationObjectType = {
ENTRY : 2,
USER : 3,
};

var KalturaNdnDistributionProfileOrderBy = module.exports.KalturaNdnDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaNdnDistributionProviderOrderBy = module.exports.KalturaNdnDistributionProviderOrderBy = {
};

var KalturaNotificationObjectType = module.exports.KalturaNotificationObjectType = {
ENTRY : 1,
KSHOW : 2,
USER : 3,
BATCH_JOB : 4,
};

var KalturaNotificationOrderBy = module.exports.KalturaNotificationOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
PROCESSOR_EXPIRATION_ASC : "+processorExpiration",
PROCESSOR_EXPIRATION_DESC : "-processorExpiration",
EXECUTION_ATTEMPTS_ASC : "+executionAttempts",
EXECUTION_ATTEMPTS_DESC : "-executionAttempts",
LOCK_VERSION_ASC : "+lockVersion",
LOCK_VERSION_DESC : "-lockVersion",
};

var KalturaNotificationStatus = module.exports.KalturaNotificationStatus = {
PENDING : 1,
SENT : 2,
ERROR : 3,
SHOULD_RESEND : 4,
ERROR_RESENDING : 5,
SENT_SYNCH : 6,
QUEUED : 7,
};

var KalturaNotificationType = module.exports.KalturaNotificationType = {
ENTRY_ADD : 1,
ENTR_UPDATE_PERMISSIONS : 2,
ENTRY_DELETE : 3,
ENTRY_BLOCK : 4,
ENTRY_UPDATE : 5,
ENTRY_UPDATE_THUMBNAIL : 6,
ENTRY_UPDATE_MODERATION : 7,
USER_ADD : 21,
USER_BANNED : 26,
};

var KalturaNullableBoolean = module.exports.KalturaNullableBoolean = {
NULL_VALUE : -1,
FALSE_VALUE : 0,
TRUE_VALUE : 1,
};

var KalturaPartnerGroupType = module.exports.KalturaPartnerGroupType = {
PUBLISHER : 1,
VAR_GROUP : 2,
GROUP : 3,
};

var KalturaPartnerOrderBy = module.exports.KalturaPartnerOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
NAME_ASC : "+name",
NAME_DESC : "-name",
WEBSITE_ASC : "+website",
WEBSITE_DESC : "-website",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
ADMIN_NAME_ASC : "+adminName",
ADMIN_NAME_DESC : "-adminName",
ADMIN_EMAIL_ASC : "+adminEmail",
ADMIN_EMAIL_DESC : "-adminEmail",
STATUS_ASC : "+status",
STATUS_DESC : "-status",
};

var KalturaPartnerStatus = module.exports.KalturaPartnerStatus = {
ACTIVE : 1,
BLOCKED : 2,
FULL_BLOCK : 3,
};

var KalturaPartnerType = module.exports.KalturaPartnerType = {
KMC : 1,
WIKI : 100,
WORDPRESS : 101,
DRUPAL : 102,
DEKIWIKI : 103,
MOODLE : 104,
COMMUNITY_EDITION : 105,
JOOMLA : 106,
BLACKBOARD : 107,
SAKAI : 108,
};

var KalturaPdfFlavorParamsOrderBy = module.exports.KalturaPdfFlavorParamsOrderBy = {
};

var KalturaPdfFlavorParamsOutputOrderBy = module.exports.KalturaPdfFlavorParamsOutputOrderBy = {
};

var KalturaPermissionItemOrderBy = module.exports.KalturaPermissionItemOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaPermissionItemType = module.exports.KalturaPermissionItemType = {
API_ACTION_ITEM : "kApiActionPermissionItem",
API_PARAMETER_ITEM : "kApiParameterPermissionItem",
};

var KalturaPermissionOrderBy = module.exports.KalturaPermissionOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
NAME_ASC : "+name",
NAME_DESC : "-name",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaPermissionStatus = module.exports.KalturaPermissionStatus = {
ACTIVE : 1,
BLOCKED : 2,
DELETED : 3,
};

var KalturaPermissionType = module.exports.KalturaPermissionType = {
NORMAL : 1,
SPECIAL_FEATURE : 2,
PLUGIN : 3,
PARTNER_GROUP : 4,
};

var KalturaPlayableEntryOrderBy = module.exports.KalturaPlayableEntryOrderBy = {
PLAYS_ASC : "+plays",
PLAYS_DESC : "-plays",
VIEWS_ASC : "+views",
VIEWS_DESC : "-views",
DURATION_ASC : "+duration",
DURATION_DESC : "-duration",
MS_DURATION_ASC : "+msDuration",
MS_DURATION_DESC : "-msDuration",
NAME_ASC : "+name",
NAME_DESC : "-name",
MODERATION_COUNT_ASC : "+moderationCount",
MODERATION_COUNT_DESC : "-moderationCount",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
RANK_ASC : "+rank",
RANK_DESC : "-rank",
START_DATE_ASC : "+startDate",
START_DATE_DESC : "-startDate",
END_DATE_ASC : "+endDate",
END_DATE_DESC : "-endDate",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaPlaylistOrderBy = module.exports.KalturaPlaylistOrderBy = {
NAME_ASC : "+name",
NAME_DESC : "-name",
MODERATION_COUNT_ASC : "+moderationCount",
MODERATION_COUNT_DESC : "-moderationCount",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
RANK_ASC : "+rank",
RANK_DESC : "-rank",
START_DATE_ASC : "+startDate",
START_DATE_DESC : "-startDate",
END_DATE_ASC : "+endDate",
END_DATE_DESC : "-endDate",
PARTNER_SORT_VALUE_ASC : "+partnerSortValue",
PARTNER_SORT_VALUE_DESC : "-partnerSortValue",
};

var KalturaPlaylistType = module.exports.KalturaPlaylistType = {
DYNAMIC : 10,
STATIC_LIST : 3,
EXTERNAL : 101,
};

var KalturaPodcastDistributionProfileOrderBy = module.exports.KalturaPodcastDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaPodcastDistributionProviderOrderBy = module.exports.KalturaPodcastDistributionProviderOrderBy = {
};

var KalturaRemoteDropFolderOrderBy = module.exports.KalturaRemoteDropFolderOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
NAME_ASC : "+name",
NAME_DESC : "-name",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaReportOrderBy = module.exports.KalturaReportOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaReportType = module.exports.KalturaReportType = {
TOP_CONTENT : 1,
CONTENT_DROPOFF : 2,
CONTENT_INTERACTIONS : 3,
MAP_OVERLAY : 4,
TOP_CONTRIBUTORS : 5,
TOP_SYNDICATION : 6,
CONTENT_CONTRIBUTIONS : 7,
WIDGETS_STATS : 8,
};

var KalturaSchemaType = module.exports.KalturaSchemaType = {
SYNDICATION : "syndication",
SERVE_API : "cuePoint.serveAPI",
INGEST_API : "cuePoint.ingestAPI",
BULK_UPLOAD_XML : "bulkUploadXml.bulkUploadXML",
BULK_UPLOAD_RESULT_XML : "bulkUploadXml.bulkUploadResultXML",
DROP_FOLDER_XML : "dropFolderXmlBulkUpload.dropFolderXml",
};

var KalturaScpDropFolderOrderBy = module.exports.KalturaScpDropFolderOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
NAME_ASC : "+name",
NAME_DESC : "-name",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaSearchConditionComparison = module.exports.KalturaSearchConditionComparison = {
EQUEL : 1,
GREATER_THAN : 2,
GREATER_THAN_OR_EQUEL : 3,
LESS_THAN : 4,
LESS_THAN_OR_EQUEL : 5,
};

var KalturaSearchOperatorType = module.exports.KalturaSearchOperatorType = {
SEARCH_AND : 1,
SEARCH_OR : 2,
};

var KalturaSearchProviderType = module.exports.KalturaSearchProviderType = {
FLICKR : 3,
YOUTUBE : 4,
MYSPACE : 7,
PHOTOBUCKET : 8,
JAMENDO : 9,
CCMIXTER : 10,
NYPL : 11,
CURRENT : 12,
MEDIA_COMMONS : 13,
KALTURA : 20,
KALTURA_USER_CLIPS : 21,
ARCHIVE_ORG : 22,
KALTURA_PARTNER : 23,
METACAFE : 24,
SEARCH_PROXY : 28,
PARTNER_SPECIFIC : 100,
};

var KalturaSessionType = module.exports.KalturaSessionType = {
USER : 0,
ADMIN : 2,
};

var KalturaSftpDropFolderOrderBy = module.exports.KalturaSftpDropFolderOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
NAME_ASC : "+name",
NAME_DESC : "-name",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaShortLinkOrderBy = module.exports.KalturaShortLinkOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
EXPIRES_AT_ASC : "+expiresAt",
EXPIRES_AT_DESC : "-expiresAt",
};

var KalturaShortLinkStatus = module.exports.KalturaShortLinkStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

var KalturaSiteRestrictionType = module.exports.KalturaSiteRestrictionType = {
RESTRICT_SITE_LIST : 0,
ALLOW_SITE_LIST : 1,
};

var KalturaSourceType = module.exports.KalturaSourceType = {
FILE : "1",
WEBCAM : "2",
URL : "5",
SEARCH_PROVIDER : "6",
AKAMAI_LIVE : "29",
MANUAL_LIVE_STREAM : "30",
};

var KalturaSshDropFolderOrderBy = module.exports.KalturaSshDropFolderOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
NAME_ASC : "+name",
NAME_DESC : "-name",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaStatsEventType = module.exports.KalturaStatsEventType = {
WIDGET_LOADED : 1,
MEDIA_LOADED : 2,
PLAY : 3,
PLAY_REACHED_25 : 4,
PLAY_REACHED_50 : 5,
PLAY_REACHED_75 : 6,
PLAY_REACHED_100 : 7,
OPEN_EDIT : 8,
OPEN_VIRAL : 9,
OPEN_DOWNLOAD : 10,
OPEN_REPORT : 11,
BUFFER_START : 12,
BUFFER_END : 13,
OPEN_FULL_SCREEN : 14,
CLOSE_FULL_SCREEN : 15,
REPLAY : 16,
SEEK : 17,
OPEN_UPLOAD : 18,
SAVE_PUBLISH : 19,
CLOSE_EDITOR : 20,
PRE_BUMPER_PLAYED : 21,
POST_BUMPER_PLAYED : 22,
BUMPER_CLICKED : 23,
PREROLL_STARTED : 24,
MIDROLL_STARTED : 25,
POSTROLL_STARTED : 26,
OVERLAY_STARTED : 27,
PREROLL_CLICKED : 28,
MIDROLL_CLICKED : 29,
POSTROLL_CLICKED : 30,
OVERLAY_CLICKED : 31,
PREROLL_25 : 32,
PREROLL_50 : 33,
PREROLL_75 : 34,
MIDROLL_25 : 35,
MIDROLL_50 : 36,
MIDROLL_75 : 37,
POSTROLL_25 : 38,
POSTROLL_50 : 39,
POSTROLL_75 : 40,
};

var KalturaStatsKmcEventType = module.exports.KalturaStatsKmcEventType = {
CONTENT_PAGE_VIEW : 1001,
CONTENT_ADD_PLAYLIST : 1010,
CONTENT_EDIT_PLAYLIST : 1011,
CONTENT_DELETE_PLAYLIST : 1012,
CONTENT_DELETE_ITEM : 1058,
CONTENT_DELETE_MIX : 1059,
CONTENT_EDIT_ENTRY : 1013,
CONTENT_CHANGE_THUMBNAIL : 1014,
CONTENT_ADD_TAGS : 1015,
CONTENT_REMOVE_TAGS : 1016,
CONTENT_ADD_ADMIN_TAGS : 1017,
CONTENT_REMOVE_ADMIN_TAGS : 1018,
CONTENT_DOWNLOAD : 1019,
CONTENT_APPROVE_MODERATION : 1020,
CONTENT_REJECT_MODERATION : 1021,
CONTENT_BULK_UPLOAD : 1022,
CONTENT_ADMIN_KCW_UPLOAD : 1023,
CONTENT_CONTENT_GO_TO_PAGE : 1057,
CONTENT_ENTRY_DRILLDOWN : 1088,
CONTENT_OPEN_PREVIEW_AND_EMBED : 1089,
ACCOUNT_CHANGE_PARTNER_INFO : 1030,
ACCOUNT_CHANGE_LOGIN_INFO : 1031,
ACCOUNT_CONTACT_US_USAGE : 1032,
ACCOUNT_UPDATE_SERVER_SETTINGS : 1033,
ACCOUNT_ACCOUNT_OVERVIEW : 1034,
ACCOUNT_ACCESS_CONTROL : 1035,
ACCOUNT_TRANSCODING_SETTINGS : 1036,
ACCOUNT_ACCOUNT_UPGRADE : 1037,
ACCOUNT_SAVE_SERVER_SETTINGS : 1038,
ACCOUNT_ACCESS_CONTROL_DELETE : 1039,
ACCOUNT_SAVE_TRANSCODING_SETTINGS : 1040,
LOGIN : 1041,
DASHBOARD_IMPORT_CONTENT : 1042,
DASHBOARD_UPDATE_CONTENT : 1043,
DASHBOARD_ACCOUNT_CONTACT_US : 1044,
DASHBOARD_VIEW_REPORTS : 1045,
DASHBOARD_EMBED_PLAYER : 1046,
DASHBOARD_EMBED_PLAYLIST : 1047,
DASHBOARD_CUSTOMIZE_PLAYERS : 1048,
APP_STUDIO_NEW_PLAYER_SINGLE_VIDEO : 1050,
APP_STUDIO_NEW_PLAYER_PLAYLIST : 1051,
APP_STUDIO_NEW_PLAYER_MULTI_TAB_PLAYLIST : 1052,
APP_STUDIO_EDIT_PLAYER_SINGLE_VIDEO : 1053,
APP_STUDIO_EDIT_PLAYER_PLAYLIST : 1054,
APP_STUDIO_EDIT_PLAYER_MULTI_TAB_PLAYLIST : 1055,
APP_STUDIO_DUPLICATE_PLAYER : 1056,
REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_TAB : 1070,
REPORTS_AND_ANALYTICS_CONTENT_REPORTS_TAB : 1071,
REPORTS_AND_ANALYTICS_USERS_AND_COMMUNITY_REPORTS_TAB : 1072,
REPORTS_AND_ANALYTICS_TOP_CONTRIBUTORS : 1073,
REPORTS_AND_ANALYTICS_MAP_OVERLAYS : 1074,
REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS : 1075,
REPORTS_AND_ANALYTICS_TOP_CONTENT : 1076,
REPORTS_AND_ANALYTICS_CONTENT_DROPOFF : 1077,
REPORTS_AND_ANALYTICS_CONTENT_INTERACTIONS : 1078,
REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS : 1079,
REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN : 1080,
REPORTS_AND_ANALYTICS_CONTENT_DRILL_DOWN_INTERACTION : 1081,
REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS_DRILLDOWN : 1082,
REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN_DROPOFF : 1083,
REPORTS_AND_ANALYTICS_MAP_OVERLAYS_DRILLDOWN : 1084,
REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS_DRILL_DOWN : 1085,
REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_MONTHLY : 1086,
REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_YEARLY : 1087,
};

var KalturaStorageProfileDeliveryStatus = module.exports.KalturaStorageProfileDeliveryStatus = {
ACTIVE : 1,
BLOCKED : 2,
};

var KalturaStorageProfileOrderBy = module.exports.KalturaStorageProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaStorageProfileProtocol = module.exports.KalturaStorageProfileProtocol = {
KALTURA_DC : 0,
FTP : 1,
SCP : 2,
SFTP : 3,
S3 : 6,
};

var KalturaStorageProfileStatus = module.exports.KalturaStorageProfileStatus = {
DISABLED : 1,
AUTOMATIC : 2,
MANUAL : 3,
};

var KalturaStorageServePriority = module.exports.KalturaStorageServePriority = {
KALTURA_ONLY : 1,
KALTURA_FIRST : 2,
EXTERNAL_FIRST : 3,
EXTERNAL_ONLY : 4,
};

var KalturaSwfFlavorParamsOrderBy = module.exports.KalturaSwfFlavorParamsOrderBy = {
};

var KalturaSwfFlavorParamsOutputOrderBy = module.exports.KalturaSwfFlavorParamsOutputOrderBy = {
};

var KalturaSynacorHboDistributionProfileOrderBy = module.exports.KalturaSynacorHboDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaSynacorHboDistributionProviderOrderBy = module.exports.KalturaSynacorHboDistributionProviderOrderBy = {
};

var KalturaSyndicationDistributionProfileOrderBy = module.exports.KalturaSyndicationDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaSyndicationDistributionProviderOrderBy = module.exports.KalturaSyndicationDistributionProviderOrderBy = {
};

var KalturaSyndicationFeedStatus = module.exports.KalturaSyndicationFeedStatus = {
DELETED : -1,
ACTIVE : 1,
};

var KalturaSyndicationFeedType = module.exports.KalturaSyndicationFeedType = {
GOOGLE_VIDEO : 1,
YAHOO : 2,
ITUNES : 3,
TUBE_MOGUL : 4,
KALTURA : 5,
KALTURA_XSLT : 6,
};

var KalturaSystemPartnerLimitType = module.exports.KalturaSystemPartnerLimitType = {
ENTRIES : "ENTRIES",
MONTHLY_STREAM_ENTRIES : "MONTHLY_STREAM_ENTRIES",
MONTHLY_BANDWIDTH : "MONTHLY_BANDWIDTH",
PUBLISHERS : "PUBLISHERS",
ADMIN_LOGIN_USERS : "ADMIN_LOGIN_USERS",
LOGIN_USERS : "LOGIN_USERS",
USER_LOGIN_ATTEMPTS : "USER_LOGIN_ATTEMPTS",
BULK_SIZE : "BULK_SIZE",
MONTHLY_STORAGE : "MONTHLY_STORAGE",
MONTHLY_STORAGE_AND_BANDWIDTH : "MONTHLY_STORAGE_AND_BANDWIDTH",
END_USERS : "END_USERS",
};

var KalturaTVComDistributionProfileOrderBy = module.exports.KalturaTVComDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaTVComDistributionProviderOrderBy = module.exports.KalturaTVComDistributionProviderOrderBy = {
};

var KalturaThumbAssetOrderBy = module.exports.KalturaThumbAssetOrderBy = {
SIZE_ASC : "+size",
SIZE_DESC : "-size",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
DELETED_AT_ASC : "+deletedAt",
DELETED_AT_DESC : "-deletedAt",
};

var KalturaThumbAssetStatus = module.exports.KalturaThumbAssetStatus = {
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
};

var KalturaThumbCropType = module.exports.KalturaThumbCropType = {
RESIZE : 1,
RESIZE_WITH_PADDING : 2,
CROP : 3,
CROP_FROM_TOP : 4,
};

var KalturaThumbParamsOrderBy = module.exports.KalturaThumbParamsOrderBy = {
};

var KalturaThumbParamsOutputOrderBy = module.exports.KalturaThumbParamsOutputOrderBy = {
};

var KalturaTimeWarnerDistributionProfileOrderBy = module.exports.KalturaTimeWarnerDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaTimeWarnerDistributionProviderOrderBy = module.exports.KalturaTimeWarnerDistributionProviderOrderBy = {
};

var KalturaTrackEntryEventType = module.exports.KalturaTrackEntryEventType = {
UPLOADED_FILE : 1,
WEBCAM_COMPLETED : 2,
IMPORT_STARTED : 3,
ADD_ENTRY : 4,
UPDATE_ENTRY : 5,
DELETED_ENTRY : 6,
};

var KalturaTubeMogulSyndicationFeedCategories = module.exports.KalturaTubeMogulSyndicationFeedCategories = {
ARTS_AND_ANIMATION : "Arts &amp; Animation",
COMEDY : "Comedy",
ENTERTAINMENT : "Entertainment",
MUSIC : "Music",
NEWS_AND_BLOGS : "News &amp; Blogs",
SCIENCE_AND_TECHNOLOGY : "Science &amp; Technology",
SPORTS : "Sports",
TRAVEL_AND_PLACES : "Travel &amp; Places",
VIDEO_GAMES : "Video Games",
ANIMALS_AND_PETS : "Animals &amp; Pets",
AUTOS : "Autos",
VLOGS_PEOPLE : "Vlogs &amp; People",
HOW_TO_INSTRUCTIONAL_DIY : "How To/Instructional/DIY",
COMMERCIALS_PROMOTIONAL : "Commercials/Promotional",
FAMILY_AND_KIDS : "Family &amp; Kids",
};

var KalturaTubeMogulSyndicationFeedOrderBy = module.exports.KalturaTubeMogulSyndicationFeedOrderBy = {
PLAYLIST_ID_ASC : "+playlistId",
PLAYLIST_ID_DESC : "-playlistId",
NAME_ASC : "+name",
NAME_DESC : "-name",
TYPE_ASC : "+type",
TYPE_DESC : "-type",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaUiConfAdminOrderBy = module.exports.KalturaUiConfAdminOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaUiConfCreationMode = module.exports.KalturaUiConfCreationMode = {
WIZARD : 2,
ADVANCED : 3,
};

var KalturaUiConfObjType = module.exports.KalturaUiConfObjType = {
PLAYER : 1,
CONTRIBUTION_WIZARD : 2,
SIMPLE_EDITOR : 3,
ADVANCED_EDITOR : 4,
PLAYLIST : 5,
APP_STUDIO : 6,
KRECORD : 7,
PLAYER_V3 : 8,
KMC_ACCOUNT : 9,
KMC_ANALYTICS : 10,
KMC_CONTENT : 11,
KMC_DASHBOARD : 12,
KMC_LOGIN : 13,
PLAYER_SL : 14,
CLIENTSIDE_ENCODER : 15,
KMC_GENERAL : 16,
KMC_ROLES_AND_PERMISSIONS : 17,
CLIPPER : 18,
};

var KalturaUiConfOrderBy = module.exports.KalturaUiConfOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaUploadErrorCode = module.exports.KalturaUploadErrorCode = {
NO_ERROR : 0,
GENERAL_ERROR : 1,
PARTIAL_UPLOAD : 2,
};

var KalturaUploadTokenOrderBy = module.exports.KalturaUploadTokenOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaUploadTokenStatus = module.exports.KalturaUploadTokenStatus = {
PENDING : 0,
PARTIAL_UPLOAD : 1,
FULL_UPLOAD : 2,
CLOSED : 3,
TIMED_OUT : 4,
DELETED : 5,
};

var KalturaUserAgentRestrictionType = module.exports.KalturaUserAgentRestrictionType = {
RESTRICT_LIST : 0,
ALLOW_LIST : 1,
};

var KalturaUserLoginDataOrderBy = module.exports.KalturaUserLoginDataOrderBy = {
};

var KalturaUserOrderBy = module.exports.KalturaUserOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaUserRoleOrderBy = module.exports.KalturaUserRoleOrderBy = {
ID_ASC : "+id",
ID_DESC : "-id",
NAME_ASC : "+name",
NAME_DESC : "-name",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaUserRoleStatus = module.exports.KalturaUserRoleStatus = {
ACTIVE : 1,
BLOCKED : 2,
DELETED : 3,
};

var KalturaUserStatus = module.exports.KalturaUserStatus = {
BLOCKED : 0,
ACTIVE : 1,
DELETED : 2,
};

var KalturaUverseDistributionProfileOrderBy = module.exports.KalturaUverseDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaUverseDistributionProviderOrderBy = module.exports.KalturaUverseDistributionProviderOrderBy = {
};

var KalturaVerizonVcastDistributionProfileOrderBy = module.exports.KalturaVerizonVcastDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaVerizonVcastDistributionProviderOrderBy = module.exports.KalturaVerizonVcastDistributionProviderOrderBy = {
};

var KalturaVideoCodec = module.exports.KalturaVideoCodec = {
NONE : "",
VP6 : "vp6",
H263 : "h263",
H264 : "h264",
H264B : "h264b",
H264M : "h264m",
H264H : "h264h",
FLV : "flv",
MPEG4 : "mpeg4",
THEORA : "theora",
WMV2 : "wmv2",
WMV3 : "wmv3",
WVC1A : "wvc1a",
VP8 : "vp8",
MPEG2 : "mpeg2",
COPY : "copy",
};

var KalturaVirusFoundAction = module.exports.KalturaVirusFoundAction = {
NONE : 0,
DELETE : 1,
CLEAN_NONE : 2,
CLEAN_DELETE : 3,
};

var KalturaVirusScanEngineType = module.exports.KalturaVirusScanEngineType = {
};

var KalturaVirusScanJobResult = module.exports.KalturaVirusScanJobResult = {
SCAN_ERROR : 1,
FILE_IS_CLEAN : 2,
FILE_WAS_CLEANED : 3,
FILE_INFECTED : 4,
};

var KalturaVirusScanProfileOrderBy = module.exports.KalturaVirusScanProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaVirusScanProfileStatus = module.exports.KalturaVirusScanProfileStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

var KalturaWidgetOrderBy = module.exports.KalturaWidgetOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaWidgetSecurityType = module.exports.KalturaWidgetSecurityType = {
NONE : 1,
TIMEHASH : 2,
};

var KalturaYahooDistributionProfileOrderBy = module.exports.KalturaYahooDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaYahooDistributionProviderOrderBy = module.exports.KalturaYahooDistributionProviderOrderBy = {
};

var KalturaYahooSyndicationFeedAdultValues = module.exports.KalturaYahooSyndicationFeedAdultValues = {
ADULT : "adult",
NON_ADULT : "nonadult",
};

var KalturaYahooSyndicationFeedCategories = module.exports.KalturaYahooSyndicationFeedCategories = {
ACTION : "Action",
ART_AND_ANIMATION : "Art &amp; Animation",
ENTERTAINMENT_AND_TV : "Entertainment &amp; TV",
FOOD : "Food",
GAMES : "Games",
HOW_TO : "How-To",
MUSIC : "Music",
PEOPLE_AND_VLOGS : "People &amp; Vlogs",
SCIENCE_AND_ENVIRONMENT : "Science &amp; Environment",
TRANSPORTATION : "Transportation",
ANIMALS : "Animals",
COMMERCIALS : "Commercials",
FAMILY : "Family",
FUNNY_VIDEOS : "Funny Videos",
HEALTH_AND_BEAUTY : "Health &amp; Beauty",
MOVIES_AND_SHORTS : "Movies &amp; Shorts",
NEWS_AND_POLITICS : "News &amp; Politics",
PRODUCTS_AND_TECH : "Products &amp; Tech.",
SPORTS : "Sports",
TRAVEL : "Travel",
};

var KalturaYahooSyndicationFeedOrderBy = module.exports.KalturaYahooSyndicationFeedOrderBy = {
PLAYLIST_ID_ASC : "+playlistId",
PLAYLIST_ID_DESC : "-playlistId",
NAME_ASC : "+name",
NAME_DESC : "-name",
TYPE_ASC : "+type",
TYPE_DESC : "-type",
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
};

var KalturaYouTubeDistributionProfileOrderBy = module.exports.KalturaYouTubeDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaYouTubeDistributionProviderOrderBy = module.exports.KalturaYouTubeDistributionProviderOrderBy = {
};

var KalturaYoutubeApiDistributionProfileOrderBy = module.exports.KalturaYoutubeApiDistributionProfileOrderBy = {
CREATED_AT_ASC : "+createdAt",
CREATED_AT_DESC : "-createdAt",
UPDATED_AT_ASC : "+updatedAt",
UPDATED_AT_DESC : "-updatedAt",
};

var KalturaYoutubeApiDistributionProviderOrderBy = module.exports.KalturaYoutubeApiDistributionProviderOrderBy = {
};
