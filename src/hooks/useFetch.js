import { useEffect, useState } from 'react';
import { generaterUrl } from './../helpers/helpers';

function useFetch(url, options = {}, dep = []) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const newUrl = options !== null ? url + generaterUrl(options) : url 

    useEffect(() => {
        if (url !== null) {
            setLoading(true)
            fetch(newUrl)
                .then((response) => response.json())
                .then((json) => {
                    setData(json)
                    setLoading(false)
                })
        }
    }, dep)

    return { data, loading }
}

export default useFetch