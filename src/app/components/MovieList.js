import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../components/MovieItem';
import '../style/movieList.sass';


export default class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const body = this.props.data.map((item) => {
      const path = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
      
      return (
        <MovieItem
        key={ item.id }
        data={ item }
        url={ path }
        genre={ this.props.genre }
        onOpenModal={ () => this.props.onOpenModal(item.id) }
        addToFav={ () => this.props.addToFav(item) }/>
      );
    });

    return (
      <div className="topRatedMoviesOpt">{body}</div>
    );
  }
}
MovieList.defaultProps = {
  data: [],
  genre: [],
  onOpenModal: () => {},
  addToFav: () => {}
};

MovieList.propTypes = {
  data: PropTypes.array,
  genre: PropTypes.array,
  onOpenModal: PropTypes.func,
  addToFav: PropTypes.func
};
