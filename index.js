var canciones = process.argv.slice(2).join(" ");
console.log ("Proyecto Canciones");
var axios = require("axios");
var Spotify = require('node-spotify-api');
 
//axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  //function(response) {
   // console.log("The movie's rating is: " + response.data.imdbRating);
//  }
//);

// BQCD4vwGJzuqxJtLwcKO3fB6

axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);



var spotify = new Spotify({
  id: "cf18bccb88a04c91b7201f08d63257ae",
  secret: "a2108d12bf3b42f78d5f5e1c317497bd"
});
 
spotify.search({ type: 'track', query: canciones }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data.tracks.items[0].name, null,2)); 
//var datos =JSON.stringify(data, null,2);
//console.log ();


//datos = JSON.stringify(data);
//console.log(response.data.tracks);
//console.log(datos.tracks[1]);

});
//console.log(spotify);


