import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import '../style/movieItem.sass';


export default class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  getGenre = (num) => {
    const name = this.props.genre.filter((item) => {
      return item.id === num;
    });

    return name[0].name;
  }
  addToFav = (item) => {
    this.props.addToFav(item);
  }
  render() {
    const { data, url } = this.props;  

    return (
      <div className="imgItemBottom" key={ data.id }>
        <div className="imgBox" >
          <img className="imgItem" src={ url } alt="" />
          <OverlayTrigger placement="right" overlay={ <Tooltip id="tooltip">Add To Favorites</Tooltip> }>
            <button className="favoritesButton" onClick={ () => this.addToFav(data) } />
          </OverlayTrigger>
          <OverlayTrigger placement="right" overlay={ <Tooltip id="tooltip">Open Trailer</Tooltip> }>
            <button className="playButton" onClick={ () => this.props.onOpenModal(data.id) } />
          </OverlayTrigger>
          <div className="ratingBox">
            <span className="rating">{data.vote_average}</span>
          </div>
        </div>
        <div>{data.title}</div>
        <div>{this.getGenre(data.genre_ids[0])}</div>
          
      </div>
    );
  }
}
MovieItem.defaultProps = {
  data: null,
  url: '',
  genre: [],
  onOpenModal: () => {},
  addToFav: () => {}
};

MovieItem.propTypes = {
  data: PropTypes.object,
  url: PropTypes.string,
  genre: PropTypes.array,
  onOpenModal: PropTypes.func,
  addToFav: PropTypes.func
};
