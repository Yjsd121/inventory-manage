import { useState } from "react"
import './login.css'
export function Login() {
  const [watch, setwatch] = useState(false)
  return (
    <main>
      <section className="login-container">
        {!watch
          &&
          <div>
            <h2>Login</h2>
            <input type="text" placeholder="mail" />
          </div>}
        {watch && <h3>register</h3>}
        <button onClick={() => { setwatch(!watch) }}>{!watch ? "Login" : "register"} </button>
      </section>
    </main>
  )
}