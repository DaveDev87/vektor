"use client";

import { api } from "@/trpc/react";
import Loading from "@/app/dashboard/loading";
import CardSeries from "@/app/_components/CardSeries";

function Dashboard() {
  const series = api.series.list.useQuery();

  if (!series.data) {
    return <Loading />;
  }

  return (
    <main className="flex h-screen gap-52 pl-4 pt-4">
      {series.data.map((item) => (
        <CardSeries
          key={item.id}
          title={item.name!}
          episodes={item.episodes!}
          image={item.image!}
        />
      ))}
    </main>
  );
}

export default Dashboard;
