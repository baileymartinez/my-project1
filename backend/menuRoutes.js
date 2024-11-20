import express from 'express';
const router = express.Router();

const menuItems = [
    { id: 1, name: "Huevos a la Mexicana", description: "Spicy scrambled eggs with veggies.", price: 6.99 },
    { id: 2, name: "Huevos Estrellados", description: "Fried eggs over crispy, delicious potatoes.", price: 6.99 },
    { id: 3, name: "Huevos Con Jamon", description: "Scrambled eggs with ham.", price: 6.99 },
    { id: 4, name: "Huevos Revueltos", description: "Soft scrambled eggs, simple and comforting.", price: 6.99 },
    { id: 5, name: "Huevos Rancheros", description: "Eggs on tortillas with savory ranchero sauce.", price: 6.99 },
    { id: 6, name: "Huevos Con Chorizo", description: "Scrambled eggs with spicy, flavorful chorizo.", price: 6.99 },
    { id: 7, name: "Breakfast Burrito", description: "Warm tortilla filled with hearty breakfast.", price: 5.49 },
    { id: 8, name: "Waffles", description: "Scrambled eggs with ham.", price: 6.99 }
];

router.get('/', (req, res) => {
    res.json(menuItems);
});

export default router;