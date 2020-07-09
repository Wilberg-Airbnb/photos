import React from 'react';
import axios from 'axios';

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
    return <h1>Hey</h1>;
  }
}

export default Index;
