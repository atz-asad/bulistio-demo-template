var markers = [],
    map, marker_clusterer;

$(document).ready(function () {
    var l = !0,
        p = mapStyle,
        o = !0;
    if ($('#main-map').length) {
        map = L.map('main-map', {
            center: [45.931426295101, 16.020130352685],
            zoom: 13,
            maxZoom: 16,
            scrollWheelZoom: o,
            tap: !L.Browser.mobile
        });

        var t = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
            maxZoom: 22
        }).addTo(map);

        var s = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fal fa-home"></i></div><div class="marker-arrow"></div></div></div>',
            a = L.marker([45.7687561, 15.9999749], {
                icon: L.divIcon({
                    html: s,
                    className: 'open_steet_map_marker google_marker',
                    iconSize: [40, 46],
                    popupAnchor: [1, -35],
                    iconAnchor: [20, 46],
                })
            });

        a.bindPopup('<div class="product-default p-0"> <figure class="product-img"> <a href="listing-single.html" class="lazy-container ratio ratio-2-3"> <img class="lazyload" src="assets/images/placeholder.png" data-src="assets/images/product/pro-1.jpg" alt="Product"> </a></figure><div class="product-details"><h6 class="product-title"><a href="#">Mountain Blue Restaurant</a></h6><span class="product-location icon-start"><i class="fal fa-map-marker-alt"></i>New work, 6 Ab, USA</span></div></div>', jpopup_customOptions);
        clusters.addLayer(a);
        markers.push(a);
        var s = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fal fa-building"></i></div><div class="marker-arrow"></div></div></div>',
            a = L.marker([45.733079713277, 16.302902710937], {
                icon: L.divIcon({
                    html: s,
                    className: 'open_steet_map_marker google_marker',
                    iconSize: [40, 46],
                    popupAnchor: [1, -35],
                    iconAnchor: [20, 46],
                })
            });

        a.bindPopup('<div class="product-default p-0"> <figure class="product-img"> <a href="listing-single.html" class="lazy-container ratio ratio-2-3"> <img class="lazyload" src="assets/images/placeholder.png" data-src="assets/images/product/pro-2.jpg" alt="Product"> </a></figure><div class="product-details"><h6 class="product-title"><a href="#">Mountain Blue Restaurant</a></h6><span class="product-location icon-start"><i class="fal fa-map-marker-alt"></i>New work, 6 Ab, USA</span></div></div>', jpopup_customOptions);
        clusters.addLayer(a);
        markers.push(a);
        var s = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fal fa-home"></i></div><div class="marker-arrow"></div></div></div>',
            a = L.marker([46.02695, 16.0639472], {
                icon: L.divIcon({
                    html: s,
                    className: 'open_steet_map_marker google_marker',
                    iconSize: [40, 46],
                    popupAnchor: [1, -35],
                    iconAnchor: [20, 46],
                })
            });

        a.bindPopup('<div class="product-default p-0"> <figure class="product-img"> <a href="listing-single.html" class="lazy-container ratio ratio-2-3"> <img class="lazyload" src="assets/images/placeholder.png" data-src="assets/images/product/pro-3.jpg" alt="Product"> </a></figure><div class="product-details"><h6 class="product-title"><a href="#">Mountain Blue Restaurant</a></h6><span class="product-location icon-start"><i class="fal fa-map-marker-alt"></i>New work, 6 Ab, USA</span></div></div>', jpopup_customOptions);
        clusters.addLayer(a);
        markers.push(a);
        var s = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fal fa-home"></i></div><div class="marker-arrow"></div></div></div>',
            a = L.marker([45.8971627, 16.4291229], {
                icon: L.divIcon({
                    html: s,
                    className: 'open_steet_map_marker google_marker',
                    iconSize: [40, 46],
                    popupAnchor: [1, -35],
                    iconAnchor: [20, 46],
                })
            });

        a.bindPopup('<div class="product-default p-0"> <figure class="product-img"> <a href="listing-single.html" class="lazy-container ratio ratio-2-3"> <img class="lazyload" src="assets/images/placeholder.png" data-src="assets/images/product/pro-4.jpg" alt="Product"> </a></figure><div class="product-details"><h6 class="product-title"><a href="#">Mountain Blue Restaurant</a></h6><span class="product-location icon-start"><i class="fal fa-map-marker-alt"></i>New work, 6 Ab, USA</span></div></div>', jpopup_customOptions);
        clusters.addLayer(a);
        markers.push(a);
        var s = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fal fa-home"></i></div><div class="marker-arrow"></div></div></div>',
            a = L.marker([45.8248723, 16.1044795], {
                icon: L.divIcon({
                    html: s,
                    className: 'open_steet_map_marker google_marker',
                    iconSize: [40, 46],
                    popupAnchor: [1, -35],
                    iconAnchor: [20, 46],
                })
            });

        a.bindPopup('<div class="product-default p-0"> <figure class="product-img"> <a href="listing-single.html" class="lazy-container ratio ratio-2-3"> <img class="lazyload" src="assets/images/placeholder.png" data-src="assets/images/product/pro-5.jpg" alt="Product"> </a></figure><div class="product-details"><h6 class="product-title"><a href="#">Mountain Blue Restaurant</a></h6><span class="product-location icon-start"><i class="fal fa-map-marker-alt"></i>New work, 6 Ab, USA</span></div></div>', jpopup_customOptions);
        clusters.addLayer(a);
        markers.push(a);
        var s = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fal fa-home"></i></div><div class="marker-arrow"></div></div></div>',
            a = L.marker([46.2359981, 16.1004514], {
                icon: L.divIcon({
                    html: s,
                    className: 'open_steet_map_marker google_marker',
                    iconSize: [40, 46],
                    popupAnchor: [1, -35],
                    iconAnchor: [20, 46],
                })
            });

        a.bindPopup('<div class="product-default p-0"> <figure class="product-img"> <a href="listing-single.html" class="lazy-container ratio ratio-2-3"> <img class="lazyload" src="assets/images/placeholder.png" data-src="assets/images/product/pro-6.jpg" alt="Product"> </a></figure><div class="product-details"><h6 class="product-title"><a href="#">Mountain Blue Restaurant</a></h6><span class="product-location icon-start"><i class="fal fa-map-marker-alt"></i>New work, 6 Ab, USA</span></div></div>', jpopup_customOptions);
        clusters.addLayer(a);
        markers.push(a);
        var s = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fal fa-home"></i></div><div class="marker-arrow"></div></div></div>',
            a = L.marker([45.984899065493, 16.557105105371], {
                icon: L.divIcon({
                    html: s,
                    className: 'open_steet_map_marker google_marker',
                    iconSize: [40, 46],
                    popupAnchor: [1, -35],
                    iconAnchor: [20, 46],
                })
            });

        a.bindPopup('<div class="product-default p-0"> <figure class="product-img"> <a href="listing-single.html" class="lazy-container ratio ratio-2-3"> <img class="lazyload" src="assets/images/placeholder.png" data-src="assets/images/product/pro-7.jpg" alt="Product"> </a></figure><div class="product-details"><h6 class="product-title"><a href="#">Mountain Blue Restaurant</a></h6><span class="product-location icon-start"><i class="fal fa-map-marker-alt"></i>New work, 6 Ab, USA</span></div></div>', jpopup_customOptions);
        clusters.addLayer(a);
        markers.push(a);
        var s = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fal fa-home"></i></div><div class="marker-arrow"></div></div></div>',
            a = L.marker([45.565727390202, 15.841627716797], {
                icon: L.divIcon({
                    html: s,
                    className: 'open_steet_map_marker google_marker',
                    iconSize: [40, 46],
                    popupAnchor: [1, -35],
                    iconAnchor: [20, 46],
                })
            });

        a.bindPopup('<div class="product-default p-0"> <figure class="product-img"> <a href="listing-single.html" class="lazy-container ratio ratio-2-3"> <img class="lazyload" src="assets/images/placeholder.png" data-src="assets/images/product/pro-8.jpg" alt="Product"> </a></figure><div class="product-details"><h6 class="product-title"><a href="#">Mountain Blue Restaurant</a></h6><span class="product-location icon-start"><i class="fal fa-map-marker-alt"></i>New work, 6 Ab, USA</span></div></div>', jpopup_customOptions);
        clusters.addLayer(a);
        markers.push(a);
        var s = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fal fa-home"></i></div><div class="marker-arrow"></div></div></div>',
            a = L.marker([45.8642778, 15.985132953442], {
                icon: L.divIcon({
                    html: s,
                    className: 'open_steet_map_marker google_marker',
                    iconSize: [40, 46],
                    popupAnchor: [1, -35],
                    iconAnchor: [20, 46],
                })
            });

        a.bindPopup('<div class="product-default p-0"> <figure class="product-img"> <a href="listing-single.html" class="lazy-container ratio ratio-2-3"> <img class="lazyload" src="assets/images/placeholder.png" data-src="assets/images/product/pro-9.jpg" alt="Product"> </a></figure><div class="product-details"><h6 class="product-title"><a href="#">Mountain Blue Restaurant</a></h6><span class="product-location icon-start"><i class="fal fa-map-marker-alt"></i>New work, 6 Ab, USA</span></div></div>', jpopup_customOptions);
        clusters.addLayer(a);
        markers.push(a);
        map.addLayer(clusters);

        if (markers.length) {
            var e = [];
            for (var i in markers) {
                if (typeof markers[i]['_latlng'] == 'undefined') continue;
                var c = [markers[i].getLatLng()];
                e.push(c)
            };
            var r = L.latLngBounds(e);
            map.fitBounds(r)
        };
        if (!markers.length) {}
    }
});

var timerMap, ad_galleries, firstSet = !1,
    mapRefresh = !0,
    loadOnTab = !0,
    zoomOnMapSearch = 9,
    clusterConfig = null,
    markerOptions = null,
    mapDisableAutoPan = !1,
    rent_inc_id = '55',
    scrollWheelEnabled = !1,
    myLocationEnabled = !0,
    rectangleSearchEnabled = !0,
    mapSearchbox = !0,
    mapRefresh = !0,
    map_main, styles, mapStyle = [{
        'featureType': 'landscape',
        'elementType': 'geometry.fill',
        'stylers': [{
            'color': '#fcf4dc'
        }]
    }, {
        'featureType': 'landscape',
        'elementType': 'geometry.stroke',
        'stylers': [{
            'color': '#c0c0c0'
        }, {
            'visibility': 'on'
        }]
    }];

clusters = L.markerClusterGroup({
    spiderfyOnMaxZoom: !0,
    showCoverageOnHover: !1,
    zoomToBoundsOnClick: !0
});

var jpopup_customOptions = {
    'maxWidth': 'initial',
    'width': 'initial',
    'className': 'popupCustom'
};

if ($("#map").length) {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
        maxZoom: 22
    }).addTo(map);
}