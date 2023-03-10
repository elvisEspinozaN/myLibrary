export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  paginate: any;
}> = (props) => {
  const { currentPage, totalPages, paginate } = props;

  // Define the number of pages to be shown on each side of the current page
  const pageBuffer = 2;

  // Calculate the first and last page numbers to be shown
  const firstPage = Math.max(currentPage - pageBuffer, 1);
  const lastPage = Math.min(currentPage + pageBuffer, totalPages);

  // Create an array of page numbers to be shown
  const pageNumbers = [];
  for (let i = firstPage; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item" onClick={() => paginate(1)}>
          <button className="page-link">First Page</button>
        </li>

        {/* Show "..." if there are more pages to the left of the first page */}
        {firstPage > 1 && (
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )}

        {/* Show the page numbers */}
        {pageNumbers.map((number) => (
          <li
            className={`page-item ${currentPage === number ? "active" : ""}`}
            onClick={() => paginate(number)}
            key={number}
          >
            <button className="page-link">{number}</button>
          </li>
        ))}

        {/* Show "..." if there are more pages to the right of the last page */}
        {lastPage < totalPages && (
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )}

        <li className="page-item" onClick={() => paginate(totalPages)}>
          <button className="page-link">Last Page</button>
        </li>
      </ul>
    </nav>
  );
};
