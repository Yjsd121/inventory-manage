import './NavegationBar.css'

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';

import { usePagesContext } from '../../../context/pagesContext';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function BarNav() {
  const [rotate, setrotate] = useState(true)
  const { show, setshow, view, setview } = usePagesContext()

  return (
    <section className={show ? 'main' : 'main hidde'}>
      <div className='logo'>
        <img className={show ? 'ProfileImg' : 'icon'} src='/react.svg' />
        <p><span className={show ? "text" : "text hide"}>Inv Manage</span></p>
      </div>
      <nav className='nav'>
        <div className='bar'>
          <ul>
            <NavLink to='/dashboard'>
              <li className={`navlink `} >
                <DashboardOutlinedIcon />
                <span className={show ? "text" : "text hide"}>Dashboard</span>
              </li>
            </NavLink>
            <NavLink to='/Products'>
              <li className={`navlink `} >
                <Inventory2OutlinedIcon />
                <span className={show ? "text" : "text hide"}>Products</span>
              </li>
            </NavLink>
            <NavLink to='/Orders'>
              <li className={`navlink`} >
                <BorderColorOutlinedIcon />
                <span className={show ? "text" : "text hide"}>Orders</span>
              </li>
            </NavLink>
            <NavLink to='/Profile'>
              <li className={`navlink `} >
                <AccountCircleOutlinedIcon />
                <span className={show ? "text" : "text hide"}>Profile</span>
              </li>
            </NavLink>
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


