import express, { Request, Response } from "express";
import apiRoutes from './router/index';

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('server testing');
})

// Server startup
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});