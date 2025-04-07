import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Search from "./components/Search";
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/location/:id" element={<LocationDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;