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
    z-index: 999;
  }
`;

let Arrow = styled.div`
  #photo-modal & {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border: solid 1px #bbb;
    border-radius: 50%;
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
  #photo-modal & {
  }
`;

const CloseButton = styled.button`
  #photo-modal & {
    text-align: center;
    border-radius: 5px;
    padding: 6px 8px 6px 8px;
    background-color: rgba(34, 34, 34, 0.1);
    font-size: 10px;
    margin-left: 10px;
    border: solid 1px white;
  }
`;

const Count = styled.span`
  #photo-modal & {
    text-align: center;
  }
`;

const PhotoRecord = styled.div`
  #photo-modal & {
  }
`;

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
    width: 90%;
    height: 100%;
    align-items: center;
    margin-left: 5%;
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
          {photoClicked >= 1 ? (
            <Arrow
              onClick={() => {
                if (photoClicked > 0) changePhoto('left');
              }}
            >
              {'<'}
            </Arrow>
          ) : (
            <span></span>
          )}
          {photoClicked === photoLength - 1 ? (
            <span></span>
          ) : (
            <Arrow
              onClick={() => {
                if (photoClicked < photoLength - 1) changePhoto('right');
              }}
            >
              {'>'}
            </Arrow>
          )}
        </ButtonContainer>
        <Photo photo={this.props.photos[photoClicked]}></Photo>
      </WholePage>
    );
  }
}

export default PhotoModal;
