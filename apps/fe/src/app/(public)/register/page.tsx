"use client";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DBsSqg2KnUH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button, Label, Input } from "@/components/ui";
import Link from "next/link";

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 h-screen w-full">
      <div className="bg-gray-100 dark:bg-gray-950 flex flex-col justify-center">
        <div className="max-w-[450px] w-full mx-auto p-8">
          <h2 className="text-4xl font-bold mb-8">Create an Account</h2>
          <form className="space-y-4">
            <div>
              <Label
                className="text-gray-600 dark:text-gray-400"
                htmlFor="name"
              >
                Name
              </Label>
              <Input
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                id="name"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div>
              <Label
                className="text-gray-600 dark:text-gray-400"
                htmlFor="email"
              >
                Email
              </Label>
              <Input
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div>
              <Label
                className="text-gray-600 dark:text-gray-400"
                htmlFor="password"
              >
                Password
              </Label>
              <Input
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <Button className="w-full">Register</Button>
          </form>
          <div className="flex justify-center items-center mt-4">
            <div className="text-gray-600 dark:text-gray-400">
              Already have an account?
              <Link
                className="text-gray-900 dark:text-gray-300 hover:underline"
                href="/login"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
