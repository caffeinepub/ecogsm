export default function ForPartners() {
  const partnerBadges = [
    "International and local NGOs",
    "Faith-based and community organizations",
    "Telecom operators and ISPs",
    "Satellite connectivity providers (e.g. Starlink)",
    "Device manufacturers and distributors",
    "Pharmaceutical and medical supply chain",
    "Development agencies and donors",
    "Impact investors and blended finance platforms",
  ];

  const whyCards = [
    {
      icon: "🚀",
      title: "Accelerate Impact",
      text: "Use an existing tested digital backbone. Deploy faster, reach more people, lower risk.",
    },
    {
      icon: "📊",
      title: "Better Data & Reporting",
      text: "Real-time dashboards, impact metrics, and transparent accountability to satisfy donors.",
    },
    {
      icon: "♾️",
      title: "Lasting Impact",
      text: "Build programs that outlive grants. EcoGSM's financing models create sustainability beyond project cycles.",
    },
  ];

  const partnershipModels = [
    {
      icon: "🔗",
      title: "Program Integration",
      text: "Integrate EcoGSM into your existing service delivery.",
    },
    {
      icon: "🛠️",
      title: "Co-Design",
      text: "Co-design modules and interventions for specific health challenges.",
    },
    {
      icon: "💰",
      title: "Co-Financing",
      text: "Participate in blended finance and results-based funding models.",
    },
    {
      icon: "🔬",
      title: "Research & Evaluation",
      text: "Partner on research, impact evaluation, and innovation.",
    },
  ];

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        data-ocid="partners.hero.section"
        style={{ backgroundColor: "#e6f4f4" }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto flex flex-row items-stretch gap-8">
          {/* Gold accent bar */}
          <div
            className="flex-shrink-0 rounded-full hidden sm:block"
            style={{
              width: "4px",
              minHeight: "80px",
              backgroundColor: "#c8972e",
              alignSelf: "stretch",
            }}
          />
          {/* Text block */}
          <div className="flex-1">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "#c8972e" }}
            >
              FOR PARTNERS &amp; NGOs
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              A Platform for Collaboration and Scaled Impact
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              EcoGSM is built to partner. We provide the digital rails and
              operational framework that allow your programs to reach more
              people, more efficiently, with better data and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE PARTNER WITH */}
      <section
        data-ocid="partners.who.section"
        style={{ backgroundColor: "#0d6e6e" }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Who Can Partner with EcoGSM?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {partnerBadges.map((badge, i) => (
              <span
                key={badge}
                data-ocid={`partners.who.badge.${i + 1}`}
                className="px-5 py-2 rounded-full font-semibold text-sm"
                style={{ backgroundColor: "white", color: "#0d6e6e" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY PARTNER */}
      <section
        data-ocid="partners.why.section"
        style={{ backgroundColor: "#e6f4f4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Partner with EcoGSM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <div
                key={card.title}
                data-ocid={`partners.why.card.${i + 1}`}
                className="bg-white rounded-2xl p-7 shadow-sm"
                style={{ borderLeft: "4px solid #0d6e6e" }}
              >
                <span className="text-5xl mb-5 block">{card.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PARTNERSHIP MODELS */}
      <section
        data-ocid="partners.models.section"
        style={{ backgroundColor: "#0d6e6e" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Models of Partnership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipModels.map((item, i) => (
              <div
                key={item.title}
                data-ocid={`partners.models.item.${i + 1}`}
                className="flex flex-col items-center text-center gap-4 rounded-2xl p-7"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="text-5xl">{item.icon}</span>
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p
                  style={{ color: "rgba(255,255,255,0.85)" }}
                  className="text-sm leading-relaxed"
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section
        data-ocid="partners.cta.section"
        style={{ backgroundColor: "#094f4f" }}
        className="py-20 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Let&apos;s build something that lasts.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              data-ocid="partners.cta.primary_button"
              className="px-8 py-4 rounded-xl font-semibold transition-opacity hover:opacity-90 text-base"
              style={{ backgroundColor: "#c8972e", color: "#1a2e2e" }}
            >
              Discuss a Partnership
            </a>
            <a
              href="/contact"
              data-ocid="partners.cta.secondary_button"
              className="px-8 py-4 rounded-xl font-semibold transition-opacity hover:opacity-90 text-base border-2 border-white text-white"
              style={{ backgroundColor: "transparent" }}
            >
              Download Partner Brief (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
