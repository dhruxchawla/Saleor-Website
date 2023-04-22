import CheckoutForm from '@/components/sidebar/CheckoutForm'
import CheckoutSidebar from '@/components/sidebar/CheckoutSidebar'
import EmailSection from '@/components/sidebar/EmailSection'
import React from 'react'

function checkout() {
  return (
    <main className="w-screen max-w-7xl md:px-8 md:mx-auto overflow-hidden flex md:flex-row flex-col justify-between">
        <div className="md:w-2/3 w-full">
          <CheckoutForm />
        </div>
        <div className="md:w-1/3 w-full">
          <CheckoutSidebar />
        </div>
      </main>
  )
}

export default checkout