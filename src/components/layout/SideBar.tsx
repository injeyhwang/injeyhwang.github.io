import { ReactNode } from "react"

import WindowButtons from "@components/ui/WindowButtons"

interface SideBarProps {
  children: ReactNode
}

export default function SideBar({ children }: SideBarProps) {
  return (
    <aside className="w-1/4 flex-col rounded-3xl border bg-sky-100 p-4 sm:border-sky-200 sm:shadow">
      <WindowButtons />
      {children}
    </aside>
  )
}
