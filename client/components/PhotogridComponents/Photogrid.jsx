import React from 'react';
import styled from 'styled-components';
import Modal from '../Modals/Modal.jsx';
import PhotoModal from '../Modals/PhotoModal.jsx';

const ContainerDiv = styled.div`
  #photos & {
    left: 50%;
  }
`;

const GridContainer = styled.div`
  #photos & {
    display: flex;
    height: 475px;
    width: 975px;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const Big = styled.div`
  #photos & {
    height: 455px;
    width: 475px;
    background-color: rgba(250, 178, 210, 0.55);
    background-image: url(${(props) =>
      props.photo ||
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'});
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    &:hover {
      -webkit-filter: grayscale(50%);
      filter: brightness(80%);
      opacity: 0.8;
    }
  }
`;

const Photo1 = styled(Big)`
  #photos & {
    height: 220px;
    width: 235px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

const Photo2 = styled(Photo1)`
  #photos & {
    margin-top: 10px;
  }
`;

const Photo3 = styled(Photo1)`
  #photos & {
    border-top-right-radius: 15px;
  }
`;

const Photo4 = styled(Photo2)`
  #photos & {
    border-bottom-right-radius: 15px;
  }
`;

const ShowAllButton = styled.button`
  #photos & {
    text-align: center;
    margin-top: 80%;
    border-radius: 5px;
    margin-left: 40%;
    padding: 6px 8px 6px 8px;
    background-color: rgb(255, 255, 255);
    font-size: 10px;
    border-color: rgb(34, 34, 34);
  }
`;

class Photogrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglePhotosModal: false,
      photoClicked: null,
    };
    this.closeModal = this.closeModal.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
  }
  closeModal() {
    this.setState({
      togglePhotosModal: false,
    });
  }
  changePhoto(direction) {
    if (direction === 'left') {
      this.setState({
        photoClicked: this.state.photoClicked - 1,
      });
    } else if (direction === 'right') {
      this.setState({
        photoClicked: this.state.photoClicked + 1,
      });
    }
  }

  render() {
    let collectionOfPhotos;
    let arrayOfPhotos = [];
    // Wait for the aysnc componentDidMount (for photos prop not to be null)
    // and set the photos property
    if (this.props.photos !== null) {
      collectionOfPhotos = this.props.photos.slice(0, 5);
      collectionOfPhotos.map((photo, i) => {
        if (i === 0)
          arrayOfPhotos.push(
            <Big
              key={i}
              photo={photo}
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
              key={i}
              onClick={() => {
                console.log('Clicked', i);
                this.setState({
                  togglePhotosModal: !this.state.togglePhotosModal,
                  photoClicked: 1,
                });
              }}
              photo={photo}
            ></Photo1>
          );
        if (i === 2)
          arrayOfPhotos.push(
            <Photo2
              key={i}
              onClick={() => {
                console.log('Clicked', i);
                this.setState({
                  togglePhotosModal: !this.state.togglePhotosModal,
                  photoClicked: 2,
                });
              }}
              photo={photo}
            ></Photo2>
          );
        if (i === 3)
          arrayOfPhotos.push(
            <Photo3
              key={i}
              onClick={() => {
                console.log('Clicked', i);
                this.setState({
                  togglePhotosModal: !this.state.togglePhotosModal,
                  photoClicked: 3,
                });
              }}
              photo={photo}
            ></Photo3>
          );
        if (i === 4)
          arrayOfPhotos.push(
            <Photo4
              key={i}
              photo={photo}
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
                  // Have to display from zero on button click
                  this.setState({
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
      <ContainerDiv>
        <GridContainer>
          {arrayOfPhotos}
          {/* Conditional rendering the modal when you  click Show All */}
          {this.state.togglePhotosModal ? (
            <Modal>
              <PhotoModal
                photos={this.props.photos}
                close={this.closeModal}
                photoClicked={this.state.photoClicked}
                changePhoto={this.changePhoto}
              ></PhotoModal>
            </Modal>
          ) : null}
        </GridContainer>
      </ContainerDiv>
    );
  }
}

export default Photogrid;
