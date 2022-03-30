import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './RightSide'

const Home = () => {
  return (
    <>
        <Header />
        <Container>
            <Content>
                <Section>
                    <h5><a href="#">Hiring in a hurry ? -&nbsp; </a></h5>
                    <p>Find talented pros in record tim with Upwork and keep business moving.</p>
                </Section>
            </Content>
            <MainSections>
                <LeftSide />
                <Main />
                <RightSide />
            </MainSections>
        </Container>
        
    </>
  )
}

const Container = styled.div`
    width:100%;
    padding:20px;
`
const Content = styled.div`
    max-width:1128px;
    margin:auto;
`
const Section = styled.div`
    display: flex ;
    justify-content:center ;
    align-items: center ;
    padding:30px 20px;
    h5{
        a{
            font-weight:600;
            color:#0a66c2;
            cursor:pointer;
        }
    }
    p{  font-weight:600;
        font-size:14px;
        text-decoration:underline;
        cursor:pointer
    }
    @media (max-width:768px){
        flex-direction: column ;
    }
`
const MainSections = styled(Content)`
    display: grid;
    grid-template-areas: "LeftSide Main RightSide" ;
    grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(0,7fr) ;
    grid-gap: 25px ;
    padding:15px;
    @media (max-width:768px){
        display:flex;
        flex-direction:column;
        margin:auto;
    }
`
export default Home