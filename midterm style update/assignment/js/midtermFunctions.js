/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
//
//
var geojsonMarkerOptions = {
    radius: 5,
    fillColor: "#F0C419",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
//


//1) Fetch with Ajax
//2) Parse JSON
var parsedData;
var allMarkers;
var showSlideOne = function(){
  $(".sub").html("This map shows the bicycle and pedestrian crashes in Philadelphia during 2012. 2200 crashes in one year! That's a whole lot of crashes involving bicycles and pedestrians. ");
    $("#previous").hide();
  var downloadData = $.ajax("https://gist.githubusercontent.com/rfinfer/fa95f97b26b74ad97b87e7da94ff6275/raw/4b4fb4d093e40ea69a816ff4c96f1f1f9e87b103/bike_ped.geojson");
  downloadData.done(function(data) {
    parsedData = JSON.parse(data);

    console.log("loading and plotting");



    allMarkers = L.geoJSON(parsedData, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    });
    allMarkers.addTo(map);
  });
};

var removeLayer1 = function() {
  allMarkers.remove();
};


var bikeMarkerOptions = {
    radius: 5,
    fillColor: "#4EBA6F",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var zoomToAll = function() {
  map.setView(allZoom, 12);
};

var showSlideBike = function(){
  $(".sub").html("In green you can see the 482 crashes that involved bicycles. ");
  var bike;
  zoomToAll();
  bike = _.filter(parsedData.features,function(thing){
    return thing.properties.BICYCLE>0;
            });
  slideBikeMarkers = L.geoJSON(bike, {
      pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, bikeMarkerOptions);
      }
  }).addTo(map);
};


var pedMarkerOptions = {
    radius: 5,
    fillColor: "#2D95BF",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var slidePedMarkers;
var showSlidePed= function(){
  $(".sub").html("In blue you can see the 1,718 crashes involving pedestrians. ");

  var ped;
  ped = _.filter(parsedData.features,function(thing){
    return thing.properties.BICYCLE===0;
        });
  slidePedMarkers = L.geoJSON(ped, {
    pointToLayer: function (feature, latlng){
      return L.circleMarker(latlng, pedMarkerOptions);
    }
  }).addTo(map);
};


var removeBike = function() {
  slideBikeMarkers.remove();
};
var removePed = function() {
  if (slidePedMarkers) {
    slidePedMarkers.remove();
  }
};


var latlngRooseveltCrash= L.latLng(40.053734535337945, -75.04627704620363);


var latlngRooseveltRedLion= L.latLng(40.095256, -75.015407);

var showSlideRoos= function(){
    $(".sub").html("Roosevelt and Red Lion Boulevard is the second most dangerous intersection in the country. ");
  map.setView(latlngRooseveltRedLion, 15);
};
var showSlideRoos1 = function(){
      $(".sub").html("Here is another problem area on Roosevelt Boulevard. Although the crash density isn't actually that high, there were 5 deaths in this area in 2012. This is clearly a dangerously designed road. ");
  map.setView(latlngRooseveltRyan, 15);
};

var latlngRooseveltRyan = L.latLng(40.052664, -75.051316);
var removeLayer5 = function() {
  slideFiveMarkers.eachLayer(function(layer){
    map.removeLayer(layer);
  });
};

var deathMarkerOptions = {
    radius: 7,
    fillColor: "#FC3038 ",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
var deaths;
var slideDeathMarkers;
var showSlideDeath = function(){
  $(".sub").html("Shown in red are the fatal crashes. There were 38 deaths in 2012 (and remember, this is only showing those involing bicycles and pedestrians). Philadelphia has a long way to go towards improving road safety. </b>");
  console.log("adding deaths");
  if(slideDeathMarkers === undefined){
  deaths = _.filter(parsedData.features,function(thing){
    return thing.properties.FATAL_COUN>0;
  });

  slideDeathMarkers = L.geoJSON(deaths, {
      pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, deathMarkerOptions);
      }
  }).addTo(map).bringToFront();
  }
};


var removeDeath = function() {
  console.log("removing death")
  if (slideDeathMarkers) {
    slideDeathMarkers.remove();
    //Needed to make this undefined so that the slides could move back and forth without clobbering the slideDeathMarkers variable
    slideDeathMarkers = undefined;
    console.log("removed death markers")
  }
};


var allZoom = L.latLng(39.9522, -75.1639);

var showSlideDeathZoom = function(){
  map.setView(allZoom, 12);
};
//This one didn't work ->
  // var removeLayer = function() {
  //   allMarkers.eachLayer(function(layer){
  //     map.removeLayer(layer);
  //   });
  // };



$("#next").click(function(event){
  clickNextButton();
  showCurrentSlide();
});

$("#previous").click(function(event){
  clickPreviousButton();
  showCurrentSlide();
  console.log("undoing it")
});
