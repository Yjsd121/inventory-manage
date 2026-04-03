import './Cards.css'
import { useAppContext } from '../context/TrialContext'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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

export function ShowCards({ endpoint }) {
  const { SelectedData, selectedfilters } = useAppContext()
  const hasinventory = SelectedData?.length > 0

  return (
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

    </div>
  )
}
