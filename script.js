// creating array of initial buttons/search topics
var btnArr = ["basketball", "spaghetti", "dog", "cat", "france", "eagle", "USA", "hamburger", "owl", "ferrari", "thor", "cricket", "salah"];


// this is the function that takes the data from out buttons and grabs the gifs!
function giphyGrab() {

  // storing the data value from the button that was clicked upon
  var myGif = $(this).attr("data-name");

  // using that variable^ to construct a giphy URL
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    myGif + "&api_key=aVqONE3asI6bLg2Y1DHSKfYZwc81GDF3&limit=13";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function (response) {
      console.log(queryURL);

      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;



      // Looping through each result item
      for (var i = 0; i < results.length; i++) {

        //   creating a div tag for each image that will be loaded
        var gifDiv = $("<div class=work>");

       
      

        //   adding a p tag so that the grabbed rating will be displayed
        var p = $("<p>").text("Rating: " + results[i].rating);

        // //  creating an image tag for each image loaded
        // var gifImage = $("<img>");


        // Setting the src attribute of the image to the URL pulled off the result item
        // attempting to set multiple attributes that will help with the pausing and playing
        // doesnt seem to work lol
        // gifImage.attr({
        //   "src": results[i].images.fixed_height.url,
        //   "data-still": results[i].images.fixed_height.url,
        //   "data-animate": results[i].images.fixed_height.url,
        //   "date-state": "still",
        //   "class": "thegif"
        // });

         // setting variables for the animated and static source

        var defaultAnimatedSrc = results[i].images.fixed_height.url;
        var staticSrc = results[i].images.fixed_height_still.url;
        var gifImage = $("<img class='img-fluid'>");

        // setting all the attributes for the image
        gifImage.attr("src", staticSrc);
        gifImage.addClass("theGif");
        gifImage.attr("data-state", "still");
        gifImage.attr("data-still", staticSrc);
        gifImage.attr("data-animate", defaultAnimatedSrc);


        //   appending the rating and image into the gifDiv variable
        gifDiv.append(p);
        gifDiv.append(gifImage);

        // prepending all that lovely information in gifDiv into the div designated to store them
        $(".gifdiv").prepend(gifDiv);
      }
    })
  $("#gif-input").val();
}




// loop through the array and create a button
function createBtns() {

  $(".btndiv").empty();

  for (i = 0; i < btnArr.length; i++) {

    // adding variable, a making it a button
    var a = $("<button>");

    // giving it a class
    a.addClass("gifbtns btn btn-outline-success");

    // giving it a data attribute at the index i
    a.attr("data-name", btnArr[i]);

    // printing the name in the array at the index i
    a.text(btnArr[i]);

    // appending the buttons into their div
    $(".btndiv").append(a);
  }
  $("#gif-input").val();
}



// the click event for the search bar button
$("#add-gif").on("click", function (event) {
  event.preventDefault();

  // grabbing the text from the input box
  var gifSearch = $("#gif-input").val()

  console.log(gifSearch);

  //   pushing the input value into the btn array
  btnArr.push(gifSearch);

  //  testing to make sure its all going in the right place :) 
  console.log(btnArr);

  //  run the loop function again to render buttons for the added search terms
  createBtns();

});



// Adding a click event listener to all elements
$(document).on("click", ".gifbtns", giphyGrab);

$(document).on("click", ".theGif", pausePlayGifs);

// pause/play function if else statement, grabs the state of the image and changes it depending
function pausePlayGifs() {
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
}


createBtns();