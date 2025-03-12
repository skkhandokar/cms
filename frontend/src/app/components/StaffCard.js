"use client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const StaffCard = ({ name, position, image }) => {
  return (
    <Card className="shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
      <CardMedia component="img" height="200" image={image} alt={name} className="rounded-t-xl" />
      <CardContent>
        <Typography variant="h6" className="text-blue-600 font-semibold">{name}</Typography>
        <Typography variant="body2" className="text-gray-600">{position}</Typography>
      </CardContent>
    </Card>
  );
};

export default StaffCard;
