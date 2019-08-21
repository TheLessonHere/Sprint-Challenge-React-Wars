import React from "react"
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 220px;
  width: 17%;
  height: 350px;
  padding: 1%;
  margin: 0.5%;
  background-color: tan;
  opacity: 0.75;
  border-radius: 15px;
  box-shadow: 5px 5px 10px dodgerblue;

  &:hover {
      opacity: 0.92;
  }
`;

const StyledInfoContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: 1;
    padding: 0 5px 10px 5px;
`;

const StyledH2 = styled.h2`
    opacity: 1;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: black;
    font-size: 1.8rem;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const StyledH3 = styled.h3`
    opacity: 1;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #242526;
    font-size: 1.2rem;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const StyledP = styled.p`
    opacity: 1;
    font-family: Arial, Helvetica, sans-serif;
    color: #242526;
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const CharacterCard = props => {
    return (
        <StyledCard>
            <StyledInfoContainer>
                <StyledH2>{props.name}</StyledH2>
                <StyledH3>Character Info:</StyledH3>
                <p>Birth Year: {props.birthyear}</p>
                <p>Gender: {props.gender}</p>
                <p>Hair Color: {props.haircolor}</p>
                <p>Eye Color: {props.eyecolor}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
            </StyledInfoContainer>
        </StyledCard>
    )
}

export default CharacterCard;