import axios from "axios";

export function getAllRecipes() {
  return async function (dispatch) {
    try {
      const recip = await axios.get("http://localhost:3001/recipes");
      return dispatch({
        type: "GET_ALL_RECIPES",
        payload: recip.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllDiets(){
  return async function(dispatch){
    const recip = await axios.get("http://localhost:3001/diets");
    return dispatch({
      type: "GET_ALL_DIETS",
      payload: recip.data,
    });
  }
}

export function getRecipeName(name) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/recipes?name=${name}`).then((response) => {
      return dispatch({ type: "GET_RECIPE_NAME", payload: response.data });
    });
  };
}

export function postRecipe(data) {
  return async function (dispatch) {
      const postRecipe = await axios.post("http://localhost:3001/recipes", data)
      // console.log(postRecipe)
      return postRecipe
  };
}

export function getRecipeId(id) {
  return async function (dispatch) {
    try {
      const recipeId = await axios.get(`http://localhost:3001/recipes/${id}`);
      // console.log("entra", recipeId);
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
