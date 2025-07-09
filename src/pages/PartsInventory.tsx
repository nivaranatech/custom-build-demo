import React from 'react';
import { useParts } from '../context/PartsContext';

const PartsInventory = () => {
  const { parts, removePart } = useParts();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Parts Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {parts.map(part => (
          <div key={part.id} className={`bg-white rounded shadow p-4 ${part.sold ? 'opacity-50 border-red-300' : ''}`}>
            <img src={part.image} alt={part.name} className="w-full h-32 object-cover mb-2" />
            <h3 className="font-medium">{part.name}</h3>
            <p className="text-sm text-gray-600">Category: {part.category}</p>
            <p className="text-sm text-gray-600">Price: ₹{part.price.toLocaleString()}</p>
            
            {/* ✅ Show sold status */}
            {part.sold && (
              <p className="text-sm text-red-600 font-semibold mt-2">SOLD</p>
            )}
            
            <ul className="mt-2 text-xs text-gray-500">
              {part.specs && part.specs.map((spec, idx) => (
                <li key={idx}>• {spec}</li>
              ))}
            </ul>

            <button
              onClick={() => removePart(part.id)}
              className="mt-4 bg-red-600 text-white px-3 py-1 rounded"
              disabled={part.sold}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartsInventory;
