import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAppContext } from './context/TrialContext'

import { Modal } from './components/modal'

import { Dashboard } from './Dashboard/Dashboard'
import { ShowCards } from './Products/Cards'
import { ShowOrders } from './orders/Orders'
import { Profileview } from './Profile/profile'

export function App() {
  const { showmodal, selectedfilters, SelectedData } = useAppContext()

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Products' element={<ShowCards />} />
        <Route path='/Orders' element={<ShowOrders />} />
        <Route path='/Profile' element={<Profileview />} />
      </Routes>
    </BrowserRouter>


  )
}
