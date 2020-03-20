import React from 'react';
import Styled from "styled-components";

function Cards(props) {
    return(
        <CardStyle>
            <h1>{props.name}</h1>
            <p>{props.height}</p>
            <p>{props.mass}</p>
        </CardStyle>
    )
}

const CardStyle = Styled.div`
display:flex;
justify-content: center;
background-color: white;
text-align:center;
font-size 15px;
border: green 10px solid;
color:blue;
margin:25px;`

export default Cards;


