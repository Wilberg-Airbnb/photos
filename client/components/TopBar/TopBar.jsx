import React from 'react';
import styled from 'styled-components';

const AWS_URL = `https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/`;

const Icon = styled.img`
  max-height: 12px;
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-basis: column;
  width: 975px;
  margin-bottom: 10px;
`;
const Place = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SpacerDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const OverView = styled.div`
  font-size: 14px;
  margin-right: 15px;
}
`;
const Underline = styled.span`
  text-decoration: underline;
`;

const Bold = styled.span`
  font-weight: bold;
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

const TopBar = ({ listingInfo }) => {
  let location, placeName, averageRating, numberOfReviews;
  if (listingInfo) {
    location = `${listingInfo.city}, ${listingInfo.country}`;
    placeName = listingInfo.placeName;
    averageRating = listingInfo.score;
    numberOfReviews = listingInfo.reviews;
    averageRating = listingInfo.score;
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
            Like <Icon src={`${AWS_URL}like.png`}></Icon> Save
            {'  '}
            <Icon src={`${AWS_URL}export.png`}></Icon>{' '}
          </Like>
        </SpacerDiv>
      </ContainerDiv>
    </div>
  );
};

export default TopBar;
