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


 /*= [
  "apple",
  "orange",
  "banana",
  "chorus fruit",
  "Hylian shroom",
  "Enchanted Apple",
  "Gum gum fruit"
];*/

//pre-match
var scoutInitials = "";
var matchNum = 0;
var teamNum = 0;
var robotPosition = "";
var noShow = false;

sessionStorage.setItem('scoutInitials', scoutInitials); 
sessionStorage.setItem('matchNum', matchNum); 
sessionStorage.setItem('teamNum', teamNum); 
sessionStorage.setItem('robotPosition', robotPosition); 
sessionStorage.setItem('noShow', noShow); 

//auto
var taxi = false;
var autoLowHub = 0;
var autoUpHub = 0;

sessionStorage.setItem('taxi', taxi); 
sessionStorage.setItem('autoLowHub', autoLowHub); 
sessionStorage.setItem('autoUpHub', autoUpHub); 

//tele op
var teleLowHub = 0;
var teleUpHub = 0;
var climbAttempt = false;
var climbLevel = "";
var disconnected = 0;
var playedDefense = 0;
var wasDefended = "";

sessionStorage.setItem('teleLowHub', teleLowHub); 
sessionStorage.setItem('teleUpHub', teleUpHub); 
sessionStorage.setItem('climbAttempt', climbAttempt); 
sessionStorage.setItem('climbLevel', climbLevel); 
sessionStorage.setItem('disconnected', disconnected);
sessionStorage.setItem('playedDefense', playedDefense);
sessionStorage.setItem('wasDefended', wasDefended); 

//post-match
var playedDefenseRating = "";
var comments = "";
var dataId = Date;

sessionStorage.setItem('playedDefenseRating', playedDefenseRating); 
sessionStorage.setItem('comments', comments); 
sessionStorage.setItem('dataId', dataId); 


//counter buttons
var autoLowHubClicks = 0;
var autoUpHubClicks = 0;
var teleUpHubClicks = 0;
var teleLowHubClicks = 0;
//autonomous lower hub
    //increase auto lower hub counter on click of add button
    function onClickAddAL() {
        autoLowHubClicks += 1;
        document.getElementById("autoLowHubClicks").innerHTML = autoLowHubClicks;
    };
    //decrease auto lower counter on click of subtract button
    function onClickSubAL() {
        autoLowHubClicks -= 1;
        document.getElementById("autoLowHubClicks").innerHTML = autoLowHubClicks;
    };
//autonomous upper hub
    function onClickAddAU() {
        //increase auto upper hub counter on click of add button
        autoUpHubClicks += 1;
        document.getElementById("autoUpHubClicks").innerHTML = autoUpHubClicks;
    };
    //increase auto upper counter on click of add button
    function onClickSubAU() {
        autoUpHubClicks -= 1;
        document.getElementById("autoUpHubClicks").innerHTML = autoUpHubClicks;
    };


//tele-op lower hub
    //increase tele-op lower hub counter on click of add button
    function onClickAddTU() {
        teleUpHubClicks += 1;
        document.getElementById("teleUpHubClicks").innerHTML = teleUpHubClicks;
    };
    //decrease tele-op lower hub counter on click of subtract button
    function onClickSubTU() {
        teleUpHubClicks -= 1;
        document.getElementById("autoUpHubClicks").innerHTML = teleUpHubClicks;
    };
//tele-op upper hub
    //increase tele-op upper hub counter on click of add button
    function onClickAddTL() {
        teleLowHubClicks += 1;
        document.getElementById("teleLowHubClicks").innerHTML = teleLowHubClicks;
    };
    //decrease tele-op upper hub counter on click of subtract button
    function onClickSubTL() {
        teleLowHubClicks -= 1;
        document.getElementById("teleLowHubClicks").innerHTML = teleLowHubClicks;
    };

function addDataPreMatch(){ //"next" button at the end of each page, assigns user imput to var
 

  sessionStorage.setItem('scoutInitials', scoutInitials); 
  
}

function addDataAuto(){ //"next" button at the end of each page
  taxi = document.getElementById("taxi-input").value;
  autoLowHub = autoUpHubClicks;
  autoUpHub = autoUpHubClicks;
  console.log(autoLowHub);
}

function addDataTeleOp(){ //"next" button at the end of each page
  teleLowHub = teleUpHubClicks;
  teleUpHub = teleUpHubClicks;
  climbAttempt = document.getElementById("climb-attempt-input").value;
  climbLevel = document.getElementById("climb-level-input").value;
  disconnected = document.getElementById("disconnected-input").value;
  playedDefense = document.getElementById("played-defense-input").value;
  wasDefended = document.getElementById("was-defended-input").value;
}

function addDataPostMatch(){ //"next" button at the end of each page
  playedDefenseRating = document.getElementById("initials-input").value;
  comments = document.getElementById("comments-input").value;
  dataId = document.getElementById("data-id-input").value;
}

//triggered upon loading submit page
function fillData(){ //replaces td tag by id with js var
  document.getElementById("Team_#").innerHTML = teamNum;
  document.getElementById("Match_#").innerHTML = matchNum;
  /*document.getElementById("Taxi").innerHTML = taxi;
  document.getElementById("aLower").innerHTML = autoLowHub;
  document.getElementById("aUpper").innerHTML = autoUpHub;
  document.getElementById("tLower").innerHTML = teleLowHub;
  document.getElementById("tUpper").innerHTML = teleUpHub; //var defined above;
  document.getElementById("Attempted").innerHTML = climbAttempt;
  document.getElementById("F_L_M_H_T").innerHTML = climbLevel;
  document.getElementById("Disconnected").innerHTML = disconnected;
  document.getElementById("Defense").innerHTML = playedDefense;
  document.getElementById("Defense_Rating").innerHTML = playedDefenseRating;
  document.getElementById("Was_Defended").innerHTML = wasDefended;
  document.getElementById("Comments").innerHTML = comments;
  document.getElementById("No_Show").innerHTML = noShow;*/
  document.getElementById("Scount_Initials").innerHTML = scoutInitials;
  //document.getElementById("Date").innerHTML = dataId;
}

//function othername() {
 //   var input = document.getElementById("userInput").value;
//}

  
//function submitData(allData) { 
  //allData.preventDefault()

  //allData = 
  //[
    //teamNum, matchNum, taxi, autoLowHub, autoUpHub, /*Pre-Match and Auto*/
    //teleLowHub, teleUpHub, climbAttempt, climbLevel, /*Teleop and End*/
    //disconnected, playedDefense, /*Post-Match*/
    //wasDefended, playedDefenseRating, comments, noShow, scoutInitials, dataId.now() /*Data not in 422 sheet*/
 // ]
  
  //console.log(allData);
  //convertToCSV(allData);

//}

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

  /*function submitData() {
     src="https://code.jquery.com/jquery-3.6.0.min.js"
     src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"

        const scriptURL = 'https://script.google.com/macros/s/AKfycbw4q31hJU917ct4kn4epL9z29OF91uIWCAukjH4SoZsmnilFux0YGk1Y82FLSgybOwc/exec'
        const form = document.forms['google-sheet']
        
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            //.then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
            //.catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
        })
    
  }*/
  
  