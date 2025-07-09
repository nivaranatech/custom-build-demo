import React from 'react';
import { useRepairs } from '../context/RepairContext';

const RepairRequests = () => {
  const { repairs } = useRepairs();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Repair Requests</h1>
      {repairs.length === 0 ? (
        <p className="text-gray-600">No repair requests yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repairs.map((req) => (
            <div key={req.id} className="bg-white rounded shadow p-4">
              <h3 className="font-medium mb-2">Product: {req.productType}</h3>
              <p className="text-sm text-gray-600 mb-1">Warranty: {req.warranty}</p>
              <p className="text-sm text-gray-600 mb-2">Description: {req.description}</p>
              {req.image && (
                <img
                  src={URL.createObjectURL(req.image)}
                  alt="Repair"
                  className="w-full h-32 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepairRequests;
