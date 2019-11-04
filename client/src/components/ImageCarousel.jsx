import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

class ImageCarousel extends Component {
    static propTypes = {
        images: PropTypes.array
    }

    render() {
        const { images } = this.props;

        const imagesList = images.map( (image, i) => {
            return <img src={ image } key={ i } />
        })
        return (
            <Carousel   className="images"
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        showThumbs={false}
                        showStatus={false}
                        dynamicHeight>
                { imagesList }
            </Carousel>
        );
    }
}

export { ImageCarousel };