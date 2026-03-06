export default function About() {
  return (
    <div>
      {/* SECTION 1: HERO */}
      <section style={{ backgroundColor: "#128C7E" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p
              className="uppercase mb-3"
              style={{
                color: "#FFD700",
                fontWeight: 800,
                fontSize: "16px",
                letterSpacing: "0.18em",
              }}
            >
              ABOUT ECOGSM
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontWeight: 800 }}
            >
              What is EcoGSM?
            </h1>
            <p
              className="text-white/90 leading-relaxed"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              EcoGSM (Ecosystem for Global Social Medicine) is a comprehensive
              digital health and social medicine framework designed to serve
              low-resource and underserved populations worldwide, with a special
              focus on Africa and the Global South.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/generated/about-hero-family.dim_800x600.jpg"
              alt="African family with a community health worker showing them a tablet in a rural setting"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IT COMBINES */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-bold text-gray-900 mb-8"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            EcoGSM combines:
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              "AI-powered health assistance and triage",
              "Telehealth and virtual care (virtual hospital model)",
              "Community health worker enablement",
              "Health education and behavior change programs",
              "Digital identity, payments, and logistics integration",
              "Innovative, token-powered financing models",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 flex-shrink-0 font-bold text-lg"
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
          <p
            className="text-gray-600"
            style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            EcoGSM is not a single app. It is a connected ecosystem of services,
            platforms, and partners — organized to make essential health
            services accessible, affordable, and reliable for everyone,
            regardless of geography or income.
          </p>
        </div>
      </section>

      {/* SECTION 3: MISSION */}
      <section style={{ backgroundColor: "#075E54" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-bold text-white mb-8"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Our Mission
          </h2>
          <ul className="space-y-5">
            {[
              "Closes the access gap between urban and rural healthcare",
              "Reduces avoidable suffering and preventable deaths",
              "Strengthens local health systems instead of replacing them",
              "Empowers people with knowledge, tools, and agency over their wellbeing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 font-bold text-lg text-white">
                  ✔
                </span>
                <span
                  className="text-white"
                  style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 4: THE PROBLEM */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="uppercase mb-3"
            style={{
              color: "#FFD700",
              fontWeight: 800,
              fontSize: "16px",
              letterSpacing: "0.18em",
            }}
          >
            THE REALITY
          </p>
          <h2
            className="font-bold text-gray-900 mb-10"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Health Systems Under Strain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Long travel distances to clinics and hospitals",
              "Shortage of doctors, nurses, and specialists",
              "Overcrowded public hospitals and under-resourced rural clinics",
              "Fragmented information and lack of reliable data",
              "Limited budgets and unsustainable funding models",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-4 p-5"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderLeft: "3px solid #25D366",
                  borderRadius: "12px",
                }}
              >
                <span className="text-2xl flex-shrink-0">⚠️</span>
                <p
                  className="text-gray-700 font-medium"
                  style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR APPROACH */}
      <section style={{ backgroundColor: "#128C7E" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-bold text-white mb-10 text-center"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Our Approach to Social Medicine
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left: numbered cards */}
            <div className="flex-1 grid grid-cols-1 gap-6">
              {[
                {
                  num: "1",
                  title: "Technology as an Enabler",
                  text: "We design tools to augment, not replace, human caregivers and local health systems.",
                },
                {
                  num: "2",
                  title: "Local Context First",
                  text: "Adapted to local languages, culture, and regulations, deployed with local partners.",
                },
                {
                  num: "3",
                  title: "Sustainable Financing",
                  text: "Tokenized incentives and results-based financing to scale beyond pilot projects.",
                },
                {
                  num: "4",
                  title: "Interoperability & DPI",
                  text: "Built to integrate with existing national identity, payment, and health systems.",
                },
              ].map((card) => (
                <div
                  key={card.num}
                  className="p-6 flex gap-4 items-start"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderLeft: "3px solid #25D366",
                    borderRadius: "12px",
                  }}
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    {card.num}
                  </span>
                  <div>
                    <h3
                      className="font-bold text-gray-900 mb-1"
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
                </div>
              ))}
            </div>
            {/* Right: image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <img
                src="/assets/generated/about-approach-workers.dim_800x600.jpg"
                alt="Four diverse health workers collaborating around a digital device outdoors in Africa"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: VALUES */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-bold text-gray-900 mb-8"
            style={{ fontSize: "2.4rem", fontWeight: 800 }}
          >
            Our Values
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Equity",
              "Dignity",
              "Collaboration",
              "Transparency",
              "Innovation with Responsibility",
            ].map((value) => (
              <span
                key={value}
                className="px-6 py-3 rounded-full text-white font-bold text-sm"
                style={{ backgroundColor: "#25D366", fontWeight: 700 }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TMU AI */}
      <section className="py-20 px-6" style={{ backgroundColor: "#075E54" }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="p-8"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderLeft: "3px solid #FFD700",
              borderRadius: "12px",
            }}
          >
            <h2
              className="font-bold text-gray-900 mb-4"
              style={{ fontSize: "2.4rem", fontWeight: 800 }}
            >
              Part of a Larger Vision: EcoGSM &amp; TMU AI
            </h2>
            <p
              className="text-gray-600 leading-relaxed mb-6"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              EcoGSM is a key pillar of the broader TMU AI-driven enablement
              platform, which supports digital infrastructure, education,
              agriculture, emergency response, and more. This gives EcoGSM a
              mature technical foundation and a wide network of partners.
            </p>
            <a
              href="https://www.tmu.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#25D366", fontWeight: 700 }}
              data-ocid="about.tmu_ai.button"
            >
              Learn About TMU AI
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
