import { unstable_noStore as noStore } from "next/cache";

import { api } from "@/trpc/server";
import {Button} from "@/components/ui/button";

export default async function Home() {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">

    </main>
  );
}