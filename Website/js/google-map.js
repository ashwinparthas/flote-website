function initGoogleMap() {
    if (!window.google || !window.google.maps) {
        return;
    }

    var mapElement = document.getElementById('map');
    if (!mapElement) {
        return;
    }

    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

    var mapOptions = {
        zoom: 7,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    var map = new google.maps.Map(mapElement, mapOptions);

    new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png'
    });
}

window.initGoogleMap = initGoogleMap;
