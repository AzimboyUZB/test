import { useEffect, useState } from 'react';

function useFetch(url, options = {}, dep = []) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (url !== null) {
            setLoading(false)
        }
    }, dep)

    return { data, loading }
}

export default useFetch