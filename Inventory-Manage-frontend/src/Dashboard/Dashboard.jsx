import './Dashboard.css'
import MyChart from './charts/TotalProducts'

export function Dashboard({ endpoint }) {

  return (
    <div className="dashboard">
      <div className="card c1">1</div>
      <div className="card c2">2</div>
      <div className="card c3">3</div>
      <div className="card c4">4</div>

      <div className="card c5">
        <MyChart></MyChart>
      </div>

      <div className="card c6">6</div>
      <div className="card c7">7</div>
      <div className="card c8">8</div>
    </div>
  )
}