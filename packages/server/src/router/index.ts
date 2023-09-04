// A "router of functions"
import { trpc } from '../lib/trpc';
import { yapRouter } from './yap-router';

export const appRouter = trpc.router({
  yap: yapRouter,
});

export type AppRouter = typeof appRouter;
