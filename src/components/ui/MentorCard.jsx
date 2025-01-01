import PropTypes from 'prop-types';
import Card from './Card';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function MentorCard({ mentor }) {
  return (
    <Card className="group h-full">
      <div className="p-6 flex flex-col h-full">
        {/* Image and Basic Info */}
        <div className="flex items-center gap-6 mb-4">
          <div className="relative flex-shrink-0">
            <img
              src={mentor.img}
              alt={mentor.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-secondary-700 shadow-md group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-primary-500 dark:ring-primary-400 ring-offset-2 dark:ring-offset-secondary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
          
          <div className="flex-grow">
            <h3 className="font-semibold text-lg text-secondary-900 dark:text-white mb-1">
              {mentor.name}
            </h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              {mentor.profession}
            </p>
          </div>
        </div>

        {/* Connect Button */}
        <div className="mt-auto pt-4">
          <a
            href={mentor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 dark:bg-primary-500 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200"
          >
            Connect with Mentor
            <HiOutlineExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </Card>
  );
}

MentorCard.propTypes = {
  mentor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  }).isRequired,
}; 