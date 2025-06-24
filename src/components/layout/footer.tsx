export default function Footer() {
  const currentYear = new Date().getFullYear().toString()
  return (
    <footer className="my-4 rounded-4xl">
      <p className="flex items-center justify-center">
        © {currentYear} Michael Hwang. All rights reserved.
      </p>
    </footer>
  )
}
