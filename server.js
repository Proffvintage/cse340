import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { once } from 'node:events';
import { navigation, organizations, projects, categories } from './src/data/site.js';

const projectDirectory = fileURLToPath(new URL('.', import.meta.url));
const nodeEnvironment = process.env.NODE_ENV?.toLowerCase() || 'production';
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '0.0.0.0';
const app = express();

// Public assets are served directly; EJS templates remain outside public.
app.use(express.static(path.join(projectDirectory, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(projectDirectory, 'src/views'));
app.locals.navigation = navigation;

app.get('/', async (req, res) => {
  const title = 'Home';
  res.render('home', { title, currentPath: '/', organizations, projects, categories });
});

app.get('/organizations', async (req, res) => {
  const title = 'Our Partner Organizations';
  res.render('organizations', { title, currentPath: '/organizations', organizations });
});

app.get('/projects', async (req, res) => {
  const title = 'Service Projects';
  res.render('projects', { title, currentPath: '/projects', projects });
});

app.get('/categories', async (req, res) => {
  const title = 'Service Project Categories';
  res.render('categories', { title, currentPath: '/categories', categories });
});

const server = app.listen(port, host);
await once(server, 'listening');
console.log(`Server is running at http://${host}:${port}`);
console.log(`Environment: ${nodeEnvironment}`);
