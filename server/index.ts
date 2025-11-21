import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the dist directory
const staticPath = join(__dirname, '../dist');
console.log('Serving static files from:', staticPath);

app.use(express.static(staticPath, {
  maxAge: '1h',
  etag: false
}));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Add your other API routes here
// app.post('/api/login', (req, res) => { ... });
// app.get('/api/users', (req, res) => { ... });

// Catch-all route - serve React app for all other routes
app.get('*', (req, res) => {
  const indexPath = join(staticPath, 'index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      res.status(500).json({ error: 'Failed to load application' });
    }
  });
});

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Export for Vercel serverless
export default app;

// Start server (for both local and production)
const PORT:any = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});