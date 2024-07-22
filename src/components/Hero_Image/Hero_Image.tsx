import React from 'react';
import styled from 'styled-components';

interface HeroContainerProps {
  imageurl: string;
  disabled?: boolean;
  textColor?: string;
  testId?: string;
}

export interface HeroImageProps {
  title: string;
  subtitle: string;
  imageurl: string;
  disabled?: boolean;
  textColor?: string;
  testId?: string;
}

const HeroContainer = styled.div<HeroContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.imageurl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  color: ${props => (props.disabled ? 'light-grey' : props.textColor || 'white')};
  text-align: center;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
`;

function HeroImage({ title, subtitle, imageurl, disabled , textColor , testId}: HeroImageProps) {
  return (
    <HeroContainer data-testid={testId} imageurl={imageurl} disabled={disabled} textColor={textColor}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeroContainer>
  );
}

export default HeroImage;
