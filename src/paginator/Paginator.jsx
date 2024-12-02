import PropTypes from "prop-types";

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav
      className="flex justify-end bg-white"
      aria-label="Page navigation example"
    >
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            disabled={currentPage === 0}
            onClick={() => onPageChange(currentPage - 1)}
            className="flex items-center justify-center px-3 h-8 leading-tight text-teal-600 bg-white border border-gray-300 rounded-s-lg hover:bg-teal-100 hover:text-teal-800 disabled:opacity-50"
          >
            ←
          </button>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              onClick={() => onPageChange(index)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                currentPage === index
                  ? "text-blue-600 bg-blue-50"
                  : "text-teal-600 bg-white hover:bg-teal-100 hover:text-teal-800"
              } border border-gray-300`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === totalPages - 1}
            onClick={() => onPageChange(currentPage + 1)}
            className="flex items-center justify-center px-3 h-8 leading-tight text-teal-600 bg-white border border-gray-300 rounded-e-lg hover:bg-teal-100 hover:text-teal-800 disabled:opacity-50"
          >
            →
          </button>
        </li>
      </ul>
    </nav>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginator;
