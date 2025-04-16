import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const NeedAttention = () => {
  const data = [
    { assetCode: 'MED-1000', department: 'Cardiology', service: 'Maintenance', status: 'Urgent' },
    { assetCode: 'MED-1123', department: 'Radiology', service: 'Repair', status: 'High' },
    { assetCode: 'MED-1246', department: 'Laboratory', service: 'Calibration', status: 'Medium' },
    { assetCode: 'MED-1369', department: 'Emergency', service: 'Replacement', status: 'Low' },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Urgent':
        return { color: 'white', backgroundColor: 'red' };
      case 'High':
        return { color: 'black', backgroundColor: 'yellow' };
      case 'Medium':
        return { color: 'black', backgroundColor: 'orange' };
      case 'Low':
        return { color: 'black', backgroundColor: 'green' };
      default:
        return {};
    }
  };

  return (
    <section className="card mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <Typography variant="h4">Need Attention</Typography>
          <Button variant="contained" color="primary">Add New</Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{backgroundColor: "#F9FAFB"}}>
              <TableRow>
                <TableCell>Asset Code</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.assetCode}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.service}</TableCell>
                  <TableCell>
                    <span style={{ padding: '4px 8px', borderRadius: '4px', ...getStatusStyles(item.status) }}>
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default NeedAttention;