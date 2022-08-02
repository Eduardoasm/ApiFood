import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from "./components/Home/Home.jsx"
import CreateRecipe from "./components/CreateRecipe/CreateRecipe.jsx"
import Detail from "./components/Detail/Detail.jsx"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Route exact path = "/" component = {LandingPage} />
     <Route exact path = "/home" component = {Home} />
     <Route exact path = "/createRecipe" component ={CreateRecipe}/>
     <Route exact path = "/recipes/:id" component ={Detail}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
