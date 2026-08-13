import { useState } from 'react';

const FEATURES = [
  {
    key: 'recurring',
    title: 'Recurring tasks',
    detail:
      'Set it once and it runs forever — daily syncs, weekly cleanups, monthly billing, all on autopilot.',
    image: '/images/recurring-tasks.png',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.65 6.35A7.95 7.95 0 0012 4a8 8 0 108 8M17.65 6.35V4m0 2.35H15.3"
      />
    ),
  },
  {
    key: 'routing',
    title: 'Lead routing',
    detail:
      'Every new lead is scored, enriched, and handed to the right rep the moment it comes in — no manual triage.',
    image: '/images/lead-routing.png',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 11l18-8-8 18-2-8-8-2z"
      />
    ),
  },
  {
    key: 'triage',
    title: 'Ticket triage',
    detail:
      'Incoming support tickets are read, tagged, and routed automatically so nothing sits in a queue overnight.',
    image: '/images/ticket-triage.png',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
      />
    ),
  },
  {
    key: 'reporting',
    title: 'Live reporting',
    detail:
      'Daily and weekly reports build and deliver themselves straight to your inbox — no spreadsheets to update, no numbers to copy, no Monday scramble.',
    image: '/images/live-reporting.png',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 19h16M7 16v-4m5 4V8m5 8v-6"
      />
    ),
  },
];

function IndustrySlider() {
  const [active, setActive] = useState('reporting');

  const activeFeature =
    FEATURES.find((feature) => feature.key === active) || FEATURES[0];

  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] px-4 py-20 sm:px-6 lg:px-8">

      {/* Main panel */}
      <div className="relative mx-auto flex h-[450px] max-w-[1100px] flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:flex-row">

        {/* LEFT — Feature tabs */}
        <div className="relative w-full shrink-0 border-b border-slate-200 lg:w-[42%] lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col justify-center">
            {FEATURES.map((feature, idx) => {
              const isActive = active === feature.key;

              return (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => setActive(feature.key)}
                  className={`group relative w-full text-left transition-all duration-300 ${
                    idx !== FEATURES.length - 1
                      ? 'border-b border-slate-200'
                      : ''
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-2 rounded-2xl border border-[#ff3814]/20 bg-[#fff7f4] shadow-[0_8px_24px_rgba(255,56,20,0.06)]" />
                  )}

                  <div className="relative px-6 py-5 sm:px-8">
                    <div className="flex items-center gap-4">

                      {/* Icon */}
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                          isActive
                            ? 'border-[#ff3814]/25 bg-[#fff0eb] text-[#ff3814]'
                            : 'border-slate-200 bg-slate-50 text-slate-600 group-hover:border-slate-300 group-hover:bg-white group-hover:text-slate-800'
                        }`}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          viewBox="0 0 24 24"
                        >
                          {feature.icon}
                        </svg>
                      </span>

                      {/* Title */}
                      <h3
                        className={`flex-1 text-[15px] font-bold tracking-tight transition-colors duration-300 ${
                          isActive
                            ? 'text-slate-950'
                            : 'text-slate-700 group-hover:text-slate-950'
                        }`}
                      >
                        {feature.title}
                      </h3>

                      {/* Arrow */}
                      <svg
                        className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'translate-x-0.5 rotate-90 text-[#ff3814]'
                            : 'text-slate-400 group-hover:text-slate-700'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 18l6-6-6-6"
                        />
                      </svg>
                    </div>

                    {/* Description */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isActive
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="ml-[56px] max-w-[330px] pt-3 text-[13px] font-medium leading-6 text-slate-600">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT — Dynamic image */}
        <div className="relative flex min-h-[440px] flex-1 items-center justify-center overflow-hidden bg-slate-50 p-5 sm:p-7 lg:min-h-[560px] lg:p-8">

          <div
            key={activeFeature.key}
            className="relative w-full animate-[fadeIn_350ms_ease-out]"
          >
            <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.10)]">

              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="block h-auto w-full object-cover"
              />

              {/* Very subtle image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-white/[0.03]" />
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px) scale(0.99);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}

export default IndustrySlider;