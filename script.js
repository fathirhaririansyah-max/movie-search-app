const apiKey = "42937143";

async function searchMovie() {
    const movie = document.getElementById("movieInput").value.trim();

    if (!movie) {
        alert("Please enter a movie title!");
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movie)}`);
        const data = await response.json();

        console.log(data);

        if (data.Response === "False") {
            alert(data.Error);
            return;
        }

        document.getElementById("poster").src = data.Poster !== "N/A"
            ? data.Poster
            : "https://via.placeholder.com/300x450?text=No+Image";

        document.getElementById("title").textContent = data.Title;
        document.getElementById("year").textContent = "Year: " + data.Year;
        document.getElementById("genre").textContent = "Genre: " + data.Genre;
        document.getElementById("rating").textContent = "IMDb Rating: " + data.imdbRating;
        document.getElementById("plot").textContent = data.Plot;

    } catch (error) {
        console.error(error);
        alert("Failed to connect to OMDb API.");
    }
}
