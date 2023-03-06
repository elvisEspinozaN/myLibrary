export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>

          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Get to know myLibrary Online</h1>
              <p className="lead">
                No matter what you're a fan of, from Fiction to Biography,
                Sci-Fi, Mystery, YA, Manga, and more, myLibrary has the perfect
                book for you. Shop bestselling books from the NY Times
                Bestsellers list, or get personalized recommendations to find
                something new and unique!
              </p>
              <a href="#" className="btn main-color btn-lg text-white">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Find Your Place at myLibrary Online Bookstore</h1>
              <p className="lead">
                A colleciton of books ready at your disposal, we prioritize our
                selection and our customers needs!
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left">
              <div className="mt-2">
                <h1>Get to know myLibrary Online</h1>
                <p className="lead">
                  No matter what you're a fan of, from Fiction to Biography,
                  Sci-Fi, Mystery, YA, Manga, and more, myLibrary has the
                  perfect book for you. Shop bestselling books from the NY Times
                  Bestsellers list, or get personalized recommendations to find
                  something new and unique!
                </p>
                <a href="#" className="btn main-color btn-lg text-white">
                  Sign Up
                </a>
              </div>
            </div>
            <div className="mt-2">
              <div className="col-image-right"></div>
              <div className="mt-2">
                <h1>Find Your Place at myLibrary Online Bookstore</h1>
                <p className="lead">
                  A colleciton of books ready at your disposal, we prioritize
                  our selection and our customers needs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
