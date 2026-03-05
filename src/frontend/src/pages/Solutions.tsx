export default function Solutions() {
  const morshidBullets = [
    "Symptom triage and risk assessment",
    "Guidance on when and where to seek care",
    "Basic health education and self-care tips",
    "Medication reminders and follow-up prompts",
  ];

  const vospitalBullets = [
    "Video and audio teleconsultations",
    "Secure patient-provider messaging",
    "Digital prescriptions and referrals",
    "Integrated triage and scheduling",
    "Remote monitoring for select conditions",
  ];

  const etitudeTopics = [
    "Hygiene and sanitation",
    "Nutrition and healthy lifestyles",
    "Sexual and reproductive health",
    "Mental health and resilience",
    "First aid and emergency response",
  ];

  const chwBullets = [
    "Household visit planning and tracking",
    "On-device checklists and protocols",
    "Referral and follow-up tracking",
    "Data collection and reporting",
  ];

  const tmuKlBullets = [
    "Intelligent predictive text and correction",
    "Support for local languages and dialects",
    "Helps patients communicate symptoms clearly",
    "Helps health workers capture notes efficiently",
  ];

  const tmuPlatformBullets = [
    "Secure identity and access management",
    "Messaging and notification services",
    "Payments and $TMU token transaction rails",
    "API-based integration with national systems",
    "Monitoring, analytics, and dashboards",
  ];

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        data-ocid="solutions.hero.section"
        style={{ backgroundColor: "#e6f4f4" }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "#c8972e" }}
          >
            OUR SOLUTIONS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Integrated Solutions for Social Medicine
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            EcoGSM offers a family of interoperable solutions deployable
            together or in stages. Each is designed for low-resource conditions
            to extend — not replace — existing health systems.
          </p>
        </div>
      </section>

      {/* SECTION 2: MORSHID */}
      <section
        data-ocid="solutions.morshid.section"
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 shadow-sm"
            style={{
              borderLeft: "4px solid #0d6e6e",
              backgroundColor: "#fafafa",
            }}
          >
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Left: text content */}
              <div className="flex-1">
                <div className="text-5xl mb-5">🤖</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Morshid — Your AI Health Companion
                </h2>
                <p className="text-gray-600 text-lg mb-5">
                  Morshid is an AI health assistant providing:
                </p>
                <ul className="space-y-3 mb-6">
                  {morshidBullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1 flex-shrink-0 font-bold"
                        style={{ color: "#0d6e6e" }}
                      >
                        •
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p
                  className="text-sm font-medium italic"
                  style={{ color: "#0d6e6e" }}
                >
                  Supports multiple languages. Reduces unnecessary clinic visits
                  while flagging high-risk cases early.
                </p>
              </div>
              {/* Right: image */}
              <div className="flex-1 flex justify-center md:justify-end">
                <img
                  src="/assets/generated/morshid-ai-chat.dim_600x700.jpg"
                  alt="Smartphone showing the Morshid AI health chat interface"
                  className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VOSPITAL */}
      <section
        data-ocid="solutions.vospital.section"
        style={{ backgroundColor: "#e6f4f4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left: image */}
            <div className="flex-1 flex justify-center md:justify-start">
              <img
                src="/assets/generated/vospital-teleconsult.dim_700x500.jpg"
                alt="Nurse in a rural clinic conducting a video teleconsultation"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
            {/* Right: text content */}
            <div className="flex-1">
              <div className="text-5xl mb-5">📡</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vospital — A Hospital Without Walls
              </h2>
              <p className="text-gray-600 text-lg mb-5">
                Vospital is a virtual hospital platform enabling:
              </p>
              <ul className="space-y-3 mb-6">
                {vospitalBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#0d6e6e" }}
                    >
                      •
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p
                className="text-sm font-medium italic"
                style={{ color: "#0d6e6e" }}
              >
                Ideal for rural clinics, schools, refugee camps, and mobile
                health units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ETITUDE */}
      <section
        data-ocid="solutions.etitude.section"
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-12 shadow-sm"
            style={{
              borderLeft: "4px solid #0d6e6e",
              backgroundColor: "#fafafa",
            }}
          >
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="flex-1">
                <div className="text-5xl mb-5">📚</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Etitude — Health Education for the Next Generation
                </h2>
                <p className="text-gray-600 text-lg mb-5">
                  eLearning platform delivering culturally adapted content
                  through schools, community centers, and mobile devices.
                </p>
                <ul className="space-y-3">
                  {etitudeTopics.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1 flex-shrink-0 font-bold"
                        style={{ color: "#0d6e6e" }}
                      >
                        •
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative visual accent */}
              <div className="flex-1 flex justify-center items-center">
                <div
                  className="w-full max-w-xs rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: "#e6f4f4",
                    height: "280px",
                  }}
                >
                  <span className="text-8xl">📚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CHW TOOLS + TMU-KL */}
      <section
        data-ocid="solutions.chw.section"
        className="py-20 px-6"
        style={{ backgroundColor: "#f5fafa" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: CHW Tools */}
            <div
              className="rounded-2xl p-8 shadow-sm"
              style={{ backgroundColor: "#e6f4f4" }}
            >
              <div className="text-5xl mb-5">🏘️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Digital Tools for Community Health Workers
              </h2>
              <ul className="space-y-3">
                {chwBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#0d6e6e" }}
                    >
                      •
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: TMU-KL */}
            <div
              className="rounded-2xl p-8 shadow-sm bg-white"
              style={{ borderLeft: "4px solid #0d6e6e" }}
            >
              <div className="text-5xl mb-5">⌨️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                TMU-KL — Communication Without Barriers
              </h2>
              <ul className="space-y-3">
                {tmuKlBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#0d6e6e" }}
                    >
                      •
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TMU PLATFORM */}
      <section
        data-ocid="solutions.tmu_platform.section"
        style={{ backgroundColor: "#094f4f" }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-5xl mb-5">⚙️</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            TMU-Enablement Platform — The Engine Behind EcoGSM
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Underpinning all EcoGSM solutions:
          </p>
          <ul className="space-y-4 mb-8">
            {tmuPlatformBullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 font-bold text-white text-lg">
                  ✔
                </span>
                <span className="text-white text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/70 text-sm italic">
            This shared platform accelerates deployment and makes it easier to
            scale pilots into national programs.
          </p>
        </div>
      </section>
    </div>
  );
}
