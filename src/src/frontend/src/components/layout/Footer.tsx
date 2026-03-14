import { Link } from "@tanstack/react-router";

const platformLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Solutions", to: "/solutions" },
  { label: "Technology", to: "/technology" },
];

const engageLinks = [
  { label: "For Governments", to: "/for-governments" },
  { label: "For Partners & NGOs", to: "/for-partners" },
  { label: "Use Cases & Impact", to: "/use-cases" },
  { label: "Join the Movement", to: "/join" },
  { label: "Contact", to: "/contact" },
];

const contactEmails = [
  "info@ecogsm.com",
  "partners@ecogsm.com",
  "media@ecogsm.com",
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#075E54" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold tracking-tight">🌍 EcoGSM</span>
            <p
              className="text-white/70 leading-relaxed max-w-xs"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Social medicine. Digitally enabled. Community owned.
            </p>
          </div>

          {/* Column 2 — Platform */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
              Platform
            </h3>
            <ul className="flex flex-col gap-2.5">
              {platformLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid="nav.link"
                    className="text-white/80 hover:text-white transition-colors"
                    style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Engage */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
              Engage
            </h3>
            <ul className="flex flex-col gap-2.5">
              {engageLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid="nav.link"
                    className="text-white/80 hover:text-white transition-colors"
                    style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5">
              {contactEmails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="text-white/80 hover:text-white transition-colors break-all"
                    style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t text-center py-5 px-4"
        style={{ borderColor: "rgba(255,255,255,0.12)" }}
      >
        <p className="text-xs text-white/50">
          © 2025 EcoGSM · Part of the TMU AI Ecosystem · www.ecogsm.com
        </p>
      </div>
    </footer>
  );
}
