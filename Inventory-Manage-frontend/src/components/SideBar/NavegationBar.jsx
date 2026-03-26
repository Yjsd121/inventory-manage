import './NavegationBar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
              <DashboardIcon />
              <span className={show ? "text" : "text hide"}>Dashboard</span>
            </li>
            <li className={view === "products" ? 'active' : ''} onClick={() => setview("products")}>
              <Inventory2Icon />
              <span className={show ? "text" : "text hide"}>Products</span>
            </li>
            <li className={view === "orders" ? 'active' : ''} onClick={() => setview("orders")}>
              <AlignHorizontalLeftIcon />
              <span className={show ? "text" : "text hide"}>Orders</span>
            </li>
            <li className={view === "users" ? 'active' : ''} onClick={() => setview("users")}>
              <GroupIcon />
              <span className={show ? "text" : "text hide"}>Users</span>
            </li>
            <li className={view === "profile" ? 'active' : ''} onClick={() => setview("profile")}>
              <AccountCircleIcon />
              <span className={show ? "text" : "text hide"}>Profile</span>
            </li>
          </ul>
        </div>
        <div className='logout' >
          <li>< LogoutIcon /><span className={show ? "text" : "text hide"}>Logout</span></li>
        </div>
        <div className={rotate ? 'Deployment right' : 'Deployment left'} onClick={() => {
          setrotate(!rotate)
          setshow(!show)
        }}>
          <li><ArrowForwardIosIcon
            className={rotate ? "arrow rotate" : 'arrow no'}
          /></li>
        </div>
      </nav>
    </section>
  )
}


