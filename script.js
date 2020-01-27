//var wrapperEle = document.body.querySelector(".wrapper");
//var buttonEle = document.body.querySelector(".clicker");

var miles = Number(prompt("How many miles per year would you estimate that you drive?"));
var gasCost = Number(prompt("What is the current cost of gas in your area?"));
//var mpg = (12)
function yearlyCost(miles, gasCost, mpg) {
  var yearlyCost = (miles*gasCost/mpg).toFixed(2);
  //var n = yearlyCost.toFixed(2);

  document.write("If you drive " + miles +" miles per year, the price of gas is $" +gasCost +" per gallon, and the vehicle gets " + mpg +" miles per gallon, then the yearly cost would be $" +yearlyCost+"<br>");
}
yearlyCost(miles,gasCost,12);
yearlyCost(miles,gasCost,17);
yearlyCost(miles,gasCost,26);
yearlyCost(miles,gasCost,29);

//buttonEle.addEventListener("click", function() {
//doMath("Your gorgeous number is ",". You will marry that number. Put a ring on it");
//});

//doMath("Your number is ",". It is not beautiful.");
//   miles/mpg*price per gallon