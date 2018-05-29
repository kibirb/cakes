function selectMovie(movie) {
  return {
    type: 'MOVIE_SELECTED',
    payload: movie
  }
}
export default selectMovie;
