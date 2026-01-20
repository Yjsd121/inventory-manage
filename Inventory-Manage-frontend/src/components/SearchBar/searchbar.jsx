import './searchbar.css'
import { useState, useEffect } from 'react'

function Listfilter({ filter, values, onChange }) {
  return (
    <div className='Filters-container'>
      {
        Object.entries(filter).map(([filtername, options]) => (
          <div key={filtername} className='filter'>
            <label>{filtername}: </label>
            <select
              value={values[filtername] || ''}
              onChange={(e) => onChange(filtername, e.target.value)}
            >
              <option value=''>-- Selecciona --</option>
              {
                options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))
              }
            </select>
          </div>
        ))
      }
    </div>
  )
}

export function SearchBar({ filters, setFilters, setselectedData }) {
  const [selectedFilters, setSelectedFilters] = useState({})
  const [Flag,setFlag] = useState(true)
  const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: value
    }))
  }

  useEffect(()=>{
    try {
      fetch('http://localhost:3000/Search')
      .then(res=res.json())
      .then(data=>setselectedData(data))
    } catch (error) {
      console.log('AQUI HAY UN GRAN ERROR',error)
    }
  },[Flag])

  const handleSetfilter = () => {
    setFilters(selectedFilters)
    setFlag(!Flag)
    setSelectedFilters({})
  }

  return (
    <section className='Search-container'>
      <Listfilter
        filter={filters}
        values={selectedFilters}
        onChange={handleFilterChange}
      />

      <input type='checkbox' />
      <input type='text' className='input' />

      <button onClick={handleSetfilter}>Search</button>
    </section>
  )
}
