const { Router } = require('express')
const { conn } = require('../db')
const { Op } = require("sequelize")
const { Country, Activity } = conn.models
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', async (req, res) => {
  const { name } = req.query
  // const { page } = req.body
  // const offset = page ? (page === 1 ? 0 : 10 * page) : 0
  if (name) {
    const nameCountry = await Country.findAll({
      // limit: 10,
      // offset,
      where: {
        name: { [Op.like]: `%${name.replace(/^\w/, (letter) => letter.toUpperCase())}%` }
      }
    })
    res.json(nameCountry)
  } else {
    const allCountries = await Country.findAll({
      // limit: 10,
      // offset,
      attributes: ['id', 'name', 'flag', 'region', 'capital']
    })
    res.json(allCountries)
  }
})

router.get('/countries/:id', async (req, res) => {
  const { id } = req.params
  if (id) {
    const countryId = await Country.findOne({
      where: {
        id: id.toUpperCase()
      }
    })
    res.json(countryId)
  }
})

router.post('/activities', (req, res) => {
  res.json('actividad turistica')
})



module.exports = router;
