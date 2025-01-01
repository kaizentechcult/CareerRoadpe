import PropTypes from 'prop-types';
import Card from './Card';
import { HiOutlineAcademicCap, HiOutlineCash, HiOutlineCalendar, HiOutlineExternalLink } from 'react-icons/hi';

export default function ScholarshipCard({ scholarship }) {
  return (
    <Card className="group h-full">
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-200">
            <HiOutlineAcademicCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-secondary-900 dark:text-white mb-1">
              {scholarship.title}
            </h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              {scholarship.organization}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3 mb-6 flex-grow">
          <p className="text-sm text-secondary-600 dark:text-secondary-400 line-clamp-3">
            {scholarship.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-secondary-600 dark:text-secondary-400">
            <span className="flex items-center gap-1">
              <HiOutlineCash className="w-4 h-4" />
              {scholarship.amount}
            </span>
            <span className="flex items-center gap-1">
              <HiOutlineCalendar className="w-4 h-4" />
              {scholarship.deadline}
            </span>
          </div>
        </div>

        {/* Action */}
        <div className="mt-auto pt-4 border-t border-secondary-100 dark:border-secondary-700">
          <a
            href={scholarship.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 dark:bg-primary-500 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200"
          >
            Apply Now
            <HiOutlineExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </Card>
  );
}

ScholarshipCard.propTypes = {
  scholarship: PropTypes.shape({
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}; 