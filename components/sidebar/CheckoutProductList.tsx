import React from 'react'

const lines = [ {
    __typename: "CheckoutLine",
    id: "12345",
    quantity: 2,
    totalPrice: {
      __typename: "TaxedMoney",
      gross: {
        __typename: "Money",
        currency: "USD",
        amount: 24.99
      }
    },
    variant: {
      __typename: "ProductVariant",
      id: "67890",
      name: "Example Variant",
      product: {
        __typename: "Product",
        id: "54321",
        name: "Example Product",
        slug: "example-product",
        translation: {
          __typename: "ProductTranslation",
          id: "98765",
          name: "Example Product (Translation)"
        },
        thumbnail: {
          __typename: "Image",
          url: "https://example.com/product-thumbnail",
          alt: "Example Product Thumbnail"
        }
      },
      pricing: {
        __typename: "VariantPricingInfo",
        price: {
          __typename: "TaxedMoney",
          gross: {
            __typename: "Money",
            currency: "USD",
            amount: 12.99
          }
        }
      },
      translation: {
        __typename: "ProductVariantTranslation",
        id: "43210",
        name: "Example Variant (Translation)"
      }
    }
    }
];

  
  

function CheckoutProductList() {
  return (
    <ul className="flex-auto overflow-y-auto divide-y divide-gray-200 px-4 md:pr-4 md:pl-0">
      {lines.map((line) => {
        if (!line) {
          return null;
        }
        return (
          <li key={line.id} className="flex py-4 space-x-4">
            <div className="border bg-white w-32 h-32 object-center object-cover rounded-md relative">
              {line.variant.product?.thumbnail && (
                <img
                  src=""
                  alt=""
                />
              )}
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="text-sm font-medium space-y-1">
                <h3 className="text-gray-900"></h3>
                <p className="text-gray-500"></p>
                <p className="text-gray-900"></p>
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  )
}

export default CheckoutProductList