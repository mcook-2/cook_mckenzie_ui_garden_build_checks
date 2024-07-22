import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  text: string;
  htmlFor?: string;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  border?: boolean;
  rounded?: boolean;
  fontSize?: string;
}

interface StyledLabelProps extends LabelProps {}

const StyledLabel = styled(({ text, htmlFor, disabled, backgroundColor, border, ...rest }: StyledLabelProps) => (
  <label htmlFor={htmlFor} {...rest}>
    {text}
  </label>
))<StyledLabelProps>`
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => (props.disabled ? 'grey' : props.color || 'black')};
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background: ${props => props.backgroundColor || 'transparent'};
  border: ${props => (props.border ? '1px solid black' : 'none')}; // Example border style
  border-radius: ${props => (props.rounded ? '4px' : '0')};
  padding: 8px 12px;
  display: inline-block;
`;

const Label = ({ text, htmlFor, disabled, backgroundColor, color, border, rounded, fontSize }: LabelProps) => {
  return (
    <StyledLabel
      text={text}
      htmlFor={htmlFor}
      disabled={disabled}
      backgroundColor={backgroundColor}
      color={color}
      border={border}
      rounded={rounded}
      fontSize={fontSize}
    />
  );
};

export default Label;
