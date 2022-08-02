import React from "react";
import "./paginado.css"

export default function Paginado({paginado, allRecipes, recipePerPage}){

    // let page = [];

    // const [ page, setPage ] = useState([])
    let page = []

    // const buildPage = ()=>{
        for (let i = 1; i <= Math.ceil(allRecipes/recipePerPage); i++) {
            page.push(i)
        }
        // setPage(arr)
    // }

    // console.log(page)

    // useEffect(()=>{
    //     buildPage()
    // },[])


    return(
        <div className="paginadoListas">
        <nav>
            <ul className="paginado">
                {page &&
                page.map(e=> (
                    <li className="page" key={e}>
                        <button className="btnListas" onClick={()=> paginado(e)}>{e}</button>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    )
}