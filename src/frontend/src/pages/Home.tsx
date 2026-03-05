import { Link } from "@tanstack/react-router";

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-7">
            {/* Badge pill */}
            <div className="inline-flex self-start">
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
                style={{ background: "#e6f4f4", color: "#0d6e6e" }}
              >
                TMU AI Ecosystem · Global Social Medicine
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-display">
              Health for Every{" "}
              <em className="not-italic" style={{ color: "#0d6e6e" }}>
                Human Life
              </em>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              EcoGSM is a digital-first, community-owned health ecosystem —
              combining AI, telehealth, community health workers, and
              sustainable finance to deliver accessible care for Africa and the
              underserved worldwide.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link to="/ecosystem">
                <button
                  type="button"
                  data-ocid="hero.primary_button"
                  className="px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ background: "#0d6e6e" }}
                >
                  Explore the Ecosystem
                </button>
              </Link>
              <Link to="/for-governments">
                <button
                  type="button"
                  data-ocid="hero.secondary_button"
                  className="px-6 py-3 rounded-full font-semibold text-sm border-2 bg-white transition-all hover:bg-opacity-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ borderColor: "#0d6e6e", color: "#0d6e6e" }}
                >
                  For Governments
                </button>
              </Link>
              <Link to="/for-partners">
                <button
                  type="button"
                  data-ocid="hero.secondary_button"
                  className="px-6 py-3 rounded-full font-semibold text-sm border-2 bg-white transition-all hover:bg-opacity-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ borderColor: "#0d6e6e", color: "#0d6e6e" }}
                >
                  Become a Partner
                </button>
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-0 pt-2 mt-2 border-t border-gray-100">
              {[
                { value: "4+", label: "Countries Targeted" },
                { value: "6", label: "Integrated Solutions" },
                { value: "5+", label: "Languages Supported" },
              ].map((stat, idx) => (
                <div key={stat.label} className="flex items-center">
                  {idx > 0 && (
                    <div
                      className="w-px h-10 mx-6"
                      style={{ background: "#d1e8e8" }}
                    />
                  )}
                  <div className="flex flex-col">
                    <span
                      className="text-2xl font-bold leading-none"
                      style={{ color: "#0d6e6e" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-500 mt-1 whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — blob shape + image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Organic blob background */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 560 560"
                className="w-[480px] h-[480px] lg:w-[540px] lg:h-[540px]"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Decorative teal blob shape"
              >
                <title>Decorative teal blob shape</title>
                <path
                  d="M280,60 C360,55 440,100 490,175 C540,250 545,350 500,425 C455,500 360,540 270,535 C180,530 90,490 50,410 C10,330 20,215 75,145 C130,75 200,65 280,60 Z"
                  fill="#e6f4f4"
                />
              </svg>
            </div>

            {/* Hero image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl w-full max-w-[520px]">
              <img
                src="/assets/generated/hero-community-health.dim_700x560.jpg"
                alt="Community health workers in rural Africa using smartphones with patients"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Why EcoGSM ───────────────────────────────────────────────────

const challengeCards = [
  {
    icon: "🌍",
    title: "Billions Left Out",
    text: "Billions of people live without reliable access to healthcare. Hospitals are distant, clinics are overwhelmed, and many communities lack infrastructure for modern medical systems.",
  },
  {
    icon: "📱",
    title: "Technology Is Ready",
    text: "Smartphones, satellite internet, and AI are now powerful enough to change that. EcoGSM harnesses these technologies for real low-resource environments.",
  },
  {
    icon: "🤝",
    title: "Community Owned",
    text: "Sustainable, inclusive, and scalable. EcoGSM helps countries accelerate toward universal health coverage without waiting decades.",
  },
];

function WhyEcoGSM() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#c8972e" }}
          >
            The Challenge
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-2xl leading-tight font-display">
            Why the world needs an Ecosystem for Global Social Medicine
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challengeCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-4"
            >
              <span className="text-4xl" role="img" aria-label={card.title}>
                {card.icon}
              </span>
              <h3 className="text-xl font-bold text-gray-900 font-display">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Who It Serves ─────────────────────────────────────────────────

const serveCards = [
  {
    icon: "👤",
    title: "For Citizens",
    text: "Affordable trusted health advice in your language, anytime.",
  },
  {
    icon: "👩‍⚕️",
    title: "For Health Workers",
    text: "AI tools and remote support to care for more patients safely.",
  },
  {
    icon: "🏥",
    title: "For Clinics & Hospitals",
    text: "Digital triage, teleconsults and data tools for quality care.",
  },
  {
    icon: "🏛️",
    title: "For Governments & NGOs",
    text: "A customizable digital backbone for national social medicine.",
  },
  {
    icon: "💼",
    title: "For Investors & Funders",
    text: "Impact-oriented financing anchored in real health services.",
  },
];

function WhoItServes() {
  return (
    <section className="w-full py-20" style={{ background: "#e6f4f4" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#c8972e" }}
          >
            Who It Serves
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-display">
            EcoGSM works for everyone in the health ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {serveCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-3"
            >
              <span className="text-3xl" role="img" aria-label={card.title}>
                {card.icon}
              </span>
              <h3 className="text-lg font-bold text-gray-900 font-display">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Solutions Preview ────────────────────────────────────────────

const solutionCards = [
  {
    icon: "🤖",
    title: "Morshid",
    text: "AI health assistant for triage and guidance, 24/7 multilingual.",
  },
  {
    icon: "📡",
    title: "Vospital",
    text: "Virtual hospital for teleconsultations and specialist referrals.",
  },
  {
    icon: "📚",
    title: "Etitude",
    text: "Health education for schools, communities and CHWs.",
  },
  {
    icon: "🏘️",
    title: "CHW Tools",
    text: "Digital toolkit for community health workers.",
  },
  {
    icon: "⌨️",
    title: "TMU-KL",
    text: "Predictive text for African and regional languages.",
  },
  {
    icon: "⚙️",
    title: "TMU Platform",
    text: "Secure backbone: identity, payments, APIs, monitoring.",
  },
];

function SolutionsPreview() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#c8972e" }}
          >
            Our Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-display">
            Six integrated solutions, one connected ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className="bg-white shadow-sm rounded-r-2xl p-6 flex flex-col gap-3"
              style={{ borderLeft: "4px solid #0d6e6e" }}
            >
              <span className="text-3xl" role="img" aria-label={card.title}>
                {card.icon}
              </span>
              <h3 className="text-lg font-bold text-gray-900 font-display">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/solutions">
            <button
              type="button"
              data-ocid="solutions.primary_button"
              className="px-8 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ background: "#0d6e6e" }}
            >
              View All Solutions
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Countries ─────────────────────────────────────────────────────

const countryPills = [
  { flag: "🇷🇼", label: "Rwanda" },
  { flag: "🇳🇪", label: "Niger" },
  { flag: "🇲🇦", label: "Morocco" },
  { flag: "🇳🇬", label: "Nigeria" },
  { flag: "🇰🇪", label: "Kenya" },
  { flag: null, label: "+ More Coming" },
];

function Countries() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "#c8972e" }}
        >
          Country Programs
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-display mb-10">
          Expanding across Africa and the Global South
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {countryPills.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white"
              style={{ background: "#0d6e6e" }}
            >
              {pill.flag && (
                <span role="img" aria-hidden="true">
                  {pill.flag}
                </span>
              )}
              {pill.label}
            </span>
          ))}
        </div>

        <Link to="/country-deployments">
          <button
            type="button"
            data-ocid="countries.primary_button"
            className="px-8 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ background: "#0d6e6e" }}
          >
            View Country Deployments
          </button>
        </Link>
      </div>
    </section>
  );
}

// ─── Section 6: Final CTA ─────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section
      className="w-full py-20 text-white text-center"
      style={{ background: "#094f4f" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 font-display">
          Be part of the next generation of social medicine.
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10">
          Whether you are a policymaker, healthcare provider, NGO, or
          mission-driven investor, EcoGSM gives you a practical,
          technology-enabled way to expand healthcare access and build resilient
          communities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <button
              type="button"
              data-ocid="cta.primary_button"
              className="px-8 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ background: "white", color: "#0d6e6e" }}
            >
              Schedule a Strategy Call
            </button>
          </Link>
          <Link to="/join">
            <button
              type="button"
              data-ocid="cta.secondary_button"
              className="px-8 py-3 rounded-full font-semibold text-sm border-2 border-white text-white bg-transparent transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              Join the Movement
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyEcoGSM />
      <WhoItServes />
      <SolutionsPreview />
      <Countries />
      <FinalCTA />
    </main>
  );
}
