import BookModel from "../../../models/BookModel";

const images = ["a-book.png", "a-brown-book.png", "a-red-book.png"];
const randomIndex = Math.floor(Math.random() * images.length);

export const SearchBook: React.FC<{ book: BookModel }> = (props) => {
  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="d-none d-lg-block">
            <img
              src={require(`../../../Images/BookImages/${images[randomIndex]}`)}
              alt="book"
              width="123"
              height="196"
            />
          </div>

          <div className="d-lg-none d-flex justify-content-center align-items-center">
            <img
              src={require(`../../../Images/BookImages/${images[randomIndex]}`)}
              alt="book"
              width="123"
              height="196"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.book.author}</h5>
            <h4>{props.book.title}</h4>
            <p className="card-text">{props.book.description}</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <a href="#" className="btn btn-md main-color text-white">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};
