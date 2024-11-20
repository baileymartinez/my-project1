import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Menu.css'; // Import the CSS file

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5004/api/menu')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
      });
  }, []);

  return (
    <div className="menu-page">
      <h1 className="menu-header">Menu</h1>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <div>
              <h3>{item.name}</h3>
              <p className="menu-price">${item.price}</p>
            </div>
            <p>{item.description}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;