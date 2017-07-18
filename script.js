$(document).ready(function() {

  $("form").submit(compileMovies);

  function compileMovies(event) {
    event.preventDefault();
    obtainMovieInfo();
  };

  function obtainMovieInfo() {
    var name = $("input[name='title']").val();
    $.getJSON(
      "https://api.themoviedb.org/3/search/movie?query=" + name + "&api_key=66284d28433069de242f0f4a5d054488&language=en-US&page=1&include_adult=false",
      function(response) {
        console.log(response);
        $(".movieData").show();
        $("#poster").html("<img src='https://image.tmdb.org/t/p/w500/" + response.results[0].poster_path + "'>");
        

      })

  }
})


/* $("#submit").click(function() {
   var Search = $("#input").val();

   var url = "https://api.themoviedb.org/3/search/movie?query=" + input + "&api_key=66284d28433069de242f0f4a5d054488&language=en-US&page=1&include_adult=false";

   $.getJSON(url,

     function(data) {
       console.log(data);
         $(".results").append('<div>' + data.results[0].title + '</div>');
     });
 });*/
