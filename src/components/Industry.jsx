import { useState } from 'react';

/* =========================================================
   DEFAULT REAL ESTATE FEATURES
   ========================================================= */

const DEFAULT_FEATURES = [
  {
    key: 'lead-capture',
    title: 'Instant Lead Capture',
    detail:
      'Capture buyer enquiries from Zillow, Realtor.com, or your website and route them instantly to the right agent.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1v4a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 001-1m-6 0h6"
      />
    ),
  },
  {
    key: 'tour-booking',
    title: 'Tour Booking Chatbot',
    detail:
      'Let prospects book physical viewings automatically on your calendar based on agent availability.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    key: 'whatsapp-alerts',
    title: 'Listing Alerts',
    detail:
      'Blast new listings directly to matched buyers via WhatsApp the second they hit the market.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
  {
    key: 'crm-sync',
    title: 'CRM Automation',
    detail:
      'Automatically sync buyer profiles, requirements, and feedback to your CRM and keep the pipeline moving.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17"
      />
    ),
  },
];

/* =========================================================
   REAL ESTATE VISUALS
   ========================================================= */

function LeadCaptureVisual() {
  return (
    <div className="w-full max-w-[600px]">
      <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/75 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <div className="border-b border-[#eee9df] px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
                Lead intake
              </p>
              <h3 className="mt-1 text-[21px] font-bold tracking-[-0.03em] text-[#111214]">
                New buyer enquiry
              </h3>
            </div>

            <span className="rounded-full bg-[#ff5a36]/10 px-3 py-1.5 text-[9px] font-bold text-[#ff5a36]">
              AUTO-ROUTED
            </span>
          </div>
        </div>

        <div className="grid gap-3 p-5">
          {[
            ['Source', 'Website enquiry'],
            ['Buyer', 'Sarah Mitchell'],
            ['Requirement', '3 bed • Downtown • $850k'],
            ['Assigned to', 'Michael • Downtown Team'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-[16px] border border-[#eee9df] bg-[#faf9f7] px-4 py-3"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#aaa59d]">
                {label}
              </span>
              <span className="text-[11px] font-bold text-[#111214]">
                {value}
              </span>
            </div>
          ))}

          <div className="mt-1 rounded-[18px] bg-[#111214] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <span className="text-[11px] font-black text-[#ff5a36]">
                  →
                </span>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Workflow triggered
                </p>
                <p className="mt-1 text-[12px] font-semibold text-white">
                  Assign → Notify → Follow up
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TourBookingVisual() {
  return (
    <div className="w-full max-w-[600px]">
      <div className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              AI booking assistant
            </p>

            <h3 className="mt-1 text-[21px] font-bold tracking-[-0.03em] text-[#111214]">
              Viewing booked
            </h3>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111214]">
            <svg
              className="h-4 w-4 text-[#ff5a36]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <div className="mt-5 rounded-[20px] bg-[#faf9f7] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white shadow-sm">
              <span className="text-[10px] font-black text-[#111214]">
                14
              </span>
            </div>

            <div>
              <p className="text-[12px] font-bold text-[#111214]">
                Wednesday · 2:30 PM
              </p>
              <p className="mt-1 text-[10px] text-[#8b8780]">
                42 Oak Street · Sarah Mitchell
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[
            ['Customer asked for available times', 'Completed'],
            ['Calendar availability checked', 'Completed'],
            ['Viewing confirmed', 'Booked'],
          ].map(([label, status], index) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-[15px] border border-[#eee9df] bg-white px-4 py-3"
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  index === 2 ? 'bg-[#ff5a36]' : 'bg-[#111214]'
                }`}
              >
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l4 4L19 6"
                  />
                </svg>
              </div>

              <span className="flex-1 text-[10px] font-semibold text-[#55534f]">
                {label}
              </span>

              <span className="text-[9px] font-bold text-[#ff5a36]">
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ListingAlertsVisual() {
  return (
    <div className="w-full max-w-[600px]">
      <div className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Buyer matching
            </p>

            <h3 className="mt-1 text-[21px] font-bold tracking-[-0.03em] text-[#111214]">
              New listing detected
            </h3>
          </div>

          <span className="rounded-full bg-[#111214] px-3 py-1.5 text-[9px] font-bold text-white">
            18 MATCHES
          </span>
        </div>

        <div className="mt-5 rounded-[20px] border border-[#eee9df] bg-[#faf9f7] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#aaa59d]">
                Property
              </p>

              <p className="mt-1 text-[17px] font-bold text-[#111214]">
                42 Oak Street
              </p>

              <p className="mt-1 text-[10px] text-[#77746f]">
                4 bed · 3 bath · $895,000
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff5a36]/10">
              <span className="text-[10px] font-black text-[#ff5a36]">
                94%
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ['18', 'Matched'],
            ['12', 'Notified'],
            ['6', 'High intent'],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-[16px] border border-[#eee9df] bg-white p-4"
            >
              <p className="text-[20px] font-bold tracking-[-0.04em] text-[#111214]">
                {number}
              </p>
              <p className="mt-1 text-[9px] font-semibold text-[#8b8780]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-[16px] bg-[#111214] px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-white">
              WhatsApp alert campaign
            </span>
            <span className="text-[9px] font-bold text-[#ff5a36]">
              SENT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMSyncVisual() {
  return (
    <div className="w-full max-w-[600px]">
      <div className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              CRM workflow
            </p>

            <h3 className="mt-1 text-[21px] font-bold tracking-[-0.03em] text-[#111214]">
              Buyer pipeline
            </h3>
          </div>

          <span className="flex items-center gap-2 rounded-full border border-[#eee9df] bg-white px-3 py-1.5 text-[9px] font-bold text-[#55534f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]" />
            SYNCED
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ['NEW', '24', 'Buyer leads'],
            ['ACTIVE', '12', 'In follow-up'],
            ['TOUR', '7', 'Viewing stage'],
          ].map(([stage, number, label]) => (
            <div
              key={stage}
              className="rounded-[18px] border border-[#eee9df] bg-[#faf9f7] p-4"
            >
              <p className="text-[8px] font-bold tracking-[0.14em] text-[#aaa59d]">
                {stage}
              </p>
              <p className="mt-2 text-[25px] font-bold tracking-[-0.05em] text-[#111214]">
                {number}
              </p>
              <p className="mt-1 text-[9px] font-medium text-[#8b8780]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {[
            'Buyer profile created',
            'Requirements synced',
            'Agent assigned',
            'Follow-up sequence triggered',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-[15px] border border-[#eee9df] bg-white px-4 py-3"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111214]">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l4 4L19 6"
                  />
                </svg>
              </span>

              <span className="text-[10px] font-semibold text-[#55534f]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RealEstateVisual({ active, feature }) {
  if (feature?.visual) {
    return feature.visual;
  }

  switch (active) {
    case 'tour-booking':
      return <TourBookingVisual />;

    case 'whatsapp-alerts':
      return <ListingAlertsVisual />;

    case 'crm-sync':
      return <CRMSyncVisual />;

    case 'lead-capture':
    default:
      return <LeadCaptureVisual />;
  }
}

/* =========================================================
   INDUSTRY COMPONENT
   ========================================================= */

function Industry({
  category = 'Real Estate Automation',

  title = (
    <>
      Automate your{' '}
      <span className="text-[#FF5A36]">property pipeline.</span>
    </>
  ),

  description = 'Connect with buyers instantly, showcase listings on autopilot, and handle bookings without lifting a finger.',

  features = DEFAULT_FEATURES,

  eyebrow = 'Vertex Industry OS',
}) {
  const [active, setActive] = useState(features[0]?.key || '');
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const activeFeature =
    features.find((feature) => feature.key === active) || features[0];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  if (!activeFeature) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 text-[#111214] sm:px-6 lg:px-10">

      {/* =========================================================
          LIQUID GLASS ATMOSPHERE
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

      <div className="relative z-10 mx-auto mb-12 max-w-[1300px]">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#FF5A36]">
          {category}
        </p>

        <h2
          className="
            max-w-[850px]
            font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
            text-[clamp(40px,6vw,64px)]
            font-semibold
            leading-[0.98]
            tracking-[-0.05em]
            text-[#111214]
          "
        >
          {title}
        </h2>

        <p className="mt-5 max-w-[650px] text-[15px] font-medium leading-7 text-[#77746f] sm:text-[16px]">
          {description}
        </p>
      </div>

      {/* =========================================================
          PRODUCT PANEL
          ========================================================= */}

      <div
        onMouseMove={handleMouseMove}
        className="
          group relative z-10 mx-auto flex max-w-[1300px]
          flex-col overflow-hidden rounded-[32px]
          border border-[#eee9df]
          bg-white/55
          shadow-[0_25px_80px_rgba(0,0,0,0.055)]
          backdrop-blur-2xl backdrop-saturate-150
          lg:flex-row
        "
      >

        {/* Mouse-follow liquid glass glow */}

        <div
          className="
            pointer-events-none absolute z-20
            h-[300px] w-[300px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full blur-[75px]
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
          "
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            background:
              'radial-gradient(circle, rgba(255,90,54,0.12) 0%, rgba(255,90,54,0.05) 38%, transparent 72%)',
          }}
        />

        {/* =====================================================
            LEFT NAVIGATION
            ===================================================== */}

        <div className="relative z-10 w-full shrink-0 border-b border-[#eee9df] lg:w-[40%] lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col justify-center py-3">
            {features.map((feature, index) => {
              const isActive = active === feature.key;

              return (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => setActive(feature.key)}
                  className={`
                    group relative w-full text-left transition-all duration-300
                    ${
                      index !== features.length - 1
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
                      <span
                        className={`
                          flex h-10 w-10 shrink-0 items-center justify-center
                          rounded-[13px] border transition-all duration-300
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

                      <h3
                        className={`
                          flex-1 text-[15px] font-bold tracking-tight
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

                      <svg
                        className={`
                          h-4 w-4 shrink-0 transition-all duration-300
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
                        <p className="ml-[56px] max-w-[330px] pt-3 text-[13px] font-medium leading-6 text-[#77746f]">
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
            RIGHT VISUAL
            ===================================================== */}

        <div
          className="
            relative z-10 flex min-h-[500px] flex-1
            items-center justify-center overflow-hidden
            bg-white/30 p-5 backdrop-blur-xl
            sm:p-7 lg:p-10
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/20" />

          <div className="pointer-events-none absolute left-8 top-7 z-20 hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
              {eyebrow}
            </span>
          </div>

          <div
            key={activeFeature.key}
            className="relative z-10 flex w-full items-center justify-center animate-[industryFadeIn_350ms_ease-out]"
          >
            <RealEstateVisual
              active={activeFeature.key}
              feature={activeFeature}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes industryFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.985);
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