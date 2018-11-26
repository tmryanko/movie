import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddMovieModal from '../components/AddMovieModal';
import * as BaseActions from '../actions/BaseActions';
import * as MoviesActions from '../actions/MoviesActions';

import '../style/nav.sass';


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }
  handleAddMovieModal = () => {
    this.setState({ show: true });
  }
  handleAddMovie = (name) => {
    this.props.actions.addMovie(name);
  }
  
  render() { 
    const tooltip = (
      <Tooltip id="tooltip">
        Add Movie
      </Tooltip>
    );

    return (
      <div >
        <div className="navContainer">
          <div className="navLeft"> Movie-Library </div>
          <div className="navCenter"> 
            <NavLink className="navLink" to="/">Top Rated</NavLink>
            <NavLink className="navLink" to="/popular">Popular</NavLink>
            <NavLink className="navLink" to="/upcoming">Upcoming</NavLink>
            <NavLink className="navLink" to="/favorites">favorites</NavLink>
          </div>
          <div className="navRight" > 
            <OverlayTrigger placement="left" overlay={ tooltip }>
              <button className="navButton" onClick={ this.handleAddMovieModal }/>
            </OverlayTrigger>  
          </div>
        </div>
        <AddMovieModal 
        title="Add Movie"
        onHide={
          () => {
            this.setState({ show: false });
          } 
        }
        onAddMovie={ (movieName) => this.handleAddMovie(movieName) }
        onShow={ this.state.show }/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { favorites } = state.movieReducer;

  
  return {
    favorites
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...BaseActions, ...MoviesActions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
Nav.defaultProps = {
  
};

Nav.propTypes = {
  actions: PropTypes.object.isRequired
};
