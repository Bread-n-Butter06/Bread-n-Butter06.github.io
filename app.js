'use strict';

const allScreensDropdown = document.getElementById("allScreensDropdown");

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
    allScreensDropdown.classList.toggle("show");
  }

// Toggles .show on hover
function hover(allScreensDropdown, event){
  allScreensDropdown.addEventListener('mouseenter', e => allScreensDropdown.classList.add('show'))
  allScreensDropdown.addEventListener('mouseleave', e => allScreensDropdown.classList.remove('show'))
}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.allScreens-dropdown-btn')) {
        
      var dropdowns = document.getElementsByClassName("allScreens-dropdown-content");

      var i;
      for (i = 0; i < dropdowns.length; i++) {

        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
    
            openDropdown.classList.remove('show');

        }
    
        }
    }
  } 
  