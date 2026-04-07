import './NavegationBar.css'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';

import { useState } from 'react';

export function BarNav({ view, setview }) {
  const [rotate, setrotate] = useState(true)
  const [show, setshow] = useState(true)

  return (
    <section className={show ? 'main' : 'main hidde'}>
      <div className='logo'>
        <img className={show ? 'ProfileImg' : 'icon'} src='/react.svg' />
        <p><span className={show ? "text" : "text hide"}>Inv Manage</span></p>
      </div>
      <nav className='nav'>
        <div className='bar'>
          <ul>
            <li className={view === "dashboard" ? 'active' : ''} onClick={() => setview("dashboard")}>
              <DashboardOutlinedIcon />
              <span className={show ? "text" : "text hide"}>Dashboard</span>
            </li>
            <li className={view === "products" ? 'active' : ''} onClick={() => setview("products")}>
              <Inventory2OutlinedIcon />
              <span className={show ? "text" : "text hide"}>Products</span>
            </li>
            <li className={view === "orders" ? 'active' : ''} onClick={() => setview("orders")}>
              <BorderColorOutlinedIcon />
              <span className={show ? "text" : "text hide"}>Orders</span>
            </li>
            <li className={view === "users" ? 'active' : ''} onClick={() => setview("users")}>
              <PeopleAltOutlinedIcon />
              <span className={show ? "text" : "text hide"}>Users</span>
            </li>
            <li className={view === "profile" ? 'active' : ''} onClick={() => setview("profile")}>
              <AccountCircleOutlinedIcon />
              <span className={show ? "text" : "text hide"}>Profile</span>
            </li>
          </ul>
        </div>

      </nav>
      <div className='logout' >
        <li>< LogoutIcon /><span className={show ? "text" : "text hide"}>Logout</span></li>
      </div>
      <div className={rotate ? 'Deployment right' : 'Deployment left'} onClick={() => {
        setrotate(!rotate)
        setshow(!show)
      }}>
        <li><ArrowLeftOutlinedIcon
          className={rotate ? "arrow" : 'arrow '}
        /></li>
      </div>
    </section>
  )
}


