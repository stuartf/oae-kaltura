var PreviewProcessorAPI = require('oae-preview-processor');
var processor = require('./processor');

/**
 * Starts listening for new pieces of content that should be handled.
 */
module.exports = function(config, callback) {
    processor.init(config, function(err){
        PreviewProcessorAPI.registerProcessor('kaltura', processor);
        callback();
    });
};
