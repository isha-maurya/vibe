"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
// Note: You can remove useEffect and useState if you aren't using them yet

export const Client = () => {
  const trpc = useTRPC();
  
  // Changed { data } to [ data ] to match tRPC v11 tuple return
  const {data} = useSuspenseQuery(
    trpc.createAI.queryOptions({ text: "Antonio PREFETCH" })
  );

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};