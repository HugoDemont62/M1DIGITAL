import './style.css';
import MoviePopular from './MoviePopular.js';
import MoviePopularView from './MoviePopularView.js';
import MovieTop from './MovieTop.js';
import MovieTopView from './MovieTopView.js';

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTNlYjM5MzcwZDk0NGFhMGEwNGFlNjBhMjE4NjQyZSIsIm5iZiI6MTczMDM2NzI3MC42NjQzMTgzLCJzdWIiOiI2NzIzNGUyOTQ3ZmUwOTdjMTkzZmJkMmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ju4LebVS_rL9huxR81KPNEmApggT0OZrJ8xtkvszzJ4'; // Replace with your actual API key
const moviePopular = new MoviePopular(apiKey);
const movieTop = new MovieTop(apiKey);

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path.includes('popular.html')) {
    displayPopularMovies();
  } else if (path.includes('top.html')) {
    displayTopRatedMovies();
  }

  async function fetchGenres() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=fr-FR', options);
    const data = await response.json();
    return data.genres;
  }

  async function displayPopularMovies() {
    const genres = await fetchGenres();
    const movies = await moviePopular.getPopularMovies();
    const app = document.querySelector('#app');
    app.innerHTML = '<div class="movies-popular"></div>';
    const moviesContainer = app.querySelector('.movies-popular');

    movies.slice(0, 50).forEach(movieData => {
      const movieGenres = movieData.genres.map(genre => genre.name).join(', ');
      const movie = new MoviePopularView(
        movieData.title,
        movieData.overview,
        movieData.posterPath,
        movieGenres,
        movieData.releaseDate,
        movieData.averageRating,
        movieData.movieId
      );
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie-frame');
      movieElement.innerHTML = movie.render();
      moviesContainer.appendChild(movieElement);
    });
  }

  async function displayTopRatedMovies() {
    const genres = await fetchGenres();
    const movies = await movieTop.getTopRatedMovies();
    const app = document.querySelector('#app');
    app.innerHTML = '<div class="movies-top"></div>';
    const moviesContainer = app.querySelector('.movies-top');

    movies.slice(0, 50).forEach(movieData => {
      const movieGenres = movieData.genres.map(genre => genre.name).join(', ');
      const movie = new MovieTopView(
        movieData.title,
        movieData.overview,
        movieData.posterPath,
        movieGenres,
        movieData.releaseDate,
        movieData.averageRating,
        movieData.movieId
      );
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie-frame');
      movieElement.innerHTML = movie.render();
      moviesContainer.appendChild(movieElement);
    });
  }
});