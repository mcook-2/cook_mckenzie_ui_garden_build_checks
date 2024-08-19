import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import img from '../../assets/Images/snake_sheet_box1_nbg.png';

// Keyframes for the initial 9-frame animation
const initialAnimation = keyframes`
  0% {
    transform: translate3d(0%, 0, 0);
  }
  100% {
    transform: translate3d(-99%, 0, 0);
  }
`;

// Keyframes for the repeating 4-9 frames animation
const loopAnimation = keyframes`
  0% {
    transform: translate3d(-33%, 0, 0); /* Start from frame 4 */
  }
  100% {
    transform: translate3d(-98%, 0, 0); /* End at frame 9 */
  }
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --pixel-size: 10;
  }
`;

// Styled components
const Character = styled.div<{ x: number; y: number }>`
  width: calc(7.5px * var(--pixel-size));
  height: calc(7px * var(--pixel-size));

  overflow: hidden;
  position: fixed;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  cursor: pointer; /* Make the character clickable */
`;

const CharacterSpritesheet = styled.img`
  width: calc(80px * var(--pixel-size));
  position: absolute;
  image-rendering: pixelated;

  animation:
    ${initialAnimation} 1.5s steps(9) 1,
    ${loopAnimation} 0.8s steps(6) infinite;
  animation-delay: 0s, 1.5s;
  animation-fill-mode: forwards;
`;

const SnakeInnaBox: React.FC = () => {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.button !== 0) return;
    const boundingRect = e.currentTarget.getBoundingClientRect();
    setRel({
      x: e.pageX - boundingRect.left,
      y: e.pageY - boundingRect.top,
    });
    setDragging(true);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: e.pageX - rel.x,
      y: e.pageY - rel.y,
    });
    e.preventDefault();
  };

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    const boundingRect = (
      e.currentTarget as HTMLElement
    ).getBoundingClientRect();
    setRel({
      x: touch.pageX - boundingRect.left,
      y: touch.pageY - boundingRect.top,
    });
    setDragging(true);
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!dragging) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.pageX - rel.x,
      y: touch.pageY - rel.y,
    });
    e.preventDefault();
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragging]);

  return (
    <>
      <GlobalStyle />
      <Character
        x={position.x}
        y={position.y}
        onMouseDown={handleMouseDown}
        onTouchStart={(e) => handleTouchStart(e.nativeEvent as TouchEvent)}
      >
        <CharacterSpritesheet src={img} alt="Character" />
      </Character>
    </>
  );
};

export default SnakeInnaBox;
