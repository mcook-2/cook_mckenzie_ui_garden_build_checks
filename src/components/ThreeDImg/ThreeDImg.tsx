import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import goofyGuyImage from '../../assets/Images/goofy-guy.png';

const Container = styled.div`
  perspective: 25px;
`;

const Inner = styled.div`
  width: 20em;
  height: 18em;
  background-color: white;
  background-image: url(${goofyGuyImage});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
`;

const ThreeDImg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;

    if (!container || !inner) return;

    // Mouse position object
    const mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition(event: MouseEvent) {
        this.x = event.clientX - this._x;
        this.y = (event.clientY - this._y) * -1;
      },
      setOrigin(e: HTMLElement) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
    };

    // Initialize mouse origin
    mouse.setOrigin(container);

    let counter = 0;
    const updateRate = 10;

    const isTimeToUpdate = () => counter++ % updateRate === 0;

    const update = (event: MouseEvent) => {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    const updateTransformStyle = (x: string, y: string) => {
      const style = `rotateX(${x}deg) rotateY(${y}deg)`;
      inner.style.transform = style;
    };

    const handleMouseEnter = (event: MouseEvent) => {
      update(event);
    };

    const handleMouseLeave = () => {
      inner.style.transform = '';
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Inner ref={innerRef}></Inner>
    </Container>
  );
};

export default ThreeDImg;
