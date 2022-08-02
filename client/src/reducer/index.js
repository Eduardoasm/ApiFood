const initialState = {
  recipes: [],
  allRecipes: [],
  recipeId: {},
  diets: []
};

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ORDERED_RECIPES = "GET_ORDERED_RECIPES";
export const GET_HEALTHSCORE = "GET_HEALTHSCORE";
export const GET_DIETS = "GET_DIETS"
export const POST_RECIPE = "POST_RECIPE"
export const GET_RECIPE_NAME = "GET_RECIPE_NAME"
export const GET_RECIPE_ID = "GET_RECIPE_ID"
export const GET_ALL_DIETS = "GET_ALL_DIETS"

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,

      };     
       default:
      return state;


    case GET_ORDERED_RECIPES:
        const allRecipes = state.recipes
        const recipeOrder = action.payload === "ascendent" ?
        allRecipes.sort((a, b)=>{
          if(a.name > b.name ){
            return 1
          }
          if(a.name < b.name){
            return -1
          }
          return 0
        }):
        allRecipes.sort((a, b)=>{
          if(a.name < b.name ){
            return 1
          }
          if(a.name > b.name){
            return -1
          }
          return 0
        })
        return{
            ...state,
            allRecipes: recipeOrder
        }

    case GET_HEALTHSCORE:
      const allRecipe = state.recipes;
      const recipeHealthScore = action.payload === "healthScoreHight" ? 
      allRecipe.sort((a, b)=>{
        if(a.healthScore < b.healthScore){
          return 1
        }
        if(a.healthScore > b.healthScore){
          return -1
        }
        return 0
      }):
      allRecipe.sort((a, b)=>{
        if(a.healthScore > b.healthScore){
          return 1
        }
        if(a.healthScore < b.healthScore){
          return -1
        }
        return 0
      })

      return {
        ...state,
        allRecipes: recipeHealthScore
      };

    case GET_DIETS:
      let recipeAll = state.recipes;
      const recipesFiltered = action.payload === "All" ? recipeAll : recipeAll.filter(e=> e.diets.includes(action.payload))
      return {
        ...state,
        allRecipes: recipesFiltered
      };

      case GET_RECIPE_NAME:
        return{
          ...state,
          allRecipes: action.payload
        }

      case POST_RECIPE:
        return{
          ...state,
        }

      case GET_RECIPE_ID:
        return{
          ...state,
          recipeId: action.payload
        }

        case GET_ALL_DIETS:
          return{
            ...state,
            diets: action.payload
          }
  }
}

export default rootReducer;
