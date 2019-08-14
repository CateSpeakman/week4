"use strict";

//Description: This script will calculate the cost of the ice cream and toppings entered by user.
//Author: Cate Speakman


//This function will determine the cost per scoop based on user selection

function getScoopPrice() {
    console.log ("scoop price");

    let numScoops = $('#numScoops').val();
    numScoops = Number(numScoops);

    let scoopPrice;

    switch (numScoops) {
        case 1:
            scoopPrice = 2.50;
            break;

        case 2:
            scoopPrice = 3.75;
            break;

        case 3:
            scoopPrice = 5.00;
            break;

        default:
            scoopPrice = 0;
            alert("Invalid Amount");
    }

    return scoopPrice;
}

/*this function will display or hide hot fudge option based on type of ice cream container selected by user 
* @param iceCreamContainer - this is the ice cream container selected by the user ( cup or waffle cone)
*/

function showHotFudge() {

    console.log ("hot fudge");

    
        $("#hotfudgeDiv").show();
}

function hideHotFudge() {

    console.log ("hide hot fudge");

    
        $("#hotfudgeDiv").hide();
        $("#hotFudge").prop("checked", false);
}



//this function will determine if there is a cost for the ice cream container selected by user


function getContainerPrice(iceCreamContainer) {

    console.log ("container price");

    let containerPrice;

    if (iceCreamContainer == $("#waffleCone").val()) {
        containerPrice = 1.00;
    }
    else {
        containerPrice = 0;
    }

    return containerPrice;
}



/* this function will calculate the cost of the toppings*/
function getToppings() {

console.log("get toppings");

    let toppings = 0;

    let hotFudge = $("#hotFudge").prop("checked");
    if (hotFudge) {
        toppings += 1.25;
    }

    let sprinkles = $("#sprinkles").prop("checked");
    if (sprinkles) {
        toppings += .25;
    }

    let whipCream = $("#whipCream").prop("checked");
    if (whipCream) {
        toppings += .75;
    }

    return toppings;

}

function getTotalCost() {

    console.log("get total cost");

    let iceCreamContainer = $("input[name='iceCreamContainer']:checked").val();
    let totalToppings = getToppings();
    let totalScoops = getScoopPrice();
    let containerPrice = getContainerPrice(iceCreamContainer);

    let totalIceCreamCost = totalToppings + totalScoops + containerPrice;
    totalIceCreamCost = parseFloat(totalIceCreamCost.toFixed(2));
    $("#totalCost").val(totalIceCreamCost.toFixed(2));
}

$(function () {

    $("#totalCostBtn").on("click", getTotalCost);
    $("#cup").on("click", showHotFudge);
    $("#waffleCone").on("click", hideHotFudge);
});