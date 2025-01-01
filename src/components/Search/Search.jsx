import { HiSearch } from "react-icons/hi";
import PropTypes from "prop-types";

export default function Search({ onSearch }) {
  return (
    <form onSubmit={onSearch} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          id="search"
          name="search"
          className="w-full pl-12 pr-4 py-3 bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-secondary-900 dark:text-white placeholder-secondary-400 dark:placeholder-secondary-500 transition-all duration-200"
          placeholder="Search career fields..."
        />
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <HiSearch className="h-5 w-5 text-secondary-400 dark:text-secondary-500" />
        </div>
        <button
          type="submit"
          className="absolute inset-y-1 right-1 px-4 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-secondary-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
