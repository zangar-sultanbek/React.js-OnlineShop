import { useState } from "react";


const useLoading = async (cb) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    async function callerFn(){
        try{
            await cb();
        }catch(e){
            setError(e.message);
        }finally{
            setIsLoading(false);
        }
    }

    return [callerFn,isLoading, error]
}

export default useLoading;