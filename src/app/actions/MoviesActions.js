import axios from 'axios';

const API_KEY = '4e849556923e34ed3df2d23a0ae8b9f7';

export const getTopRatedSuccess = (data) => ({
  type: 'GET_TOP_RATED_SUCCESS', data
});
export const getVideoUrlByIdSuccess = (data) => ({
  type: 'GET_VIDEO_URL_SUCCESS', data
});
export const addMovieToFavoritesSuccess = (data) => ({
  type: 'ADD_MOVIE_TO_FAVORITES_SUCCESS', data
});
export const addMovieSuccess = (data) => ({
  type: 'ADD_MOVIE_SUCCESS', data
});
export const getPopularSuccess = (data) => ({
  type: 'GET_POPULAR_SUCCESS', data
});
export const getUpcomingSuccess = (data) => ({
  type: 'GET_UPCOMING_SUCCESS', data
});
export const getGenreSuccess = (data) => ({
  type: 'GET_GENRE_SUCCESS', data
});

export const toasterFail = (e) => ({
  type: 'FAIL_MESSAGE', e
});
export const getTopRated = () => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      dispatch(getTopRatedSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(toasterFail({ msg: error }));
    });
};
export const getPopular = () => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      dispatch(getPopularSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(toasterFail({ msg: error }));
    });
};
export const getUpcoming = () => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => {
      dispatch(getUpcomingSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(toasterFail({ msg: error }));
    });
};
export const getGenre = () => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      dispatch(getGenreSuccess(response.data.genres));
    })
    .catch((error) => {
      dispatch(toasterFail({ msg: error }));
    });
};
export const getVideoUrlById = (movieId) => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
    .then((response) => {
      dispatch(getVideoUrlByIdSuccess({ data: response.data.results[0].key, id: movieId }));
    })
    .catch((err) => {
      dispatch(toasterFail({ msg: err }));
    });
};

export const addMovieToFavorites = (movie) => (dispatch) => {
  try {
    dispatch(addMovieToFavoritesSuccess(movie));
  } catch (error) {
    dispatch(toasterFail({ msg: error }));
  }
};

export const addMovie = (movieName) => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
    .then((response) => {
      dispatch(addMovieSuccess({ data: response.data.results[0] }));
    })
    .catch((err) => {
      dispatch(toasterFail({ msg: err }));
    });
};
