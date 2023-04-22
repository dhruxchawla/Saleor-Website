import React from 'react'
import BillingAddressSection from './BillingAddressSection'
import EmailSection from './EmailSection'
import PaymentSection from './PaymentSection'
import ShippingAddressSection from './ShippingAddressSection'
import ShippingMethodSection from './ShippingMethodSection'

function CheckoutForm() {
  return (
    <div>
        <section className="flex flex-auto flex-col overflow-y-auto px-4 pt-4 space-y-4 pb-4">
      <div className="checkout-section-container">
        <EmailSection/>
      </div>
      <div className="checkout-section-container">
        <BillingAddressSection />
      </div>
        <div className="checkout-section-container">
          <ShippingAddressSection/>
        </div>
        <div className="checkout-section-container">
          <ShippingMethodSection />
        </div>
      <div className="checkout-section-container">
        <PaymentSection/>
      </div>
    </section>
    </div>
  )
}

export default CheckoutForm