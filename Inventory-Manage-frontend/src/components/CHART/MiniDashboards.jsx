import { Chart } from 'primereact/chart';
import './minidash.css'
import { getcolor } from '../../utils/getcolor';
import chart from '../../mocks/Chart.json'

export function MiniDashboard() {
  return (
    <section >
      <div className="header">
        <div>
          <h2>Products</h2>
          <p>Manage your inventory and stock levels</p>
        </div>

        <div className='other'>
          <button className="add-btn green">+ Add Product</button>
          <button className="add-btn yellow"> Edit</button>
          <button className="add-btn red">- Delete </button>
        </div>
      </div>

      <div className='MiniDashboard'>
        {chart.labels.map((item, index) => (
          <div className='chart' key={index}>

            <span className='title'>{item.name}</span>

            <span className='value'>{item.value}</span>

            <div className={`indicador ${getcolor(item.value)}`}></div>

          </div>
        ))}
      </div>
    </section>
  )
}