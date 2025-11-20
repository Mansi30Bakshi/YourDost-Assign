import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('first_name');
  const [currpage, setCurrpage] = useState(1);
  const [totalpages, setTotalpages] = useState(1);
  const [filterDomain, setFilterDomain] = useState('');
  const [filterFirstLetter, setFilterFirstLetter] = useState('');
  
  const API_KEY = 'reqres-free-v1';
  const API_URL = 'https://reqres.in/api/users';

  useEffect(() => {
    fetchUsers();
  }, [currpage]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?page=${currpage}&api_key=${API_KEY}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('API Response:', data);
      
      setUsers(data.data || []);
      setTotalpages(data.total_pages || 1);

    } catch (err) {
      console.log("Error fetching users...", err);
      setUsers([]);
      setTotalpages(1);
    }
    setLoading(false);
  }

  // ✅ SINGLE filteredUsers array with ALL filters
  const filteredUsers = users
    .filter(user => {
      // Search filter
      const searchMatch = user.first_name.toLowerCase().includes(search.toLowerCase()) ||
        user.last_name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());
      
      // Domain filter
      const domainMatch = filterDomain ? user.email.includes(filterDomain) : true;
      
      // First letter filter
      const firstLetterMatch = filterFirstLetter ? 
        user.first_name.charAt(0).toLowerCase() === filterFirstLetter.toLowerCase() : true;
      
      return searchMatch && domainMatch && firstLetterMatch;
    })
    .sort((a, b) => {
      // Sort functionality
      if (sortField === "first_name" || sortField === "last_name" || sortField === "email") {
        return a[sortField].localeCompare(b[sortField]);
      }
      return 0;
    });

  if (loading) {
    return (
      <div className='loading'>
        <div className='spinner'></div>
        <p>Loading users.....</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>User Directory</h1>
      
      <div className="controls">
        <input 
          type='text' 
          placeholder='Search by name or email' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="search-input"
        />
        
        <select 
          value={sortField} 
          onChange={(e) => setSortField(e.target.value)}
          className="sort-select"
        >
          <option value="first_name">Sort by First Name</option>
          <option value="last_name">Sort by Last Name</option>
          <option value="email">Sort by Email</option>
        </select>

        <input 
          type='text' 
          placeholder='Filter by email domain' 
          value={filterDomain} 
          onChange={(e) => setFilterDomain(e.target.value)} 
          className="search-input"
        />

        <input 
          type='text' 
          placeholder='Filter by first letter' 
          value={filterFirstLetter} 
          onChange={(e) => setFilterFirstLetter(e.target.value)} 
          className="search-input"
          maxLength="1"
        />
      </div>

      <div className="table-container">
        {filteredUsers.length === 0 && users.length > 0 ? (
          <div className="no-results">
            <p>No users found matching your search.</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="no-results">
            <p>No users available.</p>
          </div>
        ) : (
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <img 
                      src={user.avatar} 
                      alt={`${user.first_name} ${user.last_name}`} 
                      className="avatar" 
                    />
                  </td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button 
          disabled={currpage === 1}
          onClick={() => setCurrpage(currpage - 1)}
          className="pagination-btn"
        >
          Previous
        </button>
        <span className="page-info">Page {currpage} of {totalpages}</span>
        <button 
          disabled={currpage === totalpages}
          onClick={() => setCurrpage(currpage + 1)}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App