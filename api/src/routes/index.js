const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', (req, res) => {
  const { name } = req.query
  if (name) {
    res.json(name)
  } else {
    res.send('No se encontro')
  }
})

router.get('/countries/:idPais', (req, res) => {
  console.log(req.params);
  res.json(req.params)
})

router.post('/activities', (req, res) => {
  res.json('actividad turistica')
})



module.exports = router;
