/**
 * The Kaltura Client - this is the facade through which all service actions should be called.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
var util = require('util');
var kcb = require('./KalturaClientBase');
var kvo = require('./KalturaVO');
var ksvc = require('./KalturaServices');
var ktypes = require('./KalturaTypes');
function KalturaClient(config) {
  this.init(config);
};
module.exports.KalturaClient = KalturaClient;
util.inherits(KalturaClient, kcb.KalturaClientBase);
KalturaClient.prototype.apiVersion = "3.1.4";
module.exports.KalturaConfiguration = kcb.KalturaConfiguration;
/**
 * Add & Manage Access Controls
 * @param ksvc.KalturaAccessControlService
 */
KalturaClient.prototype.accessControl = null;
/**
 * Manage details for the administrative user
 * @param ksvc.KalturaAdminUserService
 */
KalturaClient.prototype.adminUser = null;
/**
 * Base Entry Service
 * @param ksvc.KalturaBaseEntryService
 */
KalturaClient.prototype.baseEntry = null;
/**
 * Bulk upload service is used to upload & manage bulk uploads using CSV files
 * @param ksvc.KalturaBulkUploadService
 */
KalturaClient.prototype.bulkUpload = null;
/**
 * Add & Manage Categories
 * @param ksvc.KalturaCategoryService
 */
KalturaClient.prototype.category = null;
/**
 * Manage the connection between Conversion Profiles and Asset Params
 * @param ksvc.KalturaConversionProfileAssetParamsService
 */
KalturaClient.prototype.conversionProfileAssetParams = null;
/**
 * Add & Manage Conversion Profiles
 * @param ksvc.KalturaConversionProfileService
 */
KalturaClient.prototype.conversionProfile = null;
/**
 * Data service lets you manage data content (textual content)
 * @param ksvc.KalturaDataService
 */
KalturaClient.prototype.data = null;
/**
 * Document service
 *  DEPRECATED
 * @param ksvc.KalturaDocumentService
 */
KalturaClient.prototype.document = null;
/**
 * EmailIngestionProfile service lets you manage email ingestion profile records
 * @param ksvc.KalturaEmailIngestionProfileService
 */
KalturaClient.prototype.EmailIngestionProfile = null;
/**
 * Retrieve information and invoke actions on Flavor Asset
 * @param ksvc.KalturaFlavorAssetService
 */
KalturaClient.prototype.flavorAsset = null;
/**
 * Add & Manage Flavor Params
 * @param ksvc.KalturaFlavorParamsService
 */
KalturaClient.prototype.flavorParams = null;
/**
 * Live Stream service lets you manage live stream channels
 * @param ksvc.KalturaLiveStreamService
 */
KalturaClient.prototype.liveStream = null;
/**
 * Media Info service
 * @param ksvc.KalturaMediaInfoService
 */
KalturaClient.prototype.mediaInfo = null;
/**
 * Media service lets you upload and manage media files (images / videos & audio)
 * @param ksvc.KalturaMediaService
 */
KalturaClient.prototype.media = null;
/**
 * A Mix is an XML unique format invented by Kaltura, it allows the user to create a mix of videos and images, in and out points, transitions, text overlays, soundtrack, effects and much more...
 *  Mixing service lets you create a new mix, manage its metadata and make basic manipulations.   
 * @param ksvc.KalturaMixingService
 */
KalturaClient.prototype.mixing = null;
/**
 * Notification Service
 * @param ksvc.KalturaNotificationService
 */
KalturaClient.prototype.notification = null;
/**
 * partner service allows you to change/manage your partner personal details and settings as well
 * @param ksvc.KalturaPartnerService
 */
KalturaClient.prototype.partner = null;
/**
 * PermissionItem service lets you create and manage permission items
 * @param ksvc.KalturaPermissionItemService
 */
KalturaClient.prototype.permissionItem = null;
/**
 * Permission service lets you create and manage user permissions
 * @param ksvc.KalturaPermissionService
 */
KalturaClient.prototype.permission = null;
/**
 * Playlist service lets you create,manage and play your playlists
 *  Playlists could be static (containing a fixed list of entries) or dynamic (baseed on a filter)
 * @param ksvc.KalturaPlaylistService
 */
KalturaClient.prototype.playlist = null;
/**
 * api for getting reports data by the report type and some inputFilter
 * @param ksvc.KalturaReportService
 */
KalturaClient.prototype.report = null;
/**
 * Expose the schema definitions for syndication MRSS, bulk upload XML and other schema types. 
 *  
 * @param ksvc.KalturaSchemaService
 */
KalturaClient.prototype.schema = null;
/**
 * Search service allows you to search for media in various media providers
 *  This service is being used mostly by the CW component
 * @param ksvc.KalturaSearchService
 */
KalturaClient.prototype.search = null;
/**
 * Session service
 * @param ksvc.KalturaSessionService
 */
KalturaClient.prototype.session = null;
/**
 * Stats Service
 * @param ksvc.KalturaStatsService
 */
KalturaClient.prototype.stats = null;
/**
 * Storage Profiles service
 * @param ksvc.KalturaStorageProfileService
 */
KalturaClient.prototype.storageProfile = null;
/**
 * Add & Manage Syndication Feeds
 * @param ksvc.KalturaSyndicationFeedService
 */
KalturaClient.prototype.syndicationFeed = null;
/**
 * System service is used for internal system helpers & to retrieve system level information
 * @param ksvc.KalturaSystemService
 */
KalturaClient.prototype.system = null;
/**
 * Retrieve information and invoke actions on Thumb Asset
 * @param ksvc.KalturaThumbAssetService
 */
KalturaClient.prototype.thumbAsset = null;
/**
 * Add & Manage Thumb Params
 * @param ksvc.KalturaThumbParamsService
 */
KalturaClient.prototype.thumbParams = null;
/**
 * UiConf service lets you create and manage your UIConfs for the various flash components
 *  This service is used by the KMC-ApplicationStudio
 * @param ksvc.KalturaUiConfService
 */
KalturaClient.prototype.uiConf = null;
/**
 * 
 * @param ksvc.KalturaUploadService
 */
KalturaClient.prototype.upload = null;
/**
 * 
 * @param ksvc.KalturaUploadTokenService
 */
KalturaClient.prototype.uploadToken = null;
/**
 * UserRole service lets you create and manage user roles
 * @param ksvc.KalturaUserRoleService
 */
KalturaClient.prototype.userRole = null;
/**
 * Manage partner users on Kaltura's side
 *  The userId in kaltura is the unique Id in the partner's system, and the [partnerId,Id] couple are unique key in kaltura's DB
 * @param ksvc.KalturaUserService
 */
KalturaClient.prototype.user = null;
/**
 * widget service for full widget management
 * @param ksvc.KalturaWidgetService
 */
KalturaClient.prototype.widget = null;
/**
 * Internal Service is used for actions that are used internally in Kaltura applications and might be changed in the future without any notice.
 * @param ksvc.KalturaXInternalService
 */
KalturaClient.prototype.xInternal = null;
/**
 * Metadata service
 * @param ksvc.KalturaMetadataService
 */
KalturaClient.prototype.metadata = null;
/**
 * Metadata Profile service
 * @param ksvc.KalturaMetadataProfileService
 */
KalturaClient.prototype.metadataProfile = null;
/**
 * 
 * @param ksvc.KalturaMetadataBatchService
 */
KalturaClient.prototype.metadataBatch = null;
/**
 * Document service lets you upload and manage document files
 * @param ksvc.KalturaDocumentsService
 */
KalturaClient.prototype.documents = null;
/**
 * System user service
 * @param ksvc.KalturaFileSyncService
 */
KalturaClient.prototype.fileSync = null;
/**
 * System partner service
 * @param ksvc.KalturaSystemPartnerService
 */
KalturaClient.prototype.systemPartner = null;
/**
 * Flavor Params Output service
 * @param ksvc.KalturaFlavorParamsOutputService
 */
KalturaClient.prototype.flavorParamsOutput = null;
/**
 * Thumb Params Output service
 * @param ksvc.KalturaThumbParamsOutputService
 */
KalturaClient.prototype.thumbParamsOutput = null;
/**
 * Entry Admin service
 * @param ksvc.KalturaEntryAdminService
 */
KalturaClient.prototype.entryAdmin = null;
/**
 * UiConf Admin service
 * @param ksvc.KalturaUiConfAdminService
 */
KalturaClient.prototype.uiConfAdmin = null;
/**
 * 
 * @param ksvc.KalturaReportAdminService
 */
KalturaClient.prototype.reportAdmin = null;
/**
 * Internal Tools Service
 *  
 * @param ksvc.KalturaKalturaInternalToolsService
 */
KalturaClient.prototype.KalturaInternalTools = null;
/**
 * Internal Tools Service
 *  
 * @param ksvc.KalturaKalturaInternalToolsSystemHelperService
 */
KalturaClient.prototype.kalturaInternalToolsSystemHelper = null;
/**
 * Audit Trail service
 * @param ksvc.KalturaAuditTrailService
 */
KalturaClient.prototype.auditTrail = null;
/**
 * Virus scan profile service
 * @param ksvc.KalturaVirusScanProfileService
 */
KalturaClient.prototype.virusScanProfile = null;
/**
 * 
 * @param ksvc.KalturaVirusScanBatchService
 */
KalturaClient.prototype.virusScanBatch = null;
/**
 * Distribution Profile service
 * @param ksvc.KalturaDistributionProfileService
 */
KalturaClient.prototype.distributionProfile = null;
/**
 * Entry Distribution service
 * @param ksvc.KalturaEntryDistributionService
 */
KalturaClient.prototype.entryDistribution = null;
/**
 * Distribution Provider service
 * @param ksvc.KalturaDistributionProviderService
 */
KalturaClient.prototype.distributionProvider = null;
/**
 * Generic Distribution Provider service
 * @param ksvc.KalturaGenericDistributionProviderService
 */
KalturaClient.prototype.genericDistributionProvider = null;
/**
 * Generic Distribution Provider Actions service
 * @param ksvc.KalturaGenericDistributionProviderActionService
 */
KalturaClient.prototype.genericDistributionProviderAction = null;
/**
 * 
 * @param ksvc.KalturaContentDistributionBatchService
 */
KalturaClient.prototype.contentDistributionBatch = null;
/**
 * Cue Point service
 * @param ksvc.KalturaCuePointService
 */
KalturaClient.prototype.cuePoint = null;
/**
 * Short link service
 * @param ksvc.KalturaShortLinkService
 */
KalturaClient.prototype.shortLink = null;
/**
 * DropFolder service lets you create and manage drop folders
 * @param ksvc.KalturaDropFolderService
 */
KalturaClient.prototype.dropFolder = null;
/**
 * DropFolderFile service lets you create and manage drop folder files
 * @param ksvc.KalturaDropFolderFileService
 */
KalturaClient.prototype.dropFolderFile = null;
/**
 * Retrieve information and invoke actions on caption Asset
 * @param ksvc.KalturaCaptionAssetService
 */
KalturaClient.prototype.captionAsset = null;
/**
 * Add & Manage Caption Params
 * @param ksvc.KalturaCaptionParamsService
 */
KalturaClient.prototype.captionParams = null;
/**
 * Search caption asset items
 * @param ksvc.KalturaCaptionAssetItemService
 */
KalturaClient.prototype.captionAssetItem = null;
/**
 * Retrieve information and invoke actions on attachment Asset
 * @param ksvc.KalturaAttachmentAssetService
 */
KalturaClient.prototype.attachmentAsset = null;
/**
 * The client constructor.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
KalturaClient.prototype.init = function(config){
  //call the super constructor:
  kcb.KalturaClientBase.prototype.init.apply(this, arguments);
  //initialize client services:
  this.accessControl = new ksvc.KalturaAccessControlService(this);
  this.adminUser = new ksvc.KalturaAdminUserService(this);
  this.baseEntry = new ksvc.KalturaBaseEntryService(this);
  this.bulkUpload = new ksvc.KalturaBulkUploadService(this);
  this.category = new ksvc.KalturaCategoryService(this);
  this.conversionProfileAssetParams = new ksvc.KalturaConversionProfileAssetParamsService(this);
  this.conversionProfile = new ksvc.KalturaConversionProfileService(this);
  this.data = new ksvc.KalturaDataService(this);
  this.document = new ksvc.KalturaDocumentService(this);
  this.EmailIngestionProfile = new ksvc.KalturaEmailIngestionProfileService(this);
  this.flavorAsset = new ksvc.KalturaFlavorAssetService(this);
  this.flavorParams = new ksvc.KalturaFlavorParamsService(this);
  this.liveStream = new ksvc.KalturaLiveStreamService(this);
  this.mediaInfo = new ksvc.KalturaMediaInfoService(this);
  this.media = new ksvc.KalturaMediaService(this);
  this.mixing = new ksvc.KalturaMixingService(this);
  this.notification = new ksvc.KalturaNotificationService(this);
  this.partner = new ksvc.KalturaPartnerService(this);
  this.permissionItem = new ksvc.KalturaPermissionItemService(this);
  this.permission = new ksvc.KalturaPermissionService(this);
  this.playlist = new ksvc.KalturaPlaylistService(this);
  this.report = new ksvc.KalturaReportService(this);
  this.schema = new ksvc.KalturaSchemaService(this);
  this.search = new ksvc.KalturaSearchService(this);
  this.session = new ksvc.KalturaSessionService(this);
  this.stats = new ksvc.KalturaStatsService(this);
  this.storageProfile = new ksvc.KalturaStorageProfileService(this);
  this.syndicationFeed = new ksvc.KalturaSyndicationFeedService(this);
  this.system = new ksvc.KalturaSystemService(this);
  this.thumbAsset = new ksvc.KalturaThumbAssetService(this);
  this.thumbParams = new ksvc.KalturaThumbParamsService(this);
  this.uiConf = new ksvc.KalturaUiConfService(this);
  this.upload = new ksvc.KalturaUploadService(this);
  this.uploadToken = new ksvc.KalturaUploadTokenService(this);
  this.userRole = new ksvc.KalturaUserRoleService(this);
  this.user = new ksvc.KalturaUserService(this);
  this.widget = new ksvc.KalturaWidgetService(this);
  this.xInternal = new ksvc.KalturaXInternalService(this);
  this.metadata = new ksvc.KalturaMetadataService(this);
  this.metadataProfile = new ksvc.KalturaMetadataProfileService(this);
  this.metadataBatch = new ksvc.KalturaMetadataBatchService(this);
  this.documents = new ksvc.KalturaDocumentsService(this);
  this.fileSync = new ksvc.KalturaFileSyncService(this);
  this.systemPartner = new ksvc.KalturaSystemPartnerService(this);
  this.flavorParamsOutput = new ksvc.KalturaFlavorParamsOutputService(this);
  this.thumbParamsOutput = new ksvc.KalturaThumbParamsOutputService(this);
  this.entryAdmin = new ksvc.KalturaEntryAdminService(this);
  this.uiConfAdmin = new ksvc.KalturaUiConfAdminService(this);
  this.reportAdmin = new ksvc.KalturaReportAdminService(this);
  this.KalturaInternalTools = new ksvc.KalturaKalturaInternalToolsService(this);
  this.kalturaInternalToolsSystemHelper = new ksvc.KalturaKalturaInternalToolsSystemHelperService(this);
  this.auditTrail = new ksvc.KalturaAuditTrailService(this);
  this.virusScanProfile = new ksvc.KalturaVirusScanProfileService(this);
  this.virusScanBatch = new ksvc.KalturaVirusScanBatchService(this);
  this.distributionProfile = new ksvc.KalturaDistributionProfileService(this);
  this.entryDistribution = new ksvc.KalturaEntryDistributionService(this);
  this.distributionProvider = new ksvc.KalturaDistributionProviderService(this);
  this.genericDistributionProvider = new ksvc.KalturaGenericDistributionProviderService(this);
  this.genericDistributionProviderAction = new ksvc.KalturaGenericDistributionProviderActionService(this);
  this.contentDistributionBatch = new ksvc.KalturaContentDistributionBatchService(this);
  this.cuePoint = new ksvc.KalturaCuePointService(this);
  this.shortLink = new ksvc.KalturaShortLinkService(this);
  this.dropFolder = new ksvc.KalturaDropFolderService(this);
  this.dropFolderFile = new ksvc.KalturaDropFolderFileService(this);
  this.captionAsset = new ksvc.KalturaCaptionAssetService(this);
  this.captionParams = new ksvc.KalturaCaptionParamsService(this);
  this.captionAssetItem = new ksvc.KalturaCaptionAssetItemService(this);
  this.attachmentAsset = new ksvc.KalturaAttachmentAssetService(this);
}
