import './searchbar.css'
import { useState, useEffect } from 'react'
import { useAppContext } from '../../context/TrialContext'

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

export function SearchBar({ endpoint, filters }) {
  const [Flag, setFlag] = useState(true)


  const { selectedfilters, setFilters, setselectedData } = useAppContext()

  useEffect(() => {
    const initialFilters = {}
    Object.entries(filters).forEach(([name, options]) => {
      initialFilters[name] = options[0]
    })

    setFilters(initialFilters)

  }, [endpoint])

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
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
  }, [Flag, endpoint])

  const handleSetfilter = () => {
    setFlag(!Flag)
    setFilters({})
  }

  return (
    <section className='Search-container'>
      <Listfilter
        filter={filters}
        values={selectedfilters}
        onChange={handleFilterChange}
      />

      <div className='search'>
        <input type='text' className='input' />
        <button onClick={handleSetfilter}>Search</button>
      </div>

    </section>
  )
}


