import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/route.js'; // rotas externas
import routesAluno from './routes/AlunoRoutes.js'; // rotas externas
import routesCurso from './routes/CursoRoutes.js'; // rotas externas

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// Servir arquivos estáticos
app.use(express.static(join(__dirname, '/public')));
app.set('views', join(__dirname, '/views'));

// Rotas
app.use(routes)
app.use(routesAluno)
app.use(routesCurso)
app.listen(3001)
// Exporta o handler compatível com Vercel
export default app;