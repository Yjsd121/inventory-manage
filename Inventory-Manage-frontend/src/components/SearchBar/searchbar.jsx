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
              <option value=''>-- SELECT --</option>
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

export function SearchBar({ endpoint, filters, setFilters, setselectedData }) {
  const [selectedFilters, setSelectedFilters] = useState({})
  const [Flag, setFlag] = useState(true)
  
  useEffect(() => {
    const initialFilters = {}
    Object.entries(filters).forEach(([name, options]) => {
      initialFilters[name] = options[0]
    })
    
    setFilters(initialFilters)
    console.log(initialFilters,endpoint)
  }, [endpoint])

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: value
    }))
  }

  useEffect(() => {
    fetch(`http://localhost:3000/${endpoint}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Server error")
        }
        return res.json()
      })
      .then(data => {
        const value = Object.values(data)[0]
        setselectedData(value)
      })
      .catch(error => console.log("AQUI HAY UN GRAN ERROR", error))
  }, [Flag,endpoint])

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


