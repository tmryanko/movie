import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BaseActions from '../actions/BaseActions';
import * as MoviesActions from '../actions/MoviesActions';
import MovieItem from './MovieItem';
import TrailerModal from './TrailerModal';
import Loading from './Loading';
import '../style/favorites.sass';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // movieList: []
      show: false,
      currentId: ''
    };
  }
  componentDidMount() {

  }
  openModal = (id) => {
    const { trailersVideoUrl } = this.props;

    this.setState({ currentId: id });
    this.setState({ show: true });
    if (!trailersVideoUrl[id]) {
      this.props.actions.getVideoUrlById(id);
    }
  }
    renderFavList = () => {
      const data = Object.values(this.props.favorites).map((item) => {
        const path = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;

        
        return (<MovieItem
                  onOpenModal={ (id) => this.openModal(id) } 
                  key={ item.id }
                  data={ item }
                  genre={ this.props.genre }
                  url={ path }/>);
      });

      return <div className="favImgContainer">{data}</div>;
    }
    
    render() {
      return (
        <div className="favContainer">
          { (Object.keys(this.props.favorites).length === 0) 
            ? <Loading/>
            : this.renderFavList()}
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
    favorites,
    genre,
    trailersVideoUrl
  } = state.movieReducer;

  return {
    favorites,
    genre,
    trailersVideoUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...BaseActions, ...MoviesActions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

Favorites.defaultProps = {
  favorites: null,
  genre: [],
  trailersVideoUrl: {}
};

Favorites.propTypes = {
  actions: PropTypes.object.isRequired,
  favorites: PropTypes.object,
  genre: PropTypes.array,
  trailersVideoUrl: PropTypes.object
};
