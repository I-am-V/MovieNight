// Define global variables
let currentGenre;
let chosenMovie;

// Function to show a specific page and hide others
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

// Function to start Movie Night
function startMovieNight() {
    showPage('genre-page');
}

// Function to choose a genre
function chooseGenre(genre) {
    currentGenre = genre;
    showPage('movie-page');
    // Implement logic to display movies based on the chosen genre
}

// Function to choose a movie
function chooseMovie(movie) {
    chosenMovie = movie;
    showPage('result-page');
    document.getElementById('picked-movie').textContent = chosenMovie;
}

// You can add event listeners or additional logic as needed
