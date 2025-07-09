import React from 'react';
import { useResellPC } from '../context/ResellPCContext';

const PurchasePC = () => {
  const { resellPCs } = useResellPC();

  const handleAccept = (index) => {
    alert(`Accepted request for ${resellPCs[index].brand} ${resellPCs[index].model}`);
    // TODO: implement accept logic here (e.g., update status, notify seller)
  };

  const handleReject = (index) => {
    alert(`Rejected request for ${resellPCs[index].brand} ${resellPCs[index].model}`);
    // TODO: implement reject logic here (e.g., update status, notify seller)
  };

  const handleNegotiate = (index) => {
    const offer = prompt(`Enter your counter offer for ${resellPCs[index].brand} ${resellPCs[index].model}:`);
    if (offer) {
      alert(`Negotiation offer of ₹${offer} sent to ${resellPCs[index].contactNumber}`);
      // TODO: implement negotiate logic here (e.g., update status, notify seller)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Resell PC Purchase Requests</h1>

        {resellPCs.length === 0 ? (
          <p>No resell requests yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resellPCs.map((pc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2">{pc.brand} {pc.model} ({pc.year})</h2>
                <p><strong>Condition:</strong> {pc.condition}</p>
                <p><strong>Processor:</strong> {pc.processor}</p>
                <p><strong>RAM:</strong> {pc.ram}</p>
                <p><strong>Storage:</strong> {pc.storage}</p>
                <p><strong>Graphics:</strong> {pc.graphics}</p>
                <p><strong>Expected Price:</strong> ₹{pc.expectedPrice}</p>
                <p><strong>Contact:</strong> {pc.contactNumber}</p>
                <p><strong>Email:</strong> {pc.email}</p>
                <p><strong>Description:</strong> {pc.description}</p>

                {/* Display uploaded images */}
                {pc.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {pc.images.map((img, i) => (
                      <img
                        key={i}
                        src={URL.createObjectURL(img)}
                        alt={`PC ${i}`}
                        className="w-full h-32 object-cover rounded"
                      />
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleAccept(index)}
                    className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(index)}
                    className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleNegotiate(index)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 transition-colors"
                  >
                    Negotiate
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchasePC;
