const { Router } = require("express");
const { Recipes, Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const {
  getApiRecipes,
  getRecipeId,
  getAllRecipes,
  getRecipeByPk,
} = require("../controllers/functions");


const router = Router();


function createRecipe(data) {
  return {
    name: data.title,
    summary: data.summary,
    image: data.image,
    healthScore: data.healthScore,
    steps: data.analyzedInstructions[0]?.steps.map((el) => {
      return {
        number: el.number,
        step: el.step,
      };
    }),
    diets : data.diets.map(e => e)
  };
}

function createRecipeBd(data) {
  return {
    name: data.name,
    summary: data.summary,
    image: data.image,
    healthScore: data.healthScore,
    steps: data.steps.map((el) => {
      return {
        number: el.number,
        step: el.step,
      };
    }),
    diets : data.diets.map(e => e.name)
  };
}

router.delete("/:id", async (req, res, next) =>{
  const { id } = req.params

    try {
      let removeId = await Recipes.destroy({
        where: {
          id
        }
      })
   return res.status(500).res.send(removeId)
    } catch (error) {
      next(error)
    }

})



router.get("/", async (req, res, next) => {
  const { name } = req.query;
      let recipes = await getAllRecipes()
      if(name){
        try {
          let recipeName = recipes.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
          recipeName.length?
          res.status(200).send(recipeName):
          res.status(400).send("no se encontro la receta")
        } catch (error) {
          next(error)
        }
      }else{
         res.send(recipes) 
      }
    })


router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (id.length > 15) {
    try {
      let data = await getRecipeByPk(id);
      return res.json(createRecipeBd(data));
    } catch (error) {
      res.status(400).send({error: "No se encuentra la receta solicitada"})
    }
  }
  if (id) {
    try {
      let data1 = await getRecipeId(id);
      return res.json(createRecipe(data1));
    } catch (error) {
        res.status(400).send({error: "No se encuentra la receta solicitada"})
    }
  } 
});


router.post("/", async (req, res, next) => {
  
    try {
      const { name, summary, healthScore, steps, diets, image} = req.body
      let createRecipe = await Recipes.create({
        name,
        summary,
        healthScore,
        steps,
        image,
        })

        let recipeDietDb = await Diets.findAll({
          where: {name: diets}
        })

        createRecipe.addDiets(recipeDietDb)
        res.status(200).send(createRecipe)

    } catch (error) {
      next(error)
    }




});



module.exports = router;
