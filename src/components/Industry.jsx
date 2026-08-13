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

function Industry() {
  const [active, setActive] = useState('reporting');
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const activeFeature =
    FEATURES.find((feature) => feature.key === active) || FEATURES[0];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 text-[#111214] sm:px-6 lg:px-10">
      {/* =========================================================
          TOP CENTER LIQUID GLASS ATMOSPHERE
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-300px] h-[680px] w-[2200px] -translate-x-1/2 rounded-[50%] blur-[70px]"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(215,235,255,0.38) 0%, rgba(232,244,255,0.24) 35%, rgba(245,250,255,0.10) 55%, transparent 72%)',
          }}
        />

        <div
          className="absolute left-1/2 top-[-220px] h-[500px] w-[850px] -translate-x-1/2 rounded-[50%] blur-[80px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(80,160,240,0.10) 0%, rgba(150,205,255,0.06) 45%, transparent 72%)',
          }}
        />

        <div
          className="absolute left-1/2 top-[-110px] h-[330px] w-[520px] -translate-x-1/2 rounded-full blur-[90px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(50,145,235,0.055) 0%, rgba(120,190,250,0.025) 48%, transparent 72%)',
          }}
        />

        <div
          className="absolute left-1/2 top-[-50px] h-[180px] w-[650px] -translate-x-1/2 rotate-[-4deg] rounded-[50%] blur-[45px] opacity-50"
          style={{
            background:
              'linear-gradient(105deg, transparent 15%, rgba(255,255,255,0.7) 40%, rgba(170,215,250,0.08) 52%, rgba(255,255,255,0.6) 65%, transparent 88%)',
          }}
        />
      </div>

      {/* =========================================================
          HEADER
          ========================================================= */}

      <div className="relative z-10 mx-20 mb-12 max-w-[1300px]">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#FF5A36]">
          Automation That Works
        </p>

        <h2
          className="
            max-w-[800px]
            font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
            text-[clamp(40px,6vw,64px)]
            font-semibold
            leading-[0.98]
            tracking-[-0.05em]
            text-[#111214]
          "
        >
          Put your business on{' '}
          <span className="text-[#FF5A36]">autopilot.</span>
        </h2>

        <p className="mt-5 max-w-[650px] text-[15px] font-medium leading-7 text-[#77746f] sm:text-[16px]">
          We build systems that handle the repetitive work behind your
          business — from capturing leads to routing, support, reporting, and
          everything in between.
        </p>
      </div>

      {/* =========================================================
          MAIN LIQUID GLASS PANEL
          ========================================================= */}

      <div
        onMouseMove={handleMouseMove}
        className="
          group relative z-10 mx-20
          flex max-w-[1440px]
          flex-col overflow-hidden
          rounded-[32px]
          border border-[#eee9df]
          bg-white/55
          shadow-[0_25px_80px_rgba(0,0,0,0.055)]
          backdrop-blur-2xl
          backdrop-saturate-150
          lg:flex-row
        "
      >
        {/* =====================================================
            BLUE MOUSE FOLLOW GLOW
            ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute z-20
            h-[300px] w-[300px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            opacity-0
            blur-[75px]
            transition-opacity duration-300
            group-hover:opacity-100
          "
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            background:
              'radial-gradient(circle, rgba(80,170,255,0.18) 0%, rgba(80,170,255,0.08) 38%, transparent 72%)',
          }}
        />

        {/* =====================================================
            LEFT — FEATURE TABS
            ===================================================== */}

        <div
          className="
            relative z-10 w-full shrink-0
            border-b border-[#eee9df]
            lg:w-[42%]
            lg:border-b-0
            lg:border-r
          "
        >
          <div className="flex h-full flex-col justify-center py-3">
            {FEATURES.map((feature, idx) => {
              const isActive = active === feature.key;

              return (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => setActive(feature.key)}
                  className={`
                    group relative w-full text-left
                    transition-all duration-300
                    ${
                      idx !== FEATURES.length - 1
                        ? 'border-b border-[#eee9df]'
                        : ''
                    }
                  `}
                >
                  {isActive && (
                    <div
                      className="
                        absolute inset-x-3 inset-y-2
                        rounded-[20px]
                        border border-white
                        bg-white/70
                        shadow-[0_8px_28px_rgba(0,0,0,0.055)]
                        backdrop-blur-xl
                      "
                    />
                  )}

                  <div className="relative px-6 py-5 sm:px-8">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <span
                        className={`
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-[13px]
                          border
                          transition-all duration-300
                          ${
                            isActive
                              ? 'border-[#FF6B4A]/35 bg-[#FF6B4A]/[0.06] text-[#FF5A36]'
                              : 'border-[#eee9df] bg-white/45 text-[#77746f] group-hover:border-[#ddd8ce] group-hover:bg-white/70 group-hover:text-[#111214]'
                          }
                        `}
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
                        className={`
                          flex-1
                          text-[15px]
                          font-bold
                          tracking-tight
                          transition-colors duration-300
                          ${
                            isActive
                              ? 'text-[#FF5A36]'
                              : 'text-[#55534f] group-hover:text-[#111214]'
                          }
                        `}
                      >
                        {feature.title}
                      </h3>

                      {/* Arrow */}
                      <svg
                        className={`
                          h-4 w-4 shrink-0
                          transition-all duration-300
                          ${
                            isActive
                              ? 'translate-x-0.5 rotate-90 text-[#FF5A36]'
                              : 'text-[#aaa7a1] group-hover:text-[#55534f]'
                          }
                        `}
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
                      className={`
                        grid transition-all duration-300
                        ${
                          isActive
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="
                            ml-[56px]
                            max-w-[330px]
                            pt-3
                            text-[13px]
                            font-medium
                            leading-6
                            text-[#77746f]
                          "
                        >
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

        {/* =====================================================
            RIGHT — DYNAMIC IMAGE
            ===================================================== */}

        <div
          className="
            relative z-10 flex min-h-[360px]
            flex-1 items-center justify-center
            overflow-hidden
            bg-white/30
            p-5
            backdrop-blur-xl
            sm:p-7
            lg:min-h-[420px]
            lg:p-8
          "
        >
          {/* Inner glass reflection */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-br
              from-white/60
              via-transparent
              to-white/20
            "
          />

          <div
            key={activeFeature.key}
            className="
              relative z-10
              w-full
              animate-[fadeIn_350ms_ease-out]
            "
          >
            <div
              className="
                relative overflow-hidden
                rounded-[26px]
                border border-white
                bg-white/55
                shadow-[0_20px_55px_rgba(0,0,0,0.075)]
                backdrop-blur-xl
              "
            >
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="
                  block h-auto w-full
                  object-cover
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-white/[0.035]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute left-0 top-0
                  h-1/3 w-full
                  bg-gradient-to-b
                  from-white/20
                  to-transparent
                "
              />
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

export default Industry;