exports.title = 'Map with offline image tiles overlay';

exports.run = function(UI, Map) {
    var win = UI.createWindow(exports.title);
    
    // Tiles can be generated with this: https://github.com/mbender74/MapTilesDownloader

    var map1 = Map.createView({
        userLocation: true,
        mapType: Map.NORMAL_TYPE, // could also be Map.NONE_TYPE
        animate: true,
        minZoom:14, 
        maxZoom:20,
        liteMode:true,
        region: {
            zoom:16,
            latitude: 49.54119,
            longitude: 7.33233,
            latitudeDelta: parseFloat((parseFloat(49.5487)-parseFloat(49.5300))/2),
            longitudeDelta: parseFloat((parseFloat(7.3453)-parseFloat(7.3170))/2),
        },
        offlineOverlay: {
            tilesPath:'/tiles',
            tileExtension:'jpg',
            tileSize:256,
            maxRegion: {
                minLat:49.5300,
                maxLat:49.5487,
                minLong:7.3170,
                maxLong:7.3453,
                maxZoom:20,
                minZoom:14
            }
		},
        height: Ti.UI.FILL,
        top: 0,
        left: 0,
        width: Ti.UI.FILL
    });
    
    win.add(map1);
};
