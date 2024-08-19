import React, { useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import StarField from '../../components/StarField/StarField';
import CursorFollowerComponent from '../../components/CursorFollower/CursorFollower';
import ThreeDImg from '../../components/ThreeDImg/ThreeDImg';
import { DarkTheme, LightTheme } from '../../components/Themes/Theme';
import {
  LeftIcon,
  Twitter,
  Github,
  Email,
} from '../../components/AllSvgs/AllSvgs';

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(2.5px);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  margin-right: 2rem; /* Add margin to the right to avoid being too close to the scrollbar */
  transition:
    background-color 0.5s ease,
    opacity 0.5s ease; /* Smooth transition for color inversion and opacity */
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 60vw;
    height: 50vh;
    font-size: calc(0.6rem + 0.8vw);
    margin-right: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 70vw;
    height: 40vh;
    font-size: calc(0.6rem + 0.6vw);
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 30vh;
    font-size: calc(0.6rem + 0.4vw);
    padding: 1rem;
    margin: 1.5rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.01); /* Example rgba for background */
    color: rgba(255, 255, 255, 0.99); /* Example rgba for text color */
  }
`;

const Box = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column; /* Stack components vertically on smaller screens */
    margin-top: 4rem;
  }
`;

const StarFieldWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

const ThreeDImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  width: 50vw;
  height: 60vh;

  @media (max-width: 1200px) {
    width: 60vw;
    height: 50vh;
  }

  @media (max-width: 768px) {
    width: 70vw;
    height: 40vh;
  }

  @media (max-width: 480px) {
    width: 60vw;
    height: 20vh;
  }
`;

const LeftIconPosition = styled.div`
  position: absolute;
  top: 1em;
  left: 3em;
  width: 40px;
  height: 40px;
  z-index: 3;
  transition:
    filter 0.3s ease,
    fill 0.3s ease;

  svg {
    fill: black;
    transition: fill 0.3s ease;
    filter: drop-shadow(0 0 2px white);
  }

  &:hover svg {
    fill: white;
    filter: none;
  }

  @media (max-width: 768px) {
    top: 0.2em;
    left: 0.5em;
    max-width: 30px;
    max-height: 30px;
  }
`;

const IconLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  svg {
    width: 40px;
    height: 40px;
    fill: ${(props) => props.theme.text};
    transition: fill 0.3s ease;

    &:hover {
      fill: rgba(255, 255, 255, 0.5);
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const About = () => {
  const [theme, setTheme] = useState(DarkTheme);
  const LeftIconRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setTheme(LightTheme);
  };

  const handleMouseLeave = () => {
    setTheme(DarkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <StarFieldWrapper>
        <StarField />
      </StarFieldWrapper>
      <Box>
        <ThreeDImgWrapper>
          <ThreeDImg />
        </ThreeDImgWrapper>
        <Main>
          I'm a Full-Stack developer located in Canada. I love to create minimal
          websites with a focus on user experience.
          <br /> <br />
          I like trying new things and creatively done things that are not the
          norm. I'm an independent freelancer for hire.
          <br /> <br />I believe everything is an art when you put your
          consciousness into it. You can connect with me via social links below.
          <IconLinks>
            <IconLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </IconLink>
            <IconLink
              href="https://github.com/mcook-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </IconLink>
            <IconLink href="mailto:Mckenzie.d.cook@gmail.com">
              <Email />
            </IconLink>
          </IconLinks>
        </Main>
        <LeftIconPosition
          ref={LeftIconRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/">
            <LeftIcon
              width={40}
              height={40}
              fill={theme.text}
              style={{ cursor: 'pointer' }}
            />
          </a>
        </LeftIconPosition>
        <CursorFollowerComponent />
      </Box>
    </ThemeProvider>
  );
};

export default About;
