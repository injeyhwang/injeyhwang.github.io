import Image from "next/image"

export default function Memoji() {
  return (
    <div className="relative size-6 rounded-md bg-linear-to-b from-sky-400 to-blue-700 shadow">
      <Image src="/memoji.png" fill alt="Picture of Michael Hwang" />
    </div>
  )
}
