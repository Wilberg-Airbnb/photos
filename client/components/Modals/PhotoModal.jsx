import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const AWS_URL = `https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/`;

const Icon = styled.img`
  #photo-modal & {
    max-height: 12px;
  }
`;

let WholePage = styled.div`
  #photo-modal & {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
  }
`;

let Photo = styled.div`
  #photo-modal & {
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
  }
`;
const Button = styled.button`
#photomodal & [
]`;

const CloseButton = styled.button`
  #photo-modal & {
    text-align: center;
    border-radius: 5px;
    padding: 6px 8px 6px 8px;
    background-color: rgb(255, 255, 255);
    font-size: 10px;
    border-color: rgb(34, 34, 34);
    margin-left: 10px;
  }
`;

const Count = styled.span`
  #photo-modal & {
    text-align: center;
  }
`;

const PhotoRecord = styled.div`
#photomodal & [
]`;

const UpperContainer = styled.div`
  #photo-modal & {
    display: inline-flex;
    margin-top: 2.5%;
    justify-content: space-between;
    width: 96%;
  }
`;

const ButtonContainer = styled.div`
  #photo-modal & {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: 100%;
    align-items: center;
  }
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

  componentWillUnmount() {
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = 'yes';
  }

  render() {
    let photoClicked = this.props.photoClicked;
    let photoLength = this.props.photos.length;
    let changePhoto = this.props.changePhoto;
    return (
      <WholePage>
        <UpperContainer>
          <CloseButton onClick={() => this.props.close()}>X Close</CloseButton>
          <Count>
            {photoClicked + 1}/{photoLength}
          </Count>
          <PhotoRecord>
            {/* Use s3 bucket instead of material UI icons */}
            <Icon src={`${AWS_URL}like.png`}></Icon>
            {'  '}
            <Icon src={`${AWS_URL}export.png`}></Icon>
          </PhotoRecord>
        </UpperContainer>
        <ButtonContainer>
          <div>
            <Button
              onClick={() => {
                if (photoClicked > 0) changePhoto('left');
              }}
            >
              Left
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                if (photoClicked < photoLength - 1) changePhoto('right');
              }}
            >
              Right
            </Button>
          </div>
        </ButtonContainer>
        <Photo photo={this.props.photos[photoClicked]}></Photo>
      </WholePage>
    );
  }
}

export default PhotoModal;
