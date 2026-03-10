const aiProvides = [
  "Symptom triage and risk assessment",
  "Contextual health information and guidance",
  "Decision support for health workers",
  "Localization to languages and health system protocols",
];

const weEnsure = [
  "Transparency: clear explanations of what AI can and cannot do",
  "Safety: continuous monitoring and model improvement",
  "Human Oversight: health workers remain in control at all times",
];

const coreTechnologies = [
  { icon: "🧠", label: "AI Health Models" },
  { icon: "📡", label: "Telemedicine & Remote Monitoring" },
  { icon: "🔗", label: "Tokenized Service Metering ($TMU)" },
  { icon: "📜", label: "Smart Contracts for Billing & Subsidy" },
  { icon: "🔒", label: "Secure Messaging" },
  { icon: "📵", label: "Offline Capabilities" },
  { icon: "🌍", label: "Multilingual NLP — African Languages Prioritized" },
];

const architecturePrinciples = [
  {
    num: "1",
    title: "API-First",
    text: "All components accessible via APIs, enabling integration with national systems.",
  },
  {
    num: "2",
    title: "Modular",
    text: "Deploy one solution or all six. Each works independently and together.",
  },
  {
    num: "3",
    title: "Privacy by Design",
    text: "Data protection built in from the ground up, not added later.",
  },
  {
    num: "4",
    title: "Scalable",
    text: "From a single pilot clinic to a national program without rebuilding.",
  },
];

const howItWorks = [
  { num: "1", text: "Patient and Care Giver connect via smartphone camera" },
  {
    num: "2",
    text: "Urban specialist joins remotely through MRESENCE platform",
  },
  { num: "3", text: "Specialist views patient through real-time video" },
  {
    num: "4",
    text: "SWISTWIT overlays specialist hand movements onto the live feed",
  },
  {
    num: "5",
    text: "Care provider receives annotated live guidance on screen",
  },
  {
    num: "6",
    text: "A portable audio device transmits body sounds to the specialist",
  },
];

const whatGetsArchived = [
  { icon: "🔒", text: "Text chat between Care Giver and specialist" },
  { icon: "🎙️", text: "Full audio conversation" },
  { icon: "📹", text: "Complete video and image files" },
  { icon: "🩺", text: "Audio signal data" },
  { icon: "📊", text: "All data archived using hashed secure technology" },
];

export default function Technology() {
  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        data-ocid="tech.hero.section"
        style={{ backgroundColor: "#075E54" }}
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
              TECHNOLOGY
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontWeight: 800 }}
            >
              AI, Digital Infrastructure, and Secure Design
            </h1>
            <p
              className="leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "1.1rem",
                lineHeight: 1.8,
              }}
            >
              EcoGSM is powered by a modern, modular stack combining AI,
              telehealth, digital public infrastructure integration, and secure
              data management — engineered for real-world conditions in
              low-resource environments.
            </p>
          </div>

          {/* Right: image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/generated/technology-hero.dim_800x500.png"
              alt="Digital architecture diagram showing AI, mobile apps, APIs and databases interconnected"
              className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1B: MRESENCE + SWISTWIT */}
      <section
        data-ocid="tech.mresence.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="uppercase mb-4"
            style={{
              color: "#FFD700",
              fontWeight: 800,
              fontSize: "16px",
              letterSpacing: "0.18em",
            }}
          >
            MRESENCE + SWISTWIT
          </p>
          <h2
            className="font-bold text-gray-900 mb-6"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            See What I See. Touch What I Touch.
          </h2>
          <p
            className="text-gray-700 mb-12"
            style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            MRESENCE stands for Presence in Mixed Reality. It enables people who
            are geographically separated to communicate as if they were in the
            same physical space. Using SWISTWIT, an urban specialist views a
            rural patient through live video and overlays hand gesture
            annotations onto the feed — guiding the local care provider in real
            time.
          </p>

          {/* 2-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Left: HOW IT WORKS */}
            <div
              className="p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderLeft: "3px solid #25D366",
                borderRadius: "12px",
              }}
            >
              <p
                className="uppercase mb-6"
                style={{
                  color: "#FFD700",
                  fontWeight: 800,
                  fontSize: "16px",
                  letterSpacing: "0.18em",
                }}
              >
                HOW IT WORKS
              </p>
              <ol className="space-y-4">
                {howItWorks.map((step) => (
                  <li key={step.num} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm"
                      style={{ backgroundColor: "#25D366" }}
                    >
                      {step.num}
                    </span>
                    <span
                      className="text-gray-700"
                      style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
                    >
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right: WHAT GETS ARCHIVED */}
            <div
              className="p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderLeft: "3px solid #25D366",
                borderRadius: "12px",
              }}
            >
              <p
                className="uppercase mb-6"
                style={{
                  color: "#FFD700",
                  fontWeight: 800,
                  fontSize: "16px",
                  letterSpacing: "0.18em",
                }}
              >
                WHAT GETS ARCHIVED
              </p>
              <ul className="space-y-4">
                {whatGetsArchived.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span
                      className="text-gray-700"
                      style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom note */}
          <p
            className="text-center font-semibold"
            style={{ color: "#128C7E", fontSize: "1.1rem" }}
          >
            Easy to set up. Very convenient. Very affordable.
          </p>
        </div>
      </section>

      {/* SECTION 2: AI SECTION */}
      <section
        data-ocid="tech.ai.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold text-gray-900 mb-12 text-center"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Artificial Intelligence That Augments, Not Replaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: AI provides */}
            <div
              className="p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderLeft: "3px solid #25D366",
                borderRadius: "12px",
              }}
            >
              <h3
                className="font-bold mb-6"
                style={{
                  color: "#25D366",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                }}
              >
                AI provides:
              </h3>
              <ul className="space-y-4">
                {aiProvides.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 font-bold text-lg"
                      style={{ color: "#25D366" }}
                    >
                      ✔
                    </span>
                    <span
                      className="text-gray-700"
                      style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: We ensure */}
            <div
              className="p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderLeft: "3px solid #25D366",
                borderRadius: "12px",
              }}
            >
              <h3
                className="font-bold mb-6"
                style={{
                  color: "#25D366",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                }}
              >
                We ensure:
              </h3>
              <ul className="space-y-4">
                {weEnsure.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 font-bold text-lg"
                      style={{ color: "#25D366" }}
                    >
                      ✔
                    </span>
                    <span
                      className="text-gray-700"
                      style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE TECHNOLOGIES */}
      <section
        data-ocid="tech.core.section"
        style={{ backgroundColor: "#128C7E" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold text-white mb-12 text-center"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Core Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreTechnologies.map((card, i) => (
              <div
                key={card.label}
                data-ocid={`tech.core.card.${i + 1}`}
                className="bg-white rounded-2xl p-7 flex flex-col items-center text-center shadow-md"
              >
                <span className="text-5xl mb-4">{card.icon}</span>
                <p
                  className="font-semibold text-gray-900 leading-snug"
                  style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ARCHITECTURE PRINCIPLES */}
      <section
        data-ocid="tech.architecture.section"
        style={{ backgroundColor: "#f0fdf4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold text-gray-900 mb-12 text-center"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Architecture Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturePrinciples.map((card, i) => (
              <div
                key={card.num}
                data-ocid={`tech.architecture.card.${i + 1}`}
                className="p-7 relative"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderLeft: "3px solid #25D366",
                  borderRadius: "12px",
                }}
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm mb-5 inline-flex"
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
    </div>
  );
}
