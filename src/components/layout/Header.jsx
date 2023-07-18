import { categoriesUrl } from '@/helpers/urls';
import React, { useMemo } from 'react'
import { Select } from '..'
import useFetch from './../../hooks/useFetch';

export default function Header() {
  const { data, loading } = useFetch(categoriesUrl)

  const categories = useMemo(() => {
    return data === null
      ? []
      : data.trivia_categories.map((item) => ({
        label: item.name,
        value: item.id,
      }))
  }, [data])

  const difficultyData = [
    {
      label: 'Easy',
      value: 'easy',
    },
    {
      label: 'Medium',
      value: 'medium',
    },
    {
      label: 'Hard',
      value: 'hard',
    },
  ]

  const typeData = [
    {
      label: 'Multiple/Choice',
      value: 'multiple',
    },
    {
      label: 'True/False',
      value: 'boolean',
    },
  ]

  console.log(data);
  return (
    <div className="header">
      <div className="container-header">
        <h1>Logo</h1>
        <div className='box-select'>
          <Select options={difficultyData} name='difficulty' />
          <Select options={typeData} name='type' />
          <Select options={categories} name='category' loading={loading} />
        </div>
      </div>
    </div>
  )
}
