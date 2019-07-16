// creating array of initial buttons
var btnArr = ["basketball", "spaghetti", "dog", "cat", "france", "eagle", "USA", "hamburger", "owl", "ferrari", "thor", "cricket", "salah"];

// loop through the array and create a button
$(document).ready(function() {


    for (i = 0; i < btnArr.length; i++) {
    
        // adding variable, a making it a button
        var a = $("<button>");

        // giving it a class
        a.addClass("gifbtns");

        // giving it a data attribute at the index i
        a.attr("data-name", btnArr[i]);

        // printing the name in the array at the index i
        a.text(btnArr[i]);
   
        // appending the buttons into their div
        $(".btndiv").append(a);
  } 



// click event for when "search" is clicked
$("#add-gif").on("click", function(event) {
    event.preventDefault();
  
    // grabbing the text from the input box
  var gifSearch = $("#gif-input").val() 

   
//   Similar button creation function located in the for loop above
// im sure there is a way to add my queries into the array but this works just the same
// just not as clean / efficient / dry
  
  // adding variable, a making it a button
   var b = $("<button>");

   // giving it a class
   b.addClass("gifbtns");

   // giving it a data attribute at the index i
   b.attr("data-name", gifSearch);

   // printing the name in the array at the index i
   b.text(gifSearch);

   // appending the buttons into their div
   $(".btndiv").append(b);



});

});

