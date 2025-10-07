import { useState } from "react";

//components
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className={`min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-900 dark:text-gray-100 ${
          menuOpen && "blur-sm"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero />
      </div>
    </>
  );
}

export default App;
