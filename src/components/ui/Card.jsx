import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export default function Card({ children, className }) {
  return (
    <div className={twMerge(
      "bg-white dark:bg-secondary-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200",
      "border border-secondary-200 dark:border-secondary-700",
      className
    )}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}; 