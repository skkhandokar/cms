"use client";
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Avatar, Chip, Divider, Button } from "@mui/material";
import { Email, Phone, Work, School, LocationOn, AccessTime, MonetizationOn } from "@mui/icons-material";

const API_URL = "http://127.0.0.1:8000/api/doctors/";

export default function DoctorProfile() {
  const params = useParams();
  const name = params?.doctorName;
  const decodedName = decodeURIComponent(name || "");
  const [profile, setProfile] = useState(null);
  const [doctor, setDoctor] = useState(null);

  // First API call: Fetch doctor profile from a specific endpoint
  useEffect(() => {
    if (decodedName) {
      fetch(`http://127.0.0.1:8000/api/doctors/doctor-profiles/${encodeURIComponent(decodedName)}/`)
        .then(response => response.json())
        .then(data => setProfile(data))
        .catch(error => console.error("Error fetching doctor profile:", error));
    }
  }, [decodedName]);

  // Second API call: Fetch all doctors and find the specific doctor
  useEffect(() => {
    if (decodedName) {
      fetch(`${API_URL}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch doctors");
          }
          return response.json();
        })
        .then(data => {
          const doctor = data.find(doc => doc.name.toLowerCase() === decodedName.toLowerCase());
          setDoctor(doctor || null);
        })
        .catch(error => console.error("Error fetching doctors:", error));
    }
  }, [decodedName]);

  

  if (!profile) return <Typography className="text-center mt-8 text-gray-600">Loading...</Typography>;

  return (
    <div className="container mx-auto p-8">
      <Card className="shadow-2xl rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Top Section: Image and Name */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center rounded-t-lg">
        <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-[150px] h-[150px] mb-6 border-4 border-white shadow-lg mx-auto rounded-full"
        />
          <Typography variant="h3" className=" font-roboto font-bold text-white mb-2">
            {doctor.name}
          </Typography>
          <Chip
            label={doctor.specialist}
            color="secondary"
            className="mt-2 font-poppins bg-white text-purple-600 font-semibold shadow-sm"
          />
        </div>

        {/* Rest of the Details */}

        <Typography
            variant="h5"
            className="font-poppins text-center text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-10 pb-[12px] pt-[12px] animate-pulse"
          >
            Professional Details
          </Typography>

          <div className="mb-[30px]">
            <Divider className="border-gray-300" />
          </div>

        <CardContent className="p-8 ml-[200px]">

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className="flex items-center text-gray-700 mb-4">
                <Email className="mr-2 text-blue-500" /> Email: {profile.email}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className="flex items-center text-gray-700 mb-4">
                <Phone className="mr-2 text-blue-500" /> Phone: {profile.phone}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className="flex items-center text-gray-700 mb-4">
                <School className="mr-2 text-blue-500" /> Qualification: {profile.qualification}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className="flex items-center text-gray-700 mb-4">
                <Work className="mr-2 text-blue-500" /> Experience: {profile.experience} years
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className="flex items-center text-gray-700 mb-4">
                <LocationOn className="mr-2 text-blue-500" /> Hospital: {profile.hospital}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className="flex items-center text-gray-700 mb-4">
                <LocationOn className="mr-2 text-blue-500" /> Address: {profile.address}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className="flex items-center text-gray-700 mb-4">
                <AccessTime className="mr-2 text-blue-500" /> Availability: {profile.availability}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" className="flex items-center text-gray-700 mb-4">
                <MonetizationOn className="mr-2 text-blue-500" /> Consultation Fee: ${profile.consultation_fee}
              </Typography>
            </Grid>
          </Grid>

          {/* Bio Section with Increased Top Gap */}
          <div className="mt-12">
            <Typography variant="body1" className="text-gray-700 mb-6">
              <strong className="text-gray-800">Bio:</strong> {profile.bio}
            </Typography>
          </div>

          {/* Social Media Section with Increased Top Gap */}
          <div className="mt-12">
            <Typography variant="body1" className="text-gray-700 mb-6">
              <strong className="text-gray-800">Social Media:</strong> {JSON.stringify(profile.social_media)}
            </Typography>
          </div>
        </CardContent>

        {/* Book Appointment Button */}
        <div className="text-center p-8">
          <Button
            variant="contained"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Appointment
          </Button>
        </div>
      </Card>
    </div>
  );
}
