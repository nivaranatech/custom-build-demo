import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);

    // Check for admin credentials
    if (formData.email === 'admin@premiumsales.com' && formData.password === 'admin') {
      alert('Admin login successful!');
      navigate('/custom-build-demo/admin/dashboard');
    } 
    // Check for demo user
    else if (formData.email === 'demo@premiumsales.com' && formData.password === 'demo123') {
      alert('Login successful! (Demo)');
      navigate('/custom-build-demo/build-pc');
    } 
    // Invalid credentials
    else {
      alert('Invalid email or password');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDemoLogin = () => {
    setFormData({
      email: 'demo@premiumsales.com',
      password: 'demo123'
    });
  };

  const handleAdminLogin = () => {
    setFormData({
      email: 'admin@premiumsales.com',
      password: 'admin'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-gray-600">Welcome back to Premium Sales Corporation</p>
        </div>

        {/* Demo Credentials Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">Demo Credentials:</h4>
          <div className="text-sm text-blue-800 space-y-1">
            <p><strong>Email:</strong> demo@premiumsales.com</p>
            <p><strong>Password:</strong> demo123</p>
            <button
              type="button"
              onClick={handleDemoLogin}
              className="mt-2 text-blue-600 hover:text-blue-800 underline text-sm"
            >
              Click to fill demo credentials
            </button>
          </div>
        </div>

        {/* Admin Credentials Info */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-medium text-green-900 mb-2">Admin Credentials:</h4>
          <div className="text-sm text-green-800 space-y-1">
            <p><strong>Email:</strong> admin@premiumsales.com</p>
            <p><strong>Password:</strong> admin</p>
            <button
              type="button"
              onClick={handleAdminLogin}
              className="mt-2 text-green-600 hover:text-green-800 underline text-sm"
            >
              Click to fill admin credentials
            </button>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <Link to="/custom-build-demo/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <Lock className="h-4 w-4 mr-2" />
            Sign In
          </button>

          <div className="text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/custom-build-demo/signup" className="text-blue-600 hover:text-blue-500 font-medium">
              Sign up here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
