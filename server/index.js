import dotenv from 'dotenv';
import express from 'express';
// import swagger from 'swagger-ui-express';
// import path from 'path';
import cors from 'cors';
// import serverSocket from 'socket.io';

// import allRoutes from './routes';
// import apiDocumentation from '../swagger.json';

dotenv.config();

const app = express();
// const basePath = '/api';
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(basePath, allRoutes);
// app.use(`${basePath}/documentation`, swagger.serve, swagger.setup(apiDocumentation));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Dream Home Agency App' });
});

app.use((req, res) => {
  res.status(404);
  res.json({
    status: 404,
    error: 'Endpoint not found'
  });
});

app.listen(port, () => {
  process.stdout.write(`DreamHomeAgency App running on ${port}\n`);
});

export default app;