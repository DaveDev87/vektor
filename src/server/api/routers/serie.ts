import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const serieRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.query.series.findMany();
  }),
});
