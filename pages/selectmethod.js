import React from "react";
import { useCheckoutDeliveryMethodUpdateMutation } from "@/saleor/api";
import Router from "next/router";

 function selectmethod() {
  const { ctoken, dID } = Router.query;
  console.log("ctoken : ", ctoken);
  console.log("dID : ", dID);
  
  const [checkoutDeliveryMethodUpdate, { loading, error }] =
  useCheckoutDeliveryMethodUpdateMutation();
  const {data } = checkoutDeliveryMethodUpdate({
    variables: {
      deliveryMethodId: "V2FyZWhvdXNlOmQ4ZGMwYzFkLWZmNjgtNDk3NC1iOGFkLWNmYTUwNDBhNjIxNA==",
      token: "fb359e2d-0e23-4117-acca-31a7dbe5ab98",
    },
  });
  if (data) {
    Router.push({ pathname: "/payment", query: { ctoken } }, "/payment");
  }

  return <div>select method</div>;
}

export default selectmethod;

