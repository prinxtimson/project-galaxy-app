import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addOrRemove, reset } from "../features/favorite/favoriteSlice";

import Layout from "../components/Layout";

const Favourite = () => {
  const dispatch = useDispatch();

  const { favorites, isError, isSuccess, message } = useSelector(
    (state) => state.favorite
  );

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
        <div className="mb-5">
          <h2 className="text-light">My Favourites</h2>
        </div>
        <div className="">
          <div className="row">
            {favorites.map((val, ind) => (
              <div key={ind} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="card text-center">
                  <Link to="#">
                    <img
                      src={val.img}
                      style={{ height: 200, width: "100%" }}
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to="#">{val.name}</Link>
                    </h5>
                    <p className="card-text">
                      <small className="text-muted">
                        £{val.price.toFixed(2)}
                      </small>
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link to={`/menu/${val.id}`} className="btn btn-primary">
                        Add to Cart
                      </Link>
                      <button
                        type="button"
                        onClick={() => onFavoriteClick(val)}
                        className="btn border-0"
                      >
                        {favorites.includes(val) ? (
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

export default Favourite;
