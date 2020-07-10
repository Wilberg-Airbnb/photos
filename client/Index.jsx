import React from 'react';
import axios from 'axios';
import MainPhotoCard from './components/PhotoCards/MainPhotoCard.jsx';
import Photogrid from './components/PhotogridComponents/Photogrid.jsx';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
    };
  }

  componentDidMount() {
    axios.get('/api/photos/0').then(({ data }) => {
      this.setState({ photos: data[0] });
    });
  }

  render() {
    return (
      <div>
        {/* <MainPhotoCard></MainPhotoCard> */}
        <Photogrid photos={this.state.photos}></Photogrid>
      </div>
    );
  }
}

export default Index;
