import './App.css'
import { useState } from 'react'
import { BarNav } from './components/SideBar/NavegationBar'
import { Vistas } from './Router/Vistas'
import { useAppContext } from './context/TrialContext'
import { Modal } from './components/modal'

export function App() {
  const [view, setview] = useState("dashboard")
  const { showmodal } = useAppContext()
  return (
    <main>
      <BarNav view={view} setview={setview} />
      <div className="Right">
        <div className="content">
          <Vistas valor={view} />
          {
            showmodal &&
            <Modal view={view}/>
          }
        </div>
      </div>
    </main>
  )
}
