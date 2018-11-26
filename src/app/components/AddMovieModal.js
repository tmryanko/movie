import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

class AddMovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: ''
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleAddMovie = (e) => {
    e.preventDefault();
    this.props.onAddMovie(this.state.movieName);
  }
  render() {
    const {  movieName } = this.state;
    const { onShow, onHide, title } = this.props;
    
    return (
      <div>
        <Modal
            show={ onShow }
            onHide={ onHide }>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              { title }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>
                movieName:
                <input onChange={ this.handleChange } type="movieName" name="movieName" value={ movieName } />
                <button onClick={ this.handleAddMovie } value="add">Add Movie</button>
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ onHide }>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddMovieModal;

AddMovieModal.defaultProps = {
  title: '',
  onShow: false,
  onHide: () => {},
  onAddMovie: () => {}
};
    
AddMovieModal.propTypes = {
  title: PropTypes.string,
  onShow: PropTypes.bool,
  onHide: PropTypes.func,
  onAddMovie: PropTypes.func
};
