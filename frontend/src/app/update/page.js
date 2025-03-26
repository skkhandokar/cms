"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdatesPage = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    axios.get('https://skkhandokar18.pythonanywhere.com/api/updates/')
      .then((response) => {
        console.log('Fetched updates:', response.data);
        setUpdates(response.data);
      })
      .catch((error) => {
        console.error('Error fetching updates:', error);
        
      });
  }, []);

  const getColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'news':
        return 'bg-blue-100 text-blue-800';
      case 'alert':
        return 'bg-red-100 text-red-800';
      case 'message':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  console.log("post from update");
  console.log(updates);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Updates</h1>
        <div className="space-y-6">
          {updates.length > 0 ? (
            updates.map((update) => (
              <div
                key={update.id}
                className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2 py-1 text-sm font-semibold rounded ${getColor(update.type)}`}
                  >
                    {update.type?.toUpperCase() ?? 'UNKNOWN'}
                  </span>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{update.title}</h2>
                <p className="text-gray-700">{update.content}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No updates available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;
