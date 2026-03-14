export default function JoinTheMovement() {
  const stakeholderCards = [
    {
      icon: "🙋",
      title: "For Individuals and Community Leaders",
      bullets: [
        "Become a digital health ambassador in your community",
        "Use EcoGSM tools to manage your family's wellbeing",
        "Help spread accurate health information",
        "Participate in pilots and give feedback",
      ],
    },
    {
      icon: "👩‍⚕️",
      title: "For Health Workers and CHWs",
      bullets: [
        "Adopt EcoGSM tools to support your daily work",
        "Join training programs and contribute to improving the tools",
        "Serve as local champions bringing digital health to communities",
      ],
    },
    {
      icon: "🏢",
      title: "For Clinics, NGOs, and Institutions",
      bullets: [
        "Integrate EcoGSM solutions into your service delivery",
        "Co-design programs for specific health challenges",
        "Partner on research, evaluation, and innovation",
      ],
    },
    {
      icon: "🏛️",
      title: "For Governments and Public Institutions",
      bullets: [
        "Explore EcoGSM as part of your national digital health strategy",
        "Run pilots in targeted districts or populations",
        "Align with your broader digital public infrastructure",
      ],
    },
    {
      icon: "💼",
      title: "For Investors, Donors, and Philanthropists",
      bullets: [
        "Support EcoGSM country programs and infrastructure",
        "Participate in innovative financing tied to measurable outcomes",
        "Help unlock sustainable models for global social medicine",
      ],
    },
  ];

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        data-ocid="join.hero.section"
        style={{ backgroundColor: "#128C7E" }}
        className="py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontWeight: 800 }}
          >
            Join the EcoGSM Movement
          </h1>
          <p
            className="leading-relaxed max-w-3xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            EcoGSM is more than a set of tools — it is a movement toward fair,
            accessible, and sustainable social medicine. There are many ways to
            participate, depending on who you are and what you do.
          </p>
        </div>
      </section>

      {/* SECTION 2: STAKEHOLDER CARDS */}
      <section
        data-ocid="join.stakeholders.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="uppercase text-center mb-10"
            style={{
              color: "#FFD700",
              fontWeight: 800,
              fontSize: "16px",
              letterSpacing: "0.18em",
            }}
          >
            WHO CAN JOIN
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {stakeholderCards.map((card, i) => (
              <div
                key={card.title}
                data-ocid={`join.stakeholder.card.${i + 1}`}
                className={`rounded-xl p-8 w-full flex flex-col items-start${
                  i === 4 ? " md:col-span-2 md:max-w-lg md:mx-auto" : ""
                }`}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderLeft: "3px solid #25D366",
                  borderRadius: "12px",
                }}
              >
                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5 flex-shrink-0"
                  style={{ backgroundColor: "#25D366" }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-gray-900 mb-4"
                  style={{ fontSize: "1.4rem", fontWeight: 700 }}
                >
                  {card.title}
                </h3>

                {/* Bullet list */}
                <ul className="space-y-2.5">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex-shrink-0 font-bold leading-none"
                        style={{ color: "#25D366" }}
                      >
                        •
                      </span>
                      <span
                        className="text-gray-700 leading-relaxed"
                        style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section
        data-ocid="join.cta.section"
        style={{ backgroundColor: "#FFD700" }}
        className="py-16 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-bold mb-5"
            style={{ color: "#1a2e2e", fontSize: "2.4rem", fontWeight: 800 }}
          >
            Let's Take the Next Step Together
          </h2>
          <p
            className="leading-relaxed mb-10"
            style={{ color: "#1a2e2e", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Tell us who you are, what you do, and how you'd like to contribute —
            and we'll propose concrete next steps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              data-ocid="join.introduce_yourself.button"
              className="px-6 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90 text-base"
              style={{ backgroundColor: "#075E54", fontWeight: 700 }}
            >
              Introduce Yourself
            </a>
            <a
              href="/contact"
              data-ocid="join.strategy_call.button"
              className="px-6 py-3 rounded-full font-bold transition-opacity hover:opacity-90 text-base"
              style={{
                backgroundColor: "white",
                color: "#1a2e2e",
                fontWeight: 700,
              }}
            >
              Request a Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
