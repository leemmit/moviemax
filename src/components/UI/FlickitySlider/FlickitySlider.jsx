import './flickity.css'
import Flickity from 'react-flickity-component';

const flickityOptions = {
    initialIndex: 2
}

const FlickitySlider = () => {
    return (
        <div>
            <Flickity
            className='Slider'
            elementType='div'
            disableImagesLoaded={false}
            options={flickityOptions}
            reloadOnUpdate
            static
            >
                
            
            </Flickity>
        </div>
    );
}

export default FlickitySlider;