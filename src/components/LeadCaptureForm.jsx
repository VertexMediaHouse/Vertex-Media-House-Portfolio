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

const DEFAULT_SELECTED = {
  Automation: new Set(['AI Chatbots', 'AI Voice Agents', 'Workflow Automation', 'Lead Generation']),
  Designing: new Set(),
  Editing: new Set(),
};

const CATEGORY_ICONS = {
  Automation: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <circle cx="9" cy="14" r="1" />
      <circle cx="15" cy="14" r="1" />
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1" />
    </svg>
  ),
  Designing: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  Editing: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M16 10l6-3v10l-6-3" />
    </svg>
  ),
};

function LeadCaptureForm() {
  const [category, setCategory] = useState('Automation');
  const [selected, setSelected] = useState(new Set(DEFAULT_SELECTED.Automation));

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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
    setSelected(new Set(DEFAULT_SELECTED[cat]));
  };

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
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
    <section className="relative min-h-screen overflow-hidden bg-white px-4 py-10 sm:px-10">
      {/* ================= AMBIENT GLOW BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="pointer-events-none absolute inset-0 overflow-hidden ">
          {/* Large soft blue glow */}
          <div
            className="absolute left-1/2 top-[-300px] h-[680px] w-[1200px] -translate-x-1/2 rounded-[50%] blur-[70px]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(215,235,255,0.38) 0%, rgba(232,244,255,0.24) 35%, rgba(245,250,255,0.10) 55%, transparent 72%)",
            }}
          />

          {/* Soft inner blue */}
          <div
            className="absolute left-1/2 top-[-220px] h-[500px] w-[850px] -translate-x-1/2 rounded-[50%] blur-[80px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(80,160,240,0.10) 0%, rgba(150,205,255,0.06) 45%, transparent 72%)",
            }}
          />

          {/* Very subtle center glow */}
          <div
            className="absolute left-1/2 top-[-110px] h-[330px] w-[520px] -translate-x-1/2 rounded-full blur-[90px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(50,145,235,0.055) 0%, rgba(120,190,250,0.025) 48%, transparent 72%)",
            }}
          />

          {/* Subtle liquid-glass reflection */}
          <div
            className="absolute left-1/2 top-[-50px] h-[180px] w-[650px] -translate-x-1/2 rotate-[-4deg] rounded-[50%] blur-[45px] opacity-50"
            style={{
              background:
                "linear-gradient(105deg, transparent 15%, rgba(255,255,255,0.7) 40%, rgba(170,215,250,0.08) 52%, rgba(255,255,255,0.6) 65%, transparent 88%)",
            }}
          />
        </div>

        {/* dotted texture, left edge, echoing reference */}

      </div>

      <div
        className="group relative z-10 mx-auto mt-10 max-w-[1300px] overflow-hidden rounded-[32px] border border-white/70 bg-white/45 p-6 shadow-[0_30px_90px_-25px_rgba(255,107,74,0.14)] backdrop-blur-2xl md:p-10"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }}
      >     <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(
      220px circle at ${mousePosition.x}% ${mousePosition.y}%,
      rgba(80, 170, 255, 0.18),
      rgba(80, 170, 255, 0.08) 35%,
      transparent 70%
    )`,
          }}
        />
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <h2 className="text-[30px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[36px]">
            Claim{' '}
            <span className="text-[#FF5A36]">20% OFF</span>{' '}
            Your First Project
          </h2>
          <p className="mt-2 text-[14px] font-medium text-slate-600">
            Book any Automation, Design, or Editing service during our event and get{' '}
            <span className="font-bold text-[#FF5A36]">20% OFF.</span>
          </p>
        </div>

        {/* ================= LIQUID GLASS CARD ================= */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_25px_80px_-20px_rgba(255,107,74,0.18)] backdrop-blur-2xl md:p-10">
          {/* ================= TWO COLUMN CONTENT ================= */}
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            {/* ===================== LEFT: SERVICES ===================== */}
            <div>
              <h3 className="text-[15px] font-bold text-slate-900">1. Choose Your Service</h3>
              <p className="mt-1 text-[12.5px] font-medium text-slate-500">
                Select the service you're interested in:
              </p>

              {/* Category tabs */}
              <div className="mt-3 grid grid-cols-3 gap-2.5">
                {Object.keys(SERVICES_BY_CATEGORY).map((cat) => {
                  const isActive = category === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleCategoryChange(cat)}
                      className={`flex items-center justify-center gap-2 rounded-[10px] border px-3 py-2.5 text-[13px] font-bold backdrop-blur-xl transition-all duration-200 ${isActive
                        ? 'border-[#FF6B4A]/60 bg-[#FF6B4A]/[0.06] text-[#FF5A36] shadow-[0_2px_10px_rgba(255,107,74,0.10)]'
                        : 'border-slate-200/80 bg-white/50 text-slate-500 hover:border-slate-300 hover:bg-white/70'
                        }`}
                    >
                      <span className={isActive ? 'text-[#FF5A36]' : 'text-slate-400'}>
                        {CATEGORY_ICONS[cat]}
                      </span>
                      {cat}
                    </button>
                  );
                })}
              </div>

              <p className="mt-4 text-[12.5px] font-semibold text-slate-500">
                Select the {category} services you need:
              </p>

              {/* Service checkboxes */}
              <div className="mt-2.5 grid grid-cols-2 gap-x-3 gap-y-2">
                {SERVICES_BY_CATEGORY[category].map((service) => {
                  const isChecked = selected.has(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`flex items-center gap-2 rounded-[9px] border px-2.5 py-2 text-left text-[12.5px] font-semibold backdrop-blur-xl transition-all duration-150 ${isChecked
                        ? 'border-[#FF6B4A]/60 bg-[#FF6B4A]/[0.05] text-[#FF5A36]'
                        : 'border-slate-200/80 bg-white/40 text-slate-600 hover:bg-white/60'
                        }`}
                    >
                      <span
                        className={`flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-[4px] border transition-all duration-150 ${isChecked
                          ? 'border-[#FF6B4A] bg-[#FF6B4A]'
                          : 'border-slate-300 bg-white/70'
                          }`}
                      >
                        {isChecked && (
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        )}
                      </span>
                      {service}
                    </button>
                  );
                })}
              </div>

              {/* Discount notice */}
              {selected.size > 0 && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#FF8A70]/25 bg-[#FFF4F0] px-3.5 py-3 backdrop-blur-xl">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6B4A] text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.59 13.41L11 3.83A2 2 0 009.59 3.24L3 3v6.59a2 2 0 00.59 1.42l9.58 9.58a2 2 0 002.83 0l4.59-4.59a2 2 0 000-2.83z" />
                      <circle cx="7.5" cy="7.5" r="1" />
                    </svg>
                  </span>
                  <p className="text-[12.5px] font-medium leading-snug text-[#C4472E]">
                    <span className="font-bold">You'll get 20% instant discount</span> on the selected services.
                  </p>
                </div>
              )}
            </div>

            {/* ===================== RIGHT: FORM ===================== */}
            <div>
              <h3 className="text-[15px] font-bold text-slate-900">2. Tell Us About You</h3>
              <p className="mt-1 text-[12.5px] font-medium text-slate-500">
                Fill in your details and we'll get in touch with you shortly.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2.5">
                <FieldWithIcon
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FieldWithIcon
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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

              <div className="mt-2.5">
                <FieldWithIcon
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
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
                  <p className="mt-1 text-[11px] font-medium text-red-500">Enter a valid email address.</p>
                )}
              </div>

              <div className="mt-2.5">
                <div
                  className={`flex items-stretch overflow-hidden rounded-[10px] border bg-white/45 backdrop-blur-xl transition-all duration-200 ${phoneError
                    ? 'border-red-400'
                    : 'border-slate-200/80 focus-within:border-[#FF6B4A]/60 focus-within:bg-white/65'
                    }`}
                >
                  <span className="flex select-none items-center gap-1 border-r border-slate-200/70 px-2.5 text-[13px] font-semibold text-slate-500">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                    className="w-full bg-transparent px-3 py-2.5 text-[13px] font-medium text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                {phoneError && (
                  <p className="mt-1 text-[11px] font-medium text-red-500">Enter a valid 10-digit phone number.</p>
                )}
              </div>

              <div className="mt-2.5 flex items-start gap-2.5 rounded-[10px] border border-slate-200/80 bg-white/40 px-3 py-2.5 backdrop-blur-xl transition-all focus-within:bg-white/65">
                <svg width="15" height="15" className="mt-0.5 shrink-0 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                <textarea
                  rows={1}
                  placeholder="Tell us about your project (Optional)"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full resize-none bg-transparent text-[13px] font-medium text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitted}
                className="group relative mt-3 flex w-full items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-[#FF5A36] px-6 py-3 text-[13.5px] font-bold text-white shadow-[0_8px_22px_rgba(255,90,54,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F14E2C] disabled:opacity-50"
              >
                <span className="relative">
                  {submitted ? "Sent — We'll be in touch" : 'Claim My 20% Discount Now'}
                </span>
                {!submitted && (
                  <svg className="relative transition-transform duration-200 group-hover:translate-x-1" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Your details are safe with us. We never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldWithIcon({ icon, error, ...props }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-[10px] border px-3 py-2.5 backdrop-blur-xl transition-all duration-200 ${error
        ? 'border-red-400 bg-red-50/30'
        : 'border-slate-200/80 bg-white/45 focus-within:border-[#FF6B4A]/60 focus-within:bg-white/65'
        }`}
    >
      <span className="shrink-0 text-slate-400">{icon}</span>
      <input
        {...props}
        className="w-full bg-transparent text-[13px] font-medium text-slate-900 placeholder:font-medium placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );
}

export default LeadCaptureForm;