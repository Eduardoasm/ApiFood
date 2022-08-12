import axios from "axios";

export function getAllRecipes() {
  return async function (dispatch) {
    try {
      const recip = await axios.get("/recipes");
      return dispatch({
        type: "GET_ALL_RECIPES",
        payload: recip.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllDiets() {
  return async function (dispatch) {
    const recip = await axios.get("/diets");
    return dispatch({
      type: "GET_ALL_DIETS",
      payload: recip.data,
    });
  };
}

export function getRecipeName(name) {
  return async function (dispatch) {
    try {
      if(name.length === 0) return alert("need to write a recipe")
      const response = await axios.get(`/recipes?name=${name}`);
      return dispatch({ type: "GET_RECIPE_NAME", payload: response.data });
    } catch (error) {
      if(error.response){
        alert("recipe not found")
      }
    }
  };
}

export function postRecipe(data) {
  return async function (dispatch) {
    const postRecipe = await axios.post("/recipes", data);
    return postRecipe;
  };
}

export function getRecipeId(id) {
  return async function (dispatch) {
    try {
      const recipeId = await axios.get(`/recipes/${id}`);
      return dispatch({
        type: "GET_RECIPE_ID",
        payload: recipeId.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOrderedRecipes(payload) {
  return { type: "GET_ORDERED_RECIPES", payload };
}

export function getHealthScore(payload) {
  return { type: "GET_HEALTHSCORE", payload };
}

export function getDiets(payload) {
  return { type: "GET_DIETS", payload };
}

export function deleteRecipe(id) {
  return async function (dispatch) {
    try {
      const remove = await axios.delete(`/recipes/${id}`);
      return dispatch({
        type: "DELETE_RECIPE",
        payload: remove.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function recipeD(payload) {
  console.log(payload);
  return { type: "RECIPE_DETAIL", payload: {} };
}
