export default function Solutions() {
  /* ── Data ───────────────────────────────────────────────────── */
  const morshidFeatures = [
    "AI-powered agricultural advice and recommendations",
    "Direct connection between farmers and markets",
    "Weather, soil, and crop monitoring",
    "Audio guidance in Darija and Amazigh (for non-literate farmers)",
    "Disease detection via image and video upload",
    "Precision agronomy support",
  ];

  const vospitalFeatures = [
    "Remote doctor-patient video consultations",
    "AI bots for triage and guidance",
    "Real-time translation for multilingual care",
    "Digital prescriptions and referrals",
    "Reduced hospital stays and readmissions",
  ];

  const etitudeChannels = [
    "Schools and youth clubs",
    "Community centers and telecenters",
    "Mobile learning modules",
    "Topics: hygiene, nutrition, reproductive health, mental health, first aid",
  ];

  const airelloFeatures = [
    "Multiple AI agents working together seamlessly",
    "Intelligent automation of tasks and workflows",
    "AI receptionist and virtual assistant capabilities",
    "Integration across TMU ecosystem services",
  ];

  const chwFeatures = [
    "Household visit planning and tracking",
    "On-device checklists and protocols",
    "Referral and follow-up tracking",
    "Data collection and reporting",
    "Integrated AI support for triage and guidance",
  ];

  const tmuPlatformFeatures = [
    "Secure identity and access management",
    "Messaging and notification services",
    "Payments and $TMU token transaction rails",
    "API-based integration with national systems",
    "Monitoring, analytics, and dashboards",
  ];

  /* ── Shared style helpers ───────────────────────────────────── */
  const labelStyle: React.CSSProperties = {
    color: "#b45309",
    fontWeight: 800,
    fontSize: "14px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  };

  return (
    <div style={{ backgroundColor: "#f8fafc" }}>
      {/* ══════════════════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.hero.section"
        style={{ backgroundColor: "#f0fdf9" }}
        className="py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4" style={labelStyle}>
            OUR SOLUTIONS
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#0f172a" }}
          >
            Integrated Solutions for Social Medicine
          </h1>
          <p
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: "#475569" }}
          >
            EcoGSM offers a family of interoperable solutions deployable
            together or in stages. Each is designed for low-resource conditions
            to extend — not replace — existing health systems.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2: MORSHID (dark teal, 2-column)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.morshid.section"
        style={{ backgroundColor: "#0f766e" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div
                className="text-6xl mb-4"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
              >
                🌾
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Morshid – Smart Agriculture for Food Security
              </h2>
              <p className="text-white/80 italic text-lg mb-5">
                Food Security through Smart Agriculture
              </p>
              <p className="text-white/90 text-base leading-relaxed mb-8">
                By connecting farmers directly to markets and empowering them
                with knowledge, Morshid fights food insecurity, ensures fair
                trade, and builds a sustainable agricultural future for Morocco.
              </p>

              <p className="mb-4" style={labelStyle}>
                KEY FEATURES
              </p>
              <ul className="space-y-3 mb-8">
                {morshidFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#f59e0b" }}
                    >
                      •
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/70 text-sm italic mb-8">
                100% free. Available 24/7. Accessible via WhatsApp and mobile
                app.
              </p>

              <a
                data-ocid="solutions.morshid.button"
                href="https://www.morshid.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#f59e0b", color: "#0f172a" }}
              >
                Visit www.morshid.ma
              </a>
            </div>

            {/* Right: image */}
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/generated/morshid-farmer.dim_800x600.jpg"
                alt="Moroccan farmer using a smartphone in a field for agricultural advice"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ maxWidth: "480px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3: VOSPITAL (light teal, 2-column)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.vospital.section"
        style={{ backgroundColor: "#f0fdf9" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div className="text-6xl mb-4">🏥</div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
                style={{ color: "#0f172a" }}
              >
                Vospital.Care – A Hospital Without Walls
              </h2>
              <p className="italic text-lg mb-5" style={{ color: "#64748b" }}>
                Rural Medicine leveraging on urban medical facility
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#475569" }}
              >
                Vospital.Care is a virtual hospital platform that connects
                doctors and patients remotely through video, AI bots, and
                real-time translation, helping reduce hospital stays, prevent
                readmissions, and make healthcare more accessible and efficient.
              </p>

              <p className="mb-4" style={labelStyle}>
                KEY FEATURES
              </p>
              <ul className="space-y-3 mb-8">
                {vospitalFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#f59e0b" }}
                    >
                      •
                    </span>
                    <span style={{ color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                data-ocid="solutions.vospital.button"
                href="https://www.vospital.care"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0f766e" }}
              >
                Visit www.vospital.care
              </a>
            </div>

            {/* Right: image */}
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/generated/vospital-teleconsult.dim_800x600.jpg"
                alt="Doctor on video call with a rural patient on a tablet"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ maxWidth: "480px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4: ETITUDE (dark teal, centered)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.etitude.section"
        style={{ backgroundColor: "#0f766e" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Etitude – Social Equity through Education
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-8">
                TMU proposes ETITUDE as a powerful tool to democratize
                education. By transforming complex knowledge into accessible
                learning for everyone, ETITUDE breaks down barriers, bridges
                social gaps, and ensures equity in education — empowering
                learners everywhere to thrive.
              </p>

              <p className="mb-4" style={labelStyle}>
                DELIVERED THROUGH
              </p>
              <ul className="space-y-3 mb-8">
                {etitudeChannels.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#f59e0b" }}
                    >
                      •
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                data-ocid="solutions.etitude.button"
                href="https://www.etitude.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#f59e0b", color: "#0f172a" }}
              >
                Visit www.etitude.com
              </a>
            </div>

            {/* Right: image */}
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/generated/etitude-classroom.dim_800x600.jpg"
                alt="Students in an African classroom learning on tablets with a teacher"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ maxWidth: "480px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5: AIRELLO (light teal, centered)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.airello.section"
        style={{ backgroundColor: "#f0fdf9" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div className="text-6xl mb-4">🤖</div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
                style={{ color: "#0f172a" }}
              >
                Airello – Multi-AI-Agents Platform
              </h2>
              <p className="italic text-lg mb-5" style={{ color: "#64748b" }}>
                AI Agents Working Together
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#475569" }}
              >
                Airello coordinates multiple AI agents for intelligent
                automation and workflow orchestration, enabling seamless
                integration and enhanced productivity across the TMU ecosystem.
              </p>

              <p className="mb-4" style={labelStyle}>
                KEY FEATURES
              </p>
              <ul className="space-y-3 mb-8">
                {airelloFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#f59e0b" }}
                    >
                      •
                    </span>
                    <span style={{ color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                data-ocid="solutions.airello.button"
                href="https://www.airello.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0f766e" }}
              >
                Visit www.airello.com
              </a>
            </div>

            {/* Right: image */}
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/generated/airello-agents.dim_800x600.jpg"
                alt="Multiple AI robot agents working together on digital screens, futuristic automation workflow"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ maxWidth: "480px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6: CHW TOOLS (dark teal, centered)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.chw.section"
        style={{ backgroundColor: "#0f766e" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div className="text-6xl mb-4">🏘️</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Digital Tools for Community Health Workers
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-8">
                EcoGSM offers a tailored set of tools for community health
                workers (CHWs) to enhance productivity and strengthen the link
                between communities and formal health systems.
              </p>

              <ul className="space-y-3">
                {chwFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#f59e0b" }}
                    >
                      •
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: image */}
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/generated/chw-homevisit.dim_800x600.jpg"
                alt="Community health worker in Africa doing a home visit, using a smartphone to record patient data"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ maxWidth: "480px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7: TMU-ENABLEMENT PLATFORM (light teal, centered)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.tmu_platform.section"
        style={{ backgroundColor: "#f0fdf9" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div className="text-6xl mb-4">⚙️</div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
                style={{ color: "#0f172a" }}
              >
                TMU-Enablement Platform – The Engine Behind EcoGSM
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#475569" }}
              >
                Underpinning all EcoGSM solutions, the TMU-Enablement Platform
                provides the shared digital backbone that accelerates deployment
                and enables national-scale programs.
              </p>

              <ul className="space-y-3">
                {tmuPlatformFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#f59e0b" }}
                    >
                      •
                    </span>
                    <span style={{ color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: image */}
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/generated/tmu-dashboard.dim_800x600.jpg"
                alt="Clean modern digital dashboard showing health data analytics, API connections, monitoring charts"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ maxWidth: "480px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
