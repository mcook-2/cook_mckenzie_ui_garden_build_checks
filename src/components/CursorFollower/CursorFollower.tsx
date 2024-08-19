import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorFollower = styled.span`
  position: fixed;
  width: 2rem;
  height: 2rem;
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
`;

const CursorFollowerDot = styled.span`
  position: fixed;
  width: 0.8rem;
  height: 0.8rem;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
`;

const CursorFollowerComponent: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorDotPosition, setCursorDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setCursorPosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    let xp = cursorPosition.x;
    let yp = cursorPosition.y;
    let xpDot = cursorDotPosition.x;
    let ypDot = cursorDotPosition.y;

    const updateCursorFollower = () => {
      xp += (cursorPosition.x - xp) / 15;
      yp += (cursorPosition.y - yp) / 15;
      setCursorPosition({ x: xp, y: yp });
    };

    const updateCursorFollowerDot = () => {
      xpDot += (cursorPosition.x - xpDot) / 25;
      ypDot += (cursorPosition.y - ypDot) / 25;
      setCursorDotPosition({ x: xpDot, y: ypDot });
    };

    const interval1 = setInterval(updateCursorFollower, 0.5);
    const interval2 = setInterval(updateCursorFollowerDot, 1.5);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [cursorPosition]);

  return (
    <>
      <CursorFollower
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      />
      <CursorFollowerDot
        style={{
          left: `${cursorDotPosition.x}px`,
          top: `${cursorDotPosition.y}px`,
        }}
      />
    </>
  );
};

export default CursorFollowerComponent;
