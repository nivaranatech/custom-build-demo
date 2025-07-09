
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface BuilderUIProps {
  partOptions: any;
  selectedParts: any;
  onPartSelect: (category: string, part: any) => void;
}

const BuilderUI: React.FC<BuilderUIProps> = ({ partOptions, selectedParts, onPartSelect }) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categories = [
    { key: 'cpu', name: 'Processor (CPU)' },
    { key: 'motherboard', name: 'Motherboard' },
    { key: 'ram', name: 'Memory (RAM)' },
    { key: 'storage', name: 'Storage' },
    { key: 'gpu', name: 'Graphics Card' },
    { key: 'psu', name: 'Power Supply' },
    { key: 'case', name: 'PC Case' },
    { key: 'cooling', name: 'Cooling' },
    { key: 'monitor', name: 'Monitor' },
    { key: 'keyboard', name: 'Keyboard' },
    { key: 'mouse', name: 'Mouse' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Select Components</h3>
      <div className="space-y-4">
        {categories.map(({ key, name }) => (
          <div key={key} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleCategory(key)}
              className="w-full p-3 text-left flex items-center justify-between hover:bg-gray-50"
            >
              <span className="font-medium">{name}</span>
              {expandedCategories[key] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {expandedCategories[key] && (
              <div className="p-3 border-t">
                {partOptions[key] && partOptions[key].length > 0 ? (
                  <div className="space-y-2">
                    {partOptions[key].map((part: any) => (
                      <div
                        key={part.id}
                        onClick={() => onPartSelect(key, part)}
                        className={`p-3 border rounded cursor-pointer hover:bg-blue-50 ${
                          selectedParts[key]?.id === part.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <img src={part.image} alt={part.name} className="w-12 h-12 object-cover rounded" />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{part.name}</h4>
                            <p className="text-sm text-gray-600">₹{part.price.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">{part.brand}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No options available</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuilderUI;
