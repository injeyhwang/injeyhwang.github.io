import { ReactNode } from "react"

interface WindowContainerProps {
  children: ReactNode
}

export default function WindowContainer({ children }: WindowContainerProps) {
  return (
    <div className="relative flex rounded-4xl border border-neutral-200 bg-neutral-50 p-2 shadow">
      {children}
    </div>
  )
}
