import React from 'react';
import SortableTable from '../components/SortableTable.tsx';

const HomeScreen: React.FC = () => {
  const handleSort = (sortConfig: { key: string; direction: 'ascending' | 'descending' }) => {
    console.log('Sorted:', sortConfig);
    // Handle the sort event here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Table</h1>
      <SortableTable onSort={handleSort} />
    </div>
  );
};

export default HomeScreen; 