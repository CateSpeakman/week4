"use strict";

//Description: this script will let the user know how many characters they have left to type within a text box.
//Author:Cate Speakman

window.onload = function (e) {

    let inputfield = document.getElementById("sampleText");


    console.log(inputfield);

    inputfield.onkeypress = function (e) {

        let key = e.charCode ? e.charCode : e.keyCode;

        if ((key >= 48) && (key <= 57)) {
            return false;
        }
       
            let stringLength = inputfield.value.length;
            let remainingChars = (50 - stringLength) - 1;
           
          let para = document.getElementById("charRemaining");
        para.innerHTML = "You have " + (remainingChars) + " characters remaining.";
    };//ends onpress function
}