import MovieTopView from './MovieTopView.js';

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTNlYjM5MzcwZDk0NGFhMGEwNGFlNjBhMjE4NjQyZSIsIm5iZiI6MTczMDM2NzI3MC42NjQzMTgzLCJzdWIiOiI2NzIzNGUyOTQ3ZmUwOTdjMTkzZmJkMmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ju4LebVS_rL9huxR81KPNEmApggT0OZrJ8xtkvszzJ4'; // Replace with your actual API key

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      console.log('Search button clicked'); // Log the click event
      const query = document.getElementById('search-input').value.toLowerCase();
      console.log('Search query:', query); // Log the search query
      searchMovies(query);
    });
  } else {
    console.error('Search button not found');
  }

  async function fetchGenres() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    try {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=fr-FR', options);
      const data = await response.json();
      console.log('Fetched genres:', data.genres); // Log fetched genres
      return data.genres;
    } catch (error) {
      console.error('Error fetching genres:', error); // Log any errors
    }
  }

  async function searchMovies(query) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    console.log('Searching for:', query); // Log the search query
    console.log('options:', options); // Log the options

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=fr-FR&page=1`, options);
      const data = await response.json();
      console.log('Search results:', data); // Log the search results
      const movies = data.results;
      const genres = await fetchGenres();
      const app = document.querySelector('#app');
      app.innerHTML = '<div class="movies-search"></div>';
      const moviesContainer = app.querySelector('.movies-search');

      movies.slice(0, 50).forEach(movieData => {
        const movieGenres = movieData.genre_ids.map(id => genres.find(genre => genre.id === id).name).join(', ');
        const movie = new MovieTopView(
          movieData.title,
          movieData.overview,
          movieData.poster_path,
          movieGenres,
          movieData.release_date,
          movieData.vote_average,
          movieData.id
        );
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-frame');
        movieElement.innerHTML = movie.render();
        moviesContainer.appendChild(movieElement);
      });
    } catch (error) {
      console.error('Error fetching search results:', error); // Log any errors
    }
  }
});