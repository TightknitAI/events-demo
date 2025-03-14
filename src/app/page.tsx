import EventGrid, { Event } from "@/components/event-grid";

export default async function Home() {
  const params = new URLSearchParams({
    page: "0",
    per_page: "10",
    time_filter: "upcoming",
    status: "published",
    // published_to_site: "true",
    // is_unlisted: "false",
  });

  const response = await fetch(
    `https://api.tightknit.dev/admin/v0/calendar_events?${params}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TIGHTKNIT_API_KEY}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    // Get the error details from the response
    const errorText = await response.text();
    console.error("API Error:", {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      errorDetails: errorText,
    });

    return (
      <div className="p-8 max-w-lg mx-auto mt-10 bg-red-50 border border-red-200 rounded-lg">
        <h2 className="text-xl font-bold text-red-700 mb-2">API Error</h2>
        <p className="mb-2">
          <strong>Status:</strong> {response.status} ({response.statusText})
        </p>
        <p className="mb-4">
          <strong>URL:</strong> {response.url}
        </p>
        <div className="p-3 bg-white rounded border border-red-100">
          <p className="font-mono text-sm break-all whitespace-pre-wrap">
            {errorText}
          </p>
        </div>
      </div>
    );
  }

  const { data } = await response.json();
  const { records }: { records: Event[] } = data;

  console.log(records);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Headless API</h1>
        <EventGrid events={records}></EventGrid>
      </main>
    </div>
  );
}
