import React, { useRef, useState } from 'react'
import productCSS from './Product.module.css'
import {Link} from 'react-router-dom';

const Product = React.memo(({id,images, discountPercentage,rating, title, description, price}) => {
  const isDiscounted = useRef(Boolean(Math.round(Math.random())));
  const [isLoaded, setIsLoaded] = useState(() => false);

  return (
    <Link to={isDiscounted.current ? `/products/${id}?disc=1` : `/products/${id}`} className={productCSS.product_item}>
        <div className={productCSS.product_display}>
            <img className={productCSS.product_img} src={images[0]} alt={`${images[0]}`} onLoad={() => setIsLoaded(true)}/>
            {!isLoaded && <div className={productCSS.product_img_overlay}></div>}
            <span className={productCSS.product_rating}>{rating}</span>
            {isDiscounted.current && <span className={productCSS.product_discount}>-{Math.round(discountPercentage)}%</span>}
        </div>
        <div className={productCSS.product_body}>
          <p className={productCSS.product_title}>{title.slice(0, 20)}</p>
          <span className={productCSS.product_description}>{description.slice(0, 45)}...</span>
          {isDiscounted.current
          ?<h3 className={productCSS.product_price_discounted}>{price}.00$ <span>{price + Math.round(((discountPercentage/100) * price))}$</span></h3>
          :<h3 className={productCSS.product_price}>{price}.00 $</h3>}
        </div>
    </Link>
  )
});

export default Product