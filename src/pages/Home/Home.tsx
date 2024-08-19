import React, { useState } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SnakeInABox from '../../components/SnakeInnaBox/SnakeInnaBox';
import CursorFollower from '../../components/CursorFollower/CursorFollower';
import { Portfolio as PortfolioIcon } from '../../components/AllSvgs/AllSvgs';

interface WorkNavLinkProps extends NavLinkProps {
  click?: boolean;
}

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    /* Styles for screens smaller than 1200px */
  }

  @media (max-width: 768px) {
    /* Styles for screens smaller than 768px */
  }

  @media (max-width: 480px) {
    /* Styles for screens smaller than 480px */
  }
`;

const Container = styled.div`
  padding: 2rem;

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    bottom: 0.25rem;
  }
`;

const WORK = styled(NavLink)<WorkNavLinkProps>`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  padding: 1rem; /* Add padding */
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 1200px) {
    left: calc(0.5rem + 2vw);
  }

  @media (max-width: 768px) {
    left: calc(0.5rem + 1vw);
    font-size: 1rem;
    margin-left: 10px; /* Ensure no extra margin */
    top: 49%;
  }

  @media (max-width: 480px) {
    left: calc(0.25rem + 0.5vw);
    font-size: 0.8rem;
  }
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  padding: 1rem; /* Add padding */
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 1200px) {
    right: calc(0.5rem + 2vw);
  }

  @media (max-width: 768px) {
    right: calc(0.5rem + 1vw);
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    right: calc(0.25rem + 0.5vw);
    font-size: 0.8rem;
  }
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
  padding: 1rem; /* Add padding */
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const PORTFOLIO = styled.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  svg {
    width: 100%; // Adjust the size of the Portfolio icon
    height: 50px;
    fill: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    top: 1rem;
    svg {
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    top: 0.5rem;
    svg {
      height: 30px;
    }
  }
`;

const DarkDiv = styled.div<{ click: boolean }>`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition:
    height 0.5s ease,
    width 1s ease 0.5s;

  @media (max-width: 1200px) {
    width: ${(props) => (props.click ? '40%' : '0%')};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.click ? '30%' : '0%')};
  }

  @media (max-width: 480px) {
    width: ${(props) => (props.click ? '20%' : '0%')};
  }
`;

const Home = () => {
  const [click] = useState<boolean>(false);

  return (
    <MainContainer>
      <SnakeInABox />
      <CursorFollower />
      <DarkDiv click={click} />
      <Container>
        <PORTFOLIO>
          <PortfolioIcon />
        </PORTFOLIO>
        <WORK to="/work" click={click}>
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>
        <ABOUT to="/About">
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </motion.h2>
        </ABOUT>
        <BottomBar>
          <SKILLS to="/skills">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.2, delay: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Home;
