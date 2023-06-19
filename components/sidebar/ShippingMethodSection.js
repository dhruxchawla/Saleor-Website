import React from 'react'
import Router from 'next/router';

async function ShippingMethodSection() {
  const ctoken = JSON.parse(Router.query.data);
  const {data } = await useShippingMethodQuery({
      variables: {
        ctoken: ctoken,
      },
    });

    console.log(data)
  return (
    <>
      <div className="mt-4 mb-4">
        <h2
          className="checkout-section-header-active"
        >
          Shipping Methods Available
        </h2>
        {/* <h3>{data}</h3> */}
      </div>

      <section className="flex justify-between items-center mb-4">

        <div className="flex justify-between items-center">
          <button >
            
          </button>
        </div>
      </section>

    </>
  )
}

export default ShippingMethodSection