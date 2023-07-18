import React, { useEffect, useState } from 'react'

function Select({ options, name, loading = false }) {
  const [localeData, setLocaleData] = useState({}) 
  const handleSelectChange = ({ target }) => {
    const { value } = target
    const obj = !! localeData ? localeData : {}
    console.log(obj);
    obj[name] = value

    localStorage.setItem('settings', JSON.stringify(obj))
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const localeData = JSON.parse(localStorage.getItem('settings'))
        setLocaleData(localeData)
    }
}, [])

  if (!Boolean(options) || !Boolean(options.length)) {
    return null
  }

  return (
    <select onChange={handleSelectChange}>
      {loading ? (
        <option>Loading...</option>
      ) : (
        options.map((item, key) => (
          <option value={item.value} key={key}>
            {item.label}
          </option>
        ))
      )}
    </select>
  )
}

export default Select