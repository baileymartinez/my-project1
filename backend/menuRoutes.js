const express = require('express');
const router = express.Router();

const menuItems = [
    { id: 1, name: "Huevos a la Mexicana", description: "Spicy scrambled eggs with veggies.", price: 6.99 },
    { id: 2, name: "Huevos Estrellados", description: "Fried eggs over crispy, delicious potatoes.", price: 6.99 },
    // Add more menu items as needed
];

router.get('/', (req, res) => {
    res.json(menuItems);
});

module.exports = router;