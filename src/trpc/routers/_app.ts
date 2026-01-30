import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(z.object({ text: z.string() }))
    .query((opts) => {
      return { greeting: `hello ${opts.input.text}` };
    }),

  // Change .mutation to .query here
  createAI: baseProcedure
    .input(z.object({ text: z.string() }))
    .query(async (opts) => {
      // Your logic here (e.g., calling an AI API)
      return { 
        id: "123",
        response: `AI received: ${opts.input.text}` 
      };
    }),
});

export type AppRouter = typeof appRouter;