import './NavegationBar.css'

export function BarNav () {
  return (
    <section className='main'>
      <nav className='nav'>
        <div className='logo'>
          <img className='icon' src='/react.svg' />
          <p>Inv Manage</p>
        </div>
        <a>Dashboard</a>
        <a>Products</a>
        <a>Categories</a>
        <a>Orders</a>
        <a>Users</a>
        <a>Profile</a>
        <a>Logout</a>
      </nav>
    </section>
  )
}
