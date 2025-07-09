
import React from 'react';
import { ShoppingCart, Zap } from 'lucide-react';

interface BuildSummaryProps {
  selectedParts: any;
  onAddToCart: () => void;
}

const BuildSummary: React.FC<BuildSummaryProps> = ({ selectedParts, onAddToCart }) => {
  const selectedPartsList = Object.entries(selectedParts).filter(([_, part]) => part !== null);
  const totalPrice = Object.values(selectedParts).reduce((total: number, part: any) => total + (part ? part.price : 0), 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Build Summary</h3>
      
      {selectedPartsList.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No components selected yet</p>
      ) : (
        <>
          <div className="space-y-3 mb-6">
            {selectedPartsList.map(([category, part]: [string, any]) => (
              <div key={category} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex items-center space-x-3">
                  <img src={part.image} alt={part.name} className="w-8 h-8 object-cover rounded" />
                  <div>
                    <p className="font-medium text-sm">{part.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{category}</p>
                  </div>
                </div>
                <span className="font-semibold text-blue-600">₹{part.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total Price:</span>
              <span className="text-xl font-bold text-blue-600">₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center">
              <Zap className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-sm text-green-800">
                Build Score: {Math.min(100, Math.round((selectedPartsList.length / 11) * 100))}%
              </span>
            </div>
          </div>
          
          <button
            onClick={onAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </>
      )}
    </div>
  );
};

export default BuildSummary;
