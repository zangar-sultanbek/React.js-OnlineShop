import ProductId from './ProductId'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';

const Content = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    
    useEffect(
        () => {
            axios.get(`https://dummyjson.com/products/${params.id}`)
            .then(data => {
                setProduct(data.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err.message);
                navigate('/products');
            });
        },
        []
    );

    return (
        <>
            {isLoading
            ? <Loader/>
            : <ProductId {...product}/>}
        </>
    )
}

export default Content