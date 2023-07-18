import { Page } from '@/components/layout'
import React, { useEffect, useMemo, useState } from 'react'
import useFetch from './../hooks/useFetch';
import { testUrl } from './../helpers/urls';

function Test() {
    const [settings, setSettings] = useState({})
    const { data, loading } = useFetch(testUrl, { amount: 10, ...settings }, [settings])

    const tests = useMemo(() => {
        return data === null ? [] : data.results
    }, [data])


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localeData = localStorage.getItem('settings')
            setSettings(JSON.parse(localeData));
        }
    }, [])

    return (
        <Page>
            <div className='test'>
                <div className="container">
                    {loading ? (
                        <h3>Loading..</h3>
                    ) : (
                        <div>
                            <h3>{tests[0]?.quesrion}</h3>
                        </div>
                    )}
                </div>
            </div>
        </Page>
    )
}

export default Test
