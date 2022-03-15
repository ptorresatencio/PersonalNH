import React, { useEffect, useState } from "react";
import instance from "../../axios/instance";
import nestInstance from "../../axios/nestInstance";
import PurchasesStl from "./PurchasesStl";

const PurchasesSfl = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: undefined,
    filtered: undefined,
  });
  const [categories, setCategories] = useState({
    loading: true,
    data: undefined,
    selected: "",
  });
  const [order, setOrder] = useState("");

  const setCategory = (event) => {
    const value = event.target.value;
    const filterProducts = products.data.filter((p) => {
      if (value) {
        return value === p.categoryId;
      }
      return true;
    });
    setCategories({ ...categories, selected: value });
    setProducts({ ...products, filtered: filterProducts });
  };

  const setNewOrder = (event) => {
    const value = event.target.value;
    setOrder(value);
  };

  const getProducts = async () => {
    try {
      setProducts({ loading: true });
      const products = await instance.get("/gtw-prd/products/getAll");
      setProducts({
        loading: false,
        data: products.data,
        filtered: products.data,
      });
    } catch (error) {}
  };

  const getCategories = async () => {
    try {
      setCategories({ loading: true });
      const categories = await nestInstance.get("/category");
      setCategories({ loading: false, data: categories.data });
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <PurchasesStl
      products={products}
      categories={categories}
      setCategory={setCategory}
      order={order}
      setNewOrder={setNewOrder}
    />
  );
};

export default PurchasesSfl;
