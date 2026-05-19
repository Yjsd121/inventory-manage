import { useState } from "react"

export function Register_form() {
  const [formData, setFormData] = useState({
    names: "",
    lastnames: "",
    email: "",
    password: "",
    confirm_password: ""
  })
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

  }
  return (
    <form
      className="entry-container"
      style={{ flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <h2>Register</h2>
      <div className="data-container">
        <input
          className="input"
          type="text"
          name="names"
          placeholder="Names"
          value={formData.names}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="lastnames"
          placeholder="Last names"
          value={formData.lastnames}
          onChange={handleChange}
        />
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
          placeholder="passwoord"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          className="input"
          type="password"
          name="confirm_password"
          placeholder="confirm passwoord"
          value={formData.confirm_password}
          onChange={handleChange}
        />
      </div>
      <div className="entry-container">
        <input type="checkbox" /> <p> Agree with Terms & Condition</p>
      </div>
      <button type="submit" style={{ "width": "100%", "backgroundColor": "#22c22a", "color": "white" }}>
        Register
      </button>
    </form>
  )
}