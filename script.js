$(document).ready(function() {
    $("#submit").click(function() {
      var Search = $("#input").val();

      var url = "https://api.themoviedb.org/3/search/movie?query=" + input + "&api_key=66284d28433069de242f0f4a5d054488&language=en-US&page=1&include_adult=false";

      $.getJSON(url,

        function(data) {
          console.log(data);
            $(".results").append('<div>' + data.results[0].title + '</div>');
        });
    });
  })
  /*var request= new XMLHttpRequest();
  request.open('get', "https://api.themoviedb.org/3/search/movie?query=ape&api_key=66284d28433069de242f0f4a5d054488&language=en-US&page=1&include_adult=false");
  request.onload = function (){
    var Data = JSON.parse(request.responseText);
    console.log("Data has loaded" + Data[1]);
    
  };
  request.send();*/

// Example from Giphy API project
// $(document).ready(function() {
//     $('#submit').click(function() {
//         var q = $('#query').val();
//         getGiphyGifs(q, function(data) {
//             $("#search-results").empty();
//             for (var i = 0; i < data.length; i++) {
//                 $("#search-results").append("<a href='" + data[i].images.original.url + "' target='_blank'>" + "<img src = '" + data[i].images.fixed_height_downsampled.url + "'>");
//             }
//         });
//     });
// })
