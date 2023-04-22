import React from 'react'

function CartSummary() {
  return (
    <section>
      <div className="bg-gray-50 rounded p-8 border">
          <form method="post" className="pb-4" >
            <label htmlFor="discount-code" className="block text-sm font-medium text-gray-700">
            Discount code
            </label>
            <div className="flex space-x-4 mt-1">
              <input
                type="text"
                id="discount-code"
                className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                spellCheck={false}
              />
              <button
                type="submit"
                className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-blue-300"
              >
                Activate
              </button>
            </div>
          </form>
        <div className="flow-root">
          <dl className="text-sm">
              <div className="py-2 flex items-center justify-between">
                <dt className="text-gray-600">Discount</dt>
                <dd className="font-medium text-gray-900"></dd>
              </div>
            <div className="py-2 flex items-center justify-between">
              <dt className="text-gray-600">Subtotal</dt>
              <dd className="font-medium text-gray-900"></dd>
            </div>
            <div className="py-2 flex items-center justify-between">
              <dt className="text-gray-600">Shipping</dt>
              <dd className="font-medium text-gray-900"></dd>
            </div>
            <div className="py-2 flex items-center justify-between">
              <dt className="text-gray-600">Tax</dt>
              <dd className="font-medium text-gray-900"></dd>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-gray-300">
              <dt className="text-lg font-bold text-gray-900">Total</dt>
              <dd className="text-lg font-bold text-gray-900"></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default CartSummary