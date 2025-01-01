import { useState, useEffect } from 'react';
import ScholarshipCard from '../../components/ui/ScholarshipCard';
import SearchInput from '../../components/ui/SearchInput';
import Loader from '../../components/ui/Loader';

export default function Scholarships() {
  const [scholarships, setScholarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await fetch('https://careerroadpe.onrender.com/scholarship');
        if (!response.ok) throw new Error('Failed to fetch scholarships');
        const data = await response.json();
        setScholarships(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  const filteredScholarships = scholarships.filter(scholarship =>
    scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scholarship.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Available Scholarships
            </h1>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto mb-8">
              Find and apply for scholarships to support your educational journey
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto">
              <SearchInput
                placeholder="Search scholarships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Scholarships Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>

          {/* No Results */}
          {filteredScholarships.length === 0 && (
            <div className="text-center text-secondary-600 dark:text-secondary-400 mt-8">
              No scholarships found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
