export default function BurgerMenu() {
  return (
    <button className="flex-col items-center justify-center">
      <div className="mb-1 h-1 w-6 rounded-full border border-red-500 bg-red-400 shadow" />
      <div className="mb-1 h-1 w-6 rounded-full border border-yellow-500 bg-yellow-400 shadow" />
      <div className="h-1 w-6 rounded-full border border-green-500 bg-green-400 shadow" />
    </button>
  )
}
