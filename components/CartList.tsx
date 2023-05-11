import React from 'react';
import Link from 'next/link';
import Router from 'next/router'

import {
  useCheckoutRemoveProductMutation,
} from "@/saleor/api";

import { useLocalStorage } from 'react-use';
import { useNavigate } from "react-router-dom";

interface Props {
  products: any[];
}

const styles = {
  product: {
    image: 'flex-shrink-0 bg-white w-48 h-48 border object-center object-cover',
    container: 'ml-8 flex-1 flex flex-col justify-center',
    name: 'text-xl font-bold',
  }
}



export const CartList = ({ products }: Props) => {
  const [token] = useLocalStorage("token");
  const [CheckoutremoveProduct] = useCheckoutRemoveProductMutation();


  const handleButtonClick = () => {
    Router.push(
      { pathname: "/checkout", query: { data : JSON.stringify(products) } },
      "/checkout"
    );
  };
  return (
    <>
    <ul role="list" className="divide-y divide-gray-200">
      {products.map((line) => {
        const lineID = line?.id || "";
        const variant = line?.variant;
        const product = line?.variant.product;
        const price = line?.totalPrice?.gross;
        const productID = product?.id;
        return (
          <li key={line?.id} className="py-6 flex">
            <div className={styles.product.image}>
              <img
                src={product?.thumbnail?.url || ""}
                alt={product?.thumbnail?.alt || ""}
              />
            </div>

            <div className={styles.product.container}>
              <div className="flex justify-between">
                <div className="pr-6">
                  <h3 className={styles.product.name}>
                    <Link href={`/product/${productID}`} legacyBehavior>
                      <a>
                        {product?.name}
                      </a>
                    </Link>
                  </h3>
                  <h4>
                    {variant?.name}
                  </h4>
                  <button
                    type="button"
                    onClick={() =>
                      CheckoutremoveProduct({
                        variables: {
                          checkoutToken: token,
                          lineId: lineID,
                        },
                      })
                    }
                    className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                  >
                    <span>Remove</span>
                  </button>
                </div>

                <p className="text-xl text-gray-900 text-right">
                  {price?.amount} {price?.currency}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
    <button onClick={handleButtonClick}
                type="submit"
                className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600"
              >
                Checkout 
    </button>
    </>
  );
}