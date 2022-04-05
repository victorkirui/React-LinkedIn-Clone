import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../actions";
import { Navigate } from "react-router-dom";

const Header = (props) => {
  return (
    <Container>
      {!props.user && <Navigate replace to="/" />}
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <MenuWrap>
          <MenuList className="active">
            <a>
              <img src="/images/nav-home.svg" alt="" />
              <span>Home</span>
            </a>
          </MenuList>
          <MenuList>
            <a>
              <img src="/images/nav-network.svg" alt="" />
              <span>My network</span>
            </a>
          </MenuList>
          <MenuList>
            <a>
              <img src="/images/nav-jobs.svg" alt="" />
              <span>Jobs</span>
            </a>
          </MenuList>
          <MenuList>
            <a>
              <img src="/images/nav-messaging.svg" alt="" />
              <span>Messaging</span>
            </a>
          </MenuList>
          <MenuList>
            <a>
              <img src="/images/nav-notifications.svg" alt="" />
              <span>Notifications</span>
            </a>
          </MenuList>
        </MenuWrap>
        <Profile>
          <a>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src="/images/user.svg" alt="" />
            )}
            <span>
              Me
              <img src="/images/down-icon.svg" className="drop-down" alt="" />
            </span>
          </a>
          <SignOut onClick={() => props.signOut()}>
            <a>Sign Out</a>
          </SignOut>
        </Profile>
        <Work>
          <a>
            <img src="/images/nav-work.svg" alt="" />
            <span>
              Work
              <img src="/images/down-icon.svg" alt="" />
            </span>
          </a>
        </Work>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background: #fff;
  margin: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0px;
`;
const Content = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 0px 10px;
  display: flex;
  align-items: center;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  position: relative;
  display: flex;
  height: 35px;
  align-items: center;
  & > div {
    max-width: 280px;
    input {
      display: block;
      background: #eef3f8;
      width: 200px;
      border: none;
      height: 30px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 1.7;
      outline: none;
      padding-left: 40px;
    }
  }
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 10px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  img {
    pointer-events: none;
    padding: 0;
    margin: 0;
  }
`;
const MenuWrap = styled.ul`
  margin-left: auto;
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 8px auto;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 99;
  }
  .active {
    span:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid rgba(0, 0, 0, 0.8);
    }
  }
`;
const MenuList = styled.li`
  position: relative;
  cursor: pointer;
  padding: 8px 10px;
  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
    }
    span {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    & > a {
      span {
        color: rgba(0, 0, 0, 0.85);
      }
    }
  }
`;
const SignOut = styled.div`
  text-decoration: none;
  background: #fff;
  width: 100px;
  border-radius: 0px 0px 4px 4px;
  padding: 10px;
  position: absolute;
  display: none;
`;
const Profile = styled(MenuList)`
  list-style-type: none;
  & > a {
    img {
      border-radius: 50px;
      width: 30px;
      height: 30px;
    }
    .drop-down {
      width: 15px;
      height: auto;
    }
    span {
      display: flex;
      align-items: center;
    }
  }
  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const Work = styled(MenuList)`
  list-style-type: none;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  margin-left: 20px;
  padding-left: 20px;
  & > a {
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 15px;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
