import './Cards.css'
import { useAppContext } from '../context/TrialContext'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { MiniDashboard } from '../components/CHART/MiniDashboards';

import { BarNav } from '../components/SideBar/NavegationBar';
import { SearchBar } from '../components/SearchBar/searchbar';
import productsfilter from '../mocks/ProductsFilters.json'
import { Modal } from '../components/modal';

function Cards({ Item, selectedfilters }) {
  return (
    <ul className='inventario'>
      {
        Item
          .filter(item => {
            return ((item.Category === selectedfilters.categories || selectedfilters.categories === 'all') &&
              (item.Status === selectedfilters.status || selectedfilters.status === 'all'))
          })
          .map(item => (
            <li key={item.Id}>
              <div className='Cards'>
                <img src='/react.svg' />

                <p>Name: {item.Name}</p>
                <p>status: {item.Status}</p>
                <p>Cant:{item.Quantity}</p>
                <p>${item.Price}</p>

                <div className='actions'>
                  <button id='edit'><ModeEditOutlinedIcon /> Edit </button>
                  <button id='delete'><DeleteForeverOutlinedIcon /> Delete</button>
                </div>
              </div>
            </li>
          ))
      }
    </ul>
  )
}

export function ShowCards() {
  const { showmodal, SelectedData, selectedfilters } = useAppContext()
  const hasinventory = SelectedData?.length > 0

  return (
    <main>
      <BarNav />
      <div className="Right">
        <div className="content">
          <MiniDashboard valor='products' />
          <SearchBar endpoint={'products'} filters={productsfilter.productFilters} />
          <div className='show'>
            <div className='color'>
              <div className='ShowCards'>
                {
                  hasinventory
                    ? <Cards Item={SelectedData} selectedfilters={selectedfilters} />
                    : <h1> No hay inventario</h1>
                }
              </div>
            </div>
            {

              showmodal && <Modal filter={productsfilter.productFilters}/>

            }
          </div>
        </div>
      </div>
    </main>
  )
}
