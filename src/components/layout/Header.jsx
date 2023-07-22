import { categoriesUrl } from '@/helpers/urls';
import React, { useMemo } from 'react'
import useFetch from './../../hooks/useFetch';
import SelectComponent from '../Select';
import { GlobalOutlined } from '@ant-design/icons';

export default function Header() {
  const { data, loading } = useFetch(categoriesUrl)

  const categories = useMemo(() => {
    return data === null
      ? []
      : data?.trivia_categories?.map((item) => ({
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
  return (
    <div className="header">
      <div className="container-header">
        <h1><GlobalOutlined />    Logo</h1>
        <div className='box-select'>
          <SelectComponent style={{width: "150px"}} options={difficultyData} name='difficulty' defaultValue="Difficulty"/>
          <SelectComponent style={{width: "150px"}} options={typeData} name='type' defaultValue="Type"/>
          <SelectComponent style={{width: "300px"}} options={categories} name='category' loading={loading} defaultValue="Category"/>
        </div>
      </div>
    </div>
  )
}
