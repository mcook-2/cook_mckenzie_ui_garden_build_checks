import type { Meta, StoryObj } from '@storybook/react';
import Table, { TableProps, TableHeader, TableRow, TableCell, TableFooter } from './Table';
import React from 'react';

const metaTable: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    backgroundColor: { control: { type: 'color' } },
  },
};

export default metaTable;

type TableStory = StoryObj<TableProps>;

export const Default: TableStory = {
  args: {
    disabled: false,
    backgroundColor: '#fff',
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
          <TableCell>Row 1, Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2, Cell 1</TableCell>
          <TableCell>Row 2, Cell 2</TableCell>
          <TableCell>Row 2, Cell 3</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
        <TableCell>Footer 3</TableCell>
      </TableFooter>
    </Table>
  ),
};

export const Disabled: TableStory = {
  args: {
    disabled: true
  },
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
          <TableCell>Row 1, Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2, Cell 1</TableCell>
          <TableCell>Row 2, Cell 2</TableCell>
          <TableCell>Row 2, Cell 3</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
        <TableCell>Footer 3</TableCell>
      </TableFooter>
    </Table>
  ),
};
