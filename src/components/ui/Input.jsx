import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  type = 'text',
  className = '',
  required = false,
  helperText,
  startIcon,
  endIcon,
  ...props
}, ref) => {
  const baseInputClasses = 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 bg-white dark:bg-secondary-800';
  const inputClasses = error
    ? `${baseInputClasses} border-error-main text-error-main focus:ring-error-light bg-error-50 dark:bg-error-dark/10`
    : `${baseInputClasses} border-secondary-200 dark:border-secondary-700 text-secondary-900 dark:text-white focus:border-primary-500 dark:focus:border-primary-400 focus:ring-primary-200 dark:focus:ring-primary-900 placeholder-secondary-400 dark:placeholder-secondary-500`;

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
          {label}
          {required && <span className="text-error-main dark:text-error-light ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary-400 dark:text-secondary-500">
            {startIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          className={`
            ${inputClasses}
            ${startIcon ? 'pl-10' : ''}
            ${endIcon ? 'pr-10' : ''}
            ${className}
          `}
          {...props}
        />
        
        {endIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-secondary-400 dark:text-secondary-500">
            {endIcon}
          </div>
        )}
      </div>

      {(error || helperText) && (
        <p className={`text-sm ${error ? 'text-error-main dark:text-error-light' : 'text-secondary-500 dark:text-secondary-400'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

export default Input; 