import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="size-3 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"
    >
      <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
    </svg>
  )
}

export default function Header() {
  return (
    <header
      className={clsx(
        "fixed top-4 right-0 left-0 z-10 mx-2 max-w-[750px] p-4 sm:top-6 sm:mx-auto",
        "backdrop-blur-2xl",
        "border border-zinc-200 dark:border-zinc-800",
        "rounded-full shadow-xl"
      )}
    >
      <nav className="flex items-center justify-between">
        <Link href="/" className="group flex space-x-2">
          <span className="h-4 w-4 rounded-full border border-red-500 bg-red-400 shadow-xl" />
          <span className="h-4 w-4 rounded-full border border-yellow-500 bg-yellow-400 shadow-xl" />
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-green-500 bg-green-400 shadow-xl">
            <HomeIcon />
          </span>
        </Link>
        <div className="flex items-center justify-center space-x-2">
          <div className="relative h-6 w-6 rounded-md bg-linear-to-b from-sky-400 to-blue-700">
            <Image src="/memoji.png" fill alt="Picture of Michael Hwang" />
          </div>
          <p className="font-bold">Michael Hwang</p>
        </div>
        <div className="hidden space-x-4 sm:block">
          <Link href="/resume" className="font-medium hover:text-blue-600">
            Resume
          </Link>
          <Link href="/blog" className="font-medium hover:text-blue-600">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  )
}
