const { Router } = require('express');
const { Diets, Recipes }= require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res,next)=>{

    return Diets.findAll().then(data => {
        res.send(data)
    })
    .catch((error)=>{
        next(error)
    })

    

})




module.exports = router;
