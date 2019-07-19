import React, { useState, useEffect } from 'react';
import axios from "axios";
import CharacterCard from "./components/CharacterCard"
// import styled from "styled-components";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then((response) => {
      console.log('Data Received', response.data.results);
      setCharacterData(response.data.results.map((character) => {
        return character
      }))
    })
    .catch((error) => {
      console.log('Data Not Available')
    })
  }, [])

  console.log(characterData);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard name={}
    </div>
  );
}

export default App;
