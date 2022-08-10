import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout";

import { getProducts } from "../features/product/productSlice";
import { addOrRemove, reset } from "../features/favorite/favoriteSlice";

const FoodMenu = () => {
  const [result, setResult] = useState([]);
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  const { favorites, isError, isSuccess, message } = useSelector(
    (state) => state.favorite
  );

  const onChangeText = (e) => {
    const newProducts = products.filter((prod) => {
      const { name, description } = prod;
      const prodData = `${name.toUpperCase()} ${description.toUpperCase()}`;

      const searchQuery = e.target.value.toUpperCase();

      return prodData.indexOf(searchQuery) > -1;
    });

    setResult(newProducts);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setResult(products);
  }, [products]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("food had been add/remove to favorite");
    }

    dispatch(reset());
  }, [favorites, isError, isSuccess, message, dispatch]);

  const onFavoriteClick = (data) => {
    dispatch(addOrRemove(data));
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="mb-4">
          <h2 className="text-light">Menu</h2>
        </div>
        <div className="mb-5">
          <div className="py-4">
            <div className="row justify-content-end">
              <div className="col-12 col-md-6">
                <form
                  className=""
                  role="search"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className="form-control form-control-lg"
                    type="search"
                    placeholder="Search ....."
                    aria-label="Search"
                    onChange={onChangeText}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {result.map((product) => (
              <div className="col" key={product.id}>
                <div className="card text-center">
                  <Link to={`${product.id}`}>
                    <img
                      src={product.img}
                      style={{ height: 200, width: "100%" }}
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`${product.id}`}>{product.name}</Link>
                    </h5>
                    <p className="card-text">
                      <strong className="">£{product.price.toFixed(2)}</strong>
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link to={`${product.id}`} className="btn btn-primary">
                        Add to Cart
                      </Link>
                      <button
                        type="button"
                        onClick={() => onFavoriteClick(product)}
                        className="btn border-0"
                      >
                        {favorites.includes(product) ? (
                          <MdFavorite />
                        ) : (
                          <MdFavoriteBorder />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FoodMenu;
