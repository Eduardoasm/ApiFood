const { Router } = require('express');
const { Diets, Recipes }= require("../db")



const router = Router();



router.get("/", (req, res,next)=>{

    return Diets.findAll().
    then(data => {
    res.send(data)
    })
    .catch((error)=>{
        next(error)
    })  
})

router.delete("/", (req,res,next)=>{
    res.send("soy delete en diets")
})




module.exports = router;
