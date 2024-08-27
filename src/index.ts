import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files from the "src/public" directory
app.use(express.static(path.join(__dirname, '..', 'src', 'public')));

// Handle the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
