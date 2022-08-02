const Home = () => {
  return (
    <div className="container flex-grow-1">
      <div className="h-100 d-flex justify-content-center align-items-center flex-column">
        <div className="w-100">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 form-control-lg"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
