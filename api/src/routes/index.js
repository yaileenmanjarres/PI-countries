const { Router } = require('express')
const { conn } = require('../db')
const { Op } = require("sequelize")
const { Country, Activity } = conn.models

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();

/* OBTENER TODOS LOS PAISES O UN PAIS POR NOMBRE */
router.get('/countries', async (req, res) => {
  const { name } = req.query
  if (name) {
    const nameCountry = await Country.findAll({
      attributes: ['id', 'name', 'flag', 'region', 'capital'],
      where: {
        name: { [Op.like]: `%${name.replace(/^\w/, (letter) => letter.toUpperCase())}%` }
      },
      include: {
        attributes: [],
        model: Activity
      }
    })
    res.json(nameCountry)
  } else {
    const allCountries = await Country.findAll({
      attributes: ['id', 'name', 'flag', 'region', 'capital'],
      include: {
        model: Activity
      }
    })
    res.json(allCountries)
  }
})

/* OBTENER PAIS POR ID */
router.get('/countries/:id', async (req, res) => {
  const { id } = req.params
  if (id) {
    const countryId = await Country.findOne({
      where: {
        id: id.toUpperCase()
      },
      include: {
        model: Activity
      }
    })
    res.json(countryId)
  }
})

/* CREAR UNA ACTIVIDAD */
router.post('/activities', async (req, res) => {
  const { name, difficulty, region, season, countries } = req.body
  countries.forEach(async countryId => {
    const found = await Country.update({
      name: 'jajaja'
    },
      {
        where: {
          id: countryId.toString()
        }
      }
    )

    console.log(found);

  });
  // await Activity.create({
  //   name,
  //   difficulty,
  //   region,
  //   season,
  //   countries
  // },
  //   {
  //     include: [Country]
  //   })
  res.json('created')
})

/* OBTENER TODAS LA ACTIVIDADES */
router.get('/activities', async (req, res) => {
  const allActivities = await Activity.findAll({
    attributes: ['name', 'difficulty', 'region', 'season'],
    include: {
      model: Country
    }
  })
  res.json(allActivities)
})

module.exports = router;
