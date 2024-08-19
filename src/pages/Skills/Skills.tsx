import React, { useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../../components/Themes/Theme';
import CircleAnimation from '../../components/CircleAnimation/CircleAnimation';
import CursorFollowerComponent from '../../components/CursorFollower/CursorFollower';
import { UpIcon } from '../../components/AllSvgs/AllSvgs';

const UpIconPosition = styled.div`
  position: absolute;
  top: 1em;
  left: 3em;
  width: 40px;
  height: 40px;
  z-index: 3;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(1.1);
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  flex-direction: row; /* Default to row layout */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack components vertically on smaller screens */
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 2;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media (max-width: 1200px) {
    width: 40vw;
    height: 50vh;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
    margin-bottom: 1rem; /* Add space between stacked components */
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: auto;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 1200px) {
    font-size: calc(0.9em + 0.9vw);
  }

  @media (max-width: 768px) {
    font-size: calc(0.8em + 0.8vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.7em + 0.7vw);
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  @media (max-width: 1200px) {
    font-size: calc(0.55em + 0.9vw);
  }

  @media (max-width: 768px) {
    font-size: calc(0.5em + 0.8vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.45em + 0.7vw);
  }
`;

const Skills = () => {
  const [theme, setTheme] = useState(LightTheme);
  const [touched, setTouched] = useState(false);
  const UpIconRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!touched) {
      setTheme(LightTheme);
    }
  };

  const handleMouseLeave = () => {
    if (!touched) {
      setTheme(DarkTheme);
    }
  };

  const handleTouchStart = () => {
    setTouched(!touched);
    setTheme(touched ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CursorFollowerComponent />

      <Box>
        <CircleAnimation theme={theme} />
        <UpIconPosition
          ref={UpIconRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
        >
          <a href="/">
            <UpIcon
              width={40}
              height={40}
              fill={theme.text}
              style={{ cursor: 'pointer' }}
            />
          </a>
        </UpIconPosition>
        <Main>
          <Title>Design Philosophy</Title>
          <Description>
            I love to create designs that speak, keeping them clean, minimal,
            and simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
              <li>E-commerce</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>Professional Skills</Title>
          <Description>
            I value the business or brand for which I'm creating, and I enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              HTML, CSS, JS, PHP, React, Sass, Bootstrap, Ruby on Rails, etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VS Code, GitHub, Photoshop, etc.</p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
