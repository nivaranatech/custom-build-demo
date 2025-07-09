import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PartsProvider } from "./context/PartsContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import SearchParts from "./pages/SearchParts";
import BuildPC from "./pages/BuildPC";
import Cart from "./pages/Cart";
import Readymade from "./pages/Readymade";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/Invoice";
import TrackOrder from "./pages/TrackOrder";
import Complaint from "./pages/Complaint";
import Repair from "./pages/Repair";
import ShowroomBuild from "./pages/ShowroomBuild";
import Inventory from "./pages/Inventory";
import ResellPC from "./pages/ResellPC";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

import AdminDashboard from "./pages/AdminDashboard";

import { CartProvider } from "./context/CartContext";
import AddPart from "./pages/AddPart";
import AddReadyMadePC from "./pages/AddReadyMadePC";
import { RepairProvider } from './context/RepairContext';
import PartsInventory from './pages/PartsInventory';
import ReadyMadeInventory from './pages/ReadyMadeInventory';
import RepairRequests from './pages/RepairRequests';
import { ResellPCProvider } from './context/ResellPCContext';
import PurchasePC from "./pages/PurchasePC";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <PartsProvider>
          <RepairProvider>
             <ResellPCProvider>
            <BrowserRouter>
              <div className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-1">
                  <Routes>
                    {/* User Routes */}
                    <Route path="/custom-build-demo/" element={<Home />} />
                    <Route path="/custom-build-demo/login" element={<Login />} />
                    <Route path="/custom-build-demo/signup" element={<Signup />} />
                    <Route path="/custom-build-demo/forgot-password" element={<ForgotPassword />} />
                    <Route path="/custom-build-demo/profile" element={<Profile />} />
                    <Route path="/custom-build-demo/search-parts" element={<SearchParts />} />
                    <Route path="/custom-build-demo/build-pc" element={<BuildPC />} />
                    <Route path="/custom-build-demo/cart" element={<Cart />} />
                    <Route path="/custom-build-demo/readymade" element={<Readymade />} />
                    <Route path="/custom-build-demo/checkout" element={<Checkout />} />
                    <Route path="/custom-build-demo/invoice" element={<Invoice />} />
                    <Route path="/custom-build-demo/track-order" element={<TrackOrder />} />
                    <Route path="/custom-build-demo/complaint" element={<Complaint />} />
                    <Route path="/custom-build-demo/repair" element={<Repair />} />
                    <Route path="/custom-build-demo/showroom-build" element={<ShowroomBuild />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/custom-build-demo/resell" element={<ResellPC />} />
                    <Route path="/custom-build-demo/contact" element={<Contact />} />
                    <Route path="/custom-build-demo/terms" element={<Terms />} />
                    <Route path="/custom-build-demo/privacy" element={<Privacy />} />

                    {/* Admin Routes */}
                    <Route path="/custom-build-demo/admin/dashboard" element={<AdminDashboard />} />

                    {/* Not Found */}
                    <Route path="*" element={<NotFound />} />

                    <Route path="/custom-build-demo/admin/add-part" element={<AddPart />} />
                    <Route path="/custom-build-demo/admin/add-ready-made-pc" element={<AddReadyMadePC />} />

                    <Route path="/custom-build-demo/admin/parts-inventory" element={<PartsInventory />} />
                    <Route path="/custom-build-demo/admin/ready-made-inventory" element={<ReadyMadeInventory />} />
                    <Route path="/custom-build-demo/admin/repair-requests" element={<RepairRequests />} />
                    <Route path="/custom-build-demo/admin/purchase-requests" element={<PurchasePC />} />


                  </Routes>
                </main>

                <Footer />
              </div>
            </BrowserRouter>
            </ResellPCProvider>
          </RepairProvider>
        </PartsProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
