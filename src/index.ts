import 'dotenv/config';
import express, { Application } from 'express';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth.route.js';

const app: Application = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
