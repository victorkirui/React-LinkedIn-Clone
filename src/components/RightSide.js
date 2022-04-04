import React from "react";
import styled from "styled-components";

const RightSide = () => {
  return (
    <Container>
      <FeedCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FollowList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <Button>
                <img src="/images/plus-icon.svg" alt="" /> <p>Follow</p>
              </Button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <Button>
                <img src="/images/plus-icon.svg" alt="" /> <p>Follow</p>
              </Button>
            </div>
          </li>
        </FollowList>
        <Recommendations>
          View all Recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendations>
      </FeedCard>
      <ImgCard>
        <img src="/images/dream-jobs.png" alt="" />
      </ImgCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: RightSide;
`;
const FeedCard = styled.div`
  background: #fff;
  border-radius: 6px;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 18px 12px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  h2 {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
  }
`;
const FollowList = styled.ul`
  list-style-type: none;
  margin: 20px 0px;
  li {
    display: flex;
    align-items: center;
    margin: 18px 0px;
    span {
      font-size: 14px;
      font-weight: 600;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 18px;
  padding: 7px 15px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  background: transparent;
  &:hover {
    transition-duration: 675ms;
    background: rgba(0, 0, 0, 0.08);
  }
  img {
    margin-right: 8px;
  }
  p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 600;
  }
`;
const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
const Recommendations = styled.div`
  display: flex;
  align-items: center;
  color: #0a66c2;
  cursor: pointer;
  font-size: 13px;
`;
const ImgCard = styled(FeedCard)`
  img {
    width: 100%;
    min-height: 150px;
  }
`;

export default RightSide;
