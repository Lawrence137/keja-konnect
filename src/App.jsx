import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SavedPropertiesProvider } from "./context/SavedPropertiesContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Map from "./pages/Map";
import SavedProperties from "./pages/SavedProperties";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Listings from "./pages/Listings";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SavedPropertiesProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map" element={<Map />} />
              <Route path="/saved" element={<SavedProperties />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </Router>
      </SavedPropertiesProvider>
    </QueryClientProvider>
  );
}

export default App;