export default function ForGovernments() {
  const policyItems = [
    "Universal Health Coverage (UHC) roadmaps",
    "National Digital Health Strategies",
    "Digital Public Infrastructure (DPI) initiatives",
    "Social protection and poverty reduction programs",
    "Youth empowerment and women's health strategies",
  ];

  const benefitCards = [
    { icon: "💰", label: "Reduce National Healthcare Costs" },
    { icon: "🌐", label: "Modernize Health Systems" },
    { icon: "💼", label: "Create Digital Jobs" },
    { icon: "📍", label: "Extend Care to the Last Mile" },
    { icon: "📊", label: "Strengthen Health Data Systems" },
    { icon: "🔍", label: "Improve Early Detection & Analytics" },
  ];

  const deploymentModels = [
    {
      num: "1",
      title: "Pilot Program",
      text: "Start with one region, focusing on specific use cases such as maternal health or schools.",
    },
    {
      num: "2",
      title: "Phased National Rollout",
      text: "Start with high-need districts and scale progressively as evidence builds.",
    },
    {
      num: "3",
      title: "Full National Deployment",
      text: "Integrate EcoGSM as the digital front door for national social medicine programs.",
    },
  ];

  const securityItems = [
    {
      icon: "🔒",
      id: "privacy",
      text: "Privacy by design — data protection and access control built in from the start",
    },
    {
      icon: "📋",
      id: "traceability",
      text: "Full traceability and audit trails",
    },
    {
      icon: "👁️",
      id: "ethics",
      text: "Ethical AI principles and human oversight at all times",
    },
  ];

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        data-ocid="govts.hero.section"
        style={{ backgroundColor: "#128C7E" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: text */}
          <div className="flex-1">
            <p
              className="uppercase mb-4"
              style={{
                color: "#FFD700",
                fontWeight: 800,
                fontSize: "16px",
                letterSpacing: "0.18em",
              }}
            >
              FOR GOVERNMENTS
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontWeight: 800 }}
            >
              A Strategic Partner for National Social Medicine
            </h1>
            <p
              className="leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              EcoGSM gives ministries of health, ICT, education, and social
              development a practical, technology-enabled way to extend health
              coverage, reduce inequality, and modernize service delivery.
            </p>
          </div>

          {/* Right: image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/generated/govt-hero.dim_800x500.jpg"
              alt="Government officials reviewing digital health dashboards in a modern meeting room"
              className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: POLICY ALIGNMENT */}
      <section
        data-ocid="govts.policy.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-bold text-gray-900 mb-10"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Aligned with Your National Priorities
          </h2>
          <ul className="space-y-5">
            {policyItems.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex-shrink-0 font-bold text-xl"
                  style={{ color: "#25D366" }}
                >
                  ✔
                </span>
                <span
                  className="text-gray-800"
                  style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3: BENEFITS */}
      <section
        data-ocid="govts.benefits.section"
        style={{ backgroundColor: "#075E54" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold text-white mb-12 text-center"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Why Governments Choose EcoGSM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitCards.map((card, i) => (
              <div
                key={card.label}
                data-ocid={`govts.benefits.card.${i + 1}`}
                className="rounded-2xl p-7 flex flex-col items-center text-center shadow-md"
                style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
              >
                <span className="text-5xl mb-4">{card.icon}</span>
                <p
                  className="font-bold text-gray-900 leading-snug"
                  style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DEPLOYMENT MODELS */}
      <section
        data-ocid="govts.deployment.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold text-gray-900 mb-12 text-center"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Flexible Deployment Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deploymentModels.map((card, i) => (
              <div
                key={card.num}
                data-ocid={`govts.deployment.card.${i + 1}`}
                className="p-7 relative"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderLeft: "3px solid #25D366",
                  borderRadius: "12px",
                }}
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm mb-5 inline-flex"
                  style={{ backgroundColor: "#25D366" }}
                >
                  {card.num}
                </span>
                <h3
                  className="font-bold text-gray-900 mb-3"
                  style={{ fontSize: "1.4rem", fontWeight: 700 }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SECURITY & GOVERNANCE */}
      <section
        data-ocid="govts.security.section"
        style={{ backgroundColor: "#128C7E" }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-bold text-white mb-12 text-center"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Governance, Security &amp; Data Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityItems.map((item, i) => (
              <div
                key={item.id}
                data-ocid={`govts.security.item.${i + 1}`}
                className="flex flex-col items-center text-center gap-4"
              >
                <span className="text-5xl">{item.icon}</span>
                <p
                  className="text-white leading-relaxed"
                  style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section
        data-ocid="govts.cta.section"
        style={{ backgroundColor: "#FFD700" }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-bold mb-10"
            style={{ color: "#1a2e2e", fontSize: "2.4rem", fontWeight: 800 }}
          >
            Ready to explore EcoGSM for your country?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              data-ocid="govts.cta.primary_button"
              className="px-8 py-4 rounded-full font-bold text-white transition-opacity hover:opacity-90 text-base"
              style={{ backgroundColor: "#075E54", fontWeight: 700 }}
            >
              Request a Government Briefing
            </a>
            <a
              href="/contact"
              data-ocid="govts.cta.secondary_button"
              className="px-8 py-4 rounded-full font-bold transition-opacity hover:opacity-90 text-base"
              style={{
                backgroundColor: "white",
                color: "#1a2e2e",
                fontWeight: 700,
              }}
            >
              Download Government Overview (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
