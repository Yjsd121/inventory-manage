import './minidash.css'
import chart from '../../mocks/Chart.json'
import { KipsMap } from '../../utils/kips'
import { useChartData } from '../../utils/Datachats'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
export function MiniDashboard({ valor }) {
  const data = useChartData(`Kips/${valor}`)
  console.log(data, chart)
  return (
    <section >
      <div className="header">
        <div className='head'>
          <h2>{valor}</h2>
          <p>Manage your inventory and stock levels</p>
        </div>
        {
          valor === 'dashboard'
            ?
            <p>hola</p>
            :
            <div className='other'>
              <button className="add-btn green"><AddCircleOutlineOutlinedIcon/> Add {valor}</button>
            </div>
        }
      </div>

      <div className='MiniDashboard'>
        {!data?.labels ? (
          <p>Cargando...</p>
        ) : (
          <KipsMap chart={data} />
        )}
      </div>
    </section>
  )
}