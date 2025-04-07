import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="bg-blue-500 text-white p-10 text-center rounded">
        <h1 className="text-4xl font-bold">Welcome to KEJA TIPS</h1>
        <p className="mt-4 text-lg">Find your perfect home with ease.</p>
        <Link
          to="/search"
          className="mt-6 inline-block bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-100"
        >
          Start Searching
        </Link>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Featured Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-bold">Nairobi CBD</h3>
            <p>Modern apartments in the heart of the city.</p>
            <Link to="/location/nairobi-cbd" className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
          {/* Add more featured locations as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;