const loginser = require('../services/login.service')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.authlogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await loginser.getusers(email)
    const validation = await bcrypt.compare(password, user[0].User_pass)

    if (user.length === 0) {
      return res.status(404).json({
        ok: false,
        message: 'usuario no encontrado'
      })
    }

    if (validation === false) {
      res.status(404).json({
        ok: false,
        message: 'contraseña incorrecta'
      })
    }
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
  } catch (err) {
    console.log(err)
  }
}
