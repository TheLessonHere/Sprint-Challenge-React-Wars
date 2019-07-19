import React, { useState, useEffect } from 'react';
import axios from "axios";
import CharacterCard from "./components/CharacterCard"
import styled from "styled-components";

const StyledAppContainer = styled.div`
  text-align: center;
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const StyledHeader = styled.h1`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

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
      setCharacterData(response.data.results)
    })
    .catch((error) => {
      console.log('Data Not Available')
    })
  }, [])

  return (
    <StyledAppContainer>
    {characterData.map(character =>
    <CharacterCard name={character.name} birthyear={character.birth_year} 
      gender={character.gender} haircolor={character.hair_color} eyecolor={character.eye_color}
      height={character.height} mass={character.mass}/>
    )}
    </StyledAppContainer>
  )
}

export default App;
