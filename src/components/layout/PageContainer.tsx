import type { ReactNode } from "react"

import SideBar from "@components/layout/SideBar"

interface ContentProps {
  children: ReactNode
}

export default function PageContainer({ children }: ContentProps) {
  return (
    <>
      <SideBar>
        <nav className="p-2 font-medium">
          <h1 className="font-semibold text-zinc-600">Navigation</h1>
          <p>About</p>
          <p>Resume</p>
          <p>Projects</p>
        </nav>
      </SideBar>
      <main className="ml-2 w-3/4 flex-col pt-14">{children}</main>
    </>
  )
}
