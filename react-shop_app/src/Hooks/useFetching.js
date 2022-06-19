import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFetching = (url, errUrl) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(
        () => {
            (async function (){
                try{
                    const res = await axios.get(url);
                    setData(res.data);
                }catch(e){
                    console.error(e.message);
                    navigate(errUrl);
                }finally{
                    setIsLoading(false);
                }
            })();
        }, []
    );
    // console.log(data);

    return {data, setData, isLoading};
}

export default useFetching;