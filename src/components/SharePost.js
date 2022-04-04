import React from "react";
import styled from "styled-components";

const SharePost = () => {
  return (
    <Container>
      <SharedPost>
        <div>
          <img src="/images/user.svg" alt="" />
          <button> Start a post</button>
        </div>
        <div>
          <Button>
            <img src="/images/photo-icon.svg" alt="" />
            Photo
          </Button>
          <Button>
            <img src="/images/video.svg" alt="" />
            Video
          </Button>
          <Button>
            <img src="/images/event-icon.svg" alt="" />
            Event
          </Button>
          <Button>
            <img src="/images/article.svg" alt="" />
            Write artcle
          </Button>
        </div>
      </SharedPost>
    </Container>
  );
};

const Container = styled.div``;
const CommonCard = styled.div`
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgb(0 0 0 /10%), 0 0 0 1px rgb(0 0 0 /5%);
  text-align: center;
  margin-bottom: 8px;
`;
const SharedPost = styled(CommonCard)`
  div {
    display: flex;
    align-items: center;
    padding: 10px;
    img {
      width: 48px;
      border-radius: 50px;
      margin-right: 8px;
    }
    button {
      flex-grow: 1;
      border-radius: 35px;
      font-size: 14px;
      height: 45px;
      background: transparent;
      outline: none;
      text-align: left;
      color: #958b76;
      padding-left: 16px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      transition-duration: 675ms;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.08);
    }
    &:nth-child(2) {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      img {
        width: 30px;
      }
    }
  }
`;
const Button = styled.div`
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  color: #0a66c2;
  font-size: 13px;
  transition-duration: 675ms;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

export default SharePost;
