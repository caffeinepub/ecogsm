export default function Ecosystem() {
  const layer1Features = [
    { icon: "🤖", text: "AI health assistants for triage and health guidance" },
    { icon: "📡", text: "Telehealth consultations with doctors and nurses" },
    {
      icon: "📱",
      text: "eLearning content for health awareness and self-care",
    },
    { icon: "🏫", text: "School-based and community-based health programs" },
  ];

  const layer2Items = [
    "AI decision support",
    "Digital records and patient histories",
    "Referral and follow-up tools",
    "Remote supervision and mentoring",
    "Continuous learning modules",
    "Workflow automation for clinics",
  ];

  const layer3Items = [
    { icon: "📶", text: "Mobile and satellite connectivity" },
    { icon: "🪪", text: "Identity and registries" },
    { icon: "💳", text: "Digital payments and subsidies" },
    { icon: "📦", text: "Supply-chain visibility" },
    { icon: "💬", text: "Secure messaging and notifications" },
  ];

  const layer4Items = [
    {
      icon: "💰",
      text: "Tokenized service metering and rewards ($TMU utility tokens)",
    },
    {
      icon: "🏗️",
      text: "Real-World Asset (RWA) backed infrastructure financing",
    },
    { icon: "🤝", text: "Blended donor, public, and private capital" },
    {
      icon: "📊",
      text: "Transparent, data-driven reporting and accountability",
    },
  ];

  const layerBadges = [
    "Layer 1: Health Access",
    "Layer 2: Provider Enablement",
    "Layer 3: Infrastructure",
    "Layer 4: Finance",
  ];

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section
        data-ocid="ecosystem.hero.section"
        style={{ backgroundColor: "#0f766e" }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1">
            <p className="text-sm font-bold uppercase tracking-widest text-white/80 mb-4">
              THE ECOGSM ECOSYSTEM
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Multi-Layered Ecosystem for Social Medicine
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              EcoGSM connects people, providers, infrastructure, and finance
              through four interacting layers. Each layer supports and amplifies
              the others, creating a scalable model for social medicine in
              low-resource settings.
            </p>
            {/* 4 pill badges */}
            <div className="flex flex-wrap gap-3">
              {layerBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white border border-white/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: diagram image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/generated/ecosystem-hero-layers.dim_800x600.jpg"
              alt="EcoGSM four-layer ecosystem diagram"
              className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: LAYER 1 — Health Access */}
      <section
        data-ocid="ecosystem.layer1.section"
        className="py-20 px-6"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase mb-3"
            style={{
              color: "#b45309",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "0.15em",
            }}
          >
            LAYER 1
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Health Access Layer — Care at Your Fingertips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {layer1Features.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 p-5 transition-shadow"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderLeft: "3px solid #0f766e",
                  borderRadius: "12px",
                }}
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <p className="text-gray-700 font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-base font-medium italic"
            style={{ color: "#0f766e" }}
          >
            Accessible via smartphones, school/clinic terminals, and CHW
            devices.
          </p>
        </div>
      </section>

      {/* SECTION 3: LAYER 2 — Provider Enablement */}
      <section
        data-ocid="ecosystem.layer2.section"
        style={{ backgroundColor: "#f0fdf9" }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase mb-3"
            style={{
              color: "#b45309",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "0.15em",
            }}
          >
            LAYER 2
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Provider Enablement Layer — Empowering Frontline Workers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {layer2Items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 flex-shrink-0 font-bold text-lg"
                  style={{ color: "#0f766e" }}
                >
                  ✔
                </span>
                <span className="text-gray-700 text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: LAYER 3 — Infrastructure & Logistics */}
      <section
        data-ocid="ecosystem.layer3.section"
        className="py-20 px-6"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase mb-3"
            style={{
              color: "#b45309",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "0.15em",
            }}
          >
            LAYER 3
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Infrastructure &amp; Logistics Layer — The Digital Backbone
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
            EcoGSM integrates with national digital initiatives,
            telecommunications partners, satellite providers such as Starlink,
            and local supply-chain operators.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {layer3Items.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 p-5 transition-shadow"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderLeft: "3px solid #0f766e",
                  borderRadius: "12px",
                }}
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <p className="text-gray-700 font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LAYER 4 — Finance & Sustainability */}
      <section
        data-ocid="ecosystem.layer4.section"
        style={{ backgroundColor: "#094f4f" }}
        className="py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase mb-3"
            style={{
              color: "#b45309",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "0.15em",
            }}
          >
            LAYER 4
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Finance &amp; Sustainability Layer — Funding Social Medicine at
            Scale
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-3xl">
            EcoGSM introduces a community-owned financial model ensuring
            affordability for patients while enabling scalability across
            countries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {layer4Items.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <p className="text-white font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
