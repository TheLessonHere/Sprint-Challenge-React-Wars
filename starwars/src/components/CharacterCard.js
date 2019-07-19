import React from "react"

const CharacterCard = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>Character Info</h3>
            <p>Birth Year: {props.birthyear}</p>
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.haircolor}</p>
            <p>Eye Color: {props.eyecolor}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </div>
    )
}

export default CharacterCard;