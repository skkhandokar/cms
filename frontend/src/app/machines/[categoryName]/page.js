"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography, CircularProgress, Alert, Button } from "@mui/material";
import Link from "next/link";

export default function MachinesByCategory() {
    const params = useParams(); 
    const category = params?.categoryName; 
    const decodedCategory = decodeURIComponent(category || ""); 

    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (decodedCategory) {
            axios
                .get(`https://skkhandokar18.pythonanywhere.com/api/machines/${encodeURIComponent(decodedCategory)}/`)
                .then((response) => {
                    setMachines(response.data);
                    setError(null);
                })
                .catch((error) => {
                    console.error("Error fetching machines:", error);
                    setError("Failed to fetch machines. Please try again.");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [decodedCategory]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-10">
                <Alert severity="error">{error}</Alert>
            </div>
        );
    }

    if (machines.length === 0) {
        return <div className="text-center text-red-500 mt-10">No machines found for this category.</div>;
    }

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-center mb-6">Machines in {decodedCategory}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {machines.map((machine) => (
                    <Card 
                        key={machine.id} 
                        className="shadow-lg transition-transform transform hover:scale-105 border-2 border-transparent hover:border-primary"
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={machine.image}
                            alt={machine.name}
                            className="object-cover w-full h-64 transition-all duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-blue-500"
                        />
                        <CardContent className="flex flex-col items-center justify-center text-center">
                            <Typography variant="h6" className="font-bold text-2xl mb-4">{machine.name}</Typography>
                            
                            <Link href={`/machines/machine/${machine.name}`} passHref>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className="mt-4"
                                >
                                    View Details
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
