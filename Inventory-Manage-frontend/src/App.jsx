import './App.css'
import { useEffect, useState } from 'react'
import { BarNav } from './components/SideBar/NavegationBar'
import { Vistas } from './Router/Vistas'
import { AppProvider } from './context/TrialContext'
import { useAppContext } from './context/TrialContext'

export function App() {
  const [view, setview] = useState("Dashboard")

  return (
    <AppProvider>
      <main>
        <BarNav view={view} setview={setview} />
        <Vistas valor={view} />
      </main>
    </AppProvider>
  )
}
