import React from 'react';
import styled from 'styled-components';
import Modal from '../Modals/Modal.jsx';
import PhotoModal from '../Modals/PhotoModal.jsx';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  max-width: 950px;
  height: 1000px;
`;

const Big = styled.div`
  background-color: pink;
  background-image: url(${(props) =>
    props.photo ||
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'});
  border: 1px solid rgba(0, 0, 0, 0.8);
  grid-area: 1 / 1 / 3 / 3;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  &:hover {
    -webkit-filter: grayscale(50%);
    filter: brightness(80%);
    opacity: 0.8;
  }
`;

const Photo1 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  background-color: pink;
  background-image: url(${(props) =>
    props.photo ||
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'});
  border: 1px solid rgba(0, 0, 0, 0.8);
  &:hover {
    -webkit-filter: grayscale(50%);
    filter: brightness(80%);
    opacity: 0.8;
  }
`;

const Photo2 = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  background-color: pink;
  background-image: url(${(props) =>
    props.photo ||
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'});
  border: 1px solid rgba(0, 0, 0, 0.8);
  &:hover {
    -webkit-filter: grayscale(50%);
    filter: brightness(80%);
    opacity: 0.8;
  }
`;

const Photo3 = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  background-color: pink;
  background-image: url(${(props) =>
    props.photo ||
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'});
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-top-right-radius: 15px;
  &:hover {
    -webkit-filter: grayscale(50%);
    filter: brightness(80%);
    opacity: 0.8;
  }
`;

const Photo4 = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  background-color: pink;
  background-image: url(${(props) =>
    props.photo ||
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'});
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-bottom-right-radius: 15px;
  &:hover {
    -webkit-filter: grayscale(50%);
    filter: brightness(80%);
    opacity: 0.8;
  }
`;

const ShowAllButton = styled.button`
  text-align: center;
  margin-top: 80%;
  border-radius: 5px;
  margin-left: 40%;
  padding: 6px 8px 6px 8px;
  background-color: rgb(255, 255, 255);
  font-size: 10px;
  border-color: rgb(34, 34, 34);
`;

class Photogrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePhotosModal: false,
      photoClicked: null,
    };
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({
      togglePhotosModal: false,
    });
  }

  render() {
    let collectionOfPhotos;
    let arrayOfPhotos = [];
    // Wait for the aysnc componentDidMount (for photos prop not to be null)
    // and set the photos property
    if (this.props.photos !== null) {
      collectionOfPhotos = this.props.photos.photos.slice(0, 5);
      collectionOfPhotos.map((photo, i) => {
        if (i === 0)
          arrayOfPhotos.push(
            <Big
              photo={photo.photoUrl}
              onClick={() => {
                console.log('Clicked', i);
                this.setState({
                  togglePhotosModal: !this.state.togglePhotosModal,
                  photoClicked: 0,
                });
              }}
            ></Big>
          );
        if (i === 1)
          arrayOfPhotos.push(
            <Photo1
              onClick={() => {
                console.log('Clicked', i);
                this.setState({
                  togglePhotosModal: !this.state.togglePhotosModal,
                  photoClicked: 1,
                });
              }}
              photo={photo.photoUrl}
            ></Photo1>
          );
        if (i === 2)
          arrayOfPhotos.push(
            <Photo2
              onClick={() => {
                console.log('Clicked', i);
                this.setState({
                  togglePhotosModal: !this.state.togglePhotosModal,
                  photoClicked: 2,
                });
              }}
              photo={photo.photoUrl}
            ></Photo2>
          );
        if (i === 3)
          arrayOfPhotos.push(
            <Photo3
              onClick={() => {
                console.log('Clicked', i);
                this.setState({
                  togglePhotosModal: !this.state.togglePhotosModal,
                  photoClicked: 3,
                });
              }}
              photo={photo.photoUrl}
            ></Photo3>
          );
        if (i === 4)
          arrayOfPhotos.push(
            <Photo4
              photo={photo.photoUrl}
              onClick={() => {
                console.log('Clicked', i);
                this.setState({
                  togglePhotosModal: !this.state.togglePhotosModal,
                  photoClicked: 4,
                });
              }}
            >
              <ShowAllButton
                onClick={() => {
                  console.log('Clicked', i);
                  this.setState({
                    togglePhotosModal: !this.state.togglePhotosModal,
                    photoClicked: 0,
                  });
                }}
              >
                Show All photos
              </ShowAllButton>
            </Photo4>
          );
      });
    }
    return (
      <GridContainer>
        {arrayOfPhotos}
        {/* Conditional rendering the modal when you  click Show All */}
        {this.state.togglePhotosModal ? (
          <Modal>
            <PhotoModal
              photos={this.props.photos.photos}
              close={this.closeModal}
              photoClicked={this.state.photoClicked}
            ></PhotoModal>
          </Modal>
        ) : null}
      </GridContainer>
    );
  }
}

export default Photogrid;
