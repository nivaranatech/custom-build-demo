
import React from 'react';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <FileText className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using TechBuilder's services, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Product Information</h2>
            <p className="text-gray-700 mb-6">
              We strive to provide accurate product descriptions and pricing. However, we do not 
              warrant that product descriptions or other content is accurate, complete, reliable, 
              current, or error-free. Prices and availability are subject to change without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Orders and Payment</h2>
            <p className="text-gray-700 mb-6">
              All orders are subject to acceptance and product availability. We reserve the right 
              to refuse or cancel any order for any reason. Payment must be received in full before 
              shipment of products. We accept various payment methods as displayed during checkout.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Warranty and Returns</h2>
            <p className="text-gray-700 mb-6">
              Products come with manufacturer warranties as specified. Returns are accepted within 
              30 days of purchase for unopened items in original condition. Custom-built PCs may 
              have different return policies due to their personalized nature.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Repair Services</h2>
            <p className="text-gray-700 mb-6">
              Repair services are provided with a 90-day warranty on labor. Parts used in repairs 
              carry manufacturer warranties. We are not responsible for data loss during repair 
              services. Customers are advised to backup their data before service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              TechBuilder shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of our services, to understand our practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting. Your continued use of our services constitutes acceptance 
              of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms & Conditions, please contact us at:
              <br />
              Email: legal@techbuilder.com
              <br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
