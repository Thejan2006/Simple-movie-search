const apiKey = "3de243";

const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", searchMovie);

async function searchMovie() {

    const movieName = document.getElementById("searchInput").value.trim();

    if (movieName === "") {
        alert("Please enter a movie name");
        return;
    }

    resultDiv.innerHTML = "<p>Loading...</p>";

    try {

        const response = await fetch(
            `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
        );

        const data = await response.json();

        if (data.Response === "False") {
            resultDiv.innerHTML = `<p>❌ Movie not found!</p>`;
            return;
        }

        resultDiv.innerHTML = `
            <div class="movie-info">
                <h2>${data.Title}</h2>
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>IMDB Rating:</strong> ⭐ ${data.imdbRating}</p>
                <img src="${data.Poster}" alt="Poster">
                <p>${data.Plot}</p>
            </div>
        `;

    } catch (error) {
        resultDiv.innerHTML = `<p>⚠️ Something went wrong!</p>`;
        console.error(error);
    }
}
