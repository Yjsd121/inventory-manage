import { useState } from "react"
import { Login_form } from "./components/loginform"
import { Register_form } from "./components/registerform"
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import './login.css'

export function Login() {
  const [watch, setwatch] = useState(false)
  const btncolor = !watch ? "blue" : "green"
  return (
    <section className="login-container">
      <img style={{ "width": "100px" }} src="/public/react.svg" />
      <h2>Inv Manage</h2>
      <section className="auth-container">
        {!watch
          &&
          <Login_form />
        }
        {watch
          &&
          <Register_form />
        }
        <a onClick={() => { setwatch(!watch) }}>{watch ? "Login" : "Sign up"}</a>
      </section>
    </section >
  )
}
