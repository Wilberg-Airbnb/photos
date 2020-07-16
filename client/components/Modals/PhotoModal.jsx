import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

let WholePage = styled.div`
  height: 100%;
  background-color: white;
  z-index: 1;
`;

let Photo = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-color: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  margin: auto;
  width: 75%;
  height: 75%;
  background-image: url(${(props) =>
    props.photo ||
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'});
`;

const PhotoModal = ({ photos }) => {
  return (
    <WholePage>
      <Photo photo={photos[1].photoUrl}></Photo>
    </WholePage>
  );
};

export default PhotoModal;
