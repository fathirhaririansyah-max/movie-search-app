const apiKey = "42937143";

async function searchMovie(){

const movie=document.getElementById("movieInput").value;

if(movie===""){
alert("Enter movie title");
return;
}

const url=`https://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

const response=await fetch(url);

const data=await response.json();

if(data.Response==="False"){
alert("Movie not found");
return;
}

document.getElementById("poster").src=data.Poster;
document.getElementById("title").innerText=data.Title;
document.getElementById("year").innerText="Year : "+data.Year;
document.getElementById("genre").innerText="Genre : "+data.Genre;
document.getElementById("rating").innerText="IMDb : "+data.imdbRating;
document.getElementById("plot").innerText=data.Plot;

}
