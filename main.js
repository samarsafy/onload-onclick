/*window.onload = function () {
  document.getElementById("test").innerHTML = "Text from JavaScript";
}
window.onclick = function () {
  document.getElementById("test").innerHTML = "Text from JavaScript";
}
window.ondblclick = function () {
    document.getElementById("test").innerHTML = "Text from JavaScript"; */

    var myInput = document.getElementById("input"),

    myDiv = document.getElementById("div");
   // myButton = document.getElementById("button");
    // Element.Event = function (){//code}
   //myButton.onclick = function (){
     myInput.onkeyup = function () {
       //myInput.onkeydown = function () {
         //myInput.onkeypress = function () {
      "use strict";
      myDiv. innerHTML = myInput.value * 0.81;
      //alert("you pressed the button");
    };
