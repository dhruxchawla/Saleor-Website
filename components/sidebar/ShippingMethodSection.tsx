import React from 'react'

function ShippingMethodSection() {
  return (
    <>
    <div className="mt-4 mb-4">
        <h2
          className="checkout-section-header-active"
        >
          Shipping Method
        </h2>
      </div>
          {/* <RadioGroup value={selectedDeliveryMethod} onChange={handleChange} className="py-8">
            <div className="mt-4 grid grid-cols-2 gap-2">
              {availableShippingMethods.map((method) => {
                // todo: Investigate why filter did not excluded non existing methods
                if (!method) {
                  return null;
                }
                return <ShippingMethodOption method={method} key={method.id} />;
              })}
            </div>
          </RadioGroup> */}
        : (
          <section className="flex justify-between items-center mb-4">
           
            <div className="flex justify-between items-center">
              <button >
                {}
              </button>
            </div>
          </section>
        )
    </>
  )
}

export default ShippingMethodSection