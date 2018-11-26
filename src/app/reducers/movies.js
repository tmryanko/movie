

const movieReducer = (state = {
  genre: [], topRated: [], popular: [], upcoming: [], trailersVideoUrl: {}, favorites: {}
}, action) => {
  switch (action.type) {
    case 'GET_TOP_RATED_SUCCESS': {
      return Object.assign({}, state, {
        topRated: [...action.data]
      });
    }
    
    case 'GET_VIDEO_URL_SUCCESS': {
      return Object.assign({}, state, {
        trailersVideoUrl: { ...state.trailersVideoUrl, [action.data.id]: action.data.data }
      });
    }
    case 'ADD_MOVIE_SUCCESS': {
      return Object.assign({}, state, {
        favorites: { ...state.favorites, [action.data.data.id]: action.data.data }
      });
    }
    case 'GET_POPULAR_SUCCESS': {
      return Object.assign({}, state, {
        popular: [...action.data]
      });
    }
    case 'GET_UPCOMING_SUCCESS': {
      return Object.assign({}, state, {
        upcoming: [...action.data]
      });
    }
    case 'GET_GENRE_SUCCESS': {
      return Object.assign({}, state, {
        genre: [...action.data]
      });
    }
    case 'ADD_MOVIE_TO_FAVORITES_SUCCESS': {
      return Object.assign({}, state, {
        favorites: { ...state.favorites, [action.data.id]: action.data }
      });
    }
    default:
      return state;
  }
};
    
export default movieReducer;
