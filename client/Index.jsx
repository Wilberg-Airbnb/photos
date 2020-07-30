import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Photogrid from './components/PhotogridComponents/Photogrid.jsx';
import TopBar from './components/TopBar/TopBar.jsx';

const CenteringContainer = styled.div`
  #photos & {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
  }
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      listingInfo: null,
      listingId: window.location.pathname.slice(1, -1),
    };
  }

  componentDidMount() {
    fetch(`http://52.14.166.9:3001/api/photos/${this.state.listingId}`)
      .then((photos) => {
        return photos.json();
      })
      .then((photos) => {
        this.setState({
          photos: photos.photos,
        });
      })
      .catch((error) => {
        // Error handling for when databases is down
        console.log('Error getting photos', error);
        let errorArray = new Array(5).fill(
          'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        );
        this.setState({
          photos: errorArray,
        });
      });
  }

  render() {
    return (
      <CenteringContainer>
        <TopBar listingId={this.state.listingId}></TopBar>
        <Photogrid photos={this.state.photos}></Photogrid>
      </CenteringContainer>
    );
  }
}

export default Index;
