import React from "react";
import Navbar from "../components/Navbar";
import worker from '../images/illustration-working.svg'
import styled from "styled-components";
import Functionalty from "../components/Functionalty";
import Statistics from "../components/Statistics";

function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Hero>
        <div className="text">
            <h1>More than just shorter links</h1>
            <h4>Build your brand's recognition and get detailed insights on how your links are performing.</h4>
            <Button>Get Started</Button>
        </div>
        <div className="img">
            <img src={worker} alt="" />
        </div>
      </Hero>
      <Functionalty />
      <Statistics />
    </Wrapper>
  );
}

const Wrapper = styled.div`

`

const Hero = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: calc(100vh - 30px - 80px);
    overflow-x: hidden;
    height: 100%;
    .text {
        width: 50%;
    }

    .img {
        width: 50%;
        padding-left: 1rem;
    }


    img {
        width: 600px;
        height: 100%;
    }
      
    h1 {
      font-weight: 700;
    }

    h4 {
        font-weight: 400;
        line-height: 30px;
        color: var(--secondary-gray);
    }

    @media screen and (max-width: 1200px) {

      .img {
        padding-left: 2rem;
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      text-align: center;

      .text, .img, img {
        width: 80%;
      }

      .text {
        margin-top: 3rem;
      }
      
    }

    @media screen and (max-width: 550px) {
      .text, .img, img {
        width: 100%;
      }
    }
`

const Button = styled.button`
    font-size: 1.2rem;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    outline: none;
    border: none;
    background-color: var(--primary-cyan);
    color: var(--primary-light);
    margin-top: 2rem;
`

export default Home;
