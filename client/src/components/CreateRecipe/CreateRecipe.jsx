import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getAllDiets } from "../../actions/index";
import { useHistory } from "react-router-dom";
import "./CreateRecipe.css";



export function validate(input) {
  const regNum = new RegExp("^[0-9]+$");
  const regName = new RegExp("^[A-Z]+$");
  let errors = {};
  if (!input.name || regName.test(input.name)) {
    errors.name = "A name is required";
  }
  if (
    !input.healthScore ||
    input.healthScore > 100 ||
    input.healthScore < 0 ||
    !regNum.test(input.healthScore)
  ) {
    errors.healthScore = "A healthScore value is 0-100";
  }
  if (!input.summary) {
    errors.summary = "A summary is required";
  }
  if (!input.diets) {
    errors.diets = "A diets is required";
  }
  if (!input.steps) {
    errors.steps = "A step is required";
  }
  return errors;
}

export default function CreateRecipe() {
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    image: "https://img.freepik.com/foto-gratis/tabla-cortar-madera-rodeada-platos-pasta-e-ingredientes-mesa_23-2148246798.jpg?w=2000",
    healthScore: "",
    summary: "",
    diets: [],
    steps: ""
  });

  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.diets);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if (!input.name) return alert("A name is required");
    if (!input.healthScore) return alert("A healthScore is required");
    if (!input.summary) return alert("A summary is required");
    if (!input.steps) return "A step is required";
    dispatch(postRecipe({
      ...input,
      steps:[{number: "", step: input.steps}]
    }));
    alert(`Recipe ${input.name} created!`);
    setInput({
      name: "",
      image: "",
      healthScore: 0,
      summary: "",
      diets: [],
      steps: "",
    });
    history.push("/home");
  };


  const handleDietsChange = (e) => {
    if (e.target.checked) {
      setInput({ ...input, diets: [...input.diets, e.target.value] });
    }
    if (!e.target.checked) {
      setInput({
        ...input,
        diets: input.diets.filter((diet) => diet !== e.target.value)
      });
    }
  };


  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

  };

  return (
    <div className="containerCreate">
      <div className="createCon">
        <button className="buttonBackCreate" onClick={() => history.goBack()}>
          Back
        </button>
        <form>
          <div className="tituloo">
            <h1 className="titleCreate">Create your recipe</h1>
          </div>
          <div className="inputBox">
            <input
              required="required"
              type="text"
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
            <label>Title</label>
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="inputBox">
            <input
              required="required"
              type="text"
              name="image"
              value={input.image}
              onChange={handleInputChange}
            />
            <label>Image</label>
          </div>
          <div className="inputBox">
            <input
              required="required"
              type="text"
              name="healthScore"
              value={input.healthScore}
              onChange={handleInputChange}
            />
            <label>healthScore</label>
            {errors.healthScore && (
              <p className="error">{errors.healthScore}</p>
            )}
          </div>
          
          <div className="inputsDiets">
            <label className="nameDiet"> Diets </label>
            <div className="dietsInput" onChange={handleDietsChange}>
              {allDiets.map((diets) => (
                <div className="dietsCheck" key={diets.name}>
                <label>
                  <input
                    className="dietas1" // ver que me da el mapeo
                    type="checkbox"
                    name="diets"
                    value={diets.name}
                  ></input>
                  <span name={diets.name}>{diets.name}</span>
                  </label>
                  {errors.diets && <p className="error">{errors.diets}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="inputBox">
            <input
              required="required"
              type="text"
              name="summary"
              value={input.summary}
              onChange={handleInputChange}
            />
            <label>Summary </label>
            {errors.summary && <p className="error">{errors.summary}</p>}
          </div>
          <div className="inputBox">
            <input
              required="required"
              type="text"
              name="steps"
              value={input.steps}
              onChange={handleInputChange}
            />
            <label> Steps</label>
            {errors.steps && <p className="error">{errors.steps}</p>}
          </div>
          <div>
            {errors.hasOwnProperty("name") ||
            errors.hasOwnProperty("healthScore") ||
            errors.hasOwnProperty("diets") ||
            errors.hasOwnProperty("summary") ||
            errors.hasOwnProperty("steps") ? (
              <button disabled="true" className="buttonCreate" onClick={handlePost}>Create Recipe</button>  // <p>"Have to fill in all the fields"</p>
            ) : (
              <button className="buttonCreate" onClick={handlePost}>Create Recipe</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
