import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../component/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../component/Loader";
import Message from "../component/Message";
// import products from "../products";
import axios from "axios";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  // debugger;
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  console.log(products)

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    const nameRegex = new RegExp(searchTerm, "i");
    return (
      nameRegex.test(product.name) &&
      (selectedCategory === "" || product.name === selectedCategory || product.price === selectedCategory || product.category === selectedCategory)
    );
  });
  console.log('filter products')
  console.log(filteredProducts)
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div>
      <h1>Latest Products</h1>
      <form className="d-flex">
        <input
          className="form-control me-sm-2"
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        
      </form>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
