import { unstable_noStore as noStore } from "next/cache";


export default async function Home() {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <h1>Home</h1>
    </main>
  );
}
