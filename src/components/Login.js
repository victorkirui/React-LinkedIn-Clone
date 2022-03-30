import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <div>
        <Container>
            <Nav>
                <a href="/">
                    <img src='/images/login-logo.svg' alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/login-hero.svg' alt='' />
                </Hero>
                <Form>
                    <Google>
                        <img src='/images/google.svg' alt='' />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>

    </div>
  )
}

const Container = styled.div`
    padding:0;
`
const Nav = styled.nav`
    max-width:1128px;
    margin:auto;
    padding:12px 0px 16px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:nowrap;

    & > a{
        width:134px;
        height:30px;
        @media (max-width:1075px){
            padding:5px;
        }
    }
`
const Join = styled.a`
    text-decoration:none;
    font-size:16px;
    padding:10px 24px;
    margin-right:12px;
    border-radius:4px;
    outline:none;
    transition-duration:674ms ;
    cursor:pointer;
    font-weight:600;
    color:rgba(0,0,0,0.6);
    &:hover{
        background:rgba(0,0,0,0.08);
        color:rgba(0,0,0,0.9);
    }
`
const SignIn = styled.a`
    text-decoration:none;
    font-size:16px;
    padding:10px 24px;
    border-radius:24px;
    outline:none;
    transition-duration:674ms;
    cursor:pointer;
    font-weight:600;
    color:#0a66c2;
    line-height:40px;
    box-shadow: inset 0 0 0 1px #0a66c2;
    &:hover{
        background:rgba(112,181,249,0.15);
    }
`
const Section = styled.section`
    max-width:1128px;
    margin:auto;
    padding:60px 0px;
    display:flex;
    flex-direction:column ;
    align-content: start;
`
const Hero = styled.div`
    width:100%;
    position: relative;
    h1{
        font-size:56px;
        line-height:70px;
        font-weight:200;
        width:55%;
        color:#2977c9;
        @media (max-width:1075px){
            line-height:4;
            font-size:40px;
            width:100%;
            text-align:center;
        }
        @media (max-width:768px){
            font-size:24px;
            line-height:2;
        }
    }
    img{
        position:absolute;
        right:-150px;
        top: 0px;
        width:700px;
        height:670px;
        @media (max-width:1075px){
            width:initial;
            height:initial;
            position:initial;
        }
    }
`
const Form = styled.div`
    margin-top:135px;
    width:50%;
    @media (max-width:1075px){
        margin-top:20px;
        width:100%;
    }
`
const Google = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:56px;
    color:rgba(0,0,0,0.6);
    border-radius:28px;
    transition-duration:675ms;
    cursor:pointer;
    outline:none;
    background: #ffffff;
    font-size:20px;
    &:hover{        
        color:rgba(0,0,0,0,75);
        background:rgba(0,0,0,0.08);
    }`

export default Login