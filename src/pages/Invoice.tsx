
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';


const Invoice = () => {
  const { order } = useCart();

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No invoice data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Thank you for your purchase</p>
          </div>

          <div className="border-b pb-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Order ID</p>
                <p className="font-semibold">{order.orderId}</p>
              </div>
              <div>
                <p className="text-gray-600">Customer Name</p>
                <p className="font-semibold">{order.customerName}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Items Ordered</h3>
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span>{item.name}</span>
                  <span className="font-semibold">₹{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{order.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{order.gst.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-2">
              <span>Total Amount</span>
              <span>₹{order.total.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Invoice
            </button>
            <Link to="/custom-build-demo/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
