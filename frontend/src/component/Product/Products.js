import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import { Chip } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>No Products Found! </Typography>
      <a href="/products">Show all Products</a>
    </div>
  );
};

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100000000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;
  const chipData = [
    { key: 0, label: "Laptop" },
    { key: 1, label: "Footwear" },
    { key: 2, label: "Bottom" },
    { key: 3, label: "Camera" },
    { key: 4, label: "SmartPhones" },
  ];

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  const handleClickChip = (id) => {
    setCategory(chipData[id].label);
  };
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : products.length === 0 ? (
        <NotFound />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products_container row">
            <div className="filterBox col-12 col-md-3">
              <Typography>Price</Typography>
              <br />
              <br />
              <Slider
                value={price}
                onChange={priceHandler}
                aria-labelledby="range-slider"
                min={0}
                max={25000}
                valueLabelDisplay="on"
                className="rangeSlider"
              />

              <Typography>Categories</Typography>
              <ul className="categoryBox">
                {chipData.map((data) => {
                  return (
                    <li key={data.key} className="p-1 m-1">
                      <Chip
                        label={data.label}
                        onClick={() => {
                          handleClickChip(data.key);
                        }}
                        color={data.label === category ? "primary" : ""}
                      />
                    </li>
                  );
                })}
              </ul>

              <div>
                <Typography component="legend">Ratings Above</Typography>
                <br />
                <br />
                <Slider
                  value={ratings}
                  valueLabelDisplay="on"
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  min={0}
                  max={5}
                  className="rangeSlider"
                />
              </div>
            </div>
            <div className="products col-12 col-md-9">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
