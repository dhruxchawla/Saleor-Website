import React from 'react'
import { CartSummary } from '../CartSummary'
import CheckoutProductList from './CheckoutProductList'

function CheckoutSidebar() {
  return (
    <section className="max-w-md w-full flex flex-col ">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:pr-4 md:py-4 md:pl-0 p-4">
      Order summary
      </h1>

      <CheckoutProductList />
      <CartSummary />
    </section>
  )
}

export default CheckoutSidebar