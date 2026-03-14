export default function CountryDeployments() {
  const countries = [
    {
      flag: "🇷🇼",
      country: "Rwanda",
      title: "EcoGSM Rwanda — Strengthening Primary Care and CHWs",
      focus: [
        "Supporting CHWs with digital tools for household visits",
        "AI-assisted health guidance to rural households via Vospital",
        "Integration with national digital health initiatives",
      ],
      solutions: "Vospital · CHW Tools · TMU Platform",
      languages: "Kinyarwanda · French · English",
    },
    {
      flag: "🇳🇪",
      country: "Niger",
      title: "EcoGSM Niger — Schools, Connectivity, and Youth Health",
      focus: [
        "Health education content via Etitude to connected schools",
        "Teleconsultations for students and teachers via Vospital",
        "Remote support for rural communities",
      ],
      solutions: "Etitude · Vospital · CHW Tools",
      languages: "French · Hausa",
    },
    {
      flag: "🇲🇦",
      country: "Morocco",
      title: "EcoGSM Morocco — Youth Digital Health Literacy",
      focus: [
        "Youth health and mental health support in schools and universities",
        "AI agricultural guidance for farmers via Morshid",
        "Integration with telehealth and primary care facilities",
      ],
      solutions: "Morshid · Etitude · Vospital",
      languages: "Arabic · French · Darija",
    },
    {
      flag: "🇳🇬",
      country: "Nigeria",
      title: "EcoGSM Nigeria — Community Health & Maternal Care",
      focus: [
        "High-density, low-income urban communities with limited clinic capacity",
        "Community health worker support and referrals",
        "Partnerships with local innovators and civil society organizations",
      ],
      solutions: "Vospital · CHW Tools · Etitude",
      languages: "English · Hausa · Yoruba · Igbo",
    },
    {
      flag: "🇰🇪",
      country: "Kenya",
      title: "EcoGSM Kenya — AI Health & School Programs",
      focus: [
        "AI-enabled health guidance for citizens via Vospital",
        "Integration with mobile money and national digital systems",
        "Support for both rural and peri-urban clinics",
      ],
      solutions: "Vospital · TMU Platform · Etitude",
      languages: "English · Swahili",
    },
  ];

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section style={{ background: "#128C7E" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <p
              className="uppercase mb-3"
              style={{
                color: "#FFD700",
                fontWeight: 800,
                fontSize: "16px",
                letterSpacing: "0.18em",
              }}
            >
              COUNTRY PROGRAMS
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-5"
              style={{ fontWeight: 800 }}
            >
              From Concept to Country Programs
            </h1>
            <p
              className="text-white/80 max-w-xl"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              EcoGSM deploys through country-level programs co-designed with
              local partners, aligned with national strategies, and focused on
              measurable impact.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/generated/country-flags-grid.dim_900x500.jpg"
              alt="5 country flags: Morocco, Niger, Nigeria, Rwanda, Kenya"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: COUNTRY CARDS */}
      <section style={{ background: "#f0fdf4" }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {countries.map((c, i) => (
            <div
              key={c.country}
              data-ocid={`country.card.${i + 1}`}
              className="overflow-hidden flex flex-col md:flex-row"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderLeft: "3px solid #25D366",
                borderRadius: "12px",
              }}
            >
              <div className="p-8 flex-1">
                {/* Flag + Country */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-5xl leading-none">{c.flag}</span>
                  <span
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: "#25D366" }}
                  >
                    {c.country}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-bold mb-4"
                  style={{
                    color: "#1a2e2e",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  {c.title}
                </h2>

                {/* Focus */}
                <div className="mb-4">
                  <p
                    className="uppercase mb-2"
                    style={{
                      color: "#FFD700",
                      fontWeight: 800,
                      fontSize: "16px",
                      letterSpacing: "0.18em",
                    }}
                  >
                    Focus
                  </p>
                  <ul className="space-y-1">
                    {c.focus.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-gray-700"
                        style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                      >
                        <span
                          className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#25D366" }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Solutions */}
                <div className="mb-2">
                  <span
                    className="uppercase"
                    style={{
                      color: "#FFD700",
                      fontWeight: 800,
                      fontSize: "16px",
                      letterSpacing: "0.18em",
                    }}
                  >
                    Key Solutions:{" "}
                  </span>
                  <span
                    className="text-gray-700"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {c.solutions}
                  </span>
                </div>

                {/* Languages */}
                <div>
                  <span
                    className="uppercase"
                    style={{
                      color: "#FFD700",
                      fontWeight: 800,
                      fontSize: "16px",
                      letterSpacing: "0.18em",
                    }}
                  >
                    Languages:{" "}
                  </span>
                  <span
                    className="text-gray-700"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {c.languages}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section style={{ background: "#FFD700" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-bold mb-4"
            style={{ color: "#1a2e2e", fontSize: "2.4rem", fontWeight: 800 }}
          >
            Interested in deploying EcoGSM in your country?
          </h2>
          <p
            className="mb-8"
            style={{ color: "#1a2e2e", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            We work with governments, local institutions, and international
            partners to design programs that respond to real needs.
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              data-ocid="cta.discuss_deployment.button"
              className="px-8 py-4 rounded-full font-bold text-white text-base transition hover:opacity-90"
              style={{ background: "#075E54", fontWeight: 700 }}
            >
              Discuss a Country Deployment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
