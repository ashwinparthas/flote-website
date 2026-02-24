(function () {
  var mapElement = document.getElementById("map");
  if (!mapElement) {
    return;
  }

  var apiKey = window.GOOGLE_MAPS_API_KEY || "";
  if (!apiKey) {
    console.warn("Google Maps disabled: missing GOOGLE_MAPS_API_KEY.");
    return;
  }

  var script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=" +
    encodeURIComponent(apiKey) +
    "&callback=initGoogleMap";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
})();
