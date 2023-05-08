import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, NavbarBrand } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";
import FormContainer from "../component/FormContainer.js";
import "../myStyle.css";
import { createProduct } from "../actions/productActions";

const ProductAdditionScreen = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState(0);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  var user = userInfo._id;
  const location = useLocation();
  const navigate = useNavigate();

  //   const redirect = location.search ? location.search.split("=")[1] : "/";
  //   useEffect(() => {
  //     if (userInfo) {
  //       navigate(redirect);
  //     }
  //   }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    var product = {
      user,
      name,
      image,
      brand,
      category,
      description,
      rating,
      // reviews,
      price,
      stock,
    };
    dispatch(createProduct(product));
  };

  return (
    <FormContainer>
      <h1>New Product</h1>
      <br />
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ratings...."
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="reviews">
          <Form.Label>Reviews</Form.Label>
          <Form.Control
            type="text"
            placeholder="Reviews"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="stock">
          <Form.Label>Stock Available</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          className="btn-danger rounded loginBtn"
          type="submit"
          variant="primary"
        >
          Add Product
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ProductAdditionScreen;
