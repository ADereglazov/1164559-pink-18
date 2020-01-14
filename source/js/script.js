var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function initMap() {
  var coordinates = {lat: 59.938700, lng: 30.323150},
    centerCoordinates = {lat: 59.939000, lng: 30.323200},
    markerImage = "img/map-marker.png",

    map = new google.maps.Map(document.getElementById("map"), {
      center: centerCoordinates,
      disableDefaultUI: false,
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
