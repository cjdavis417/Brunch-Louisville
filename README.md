# Brunch Louisville
## This is a project for [Code Louisville](https://www.codelouisville.org) classes.
#### This website is to be a one-stop-shop for all the weekend Brunch and Buffet spots in Louisville KY.

#### Please note, this is work in progress.

1. Technologies used:
    * **HTML5**
    * **CSS3**

        * There are two CSS files, main.css and breakpoints.css.
        * main.css file has the bulk of the styles outside of media queries.  
        * The media queries are located in the breakpoints.css file.
        * I seperated it because it is clearer and easier for me to organize.

    * **Flexbox**

        In index.html, there are 3 tables that format the business hours and brunch special.  each is within a container and shift around nicely with screen sizes.

    * **Javascript**

        * Javascript for the accordian button is located in main.js line 1.
        * The google maps api uses javascript.  The bulk of it can be found in main.js line 20
        * In restaurants.js I created an array of objects that holds information about the restaurants.
            * name
            * type (brunch or buffet)
            * longitude and latitude
            * logo jpeg file.

    * **Forms**

        * submitRestaurants.css is a form to submit new restaurants.  It's just the layout right now.

    * **Responsive Web Design**

       * The media queries are located in the breakpoints.css file.

    * **JQuery-3.3.1**

        The map sticks to the top of the screen with scrolling only in the media query on screens 659px and smaller.  The code is located in main.js line 83.

    * **Google Maps API**

        * The google maps api uses javascript.  The bulk of it can be found in main.js line 20
        * Features
            1. The map centers on Louisville
            2. On Mouseover, a label pops up and gives details about the location.
            3. On Click, the map zooms into the location.
