import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Layout from "../components/Layout";
import {
  clear,
  getProductById,
  review,
} from "../features/product/productSlice";
import { addOrRemove, reset } from "../features/favorite/favoriteSlice";
import { addToCart, reset as resetCart } from "../features/cart/cartSlice";

const SingleMenu = () => {
  const [items, setItems] = useState([]);
  const [comment, setComment] = useState("");
  const [qty, setQty] = useState(1);
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { product } = useSelector((state) => state.product);
  const {
    isError: error,
    isSuccess: success,
    message: msg,
  } = useSelector((state) => state.cart);

  const { favorites, isError, isSuccess, message } = useSelector(
    (state) => state.favorite
  );

  const onSubmit = (e) => {
    let reviewData = {
      id: uuid(),
      comment,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
    dispatch(review(product.id, reviewData));
  };

  const onAddToCart = () => {
    let data = {
      ...product,
      id: uuid(),
      price:
        product.price + items.reduce((total, item) => total + item.price, 0),
      qty,
      extras: [...items],
    };
    dispatch(addToCart(data));
  };

  const onCheckClick = (e) => {
    let extra = JSON.parse(e.target.value);
    if (e.target.checked) {
      setItems([...items, extra]);
    } else {
      let data = items.filter((val) => val.id !== extra.id);

      setItems(data);
    }
  };

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(reset());

    return () => dispatch(clear());
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      toast.error(msg);
    }

    if (success) {
      toast.success("food had been added to cart");
    }

    dispatch(resetCart());
  }, [favorites, error, success, msg, dispatch]);

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
      <div className="glass container mt-5 p-4">
        <div className="my-3">
          {product && (
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="card">
                  <img
                    src={product.img}
                    alt=""
                    style={{ height: 300, width: "100%" }}
                    className="card-img-top"
                  />
                </div>
              </div>
              <div className="col-12 col-md-7">
                <div className="card">
                  <div className="card-body p-5">
                    <h4 className="card-title border-bottom">{product.name}</h4>
                    <div className="py-3 border-bottom">
                      <h5 className="card-title">
                        <small>Price: </small> £{product.price.toFixed(2)}
                      </h5>
                    </div>
                    <p className="card-text py-4 border-bottom">
                      {product.description}
                    </p>
                    <div className="py-2 border-bottom">
                      <p className="card-title border-bottom fw-bold">Extras</p>
                      <ul>
                        {product.extras.map((val, index) => (
                          <li key={index}>
                            <div className="form-check">
                              <input
                                className="form-check-input mt-2"
                                type="checkbox"
                                value={JSON.stringify(val)}
                                id={`${index}`}
                                checked={
                                  items.filter((item) => item.id === val.id)
                                    .length > 0
                                }
                                onChange={onCheckClick}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`${index}`}
                              >
                                {`${val.name} (£${val.price.toFixed(2)})`}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="">
                      <div className="d-flex my-3 align-items-center">
                        <div className="row" style={{ width: 150 }}>
                          <label
                            htmlFor="qty"
                            className="col-sm-5 col-form-label"
                          >
                            Qty
                          </label>
                          <div className="col-sm-7">
                            <input
                              type="text"
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                              className="form-control"
                              id="qty"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="mx-4 btn btn-warning rounded-pill"
                          onClick={onAddToCart}
                        >
                          Add to cart
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => onFavoriteClick(product)}
                        className="btn border-0"
                      >
                        {favorites.includes(product) ? (
                          <>
                            <MdFavorite size={20} />{" "}
                            <small className="d-none d-md-inline">
                              Remove from Favorite
                            </small>
                          </>
                        ) : (
                          <>
                            <MdFavoriteBorder size={20} />{" "}
                            <small className="d-none d-md-inline">
                              Add from Favorite
                            </small>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="my-4 card">
          <div className="mt-4 text-center">
            <h3>Review ({product?.reviews.length})</h3>
          </div>
          <div className="m-4">
            {user ? (
              <form className="" onSubmit={onSubmit}>
                <div class="mb-3">
                  <label htmlFor="review" className="form-label">
                    Leave a review
                  </label>
                  <textarea
                    className="form-control"
                    id="review"
                    value={comment}
                    rows="3"
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <div className="">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div className="">
                <p>
                  Please <Link to="/login">login</Link> or{" "}
                  <Link to="/register">register</Link> to review{" "}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleMenu;
