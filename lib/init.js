var API = require('./api');

/**
 * Starts listening for new pieces of content that should be handled.
 */
module.exports = function(config, callback) {
    API.registerMe(config, callback);
};
