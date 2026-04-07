import './minidash.css'
import { KipsMap } from '../../utils/kips'
import { useChartData } from '../../utils/Datachats'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useAppContext } from '../../context/TrialContext';
export function MiniDashboard({ valor }) {
  const data = useChartData(`Kips/${valor}`)
  const { setshowmodal } = useAppContext()

  return (
    <section >
      <div className="header">
        <div className='head'>
          <h2>{valor}</h2>
          <p>Manage your inventory and stock levels</p>
        </div>

        <div className={valor === 'dashboard' ? 'hiddebtn' : 'other'}>
          <button onClick={() => { setshowmodal(true) }} className="add-btn green"><AddCircleOutlineOutlinedIcon /> Add {valor}</button>
        </div>

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