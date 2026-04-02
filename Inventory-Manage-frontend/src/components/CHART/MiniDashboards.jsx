import './minidash.css'
import chart from '../../mocks/Chart.json'
import { KipsMap } from '../../utils/kips'
import { useChartData } from '../../utils/Datachats'

export function MiniDashboard({ valor }) {
  const data = useChartData(`Kips/${valor}`)
  console.log(data, chart)
  return (
    <section >
      <div className="header">
        <div>
          <h2>{valor}</h2>
          <p>Manage your inventory and stock levels</p>
        </div>
        {
          valor === 'dashboard'
            ?
            <p>hola</p>
            :
            <div className='other'>
              <button className="add-btn green">+ Add {valor}</button>
              <button className="add-btn yellow"> Edit</button>
              <button className="add-btn red">- Delete </button>
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