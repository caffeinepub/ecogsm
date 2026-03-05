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

export default function Technology() {
  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        data-ocid="tech.hero.section"
        style={{ backgroundColor: "#094f4f" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: text */}
          <div className="flex-1">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "#c8972e" }}
            >
              TECHNOLOGY
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              AI, Digital Infrastructure, and Secure Design
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.85)" }}
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

      {/* SECTION 2: AI SECTION */}
      <section
        data-ocid="tech.ai.section"
        style={{ backgroundColor: "#e6f4f4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Artificial Intelligence That Augments, Not Replaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: AI provides */}
            <div
              className="bg-white rounded-2xl p-8 shadow-sm"
              style={{ borderLeft: "4px solid #0d6e6e" }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "#0d6e6e" }}
              >
                AI provides:
              </h3>
              <ul className="space-y-4">
                {aiProvides.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 font-bold text-lg"
                      style={{ color: "#0d6e6e" }}
                    >
                      ✔
                    </span>
                    <span className="text-gray-700 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: We ensure */}
            <div
              className="bg-white rounded-2xl p-8 shadow-sm"
              style={{ borderLeft: "4px solid #0d6e6e" }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "#0d6e6e" }}
              >
                We ensure:
              </h3>
              <ul className="space-y-4">
                {weEnsure.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 font-bold text-lg"
                      style={{ color: "#0d6e6e" }}
                    >
                      ✔
                    </span>
                    <span className="text-gray-700 text-base">{item}</span>
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
        style={{ backgroundColor: "#0d6e6e" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
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
                <p className="font-semibold text-gray-900 text-base leading-snug">
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
        style={{ backgroundColor: "#e6f4f4" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Architecture Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturePrinciples.map((card, i) => (
              <div
                key={card.num}
                data-ocid={`tech.architecture.card.${i + 1}`}
                className="bg-white rounded-2xl p-7 shadow-sm relative"
                style={{ borderLeft: "4px solid #0d6e6e" }}
              >
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm mb-5 inline-flex"
                  style={{ backgroundColor: "#0d6e6e" }}
                >
                  {card.num}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
