const registerservice = require('../services/register.service')
const bcrypt = require('bcrypt')

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

    console.log(names, lastnames, email, hashpass)
    await registerservice.insertUser(1,
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
