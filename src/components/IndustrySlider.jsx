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

const CHART_BARS = [58, 44, 62, 70, 66, 78, 96, 82, 60, 68, 54];

function DashboardMock() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-slate-200/70 bg-white/60 p-4 shadow-[0_25px_70px_rgba(30,64,175,0.10),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl">

      {/* Glass reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/30 to-blue-100/20" />

      {/* Very subtle orange glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#ff3814]/[0.06] blur-[70px]" />

      {/* Top bar */}
      <div className="relative flex items-center justify-between border-b border-slate-200/70 pb-3">

        <div className="flex items-center gap-3">

          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[#ff3814]/20 bg-[#ff3814]/10 text-[#ff3814]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>

          <span className="text-[13px] font-medium text-slate-700">
            Insights
          </span>

          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>

        <div className="flex items-center gap-3">

          <div className="hidden items-center gap-2 rounded-md border border-slate-200/70 bg-white/60 px-2.5 py-1 text-[11px] text-slate-400 shadow-sm sm:flex">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
            </svg>
            Search
          </div>

          <span className="h-5 w-5 rounded-full bg-gradient-to-br from-[#ff765c] to-[#ff3814] shadow-[0_0_15px_rgba(255,56,20,0.25)]" />

        </div>
      </div>

      {/* Stat cards */}
      <div className="relative mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">

        {[
          {
            label: 'Tasks automated',
            value: '48,200',
            delta: '+12.3%',
          },
          {
            label: 'Time saved',
            value: '1,240h',
            delta: '+8.4%',
          },
          {
            label: 'Success rate',
            value: '98.6%',
            delta: 'stable',
          },
          {
            label: 'Active automations',
            value: '24',
            delta: '+3 this week',
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-slate-200/70 bg-white/55 px-2.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_5px_15px_rgba(30,64,175,0.04)] backdrop-blur-xl"
          >
            <p className="text-[9px] uppercase tracking-wide text-slate-400">
              {stat.label}
            </p>

            <p className="mt-1 text-[13px] font-semibold text-slate-800">
              {stat.value}
            </p>

            <p className="mt-0.5 text-[9px] text-[#ff3814]/75">
              {stat.delta}
            </p>
          </div>
        ))}

      </div>

      {/* Chart */}
      <div className="relative mt-3 rounded-lg border border-slate-200/70 bg-white/55 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">

        <div className="flex items-center justify-between">

          <p className="text-[11px] text-slate-500">
            Tasks automated per day
          </p>

          <div className="flex gap-1">

            <span className="rounded border border-[#ff3814]/10 bg-[#ff3814]/[0.06] px-2 py-0.5 text-[9px] text-[#ff3814]">
              Tasks
            </span>

            <span className="rounded px-2 py-0.5 text-[9px] text-slate-300">
              Time saved
            </span>

          </div>
        </div>

        <div className="mt-3 flex h-24 items-end gap-1.5">

          {CHART_BARS.map((h, i) => (
            <div key={i} className="relative flex-1">

              {i === 6 && (
                <div className="absolute -top-9 left-1/2 z-10 w-max -translate-x-1/2 rounded-md border border-[#ff3814]/20 bg-white/90 px-2 py-1 text-[8px] leading-tight text-slate-600 shadow-[0_8px_25px_rgba(30,64,175,0.12)] backdrop-blur-xl">

                  <span className="block font-medium text-slate-800">
                    June 7, 2026
                  </span>

                  <span className="block text-[#ff3814]">
                    218 tasks · 32h saved
                  </span>

                </div>
              )}

              <div
                className={`w-full rounded-t-sm ${
                  i === 6
                    ? 'bg-[#ff3814] shadow-[0_0_14px_rgba(255,56,20,0.20)]'
                    : 'bg-orange-200'
                }`}
                style={{ height: `${h}%` }}
              />

            </div>
          ))}

        </div>
      </div>

      {/* Table */}
      <div className="relative mt-3 rounded-lg border border-slate-200/70 bg-white/55 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">

        <div className="flex items-center justify-between">

          <p className="text-[11px] text-slate-500">
            Top automations
          </p>

          <p className="text-[10px] text-[#ff3814]/70">
            View all
          </p>

        </div>

        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-600">

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[#ff3814] shadow-[0_0_8px_rgba(255,56,20,0.45)]" />

            Support Agent

          </div>

          <span className="text-slate-400">
            2,840 runs
          </span>

          <span className="text-slate-400">
            142h
          </span>

          <span className="text-emerald-500">
            +20.5%
          </span>

        </div>
      </div>
    </div>
  );
}

function IndustrySlider() {
  const [active, setActive] = useState('reporting');

  const activeFeature =
    FEATURES.find((feature) => feature.key === active) || FEATURES[0];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">

      {/* =====================================================
          BACKGROUND ATMOSPHERE
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Wide blue top glow */}
        <div
          className="absolute left-1/2 top-[-320px] h-[650px] w-[1400px] -translate-x-1/2 rounded-[50%] blur-[70px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(191,219,254,0.34) 0%, rgba(219,234,254,0.20) 35%, rgba(239,246,255,0.10) 55%, transparent 74%)',
          }}
        />

        {/* Orange center glow */}
        <div
          className="absolute left-1/2 top-[-100px] h-[350px] w-[650px] -translate-x-1/2 rounded-full blur-[90px]"
          style={{
            background:
              'radial-gradient(ellipse, rgba(255,90,61,0.07) 0%, rgba(255,120,90,0.025) 48%, transparent 75%)',
          }}
        />

        {/* Left blue glow */}
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-300/[0.07] blur-[150px]" />

        {/* Right blue glow */}
        <div className="absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-sky-300/[0.07] blur-[160px]" />

        {/* Bottom blue glow */}
        <div className="absolute bottom-[-250px] left-1/3 h-[500px] w-[500px] rounded-full bg-blue-400/[0.05] blur-[150px]" />

      </div>

      {/* =====================================================
          MAIN GLASS CONTAINER
          ===================================================== */}

      <div className="relative mx-auto flex max-w-[1100px] flex-col overflow-hidden rounded-[30px] border border-white/80 bg-white/55 shadow-[0_30px_90px_-25px_rgba(30,64,175,0.18),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl lg:flex-row">

        {/* Glass highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-blue-100/20" />

        {/* =================================================
            LEFT — TABS
            ================================================= */}

        <div className="relative w-full shrink-0 border-b border-slate-200/60 lg:w-[42%] lg:border-b-0 lg:border-r">

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
                      ? 'border-b border-slate-200/60'
                      : ''
                  }`}
                >

                  {/* Active background */}
                  {isActive && (
                    <div className="absolute inset-2 rounded-2xl border border-[#ff3814]/10 bg-[#ff3814]/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_25px_rgba(255,56,20,0.05)]" />
                  )}

                  <div className="relative px-6 py-5 sm:px-8">

                    <div className="flex items-center gap-4">

                      {/* Icon */}
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border backdrop-blur-xl transition-all duration-300 ${
                          isActive
                            ? 'border-[#ff3814]/30 bg-[#ff3814]/10 text-[#ff3814] shadow-[0_0_25px_rgba(255,56,20,0.08)]'
                            : 'border-slate-300/80 bg-white/60 text-slate-600 group-hover:border-slate-400 group-hover:bg-white/80 group-hover:text-slate-800'
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

                      {/* Title — DARKER */}
                      <h3
                        className={`flex-1 text-[15px] font-semibold tracking-tight transition-colors duration-300 ${
                          isActive
                            ? 'text-slate-950'
                            : 'text-slate-700 group-hover:text-slate-950'
                        }`}
                      >
                        {feature.title}
                      </h3>

                      {/* Arrow — DARKER */}
                      <svg
                        className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'translate-x-0.5 rotate-90 text-[#ff3814]'
                            : 'text-slate-500 group-hover:text-slate-800'
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

        {/* =================================================
            RIGHT — DYNAMIC IMAGE
            ================================================= */}

        <div className="relative flex min-h-[440px] flex-1 items-center justify-center overflow-hidden bg-blue-50/[0.18] p-5 sm:p-7 lg:min-h-[560px] lg:p-8">

          {/* Blue glow */}
          <div className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-300/[0.10] blur-[130px]" />

          {/* Orange glow */}
          <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#ff3814]/[0.035] blur-[100px]" />

          {/* Top glass light */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[500px] -translate-x-1/2 rounded-full bg-white/60 blur-[90px]" />

          {/* =================================================
              IMAGE
              ================================================= */}

          <div
            key={activeFeature.key}
            className="relative w-full animate-[fadeIn_350ms_ease-out]"
          >

            <div className="relative overflow-hidden rounded-[22px] border border-white/80 bg-white/65 shadow-[0_25px_70px_rgba(30,64,175,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl">

              {/* Image */}
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="block h-auto w-full object-cover"
              />

              {/* Glass overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-blue-500/[0.04]" />

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          IMAGE FADE ANIMATION
          ===================================================== */}

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