import React from "react"
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 220px;
  width: 17%;
  height: 420px;
  padding: 1%;
  margin: 0.5%;
  background-color: tan;
  opacity: 0.5;
`;

const CharacterCard = props => {
    return (
        <StyledCard>
            <h2>{props.name}</h2>
            <h3>Character Info</h3>
            <p>Birth Year: {props.birthyear}</p>
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.haircolor}</p>
            <p>Eye Color: {props.eyecolor}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </StyledCard>
    )
}

export default CharacterCard;