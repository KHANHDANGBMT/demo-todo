/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ye4eEyQICgb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 md:px-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>
        <p className="text-2xl text-gray-500 dark:text-gray-400">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
      <Link
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="#"
      >
        Go back home
      </Link>
    </main>
  );
}
