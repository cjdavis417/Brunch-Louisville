
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
        map: map
    });

    // this loop goes through the restaurant array and generates markers
    for (var i in restaurants) {

        // generates location
        var location = {lat: restaurants[i].latitude, lng:restaurants[i].longitude};

        //generates marker
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });

        // generates info window text
        var infoString = "<h3>" + restaurants[i].name + "</h3>";

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