import React from "react";

const LocationDetails = () => {
  // Sample data (replace with API fetch in a real app)
  const locationData = {
    location: "Nairobi CBD",
    description: "Central business district with high-rise apartments.",
    houseRates: [
      { type: "Studio", rate: "KSH 20,000" },
      { type: "1 Bedroom", rate: "KSH 30,000" },
      { type: "2 Bedroom", rate: "KSH 45,000" },
    ],
    contacts: [
      { name: "John Doe", phone: "0712345678", email: "john@example.com" },
      { name: "Jane Smith", phone: "0723456789", email: "jane@example.com" },
    ],
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h1 className="text-3xl font-bold text-blue-600">{locationData.location}</h1>
      <p className="mt-2 text-gray-600">{locationData.description}</p>

      <h2 className="text-2xl font-semibold mt-6">House Rates</h2>
      <ul className="mt-2 space-y-2">
        {locationData.houseRates.map((house, index) => (
          <li
            key={index}
            className="flex justify-between p-3 bg-gray-100 rounded"
          >
            <span>{house.type}</span>
            <span className="font-medium">{house.rate}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Landlord/Agent Contacts</h2>
      <ul className="mt-2 space-y-2">
        {locationData.contacts.map((contact, index) => (
          <li
            key={index}
            className="p-3 bg-gray-100 rounded"
          >
            <p><strong>{contact.name}</strong></p>
            <p>Phone: {contact.phone}</p>
            <p>Email: <a href={`mailto:${contact.email}`} className="text-blue-500 hover:underline">{contact.email}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationDetails;