import React, { useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";
import SharePost from "./SharePost";

const Main = () => {
  const [open, setOpen] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();

    setOpen(!open);
    console.log(open);
  };

  return (
    <Container>
      <SharePost open={open} handleModal={handleModal} />
      <Article>
        <SharedActor>
          <div>
            <a>
              <img src="/images/user.svg" alt="" />
            </a>
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Data</span>
            </div>
          </div>
          <div>
            <button>
              <img src="/images/elipses.svg" alt="" />
            </button>
          </div>
        </SharedActor>
        <Description>
          <p>Description</p>
        </Description>
        <SharedImg>
          <img src="/images/Setup.png" alt="" />
        </SharedImg>
        <SocialCounts>
          <div>
            <button>
              <img
                src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                alt=""
              />
              <img
                src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22"
                alt=""
              />
              <img
                src="	https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                alt=""
              />
              <span>16</span>
            </button>
            <span>123 comments</span>
          </div>
        </SocialCounts>
        <SocialActions>
          <button>
            <img src="/images/like.svg" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src="/images/comment.svg" alt="" />
            <span>Comment</span>
          </button>
          <button>
            <img src="/images/share.svg" alt="" />
            <span>Share</span>
          </button>
          <button>
            <img src="/images/send.svg" alt="" />
            <span>Send</span>
          </button>
        </SocialActions>
      </Article>
      {open && <PostModal setOpen={setOpen} handleModal={handleModal} />}
    </Container>
  );
};

const Container = styled.div`
  grid-area: Main;
`;
const Article = styled.div`
  background: #fff;
  border-radius: 6px;
  padding: 8px 0px;
  margin-bottom: 8px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;
const SharedActor = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  div {
    &:first-child {
      display: flex;
      align-items: center;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50px;
        margin-right: 8px;
      }
      div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        span {
          &:first-child {
            font-weight: 600;
            font-size: 14px;
            color: rgba(0, 0, 0, 1);
            overflow: hidden;
          }
          &:nth-child(n + 1) {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.6);
            overflow: hidden;
          }
        }
      }
    }
    &:nth-child(2) {
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        position: absolute;
        top: 0;
        right: 10px;
        border: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        transition-duration: 675ms;
        &:hover {
          background: rgba(0, 0, 0, 0.08);
        }
      }
    }
  }
`;
const Description = styled.div`
  p {
    margin: 0px 10px 10px;
    font-size: 13px;
    overflow: hidden;
  }
`;
const SharedImg = styled.div`
  background: #f3f3f3;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  img {
    object-fit: contain;
    width: 100%;
    height: auto;
  }
`;
const SocialCounts = styled.div`
  padding: 0px 10px;
  div {
    display: flex;
    align-items: color-interpolation-filters;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.6);
    padding: 10px 0px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    button {
      background: transparent;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      img {
        display: block;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:nth-child(n + 1) {
          margin-left: -5px;
        }
        &:hover {
          transform: scale3d(1);
        }
      }
    }
    span {
      font-size: 12px;
    }
  }
`;
const SocialActions = styled.div`
  display: flex;
  align-items: auto;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 10px 15px;
    transition-duration: 675ms;
    color: rgba(0, 0, 0, 0.7);
    img {
      margin-right: 5px;
    }
    &:hover {
      background: #ebebeb;
    }
  }
`;

export default Main;
