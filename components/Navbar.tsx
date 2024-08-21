import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
              MyPortfolio
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-8 hidden md:flex">
          <Link href="/coding">
            Coding
          </Link>
          <Link href="/multimedia">
            Multimedia
          </Link>
          <Link href="/crafting">
            Crafting
          </Link>
          <Link href="#about">
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
