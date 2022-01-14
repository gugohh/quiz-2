import React from 'react'
import styled from "styled-components";


const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShoesDetails = (props) => {
    return (

        <DetailsContainer>
            <SmallText>NIKE</SmallText>
            <SpacedHorizontalContainer>
                <MediumText>AIR JORDAN 1 MID SE GC</MediumText>
                <MediumText>460$</MediumText>
            </SpacedHorizontalContainer>
        </DetailsContainer>
    )
}

export default ShoesDetails
