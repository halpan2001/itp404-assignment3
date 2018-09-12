let successHandler = function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  let yourPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  let map = new google.maps.Map(document.getElementById('map'),{
    center: yourPosition,
    zoom: 14
  });

  let uMarker = new google.maps.Marker({
    map:map,
    position: yourPosition,
    label: "SUP, DIS YOU",
    animation: google.maps.Animation.DROP
  });

  let geocoder = new google.maps.Geocoder();

  geocoder.geocode({
    location: yourPosition
  }, function(geocoderResults) {
    // geocoderResults.
    // let locationName = geocoderResults[0].address_components[0].long_name;
    let formattedName = geocoderResults[0].formatted_address;
    // console.log(geocoderResults);
    // console.log(locationName);
    // console.log(formattedName);

    let infoWindow = new google.maps.InfoWindow({
      position: yourPosition,
      content: `<strong>${formattedName}</strong>`
    });

    google.maps.event.addListener(uMarker, 'click', function(){
      infoWindow.open(map);
    });
  });
};

let errorHandler = function(error) {
  console.log("boohoooooooo")
};
let options = {};
let position = navigator.geolocation.watchPosition(successHandler, errorHandler, options);
