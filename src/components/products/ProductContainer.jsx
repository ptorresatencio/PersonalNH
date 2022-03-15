import React from "react";
import Grid from "@mui/material/Grid";
import ProductItem from "./ProductItem";

const ProductContainer = ({ products, order }) => {
  return (
    <Grid container spacing={3}>
      {orderBy(products.filtered, order).map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </Grid>
  );
};

const orderBy = (products, order) => {
  if (order === 1) {
    products = products.sort((a, b) => b.salePrice - a.salePrice);
  } else if (order === 2) {
    products = products.sort((a, b) => a.salePrice - b.salePrice);
  }
  if (order === 3) {
    products = products.sort((a, b) => a.stock - b.stock);
  }

  return products;
};

export default ProductContainer;
