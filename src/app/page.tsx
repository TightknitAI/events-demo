import EventGrid, { Event } from "@/components/event-grid";

export default async function Home() {
  const params = new URLSearchParams({
    time_filter: "upcoming",
    status: "published",
    published_to_site: "true",
    is_unlisted: "false",
  });

  const response = await fetch(
    `https://staging-api.tightknit.dev/admin/v0/calendar_events?${params}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TIGHTKNIT_API_KEY}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const { data }: { data: Event[] } = await response.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Headless API</h1>
        <EventGrid events={data}></EventGrid>
      </main>
    </div>
  );
}
