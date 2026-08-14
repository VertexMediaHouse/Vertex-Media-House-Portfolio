import { useState } from 'react';
import Header from '../components/Header';
import HowVertexWorks from '../components/HowVertexWorks';
import LeadCaptureForm from '../components/LeadCaptureForm';

const MANUFACTURING_FEATURES = [
  {
    key: 'inventory-alerts',
    title: 'Auto-Reordering',
    detail:
      'Trigger vendor purchase orders automatically when raw material stock levels drop below custom safety thresholds.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    ),
  },
  {
    key: 'qa-reports',
    title: 'Inspection Tracking',
    detail:
      'Generate digital quality checks and audit-ready reports on the fly right from the factory floor tablet.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    key: 'client-updates',
    title: 'Order Status Sync',
    detail:
      'Automatically update distributors with real-time tracking alerts as jobs progress from assembly to shipping.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    ),
  },
  {
    key: 'shift-handover',
    title: 'Shift Syncing',
    detail:
      'Keep production flowing by automatically logging handovers, outputs, and maintenance alerts across shift changes.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

/* =========================================================
   MANUFACTURING VISUALS
   ========================================================= */

function AutoReorderingVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-[26px] border border-[#ebe7df] bg-white/85 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Inventory control
            </p>

            <p className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#111214]">
              Materials running low
            </p>
          </div>

          <span className="flex items-center gap-2 rounded-full border border-[#eee9df] bg-[#faf9f7] px-3 py-1.5 text-[10px] font-bold text-[#55534f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]/20 border border-[#ff5a36]" />
            MONITORING
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {[
            ['Aluminium Sheets', '18%', 'Reorder triggered'],
            ['Industrial Resin', '12%', 'Reorder triggered'],
            ['Steel Fasteners', '64%', 'Stock healthy'],
          ].map(([material, stock, status], index) => (
            <div
              key={material}
              className="rounded-[18px] border border-[#eee9df] bg-[#faf9f7] p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-bold text-[#111214]">
                    {material}
                  </p>

                  <p className="mt-1 text-[10px] text-[#8b8780]">
                    {status}
                  </p>
                </div>

                <span
                  className={`text-[12px] font-bold ${
                    index < 2 ? 'text-[#ff5a36]' : 'text-[#55534f]'
                  }`}
                >
                  {stock}
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e7e3dc]">
                <div
                  className={`h-full rounded-full ${
                    index < 2
                      ? 'w-[18%] bg-[#ff5a36]/20 border border-[#ff5a36]'
                      : 'w-[64%] bg-[#55534f]'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ORANGE AUTOMATION BAR — BLACK CONTENT */}
        <div className="mt-4 flex items-center justify-between rounded-[16px] bg-[#ff5a36]/20 border border-[#ff5a36] px-4 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-black/55">
              Automation
            </p>

            <p className="mt-1 text-[12px] font-semibold text-black">
              Purchase order created automatically
            </p>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
            <svg
              className="h-4 w-4 text-black"
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

function InspectionTrackingVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-[26px] border border-[#ebe7df] bg-white/85 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Quality control
            </p>

            <p className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#111214]">
              Inspection report
            </p>
          </div>

          <span className="rounded-full bg-[#ff5a36]/20 border border-[#ff5a36] px-3 py-1.5 text-[9px] font-bold text-black">
            QC-2048
          </span>
        </div>

        <div className="mt-5 rounded-[20px] border border-[#eee9df] bg-[#faf9f7] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#aaa59d]">
                Production batch
              </p>

              <p className="mt-1 text-[15px] font-bold text-[#111214]">
                Batch #MX-4821
              </p>
            </div>

            <span className="rounded-full bg-[#f1eee8] px-2.5 py-1 text-[9px] font-bold text-[#55534f]">
              98.6% PASS
            </span>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[
            ['Dimensions', 'Within tolerance'],
            ['Surface finish', 'Passed'],
            ['Material grade', 'Verified'],
            ['Safety check', 'Passed'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-[14px] border border-[#eee9df] bg-white px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff5a36]/20 border border-[#ff5a36]">
                  <svg
                    className="h-3 w-3 text-black"
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

                <span className="text-[11px] font-semibold text-[#55534f]">
                  {label}
                </span>
              </div>

              <span className="text-[10px] font-bold text-[#111214]">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* ORANGE AUTOMATION BAR — BLACK CONTENT */}
        <div className="mt-4 flex items-center gap-3 rounded-[16px] bg-[#ff5a36]/20 border border-[#ff5a36] px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
            <svg
              className="h-4 w-4 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20h9"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
              />
            </svg>
          </div>

          <p className="text-[11px] font-semibold text-black">
            Audit-ready report generated automatically.
          </p>
        </div>
      </div>
    </div>
  );
}

function OrderStatusVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-[26px] border border-[#ebe7df] bg-white/85 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Production tracking
            </p>

            <p className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#111214]">
              Order #4821
            </p>
          </div>

          <span className="flex items-center gap-2 rounded-full border border-[#eee9df] bg-[#faf9f7] px-3 py-1.5 text-[10px] font-bold text-[#55534f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]/20 border border-[#ff5a36]" />
            IN PRODUCTION
          </span>
        </div>

        <div className="relative mt-7">
          <div className="absolute left-[12%] right-[12%] top-[14px] h-px bg-[#dedad2]" />

          <div className="relative grid grid-cols-4 gap-2">
            {[
              ['Order', true],
              ['Assembly', true],
              ['QA', true],
              ['Shipping', false],
            ].map(([label, complete]) => (
              <div key={label} className="text-center">
                <div
                  className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${
                    complete
                      ? 'bg-[#ff5a36]/20 border border-[#ff5a36]'
                      : 'border border-[#dedad2] bg-white'
                  }`}
                >
                  {complete ? (
                    <svg
                      className="h-3.5 w-3.5 text-black"
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
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#aaa59d]" />
                  )}
                </div>

                <p className="mt-2 text-[9px] font-bold text-[#55534f]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 space-y-2">
          {[
            ['Assembly completed', '08:42'],
            ['Quality check passed', '10:18'],
            ['Distributor notified', '10:20'],
          ].map(([event, time]) => (
            <div
              key={event}
              className="flex items-center justify-between rounded-[14px] border border-[#eee9df] bg-[#faf9f7] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]/20 border border-[#ff5a36]" />

                <span className="text-[11px] font-medium text-[#55534f]">
                  {event}
                </span>
              </div>

              <span className="text-[10px] font-semibold text-[#aaa59d]">
                {time}
              </span>
            </div>
          ))}
        </div>

        {/* ORANGE AUTOMATION BAR — BLACK CONTENT */}
        <div className="mt-4 rounded-[16px] bg-[#ff5a36]/20 border border-[#ff5a36] px-4 py-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-black/55">
            Automation
          </p>

          <p className="mt-1 text-[12px] font-semibold text-black">
            Distributor update sent automatically
          </p>
        </div>
      </div>
    </div>
  );
}

function ShiftSyncingVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-[26px] border border-[#ebe7df] bg-white/85 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Shift operations
            </p>

            <p className="mt-1 text-[22px] font-semibold tracking-[-0.03em] text-[#111214]">
              Handover center
            </p>
          </div>

          <span className="rounded-full bg-[#ff5a36]/20 border border-[#ff5a36] px-3 py-1.5 text-[9px] font-bold text-black">
            LIVE SHIFT
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-[18px] border border-[#eee9df] bg-[#faf9f7] p-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#aaa59d]">
              Current shift
            </p>

            <p className="mt-2 text-[15px] font-bold text-[#111214]">
              Shift B
            </p>

            <p className="mt-1 text-[10px] text-[#77746f]">
              2:00 PM — 10:00 PM
            </p>
          </div>

          <div className="rounded-[18px] border border-[#eee9df] bg-[#faf9f7] p-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#aaa59d]">
              Next shift
            </p>

            <p className="mt-2 text-[15px] font-bold text-[#111214]">
              Shift C
            </p>

            <p className="mt-1 text-[10px] text-[#77746f]">
              10:00 PM — 6:00 AM
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-[20px] border border-[#eee9df] bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#aaa59d]">
              Handover checklist
            </p>

            <span className="text-[10px] font-bold text-[#ff5a36]">
              4 / 4
            </span>
          </div>

          <div className="mt-3 space-y-2">
            {[
              'Production output logged',
              'Machine status recorded',
              'Maintenance alerts shared',
              'Pending jobs transferred',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[13px] bg-[#faf9f7] px-3 py-2.5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5a36]/20 border border-[#ff5a36]">
                  <svg
                    className="h-3 w-3 text-black"
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

                <span className="text-[10px] font-medium text-[#55534f]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ORANGE AUTOMATION BAR — BLACK CONTENT */}
        <div className="mt-4 flex items-center gap-3 rounded-[16px] bg-[#ff5a36]/20 border border-[#ff5a36] px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
            <svg
              className="h-4 w-4 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3"
              />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>

          <p className="text-[11px] font-semibold text-black">
            Handover record saved automatically for the next team.
          </p>
        </div>
      </div>
    </div>
  );
}

function ManufacturingVisual({ active }) {
  switch (active) {
    case 'qa-reports':
      return <InspectionTrackingVisual />;

    case 'client-updates':
      return <OrderStatusVisual />;

    case 'shift-handover':
      return <ShiftSyncingVisual />;

    case 'inventory-alerts':
    default:
      return <AutoReorderingVisual />;
  }
}

/* =========================================================
   MANUFACTURING PAGE
   ========================================================= */

function Manufacturing() {
  const [active, setActive] = useState(MANUFACTURING_FEATURES[0].key);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const activeFeature =
    MANUFACTURING_FEATURES.find((feature) => feature.key === active) ||
    MANUFACTURING_FEATURES[0];

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
        {/* =========================================================
            TOP ATMOSPHERE
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
            Manufacturing Automation
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
            Automate your{' '}
            <span className="text-[#FF5A36]">
              supply &amp; production.
            </span>
          </h2>

          <p className="mt-5 max-w-[650px] text-[15px] font-medium leading-7 text-[#77746f] sm:text-[16px]">
            Integrate raw material sensors, automate order routing to vendors,
            and trigger instant delivery alerts for distributors.
          </p>
        </div>

        {/* =========================================================
            MAIN PRODUCT PANEL
            ========================================================= */}

        <div
          onMouseMove={handleMouseMove}
          className="
            group relative z-10 mx-auto
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
          {/* Mouse-follow blue shade */}

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
              LEFT TABS
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
              {MANUFACTURING_FEATURES.map((feature, idx) => {
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
                        idx !== MANUFACTURING_FEATURES.length - 1
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
              RIGHT — UNIQUE MANUFACTURING PRODUCT VISUAL
              ===================================================== */}

          <div
            className="
              relative z-10 flex min-h-[420px]
              flex-1 items-center justify-center
              overflow-hidden
              bg-white/30
              p-5
              backdrop-blur-xl
              sm:p-7
              lg:min-h-[500px]
              lg:p-10
            "
          >
            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-gradient-to-br
                from-white/70
                via-transparent
                to-white/20
              "
            />

            <div className="pointer-events-none absolute left-8 top-7 z-20 hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]/20 border border-[#ff5a36]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
                Vertex Manufacturing OS
              </span>
            </div>

            <div
              key={activeFeature.key}
              className="
                relative z-10
                w-full
                animate-[fadeIn_350ms_ease-out]
              "
            >
              <ManufacturingVisual active={activeFeature.key} />
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

export default Manufacturing;