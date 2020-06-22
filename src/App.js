import React, {useState, useEffect} from 'react';

import './App.css';
import Header from './Components/Header';
import Recipes from './Components/Recipes';
import Axios from 'axios';

function App() {
  
  const [search, setSearch]= useState("");
  const [recipes, setRecipes]= useState([]);
  

  const APP_ID = "dec1b923";
  const APP_KEY = "4e3df4e0a3fed14f854606faf574096f	"

  useEffect ( ()=> {
    getRecipes();
    },[]);

    const getRecipes = async() =>{
      const res= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);

      console.log (res);

    setRecipes(res.data.hits);
};

  const onInputChange= (e)=> {
     setSearch (e.target.value);
  }

  const onSearchClick= ()=>{
    getRecipes();
  };
  return (
    <div className="App">
      <Header search={search} 
      onInputChange={onInputChange}
      onSearchClick={onSearchClick}/>
      <div className= "container">
      <Recipes recipes={recipes}/>
     </div>
    </div>
  );
}

export default App;
