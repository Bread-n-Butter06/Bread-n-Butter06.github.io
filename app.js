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

let allData = []; 
  let teamNum = 0;
  let matchNum = 0;
  let taxi = false;
  let autoLowHub = 0;
  let autoUpHub = 0;
  let teleLowHub = 0;
  let teleUpHub = 0;
  let climbAttempt = false;
  let climbLevel = "";
  let disconnected = 0;
  let playedDefense = 0;

  let wasDefended = "";
  let playedDefenseRating = "";
  let comments = "";
  let noShow = false;
  let scoutInitials = "";
  let dataId = Date;
  
let submitForm = function(allData) { //unfinished function
  allData.preventDefault()

  let allData = 
  [
    teamNum, matchNum, taxi, autoLowHub, autoUpHub, /*Pre-Match and Auto*/
    teleLowHub, teleUpHub, climbAttempt, climbLevel, /*Teleop and End*/
    disconnected, playedDefense, /*Post-Match*/
    wasDefended, playedDefenseRating, comments, noShow, scoutInitials, dataId.now() /*Data not in 422 sheet*/
  ]

}

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
  