import { Page } from '@/components/layout'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { generaterUrl, fetcher } from './../helpers/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setQuizList } from '@/redux/slice/QuizSlice';

export default function Home() {
  const router = useRouter()
  const [settings, setSettings] = useState(null)
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const { data, isLoading } = useSWR(
    'https://opentdb.com/api.php' + generaterUrl({ ...settings, amount: 10 }),
    fetcher
  )

  const handleBtnClick = () => {
    router.push({ pathname: '/Test', query: { ...router.query } })
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      const localeData = localStorage.getItem('settings')
      setSettings(JSON.parse(localeData));
    }
  }, [])

  useEffect(() => {
    dispatch(setQuizList(data?.results))
    dispatch(setLoading(isLoading))
  }, [data])

  console.log(state)

  return (
    <Page>
      <div className="main">
        <div className="container">
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro asperiores eveniet adipisci ut
            cumque sequi facere delectus doloremque iusto enim esse aliquam reprehenderit itaque obcaecati
            nostrum, placeat explicabo velit repellat deserunt nihil ad reiciendis consequatur. Dolores corrupti
            beatae numquam, quas velit sint! Repellendus officiis harum eos sunt in iste, aperiam animi debitis
            quidem quia quae accusamus, repudiandae labore minus nam aliquid itaque incidunt corporis rem. Porro
            sed enim eos nisi!
          </h3>
          <button className='btn' onClick={handleBtnClick}>Start</button>
        </div>
      </div>
    </Page>
  )
}

