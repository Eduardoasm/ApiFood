import { Link } from "react-router-dom"
import "./CardRecipe.css"

export default function CardRecipe({name, diets, image, healthScore, id}){
    const dietas = diets.map((e , i)=> {
        if(i === diets.length - 1){
            return e
        }else{
            return e + " - "
        }
    })

    console.log(dietas)

    return(
        <div className="card">
            <Link to={`/recipes/${id}`} style={{ textDecoration: 'none', color:"black" }}>
            <h3 className="cardName">{name}</h3>
            <img className="cardImage" src={image} alt={name}/>
            <h4 className="cardDiets">Diets: {dietas}</h4>
            <h4 className="cardHealthScore">HealthScore: {healthScore}</h4>
            </Link>
        </div>
    )
}