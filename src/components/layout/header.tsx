import Link from "next/link"

import BurgerMenu from "@components/ui/BurgerMenu"
import Memoji from "@components/ui/Memoji"

import EmailIcon from "@svgs/EmailIcon"
import GitHubIcon from "@svgs/GitHubIcon"
import LinkedinIcon from "@svgs/LinkedinIcon"

export default function Header() {
  return (
    <header className="absolute top-0 right-0 left-0 z-10 px-2 py-2">
      <nav className="flex items-center justify-between">
        {/* Left Group */}
        <div>
          <div className="sm:hidden">
            <BurgerMenu />
          </div>
        </div>

        {/* Center Group */}
        <Link href="/" className="flex space-x-2">
          <Memoji />
          <p className="font-semibold text-shadow-xs">Michael Hwang</p>
        </Link>

        {/* Right Group */}
        <div className="hidden space-x-2 rounded-full border border-sky-200 bg-sky-100 p-2 shadow sm:flex">
          <Link href="mailto:michael@injeyhwang.com" title="Send me an email!">
            <EmailIcon className="size-6 duration-300 ease-out hover:text-blue-600" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/injeyhwang/"
            title="Let's connect!"
          >
            <LinkedinIcon className="size-6 duration-300 ease-out hover:text-blue-600" />
          </Link>
          <Link href="https://github.com/injeyhwang/" title="Let's code!">
            <GitHubIcon className="size-6 duration-300 ease-out hover:text-blue-600" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
