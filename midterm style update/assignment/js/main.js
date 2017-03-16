
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 12
});

var gl = L.mapboxGL({
    accessToken: 'pk.eyJ1IjoicmZpbmZlciIsImEiOiJjaXlkYnRlZnkwMTk1MnFrMXB1aTEzbjh6In0.ECHsUl_c3nvKR32uupgIgQ',
    style: 'mapbox://styles/rfinfer/cj0bqp2op002v2smc16cc2m63'
}).addTo(map);

// L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
//   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   subdomains: 'abcd',
//   minZoom: 0,
//   maxZoom: 20,
//   ext: 'png'
// }).addTo(map);
// mapboxgl.accessToken = 'pk.eyJ1IjoicmZpbmZlciIsImEiOiJjaXlkYnRlZnkwMTk1MnFrMXB1aTEzbjh6In0.ECHsUl_c3nvKR32uupgIgQ';
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/rfinfer/cj0bqp2op002v2smc16cc2m63'
// });
// console.log("BATH");
showCurrentSlide();



  /* ================================
  Start your code here
  ================================ */

  /* ================================
  End your code here
  ================================ */
//TO DO LIST.
//mock up main html
  //?: the previous slide shouldn't be there for slide one
//change that html with sayCurrentSlideName
//write each slide's function
//change to next slide function when button is clicked--ask for help on friday.
//add existing bike lanes and crosswalks to map??
//?can I subset by feature or do I need to re-do data set
//projects to focus on->chinatown sharrow, buffered bike lane pilot on Rittenhouse Sq. West
