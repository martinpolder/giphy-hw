// creating array of initial buttons


var btnArr = ["basketball", "spaghetti", "dog", "cat", "france", "eagle", "USA", "hamburger", "owl", "ferrari", "thor", "cricket", "salah"];


// this is the function that takes the data from out buttons and grabs the gifs!
function giphyGrab() {

    // Grabbing and storing the data-animal property value from the button
    var myGif = $(this).attr("data-name");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      myGif + "&api_key=aVqONE3asI6bLg2Y1DHSKfYZwc81GDF3&limit=13";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var gifDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var gifImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          gifImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          gifDiv.append(p);
          gifDiv.append(gifImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
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
            a.addClass("gifbtns");

            // giving it a data attribute at the index i
            a.attr("data-name", btnArr[i]);

            // printing the name in the array at the index i
            a.text(btnArr[i]);

            // appending the buttons into their div
            $(".btndiv").append(a);
        }
        $("#gif-input").val();
    }





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

    $(document).on("click", ".gifbtns", giphyGrab);

    createBtns();







// // loop through the array and create a button
// $(document).ready(function () {

//     function buttonRender() {
//         for (i = 0; i < btnArr.length; i++) {

//             // adding variable, a making it a button
//             var a = $("<button>");

//             // giving it a class
//             a.addClass("gifbtns");

//             // giving it a data attribute at the index i
//             a.attr("data-name", btnArr[i]);

//             // printing the name in the array at the index i
//             a.text(btnArr[i]);

//             // appending the buttons into their div
//             $(".btndiv").append(a);
//         }
//     };



    // click event for when "search" is clicked
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
        buttonRender;

    });



//     });

//     buttonRender;
// });

