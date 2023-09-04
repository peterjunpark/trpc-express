import express, { Application } from 'express';
import cors from 'cors';
import { appRouter } from './router/';
import * as trpcExpress from '@trpc/server/adapters/express';

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

console.log('hi');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
