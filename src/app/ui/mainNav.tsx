import Link from "next/link";

export default function MainNav() {
  return (
    <div className="flex min-h-12 h-12 items-center px-4 bg-green-950 text-white shadow-md">
      {/* Move to MainNav component */}
      <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-green-200"
        >
          Ticket Simulation
        </Link>
      </nav>
    </div>
  );
}
