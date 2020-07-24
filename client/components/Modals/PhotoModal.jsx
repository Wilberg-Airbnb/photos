import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
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
  min-width: 700px;
  height: 75%;
  background-image: url(${(props) =>
    props.photo ||
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'});
`;
const Button = styled.button``;

const CloseButton = styled.button`
  text-align: center;
  border-radius: 5px;
  padding: 6px 8px 6px 8px;
  background-color: rgb(255, 255, 255);
  font-size: 10px;
  border-color: rgb(34, 34, 34);
  margin-left: 10px;
`;

const Count = styled.span`
  text-align: center;
`;

const PhotoRecord = styled.div``;

const UpperContainer = styled.div`
  display: inline-flex;
  margin-top: 2.5%;
  justify-content: space-between;
  width: 96%;
`;

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Once the component is open, it mounted, prevent scrolling
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
  }
  render() {
    let photoClicked = this.props.photoClicked;
    let photoLength = this.props.photos.length;
    let changePhoto = this.props.changePhoto;
    return (
      <WholePage>
        <UpperContainer>
          <Button onClick={() => changePhoto('left')}>Left</Button>
          <Button onClick={() => changePhoto('right')}>Right</Button>
          <CloseButton onClick={() => this.props.close()}>X Close</CloseButton>
          <Count>
            {photoClicked + 1}/{photoLength}
          </Count>
          <PhotoRecord>
            <SaveAltIcon style={{ fontSize: 13 }}></SaveAltIcon>
            <FavoriteBorderIcon style={{ fontSize: 13 }}></FavoriteBorderIcon>
          </PhotoRecord>
        </UpperContainer>
        <Photo photo={this.props.photos[photoClicked].photoUrl}></Photo>
      </WholePage>
    );
  }
}

export default PhotoModal;
