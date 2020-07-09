import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  max-width: 900px;
  height: 1000px;
`;

const Big = styled.div`
  background-color: pink;
  border: 1px solid rgba(0, 0, 0, 0.8);
  grid-area: 1 / 1 / 3 / 3;
`;

const Photo1 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  background-color: pink;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

const Photo2 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  background-color: pink;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

const Photo3 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  background-color: pink;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

const Photo4 = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  background-color: pink;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

const Item1 = styled.div`
background-image: url('https://picsum.photos/id/166/1280/720?grayscale'),
grid-row-start: 1;
grid-row-end: 3;
`;

const Photogrid = ({ photos }) => {
  return (
    <GridContainer>
      <Big>1</Big>
      <Photo1>2</Photo1>
      <Photo2>3</Photo2>
      <Photo3>4</Photo3>
      <Photo4>5</Photo4>
    </GridContainer>
  );
};

export default Photogrid;
