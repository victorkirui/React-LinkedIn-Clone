import React from "react";
import styled from "styled-components";

const LeftSide = () => {
  return (
    <Container>
      <Content>
        <Bg />
        <Welcome>
          <a>
            <div>
              <span></span>
            </div>
          </a>
          <span>
            <h5>Welcome, Victor Kirui!</h5>
            <p>Add a photo</p>
          </span>
          <Connections>
            <ConnectionsContent>
              <div>
                <a>Connections</a>
                <p>Grow your connections</p>
              </div>
              <img src="/images/widget-icon.svg" alt="" />
            </ConnectionsContent>
          </Connections>
        </Welcome>
      </Content>
      <Item>
        <img src="/images/item-icon.svg" alt="" /> <span>Items</span>
      </Item>
      <Wrapper>
        <div>
          <div>
            <a>Groups</a>
          </div>
          <div>
            <a>Events</a>
          </div>
          <span>
            <a>Follows Hashtags</a>
            <a>
              <img src="/images/plus-icon.svg" alt="" />
            </a>
          </span>
        </div>
      </Wrapper>
      <Discover>
        <span>Discover More</span>
      </Discover>
    </Container>
  );
};

const Container = styled.div`
  grid-area: LeftSide;
`;
const Content = styled.div`
  background: #fff;
  border-radius: 6px 6px 0px 0px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const Bg = styled.div`
  background: url("/images/card-bg.svg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 54px;
`;
const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    justify-content: center;
    div {
      margin-top: -25px;
      width: 55px;
      height: 55px;
      border-radius: 50px;
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: block;
        width: 40px;
        height: 40px;
        background: url("/images/photo.svg");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px 0px;
    h5 {
      font-weight: 600;
      line-height: 1.333;
      text-align: center;
    }
    p {
      font-weight: 400;
      color: #0a66c2;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;
const Connections = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  &:hover {
    transition-duration: 675ms;
    background: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;
const ConnectionsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  div {
    display: flex;
    flex-direction: column;
    a {
      align-self: flex-start;
      color: rgba(0, 0, 0, 0.6);
    }
    p {
      font-weight: 600;
      line-height: 1.333;
    }
  }
  img {
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  background: #fff;
  border-radius: 6px 6px 0px 0px;
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  div {
    a {
      font-weight: 600;
      line-height: 1.7;
      cursor: pointer;
    }
    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const Discover = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px;
  background: #fff;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  border-radius: 0px 0px 6px 6px;
  &:hover {
    transition-duration: 675ms;
    background: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;
const Item = styled(Discover)`
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 6px 6px;
  padding: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  img {
    margin-right: 2px;
  }
`;

export default LeftSide;
