import './searchbar.css'
import { useState } from 'react'

function Listfilter ({ filter, values, onChange }) {
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

export function SearchBar ({ filters }) {
  const [selectedFilters, setSelectedFilters] = useState({})

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: value
    }))
  }

  const handleSearch = () => {
    console.log('Filtros seleccionados:', selectedFilters)
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

      <button onClick={handleSearch}>Search</button>
    </section>
  )
}
