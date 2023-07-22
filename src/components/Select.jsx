import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import { categoriesUrl } from '@/helpers/urls';
import useFetch from '@/hooks/useFetch';

function SelectComponent({ options, name,  defaultValue, style }) {
  const { loading } = useFetch(categoriesUrl)
  const [localeData, setLocaleData] = useState({})

  const handleSelectChange = (value) => {
    const obj = !!localeData ? localeData : {}
    obj[name] = value

    localStorage.setItem('settings', JSON.stringify(obj))
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      const localeData = JSON.parse(localStorage.getItem('settings'))
      setLocaleData(localeData)
    }
  }, [])

  if (!Boolean(options) || !Boolean(options.length)) {
    return null
  }

  return (
      <Select  onChange={handleSelectChange} defaultValue={defaultValue} style={style}>
        {loading ? (
            <option>Loading...</option>
          ) : (
            options.map((item, key) => (
              <option  value={item.value} key={key}>
                {item.label}
              </option>
            ))
          )}
      </Select>
  )
}

export default SelectComponent