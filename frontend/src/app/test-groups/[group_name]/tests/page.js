"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Paper, Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation"; // 

export default function TestGroupDetail() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { group_name } = useParams(); // 

  useEffect(() => {
    if (!group_name) return; 
    axios
      .get(`http://127.0.0.1:8000/api/test-groups/${group_name}/tests/`)
      .then((response) => {
        setTests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tests:", error);
        setError("Failed to fetch tests. Please try again later.");
        setLoading(false);
      });
  }, [group_name]);

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
      <Typography variant="h4" className="font-bold mb-6 text-center">
        Tests in {group_name}
      </Typography>
      <TableContainer component={Paper} className="shadow-lg">
        <Table>
          <TableHead className="bg-blue-500">
            <TableRow>
              <TableCell className="text-white font-bold">ID</TableCell>
              <TableCell className="text-white font-bold">Name</TableCell>
              <TableCell className="text-white font-bold">Price</TableCell>
              <TableCell className="text-white font-bold">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tests.map((test) => (
              <TableRow key={test.id} className="hover:bg-gray-50">
                <TableCell>{test.id}</TableCell>
                <TableCell>{test.name}</TableCell>
                <TableCell>{test.price} BDT</TableCell>
                <TableCell>
                <Link href={`/test-groups/tests/${group_name}/${test.name}/description/`} passHref>
                    <Button variant="contained" color="primary">
                      Read More
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-6">
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
