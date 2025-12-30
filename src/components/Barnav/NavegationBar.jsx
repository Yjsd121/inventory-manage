import './NavegationBar.css'

export function BarNav ({ setview }) {
  return (
    <section className='main'>
      <nav className='nav'>
        <div className='logo'>
          <img className='icon' src='/react.svg' />
          <p>Inv Manage</p>
        </div>
        <a onClick={() => setview(0)}>Dashboard</a>
        <a onClick={() => setview(1)}>Products</a>
        <a onClick={() => setview(2)}>Orders</a>
        <a onClick={() => setview(3)}>Users</a>
        <a onClick={() => setview(4)}>Profile</a>
        <a>Logout</a>
      </nav>
    </section>
  )
}
