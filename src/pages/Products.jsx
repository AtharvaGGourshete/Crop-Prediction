import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client (make sure you replace the URL and key with your actual Supabase project credentials)
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Function to fetch products from the Marketplace table
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('Marketplace')
          .select('productName, productPrice, productDescription') // Only select these fields
        
        if (error) throw error

        setProducts(data)
      } catch (error) {
        setError('Failed to fetch products.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div className='mt-20 flex justify-center'>Loading...</div>
  }

  if (error) {
    return <div className='mt-20 flex justify-center text-red-500'>{error}</div>
  }

  return (
    <div className='mt-20 flex flex-col items-center w-full'>
      <span className='text-5xl font-semibold text-green-500 mb-10'>Listed Products</span>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {products.map((product, index) => (
          <div key={index} className='bg-[#161616] text-white shadow-md rounded-lg p-6 w-full'>
            {/* Product Name */}
            <div className='text-xl text-white font-semibold text-gray-900 mt-4'>{product.productName}</div>

            {/* Product Price */}
            <div className='text-lg text-green-500 mt-2'>{`₹${product.productPrice}`}</div>

            {/* Product Description */}
            <p className='text-gray-700 mt-4 text-gray-400'>{product.productDescription}</p>

            {/* Buy Button */}
            <button className='mt-4 bg-blue-500 text-white p-2 rounded-lg w-full'>
              Sell Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
