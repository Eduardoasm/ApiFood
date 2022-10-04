const { Router } = require('express');
const recipeRoute = require("./recipes")
const dietaRoute = require("./diets")
const cors = require('cors')




const router = Router();

router.use(cors())

 router.use("/recipes", recipeRoute)
 
 router.use("/diets", dietaRoute)


module.exports = router;
