import './Dashboard.css'
import MyChart from './charts/barchar'
import { useChartData } from '../utils/Datachats'

export function Dashboard({ endpoint }) {
  const data = useChartData(endpoint)

  return (
    <div className="dashboard">

      <div className="card c5">
        <MyChart data={data.P}></MyChart>
      </div>

      <div className="card c6">
        <MyChart data={data.O}></MyChart>
      </div>

        
    </div>
  )
}