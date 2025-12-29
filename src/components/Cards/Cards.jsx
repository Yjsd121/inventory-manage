import './Cards.css'
import { SearchBar } from '../SearchBar/searchbar'
import filters from '../../mocks/ProductsFilters.json'
function Cards ({ Item }) {
  return (
    <ul className='inventario'>
      {
        Item.map(item => (
          <li key={item.id}>
            <div className='Cards'>
              <img src='/react.svg' />
              <div className='Info'>
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>status: {item.status}</p>
                <p>Cant:{item.quantity}</p>
                <p>${item.unitPrice}</p>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export function ShowCards ({ elementss }) {
  const hasinventory = elementss?.length > 0
  return (
    <div className='show'>
      <SearchBar filters={filters.productFilters} />
      <div className='ShowCards'>
        {
          hasinventory
            ? <Cards Item={elementss} />
            : <h1> No hay inventario</h1>
        }
      </div>
    </div>
  )
}
