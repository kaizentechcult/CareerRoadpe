import { useState, useEffect } from 'react';
import SearchInput from '../../components/ui/SearchInput';
import Loader from '../../components/ui/Loader';
import FieldOption from '../../components/FieldOption/FieldOption';

export default function FieldMenu() {
  const [fields, setFields] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch('https://careerroadpe.onrender.com/roadmap');
        if (!response.ok) throw new Error('Failed to fetch fields');
        const data = await response.json();
        setFields(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFields();
  }, []);

  const filteredFields = fields.filter(field =>
    field.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Explore Career Fields
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto mb-8">
            Discover various career paths and find the one that matches your interests
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto">
            <SearchInput
              placeholder="Search fields..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFields.map((field) => (
            <FieldOption key={field.id} field={field} />
          ))}
        </div>

        {/* No Results */}
        {filteredFields.length === 0 && (
          <div className="text-center text-secondary-600 dark:text-secondary-400 mt-8">
            No fields found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
