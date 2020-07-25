import React from 'react';
import axios from 'axios';
import Photogrid from './components/PhotogridComponents/Photogrid.jsx';
import styled from 'styled-components';

const CenteringContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      listingId: window.location.pathname.slice(1, -1),
    };
  }

  componentDidMount() {
    // Grab the set of photos based on the listing id.
    axios
      .get(`http://52.14.166.9:3001/api/photos/${this.state.listingId}`)
      .then(({ data }) => {
        this.setState({ photos: data[0] });
      });
  }

  render() {
    return (
      <CenteringContainer>
        <Photogrid photos={this.state.photos}></Photogrid>
      </CenteringContainer>
    );
  }
}

export default Index;
