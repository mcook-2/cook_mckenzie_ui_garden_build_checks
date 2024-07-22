import React from 'react';
import styled from 'styled-components';

export interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  testId?: string;
}

const Image = styled.img<{ disabled?: boolean }>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  filter: ${props => (props.disabled ? 'grayscale(100%);' : 'grayscale(0%);')};
`;

const Img = ({ src, alt, width, height, disabled, testId }: ImgProps) => {
  return (
    <Image data-testid={testId} src={src} alt={alt} width={width} height={height} disabled={disabled} />
  );
};

export default Img;