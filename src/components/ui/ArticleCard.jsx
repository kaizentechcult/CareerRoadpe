import PropTypes from 'prop-types';
import Card from './Card';
import { HiOutlineCalendar, HiOutlineUser, HiOutlineExternalLink } from 'react-icons/hi';

export default function ArticleCard({ article }) {
  return (
    <Card className="group h-full">
      <div className="p-6 flex flex-col h-full">
        {/* Image */}
        <div className="relative mb-4 rounded-lg overflow-hidden">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="font-semibold text-lg text-secondary-900 dark:text-white mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
            {article.description}
          </p>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-secondary-500 dark:text-secondary-400 mt-4 pt-4 border-t border-secondary-100 dark:border-secondary-700">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <HiOutlineCalendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <HiOutlineUser className="w-4 h-4" />
              {article.author}
            </span>
          </div>
          
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
          >
            Read more
            <HiOutlineExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Card>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
}; 