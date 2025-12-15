import React, { useEffect, useState } from 'react'
import axios from './../../node_modules/axios/lib/axios';
import Skeleton from '@mui/material/Skeleton';
import useFetch from '../Hooks/UseFetch';


const Product = () => {
  // const [Product, setProduct] = useState([])
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get("https://fakestoreapi.com/products")
  //     .then(res => {
  //       setProduct(res.data)
  //       setLoading(false)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       setLoading(true)
  //     })
  // }, [])


  const { data, loading } = useFetch("https://fakestoreapi.com/products")

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Products
      </h1>
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(loading ? Array.from({ length: 8 }) : data).map((product, index) =>
          product ? (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">
              {/* Image Section */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col justify-between h-[180px]">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {product.title}
                  </h2>

                  <p className="text-xl font-bold text-green-600 mt-2">
                    ₹ {product.price}
                  </p>
                </div>

                {/* Button */}
                <button className="mt-4 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ) : (
            <Skeleton animation="wave" variant="rectangular" width={210} height={118} key={index} />
          ))}
      </div>
    </div>

  )
}

export default Product