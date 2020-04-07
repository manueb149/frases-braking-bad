import React from 'react';
import styled from '@emotion/styled';


const FraseContenedor = styled.div`
    margin-top: 10rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: white;
    max-width: 800px;
`;

const Frase = ({frase}) => {

    return (
        <FraseContenedor>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </FraseContenedor>
    );
}
 
export default Frase;