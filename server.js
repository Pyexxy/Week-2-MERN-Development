const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const auth = require('./middleware/auth');

const app = express();
const PORT = 3000;

// Middleware
app.use(logger);
app.use(bodyParser.json());
app.use(auth);

// Routes
app.use('/api/products', productRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
