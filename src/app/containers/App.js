import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MoviesActions from '../actions/MoviesActions';
import MovieList from '../components/MovieList';
import UpperList from '../components/UpperList';
import TrailerModal from '../components/TrailerModal';
import '../style/app.sass';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      currentId: ''
    };
  }
  componentDidMount() {
    this.props.actions.getGenre();
    this.props.actions.getTopRated();
    this.props.actions.getPopular();
    this.props.actions.getUpcoming();
  }
  openModal = (id) => {
    const { trailersVideoUrl } = this.props;

    this.setState({ currentId: id });
    this.setState({ show: true });
    if (!trailersVideoUrl[id]) {
      this.props.actions.getVideoUrlById(id);
    }
  }
  addMovieToFav = (item) => {
    this.props.actions.addMovieToFavorites(item);
  }
  renderUpperBody = () => {
    return (<UpperList 
      data={ this.props[this.props.title] } 
      genre={ this.props.genre } />);
  }
  
  renderLowerBody = () => {    
    return (<MovieList 
      data={ this.props[this.props.title] } 
      genre={ this.props.genre } 
      onOpenModal={ (id) => this.openModal(id) } 
      addToFav={ (item) => this.addMovieToFav(item) } />      
    );
  };
  
  render() {
    return (
      <div className="topRatedClass">
        <div className="topRatedPhotos"> 
          {this.renderUpperBody()}
        </div>
        <div className="topRatedContainer">
          <div className="topRatedMovies">
            {this.renderLowerBody()}
          </div>
        </div>
        <TrailerModal 
        title="Movie Trailer"
        onHide={
          () => {
            this.setState({ show: false });
          }
        }
        onShow={ this.state.show }
        url={ `https://www.youtube.com/embed/${this.props.trailersVideoUrl[this.state.currentId]}` }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    topRated, popular, upcoming, genre, trailersVideoUrl 
  } = state.movieReducer;

  return {
    topRated,
    popular,
    upcoming,
    genre,
    trailersVideoUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({  ...MoviesActions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.defaultProps = {
  genre: null,
  title: '',
  trailersVideoUrl: {}
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  genre: PropTypes.array,
  title: PropTypes.string,
  trailersVideoUrl: PropTypes.object
};

