import { render, screen } from '@testing-library/react';
import Dropdown, { DropdownProps } from './Dropdown';
import React from 'react';


describe('Dropdown component', () => {
  const options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  const onSelectMock = jest.fn(); // mock function

  const renderDropdown = (props: Partial<DropdownProps> = {}) => {
    const defaultProps: DropdownProps = {
      options,
      onSelect: onSelectMock,
      ...props,
    };

    return render(<Dropdown {...defaultProps} />);
  };

  test('is component visible?', () => {
    renderDropdown();

    const selectElement = screen.getByRole('combobox');

    expect(selectElement).toBeVisible();

    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test('background color changes when disabled', () => {
    renderDropdown({ disabled: true });

    const selectElement = screen.getByRole('combobox');

    expect(selectElement).toBeDisabled();
    expect(selectElement).toHaveStyle('background-color: grey');
  });
});