import React from 'react'
import Router from 'next/router';

function CheckoutSidebar(){
  const products = JSON.parse(Router.query.data);
  console.log(products)
  return (
    <div className="bg-white rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <ul className="divide-y divide-gray-300">
        {products.map((item) => (
          <li key="1" className="py-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">portal gun</span>
              <span className="text-gray-700">$300</span>
            </div>
          </li>
         ))} 
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600">Total:</span>
        <span className="text-gray-600"></span>
      </div>
    </div>
  )
}

export default CheckoutSidebar