const express = require('express');
const cors = require('cors');
const menuRoutes = require('./menuRoutes');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use('/api/menu', menuRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});