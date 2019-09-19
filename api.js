(document).ready(function () {









    $("#submitbtn").on("click", function (event) {
        event.preventDefault();

        var newBtn = $("<button>");
        newBtn.addClass("image-button");
        newBtn.attr("data-image");

        var btnTxt = $("#search").val();





        newBtn.text(btnTxt);

        console.log(btnTxt);
        console.log(newBtn);

        $("#new-buttons").prepend(newBtn);











        $(document).on("click", ".image-button", function () {


            // var image = $(this).attr("data-image")

            // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            //     image + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

            console.log("this");

            // $.ajax({
            //     url: queryURL,
            //     method: "GET"
            // })

            //     .then(function (response) {
            //         var results = response.data;
            //         console.log(results);

            //         for (var i = 0; i < results.length; i++) {
            //             if (results[i].rating !== "g" && results[i].rating !== "pg-13") {


            //                 var imageDiv = $("<div>");
            //                 var newImg = $("<img>");
            //                 newImg.attr("src", results[i].images.fixed_height.url);
            //                 var rating = results[i].rating;
            //                 var p = $("<p>").text("Rating: " + rating);



            //                 imageDiv.append(p);
            //                 imageDiv.append(newImg);
            //                 $("#gifs-here").prepend(imageDiv);


            //             }
            //         }
            //     })
        })
    })


})