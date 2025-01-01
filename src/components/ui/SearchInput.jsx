import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineSearch } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

const SearchInput = forwardRef(({ placeholder = 'Search...', className = '', ...props }, ref) => {
  return (
    <div className="relative">
      <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
      <input
        ref={ref}
        type="text"
        className={twMerge(
          "w-full pl-10 pr-4 py-2 bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg",
          "text-secondary-900 dark:text-white placeholder-secondary-400",
          "focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent",
          "transition-shadow duration-200",
          className
        )}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
});

SearchInput.displayName = 'SearchInput';

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default SearchInput; 