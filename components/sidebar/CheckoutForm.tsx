import { useTestMutation } from '@/saleor/api';
import React from 'react'

function CheckoutForm() {
const [checkoutCreate, { loading, error }] = useTestMutation()
const handleButtonClick = () => {
  // Call the mutation on button click
  checkoutCreate({ variables:  {
    "email" : "dhruv@mail.com",
    "variantId" : "UHJvZHVjdFZhcmlhbnQ6NDY0",
    "quantity": 2,
    "firstName": "shash",
    "lastName": "asdhb",
    "streetAddress1": "ashfi",
    "city" : "Michigan",
    "postalCode": "49855",
    "countryArea":"MI"
  }  })
    .then((result) => {
      // Handle success
      console.log('Mutation result:', result);
    })
    .catch((error) => {
      // Handle error
      console.error('Mutation error:', error);
    });
};
  return (
    <div>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full px-8 py-12 bg-white rounded-md shadow-lg">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Checkout</h1>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="address" className="block text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label htmlFor="city" className="block text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="postalCode" className="block text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="country"
                className="block text-gray-700 mb-2">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                {/* Add more country options here */}
              </select>
            </div>
            {/* <div className="mb-8">
              <label htmlFor="cardNumber" className="block text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div> */}
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Total: $99.99</p>
              <button onClick={handleButtonClick}
                type="submit"
                className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
              
export default CheckoutForm