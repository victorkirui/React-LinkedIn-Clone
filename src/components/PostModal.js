import React, { useState } from "react";
import styled from "styled-components";
// import ReactPlayer from 'react-player';

const PostModal = ({ setOpen, handleModal }) => {
  const [editorText, setEditorText] = useState("");
  const [uploadedImg, setUploadedImg] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === "undefined") {
      alert(`not an image, file is of type ${typeof image}`);
      return;
    }
    setUploadedImg(image);
  };

  return (
    <Container>
      <Content>
        <Header>
          <p>Create a post</p>
          <button>
            <img src="/images/close-btn.svg" alt="" onClick={handleModal} />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src="/images/user.svg" alt="" />
            <span>
              <h5>Name</h5>
            </span>
          </UserInfo>
          <Editor>
            <textarea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder="What do you want to talk about?"
              autofocus={true}
            />
            <UploadBtn>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                id="file"
                name="image"
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <p>
                <label for="file">Select an image to share</label>
              </p>
              {uploadedImg && (
                <img src={URL.createObjectURL(uploadedImg)} alt="" />
              )}
              <>
                <input
                  type="text"
                  placeholder="Please add in video link to share"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                />
                {videoLink && <ReactPlayer width={"100"} url={videoLink} />}
              </>
            </UploadBtn>
          </Editor>
        </SharedContent>
        <ButtonsWrap>
          <ShareBtnsWrap>
            <ShareBtn>
              <img src="/images/share-photo.svg" alt="" />
            </ShareBtn>
            <ShareBtn>
              <img src="/images/share-video.svg" alt="" />
            </ShareBtn>
            <ShareBtn>
              <img src="/images/share-doc.svg" alt="" />
            </ShareBtn>
            <ShareBtn>
              <img src="/images/share-briefcase.svg" alt="" />
            </ShareBtn>
            <ShareBtn>
              <img src="/images/share-graph.svg" alt="" />
            </ShareBtn>
            <ShareBtn>
              <img src="/images/post-elipses.svg" alt="" />
            </ShareBtn>
            <ShareBtn>
              <a>
                <img src="/images/comment.svg" alt="" />
                Anyone
              </a>
            </ShareBtn>
          </ShareBtnsWrap>
          <PostBtn disabled={!editorText ? true : false}>Post</PostBtn>
        </ButtonsWrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  /* animation effect */
  animation: fadein;
  animation-duration: 300ms;
`;

const Content = styled.div`
  overflow: hidden;
  width: 90%;
  max-width: 550px;
  height: auto;
  background: #fff;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 30px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  p {
    font-size: 18px;
    font-weight: 500;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 500ms;
    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
  }
`;
const SharedContent = styled.div`
  margin: auto;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px;
  margin: auto;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;
const Editor = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  textarea {
    width: 100%;
    min-height: 100px;
    margin: auto;
    /* font-size: 16px; */
    border: none;
    outline: none;
    resize: none;
  }
  input {
    font-size: 20px;
  }
`;
const UploadBtn = styled.div`
  text-align: center;
  img {
    /* minheight: 100px; */
    width: 100%;
  }
`;

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  max-width: 500px;
  margin: auto;
`;
const ShareBtnsWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
`;
const ShareBtn = styled.div`
  width: 40px;
  height: 40px;
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 500ms;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
  &:last-child {
    background: transparent;
    border-radius: 0;
    width: auto;
    margin-left: 20px;
    padding-left: 10px;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition-duration: 500ms;
      background: transparent;
      padding: 8px;
      border-radius: 50px;
      &:hover {
        background: rgba(0, 0, 0, 0.08);
      }
      img {
        margin-right: 8px;
      }
    }
  }
`;
const PostBtn = styled.button`
  border-radius: 50px;
  padding: 8px 15px;
  cursor: pointer;
  background: ${(props) =>
    props.disabled ? "rgba(0, 0, 0, 0.08)" : "#0a66c2"};
  color: ${(props) => (props.disabled ? "#555" : "#fff")};
`;

export default PostModal;
