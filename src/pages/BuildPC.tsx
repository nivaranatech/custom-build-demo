  import React, { useState, useCallback } from 'react';
  import PCBuilderScene from '../components/PCBuilderScene';
  import BuilderUI from '../components/BuilderUI';
  import BuildSummary from '../components/BuildSummary';
  import { Settings, Zap, Shield, Thermometer } from 'lucide-react';

  //===================================================================================================
  import { useCart, CartItem } from "../context/CartContext";
  import { v4 as uuidv4 } from "uuid";
  import { useParts } from "../context/PartsContext";

  //===================================================================================================



  const BuildPC = () => {
    const { parts } = useParts();
    console.log('BuildPC component rendering...');

    // ✅ Filter out sold parts from part options
  const availableParts = parts.filter(part => !part.sold);

    const [selectedParts, setSelectedParts] = useState({
      cpu: null,
      motherboard: null,
      ram: null,
      storage: null,
      gpu: null,
      psu: null,
      case: null,
      cooling: null,
      monitor: null,
      keyboard: null,
      mouse: null
    });

    const [buildPreferences, setBuildPreferences] = useState({
      purpose: 'gaming',
      budget: 'medium',
      performance: 'balanced',
      compatibility: true
    });

    const { addToCart } = useCart();
 

    // Group available parts by category
  const partOptions = availableParts.reduce((acc, part) => {
    if (!acc[part.category]) acc[part.category] = [];
    acc[part.category].push(part);
    return acc;
  }, {});

    const handlePartSelect = useCallback((category: string, part: any) => {
      console.log('Part selected:', category, part);
      setSelectedParts(prev => ({
        ...prev,
        [category]: part
      }));
    }, []);

    const handlePreferenceChange = useCallback((key: string, value: string | boolean) => {
      setBuildPreferences(prev => ({
        ...prev,
        [key]: value
      }));
    }, []);

    const getCompatibilityWarnings = useCallback(() => {
      const warnings = [];

      if (selectedParts.cpu && selectedParts.motherboard) {
        if (selectedParts.cpu.socket !== selectedParts.motherboard.socket) {
          warnings.push('CPU and Motherboard socket mismatch!');
        }
      }

      return warnings;
    }, [selectedParts]);

    //===================================================================================================

    const handleAddToCart = useCallback(() => {
      const selectedPartsList = Object.entries(selectedParts)
        .filter(([_, part]) => part !== null)
        .map(([category, part]) => ({
          category,
          name: part.name,
          price: part.price
        }));

      // Calculate total price safely as number
      const totalPrice: number = Object.values(selectedParts).reduce(
        (total, part) => total + (part ? part.price : 0),
        0
      );

      // ✅ Define builtPCItem with CartItem type
      const builtPCItem: CartItem = {
        id: uuidv4(),
        type: "built",
        name: "Custom Built PC",
        price: totalPrice,
        parts: selectedPartsList.map(p => p.name),
        quantity: 0
      };

      // Add to cart using context
      addToCart(builtPCItem);

      console.log('Adding custom PC build to cart:', {
        parts: selectedPartsList,
        totalPrice,
        preferences: buildPreferences
      });

      alert(
        'Custom PC Build added to cart!\n\nComponents:\n' +
        selectedPartsList
          .map(p => `${p.category}: ${p.name} - ₹${p.price.toLocaleString()}`)
          .join('\n') +
        `\n\nTotal: ₹${totalPrice.toLocaleString()}`
      );
    }, [selectedParts, buildPreferences, addToCart]);



    //===================================================================================================

    const warnings = getCompatibilityWarnings();

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Custom PC Builder</h1>
            <p className="text-gray-600">Build your dream PC with our interactive configurator</p>
          </div>

          {/* Build Preferences */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Build Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                <select
                  value={buildPreferences.purpose}
                  onChange={(e) => handlePreferenceChange('purpose', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="gaming">Gaming</option>
                  <option value="office">Office Work</option>
                  <option value="workstation">Workstation</option>
                  <option value="content-creation">Content Creation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  value={buildPreferences.budget}
                  onChange={(e) => handlePreferenceChange('budget', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="low">Budget (₹30K-50K)</option>
                  <option value="medium">Mid-range (₹50K-1L)</option>
                  <option value="high">High-end (₹1L-2L)</option>
                  <option value="unlimited">Unlimited (₹2L+)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  value={buildPreferences.performance}
                  onChange={(e) => handlePreferenceChange('performance', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="performance">Max Performance</option>
                  <option value="balanced">Balanced</option>
                  <option value="quiet">Silent Operation</option>
                  <option value="rgb">RGB/Aesthetics</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="compatibility"
                  checked={buildPreferences.compatibility}
                  onChange={(e) => handlePreferenceChange('compatibility', e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="compatibility" className="text-sm font-medium text-gray-700">
                  Enable compatibility checks
                </label>
              </div>
            </div>
          </div>

          {/* Compatibility Warnings */}
          {warnings.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-red-500 mr-2" />
                <h4 className="font-medium text-red-900">Compatibility Issues</h4>
              </div>
              <ul className="mt-2 text-sm text-red-800">
                {warnings.map((warning, index) => (
                  <li key={index}>• {warning}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Component Selection Panel */}
            <div className="lg:col-span-1">
              <BuilderUI
                partOptions={partOptions}
                selectedParts={selectedParts}
                onPartSelect={handlePartSelect}
              />
            </div>

            {/* 3D Scene */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                  <h3 className="text-lg font-semibold">Interactive 3D PC Assembly</h3>
                  <p className="text-sm opacity-90">Rotate, zoom, and pan to explore your build</p>
                </div>
                <div className="h-96 lg:h-[600px]">
                  <PCBuilderScene selectedParts={selectedParts} />
                </div>
              </div>

              {/* Controls Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <h4 className="font-medium text-blue-900 mb-3 flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  3D Controls:
                </h4>
                <div className="text-sm text-blue-800 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <span>🖱️ Left Click + Drag: Rotate view</span>
                  <span>🔍 Mouse Wheel: Zoom in/out</span>
                  <span>🤏 Right Click + Drag: Pan camera</span>
                  <span>✨ Real-time part placement</span>
                </div>
              </div>

              {/* Performance Indicator */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <h4 className="font-medium text-green-900 mb-2 flex items-center">
                  <Thermometer className="h-4 w-4 mr-2" />
                  Estimated Performance:
                </h4>
                <div className="text-sm text-green-800">
                  <p>Gaming: {selectedParts.gpu ? 'High' : 'Select GPU'} | Productivity: {selectedParts.cpu ? 'Good' : 'Select CPU'}</p>
                </div>
              </div>
            </div>

            {/* Build Summary */}
            <div className="lg:col-span-1">
              <BuildSummary
                selectedParts={selectedParts}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default BuildPC;
