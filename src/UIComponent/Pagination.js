export const Pagination = ({ totalRecords, currentPage, pageLimit }) => {
  if (totalRecords <= pageLimit) {
    return;
  }
  const pageNumbers = [],
    totalPages = Math.ceil(totalRecords / pageLimit);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example" className="mt-5">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={`page-item ${
                number === currentPage ? "active disabled" : ""
              }`}
            >
              <a href="javascript:void(0)" className="page-link">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
