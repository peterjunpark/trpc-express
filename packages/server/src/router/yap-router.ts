import { trpc } from '../lib/trpc';
import { prisma } from '../lib/prismaClient';
import { z } from 'zod';

export const yapRouter = trpc.router({
  getAllYaps: trpc.procedure.query(async () => {
    return prisma.yap.findMany();
  }),
  postYap: trpc.procedure
    .input(z.object({ content: z.string(), yuser: z.string() }))
    .mutation(async ({ input }) => {
      const content = input.content;
      const yuser = input.yuser;

      return prisma.yap.create({
        data: {
          content,
          yuser,
        },
      });
    }),
});
