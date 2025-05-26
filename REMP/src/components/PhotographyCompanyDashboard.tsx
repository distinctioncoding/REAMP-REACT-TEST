import { useEffect, useState } from 'react';
import { PhotographyCompany } from '../interfaces/PhotographyCompany';

const PhotographyCompanyDashboard = () => {
  const [companies, setCompanies] = useState<PhotographyCompany[]>([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await fetch('http://localhost:5873/api/photography-companies'); 
//         const data = await response.json();
//         setCompanies(data);
//       } catch (err) {
//         console.error('Failed to fetch photography companies:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   if (loading) return <div>Loading...</div>;

  useEffect(() => {
    // MOCK DATA
    const mockData: PhotographyCompany[] = [
      {
        id: '1',
        photographyCompanyName: 'Sunset Studios',
        user: {
          id: 'u1',
          email: 'studio@sunset.com'
        }
      },
      {
        id: '2',
        photographyCompanyName: 'Ocean Lens',
        user: {
          id: 'u2',
          email: 'contact@oceanlens.com'
        }
      }
    ];

    const timer = setTimeout(() => {
      setCompanies(mockData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div>Loading...</div>;


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Photography Companies</h2>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {company.photographyCompanyName}
            </h3>
            <p className="text-gray-500 text-sm">User: {company.user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PhotographyCompanyDashboard;
