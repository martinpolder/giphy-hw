// creating array of initial buttons
var btnArr = ["basketball", "spaghetti", "dog", "cat", "france", "eagle", "USA", "hamburger", "owl", "ferrari", "thor", "cricket", "salah"];

// loop through the array and create a button
$(document).ready(function() {


    for (i = 0; i < btnArr.length; i++) {
    $(".btndiv").append("<button>" + btnArr[i]);
  } 

});

