import Header from '../components/Header';
import HowVertexWorks from '../components/HowVertexWorks';
import LeadCaptureForm from '../components/LeadCaptureForm';
import { useState } from 'react';

const REAL_ESTATE_FEATURES = [
  {
    key: 'lead-capture',
    title: 'Instant Lead Capture',
    detail:
      'Capture buyer enquiries from Zillow, Realtor.com, or your website and route them instantly to the right agent.',
  },
  {
    key: 'tour-booking',
    title: 'Tour Booking Chatbot',
    detail:
      'Let prospects book physical viewings automatically on your calendar based on agent availability.',
  },
  {
    key: 'whatsapp-alerts',
    title: 'Listing Alerts',
    detail:
      'Blast new listings directly to matched buyers via WhatsApp the second they hit the market.',
  },
  {
    key: 'crm-sync',
    title: 'CRM Automation',
    detail:
      'Automatically sync buyer profiles, requirements, and feedback to Salesforce, HubSpot, or Follow Up Boss.',
  },
];

function LeadCaptureVisual() {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="rounded-[26px] border border-[#ebe7df] bg-white/80 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Live enquiries
            </p>
            <p className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#111214]">
              24 new buyers
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#eee9df] bg-white px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF5A36]" />
            <span className="text-[11px] font-semibold text-[#77746f]">
              Live
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {[
            ['Sarah Mitchell', 'Downtown • 3 bed', 'Just now'],
            ['James Wilson', 'Oak Avenue • $720k', '2 min ago'],
            ['Emma Carter', 'Riverside • 4 bed', '5 min ago'],
          ].map(([name, requirement, time]) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-[18px] border border-[#eee9df] bg-[#faf9f7] p-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1eee8] text-[12px] font-bold text-[#55534f]">
                {name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-bold text-[#111214]">{name}</p>
                <p className="mt-0.5 truncate text-[11px] text-[#8b8780]">
                  {requirement}
                </p>
              </div>

              <span className="text-[10px] font-medium text-[#aaa59d]">
                {time}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-[16px] bg-[#FF5A36] px-4 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">
              Automation
            </p>
            <p className="mt-1 text-[12px] font-semibold text-white">
              Lead assigned automatically
            </p>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TourBookingVisual() {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="rounded-[26px] border border-[#ebe7df] bg-white/80 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Viewing calendar
            </p>
            <p className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#111214]">
              Today's tours
            </p>
          </div>

          <div className="rounded-xl border border-[#eee9df] bg-[#faf9f7] px-3 py-2 text-center">
            <p className="text-[9px] uppercase tracking-wider text-[#aaa59d]">
              AUG
            </p>
            <p className="text-[17px] font-bold text-[#111214]">14</p>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {[
            ['10:30 AM', 'Sarah Mitchell', 'Oak Residence'],
            ['12:00 PM', 'David Anderson', 'Riverside House'],
            ['02:30 PM', 'Emma Carter', 'Park Avenue'],
            ['04:00 PM', 'James Wilson', 'The Heights'],
          ].map(([time, person, property], index) => (
            <div
              key={time}
              className={`flex items-center gap-4 rounded-[18px] border p-3 ${
                index === 1
                  ? 'border-[#FF5A36]/20 bg-[#fff8f5]'
                  : 'border-[#eee9df] bg-[#faf9f7]'
              }`}
            >
              <div className="w-[65px] text-[11px] font-bold text-[#55534f]">
                {time}
              </div>

              <div className="h-8 w-px bg-[#e7e3dc]" />

              <div className="flex-1">
                <p className="text-[12px] font-bold text-[#111214]">
                  {person}
                </p>
                <p className="mt-0.5 text-[10px] text-[#8b8780]">
                  {property}
                </p>
              </div>

              {index === 1 && (
                <span className="rounded-full bg-[#FF5A36] px-2.5 py-1 text-[9px] font-bold text-white">
                  BOOKED
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[16px] border border-[#eee9df] bg-white px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5A36]">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>

            <p className="text-[11px] font-medium text-[#77746f]">
              Chatbot matched availability and booked automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListingAlertsVisual() {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="rounded-[26px] border border-[#ebe7df] bg-white/80 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Listing match
            </p>
            <p className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#111214]">
              18 buyers matched
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5A36]">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 8a6 6 0 00-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"
              />
            </svg>
          </div>
        </div>

        <div className="mt-5 rounded-[20px] border border-[#eee9df] bg-[#faf9f7] p-4">
          <div className="flex gap-4">
            <div className="h-[92px] w-[115px] shrink-0 overflow-hidden rounded-[14px] bg-[#e9e5dd]">
              <div className="flex h-full items-end justify-center">
                <div className="h-[68%] w-[70%] rounded-t-[12px] bg-[#d4cec3]" />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#aaa59d]">
                New listing
              </p>

              <p className="mt-1 text-[15px] font-bold text-[#111214]">
                42 Oak Street
              </p>

              <p className="mt-1 text-[11px] text-[#77746f]">
                4 bed • 3 bath • $895,000
              </p>

              <div className="mt-3 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A36]" />
                <span className="text-[10px] font-semibold text-[#55534f]">
                  Match score 94%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[
            ['WhatsApp', '18 buyers notified'],
            ['Buyer list', '6 high-intent matches'],
            ['Agent', 'Alert sent'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-[14px] border border-[#eee9df] bg-white px-4 py-3"
            >
              <span className="text-[11px] font-semibold text-[#77746f]">
                {label}
              </span>
              <span className="text-[11px] font-bold text-[#111214]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CRMSyncVisual() {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="rounded-[26px] border border-[#ebe7df] bg-white/80 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Pipeline sync
            </p>
            <p className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#111214]">
              Everything connected
            </p>
          </div>

          <span className="flex items-center gap-2 rounded-full border border-[#eee9df] bg-[#faf9f7] px-3 py-1.5 text-[10px] font-bold text-[#55534f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A36]" />
            SYNCED
          </span>
        </div>

        <div className="relative mt-7">
          <div className="absolute left-[25%] right-[25%] top-1/2 h-px bg-[#dedad2]" />

          <div className="grid grid-cols-3 gap-4">
            <div className="relative z-10 rounded-[20px] border border-[#eee9df] bg-[#faf9f7] p-4 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-[14px] bg-white shadow-sm">
                <span className="text-[11px] font-black text-[#111214]">
                  LEAD
                </span>
              </div>
              <p className="mt-3 text-[10px] font-bold text-[#55534f]">
                Buyer
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF5A36] shadow-[0_8px_20px_rgba(255,90,54,0.20)]">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </div>
            </div>

            <div className="relative z-10 rounded-[20px] border border-[#eee9df] bg-[#faf9f7] p-4 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-[14px] bg-white shadow-sm">
                <span className="text-[10px] font-black text-[#111214]">
                  CRM
                </span>
              </div>
              <p className="mt-3 text-[10px] font-bold text-[#55534f]">
                Pipeline
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {[
            'Buyer profile created',
            'Requirements attached',
            'Agent assigned',
            'Follow-up sequence started',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-[14px] border border-[#eee9df] bg-[#faf9f7] px-4 py-2.5"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF5A36]">
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

              <span className="text-[11px] font-medium text-[#55534f]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RealEstateVisual({ active }) {
  switch (active) {
    case 'tour-booking':
      return <TourBookingVisual />;
    case 'whatsapp-alerts':
      return <ListingAlertsVisual />;
    case 'crm-sync':
      return <CRMSyncVisual />;
    default:
      return <LeadCaptureVisual />;
  }
}

function RealEstate() {
  const [active, setActive] = useState(REAL_ESTATE_FEATURES[0].key);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const activeFeature = REAL_ESTATE_FEATURES.find(
    (feature) => feature.key === active
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-white px-4 py-20 text-[#111214] sm:px-6 lg:px-10">
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
        </div>

        <div className="relative z-10 mx-auto mb-12 max-w-[1300px]">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#FF5A36]">
            Real Estate Automation
          </p>

          <h2 className="max-w-[800px] font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif'] text-[clamp(40px,6vw,64px)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#111214]">
            Automate your{' '}
            <span className="text-[#FF5A36]">property pipeline.</span>
          </h2>

          <p className="mt-5 max-w-[650px] text-[15px] font-medium leading-7 text-[#77746f] sm:text-[16px]">
            Connect with buyers instantly, showcase listings on autopilot,
            and handle bookings without lifting a finger.
          </p>
        </div>

        <div
          onMouseMove={handleMouseMove}
          className="group relative z-10 mx-auto flex max-w-[1440px] flex-col overflow-hidden rounded-[32px] border border-[#eee9df] bg-white/55 shadow-[0_25px_80px_rgba(0,0,0,0.055)] backdrop-blur-2xl backdrop-saturate-150 lg:flex-row"
        >
          <div
            className="pointer-events-none absolute z-20 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[75px] transition-opacity duration-300 group-hover:opacity-100"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              background:
                'radial-gradient(circle, rgba(80,170,255,0.18) 0%, rgba(80,170,255,0.08) 38%, transparent 72%)',
            }}
          />

          <div className="relative z-10 w-full shrink-0 border-b border-[#eee9df] lg:w-[42%] lg:border-b-0 lg:border-r">
            <div className="flex h-full flex-col justify-center py-3">
              {REAL_ESTATE_FEATURES.map((feature, idx) => {
                const isActive = active === feature.key;

                return (
                  <button
                    key={feature.key}
                    type="button"
                    onClick={() => setActive(feature.key)}
                    className={`group relative w-full text-left transition-all duration-300 ${
                      idx !== REAL_ESTATE_FEATURES.length - 1
                        ? 'border-b border-[#eee9df]'
                        : ''
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-x-3 inset-y-2 rounded-[20px] border border-white bg-white/70 shadow-[0_8px_28px_rgba(0,0,0,0.055)] backdrop-blur-xl" />
                    )}

                    <div className="relative px-6 py-5 sm:px-8">
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border transition-all duration-300 ${
                            isActive
                              ? 'border-[#FF6B4A]/35 bg-[#FF6B4A]/[0.06] text-[#FF5A36]'
                              : 'border-[#eee9df] bg-white/45 text-[#77746f] group-hover:border-[#ddd8ce] group-hover:bg-white/70 group-hover:text-[#111214]'
                          }`}
                        >
                          <span className="text-[11px] font-black">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                        </span>

                        <h3
                          className={`flex-1 text-[15px] font-bold tracking-tight transition-colors duration-300 ${
                            isActive
                              ? 'text-[#FF5A36]'
                              : 'text-[#55534f] group-hover:text-[#111214]'
                          }`}
                        >
                          {feature.title}
                        </h3>

                        <svg
                          className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'translate-x-0.5 rotate-90 text-[#FF5A36]'
                              : 'text-[#aaa7a1] group-hover:text-[#55534f]'
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

                      <div
                        className={`grid transition-all duration-300 ${
                          isActive
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
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

          <div className="relative z-10 flex min-h-[420px] flex-1 items-center justify-center overflow-hidden bg-white/30 p-5 backdrop-blur-xl sm:p-7 lg:min-h-[500px] lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/20" />

            <div className="pointer-events-none absolute left-8 top-7 z-20 hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A36]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
                Vertex Real Estate OS
              </span>
            </div>

            <div
              key={activeFeature.key}
              className="relative z-10 w-full animate-[fadeIn_350ms_ease-out]"
            >
              <RealEstateVisual active={activeFeature.key} />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(8px) scale(0.985);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>
      </section>

      <HowVertexWorks />
      <LeadCaptureForm />
    </>
  );
}

export default RealEstate;