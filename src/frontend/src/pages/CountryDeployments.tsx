export default function CountryDeployments() {
  const countries = [
    {
      flag: "🇷🇼",
      country: "Rwanda",
      title: "EcoGSM Rwanda — Strengthening Primary Care and CHWs",
      focus: [
        "Supporting CHWs with digital tools for household visits",
        "AI-assisted triage and health education to rural households",
        "Integration with national digital health initiatives",
      ],
      solutions: "Morshid · CHW Tools · Vospital",
      languages: "Kinyarwanda · French · English",
    },
    {
      flag: "🇳🇪",
      country: "Niger",
      title: "EcoGSM Niger — Schools, Connectivity, and Youth Health",
      focus: [
        "Health education via Etitude to connected schools",
        "Basic triage for students and teachers via Morshid",
        "Teleconsultation via Vospital for remote support",
      ],
      solutions: "Etitude · Morshid · Vospital",
      languages: "French · Hausa",
    },
    {
      flag: "🇲🇦",
      country: "Morocco",
      title: "EcoGSM Morocco — Youth Digital Health Literacy",
      focus: [
        "Youth health awareness and digital literacy programs",
        "Urban-rural health gap bridging",
      ],
      solutions: "Etitude · Morshid",
      languages: "Arabic · French · Darija",
    },
    {
      flag: "🇳🇬",
      country: "Nigeria",
      title: "EcoGSM Nigeria — Community Health & Maternal Care",
      focus: [
        "Urban peripheries and peri-urban communities",
        "Maternal health, CHW tools, and community outreach",
      ],
      solutions: "Morshid · CHW Tools · Vospital",
      languages: "English · Hausa · Yoruba · Igbo",
    },
    {
      flag: "🇰🇪",
      country: "Kenya",
      title: "EcoGSM Kenya — AI Health & School Programs",
      focus: [
        "Digital-first health in innovation hubs and rural counties",
        "School health programs and AI triage",
      ],
      solutions: "Morshid · Etitude · Vospital",
      languages: "English · Swahili",
    },
  ];

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section style={{ background: "#0f766e" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <p
              className="uppercase mb-3"
              style={{
                color: "#b45309",
                fontWeight: 800,
                fontSize: "14px",
                letterSpacing: "0.15em",
              }}
            >
              COUNTRY PROGRAMS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              From Concept to Country Programs
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              EcoGSM deploys through country-level programs co-designed with
              local partners, aligned with national strategies, and focused on
              measurable impact.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/generated/africa-map-countries.dim_600x500.png"
              alt="Map of Africa highlighting Rwanda, Niger, Morocco, Nigeria, Kenya"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: COUNTRY CARDS */}
      <section style={{ background: "#f0fdf9" }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {countries.map((c, i) => (
            <div
              key={c.country}
              data-ocid={`country.card.${i + 1}`}
              className="overflow-hidden flex flex-col md:flex-row"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderLeft: "3px solid #0f766e",
                borderRadius: "12px",
              }}
            >
              <div className="p-8 flex-1">
                {/* Flag + Country */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-5xl leading-none">{c.flag}</span>
                  <span
                    className="text-sm font-bold uppercase tracking-widest"
                    style={{ color: "#0f766e" }}
                  >
                    {c.country}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ color: "#1a2e2e" }}
                >
                  {c.title}
                </h2>

                {/* Focus */}
                <div className="mb-4">
                  <p
                    className="uppercase mb-2"
                    style={{
                      color: "#b45309",
                      fontWeight: 800,
                      fontSize: "14px",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Focus
                  </p>
                  <ul className="space-y-1">
                    {c.focus.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span
                          className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#0f766e" }}
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
                      color: "#b45309",
                      fontWeight: 800,
                      fontSize: "14px",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Key Solutions:{" "}
                  </span>
                  <span className="text-sm text-gray-700">{c.solutions}</span>
                </div>

                {/* Languages */}
                <div>
                  <span
                    className="uppercase"
                    style={{
                      color: "#b45309",
                      fontWeight: 800,
                      fontSize: "14px",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Languages:{" "}
                  </span>
                  <span className="text-sm text-gray-700">{c.languages}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section style={{ background: "#c8972e" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#1a2e2e" }}
          >
            Interested in deploying EcoGSM in your country?
          </h2>
          <p className="text-base mb-8" style={{ color: "#1a2e2e" }}>
            We work with governments, local institutions, and international
            partners to design programs that respond to real needs.
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              data-ocid="cta.discuss_deployment.button"
              className="px-8 py-4 rounded-full font-semibold text-white text-base transition hover:opacity-90"
              style={{ background: "#094f4f" }}
            >
              Discuss a Country Deployment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
