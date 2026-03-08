import './NavegationBar.css'

export function BarNav ({ view, setview }) {
  return (
    <section className='main'>
      <div className='logo'>
        <img className='icon' src='/react.svg' />
        <p>Inv Manage</p>
      </div>
      <nav className='nav'>

        <div className='bar'>
          <a className={view === "Dashboard" ? 'active' : ''} onClick={() => setview("Dashboard")}>Dashboard</a>
          <a className={view === "Products" ? 'active' : ''} onClick={() => setview("Products")}>Products</a>
          <a className={view === "Orders" ? 'active' : ''} onClick={() => setview("Orders")}>Orders</a>
          <a className={view === "Users" ? 'active' : ''} onClick={() => setview("Users")}>Users</a>
          <a className={view === "Profile" ? 'active' : ''} onClick={() => setview("Profile")}>Profile</a>
        </div>
        <div className='logout'>
          <a>Logout</a>
        </div>
      </nav>
    </section>
  )
}
