import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipeId } from "../../actions";
import "./detail.css"


export default function Detail(props){
    const dispatch = useDispatch();
    const recipe = useSelector((state) => state.recipeId)


    const id = props.match.params.id

  

    useEffect(()=>{
      dispatch(getRecipeId(id))
    },[dispatch])


    return(
    <div className="containerRecipe" >


        <button className="buttonDetail" onClick={()=>props.history.goBack()}>Back</button>

        <div className="nameD">
        <h1 className="nameDetail">{recipe.name}</h1>
        </div>
      
        <div className="cardDetail">

        <div className="imgDetail" >
        <img   src={recipe.image} alt={recipe.name} width="300px" height="300px"/>
        </div>
        <p className="texto" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>

        </div>

        <div className="Score">
        <h3 className="health">HealthScore: {recipe.healthScore}</h3>
        </div>

        <div className="diets">
        <h3>Diets: {recipe.diets + " "}</h3>
        </div>
        <h4 className="steps">{recipe.steps?.map(e=> 

            <p>{e.number} - {e.step}</p>) } </h4>
  
    </div>
    )
}