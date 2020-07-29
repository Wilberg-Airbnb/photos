import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Photogrid from './components/PhotogridComponents/Photogrid.jsx';
import TopBar from './components/TopBar/TopBar.jsx';
const CenteringContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
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

    //   fetch(`http://52.14.166.9:3001/api/photos/${this.state.listingId}`)
    //   .then((description) => {
    //     description.json()
    //   }).
    //   (descriptions)
    // // Get all information from all services for top bar and photos
    // Promise.all([
    //   fetch(`http://52.14.166.9:3001/api/photos/${this.state.listingId}`),
    //   fetch(`http://52.14.166.9:4000/api/description/${this.state.listingId}`),
    //   fetch(`http://3.12.169.208:2001/api/location/${this.state.listingId}`),
    //   fetch(`http://52.14.214.44:8080/api/reviews/${this.state.listingId}`),
    // ])
    //   .then(([photos, description, location, reviews]) => {
    //     return Promise.all([
    //       photos.json(),
    //       description.json(),
    //       location.json(),
    //       reviews.json(),
    //     ]);
    //   })
    //   .then(([photos, description, location, reviews]) => {
    //     // set state in here
    //     this.setState({
    //       photos: photos.photos,
    //       listingInfo: {
    //         city: location.address.city,
    //         country: location.address.country,
    //         reviews: reviews[0].average,
    //         placeName: description.nameOfListing,
    //         reviews: reviews.length,
    //         score: reviews[0].average,
    //       },
    //     });
    //   });
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
