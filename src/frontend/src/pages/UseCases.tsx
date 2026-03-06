const useCaseCards = [
  {
    icon: "🏥",
    title: "Rural Clinics — Doing More with Limited Staff",
    scenario:
      "A small rural clinic serves thousands of people with only a handful of nurses and one visiting doctor.",
    helps: [
      "Vospital provides first-line triage and teleconsultations for high-risk cases",
      "Vospital connects the clinic to remote doctors and specialists",
      "CHW tools support home visits for follow-up and vaccinations",
      "TMU Platform tracks service usage and resource needs",
    ],
    impact: [
      "Reduced unnecessary clinic visits",
      "Shorter wait times for serious cases",
      "Better continuity of care after discharge",
    ],
  },
  {
    icon: "🏫",
    title: "Schools — Health, Learning, and Protection",
    scenario:
      "Public schools host large numbers of children but often lack dedicated health staff.",
    helps: [
      "Etitude delivers health education and Vospital enables teleconsults",
    ],
    impact: [
      "Improved health awareness among students",
      "Earlier detection of health issues",
      "Better school-health collaboration",
    ],
  },
  {
    icon: "👩",
    title: "Women's Health — Pregnancy to Postpartum",
    scenario:
      "Pregnant women in rural areas face long travel times for antenatal care.",
    helps: [
      "Vospital provides remote consultations and danger sign alerts",
      "CHWs use tools for home visits and vital sign recording",
    ],
    impact: [
      "Increased antenatal and postnatal follow-up",
      "Earlier detection of complications",
      "Better outcomes for mothers and babies",
    ],
  },
  {
    icon: "🆘",
    title: "Refugee Camps — Rapid Deployment in Crisis",
    scenario:
      "In displaced communities, health systems are temporary and fragmented.",
    helps: [
      "Rapid deployment via mobile and shared access points",
      "Satellite-enabled connectivity and offline capabilities",
      "Multilingual AI support and structured referral chains",
    ],
    impact: [
      "Healthcare access deployed in days",
      "Works on solar power",
      "Continuity across population movements",
    ],
  },
  {
    icon: "🏛️",
    title: "National Programs — Digital Front Door",
    scenario:
      "Governments need cost-effective extension of health coverage to rural populations.",
    helps: [
      "EcoGSM as national digital entry point for social medicine",
      "CHWs + Vospital telehealth + Etitude education working as one system",
      "Dashboards for health ministry planning and monitoring",
    ],
    impact: [
      "Better use of limited human resources",
      "Data-driven planning and resource allocation",
      "Scalable at national level",
    ],
  },
];

const frameworkCards = [
  {
    icon: "📍",
    title: "Access",
    text: "Users served, consultations completed, CHW visits conducted",
  },
  {
    icon: "🎯",
    title: "Quality",
    text: "Protocol adherence, follow-up rates, care continuity",
  },
  {
    icon: "🧭",
    title: "Equity",
    text: "Rural vs urban reach, gender balance, vulnerable group inclusion",
  },
  {
    icon: "🏗️",
    title: "System",
    text: "Reduced avoidable admissions, shorter wait times",
  },
  {
    icon: "💸",
    title: "Financial",
    text: "Cost per user/outcome, leverage of funds invested",
  },
];

export default function UseCases() {
  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        data-ocid="usecases.hero.section"
        style={{ backgroundColor: "#128C7E" }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="uppercase mb-4"
            style={{
              color: "#FFD700",
              fontWeight: 800,
              fontSize: "16px",
              letterSpacing: "0.18em",
            }}
          >
            USE CASES &amp; IMPACT
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontWeight: 800 }}
          >
            Real-World Scenarios, Tangible Impact
          </h1>
          <p
            className="text-white/90 leading-relaxed max-w-3xl mx-auto"
            style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            EcoGSM is designed for practical environments where health access
            gaps are most acute. Below are representative use cases illustrating
            how the ecosystem creates value for patients, health workers,
            ministries, and funders.
          </p>
        </div>
      </section>

      {/* SECTION 2: USE CASE CARDS */}
      <section
        data-ocid="usecases.cards.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {useCaseCards.map((card, i) => (
            <div
              key={card.title}
              data-ocid={`usecases.cards.item.${i + 1}`}
              className="overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderTop: "3px solid #25D366",
                borderRadius: "12px",
              }}
            >
              {/* Card Header */}
              <div className="px-8 pt-7 pb-5 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{card.icon}</span>
                  <h2
                    className="font-bold text-gray-900"
                    style={{ fontSize: "1.4rem", fontWeight: 700 }}
                  >
                    {card.title}
                  </h2>
                </div>
              </div>

              {/* Card Body — 3 columns on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {/* Scenario */}
                <div className="px-7 py-6">
                  <p
                    className="uppercase mb-3"
                    style={{
                      color: "#FFD700",
                      fontWeight: 800,
                      fontSize: "16px",
                      letterSpacing: "0.18em",
                    }}
                  >
                    Scenario
                  </p>
                  <p
                    className="text-gray-700 italic leading-relaxed"
                    style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                  >
                    "{card.scenario}"
                  </p>
                </div>

                {/* How EcoGSM Helps */}
                <div className="px-7 py-6">
                  <p
                    className="uppercase mb-3"
                    style={{
                      color: "#FFD700",
                      fontWeight: 800,
                      fontSize: "16px",
                      letterSpacing: "0.18em",
                    }}
                  >
                    How EcoGSM Helps
                  </p>
                  <ul className="space-y-2">
                    {card.helps.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-gray-700 leading-relaxed"
                        style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                      >
                        <span
                          className="mt-0.5 flex-shrink-0 font-bold"
                          style={{ color: "#25D366" }}
                        >
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="px-7 py-6">
                  <p
                    className="uppercase mb-3"
                    style={{
                      color: "#FFD700",
                      fontWeight: 800,
                      fontSize: "16px",
                      letterSpacing: "0.18em",
                    }}
                  >
                    Impact
                  </p>
                  <div
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "#e6f9ee" }}
                  >
                    <ul className="space-y-2">
                      {card.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 leading-relaxed"
                          style={{
                            color: "#1a5c30",
                            fontSize: "1.1rem",
                            lineHeight: 1.8,
                          }}
                        >
                          <span className="mt-0.5 flex-shrink-0 font-bold">
                            ✔
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: IMPACT FRAMEWORK */}
      <section
        data-ocid="usecases.framework.section"
        style={{ backgroundColor: "#075E54" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold text-white mb-12 text-center"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Impact Framework: What EcoGSM Measures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {frameworkCards.map((card, i) => (
              <div
                key={card.title}
                data-ocid={`usecases.framework.card.${i + 1}`}
                className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md"
              >
                <span className="text-4xl mb-4">{card.icon}</span>
                <h3
                  className="font-bold mb-2"
                  style={{
                    color: "#25D366",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
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
    </div>
  );
}
