// custom hook start with 'use'
import {useState, useEffect} from 'react';


const useFetch = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        
        fetch(url) // abort controller
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch( e =>{
                console.log(e);
            })

    }, [url]); // useEffect and dependency array

    return {data};
}

export default useFetch;