/**
 * Copyright 2013 Kinvey, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Common app functionality will be attached to the `app` namespace.
 */
var app = {
  /**
   * Application constructor.
   */
  initialize: function() {
    this.bindEvents();
  },

  /**
   * Bind event listeners.
   */
  bindEvents: function() {
    // Bind any events that are required on startup. Common events are: `load`,
    // `deviceready`, `offline`, and `online`.
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  /**
   * The deviceready event handler.
   */
  onDeviceReady: function() {
    // Initialize Kinvey. Paste your app key and secret below.
    var promise = Kinvey.init({
      appKey    : 'App Key',
      appSecret : 'App Secret'
    });
    promise.then(function(activeUser) {
      // The `Kinvey.init` function returns a promise which resolves to the
      // active user data (or `null` if there is no active user).

      // Your app is now connected to Kinvey.
    });
  }
};