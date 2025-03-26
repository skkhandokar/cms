"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { CircularProgress, Alert, Typography } from "@mui/material";

export default function MachineDetail() {
    const params = useParams();
    
    const machineName = params?.machineName; 
    const decodedMachineName = decodeURIComponent(machineName || "");

    const [machine, setMachine] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(machine);



    useEffect(() => {
        if (decodedMachineName) {
            axios
                .get(`https://skkhandokar18.pythonanywhere.com/api/machines/machine/${decodeURIComponent(decodedMachineName)}/`)
                .then((response) => {
                    setMachine(response.data);
                    setError(null);
                })
                .catch((error) => {
                    console.error("Error fetching machine:", error);
                    setError("Failed to fetch machine details.");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [decodedMachineName]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-10">
                <Alert severity="error" className="max-w-lg mx-auto">{error}</Alert>
            </div>
        );
    }

    if (!machine) {
        return (
            <div className="text-center mt-10">
                <Alert severity="info" className="max-w-lg mx-auto">Machine not found.</Alert>
            </div>
        );
    }

    return (
        <div className=" bg-gray-50 min-h-screen flex flex-col items-center justify-center space-y-8">
            <div className="w-full max-w-4xl  overflow-hidden">

        
                <div className=" h-64">
                    <img 
                        src={machine.image} 
                        alt={machine.name} 
                        className="w-full h-full object-cover rounded-t-lg" 
                    />
                </div>


                <div className="flex justify-center items-center py-4">
                    <Typography variant="h4" className="font-semibold text-gray-900">{machine.name}</Typography>
                </div>

                {/* Description Div */}
                <div className="p-6">
                    <Typography variant="body1" className="text-gray-700">{machine.description}</Typography>
                    {/* Add more machine details as needed */}
                </div>
            </div>
        </div>
    );
}
