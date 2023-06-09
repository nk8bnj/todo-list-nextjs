import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-500 h-16 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About Me
          </Link>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            className="w-60 border border-gray-50 rounded px-2 py-1 text-black outline-none"
            placeholder="Todo list title"
          />
          <button className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800">
            Add
          </button>
        </div>
      </div>
    </header>
  );
}
