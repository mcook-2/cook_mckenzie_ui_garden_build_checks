import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  content: string;
  fontSize?: string;
  color?: string;
  disabled?: boolean;
}

const StyledText = styled.p<{ fontSize?: string; color?: string; disabled?: boolean }>`
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => (props.disabled ? 'grey' : props.color || 'black')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Text = ({ content, fontSize, color, disabled }: TextProps) => {
  return (
    <StyledText fontSize={fontSize} color={color} disabled={disabled}>
      {content}
    </StyledText>
  );
};

export default Text;
