import React from "react";
import "./paginado.css"

export default function Paginado({paginado, allRecipes, recipePerPage, currentPage, totalPages}){
    totalPages = Math.ceil(allRecipes/recipePerPage)

    let page = []

        for (let i = 1; i <= totalPages; i++) {
            page.push(i)
        }



    return(
        <div className="paginadoListas">
        <nav>
            <ul className="paginado">
                {page &&
                page.map(e=> (
                    <li className="page" key={e}>
                        <button className={e === currentPage ? "btnListas1": "btnListas"} onClick={()=> paginado(e)}>{e}</button>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    )
}