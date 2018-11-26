
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import '../style/upperList.sass';


export default class UpperList extends Component {
  renderList = () => {

  }
  render() {
    const params = {
      slidesPerView: 4,
      loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      shouldSwiperUpdate: true,
      rebuildOnUpdate: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    };
    const test =  this.props.data.map((item) => {
      const path = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
                
      return (
        <div className="imgItemTop" key={ item.id }><img className="imgItem" src={ path } alt=""/></div> 
           
      );
    });
            
    return (
      <div className="upList" >
        <Swiper { ...params }>
          { test }
        </Swiper>
      </div>
    );
  }
}
UpperList.defaultProps = {
  data: []
};

UpperList.propTypes = {
  data: PropTypes.array
};
