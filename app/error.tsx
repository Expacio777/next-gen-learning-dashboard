"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h2 className="mb-4 text-2xl font-bold">
        Failed to load dashboard
      </h2>

      <p className="mb-6 text-zinc-400">
        Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-xl bg-indigo-600 px-4 py-2"
      >
        Retry
      </button>
    </div>
  );
}