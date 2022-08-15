import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipeId, deleteRecipe, recipeD} from "../../actions";
import "./detail.css"



export default function Detail(props){
    const dispatch = useDispatch();
    let recipe = useSelector((state) => state.recipeId)

    console.log(recipe.diets)

    const id = props.match.params.id


  const remove = ()=>{
    dispatch(deleteRecipe(id))
    alert(`${recipe.name} recipe has been successfully deleted`)
    props.history.push("/home")
  }

    useEffect(()=>{
      dispatch(getRecipeId(id))
      dispatch(recipeD())
      
    },[dispatch, id])


    return(

    <div className="containerRecipe" >
   <button className="buttonDetail" onClick={()=>props.history.goBack()}>Back</button>

      <div>
     
        <div className="nameD">
        <h1 className="nameDetail">{recipe.name}</h1>
        </div>
      
        <div className="cardDetail">

        <div className="imgDetail" >
        <img   src={recipe.image} alt={recipe.name} width="300px" height="300px"/>
        <h3 className="health" >Health Score: {recipe.healthScore}</h3>
        </div>

        <p className="texto" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>

        </div>
        </div>
      <div className="diets">
        {
          recipe.diets && recipe.diets.map(e => (
            <h3 className={e ? "diets1":" "}>{e}</h3>
          ))
        }
      </div>

        <h4 className="steps">{recipe.steps?.map(e=> 

            <p>{e.number} - {e.step}</p>) } </h4>
  {

      id.length > 15 ? <button className="btnDelete" onClick={remove}> Delete Recipe </button>: ""
  }
  
    </div>
    )
}
