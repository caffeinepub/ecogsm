import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Solutions", to: "/solutions" },
  { label: "For Governments", to: "/for-governments" },
  { label: "For Partners", to: "/for-partners" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 font-bold text-xl shrink-0"
          style={{ color: "#0d6e6e" }}
          data-ocid="nav.link"
        >
          🌍 EcoGSM
        </Link>

        {/* Desktop center nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              className={[
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive(link.to)
                  ? "text-[#0d6e6e] font-semibold"
                  : "text-gray-600 hover:text-[#0d6e6e] hover:bg-teal-50",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            to="/join"
            data-ocid="nav.primary_button"
            className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: "#0d6e6e" }}
          >
            Join the Movement
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#0d6e6e] hover:bg-teal-50 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              onClick={() => setMobileOpen(false)}
              className={[
                "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                isActive(link.to)
                  ? "text-[#0d6e6e] bg-teal-50 font-semibold"
                  : "text-gray-600 hover:text-[#0d6e6e] hover:bg-teal-50",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/join"
            data-ocid="nav.primary_button"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: "#0d6e6e" }}
          >
            Join the Movement
          </Link>
        </div>
      )}
    </header>
  );
}
