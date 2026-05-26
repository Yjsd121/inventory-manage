import './Cards.css'
import { useAppContext } from '../../context/TrialContext.jsx'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { MiniDashboard } from '../../components/ui/CHART/MiniDashboards.jsx';

import { BarNav } from '../../components/ui/SideBar/NavegationBar.jsx';
import { SearchBar } from '../../components/ui/SearchBar/searchbar.jsx';
import { productFilters } from '../../static/ProductsFilters.js'
import { PModal } from '../../components/ProductsModal.jsx';
import { Umodal } from '../../components/Modal.jsx';

function Cards({ Item, selectedfilters }) {
  const { search } = useAppContext()

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
          <SearchBar endpoint={'products'} filters={productFilters} />
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
              showmodal && <Umodal><PModal /></Umodal>
            }
          </div>
        </div>
      </div>
    </main>
  )
}
