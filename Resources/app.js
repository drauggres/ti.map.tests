var IOS = (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad');
var ANDROID = (Ti.Platform.osname === 'android');
var UI = require('ui');
var Map = require('ti.map');

//=====================================================================
// Rows
//=====================================================================
var rows = [
    { ...require('tests/multiMap') },
    { ...require('tests/annotations') },
    { ...require('tests/routes') },
    { ...require('tests/3d') },
    { ...require('tests/drawing') },
    { ...require('tests/drawing'), params: { withList: true } },
    { ...require('tests/lite') },
];

if (IOS) {
    rows.push(require('tests/camera'));
    rows.push(require('tests/properties'));
}

if (ANDROID && Map.isGooglePlayServicesAvailable() != Map.SUCCESS) {
        alert ("Google Play Services is not installed/updated/available");
} else {
    startUI();
}

function startUI() {
    UI.init(rows, function(e) {
        var item = rows[e.index]
        if (item && item.run) {
            item.run(UI, Map, item.params);
        }
    });
}
