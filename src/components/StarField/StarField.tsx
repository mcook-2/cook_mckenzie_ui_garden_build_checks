import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Star {
  x: number;
  y: number;
  z: number;
  o: number;
  size: number;
}

const StyledCanvas = styled.canvas`
  display: block;
  margin: 0;
  background-color: black;
  overflow: hidden;
  z-index: -1;
  position: absolute;
`;

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [numStars, setNumStars] = useState<number>(500);
  const [speed, setSpeed] = useState<number>(8);
  const [mouseX, setMouseX] = useState<number>(window.innerWidth / 2);
  const [mouseY, setMouseY] = useState<number>(window.innerHeight / 2);

  const stars: Star[] = [];

  const createStar = (): Star => {
    let x, y;
    do {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
    } while (Math.hypot(x - mouseX, y - mouseY) < 3);

    return {
      x,
      y,
      z: Math.random() * window.innerWidth,
      o: Math.random(),
      size: Math.random() * 3 + 2, // Random size between 2 and 5
    };
  };

  const populateStars = () => {
    stars.length = 0;
    for (let i = 0; i < numStars; i++) {
      stars.push(createStar());
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId: number;

    const updateStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.z -= speed;

        if (star.z <= 0) {
          Object.assign(star, createStar());
          star.z = canvas.width;
        }

        const sx = (star.x - mouseX) * (canvas.width / star.z) + mouseX;
        const sy = (star.y - mouseY) * (canvas.width / star.z) + mouseY;
        const size = (1 - star.z / canvas.width) * star.size;
        context.fillStyle = 'white';
        context.fillRect(sx, sy, size, size);
      }

      animationFrameId = requestAnimationFrame(updateStars);
    };

    populateStars();
    updateStars();

    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    const debouncedMouseMove = debounce(handleMouseMove, 10);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'ArrowUp' || event.code === 'KeyW') {
        setSpeed(speed + 1);
      } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {
        setSpeed(Math.max(1, speed - 1));
      } else if (event.code === 'NumpadAdd') {
        setNumStars(numStars + 100);
        populateStars();
      } else if (event.code === 'NumpadSubtract') {
        setNumStars(Math.max(100, numStars - 100));
        populateStars();
      }
    };

    document.addEventListener('mousemove', debouncedMouseMove);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', debouncedMouseMove);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [numStars, speed, mouseX, mouseY]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    wait: number
  ) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return <StyledCanvas ref={canvasRef} />;
};

export default StarField;
