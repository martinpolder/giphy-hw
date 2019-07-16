// creating array of initial buttons
var btnArr = ["basketball", "spaghetti", "dog", "cat", "france", "eagle", "USA", "hamburger", "owl", "ferrari", "thor", "cricket", "salah"];

// loop through the array and create a button
$(document).ready(function () {

    function buttonRender() {
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
    };



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

    buttonRender;
});

