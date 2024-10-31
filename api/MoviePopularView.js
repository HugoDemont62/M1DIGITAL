export default class MoviePopularView {
  constructor(title, overview, posterPath, genres, releaseDate, averageRating, movieId) {
    this.title = title;
    this.overview = overview;
    this.posterPath = `https://image.tmdb.org/t/p/w500${posterPath}`;
    this.genres = genres
    this.releaseDate = new Date(releaseDate).toLocaleDateString('fr-FR');
    this.averageRating = averageRating;
    this.movieId = movieId;
  }

  render() {
    return `
      <div class="movies-popular lowercase">
        <img src="${this.posterPath}" alt="${this.title}" />
        <h2>${this.title}</h2>
        <p>${this.overview}</p>
        <p>Genres: ${this.genres}</p>
        <p>Release Date: ${this.releaseDate}</p>
        <p>Average Rating: ${this.averageRating}</p>
        <a href="https://www.themoviedb.org/movie/${this.movieId}" target="_blank">View Details</a>
      </div>
    `;
  }
}