const { Router } = require('express');
const recipeRoute = require("./recipes")
const dietaRoute = require("./diets")




const router = Router();



 router.use("/recipes", recipeRoute)
 
 router.use("/diets", dietaRoute)


module.exports = router;
