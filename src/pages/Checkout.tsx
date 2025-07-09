import React, { useState } from 'react';
import { CreditCard, MapPin, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useParts } from '../context/PartsContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pincode: '',
    address: '',
    city: '',
    paymentMethod: 'card'
  });

  const { cart, clearCart, setOrder } = useCart();
 const { parts, removePartsByIds, removeReadyMadePCsByIds, markProductsAsSold } = useParts();

  const navigate = useNavigate();

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Step 1: Categorize cart items by type
    const partIds = cart.filter(item => item.type === 'part').map(item => item.id);
    const builtPCIds = cart.filter(item => item.type === 'built').map(item => item.id);
    const readyMadePCIds = cart.filter(item => item.type === 'readymade').map(item => item.id);

    // ✅ Step 2: For built PCs, we need to mark individual parts as sold
    const builtPCParts: string[] = [];
    cart.forEach(item => {
      if (item.type === 'built' && item.parts) {
        // Extract part IDs from built PC (you might need to adjust this based on your data structure)
        item.parts.forEach(partName => {
          // Find the actual part ID by name (this might need adjustment based on your data)
          const foundPart = parts.find(p => p.name === partName);
          if (foundPart) {
            builtPCParts.push(foundPart.id);
          }
        });
      }
    });

    // ✅ Step 3: Mark all purchased products as sold
    const allPurchasedIds = [
      ...partIds,
      ...readyMadePCIds,
      ...builtPCParts
    ];

    if (allPurchasedIds.length > 0) {
      markProductsAsSold(allPurchasedIds);
    }

    // ✅ Step 4: Remove products from available lists
    if (partIds.length > 0 || builtPCParts.length > 0) {
      removePartsByIds([...partIds, ...builtPCParts]);
    }
    
    if (readyMadePCIds.length > 0) {
      removeReadyMadePCsByIds(readyMadePCIds);
    }

    // ✅ Step 5: Create order record
    setOrder({
      orderId: 'INV' + Date.now(),
      customerName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      pincode: formData.pincode,
      paymentMethod: formData.paymentMethod,
      items: cart,
      subtotal,
      gst,
      total
    });

    // ✅ Step 6: Clear cart and redirect
    clearCart();
    
    // Show success message
    alert(`Order placed successfully! Order ID: INV${Date.now()}`);
    
    setTimeout(() => {
      navigate('/custom-build-demo/invoice');
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let updatedValue = value;

    // Enforce only digits for phone and pincode fields
    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "");
      if (updatedValue.length > 10) {
        updatedValue = updatedValue.slice(0, 10);
      }
    }

    if (name === "pincode") {
      updatedValue = value.replace(/\D/g, "");
      if (updatedValue.length > 6) {
        updatedValue = updatedValue.slice(0, 6);
      }
    }

    setFormData({
      ...formData,
      [name]: updatedValue
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Shipping Address
                </h3>
                <div className="space-y-4">
                  <textarea
                    name="address"
                    placeholder="Full Address"
                    required
                    rows={3}
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="pincode"
                      placeholder="PIN Code"
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Method
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span>UPI Payment</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="mr-3 "
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Place Order - ₹{total.toLocaleString()}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>

            <div className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity || 1}</p>
                  </div>
                  <p className="font-medium">₹{item.price.toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%):</span>
                <span>₹{gst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t pt-2">
                <span>Total:</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
