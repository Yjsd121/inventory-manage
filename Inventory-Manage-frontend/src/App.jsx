import './App.css'
import { useState } from 'react'
import { BarNav } from './components/SideBar/NavegationBar'
import { Vistas } from './Router/Vistas'
import { AppProvider } from './context/TrialContext'


export function App() {
  const [view, setview] = useState("Dashboard")

  return (
    <AppProvider>
      <main>
        <BarNav view={view} setview={setview} />
        <div className="Right">
          <div className="content">
            <Vistas valor={view} />
          </div>
        </div>
      </main>
    </AppProvider>
  )
}
