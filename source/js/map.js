function initMap() {
  var coordinates = {lat: 59.938700, lng: 30.323150},
    centerCoordinates = {lat: 59.939000, lng: 30.323200},
    markerImage = "img/map-marker.png",

    map = new google.maps.Map(document.getElementById("map"), {
      center: centerCoordinates,
      disableDefaultUI: true,
      scrollwheel: false,
      zoom: 17
    }),

    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: markerImage
    });
}
