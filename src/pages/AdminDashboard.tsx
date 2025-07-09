import React from 'react';
import { Link } from "react-router-dom";
import { useParts } from "../context/PartsContext";
import { defaultParts, defaultReadyMadePCs } from "../lib/defaultData";
import { useRepairs } from '../context/RepairContext';
import { Plus, Package, Wrench, ShoppingCart, Laptop, ClipboardList } from 'lucide-react';

const AdminDashboard = () => {
  const { parts, readyMadePCs } = useParts();
  const { repairs } = useRepairs();

  // Combine default + admin-added parts
  const allParts = [...defaultParts, ...parts];
  const allReadyMadePCs = [...defaultReadyMadePCs, ...readyMadePCs];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome, Admin! Manage your website data efficiently.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add Part */}
          <Link to="/custom-build-demo/admin/add-part" className="group bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Plus className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Add Part</h3>
            </div>
            <p className="text-gray-600">Add new components to the parts inventory.</p>
          </Link>

          {/* Add Ready Made PC */}
          <Link to="/custom-build-demo/admin/add-ready-made-pc" className="group bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Laptop className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Add Ready Made PC</h3>
            </div>
            <p className="text-gray-600">Add pre-built PCs or laptops for sale.</p>
          </Link>

          {/* Parts Inventory */}
          <Link to="/custom-build-demo/admin/parts-inventory" className="group bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Package className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Parts Inventory</h3>
            </div>
            <p className="text-gray-600">View and manage all available components.</p>
          </Link>

          {/* Ready-made PCs & Laptops */}
          <Link to="/custom-build-demo/admin/ready-made-inventory" className="group bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <ClipboardList className="h-6 w-6 text-yellow-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Ready-made Inventory</h3>
            </div>
            <p className="text-gray-600">Manage all ready-made PCs and laptops listed.</p>
          </Link>

          {/* Repair Requests */}
          <Link to="/custom-build-demo/admin/repair-requests" className="group bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Wrench className="h-6 w-6 text-red-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Repair Requests</h3>
            </div>
            <p className="text-gray-600">View and handle device repair requests from users.</p>
          </Link>

          {/* Purchase Requests */}
          <Link to="/custom-build-demo/admin/purchase-requests" className="group bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">Purchase Requests</h3>
            </div>
            <p className="text-gray-600">Manage user purchase requests and orders.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
