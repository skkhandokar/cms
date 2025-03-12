"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardMedia, Typography, Grid, Container, CircularProgress, Button } from "@mui/material";

const API_URL = "http://127.0.0.1:8000/api/doctors/"; // Change this based on your Django API URL

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="py-10">
      <Typography variant="h4" className="text-center text-blue-600 font-bold pb-8 mb-6">
        Meet Our Doctors
      </Typography>
      {loading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={4}>
          {doctors.map((doctor) => (
            <Grid item key={doctor.id} xs={12} sm={6} md={4}>
              <Card className="shadow-lg rounded-xl transform transition duration-500 hover:scale-105">
                <CardMedia
                  component="img"
                  height="200" // Set a fixed height for the image
                  image={doctor.photo}
                  alt={doctor.name}
                  className="rounded-t-xl object-cover"
                  style={{ height: "200px", width: "100%" }}
                />
                <CardContent className="text-center">
                  <Typography variant="h6" className="font-semibold text-gray-800">
                    {doctor.name}
                  </Typography>


                

                  <Typography variant="body2" className="text-blue-500 mb-4">
                    {doctor.specialist}
                  </Typography>
                  <Link href={`/doctors/${doctor.name}`} passHref>
                    <Button
                      variant="contained"
                      color="primary"
                      className="bg-blue-500 hover:bg-blue-700"
                    >
                      View Profile
                    </Button>
                  </Link>
                
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
