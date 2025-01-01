import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  const features = [
    {
      title: 'Articles',
      description: 'Read insightful articles about career development and opportunities.',
      path: '/articles',
    },
    {
      title: 'Scholarships',
      description: 'Discover scholarships to help fund your education.',
      path: '/scholarships',
    },
    {
      title: 'Mentors',
      description: 'Connect with experienced mentors in your field.',
      path: '/mentors',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Welcome, {user?.displayName || 'User'}!
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Explore resources and opportunities to advance your career journey
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.path}
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
              <span className="absolute top-6 right-6 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 