// Sample data for genres and movies
const genres = ['Action', 'Comedy', 'Romance', 'Thriller'];
const movies = {
    Action: ['Movie1', 'Movie2', 'Movie3'],
    Comedy: ['Movie4', 'Movie5', 'Movie6'],
    Romance: ['Movie7', 'Movie8', 'Movie9'],
    Thriller: ['Movie10', 'Movie11', 'Movie12'],
};

// Function to start Movie Night
function startMovieNight() {
    showPage('genre-page');
    populateGenres();
}

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

// Function to populate genre options
function populateGenres() {
    const genrePage = document.getElementById('genre-page');
    const genreButtons = genres.map(genre => {
        const button = document.createElement('button');
        button.textContent = genre;
        button.addEventListener('click', () => chooseGenre(genre));
        return button;
    });
    genreButtons.forEach(button => genrePage.appendChild(button));
}

// Function to choose a genre
function chooseGenre(genre) {
    currentGenre = genre;
    showPage('movie-page');
    populateMovies();
}

// Function to populate movie options based on the chosen genre
function populateMovies() {
    const moviePage = document.getElementById('movie-page');
    const movieButtons = movies[currentGenre].map(movie => {
        const button = document.createElement('button');
        button.textContent = movie;
        button.addEventListener('click', () => chooseMovie(movie));
        return button;
    });
    movieButtons.forEach(button => moviePage.appendChild(button));
}

// Function to choose a movie
function chooseMovie(movie) {
    chosenMovie = movie; // Change variable name to chosenMovie
    showPage('result-page');
    document.getElementById('picked-movie').textContent = chosenMovie;
}


// Function to restart Movie Night
function restartMovieNight() {
    currentGenre = null;
    chosenMovie = null;

    // Clear content from genre and movie pages
    clearPageContent('genre-page');
    clearPageContent('movie-page');
    
    showPage('welcome-page');
}

function clearPageContent(pageId) {
    const page = document.getElementById(pageId);
    if (page) {
        while (page.firstChild) {
            page.removeChild(page.firstChild);
        }
    }
}
// Other functions and event listeners can be added as needed
