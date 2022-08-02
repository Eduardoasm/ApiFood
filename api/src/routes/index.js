const { Router } = require('express');
const recipeRoute = require("./recipes")
const dietaRoute = require("./diets")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use("/recipes", recipeRoute)
//arreglar malpario
 router.use("/diets", dietaRoute)
//arreglar malpario

module.exports = router;
