import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface TableProps {
    disabled?: boolean;
    backgroundColor?: string;
    children?: ReactNode;
}

const StyledTable = styled.table<TableProps>`
    width: 100%;
    border-collapse: collapse;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => (props.disabled ? 0.4 : 1)};
    background: ${props => (props.disabled ? 'grey' : props.backgroundColor || 'transparent')};
`;

const StyledTableHeader = styled.thead<TableProps>`
    background-color: ${(props) => props.backgroundColor};
`;

const StyledTableRow = styled.tr<TableProps>`
    &:nth-child(even) {
        background-color: ${(props) => props.backgroundColor};
    }
`;

const StyledTableCell = styled.td<TableProps>`
    padding: 8px;
    border: 1px solid #ddd;
    background-color: ${(props) => props.backgroundColor};
`;

const StyledTableFooter = styled.tfoot<TableProps>`
    background-color: ${(props) => props.backgroundColor};
`;

export const TableHeader = ({ children }: { children: ReactNode }) => (
    <StyledTableHeader>
        <tr>{children}</tr>
    </StyledTableHeader>
);

export const TableRow = ({ children }: { children: ReactNode }) => (
    <StyledTableRow>{children}</StyledTableRow>
);

export const TableCell = ({ children }: { children: ReactNode }) => (
    <StyledTableCell>{children}</StyledTableCell>
);

export const TableFooter = ({ children }: { children: ReactNode }) => (
    <StyledTableFooter>
        <tr>{children}</tr>
    </StyledTableFooter>
);

function Table({ disabled, backgroundColor, children }: TableProps) {
    return (
        <StyledTable disabled={disabled} backgroundColor={backgroundColor}>
            {children}
        </StyledTable>
    );
}

export default Table;
