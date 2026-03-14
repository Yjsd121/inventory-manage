import './NavegationBar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export function BarNav({ view, setview }) {
  return (
    <section className='main'>
      <div className='logo'>
        <img className='icon' src='/react.svg' />
        <p>Inv Manage</p>
      </div>
      <nav className='nav'>

        <div className='bar'>
          <ul>
            <li className={view === "Dashboard" ? 'active' : ''} onClick={() => setview("Dashboard")}><DashboardIcon /> Dashboard</li>
            <li className={view === "Products" ? 'active' : ''} onClick={() => setview("Products")}><Inventory2Icon /> Products</li>
            <li className={view === "Orders" ? 'active' : ''} onClick={() => setview("Orders")}><AlignHorizontalLeftIcon /> Orders</li>
            <li className={view === "Users" ? 'active' : ''} onClick={() => setview("Users")}><GroupIcon />Users</li>
            <li className={view === "Profile" ? 'active' : ''} onClick={() => setview("Profile")}><AccountCircleIcon /> Profile</li>
          </ul>
        </div>
        <div className='logout'>
          <li>< LogoutIcon />Logout</li>
        </div>
      </nav>
    </section>
  )
}
