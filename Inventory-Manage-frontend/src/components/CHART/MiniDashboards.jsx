import { Chart } from 'primereact/chart';
import './minidash.css'
import { getcolor } from '../../utils/getcolor';
import chart from '../../mocks/Chart.json'

export function MiniDashboard() {
  return (
    <section className='MiniDashboard'>
      {chart.labels.map((item, index) => (
        <div className='chart' key={index}>
          
          <span className='title'>{item.name}</span>

          <span className='value'>{item.value}</span>

          <div className={`indicador ${getcolor(item.value)}`}></div>

        </div>
      ))}
    </section>
  )
}