import './Cards.css'
import { useAppContext } from '../context/TrialContext'
import { SearchBar } from '../components/SearchBar/searchbar'
import cards from '../mocks/ProductsFilters.json'


function Cards({ Item, selectedfilters }) {
  return (
    <ul className='inventario'>
      {
        Item
          .filter(item => {
            return ((item.category === selectedfilters.categories || selectedfilters.categories === 'all') &&
              (item.status === selectedfilters.status || selectedfilters.status === 'all'))
          })
          .map(item => (
            <li key={item.Id}>
              <div className='Cards'>
                <img src='/react.svg' />
                <div className='Info'>
                  <p>Name: {item.Name}</p>
                  <p>status: {item.Status}</p>
                  <p>Cant:{item.Quantity}</p>
                  <p>${item.Price}</p>
                </div>
              </div>
            </li>
          ))
      }
    </ul>
  )
}

export function ShowCards({ endpoint }) {
  const { SelectedData, selectedfilters } = useAppContext()
  const hasinventory = SelectedData?.length > 0

  return (
    <div className='show'>
      <div className='color'>
        <SearchBar
          endpoint={endpoint}
          filters={cards.productFilters}
        />
        <div className='ShowCards'>
          {
            hasinventory
              ? <Cards Item={SelectedData} selectedfilters={selectedfilters} />
              : <h1> No hay inventario</h1>
          }
        </div>
      </div>

    </div>
  )
}
