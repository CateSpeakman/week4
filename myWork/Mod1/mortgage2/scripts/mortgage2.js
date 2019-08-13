"use strict";

//Description: This script will calculate the monthly payments for a given loan amount, 
//              interest rate and loan term.
//Author: Cate Speakman

/* This function calculates the monthly payment and total loan amount based on loan amount, interest rate,
* and length of term for the loan.
* 
*@param loanAmtField (number) - the amount of the loan
*@param intRteField (number) - the annual interest rate
*@param loanTermField (number) - the length in time of the loan
*...
*@param monthlyPymtField (number) - the monthly payment for the loan;
*@param totalLoanCstField - the total cost of the loan for the entire loan term
*/

function getLoan()
{
    let loanAmt = $("#loanAmount").val();
    loanAmt = Number(loanAmt);

    let intRte = $("#interestRate").val();
    intRte = Number(intRte);

    let loanTerm = $("#loanTerm").val();
    loanTerm = Number(loanTerm);

    let monthlyPymtField = (loanAmt *(intRte/1200))
                         /
                         (1-Math.pow(1+(intRte/1200), -(12*loanTerm)));
    monthlyPymtField = parseFloat(monthlyPymtField.toFixed(2));
    $("#monthlyPayment").val(monthlyPymtField.toFixed(2));
    
    let totalLoanCstField = monthlyPymtField * (12*loanTerm);
    totalLoanCstField = parseFloat(totalLoanCstField.toFixed(2));
    $("#totalLoanCost").val(totalLoanCstField.toFixed(2));
}

/* this function will call the getLoan function to execute upon the click of the calculate button*/

$(function(){
    $("#calculateBtn").on("click", getLoan)
});