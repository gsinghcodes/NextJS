"use client";

import { useParams } from "next/navigation";

export default function ProductId() {
  const { productId } = useParams<{productId: string}>();

  return (
    <>
      <h1>Review for Prouct {productId}</h1>
    </>
  );
}
