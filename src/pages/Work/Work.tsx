import React, { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../../components/Themes/Theme';
import { motion, Variants } from 'framer-motion';
import { SmileyFace, WayOut } from '../../components/AllSvgs/AllSvgs';
import { Work } from '../../data/WorkData';
import Card from '../../components/Card/Card';
import CursorFollower from '../../components/CursorFollower/CursorFollower';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
  transition: background-color 0.5s ease;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WayOutPosition = styled(Rotate)`
  top: 10px;
  left: 10px;
`;

const SmileyFacePosition = styled(Rotate)`
  right: 1rem;
  bottom: 1rem;
`;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const [theme, setTheme] = useState(DarkTheme);
  const ref = useRef<HTMLUListElement>(null);
  const smileyFaceRef = useRef<HTMLSpanElement>(null);
  const wayOutRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    const smileyFaceElement = smileyFaceRef.current;
    const wayOutElement = wayOutRef.current;

    const rotate = () => {
      const rotation = `rotate(${-window.pageYOffset}deg)`;

      if (element) {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
      }

      if (smileyFaceElement) {
        smileyFaceElement.style.transform = rotation;
      }

      if (wayOutElement) {
        wayOutElement.style.transform = rotation;
      }
    };

    window.addEventListener('scroll', rotate);
    return () => {
      window.removeEventListener('scroll', rotate);
    };
  }, []);

  const handleMouseEnter = () => {
    setTheme(LightTheme);
  };

  const handleMouseLeave = () => {
    setTheme(DarkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CursorFollower />
      <Box>
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <SmileyFacePosition ref={smileyFaceRef}>
          <SmileyFace width={80} height={80} fill={theme.text} />
        </SmileyFacePosition>

        <WayOutPosition
          ref={wayOutRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/">
            <WayOut
              width={80}
              height={80}
              fill={theme.text}
              style={{ cursor: 'pointer' }}
            />
          </a>
        </WayOutPosition>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
