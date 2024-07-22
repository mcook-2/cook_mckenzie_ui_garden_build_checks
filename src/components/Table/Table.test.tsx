import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table Component', () => {
  test('is component visible?', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </tr>
        </tbody>
      </Table>
    );

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeVisible();
  });
  test('background color changes when disabled', () => {
    render(
      <Table disabled ={true} >
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </tr>
        </tbody>
      </Table>
    );

    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('background-color: grey');
  });
});

