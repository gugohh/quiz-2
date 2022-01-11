import React from 'react'
import styled from 'styled-components'



const CardContainer = styled.div`
    width: 285px;
    height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    background-color: #1d1f21;
    color: #fff;
    position: relative;
    cursor: grab;
`;

const Circlewrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    border-top-right-radius: 25px;
`;


const nikeCard = () => {

    return (
       <CardContainer>
       
       </CardContainer>
    )
}

export default nikeCard
