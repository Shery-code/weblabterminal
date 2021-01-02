import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "../../services/ProductsService";
import Auth from "../auth/Auth";
const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [prCategory, setprCategory] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [prDetails, setprDetails] = React.useState("");
  const [imageUrl, setImage] = React.useState("");

  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add New Product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="category"
            fullWidth
            value={prCategory}
            onChange={(e) => {
              setprCategory(e.target.value);
            }}
          />
          <TextField
            label="price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <TextField
            label="details"
            fullWidth
            value={prDetails}
            onChange={(e) => {
              setprDetails(e.target.value);
            }}
          />
          <TextField
            label="imageUrl"
            fullWidth
            value={imageUrl}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              productService
                .addProduct({ name, prCategory, price, prDetails, imageUrl })
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewProduct;
