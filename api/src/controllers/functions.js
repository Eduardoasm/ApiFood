const axios = require("axios");
const { response } = require("express");
const { Recipes, Diets } = require("../db");
const { API_KEY } = process.env;

const getApiRecipes = async () => {
  const apiInfo = await axios.get(
    // `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  const apiData = await apiInfo.data.results.map((e) => {
    return {
      id: e.id,
      name: e.title,
      summary: e.summary,
      healthScore: e.healthScore,
      image: e.image,
      diets: e.diets,
      steps: e.analyzedInstructions[0]?.steps.map((el) => {
        return {
          number: el.number,
          step: el.step,
        };
      }),
    };
  });
  return apiData;
};

const getAllRecipes = async () => {
  let allRecipes = await Recipes.findAll({
    include: {
      model: Diets,
      attributes: ["name"],
    },
  });

  let recipes = allRecipes.map((e) => {
    return {
      id: e.id,
      name: e.name,
      healthScore: e.healthScore,
      summary: e.summary,
      image: e.image,
      steps: e.steps,
      diets: e.diets.map((e) => e.name),
    };
  });

  let recip = await getApiRecipes();

  if (recipes.length > 0) {
    allRecipes = allRecipes.map((e) => {
      return e.dataValues;
    });
    recip = recip.concat(recipes);
  }

  return recip;
};

const getRecipeId = (id) => {
  let recipeId = axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return recipeId;
};

const getRecipeByPk = async (id) => {
  let recipeId = await Recipes.findByPk(id, {
    include: {
      model: Diets,
      attributes: ["name"],
    },
  });
  return recipeId;
};

module.exports = { getApiRecipes, getRecipeId, getAllRecipes, getRecipeByPk };
