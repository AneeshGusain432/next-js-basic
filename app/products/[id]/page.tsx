import React from "react";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>ProductPage {id}</div>;
}

export default ProductPage;
