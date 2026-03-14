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
    {
      icon: "📹",
      text: "24/7 remote video and audio consultations between patients and specialists",
    },
    {
      icon: "👁️",
      text: "SWISTWIT technology — specialist annotates the live video feed in real time to guide the local care provider",
    },
    {
      icon: "🤖",
      text: "AI-powered bots for health guidance and patient support",
    },
    {
      icon: "🌍",
      text: "Real-time translation across languages and local dialects",
    },
    { icon: "📄", text: "Digital referrals and remote care instructions" },
    {
      icon: "🔒",
      text: "All sessions recorded and securely archived for continuity of care",
    },
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

  const pharmaItems = [
    {
      icon: "🔍",
      text: "Scan any medicine package QR code instantly using a smartphone",
    },
    {
      icon: "🔗",
      text: "Blockchain records confirm authenticity and full supply chain history",
    },
    {
      icon: "✅",
      text: "Patients and care providers can trust every medicine they use",
    },
  ];

  /* ── Shared style helpers ───────────────────────────────────── */
  const labelStyle: React.CSSProperties = {
    color: "#FFD700",
    fontWeight: 800,
    fontSize: "16px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  };

  return (
    <div style={{ backgroundColor: "#f0fdf4" }}>
      {/* ══════════════════════════════════════════════
          SECTION 1: HERO
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.hero.section"
        style={{ backgroundColor: "#128C7E" }}
        className="py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4" style={labelStyle}>
            OUR SOLUTIONS
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
            style={{ fontWeight: 800 }}
          >
            Integrated Solutions for Social Medicine
          </h1>
          <p
            className="leading-relaxed max-w-3xl mx-auto text-white/90"
            style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            EcoGSM offers a family of interoperable solutions deployable
            together or in stages. Each is designed for low-resource conditions
            to extend — not replace — existing health systems.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2: MORSHID (dark green, 2-column)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.morshid.section"
        style={{ backgroundColor: "#128C7E" }}
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
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
                style={{ fontWeight: 800 }}
              >
                Morshid – Smart Agriculture for Food Security
              </h2>
              <p
                className="text-white/80 italic mb-5"
                style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                Food Security through Smart Agriculture
              </p>
              <p
                className="text-white/90 leading-relaxed mb-8"
                style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
              >
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
                      style={{ color: "#FFD700" }}
                    >
                      •
                    </span>
                    <span
                      className="text-white/90"
                      style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                    >
                      {item}
                    </span>
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
                className="inline-block px-7 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#FFD700",
                  color: "#1a2e2e",
                  fontWeight: 700,
                }}
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
          SECTION 3: VOSPITAL (light green, centered)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.vospital.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* Icon + Title + Subtitle */}
          <div className="text-center mb-10">
            <div className="text-7xl mb-4" style={{ color: "#25D366" }}>
              📡
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
              style={{ color: "#0f172a", fontWeight: 800 }}
            >
              Vospital – A Hospital Without Walls
            </h2>
            <p
              className="italic mb-6"
              style={{ color: "#64748b", fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Rural Medicine leveraging on urban medical facility
            </p>
            <p
              className="leading-relaxed max-w-3xl mx-auto"
              style={{ color: "#475569", fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Vospital is a virtual care platform that connects doctors and
              patients remotely. Using MRESENCE technology and SWISTWIT (which
              stands for See What I See Touch What I Touch), an urban specialist
              can view a patient in real-time video streaming and use hand
              gestures to annotate the live feed — pointing to exact areas and
              guiding the rural nurse step by step, as if they were in the same
              room.
            </p>
          </div>

          {/* KEY FEATURES label */}
          <p className="text-center mb-6" style={labelStyle}>
            KEY FEATURES
          </p>

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {vospitalFeatures.map((item) => (
              <div
                key={item.text}
                className="rounded-xl p-5 flex items-start gap-4"
                style={{
                  backgroundColor: "white",
                  borderLeft: "3px solid #25D366",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span
                  style={{
                    color: "#374151",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center">
            <a
              data-ocid="solutions.vospital.button"
              href="https://www.vospital.care"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366", fontWeight: 700 }}
            >
              Visit www.vospital.care
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4: ETITUDE (dark green, centered)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.etitude.section"
        style={{ backgroundColor: "#075E54" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div className="text-6xl mb-4">📚</div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
                style={{ fontWeight: 800 }}
              >
                Etitude – Social Equity through Education
              </h2>
              <p
                className="text-white/90 leading-relaxed mb-8"
                style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
              >
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
                      style={{ color: "#FFD700" }}
                    >
                      •
                    </span>
                    <span
                      className="text-white/90"
                      style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                data-ocid="solutions.etitude.button"
                href="https://www.etitude.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#FFD700",
                  color: "#1a2e2e",
                  fontWeight: 700,
                }}
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
          SECTION 5: AIRELLO (light green, centered)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.airello.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div className="text-6xl mb-4">🤖</div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
                style={{ color: "#0f172a", fontWeight: 800 }}
              >
                Airello – Multi-AI-Agents Platform
              </h2>
              <p
                className="italic mb-5"
                style={{
                  color: "#64748b",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                AI Agents Working Together
              </p>
              <p
                className="leading-relaxed mb-8"
                style={{
                  color: "#475569",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
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
                      style={{ color: "#25D366" }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        color: "#374151",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                data-ocid="solutions.airello.button"
                href="https://www.airello.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 rounded-full font-bold text-sm text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366", fontWeight: 700 }}
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
          SECTION 6: CHW TOOLS (dark green, centered)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.chw.section"
        style={{ backgroundColor: "#128C7E" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div className="text-6xl mb-4">🏘️</div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
                style={{ fontWeight: 800 }}
              >
                Digital Tools for Community Health Workers
              </h2>
              <p
                className="text-white/90 leading-relaxed mb-8"
                style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                EcoGSM offers a tailored set of tools for community health
                workers (CHWs) to enhance productivity and strengthen the link
                between communities and formal health systems.
              </p>

              <ul className="space-y-3">
                {chwFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 font-bold"
                      style={{ color: "#FFD700" }}
                    >
                      •
                    </span>
                    <span
                      className="text-white/90"
                      style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                    >
                      {item}
                    </span>
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
          SECTION 7: TMU-ENABLEMENT PLATFORM (light green, centered)
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.tmu_platform.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <div className="text-6xl mb-4">⚙️</div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
                style={{ color: "#0f172a", fontWeight: 800 }}
              >
                TMU-Enablement Platform – The Engine Behind EcoGSM
              </h2>
              <p
                className="leading-relaxed mb-8"
                style={{
                  color: "#475569",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
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
                      style={{ color: "#25D366" }}
                    >
                      •
                    </span>
                    <span
                      style={{
                        color: "#374151",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {item}
                    </span>
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

      {/* ══════════════════════════════════════════════
          SECTION 8: PHARMACEUTICAL PROVENANCE
      ══════════════════════════════════════════════ */}
      <section
        data-ocid="solutions.pharma_provenance.section"
        style={{ backgroundColor: "#075E54" }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-center" style={labelStyle}>
            PHARMACEUTICAL PROVENANCE
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight text-center"
            style={{ fontWeight: 800 }}
          >
            Is Your Medicine Real?
          </h2>
          <p
            className="text-white/90 leading-relaxed mb-10 text-center max-w-3xl mx-auto"
            style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            Counterfeit medicines are a growing threat across Africa and
            developing regions. EcoGSM uses blockchain technology to verify the
            authenticity of every medicine at the point of delivery — a simple
            QR scan confirms the full supply chain history of the product.
          </p>

          <div className="space-y-5">
            {pharmaItems.map((item) => (
              <div key={item.text} className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-1">{item.icon}</span>
                <span
                  className="text-white/90"
                  style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
