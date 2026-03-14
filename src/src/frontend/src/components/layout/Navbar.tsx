import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const mainLinks = [
  { label: "About", to: "/about" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Solutions", to: "/solutions" },
  { label: "For Governments", to: "/for-governments" },
  { label: "For Partners & NGOs", to: "/for-partners" },
];

const moreLinks = [
  {
    label: "Use Cases & Impact",
    to: "/use-cases",
    borderColor: "#25D366",
  },
  {
    label: "Technology",
    to: "/technology",
    borderColor: "#FFD700",
  },
  {
    label: "Country Deployments",
    to: "/country-deployments",
    borderColor: "#0ea5e9",
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isMoreActive = moreLinks.some((l) => location.pathname === l.to);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close dropdown on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally closing menus when route changes
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 z-50 w-full bg-white"
      style={{ borderBottom: "1px solid #e2e8f0" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 font-bold text-xl shrink-0"
          style={{ color: "#25D366" }}
          data-ocid="nav.link"
        >
          🌍 EcoGSM
        </Link>

        {/* Desktop center nav */}
        <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
          {mainLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              className={[
                "px-2.5 py-2 rounded-md transition-colors whitespace-nowrap",
                isActive(link.to) ? "font-bold" : "text-gray-600 font-semibold",
              ].join(" ")}
              style={{
                fontSize: "1rem",
                fontWeight: isActive(link.to) ? 700 : 600,
                color: isActive(link.to) ? "#25D366" : undefined,
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.to)) {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#25D366";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.to)) {
                  (e.currentTarget as HTMLAnchorElement).style.color = "";
                }
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              data-ocid="nav.more_dropdown"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={[
                "inline-flex items-center gap-1 px-2.5 py-2 rounded-md transition-colors whitespace-nowrap",
                isMoreActive || dropdownOpen
                  ? "font-bold"
                  : "text-gray-600 font-semibold",
              ].join(" ")}
              style={{
                fontSize: "1rem",
                fontWeight: isMoreActive || dropdownOpen ? 700 : 600,
                color: isMoreActive || dropdownOpen ? "#25D366" : undefined,
              }}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              More
              <ChevronDown
                size={13}
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div
                data-ocid="nav.dropdown_menu"
                className="absolute top-full left-0 mt-1 w-60 rounded-xl overflow-hidden z-50"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.12), 0 4px 10px rgba(0,0,0,0.06)",
                  border: "1px solid #e2e8f0",
                }}
              >
                {moreLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid="nav.link"
                    className={[
                      "block px-4 py-3 text-sm transition-colors",
                      isActive(link.to)
                        ? "font-bold bg-[#f0fdf4]"
                        : "font-medium hover:bg-[#f0fdf4]",
                    ].join(" ")}
                    style={{
                      color: "#0f172a",
                      borderLeft: `3px solid ${link.borderColor}`,
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA buttons — "Join the Movement" + "Contact" */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <Link
            to="/join"
            data-ocid="nav.join_button"
            className="inline-flex items-center px-4 py-2 rounded-full font-semibold transition-all whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              backgroundColor: "transparent",
              border: "2px solid #25D366",
              color: "#25D366",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#25D366";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#25D366";
            }}
          >
            Join the Movement
          </Link>
          <Link
            to="/contact"
            data-ocid="nav.primary_button"
            className="inline-flex items-center px-4 py-2 rounded-full font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap"
            style={{
              backgroundColor: "#25D366",
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="xl:hidden p-2 rounded-md text-gray-600 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="xl:hidden border-t px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{
            backgroundColor: "#ffffff",
            borderColor: "#e2e8f0",
          }}
        >
          {mainLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              onClick={() => setMobileOpen(false)}
              className={[
                "block px-3 py-2.5 rounded-md transition-colors",
                isActive(link.to)
                  ? "bg-[#f0fdf4]"
                  : "text-gray-600 font-semibold",
              ].join(" ")}
              style={{
                fontSize: "1rem",
                fontWeight: isActive(link.to) ? 700 : 600,
                color: isActive(link.to) ? "#25D366" : undefined,
              }}
            >
              {link.label}
            </Link>
          ))}
          {/* More links — flat in mobile, with left border colors */}
          {moreLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              onClick={() => setMobileOpen(false)}
              className={[
                "block px-3 py-2.5 rounded-md text-sm transition-colors",
                isActive(link.to)
                  ? "bg-[#f0fdf4]"
                  : "text-gray-600 hover:bg-[#f0fdf4] font-semibold",
              ].join(" ")}
              style={{
                borderLeft: `3px solid ${link.borderColor}`,
                fontSize: "1rem",
                fontWeight: isActive(link.to) ? 700 : 600,
                ...(isActive(link.to) ? { color: "#25D366" } : {}),
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Link
              to="/join"
              data-ocid="nav.join_button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold transition-colors"
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                backgroundColor: "transparent",
                border: "2px solid #25D366",
                color: "#25D366",
              }}
            >
              Join the Movement
            </Link>
            <Link
              to="/contact"
              data-ocid="nav.primary_button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-bold text-white"
              style={{
                backgroundColor: "#25D366",
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
