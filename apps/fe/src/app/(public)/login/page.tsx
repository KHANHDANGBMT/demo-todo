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
      <div className="bg-gray-900 flex flex-col justify-center">
        <div className="max-w-[450px] w-full mx-auto p-8">
          <h2 className="text-4xl font-bold text-white mb-8">Welcome Back!</h2>
          <div className="flex flex-col gap-4">
            <Button className="w-full" variant="outline">
              <ChromeIcon className="mr-2 h-5 w-5" />
              Sign in with Google
            </Button>
            <Button className="w-full" variant="outline">
              <FacebookIcon className="mr-2 h-5 w-5" />
              Sign in with Facebook
            </Button>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400" />
            <span className="flex-shrink mx-4 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-400" />
          </div>
          <form className="space-y-4">
            <div>
              <Label className="text-gray-300" htmlFor="email">
                Email
              </Label>
              <Input
                className="bg-gray-800 border-gray-700 text-gray-300"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div>
              <Label className="text-gray-300" htmlFor="password">
                Password
              </Label>
              <Input
                className="bg-gray-800 border-gray-700 text-gray-300"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <Button className="w-full">Sign In</Button>
          </form>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-400">
              Don't have an account?
              <Link
                className="text-gray-300 hover:text-gray-200"
                href="/register"
              >
                Register
              </Link>
            </div>
            <Link className="text-gray-300 hover:text-gray-200" href="#">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
