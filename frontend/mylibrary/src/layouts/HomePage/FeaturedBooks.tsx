export const FeaturedBooks = () => {
  return (
    <div className="p-5 mb-4 bg-dark header">
      <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
        <div>
          <h1 className="display-5 fw-bold">Explore myLibrary!</h1>
          <p className="col-md-8 fs-4">
            A large selection of books and much more.
          </p>
          <a
            type="button"
            href="#"
            className="btn main-color btn-lg text-white"
          >
            Take a look!
          </a>
        </div>
      </div>
    </div>
  );
};
