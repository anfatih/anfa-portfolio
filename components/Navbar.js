"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll spy: update active menu
  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg tracking-wide">Anfatih.</h1>

          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-200 transition"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* SIDEBAR */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed top-20 right-6 w-64 bg-white shadow-2xl rounded-2xl z-50 p-8"
          >
            {/* CLOSE BUTTON */}
            <div className="flex justify-end mb-6">
              <motion.button
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 90 }}
                className="p-2 rounded-lg transition hover:bg-red-100 hover:text-red-500"
              >
                <X size={26} />
              </motion.button>
            </div>

            {/* MENU */}
            <ul className="space-y-6 text-lg font-mono tracking-wide">
              {["home", "about", "skills", "experience", "projects"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleScrollTo(id)}
                    className={`transition hover:text-blue-600 ${
                      activeSection === id ? "text-blue-600 font-bold" : ""
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}