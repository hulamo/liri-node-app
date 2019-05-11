
require("dotenv").config();
var axios = require("axios");

var fs = require("fs");

var Spotify = require('node-spotify-api');

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var qbuscar = process.argv[2];
var buscar = process.argv.slice(3).join("");
var divisor = "\n--------------------------------------\n\n";
var rs = "";

if (qbuscar == "cancion" || qbuscar== "song" ){  


spotify.search({ type: 'track', query: buscar }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
    rs = divisor + "La cancion econtrada con: " + buscar + " es: \n" + JSON.stringify(data.tracks.items[0].name, null,2)+ divisor; 

    fs.appendFile("random.txt", rs, function(err) {
      if(err) throw err;
    } )  

    console.log(rs)  
  
  
  
  });
}



// BUSCAR PELICULA
if (qbuscar == "pelicula" || qbuscar== "movie" ){  
  
  
axios.get("http://www.omdbapi.com/?t=" + qbuscar +"&type=movie&apikey=trilogy").then(
  function(response) {
    rs = divisor + "La pelicula Encontrada con " + buscar + " es: \n\n " + response.data.Title + divisor;
    console.log(rs)
    fs.appendFile("random.txt", rs, function(err) {
      if(err) throw err;
    } )  

  }
);
      
    
    
    }
  
