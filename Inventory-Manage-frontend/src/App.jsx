import './App.css'
import { useEffect, useState } from 'react'
import { BarNav } from './components/Barnav/NavegationBar'
import { Vistas } from './Router/Vistas'


export function App() {
  const [view, setview] = useState("Dashboard")
  const [selectedfilters, setFilters] = useState({})
  const [SelectedData, setselectedData] = useState({})

  useEffect(()=>{
    console.log(SelectedData)
  },[SelectedData])
  return (
    <main>
      <BarNav view={view} setview={setview} />
      <Vistas valor={view} SelectedData={SelectedData} setFilters={setFilters} selectedfilters={selectedfilters} setselectedData={setselectedData} />
    </main>
  )
}
