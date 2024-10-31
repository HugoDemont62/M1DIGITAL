class MovieTop {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.themoviedb.org/3';
  }

  async getTopRatedMovies(pageCount = 3) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.apiKey}`
      }
    };

    let allMovies = [];
    for (let page = 1; page <= pageCount; page++) {
      const response = await fetch(`${this.baseUrl}/movie/top_rated?page=${page}&language=fr-FR`, options);
      const data = await response.json();
      const moviesWithDetails = await Promise.all(data.results.map(async (movie) => {
        const detailsResponse = await fetch(`${this.baseUrl}/movie/${movie.id}?language=fr-FR`, options);
        const details = await detailsResponse.json();
        return {
          title: movie.title,
          overview: movie.overview,
          posterPath: movie.poster_path,
          genres: details.genres,
          releaseDate: movie.release_date,
          averageRating: movie.vote_average,
          movieId: movie.id
        };
      }));
      allMovies = allMovies.concat(moviesWithDetails);
    }
    return allMovies;
  }
}

export default MovieTop;