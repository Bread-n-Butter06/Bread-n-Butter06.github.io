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

//initialize 2D arrary allData 
/*const allData = []; 
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
  let dataId = Date;*/

/* allData[0] = teamNum;
allData[1] = matchNum;
allData[2] = taxi;
allData[3] = autoLowHub;
allData[4] = autoUpHub;
allData[5] = teleLowHub;
allData[6] = teleUpHub;
allData[7] = climbAttempt;
allData[8] = climbLevel;
allData[9] = disconnected;
allData[10] = playedDefense;
allData[11] = wasDefended;
allData[12] = playedDefenseRating;
allData[13] = comments;
allData[14] = noShow;
allData[15] = scoutInitials;
allData[16] = dataId; */

/*const data = [
  ["rahul", "delhi", "accounts dept"],
  ["rajeev", "UP", "sales dept"]
];*/

 /*= [
  "apple",
  "orange",
  "banana",
  "chorus fruit",
  "Hylian shroom",
  "Enchanted Apple",
  "Gum gum fruit"
];*/

//converts allData to URI to CSV, downloads a file created client-side
//function convertToCSV(allData) {

    //let csvContent = "data:text/csv;charset=utf-8,";
    //let csvContent = "data:text/csv;charset=utf-8,"; 
    //+ data.map(e => e.join(",")).join("\n");

    /*allData.forEach(function(array) {
        csvContent += array.join(",\n");
    });*/

    //csvContent = allData.join(",");

    /*var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);*/

    /*var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); 
    link.click();
}*/

/*var csv = data.map(function(d){
       return JSON.stringify(d); //stringify inserts data within double quotes
    })
    .join('\n') 
    .replace(/(^\[)|(\]$)/mg, '');
console.log(csv);*/



//pre-match
let scoutInitials = "";
let matchNum = 0;
let teamNum = 0;
let robotPosition = "";
let noShow = false;

//auto
let taxi = false;
let autoLowHub = 0;
let autoUpHub = 0;

//tele op
let teleLowHub = 0;
let teleUpHub = 0;
let climbAttempt = false;
let climbLevel = "";
let disconnected = 0;
let playedDefense = 0;
let wasDefended = "";

//post-match
let playedDefenseRating = "";
let comments = "";
let dataId = Date;

//counter buttons
//autonomous lower hub
var autoLowHubClicks = 0;
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
var autoUpHubClicks = 0;
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
var teleUpHubClicks = 0;
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
var teleLowHubClicks = 0;
    //increase tele-op upper hub counter on click of add button
    function onClickAddTL() {
        teleLowHubClicks += 1;
        document.getElementById("teleLowHubClicks").innerHTML = teleLowHubClicks;
    };
    //decrease tele-op upper hub counter on click of subtract button
    function onClickSubTL() {
        teleLowHubClicks -= 1;
        document.getElementById("teleLowHubClicks").innerHTML = teleLowUpHubClicks;
    };

//somthing to trigger js to take data
//allData.push(input); //adds each datum to allData
function addDataPreMatch(){ //"next" button at the end of each page, assigns user imput to var
  scoutInitials = document.getElementById("initials-input").value; //goes through ids and data for that specific page
  matchNum = document.getElementById("match-number-input").value;
  teamNum = document.getElementById("team-number-input").value;
  robotPosition = document.getElementById("robot-position-input").value;
  noShow = document.getElementById("no-show-imput").value;
}

function addDataAuto(){ //"next" button at the end of each page
  taxi = document.getElementById("taxi-input").value;
  autoLowHub = document.getElementById("auto-low-hub-input").value;
  autoUpHub = document.getElementById("auto-high-hub-input").value;
}

function addDataTeleOp(){ //"next" button at the end of each page
  teleLowHub = document.getElementById("tele-low-hub-input").value;
  teleUpHub = document.getElementById("tele-up-hub-input").value;
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
function makeTable(){ //replaces td tag by id with js var
  document.getElementById("Team_#").innerHTML = teamNum;
  document.getElementById("Match_#").innerHTML = matchNum;
  document.getElementById("Taxi").innerHTML = taxi;
  document.getElementById("aLower").innerHTML = autoLowHub;
  document.getElementById("aUpper").innerHTML = autoUpHun;
  document.getElementById("tLower").innerHTML = teleLowHub;
  document.getElementById("tUpper").innerHTML = teleUpHub; //var defined above;
  document.getElementById("Attempted").innerHTML = climbAttempt;
  document.getElementById("F_L_M_H_T").innerHTML = climbLevel;
  document.getElementById("Disconnected").innerHTML = disconnected;
  document.getElementById("Defense").innerHTML = playedDefense;
  document.getElementById("Defense_Rating").innerHTML = playedDefenseRating;
  document.getElementById("Was_Defended").innerHTML = wasDefended;
  document.getElementById("Comments").innerHTML = comments;
  document.getElementById("No_Show").innerHTML = noShow;
  document.getElementById("Scount_Initials").innerHTML = scoutInitials;
  document.getElementById("Date").innerHTML = dataId;
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
  