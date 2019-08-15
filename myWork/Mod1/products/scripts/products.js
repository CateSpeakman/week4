"use strict";
//Description: This script will dynamically populate the page with product number, name and description based
//on user selection of a dropdown.  This information will be pulled from a JSON file. 
//Author:Cate Speakman

$(function () {

    $("#productList").on("change", showList);
    
});


//this function will call the JSON file and populated the table based on user selection within dropdown

function showList()
{
    let objs;

    $.getJSON("data/products.json", function (products){
        
        objs = products;

        let selectedProduct = $('#productList').val();

        $("#productTable tbody").empty();
        for (let i=0; i<objs.Items.length; i++)
        {
            if (selectedProduct == objs.Items[i].CategoryName)
            {
                let productRow = "<tr><td>" + objs.Items[i].ProductID 
                                + "</td><td>" + objs.Items[i].ProductName
                                + "</td><td>" + objs.Items[i].UnitPrice
                                + "</td><td><a href='details.html?productid=" + objs.Items[i].ProductID +"'>Details</a>" 
                                + "</td></tr>";
                $("#productTable tbody").append(productRow);
            }//ends if statement
 
        }//ends for loop for populating table based on DDL selection
    });//ends JSON function
}//ends showList function



























