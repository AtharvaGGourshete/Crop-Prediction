import React from "react";

const SchemeCard = ({ name, description, link }) => {
  return (
    <div className="bg-[#1d1c1c] p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-green-700">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Learn More →
      </a>
    </div>
  );
};

export default SchemeCard;
