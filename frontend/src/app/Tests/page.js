
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CircularProgress } from '@mui/material';

export default function Home() {
  const [testGroups, setTestGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios
      .get('https://skkhandokar18.pythonanywhere.com/api/test-groups/')
      .then((response) => {
        setTestGroups(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching test groups:', error);
        setError('Failed to fetch test groups. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Test Groups</h1>
      <TableContainer component={Paper} className="shadow-lg">
        <Table>
          <TableHead className="bg-blue-500">
            <TableRow>
              <TableCell className="text-white font-bold">ID</TableCell>
              <TableCell className="text-white font-bold">Name</TableCell>
              <TableCell className="text-white font-bold">Description</TableCell>
              <TableCell className="text-white font-bold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testGroups.map((group) => (
              <TableRow key={group.id} className="hover:bg-gray-50">
                <TableCell>{group.id}</TableCell>
                <TableCell>{group.name}</TableCell>
                <TableCell>{group.description}</TableCell>
                <TableCell>
                  <Link href={`/test-groups/${group.name}/tests`} passHref>
                    <Button className='' variant="contained" color="primary">
                      View Tests
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
