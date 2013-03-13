/*!
 * Copyright 2012 Sakai Foundation (SF) Licensed under the
 * Educational Community License, Version 2.0 (the 'License'); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an 'AS IS'
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var Fields = require('oae-config/lib/fields');

module.exports = {
    'title': 'OAE Kaltura Module',
    'kaltura': {
        'name': 'Kaltura storage backend settings',
        'description': 'Define the Kaltura backend storage settings',
        'elements': {
            'endpoint': new Fields.Text('Kaltura Endpoint URL', 'The Kaltura endpoint to integrate with.', 'http://www.kaltura.com', {'tenantOverride': true, 'suppress': true, 'globalAdminOnly': false}),
            'partner-id': new Fields.Text('Kaltura Partner ID', 'The Kaltura partner ID.', '', {'tenantOverride': true, 'suppress': true, 'globalAdminOnly': false}),
            'secret': new Fields.Text('Kaltura Secret', 'The Kaltura shared secret.', '', {'tenantOverride': true, 'suppress': true, 'globalAdminOnly': false}),
            'admin-secret': new Fields.Text('Kaltura Admin Secret', 'The Kaltura admin secret.', '', {'tenantOverride': true, 'suppress': true, 'globalAdminOnly': false}),
            'cdn': new Fields.Text('Kaltura CDN', 'The Kaltura CDN URL.', 'http://cdn.kaltura.com', {'tenantOverride': true, 'suppress': true, 'globalAdminOnly': false}),
            'session-length': new Fields.Text('Kaltura Session Length', 'The Kaltura session length in seconds.', '86400', {'tenantOverride': true, 'suppress': true, 'globalAdminOnly': false})
        }
    }
};
