import React from 'react'

function AddressForm() {
  return (
    <form method="post">
    <div className="grid grid-cols-12 gap-4 w-full">
      <div className="col-span-full">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Phone
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="phone"
            className="w-full border-gray-300 rounded-md shadow-sm text-base"
            spellCheck={false}
          />
        </div>
      </div>

      <div className="col-span-full sm:col-span-6">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
        First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="province"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
            spellCheck={false}
          />
        </div>
      </div>

      <div className="col-span-full sm:col-span-6">
        <label htmlFor="province" className="block text-sm font-medium text-gray-700">
        Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="lastName"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
            spellCheck={false}
          />
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        Address
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="streetAddress1"
            className="w-full border-gray-300 rounded-md shadow-sm text-base"
            spellCheck={false}
          />
        </div>
      </div>

      <div className="col-span-full sm:col-span-6">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        City
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="city"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
            spellCheck={false}
          />
        </div>
      </div>

      {/* <div className="col-span-full sm:col-span-4">
      <label
        htmlFor="province"
        className="block text-sm font-medium text-gray-700"
      >
        Province
      </label>
      <div className="mt-1">
        <input
          type="text"
          id="province"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          spellCheck={false}
        />
      </div>
    </div> */}

      <div className="col-span-full sm:col-span-6">
        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
        Postal code
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="postal-code"
            autoComplete="postal-code"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
            spellCheck={false}
          />
        </div>
      </div>

      <div className="col-span-full">
        <button type="button" className="btn-checkout-section" >
          save
        </button>
      </div>
    </div>
  </form>
  )
}

export default AddressForm