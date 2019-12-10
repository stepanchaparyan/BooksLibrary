import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import { CarouselContainer } from './ImageCarouselStyled';

const ImageCarousel = ({images}) => {
    const imagesList = images.map( (image, i) => {
        return <img src={ image } key={ i } />
    })
    return (
        <CarouselContainer>
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                dynamicHeight>
            { imagesList }
            </Carousel>
        </CarouselContainer>
    );
}

ImageCarousel.propTypes = {
    images: PropTypes.array
}

export { ImageCarousel };