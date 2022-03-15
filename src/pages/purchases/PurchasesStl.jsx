import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ProductContainer from "../../components/products/ProductContainer";
import CardLoader from "../../components/loader/CardLoader";

export const itemsOrder = [
  { id: 0, text: null },
  { id: 1, text: "De Mayor a Menor" },
  { id: 2, text: "De Menor a Mayor" },
  { id: 3, text: "Más vendidos" },
];

const PurchasesStl = ({
  products,
  categories,
  setCategory,
  order,
  setNewOrder,
}) => {
  return (
    <>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Ordenar Precio</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={order}
              label="Ordenar Precio"
              onChange={setNewOrder}
            >
              {itemsOrder.map((item, i) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categories.selected}
              label="Categorias"
              onChange={setCategory}
            >
              {categories.data &&
                categories.data.map((category) => (
                  <MenuItem
                    key={category.categoryId}
                    value={category.categoryId}
                  >
                    {category.description}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />
      {products.loading ? (
        <CardLoader />
      ) : (
        <ProductContainer products={products} order={order} />
      )}
    </>
  );
};

export default PurchasesStl;
