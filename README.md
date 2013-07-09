# TestDrive-PhoneGap

> The TestDrive sample application provides you with a near blank template to get started with. It is great for learning and trying Kinvey, or to build your first application upon.

## Run It

### Install
This project makes use of the [PhoneGap CLI](https://github.com/mwbrooks/phonegap-cli). Make sure it is installed.

`npm install -g phonegap`

### Build
Replace `App Key` and `App Secret` (`js/index.js`) with your application credentials.

Next, depending on the platform you’re targeting, build the project.

* Android: `phonegap build android`
* iOS: `phonegap build ios`

## Functionality
This application demonstrates:

* Basic set-up for PhoneGap apps using Kinvey.
* Pinging the Service.

## Architecture
The starting point of this application is `www/index.html`. Here, you will find placeholders and hints on where to put your content, styles, and scripts. Code to connect your app with Kinvey is already inserted.

By default, the sample app includes a button to ping the Kinvey service. If you want to get rid of this functionality, simply remove `www/scripts/ping.js`, and delete the button HTML tag from `www/index.html`.

To learn more about the features PhoneGap provides, read the [PhoneGap Documentation](http://docs.phonegap.com/en/latest/index.html).