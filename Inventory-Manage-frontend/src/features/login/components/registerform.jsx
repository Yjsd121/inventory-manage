export function Register_form() {
  return (
    <section className="entry-container" style={{ "flexDirection": "column" }}>

      <h3>Register</h3>

      <div className="data-container">
        <input className='input' placeholder="names" />
        <input className='input' placeholder="last names" />
        <input className='input' type="e-mail" placeholder="E-mail" />
        <input className='input' type="password" placeholder="Password" />
        <input className='input' type="password" placeholder="confirm password" />


      </div>
      <div className="entry-container">
        <input type="checkbox" /> <p>Agree with Terms and conditions</p>

      </div>
    </section>
  )
}