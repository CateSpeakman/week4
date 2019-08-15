"use strict";
//Description: This script will dynamically populate the page with all product information based on user
//selection of a table that generated on a previous page.  This information will be pulled from a JSON file. 
//Author:Cate Speakman

$(function () {

    let urlParams = new URLSearchParams(location.search);
    let productId = urlParams.get("productid");

    let objs;

    $.getJSON("data/products.json", function (products) {

        objs = products;

        $("#detailsTable tbody").empty();

        for (let i = 0; i < objs.Items.length; i++) {
            if (productId == objs.Items[i].ProductID) {
                let productIDRow = "<tr><td>" + "Product ID: "
                    + "</td><td>" + objs.Items[i].ProductID
                    + "</td></tr>";
                $("#detailsTable tbody").append(productIDRow);

                let productNameRow = "<tr><td>" + "Product Name: "
                    + "</td><td><input id='productName' name='productName' value ='" + objs.Items[i].ProductName
                    + "' readonly></td></tr>";
                $("#detailsTable tbody").append(productNameRow);

                let unitPriceRow = "<tr><td>" + "Unit Price: "
                    + "</td><td><input id='unitprice' name='unitprice' value ='" + objs.Items[i].UnitPrice
                    + "' readonly></td></tr>";
                $("#detailsTable tbody").append(unitPriceRow);

                let unitsInStockRow = "<tr><td>" + "Units in Stock: "
                    + "</td><td><input id='unitsInStock' name='unitsInStock' value ='" + objs.Items[i].UnitsInStock
                    + "' readonly></td></tr>";
                $("#detailsTable tbody").append(unitsInStockRow);

                let categoryNameRow = "<tr><td>" + "Category Name: "
                    + "</td><td><input id='categoryName' name='categoryName' value ='" + objs.Items[i].CategoryName
                    + "' readonly></td></tr>";
                $("#detailsTable tbody").append(categoryNameRow);

                let supplierRow = "<tr><td>" + "Supplier: "
                    + "</td><td><input id='supplier' name='supplier' value ='" + objs.Items[i].Supplier
                    + "' readonly></td></tr>";
                $("#detailsTable tbody").append(supplierRow);

                let discontinuedRow = "<tr><td id='discontinuedRow'>" + "Discontinued: "
                    + "</td><td ><input id='discontinued' name='discontinued' value ='" + objs.Items[i].Discontinued
                    + "' readonly></td></tr>";

                $("#detailsTable tbody").append(discontinuedRow);

                if (objs.Items[i].Discontinued == "true") {
                    $("#discontinuedRow").css("color", "red");
                    $("#discontinued").css("color", "red");
                }//ends if statement for css

            }//ends if statement for adding rows
        }//ends for loop

    });//ends JSON function

$("#editBtn").on("click", openFields);
$("#updateDiv").hide();

});//ends the onload function

function openFields()
{
    console.log("open fields");

$("#productName").attr("readonly", false);
$("#unitprice").attr("readonly", false);
$("#unitsInStock").attr("readonly", false);
$("#categoryName").attr("readonly", false);
$("#supplier").attr("readonly", false);
$("#discontinued").attr("readonly", false);

$("#editDiv").hide();
$("#updateDiv").show();

}