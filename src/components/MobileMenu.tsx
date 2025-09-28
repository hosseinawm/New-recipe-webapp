import type { MobileMenuProps } from "@/types/navbar";

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-black/30 dark:bg-black/80 dark:text-gray-300 z-40 flex items-center justify-center
         ${
           menuOpen
             ? "h-screen opacity-100 pointer-events-auto "
             : "h-0 opacity-0 pointer-events-none"
         }`}
    >
      <button
        className="absolute top-3 right-9 text-3xl focus:outline-none cursor-pointer"
        onClick={() => {
          setMenuOpen(false);
        }}
        aria-label="Close Menu"
      >
        &times;
      </button>

      <div className="flex flex-col items-center gap-6 text-xl">
        <a
          onClick={() => {
            setMenuOpen(false);
          }}
          href="#"
        >
          Login/Register
        </a>
        <a
          onClick={() => {
            setMenuOpen(false);
          }}
          href="#"
        >
          Home
        </a>
        <a
          onClick={() => {
            setMenuOpen(false);
          }}
          href="#"
        >
          Recipes
        </a>
        <a
          onClick={() => {
            setMenuOpen(false);
          }}
          href="#"
        >
          Favorites
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
