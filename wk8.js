function getData() {
    var movie = document.getElementById(`movie`).value;
    var container = document.getElementById(`container`);
    var url = `http://www.omdbapi.com/?i=tt3896198&apikey=2efd3d52${movie}`;
    var xhttps = new XMLHttpRequest();       
}


xhttps.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);
        document.getElementById('director').innerHTML = data.Director;
        document.getElementById('title').innerHTML = data.Title;
        document.getElementById('runtime').innerHTML = data.Runtime;
        
//#1 VALID (RFC 8259)Formatted JSON Data//
{
    "Title":"Guardians of the Galaxy Vol. 2",
    "Year":"2017",
    "Rated":"PG-13",
    "Released":"05 May 2017",
    "Runtime":"136 min",
    "Genre":"Action, Adventure, Comedy, Sci-Fi",
    "Director":"James Gunn",
    "Writer":"James Gunn, Dan Abnett (based on the Marvel comics by),Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
    "Actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
    "Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    "Language":"English",
    "Country":"USA",
    "Awards":"Nominated for 1 Oscar. Another 14 wins & 52 nominations.",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    "Ratings":[
       {
          "Source":"Internet Movie Database",
          "Value":"7.6/10"
       },
       {
          "Source":"Rotten Tomatoes",
          "Value":"85%"
       },
       {
          "Source":"Metacritic",
          "Value":"67/100"
       }
    ],
    "Metascore":"67",
    "imdbRating":"7.6",
    "imdbVotes":"531,435",
    "imdbID":"tt3896198",
    "Type":"movie",
    "DVD":"22 Aug 2017",
    "BoxOffice":"$389,804,217",
    "Production":"Walt Disney Pictures",
    "Website":"N/A",
    "Response":"True"
 }
 

    }
};

 

xhttps.open("GET", url, true);

const button = document.getElementById('btn');
button.addEventListener('click', () => {
   getData();
   document.getElementById('container').style.border = '2px solid #000';
});
