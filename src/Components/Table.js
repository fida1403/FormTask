import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { jsPDF } from 'jspdf';

const TableComponent = ({ rows }) => {
  const handleRowClick = (row) => {
    const doc = new jsPDF();
    doc.text(`Name: ${row.name}`, 10, 10);
    doc.text(`Email: ${row.email}`, 10, 20);
    doc.text(`Phone: ${row.phone}`, 10, 30);
    doc.save(`form-data ${row.name}.pdf`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} onClick={() => handleRowClick(row)}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
