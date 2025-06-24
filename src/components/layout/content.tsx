import type { ReactNode } from "react"
import clsx from "clsx"

interface ContentProps {
  children?: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <main
      className={clsx(
        "z-0 my-4 flex-col space-y-4 px-2 pt-14 sm:pt-16 sm:pb-2",
        "bg-zinc-50 sm:bg-zinc-100 dark:bg-zinc-950 dark:sm:bg-zinc-900",
        "border-0 sm:border sm:border-zinc-200 dark:border-zinc-800",
        "sm:rounded-4xl sm:shadow-xl"
      )}
    >
      {children}
    </main>
  )
}
