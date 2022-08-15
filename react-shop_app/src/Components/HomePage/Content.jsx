import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import axios from 'axios';
import Carousel from './Carousel';

const Content = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(
    () => {
      axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-08-14&to=2022-08-14&sortBy=popularity&apiKey=7ecdec32d41c426fa985daa2a86ac3fa')
      .then(data => {
          data.data.articles.forEach(article => {
            setCarouselImages(prevImages => 
              [...prevImages, {img: article.urlToImage, url: article.url, title: article.title, description: article.description}]);
          });
          setIsLoading(false);
      })
      .catch(e => console.error(e.message));
    }
    ,[]
  );
  
  return (
      <>
        {isLoading
        ? <Loader/>
        : <Carousel carouselImages={carouselImages} currentImage={currentImage} setCurrentImage={setCurrentImage}/>}
      </>
  )
}

export default Content