"use strict";

//Description: This script will make various changes to the form as the user enters thier information for 
//easier usability.
//Author:Cate Speakman

window.onload = function () {

    const firstnameField = document.getElementById("inputfirstname");
    const lastnameField = document.getElementById("inputlastname");
    const addressField = document.getElementById("inputAddress");
    const cityField = document.getElementById("inputCity");
    const stateField = document.getElementById("inputState");

    const allInputTextFields = document.querySelectorAll("input[type='text']");

    const billingOption = document.getElementById("billingOption");
    
   
    let billAddressField = document.getElementById("differentBillingAddress");


    //this will make all fields have a beige background when user is in text box
    for (let i = 0; i < allInputTextFields.length; i++) {
        allInputTextFields[i].onfocus = function () {
            this.style.backgroundColor = "beige";
        };

        allInputTextFields[i].onblur = function () {
            this.style.backgroundColor = "";

  /*          allInputTextFields[i].oninput = function () {
                allInputTextFields[i].value = allInputTextFields.value.toUpperCase();
            }*/
        };

    }


    //this will change all input to uppercase as user types
    firstnameField.oninput = function () {
        firstnameField.value = firstnameField.value.toUpperCase();
    };

    lastnameField.oninput = function () {
        lastnameField.value = lastnameField.value.toUpperCase();
    };

    addressField.oninput = function () {
        addressField.value = addressField.value.toUpperCase();
    };

    cityField.oninput = function () {
        cityField.value = cityField.value.toUpperCase();
    };

    stateField.oninput = function () {
        stateField.value = stateField.value.toUpperCase();
    };

    //this will hide and unhide the address field if the billing address is different from mailing

    billingOption.onchange = function () {
       
        let billAddress = billingOption.options[billingOption.selectedIndex].text;
        console.log(billAddress);

        if (billAddress == "Bill to Same as Mailing Address") {
            billAddressField.style.display = "none";
        }
        else if (billAddress == "Bill to Different Address") {
            billAddressField.style.display = "block";
        }
    };

};




