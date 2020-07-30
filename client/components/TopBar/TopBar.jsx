import React from 'react';
import styled from 'styled-components';

const AWS_URL = `https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/`;

const Icon = styled.img`
  #photos & {
    max-height: 12px;
  }
`;

const ContainerDiv = styled.div`
  #photos & {
    display: flex;
    flex-basis: column;
    width: 975px;
    margin-bottom: 10px;
  }
`;
const Place = styled.div`
  #photos & {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const SpacerDiv = styled.div`
  #photos & {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const OverView = styled.div`
  #photos & {
    font-size: 14px;
    margin-right: 15px;
  }
`;
const Underline = styled.span`
  #photos & {
    text-decoration: underline;
  }
`;

const Bold = styled.span`
  #photos & {
    font-weight: bold;
  }
`;

const Like = styled(OverView)`
  text-decoration: underline;
`;
const Star = styled.div`
  background: #ff385c;
  -webkit-clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  display: inline-block;
  height: 15px;
  width: 15px;
  margin-right: 4px;
`;

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      country: null,
      placeName: null,
      reviews: null,
      score: null,
    };
  }
  componentDidMount() {
    fetch(`http://52.14.166.9:4000/api/description/${this.props.listingId}`)
      .then((description) => {
        return description.json();
        // return description.json();
      })
      .then((description) => {
        this.setState({
          placeName: description.nameOfListing,
        });
      })
      .catch((error) => {
        console.log('Error in description', error);
        this.setState({
          placeName: 'An Airbnb Listing',
        });
      });

    fetch(`http://3.12.169.208:2001/api/location/${this.props.listingId}`)
      .then((location) => {
        return location.json();
      })
      .then((location) => {
        this.setState({
          city: location.address.city,
          country: location.addres.city,
        });
      })
      .catch((error) => {
        console.log('Error in location');
        this.setState({
          city: 'Los Angeles',
          country: 'USA',
        });
      });

    fetch(`http://52.14.214.44:8080/api/reviews/${this.props.listingId}`)
      .then((reviews) => {
        return reviews.json();
      })
      .then((reviews) => {
        this.setState({
          reviews: reviews.length,
          score: reviews[0].average,
        });
      })
      .catch((error) => {
        console.log('Error in Reviews');
        this.setState({
          reviews: '100',
          score: '4.5',
        });
      });
  }
  render() {
    let location, placeName, averageRating, numberOfReviews;
    if (Object.values(this.state).indexOf(null) === -1) {
      location = `${this.state.city}, ${this.state.country}`;
      placeName = this.state.placeName;
      averageRating = this.state.score;
      numberOfReviews = this.state.reviews;
      averageRating = this.state.score;
    }

    return (
      <div>
        <Place>{placeName}</Place>
        <ContainerDiv>
          <SpacerDiv>
            <OverView>
              <Star /> <Bold>{averageRating} </Bold>({numberOfReviews})
              <Underline>{location}</Underline>
            </OverView>
            <Like>
              {/* Substitute material ui for s3 icons */}
              Like <Icon src={`${AWS_URL}like.png`}></Icon> Save
              {'  '}
              <Icon src={`${AWS_URL}export.png`}></Icon>{' '}
            </Like>
          </SpacerDiv>
        </ContainerDiv>
      </div>
    );
  }
}

export default TopBar;
