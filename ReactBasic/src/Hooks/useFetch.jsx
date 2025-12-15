import axios from 'axios/unsafe/axios.js';
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(true)
            })
    }, [url])
    return { data, loading }
}

export default useFetch