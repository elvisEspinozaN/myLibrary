import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { Pagination } from "../Utils/Pagination";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchBook } from "./components/SearchBook";

export const SearchBookPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  // current page for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // number of books per page
  const [booksPerPage] = useState(5);
  // total amount of books state
  const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
  // total number of pages state
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [searchUrl, setSearchUrl] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      // form the URL based on the current page and number of books per page
      const baseUrl: String = "http://localhost:8080/api/books";

      let url: string = "";
      // if no search query, fetch all books based on the current page and number of books per page
      if (searchUrl === "") {
        url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;
      } else {
        url = baseUrl + searchUrl;
      }

      // fetch books from API
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      // extract book data from API
      const responseJson = await response.json();
      const responseData = responseJson._embedded.books;

      setTotalAmountOfBooks(responseJson.page.totalElements);
      setTotalPages(responseJson.page.totalPages);

      const loadedBooks: BookModel[] = [];
      for (const key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copiesAvailable,
          category: responseData[key].category,
        });
      }

      setBooks(loadedBooks);
      setIsLoading(false);
    };

    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    window.scrollTo(0, 0);
  }, [currentPage, searchUrl]);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  const searchHandleChange = () => {
    if (search === "") {
      setSearchUrl("");
    } else {
      // update the search URL with the current search query and books per page
      setSearchUrl(
        `/search/findByTitleContaining?title=${search}&page=0&size=${booksPerPage}`
      );
    }
  };

  const indexOfLastBook: number = currentPage * booksPerPage;
  const indexOfFirstBook: number = indexOfLastBook - booksPerPage;
  // the last item to be shown on the current page.
  // if the number of books per page multiplied by the current page is less than or equal to the total amount of books,
  // show the books per page multiplied by the current page, else show the total amount of books.
  let lastItem =
    booksPerPage * currentPage <= totalAmountOfBooks
      ? booksPerPage * currentPage
      : totalAmountOfBooks;

  // Changes the current page to the given page number.
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-6">
              <div className="d-flex">
                {/* search input */}
                <input
                  type="search"
                  className="form-control me-2"
                  placeholder="Search"
                  aria-labelledby="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* search button */}
                <button
                  className="btn btn-outline-success"
                  onClick={() => searchHandleChange()}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a href="#" className="dropdown-item">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Fiction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Sci-Fi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Young Adult
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Mystery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Thriller
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Manga
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {totalAmountOfBooks > 0 ? (
            <>
              <div className="mt-3">
                <h5>Number of Results: ({totalAmountOfBooks})</h5>
              </div>
              {/* display range of books being shown */}
              <p>
                {indexOfFirstBook + 1} to {lastItem} of {totalAmountOfBooks}{" "}
                items:
              </p>
              {/* displaying each book */}
              {books.map((book) => (
                <SearchBook book={book} key={book.id} />
              ))}
            </>
          ) : (
            <div className="m-5">
              <h3>
                Sorry, we couldn't find what you're looking for. Please try
                another search or browse our recommendations below.
              </h3>
              <a
                href="#"
                className="btn main-color btn-md px-4 me-md-2 fw-bold text-white"
              >
                Library Services
              </a>
            </div>
          )}
          {/* displays pagination if there is more than 1 page */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          )}
        </div>
      </div>
    </div>
  );
};
