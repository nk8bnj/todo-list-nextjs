import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-500 h-16 flex items-center justify-center max-sm:h-24 sticky top-0 opacity-95">
      <div className="container mx-auto flex max-sm:flex-col items-center justify-between px-4">
        <div className="flex space-x-4 max-sm:m-3">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About Me
          </Link>
        </div>
        <div className="flex space-x-4 max-sm:mb-3">
          <input
            type="text"
            className="w-60 border border-gray-50 rounded px-2 py-1 text-black outline-none"
            placeholder="Todo list title"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
            Add
          </button>
        </div>
      </div>
    </header>
  );
}
