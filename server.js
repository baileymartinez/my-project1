import express from 'express';
import cors from 'cors';
import menuRoute from './backend/menuRoutes.js'; 

const app = express();
app.use(cors()); // Enable CORS for all routes

// Mount the menu route at '/api/menu'
app.use('/api/menu', menuRoute);

const PORT = 5004;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
