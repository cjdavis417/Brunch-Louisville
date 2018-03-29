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


// google map stuff
// this was built using the google 'how-to'
function initMap() {
    // locations in latitude and longitude
    // this loc centers the map on louisville
    var louisvilleLoc = {lat: 38.252665, lng: -85.758456};

    // map of louisville object and options
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

        //generates marker
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP
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

}


// jquery to make the map fixed to top when map reaches
// top while scrolling.  'affix' is a class in the breakpoints.css file.
var stickyMap = $('.locMap').offset().top;

$(window).scroll(function() {
    if ($(window).scrollTop() > stickyMap) {
        $('.locMap').addClass('affix');
        $('#first-restaurant').addClass('first-restaurant');
    } else {
        $('.locMap').removeClass('affix');
        $('#first-restaurant').removeClass('first-restaurant');
    }
});