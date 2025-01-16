export default async function Embed() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full">
        <h1 className="text-4xl font-bold">Embed iFrame</h1>
        <iframe
          src="https://wizdemo.tightknit.vercel.app/embed/events?display-calendar-filters=true"
          className="w-full h-screen"
          title="Events List"
        ></iframe>
      </main>
    </div>
  );
}
