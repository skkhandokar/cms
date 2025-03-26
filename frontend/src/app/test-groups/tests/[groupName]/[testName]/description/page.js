
"use client"; 

import { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Paper, Button, CircularProgress, Box, Divider } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TestDescription() {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const { groupName, testName } = useParams();

  useEffect(() => {
    if (!groupName || !testName) return; 
    // Fetch all tests for the group from Django backend
    axios
      .get(`https://skkhandokar18.pythonanywhere.com/api/test-groups/${groupName}/tests/`)
      .then((response) => {
        // Find the specific test by matching testName
        const foundTest = response.data.find((test) => test.name === testName);

        if (foundTest) {
          setTest(foundTest); 
        } else {
          setError("Test not found"); 
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching test data:", error);
        setError("Failed to fetch test data. Please try again later.");
        setLoading(false);
      });
  }, [groupName, testName]);

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

  if (!test) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Typography variant="h6">Test not found</Typography>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Typography variant="h4" className="font-bold mb-6 text-center text-blue-600">
        {testName} Description
      </Typography>

      <Paper className="p-6 shadow-lg rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
        <Box className="space-y-4">
          <Typography variant="h6" className="font-bold text-gray-800">
            Group:{" "}
            <span className="text-blue-600 font-semibold">{groupName}</span>
          </Typography>
          <Typography variant="h6" className="font-bold text-gray-800">
            Test Name:{" "}
            <span className="text-purple-600 font-semibold">{testName}</span>
          </Typography>

          <Divider className="my-4" />

          <Typography variant="body1" className="text-gray-700 leading-relaxed">
            <strong className="text-blue-600">Description:</strong>{" "}
            <span className="text-gray-800">{test.description}</span>
          </Typography>
        </Box>
      </Paper>

      <div className="mt-6 flex justify-center">
        <Link href={`/test-groups/${groupName}/tests`} passHref>
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Back to Test List
          </Button>
        </Link>
      </div>
    </div>
  );
}
