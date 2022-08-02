const { Router } = require('express');
const recipeRoute = require("./recipes")
const dietaRoute = require("./diets")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use("/recipes", recipeRoute)
 
 router.use("/diets", dietaRoute)


module.exports = router;
