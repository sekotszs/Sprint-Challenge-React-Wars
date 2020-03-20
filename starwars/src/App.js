import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Cards from "././Cards";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState();
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://swapi.co/api/people';

  useEffect(() =>{
    axios.get(proxy+url)
    .then(response =>{
      console.log(response.data.results);
      setData(response.data.results);
      // console.log(response);
    })
    .catch(error => {console.log('Where is the data', error)
  })
  }, [])

  // if (!data) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {!data ?<h3>Loading...</h3>:
      data.map((item,index)=>{
        return <Cards 
        name={item.name}
        height={item.height}
        mass={item.mass}
      />
      })}
     
    </div>
  );
}

export default App;
