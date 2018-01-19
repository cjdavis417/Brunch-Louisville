
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