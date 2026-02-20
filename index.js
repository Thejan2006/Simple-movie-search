
let key = "3de243";


function searchMovie(){
    
  const movie = document.getElementById("Search").value; // get html file documet and pass search to movie 

  let url = "https://www.omdbapi.com/?t=" + movie + "&apikey=" + key;  // url to get the movie data  and add api key


  let httpRequest = new XMLHttpRequest(); // create a new XMLHttpRequest object

  httpRequest.open("GET", url); // open a connection to the url

  httpRequest.responseType = "json";

  httpRequest.send(); // send the request to the url
   
  httpRequest.onload = function(){
     
      console.log(httpRequest.response); // print the response text
      let movie = httpRequest.response;

      document.getElementById("title").innerHTML = movie.Title;
      document.getElementById("year").innerHTML = movie.Year;
      document.getElementById("rating").innerHTML = movie.imdbRating;
      document.getElementById("poster").src = movie.Poster;
      document.getElementById("plot").innerHTML = movie.Plot;
      document.getElementById("genre").innerHTML = movie.Genre;
      document.getElementById("director").innerHTML = movie.Director;
      document.getElementById("actors").innerHTML = movie.Actors;
      document.getElementById("language").innerHTML = movie.Language;
      document.getElementById("country").innerHTML = movie.Country;
      document.getElementById("awards").innerHTML = movie.Awards;
      document.getElementById("boxoffice").innerHTML = movie.BoxOffice;
      document.getElementById("website").innerHTML = movie.Website;
      document.getElementById("response").innerHTML = movie.Response;

  }



}