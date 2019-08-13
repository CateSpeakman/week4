"use strict";

//Description: This script will make various changes to the form as the user enters thier information for 
//easier usability.
//Author:Cate Speakman

window.onload = function (){
    const firstnameField = document.getElementById("inputfirstname");
    const lastnameField = document.getElementById("inputlastname");
    const addressField = document.getElementById("inputAddress");
    const cityField = document.getElementById("inputCity");
    const stateField = document.getElementById("inputState");
    const billingOption = document.getElementById("billingOption");

    firstnameField.oninput = function(){
        firstnameField.value = firstnameField.value.toUpperCase();
    };

    lastnameField.oninput = function(){
        lastnameField.value = lastnameField.value.toUpperCase();
    };

    addressField.oninput = function(){
        addressField.value = addressField.value.toUpperCase();
    };

    cityField.oninput = function(){
        cityField.value = cityField.value.toUpperCase();
    };

    stateField.oninput = function(){
        stateField.value = stateField.value.toUpperCase();
    };

billing

};