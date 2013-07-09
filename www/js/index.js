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