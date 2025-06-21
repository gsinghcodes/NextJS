"use client";

import { useRouter } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order Placed");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order now</button>
    </>
  );
}
