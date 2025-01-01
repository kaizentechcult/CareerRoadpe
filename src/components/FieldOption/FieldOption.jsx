import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { HiOutlineAcademicCap, HiArrowRight } from 'react-icons/hi';

export default function FieldOption({ field }) {
  return (
    <Link to={`/fields/${field.id}`}>
      <Card className="group h-full">
        <div className="p-6 flex flex-col h-full">
          {/* Icon */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-200">
              <HiOutlineAcademicCap className="w-6 h-6" />
            </div>
            <h3 className="flex-grow font-semibold text-lg text-secondary-900 dark:text-white">
              {field.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-6 line-clamp-3 flex-grow">
            {field.description}
          </p>

          {/* Action */}
          <div className="flex items-center text-sm text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300">
            Explore Path
            <HiArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

FieldOption.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
