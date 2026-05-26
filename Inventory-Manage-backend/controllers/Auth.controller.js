const Authservice = require('../services/Auth.service')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.authlogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await Authservice.getusers(email)

    if (user.length === 0) {
      return res.status(404).json({
        ok: false,
        message: 'usuario no encontrado'
      })
    }

    const validation = await bcrypt.compare(password, user[0].User_pass)
    console.log(validation)

    if (validation === false) {
      res.send(validation)
    } else {
      const token = jwt.sign({
        id: user[0].ClientID,
        email: user[0].User_email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h'
      }
      )
      return res.json({
        ok: true,
        token
      })
    }
  } catch (err) {
    console.log(err)
  }
}

exports.registerUser = async (req, res) => {
  try {
    const { names, lastnames, email, password, confirmpassword } = req.body

    if (password !== confirmpassword) {
      return res.status(400).json({
        ok: false,
        message: 'Las contraseñas no coinciden'
      })
    }
    const hashpass = await bcrypt.hash(password, 10)

    await Authservice.insertUser(
      names,
      lastnames,
      email,
      hashpass
    )
    return res.status(201).json({
      ok: true,
      message: 'Usuario registrado correctamente'
    })
  } catch (err) {
    console.log(err)
  }
}
