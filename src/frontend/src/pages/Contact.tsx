import { useState } from "react";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Benin",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Burkina Faso",
  "Burundi",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Côte d'Ivoire",
  "Democratic Republic of Congo",
  "Denmark",
  "Djibouti",
  "Egypt",
  "Eritrea",
  "Ethiopia",
  "Finland",
  "France",
  "Gambia",
  "Germany",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Haiti",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kenya",
  "Lebanon",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mexico",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Niger",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Palestinian Territories",
  "Philippines",
  "Portugal",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sudan",
  "Sweden",
  "Switzerland",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    country: "",
    email: "",
    role: "",
    areaOfInterest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* SECTION 1: HERO */}
      <section style={{ background: "#0d6e6e" }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#c8972e" }}
          >
            CONTACT
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Contact EcoGSM
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            We welcome inquiries from governments, NGOs, health providers,
            investors, and committed individuals who wish to participate in or
            support the EcoGSM ecosystem.
          </p>
        </div>
      </section>

      {/* SECTION 2: CONTACT LAYOUT */}
      <section style={{ background: "#e6f4f4" }} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* LEFT COLUMN: Contact Form (60%) */}
            <div className="lg:w-3/5">
              <div
                style={{ background: "#fafcfc" }}
                className="rounded-2xl shadow-sm p-8"
              >
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#0d6e6e" }}
                >
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div
                    data-ocid="contact.success_state"
                    className="text-center py-12"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
                      style={{ background: "#e6f4f4" }}
                    >
                      ✅
                    </div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#0d6e6e" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "#c8972e" }}
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <input
                        data-ocid="contact.fullname.input"
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "#c8972e" }}
                        htmlFor="organization"
                      >
                        Organization{" "}
                        <span className="text-gray-400 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        data-ocid="contact.organization.input"
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your organization name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "#c8972e" }}
                        htmlFor="country"
                      >
                        Country
                      </label>
                      <select
                        data-ocid="contact.country.select"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition appearance-none"
                      >
                        <option value="">Select your country</option>
                        {countries.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "#c8972e" }}
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        data-ocid="contact.email.input"
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                      />
                    </div>

                    {/* Role / Capacity */}
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "#c8972e" }}
                        htmlFor="role"
                      >
                        Role / Capacity
                      </label>
                      <select
                        data-ocid="contact.role.select"
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition appearance-none"
                      >
                        <option value="">Select your role</option>
                        <option value="Government">Government</option>
                        <option value="NGO">NGO</option>
                        <option value="Health Provider">Health Provider</option>
                        <option value="Investor">Investor</option>
                        <option value="Media">Media</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Area of Interest */}
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "#c8972e" }}
                        htmlFor="areaOfInterest"
                      >
                        Area of Interest
                      </label>
                      <select
                        data-ocid="contact.area.select"
                        id="areaOfInterest"
                        name="areaOfInterest"
                        required
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition appearance-none"
                      >
                        <option value="">Select area of interest</option>
                        <option value="Country Deployment">
                          Country Deployment
                        </option>
                        <option value="Partnership">Partnership</option>
                        <option value="Investment">Investment</option>
                        <option value="Media Inquiry">Media Inquiry</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "#c8972e" }}
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        data-ocid="contact.message.textarea"
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how you'd like to engage with EcoGSM..."
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      data-ocid="contact.submit_button"
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-white text-base transition hover:opacity-90"
                      style={{ background: "#0d6e6e" }}
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Info (40%) */}
            <div className="lg:w-2/5 flex flex-col gap-5 justify-start">
              <h2 className="text-2xl font-bold" style={{ color: "#0d6e6e" }}>
                Contact Information
              </h2>

              {/* Box 1: General Inquiries */}
              <div
                data-ocid="contact.general.card"
                className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4"
                style={{ borderLeft: "4px solid #0d6e6e" }}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0d6e6e"
                    strokeWidth="2"
                    role="img"
                    aria-label="Email"
                  >
                    <title>Email</title>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "#c8972e" }}
                  >
                    General Inquiries
                  </p>
                  <a
                    href="mailto:info@ecogsm.com"
                    className="text-gray-800 font-medium hover:underline"
                    style={{ color: "#0d6e6e" }}
                  >
                    info@ecogsm.com
                  </a>
                </div>
              </div>

              {/* Box 2: Partnerships */}
              <div
                data-ocid="contact.partnerships.card"
                className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4"
                style={{ borderLeft: "4px solid #0d6e6e" }}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0d6e6e"
                    strokeWidth="2"
                    role="img"
                    aria-label="Email"
                  >
                    <title>Email</title>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "#c8972e" }}
                  >
                    Partnerships
                  </p>
                  <a
                    href="mailto:partners@ecogsm.com"
                    className="font-medium hover:underline"
                    style={{ color: "#0d6e6e" }}
                  >
                    partners@ecogsm.com
                  </a>
                </div>
              </div>

              {/* Box 3: Media & Press */}
              <div
                data-ocid="contact.media.card"
                className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4"
                style={{ borderLeft: "4px solid #0d6e6e" }}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#0d6e6e"
                    strokeWidth="2"
                    role="img"
                    aria-label="Email"
                  >
                    <title>Email</title>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "#c8972e" }}
                  >
                    Media & Press
                  </p>
                  <a
                    href="mailto:media@ecogsm.com"
                    className="font-medium hover:underline"
                    style={{ color: "#0d6e6e" }}
                  >
                    media@ecogsm.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
