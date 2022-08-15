import React, { useState } from 'react'
import carouselCSS from './Carousel.module.css';

const Carousel = ({carouselImages, currentImage,setCurrentImage}) => {
    const [isImageHovered, setIsImageHovered] = useState(() => false);
    function switchImage(e){
        const name = e?.target?.name;
        
        if(name === "down_btn"){
            (currentImage > 0)
                ? setCurrentImage(prev => prev - 1)
                : setCurrentImage(carouselImages.length - 1);
        }else{
            (currentImage < carouselImages.length - 1)
                ? setCurrentImage(prev => prev + 1)
                : setCurrentImage(0);
        }
    }

  return (
    <>
    <h3 className={carouselCSS.carousel_header}>Latest news</h3>
    <div className={carouselCSS.carousel_container}>
        <div className={carouselCSS.carousel_content}
        onMouseEnter={() => {setIsImageHovered(true)}}
        onMouseLeave={() => {setIsImageHovered(false)}}
        >
            {isImageHovered &&
            <div className={carouselCSS.carousel_img_content}>
                <div className={carouselCSS.carousel_img_info}>
                    <h2>{carouselImages[currentImage].title}</h2>
                    <p>{carouselImages[currentImage].description}</p>
                </div>
            </div>}

            <a href={carouselImages[currentImage].url} >
                <img 
                    src={carouselImages[currentImage].img}
                    alt={carouselImages[currentImage].img}
                />
            </a>
            <button 
                className={carouselCSS.image_down_btn}
                name="down_btn"
                onClick={switchImage}> {'<'} </button>
            <button 
                className={carouselCSS.image_up_btn}
                name="up_btn"
                onClick={switchImage}> {'>'} </button>
            <div className={carouselCSS.image_count_container}>
                {carouselImages.map((img, index) => 
                        <div className={(index === currentImage)
                            ? carouselCSS.img_count_selected
                            : carouselCSS.img_count} 
                            key={img.url} 
                            onClick={() => setCurrentImage(index)}></div>)}
            </div>
        </div>
    </div>
    </>
  )
}

export default Carousel