import React from 'react';
import styled from 'styled-components';

export interface RadioButtonProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (id: string) => void;
  disabled?: boolean;
  fontSize?: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 8px;
`;

const Label = styled.label<{ disabled?: boolean, fontSize?: string }>`
  font-size: ${props => props.fontSize || '14px'};
  color: ${props => (props.disabled ? 'grey' : 'black')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton = ({ id, label, checked, onChange, disabled, fontSize  }: RadioButtonProps) => {
  const handleChange = () => {
    onChange(id);
  };

  return (
    <Wrapper>
      <Input
        type="radio"
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <Label htmlFor={id} disabled={disabled} fontSize={fontSize}>
        {label}
      </Label>
    </Wrapper>
  );
};

export default RadioButton;
