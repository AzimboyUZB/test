import { Page } from '@/components/layout'
import React from 'react'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()

  const handleBtnClick = () => {
    router.push({pathname: '/Test', query: { ...router.query }})
  }
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

