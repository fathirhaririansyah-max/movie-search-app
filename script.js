const apiKey = "42937143";

async function searchMovie() {
    const movie = document.getElementById("movieInput").value.trim();

    if (movie === "") {
        alert("Please enter a movie title.");
        return;
    }

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movie)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.Response === "False") {
            alert(data.Error);
            return;
        }

        document.getElementById("poster").src = data.Poster;
        document.getElementById("poster").alt = data.Title;

        document.getElementById("title").textContent = data.Title;
        document.getElementById("year").textContent = "Year: " + data.Year;
        document.getElementById("genre").textContent = "Genre: " + data.Genre;
        document.getElementById("rating").textContent = "IMDb Rating: " + data.imdbRating;
        document.getElementById("plot").textContent = data.Plot;

    } catch (error) {
        console.error(error);
        alert("Failed to connect to the movie database.");
    }
}
