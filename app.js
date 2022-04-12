'use strict';

/**
 * Data Points Order (Based on 422 Spreadsheet; Subject to change):
 * 1.  Team # - int
 * 2.  Match # - int
 * 3.  Taxi? - boolean
 * 4.  Auto Lower Hub - int
 * 5.  Auto Upper Hub - int
 * 6.  Teleop Lower Hub - int
 * 7.  Teleop Upper Hub - int
 * 8.  Attempted Climb? - boolean
 * 9.  Climb level - String
 * 10. Disconnected % - double
 * 11. Played Defense % - double 
 * 
 * ----- End of 422 Data Columns
 * 
 * 12. Was Defended? - String (ie. "not defended" "minimally obstructed")
 * 13. Played Defense Rating - String (ie. "effective" "not effective")
 * 14. Comments - String 
 * 15. No Show - boolean
 * 16. Scout Initials - String
 * 17. Data Entry Id - Date
 */

localStorage.addItem('url', document.getElementById('url-input').value);









//autonomous lower hub
//increase auto lower hub counter on click of add button
function onClickAddAL() {
    autoLowHubClicks += 1;
    document.getElementById("autoLowHubClicks").innerHTML = autoLowHubClicks;
};
//decrease auto lower counter on click of subtract button
function onClickSubAL() {
    if(autoLowHubClicks > 0){
    autoLowHubClicks -= 1;
    document.getElementById("autoLowHubClicks").innerHTML = autoLowHubClicks;
};
};
//autonomous upper hub
function onClickAddAU() {
    //increase auto upper hub counter on click of add button
    autoUpHubClicks += 1;
    document.getElementById("autoUpHubClicks").innerHTML = autoUpHubClicks;
};
//increase auto upper counter on click of add button
function onClickSubAU() {
    if(autoUpHubClicks > 0){
    autoUpHubClicks -= 1;
    document.getElementById("autoUpHubClicks").innerHTML = autoUpHubClicks;
};
};


//tele-op lower hub
//increase tele-op lower hub counter on click of add button
function onClickAddTU() {
    teleUpHubClicks += 1;
    document.getElementById("teleUpHubClicks").innerHTML = teleUpHubClicks;
};
//decrease tele-op lower hub counter on click of subtract button
function onClickSubTU() {
    if(teleUpHubClicks > 0){
    teleUpHubClicks -= 1;
    document.getElementById("autoUpHubClicks").innerHTML = teleUpHubClicks;
};
};
//tele-op upper hub
//increase tele-op upper hub counter on click of add button
function onClickAddTL() {
    teleLowHubClicks += 1;
    document.getElementById("teleLowHubClicks").innerHTML = teleLowHubClicks;
};
//decrease tele-op upper hub counter on click of subtract button
function onClickSubTL() {
    if(teleLowHubClicks > 0){
    teleLowHubClicks -= 1;
    document.getElementById("teleLowHubClicks").innerHTML = teleLowHubClicks;
};
};

//ADDS TO GOOGLE SHEET

const scriptURL = 'https://script.google.com/macros/s/AKfycbwxRYOZDpze9BnIK3rJuo0oMy5OE3oM3-n8n6TUUT5ssFmqAXbsPCr28pZunglhe5WM5Q/exec'
//const scriptURL = localStorage.getItem('url');
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => $("#form_alerts").html("<div class='alert alert-success'>Submitted!.</div>"))
    .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Failed to submit, make sure you have linked a valid Google sheet.</div>"))
})


//DROPDOWN

const allScreensDropdown = document.getElementById("allScreensDropdown");

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
    allScreensDropdown.classList.toggle("show");
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




  
  
