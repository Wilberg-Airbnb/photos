import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
  grid-gap: 8px 8px;
  height: 350px;
  width: 60%;
`;

const GridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

const Item1 = styled.div`
background-image: url('https://picsum.photos/id/166/1280/720?grayscale'),
grid-row-start: 1;
grid-row-end: 3;
`;

const Photogrid = ({ photos }) => {
  return (
    <GridContainer>
      <GridItem
        style={{
          gridRowStart: 1,
          gridRowEnd: 3,
        }}
      >
        1
      </GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
    </GridContainer>
  );
};

export default Photogrid;
