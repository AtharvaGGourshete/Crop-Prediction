import React, { useState } from "react";
import supabase from "@/config/supabase"; // Assuming you have a proper supabase client setup
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Reset any previous messages

    // Basic validation for productPrice
    if (formData.productPrice <= 0) {
      setMessage("Error: Product price must be a positive number.");
      setLoading(false);
      return;
    }

    try {
      // Insert product data into Supabase
      const { data, error } = await supabase.from("Marketplace").insert([
        {
          productName: formData.productName,
          productPrice: formData.productPrice,
          productDescription: formData.productDescription,
        },
      ]);

      // Handle error if insertion fails
      if (error) {
        throw new Error(error.message);
      }

      setMessage("Product submitted successfully! ✅");

      // Optionally redirect to the products page with the new data
      navigate("/products", { state: { product: formData } });

      // Reset the form data
      setFormData({
        productName: "",
        productPrice: "",
        productDescription: "",
      });
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-20 flex justify-center">
        <span className="text-5xl font-bold text-center">
          Set yourself up for{" "}
          <span className="text-green-500">Marketplace</span>
        </span>
      </div>
      <div className="mt-5 flex justify-center">
        <span className="text-center">
          Maximize your <span className="text-green-500 font-bold">profit</span>{" "}
          by selling goods online
        </span>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 px-4 py-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10"
        >
          {/* Product Name */}
          <div>
            <label className="block text-lg font-medium text-green-400">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-900 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter product name"
            />
          </div>

          {/* Product Price */}
          <div>
            <label className="block text-lg font-medium text-green-400">
              Product Price (₹)
            </label>
            <input
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
              required
              min="0"
              className="w-full p-3 rounded-md bg-gray-900 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter price"
            />
          </div>

          {/* Product Description */}
          <div>
            <label className="block text-lg font-medium text-green-400">
              Product Description
            </label>
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-md bg-gray-900 text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter product description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 p-3 rounded-md text-lg font-semibold text-black hover:bg-green-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Product"}
          </button>
        </form>

        {/* Message Display */}
        {message && (
          <div
            className={`mt-4 text-center ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default Marketplace;
