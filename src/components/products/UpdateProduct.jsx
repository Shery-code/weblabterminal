import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "../../services/ProductsService";
import Admin from "../auth/Admin";

const UpdateProduct = (props) => {
  const [name, setName] = React.useState("");
  const [prCategory, setprCategory] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [prDetails, setprDetails] = React.useState("");
  const [imageUrl, setImage] = React.useState(1);
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      setName(data.name);
      setprCategory(data.prCategory);
      setPrice(data.price);
      setprDetails(data.prDetails);
      setImage(data.imageUrl);
    });
  }, []);
  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update Product</h1>
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
                .updateProduct(id, {
                  name,
                  prCategory,
                  price,
                  prDetails,
                  imageUrl,
                })
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default UpdateProduct;
