import "./styles.scss";
import { render } from "react-dom";
import React, {useState, useEffect} from 'react' 
import regeneratorRuntime from "regenerator-runtime";

function App() { 

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
    
  useEffect( () => { 
    const fetchCity = async () => { 
    const token = 'FzTdB23Rnz4shGQf5B6NZNr9fReRt44Y'; 
    const limit = 10;
    const host = 'http://localhost:7002/api'
    const link = `${host}?token=${token}&query=${query}&typeCode=1&contentType=city&limit=${limit}`; 
    const response = await fetch(link); 
    const data = await response.json();  
    console.log(data.result.map(el => console.log(el.name)))
    
    setSuggestions(data.result) 
} 
fetchCity()
}, [query] ) 
 
  return ( 
    <div className="App"> 
      <p>ГОРОД</p> 
  <input type="text" list="city" value={query} onChange={e => setQuery(e.target.value)}/> 
    <datalist id="city"> 
        {suggestions.map((el, index) => <option key={index}>{el.name}</option>)}  
    </datalist> 
    </div> 
  ); 
} 
 
render(<App />, document.getElementById("root"));

