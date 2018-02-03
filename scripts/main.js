
// This section is to make the accordion on the main page work
var acc = document.getElementsByClassName("accordion");
var i;

for (i=0; i<acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//let footer = document.querySelector(DOMstrings.footerDiv).style.color = "tomato";


// google map stuff
function initMap() {
    // locations in latitude and longitude
    var louisville = {lat: 38.2526647, lng: -85.7584557};
    var ramsisLoc = {lat: 38.235691, lng: -85.715654};
    var napaGrillLoc = {lat: 38.2682804, lng: -85.6126019};
    
    // map of louisville
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        zoomControl: true,
        center: louisville,
        map: map
    });

    // this loop goes through the restaurant array and generates markers
    for (var i in restaurants) {
        createMarkers(restaurants[i].latitude, restaurants[i].longitude);
    };

    // restaurant markers
    function createMarkers(lat, lng) {
        var marker = new google.maps.Marker({
            position: generateLocation(lat, lng),
            map: map
        });
    };

    function generateLocation(latitude, longitude)  {
        var location = {lat: latitude, lng: longitude};
        return location;
    };

     // info window html
    //  var ramsiInfoString = "<h3>Ramsi's of the World</h3>";
    //  var napaGrillInfoString = "<h3>Napa River Grill</h3>";

    // // infowindow variables
    // var ramsiWindow = new google.maps.InfoWindow({
    //     content: ramsiInfoString
    // });
    // var napaWindow = new google.maps.InfoWindow({
    //     content: napaGrillInfoString
    // });

    // // mouseover listeners.  they display the name of the restaurant
    // ramsiMarker.addListener('mouseover', function() {
    //     ramsiWindow.open(map, ramsiMarker);
    // });
    // napaGrillMarker.addListener('mouseover', function() {
    //     napaWindow.open(map, napaGrillMarker);
    // });

    // // mouseout listeners.  closes the information windows
    // ramsiMarker.addListener('mouseout', function() {
    //     ramsiWindow.close(map, ramsiMarker);
    // });
    // napaGrillMarker.addListener('mouseout', function() {
    //     napaWindow.close(map. napaGrillMarker);
    // });

    // // click listeners.  they zoom in on location
    // ramsiMarker.addListener('click', function() {
    //     map.setZoom(19);
    //     map.setCenter(ramsiMarker.getPosition());
    // });
    // napaGrillMarker.addListener('click', function() {
    //     map.setZoom(19);
    //     map.setCenter(napaGrillMarker.getPosition());
    // });
}