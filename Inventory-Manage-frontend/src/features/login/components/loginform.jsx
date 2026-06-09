import { getInputAdornmentUtilityClass } from "@mui/material/InputAdornment";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"

export function Login_form() {
  const navigate = useNavigate()
  const [wrongpass, setwrongpass] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/Auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    })

    const token = await response.json()
    localStorage.setItem('token', token.token)

    if (token.token) {
      navigate('/dashboard')
    } else {
      setwrongpass(token)
    }

  }
  return (
    <form
      className="entry-container"
      style={{ flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <h2>Login</h2>

      <div className="data-container">
        <input
          className="input"
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="input"
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {
        !wrongpass && <div className="wrongpass">
          <p>Contraseña incorrecta</p>
        </div>
      }
      <div className="entry-container">
        <input type="checkbox" /> <p> Remember me</p>
        <a>forgot password?</a>
      </div>

      <button type="submit" style={{ "width": "100%", "backgroundColor": "#386bf8", "color": "white" }}>
        Login
      </button>

    </form>
  )
}