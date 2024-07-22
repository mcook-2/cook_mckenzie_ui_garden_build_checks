import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  backgroundColor?: string;
}

const StyledButton = styled(({ label, disabled, onClick, backgroundColor, ...rest }: ButtonProps) => (
  <button disabled={disabled} onClick={onClick} {...rest}>
    {label}
  </button>
))`
  background: ${props => (props.disabled ? 'grey' : props.backgroundColor || 'blue')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = ({ label, disabled, onClick, backgroundColor }: ButtonProps) => {
  return <StyledButton label={label} disabled={disabled} onClick={onClick} backgroundColor={backgroundColor} />;
};

export default Button;
