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
          <a className={view === 0 ? 'active' : ''} onClick={() => setview(0)}>Dashboard</a>
          <a className={view === 1 ? 'active' : ''} onClick={() => setview(1)}>Products</a>
          <a className={view === 2 ? 'active' : ''} onClick={() => setview(2)}>Orders</a>
          <a className={view === 3 ? 'active' : ''} onClick={() => setview(3)}>Users</a>
          <a className={view === 4 ? 'active' : ''} onClick={() => setview(4)}>Profile</a>
        </div>
        <div className='logout'>
          <a>Logout</a>
        </div>
      </nav>
    </section>
  )
}
