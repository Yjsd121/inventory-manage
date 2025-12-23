import './NavegationBar.css'

export function BarNav () {
  return (
    <section className='main'>
      <nav className='nav'>
        <div className='left'>
          <a>Logo</a>
        </div>

        <div className='right'>
          <a>Search</a>
          <a>Add</a>
          <a>Login</a>
        </div>
      </nav>
    </section>
  )
}
