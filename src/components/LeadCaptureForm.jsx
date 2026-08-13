import { useState } from 'react';

const AUTOMATION_SERVICES = [
  'AI Chatbots',
  'AI Voice Agents',
  'Workflow Automation',
  'CRM Integration',
  'Live Chat Automation',
  'Lead Generation',
  'Email & SMS Automation',
  'Custom AI Solutions',
];

const DESIGN_SERVICES = [
  'Branding',
  'Website Design',
  'UI/UX Design',
  'Landing Pages',
];

const EDITING_SERVICES = [
  'Video Editing',
  'Photo Editing',
  'Motion Graphics',
  'Color Grading',
];

const SERVICES_BY_CATEGORY = {
  Automation: AUTOMATION_SERVICES,
  Designing: DESIGN_SERVICES,
  Editing: EDITING_SERVICES,
};

const CATEGORY_ICONS = {
  Automation: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <circle cx="9" cy="14" r="1" />
      <circle cx="15" cy="14" r="1" />
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1" />
    </svg>
  ),

  Designing: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),

  Editing: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M16 10l6-3v10l-6-3" />
    </svg>
  ),
};

function LeadCaptureForm() {
  const [category, setCategory] = useState('Automation');

  const [selected, setSelected] = useState(
    new Set([
      'AI Chatbots',
      'AI Voice Agents',
      'Workflow Automation',
      'Lead Generation',
    ])
  );

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service) => {
    const next = new Set(selected);

    if (next.has(service)) {
      next.delete(service);
    } else {
      next.add(service);
    }

    setSelected(next);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSelected(new Set());
  };

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value
      .replace(/\D/g, '')
      .slice(0, 10);

    setPhone(digitsOnly);
    setPhoneError(false);
  };

  const handleSubmit = () => {
    const validPhone = /^[6-9]\d{9}$/.test(phone);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setPhoneError(false);
    setEmailError(false);

    if (!validPhone) {
      setPhoneError(true);
      return;
    }

    if (!validEmail) {
      setEmailError(true);
      return;
    }

    const payload = {
      name,
      company,
      email,
      phone: '+91' + phone,
      note,
      services: Array.from(selected),
    };

    console.log('Lead submitted:', payload);

    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#ffffff] px-4 py-14 sm:px-8">

      {/* =========================================================
          TOP GLOWING DOME
          ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[430px] w-[1200px] -translate-x-1/2">

        {/* Soft warm atmospheric glow */}
        <div
          className="absolute left-1/2 top-[-300px] h-[680px] w-[1200px] -translate-x-1/2 rounded-[50%] blur-[55px]"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(255,220,211,0.55) 0%, rgba(255,238,232,0.35) 32%, rgba(255,248,245,0.16) 52%, transparent 72%)',
          }}
        />

        {/* Inner soft orange glow */}
        <div
          className="absolute left-1/2 top-[-220px] h-[500px] w-[850px] -translate-x-1/2 rounded-[50%] blur-[65px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,190,174,0.20) 0%, rgba(255,220,211,0.12) 42%, transparent 72%)',
          }}
        />

        {/* Very subtle center glow */}
        <div
          className="absolute left-1/2 top-[-110px] h-[330px] w-[520px] -translate-x-1/2 rounded-full blur-[75px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,130,105,0.08) 0%, rgba(255,160,140,0.03) 45%, transparent 72%)',
          }}
        />
      </div>

      {/* =========================================================
          HEADING
          ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1050px] text-center">

        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight text-slate-900">
          Claim{' '}
          <span className="bg-gradient-to-r from-[#FF6848] via-[#FF8A70] to-[#FF6848] bg-clip-text text-transparent">
            20% OFF
          </span>{' '}
          Your First Project
        </h2>

        <p className="mt-3 text-[15px] font-medium text-slate-600">
          Book any Automation, Design, or Editing service during our event
          and get{' '}
          <span className="font-bold text-[#C94A32]">
            20% OFF.
          </span>
        </p>
      </div>

      {/* =========================================================
          MAIN GLASS CARD
          ========================================================= */}

      <div className="relative z-10 mx-auto mt-10 max-w-[1050px] overflow-hidden rounded-[32px] border border-white/70 bg-white/45 p-6 shadow-[0_30px_90px_-25px_rgba(255,107,74,0.14)] backdrop-blur-2xl md:p-10">

        {/* Inner glass highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/60 via-white/20 to-[#fff3ef]/30" />

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">

          {/* =====================================================
              LEFT
              ===================================================== */}

          <div>
            <h3 className="text-base font-bold text-slate-900">
              1. Choose Your Service
            </h3>

            <p className="mt-1 text-[13px] font-medium text-slate-600">
              Select the service you're interested in:
            </p>

            {/* Categories */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {Object.keys(SERVICES_BY_CATEGORY).map((cat) => {
                const isActive = category === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`relative flex flex-col items-center justify-center gap-2 rounded-2xl border px-3 py-5 text-sm font-bold backdrop-blur-xl transition-all duration-300 ${
                      isActive
                        ? 'border-[#FF6B4A]/35 bg-[#FF6B4A]/10 text-[#C94A32] shadow-[0_8px_30px_rgba(255,107,74,0.10)] ring-1 ring-[#FF6B4A]/25'
                        : 'border-white/70 bg-white/35 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] hover:border-white hover:bg-white/55'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white/80 bg-[#FF6B4A] text-white shadow-md">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                    )}

                    <span
                      className={
                        isActive
                          ? 'text-[#C94A32]'
                          : 'text-slate-400'
                      }
                    >
                      {CATEGORY_ICONS[cat]}
                    </span>

                    {cat}
                  </button>
                );
              })}
            </div>

            <p className="mt-5 text-[13px] font-semibold text-slate-600">
              Select the {category} services you need:
            </p>

            {/* Services */}
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {SERVICES_BY_CATEGORY[category].map((service) => {
                const isChecked = selected.has(service);

                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left text-[13px] font-semibold backdrop-blur-xl transition-all duration-200 ${
                      isChecked
                        ? 'border-[#FF6B4A]/35 bg-[#FF6B4A]/10 text-[#C94A32] shadow-[0_4px_18px_rgba(255,107,74,0.08)]'
                        : 'border-white/70 bg-white/35 text-slate-700 hover:bg-white/55'
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all duration-150 ${
                        isChecked
                          ? 'border-[#FF6B4A] bg-[#FF6B4A] shadow-[0_2px_8px_rgba(255,107,74,0.25)]'
                          : 'border-slate-300/80 bg-white/50'
                      }`}
                    >
                      {isChecked && (
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </span>

                    {service}
                  </button>
                );
              })}
            </div>

            {/* Discount Notice */}
            {selected.size > 0 && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#FF8A70]/30 bg-[#FFF3EF] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">

                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/80 bg-[#FF6B4A] text-white shadow-sm">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.59 13.41L11 3.83A2 2 0 009.59 3.24L3 3v6.59a2 2 0 00.59 1.42l9.58 9.58a2 2 0 002.83 0l4.59-4.59a2 2 0 000-2.83z" />
                    <circle cx="7.5" cy="7.5" r="1" />
                  </svg>
                </span>

                <p className="text-[13px] font-medium leading-snug text-[#B94A32]">
                  <span className="font-bold">
                    You'll get 20% instant discount
                  </span>
                  <br />
                  on the selected services.
                </p>
              </div>
            )}
          </div>

          {/* =====================================================
              RIGHT
              ===================================================== */}

          <div>
            <h3 className="text-base font-bold text-slate-900">
              2. Tell Us About You
            </h3>

            <p className="mt-1 text-[13px] font-medium text-slate-600">
              Fill in your details and we'll get in touch with you shortly.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">

              {/* Name */}
              <FieldWithIcon
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                }
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* Company */}
              <FieldWithIcon
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="7" width="18" height="14" rx="1" />
                    <path d="M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3" />
                    <path d="M3 12h18" />
                  </svg>
                }
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />

            </div>

            {/* Email */}
            <div className="mt-3">
              <FieldWithIcon
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                    />
                    <path d="M2 7l10 6 10-6" />
                  </svg>
                }
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                error={emailError}
              />

              {emailError && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  Enter a valid email address.
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="mt-3">

              <div
                className={`flex items-stretch overflow-hidden rounded-xl border bg-white/35 backdrop-blur-xl transition-all duration-200 ${
                  phoneError
                    ? 'border-red-400'
                    : 'border-white/70 focus-within:border-[#FF6B4A]/60 focus-within:bg-white/50'
                }`}
              >
                <span className="flex select-none items-center gap-1 border-r border-white/60 px-3 text-sm font-semibold text-slate-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +91
                </span>

                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Your Mobile Number"
                  maxLength={10}
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full bg-transparent px-3.5 py-3 text-[13px] font-medium text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              {phoneError && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                  Enter a valid 10-digit phone number.
                </p>
              )}
            </div>

            {/* Note */}
            <div className="mt-3 flex items-start gap-3 rounded-xl border border-white/70 bg-white/35 px-3.5 py-3 backdrop-blur-xl transition-all focus-within:bg-white/50">

              <svg
                width="16"
                height="16"
                className="mt-0.5 shrink-0 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>

              <textarea
                rows={2}
                placeholder="Tell us about your project (Optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full resize-none bg-transparent text-[13px] font-medium text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitted}
              className="group relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/40 bg-[#FF6848] px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_10px_28px_rgba(255,107,74,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F15B3C] hover:shadow-[0_14px_32px_rgba(255,107,74,0.26)] disabled:opacity-50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative">
                {submitted
                  ? "Sent — We'll be in touch"
                  : 'Claim My 20% Discount Now'}
              </span>

              {!submitted && (
                <svg
                  className="relative transition-transform duration-200 group-hover:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              )}
            </button>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] font-medium text-slate-500">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>

              Your details are safe with us. We never share your information.
            </p>
          </div>
        </div>

        {/* =====================================================
            TRUST SECTION
            ===================================================== */}

        <div className="relative mt-8 grid grid-cols-2 gap-4 border-t border-white/60 pt-6 md:grid-cols-4">

          <TrustItem
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2l2.4 4.86 5.37.78-3.89 3.79.92 5.35L12 14.27l-4.8 2.51.92-5.35-3.89-3.79 5.37-.78z" />
              </svg>
            }
            title="20% Instant Discount"
            subtitle="Limited time event offer"
          />

          <TrustItem
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            }
            title="Expert Team"
            subtitle="Industry experienced professionals"
          />

          <TrustItem
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            }
            title="Custom Solutions"
            subtitle="Tailored to your business needs"
          />

          <TrustItem
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            }
            title="On-time Delivery"
            subtitle="We respect your time"
          />

        </div>
      </div>
    </section>
  );
}

/* =============================================================
   FIELD COMPONENT
   ============================================================= */

function FieldWithIcon({ icon, error, ...props }) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-3 backdrop-blur-xl transition-all duration-200 ${
        error
          ? 'border-red-400 bg-red-50/30'
          : 'border-white/70 bg-white/35 focus-within:border-[#FF6B4A]/60 focus-within:bg-white/55'
      }`}
    >
      <span className="shrink-0 text-slate-400">
        {icon}
      </span>

      <input
        {...props}
        className="w-full bg-transparent text-[13px] font-medium text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );
}

/* =============================================================
   TRUST ITEM
   ============================================================= */

function TrustItem({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-2.5">

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/40 text-[#FF6848] shadow-sm backdrop-blur-xl">
        {icon}
      </span>

      <div>
        <p className="text-[13px] font-bold leading-tight text-slate-900">
          {title}
        </p>

        <p className="text-[12px] font-medium leading-tight text-slate-500">
          {subtitle}
        </p>
      </div>

    </div>
  );
}

export default LeadCaptureForm;