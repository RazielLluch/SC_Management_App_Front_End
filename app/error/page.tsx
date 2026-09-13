export default async function ErrorPage({
  searchParams
}: { searchParams: Promise<{ status?: string; message?: string }> }) {

  const { status, message } = await searchParams;

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-8xl font-bold">{status}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, something went wrong: <q>{message}</q>
        </p>
      </div>
    </div>
  )
}