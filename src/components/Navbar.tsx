//icons
import { CookingPot } from "lucide-react";

//types
import type { MobileMenuProps } from "@/types/navbar";

const Navbar = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <nav
      className="bg-gray-200 shadow-md text-gray-800 dark:bg-slate-700 dark:shadow-none dark:text-white 
    fixed h-16 w-full z-50 flex items-center justify-between"
    >
      <div className="flex flex-1 w-60 items-center gap-2 font-bold text-xl sm:text-2xl md:text-3xl ml-6 md:ml-10 bg-gradient-to  hover:text-orange-600 hover:dark:text-orange-400">
        <CookingPot />
        <h1 className="flex w-60 bg-gradient-to-r from-gray-700 to-orange-600 dark:from-gray-300 dark:to-orange-400 bg-clip-text text-transparent hover:cursor-pointer">
          Recipe App
        </h1>
      </div>
      <div className="hidden lg:flex flex-1 pl-18 items-center justify-center gap-10 text-xl">
        <a
          className="hover:text-orange-600 hover:dark:text-orange-400 transition-all hover:-translate-y-0.5"
          href="#"
        >
          Home
        </a>
        <a
          className="hover:text-orange-600 hover:dark:text-orange-400 transition-all hover:-translate-y-0.5"
          href="#"
        >
          Recipes
        </a>
        <a
          className="hover:text-orange-600 hover:dark:text-orange-400 transition-all hover:-translate-y-0.5"
          href="#"
        >
          Favorites
        </a>
      </div>
      <div className="hidden lg:flex flex-1 justify-end w-60 mr-10 gap-6">
        <button className="bg-orange-400 hover:bg-orange-500 text-white rounded-full px-4 py-2 hover:cursor-pointer transition-all hover:-translate-y-0.5">
          Login/Register
        </button>
      </div>

      {/* mobile menu */}
      <div
        className="flex lg:hidden cursor-pointer flex-1 justify-end mr-10"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
