import './Dashboard.css'
import MyChart from './charts/barchar'
import { useChartData } from '../utils/Datachats'

export function Dashboard({ endpoint }) {
  const data = useChartData(endpoint)
  const dataC1 = data.Kips_O?.[0]?.T_orders || 0

  return (
    <div className="dashboard">
      <div className="card c1">Total products</div>
      <div className="card c2">2</div>
      <div className="card c3">3</div>
      <div className="card c4">4</div>

      <div className="card c5">
        <MyChart data={data.P}></MyChart>
      </div>

      <div className="card c6">
        <MyChart data={data.O}></MyChart>
      </div>

      <div className="card c7">7</div>
      <div className="card c8">8</div>

    </div>
  )
}