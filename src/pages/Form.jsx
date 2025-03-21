import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "@/config/supabase"; // Ensure this is correctly set up

const Form = () => {
  const [formData, setFormData] = useState({
    soilType: "",
    location: "",
    month: "",
    area: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Insert data into Supabase
      const { data, error } = await supabase.from("input_form").insert([
        {
          soilType: formData.soilType,
          location: formData.location,
          month: formData.month,
          area: formData.area,
        },
      ]);

      if (error) {
        throw error;
      }

      setMessage("Data submitted successfully! ✅");
      setFormData({
        soilType: "",
        location: "",
        month: "",
        area: "",
      });

    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-[#101010] text-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">
          Crop Recommendation
        </h2>

        {message && (
          <p className="text-center text-green-400 font-medium">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Soil Type */}
          <div>
            <label className="block mb-1 font-semibold">Soil Type</label>
            <select
              name="soilType"
              type="text"
              value={formData.soilType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-[#287050] text-white rounded-md"
              required
            >
              <option value="">Select Soil Type</option>
              <option value="clay">Clay</option>
              <option value="sandy">Sandy</option>
              <option value="loamy">Loamy</option>
              <option value="silt">Silt</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-semibold">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-[#287050] text-white rounded-md"
              placeholder="Enter location"
              required
            />
          </div>

          {/* Month */}
          <div>
            <label className="block mb-1 font-semibold">Month</label>
            <select
              name="month"
              type="text"
              value={formData.month}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-[#287050] text-white rounded-md"
              required
            >
              <option value="">Select Month</option>
              {[  
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Area (m²) */}
          <div>
            <label className="block mb-1 font-semibold">Area (m²)</label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 bg-[#287050] text-white rounded-md"
              placeholder="Enter area in square meters"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-28 bg-[#287050] text-white py-2 rounded-md hover:bg-green-700 transition mt-10"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Analyze"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
