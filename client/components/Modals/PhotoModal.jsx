import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

let WholePage = styled.div`
  /* position: absolute;
  height: 100%;
  background-color: black; */
  position: fixed;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: white;
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

const CloseButton = styled.button`
  text-align: center;
  border-radius: 5px;
  padding: 6px 8px 6px 8px;
  background-color: rgb(255, 255, 255);
  font-size: 10px;
  border-color: rgb(34, 34, 34);
  z-index: -1;
  margin-left: 10px;
`;

const Count = styled.span`
  text-align: center;
`;

const ButtonContainers = styled.div``;

const UpperContainer = styled.div`
  display: inline-flex;
  margin-top: 2%;
  justify-content: space-between;
  width: 98%;
`;

class PhotoModal extends React.Component {
  componentDidMount() {
    // Once the component is open, it mounted, prevent scrolling
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
  }
  render() {
    return (
      <WholePage>
        <UpperContainer>
          <CloseButton>X Close</CloseButton>
          <Count>1/16</Count>
          <ButtonContainers> 88 X</ButtonContainers>
        </UpperContainer>
        <Photo photo={this.props.photos[1].photoUrl}></Photo>
      </WholePage>
    );
  }
}

export default PhotoModal;
