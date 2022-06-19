import React, { Suspense, useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import Products from './Products'
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';

// const Products = React.lazy(() => import('./Products'));

const Content = () => {
  const [products, setProducts] = useState(() => []);
  const [isLoading, setIsLoading] = useState(() => true);
  const navigate = useNavigate();

  useEffect(
    () => {
        axios.get('https://dummyjson.com/products')
        .then(data => {
            setProducts(data.data.products);
            setIsLoading(false);
        })
        .catch(e => {
            console.error(e.message);
            navigate('/home');
        });
    },
    []);
  return (
      <>
        {isLoading
        ? <Loader/>
        : <Products products={products}/>}
        {/* <Suspense fallback={<Loader/>}>
            <Products products={products} dispatchProducts={dispatchProducts}/>
        </Suspense> */}
      </>
  )
}

export default Content