import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: string[];
  disabled?: boolean;
  onSelect: (value: string) => void;
  backgroundColor?: string;
  textColor?: string;
}

const Select = styled.select<{ disabled?: boolean, backgroundColor?: string, textColor?: string }>`
  width: 200px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${props => (props.disabled ? 'grey' : props.backgroundColor || 'white')};
  color: ${props => (props.disabled ? 'white' : props.textColor || 'black')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

function Dropdown({ options, disabled, onSelect, backgroundColor , textColor  }: DropdownProps) {
  return (
    <Select onChange={(e) => onSelect(e.target.value)} disabled={disabled} backgroundColor={backgroundColor} textColor={textColor}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}

export default Dropdown;