"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import StaffCard from "../components/StaffCard";
import axios from "axios";

export default function StaffHome() {
  const [chairmen, setChairmen] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/team/chairmen/").then((res) => setChairmen(res.data));
    axios.get("http://127.0.0.1:8000/api/team/managing-directors/").then((res) => setDirectors(res.data));
    axios.get("http://127.0.0.1:8000/api/team/staff/").then((res) => setStaff(res.data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Welcome Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-blue-800">Welcome to Our Diagnostic Center</h1>
        <p className="text-lg text-gray-600 mt-4">Meet our team and explore our services.</p>
      </div>

      {/* Chairman Section */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Our Chairmen</h2>
        <div className="gap-8 grid-cols-1 max-w-sm mx-auto">
          {chairmen.map((person) => (
            <StaffCard key={person.id} name={person.name} position="Chairman" image={person.image} />
          ))}
        </div>
      </div>

      {/* Managing Director Section */}
      <div className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Managing Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {directors.map((person) => (
            <StaffCard key={person.id} name={person.name} position="Managing Director" image={person.image} />
          ))}
        </div>
      </div>

      {/* Staff Section */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">Our Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {staff.map((person) => (
            <StaffCard key={person.id} name={person.name} position={person.position} image={person.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
