'use strict';

var clicks = 0;
    function onClickAdd() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
    function onClickSub() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className  == 'light-theme') {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('Current class name : ' +className);
});