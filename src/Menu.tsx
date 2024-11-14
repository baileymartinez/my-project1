

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// //import logo from './assets/Images/restlogo.png'; // Logo path

// // Define a TypeScript interface for menu items
// interface MenuItem {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   category: string; // E.g., "Breakfast"
// }

// const Menu: React.FC = () => {
//   const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

//   // Fetch menu items from the Express API
//   useEffect(() => {
//     axios.get('http://localhost:5001/api/menu') // Update with your Express API endpoint
//       .then(response => {
//         setMenuItems(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching menu data:", error);
//       });
//   }, []);

//   return (
//     <div className="menu-page">
//       <header className="menu-header">
//         <img src={logo} alt="El Frijolito logo" className="menu-logo" />
//         <h1>Menu</h1>
//         <h2>Breakfast/Desayunos</h2>
//       </header>
      
//       <div className="menu-list">
//         {menuItems
//           .filter(item => item.category === 'Breakfast')
//           .map((item, index) => (
//             <div key={item.id} className="menu-item">
//               <h3>{item.name} <span className="menu-price">${item.price.toFixed(2)}</span></h3>
//               <p>{item.description}</p>
//               {index % 2 === 1 && <hr />} {/* Add a line break every two items */}
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;
import React from 'react';
import './App.css';

const menuItems = [
  { name: 'Huevos a la Mexicana', price: '6.99', description: 'Spicy scrambled eggs with veggies.' },
  { name: 'Huevos Estrellados', price: '6.99', description: 'Fried eggs over crispy, delicious potatoes.' },
  { name: 'Huevos Con Jamon', price: '6.99', description: 'Scrambled eggs with ham.' },
  { name: 'Huevos Revueltos', price: '6.99', description: 'Soft scrambled eggs, simple and comforting.' },
  { name: 'Huevos Rancheros', price: '6.99', description: 'Eggs on tortillas with savory ranchero sauce.' },
  { name: 'Huevos Con Chorizo', price: '6.99', description: 'Scrambled eggs with spicy, flavorful chorizo.' },
  { name: 'Breakfast Burrito', price: '5.49', description: 'Warm tortilla filled with hearty breakfast.' },
  { name: 'Waffles', price: '6.99', description: 'Scrambled eggs with ham.' }
];

const Menu = () => {
  return (
    <div className="menu-page">
      <div className="menu-header">
        {/* //<img src="path/to/logo.png" alt="Restaurant Logo" className="menu-logo" /> */}
        <h1>Menu</h1>
        <h2>Breakfast/Desayunos</h2>
      </div>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div>
              <span>{item.name}</span>
              <span className="menu-price">{item.price}</span>
            </div>
            <p>{item.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;