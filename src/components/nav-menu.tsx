import Link from "next/link";

const NavMenu = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Wiz Demo</div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="https://wizdemo.tightknit.vercel.app/events"
              className="hover:text-gray-300"
            >
              Full Site
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-300">
              Headless API
            </Link>
          </li>
          <li>
            <Link href="/embed" className="hover:text-gray-300">
              Embed iFrame
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
