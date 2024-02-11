import React, { useState } from 'react';
import { FaChartBar, FaClipboardList, FaBox, FaUsers, FaChartLine, FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar p-4 m-3 rounded border ${isOpen ? 'open' : 'closed'}`} style={{ backgroundColor: '#fff', color: '#1e1e2c', height: '100vh', width:'220px' }}>
      <div className="sidebar-header d-flex justify-content-between align-items-center mb-3">
        <h5>Dashboard</h5>
        <FaBars className="d-md-none" onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#"><FaChartBar style={{ marginRight: '10px' }} /> Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><FaClipboardList style={{ marginRight: '10px' }} /> Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><FaBox style={{ marginRight: '10px' }} /> Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><FaUsers style={{ marginRight: '10px' }} /> Customers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><FaChartLine style={{ marginRight: '10px' }} /> Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
