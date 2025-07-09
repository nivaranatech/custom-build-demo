import React from 'react';
import { useParts } from '../context/PartsContext';

const ReadyMadeInventory = () => {
  const { readyMadePCs, removeReadyMadePCsByIds } = useParts();

  const handleRemove = (id: string) => {
    if (window.confirm("Are you sure you want to remove this PC/laptop?")) {
      removeReadyMadePCsByIds([id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Ready-made PCs & Laptops Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {readyMadePCs.map(pc => (
          <div key={pc.id} className={`bg-white rounded shadow p-4 ${pc.sold ? 'opacity-50 border-red-300' : ''}`}>
            <img src={pc.image} alt={pc.name} className="w-full h-32 object-cover mb-2" />
            <h3 className="font-medium">{pc.name}</h3>
            <p className="text-sm text-gray-600">Type: {pc.type}</p>
            <p className="text-sm text-gray-600">Price: ₹{pc.price.toLocaleString()}</p>
            
            {/* ✅ Show sold status */}
            {pc.sold && (
              <p className="text-sm text-red-600 font-semibold mt-2">SOLD</p>
            )}
            
            <ul className="mt-2 text-xs text-gray-500">
              {pc.specs.map((spec, idx) => (
                <li key={idx}>• {spec}</li>
              ))}
            </ul>
            
            <button
              onClick={() => handleRemove(pc.id)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
              disabled={pc.sold}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadyMadeInventory;
