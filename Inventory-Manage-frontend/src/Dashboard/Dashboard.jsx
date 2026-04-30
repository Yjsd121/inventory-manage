import './Dashboard.css'
import MyChart from './charts/barchar'
import { useChartData } from '../utils/Datachats'
import { BarNav } from '../components/SideBar/NavegationBar'
import { MiniDashboard } from '../components/CHART/MiniDashboards'

export function Dashboard() {
  const data = useChartData('Dashboard')

  return (
    <main>
      <BarNav />
      <div className="Right">
        <div className="content">
          <MiniDashboard valor= 'Dashboard'/>
          <div className="dashboard">

            <div className="card c5">
              <MyChart data={data.P}></MyChart>
            </div>

            <div className="card c6">
              <MyChart data={data.O}></MyChart>
            </div>


          </div>
        </div>
      </div>
    </main>
  )
}