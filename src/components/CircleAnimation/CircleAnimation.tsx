import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Theme } from '../../components/Themes/Theme';

// Keyframes for the wave animation
const wave = keyframes`
  0% {
    transform: scale(30);
  }
  100% {
    transform: scale(0);
  }
`;

const Circle = styled.div<{ index: number; theme: Theme }>`
  width: 10vw;
  height: 10vw;
  background-color: transparent;
  border: 5px solid ${({ theme }) => theme.text}; // Use theme color for the border
  border-radius: 50%;
  margin: 0 10px;
  position: absolute;
  left: calc(50% - 5vw);
  top: calc(50% - 5vw);
  animation: ${wave} 10s linear infinite;
  animation-delay: ${({ index }) => `${index * 2}s`};
  transform: scale(30);
`;

const Container = styled.div<{ theme: Theme }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.body}; // Use theme background color
  z-index: 1; /* Ensures it is behind other components */
  overflow: hidden; /* Prevents overflow outside the container */
`;

// CircleAnimation component
const CircleAnimation = ({ theme }: { theme: Theme }) => {
  const circles = Array.from({ length: 7 }, (_, index) => (
    <Circle key={index} index={index} theme={theme} />
  ));

  return <Container theme={theme}>{circles}</Container>;
};

export default CircleAnimation;
