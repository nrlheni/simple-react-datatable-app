import React, { useState, useEffect } from 'react';
import './App.css';

const App = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]>data);
  const [keyword, setKeyword] = useState('');
  const [limit, setLimit] = useState(5);
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('ascending');

  useEffect(() => {
    let tempData = [...data];

    // Keyword filter
    if (keyword) {
      tempData = tempData.filter(item =>
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.phone_number.includes(keyword)
      );
    }

    // Sort
    tempData.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'ascending' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'ascending' ? 1 : -1;
      return 0;
    });

    // Limit
    tempData = tempData.slice(0, limit);

    setFilteredData(tempData);
  }, [keyword, limit, sortBy, sortOrder, data]);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Data Table</h1>
      <div className="flex justify-center gap-4 mb-4">
        <input
          type="text"
          className="border p-2 rounded-md"
          placeholder="Search by name or phone number"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 rounded-md"
          placeholder="Limit"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          min="1"
        />
        <select
          className="border p-2 rounded-md"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="gender">Gender</option>
          <option value="phone_number">Phone Number</option>
        </select>
        <select
          className="border p-2 rounded-md"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2 text-left">ID</th>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Age</th>
            <th className="border p-2 text-left">Gender</th>
            <th className="border p-2 text-left">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ?
            (filteredData.map(item => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.age}</td>
                <td className="border p-2">{item.gender}</td>
                <td className="border p-2">{item.phone_number}</td>
              </tr>
            ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-2">No data available</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;
