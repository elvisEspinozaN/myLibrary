import BookModel from "../../../models/BookModel";

const images = ["a-book.png", "a-brown-book.png", "a-red-book.png"];
const randomIndex = Math.floor(Math.random() * images.length);

export const GetBook: React.FC<{ book: BookModel }> = (props) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require(`./../../../Images/BookImages/${images[randomIndex]}`)}
          alt="book"
          width="151"
          height="233"
        />
        <h6 className="mt-2">{props.book.title}</h6>
        <p>{props.book.author}</p>
        <a href="#" className="btn main-color text-white">
          Reserve
        </a>
      </div>
    </div>
  );
};
