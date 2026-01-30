import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import {Client} from "./client";


const Page = async () => {
  const queryClient = getQueryClient();
  
  // Prefetch the data on the server
  void queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: "Antonio PREFETCH" })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client /> 
      </Suspense>
    </HydrationBoundary>
  );
}

export default Page;