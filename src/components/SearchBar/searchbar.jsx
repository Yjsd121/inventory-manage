import './searchbar.css'

function Listfilter ({ filter }) {
  return (
    <div className='Filters-container'>
      {
        Object.entries(filter).map(([filtername, options]) => (
          <div key={filtername} className='filter'>
            <label>{filtername}: </label>
            <select>
              {
                options.map(index => (
                  <option key={index}>{index}</option>
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
  return (
    <section className='Search-container'>
      <div>
        <input />
        <button>Search</button>
      </div>
      <Listfilter filter={filters} />
    </section>
  )
}
