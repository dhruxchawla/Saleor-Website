import React from 'react'
import { CartSummary } from '../CartSummary'
import CheckoutProductList from './CheckoutProductList'
import { useRouter } from 'next/router';

interface Props {
  products: any[];
}

export const CheckoutSidebar = () => {
  const router = useRouter();
  const { products } = router.query;
  // const parsedObject = JSON.parse(decodeURIComponent(products))
  console.log(products)
  return (
    <div className="bg-white rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <ul className="divide-y divide-gray-300">
      {/* {Object.entries(products).map(([key, value]) => ( */}
          <li key="1" className="py-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700"></span>
              <span className="text-gray-700">$300</span>
            </div>
          </li>
           {/* ))}  */}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600">Total:</span>
        <span className="text-gray-600"></span>
      </div>
    </div>
  )
}

export default CheckoutSidebar