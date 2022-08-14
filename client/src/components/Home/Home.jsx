import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRecipes,
  getOrderedRecipes,
  getDiets,
  getHealthScore,
  getRecipeName,
} from "../../actions/index";
import CardRecipe from "../CardRecipe/CardRecipe";
import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado";
import "./Home.css";
import receta from "../../images/crearReceta.jpg";
import slider3 from "../../images/platos rest2.gif"
import slider4 from "../../images/platos rest3.jpg"
import slider6 from "../../images/platos rest5.jpg"
import slider7 from "../../images/sushiImg.jpg"
import Footer from "../Footer/Footer"




export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.allRecipes);

  const [search, setSearch] = useState({
    search: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const recipePerPage = 9;
  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );
  const [filtrados, setFiltrados] = useState();
 

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function nextPage() {
    if (currentPage + 1) {
      return setCurrentPage(currentPage + 1);
    } else{
      return currentPage
    }
  }

  function prevPage() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getAllRecipes());
    
  }

  const handleOrder = (e) => {
    dispatch(getOrderedRecipes(e.target.value));
    setFiltrados(e.target.value);
    setCurrentPage(1);
  };

  const handleHealthScore = (e) => {
    dispatch(getHealthScore(e.target.value));
    setFiltrados(e.target.value);
    setCurrentPage(1);
  };

  const handleDiets = (e) => {
    dispatch(getDiets(e.target.value));
    setFiltrados(e.target.value);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getRecipeName(e.target.value));
    setCurrentPage(1);
  };

  const handleInputChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };




  return currentRecipes.length < 1 ? (
 <Loading />
) : (
    <div className="contenedorHome">
      <div className="contenedorNav">
      <div className="contenedorSearch">
        <img className="logoApi" src={receta} alt="img"/>
        <button className="buttonRefresh" onClick={handleSubmit}>
          Refresh
        </button>

        <div className="inputSearch">
          <input
            className="inputBar"
            type="text"
            name="search"
            placeholder="Search recipes"
            onChange={handleInputChange}
          />{" "}
          <button
            className="btnSearch"
            value={search.search}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <Link
          to="/createRecipe"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h3 className="letraCreate">Create Recipe here</h3>
          <img src={receta} alt="Create recipe" className="receta" />
        </Link>
      </div>
      <div className="contenedorSelect">
        <div className="contenedorSelect1">
          <select className="select1" onChange={(e) => handleOrder(e)}>
            <option value="ascendent">A-Z</option>
            <option value="descendent">Z-A</option>
          </select>
        </div>
        <div className="contenedorSelect2">
          <select className="select2" onChange={(e) => handleHealthScore(e)}>
            <option value="healthScoreHight">High-Low</option>
            <option value="healthScoreLow">Low-High</option>
          </select>
        </div>
        <div className="contenedorSelect3">
          <select className="select3" onChange={(e) => handleDiets(e)}>
            <option value="All">ALL</option>
            <option value="gluten free">Gluten Free</option>
            <option value="ketogenic">ketogenic</option>
            <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
            <option value="vegan">vegan</option>
            <option value="pescatarian">pescatarian</option>
            <option value="paleolithic">paleolithic</option>
            <option value="primal">primal</option>
            <option value="whole 30">whole 30</option>
            <option value="dairy free">dairy free</option>
            <option value="fodmap friendly">fodmap friendly</option>
          </select>
        </div>
      </div>
      </div>
      <div className="containerSlider">
          <ul>
            <li> <img src={slider7} alt="comida" height="450px" width="600px" /> </li>
            <li> <img src={slider6} alt="comida" height="450px" width="600px" /> </li>
            <li> <img src={slider3} alt="comida" height="450px" width="600px" /> </li>
            <li> <img src={slider4} alt="comida" height="450px" width="600px" /> </li>
            </ul>
      </div>
      
      <div className="cardsHome">
        {currentRecipes?.map((e) => {
          return (
            <CardRecipe
              className="card1"
              key={e.id}
              name={e.name}
              image={e.image}
              diets={e.diets}
              healthScore={e.healthScore}
              id={e.id}
            />
          );
        })}
 
      </div>

      <div className="paginado1">
        <button className="button1" onClick={prevPage}>
          Prev
        </button>
        <Paginado
          allRecipes={allRecipes.length}
          recipePerPage={recipePerPage}
          paginado={paginado}
          currentPage={currentPage}
        />
        <button className="button2" onClick={nextPage}>
          Next
        </button>
      </div>
        <Footer/>
    </div>
  );
}
