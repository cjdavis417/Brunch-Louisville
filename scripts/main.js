
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
    var louisvilleLoc = {lat: 38.2526647, lng: -85.7584557};
    
    // map of louisville
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        zoomControl: true,
        center: louisvilleLoc,
        map: map,
        // name: 'Louisville'
    });

    // this loop goes through the restaurant array and generates markers
    for (var i in restaurants) {

        // generates location
        var location = {lat: restaurants[i].latitude, lng:restaurants[i].longitude};

        // generates icon
        // var markerIcon = {
        //     url: restaurants[i].icon,
        // };

        // generates icon shape
        // var markerShape = {
        //     coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
        //     type: 'poly',
        // };

        //generates marker
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            // icon: markerIcon,
            // shape: markerShape,
            // zIndex: 102,
        });

        // generates info window text
        var infoString = "<div class='markerText'><h3>" + restaurants[i].name + "</h3><h4>" + restaurants[i].type + "</h4></div>";

        // generates api window object
        var infoWindow = new google.maps.InfoWindow({
            content: infoString
        });

        // creates an infowindow 'key' in the marker
        marker.infoWindow = infoWindow;

        // generates mouseover listener
        marker.addListener('mouseover', function() {
            return this.infoWindow.open(map, this);  
            // calls the explicit infowindow object
        });

        // generates mouseout listener
        marker.addListener('mouseout', function() {
            return this.infoWindow.close(map, this); 
            // calls the explicit infowindow object
        });

        // generates click-zoom listener
        marker.addListener('click', function() {
            map.setZoom(19);
            map.setCenter(this.position);
        });

    };

    // try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.position);
        });
    } else {
        // browser doesn't support geolocation
        handleLocationError(false, infoWindow, map.position);
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}


// jquery to make the map fixed to top when map reaches
// top while scrolling.  'affix' is a class in the breakpoints.
var stickyMap = $('.locMap').offset().top;

$(window).scroll(function() {
    if ($(window).scrollTop() > stickyMap) {
        $('.locMap').addClass('affix');
    } else {
        $('.locMap').removeClass('affix');
    }
});
