import React, { useEffect } from "react";
import { getAllProduct } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  console.log(products, "products");

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <section className="container-div products">
      <h2>Featured Products</h2>
      <div className="products__items">
        {loading ? (
          "Data Loading....."
        ) : (
          <>
            {products?.map((product, i) => (
              <SingleProduct key={`product-${i}`} product={product} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Products;
