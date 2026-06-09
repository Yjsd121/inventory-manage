import './Dashboard.css'
import MyChart from '../../components/charts/barchar'
import { useChartData } from '../../utils/Datachats'
import { BarNav } from '../../components/ui/SideBar/NavegationBar'
import { MiniDashboard } from '../../components/ui/CHART/MiniDashboards'

export function Dashboard() {

  const data = useChartData('Dashboard') 

  return (
    <main>
      <BarNav />
      <div className="Right">
        <div className="content">
          <MiniDashboard valor='Dashboard' />
          <div className="dashboard">

            <div className="card c5">
              <h2>Inventory</h2>
              <MyChart data={data.P} ></MyChart>
            </div>

            <div className="card c6">
              <h2>Orders types</h2>
              <MyChart data={data.O} ></MyChart>
            </div>

          </div>
        </div>
      </div>
    </main>
  )

}
