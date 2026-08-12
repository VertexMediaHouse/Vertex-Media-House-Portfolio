import { useState } from 'react';

const FEATURES = [
  {
    key: 'recurring',
    title: 'Recurring tasks',
    detail:
      'Set it once and it runs forever — daily syncs, weekly cleanups, monthly billing, all on autopilot.',
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
    <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      {/* Glass reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-cyan-400/[0.03]" />

      {/* Top bar */}
      <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-3">
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
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

          <span className="text-[13px] font-medium text-white/80">
            Insights
          </span>

          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white/30"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-md border border-white/[0.05] bg-white/[0.035] px-2.5 py-1 text-[11px] text-white/30 sm:flex">
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

          <span className="h-5 w-5 rounded-full bg-gradient-to-br from-cyan-300 to-teal-600 shadow-[0_0_15px_rgba(103,232,249,0.3)]" />
        </div>
      </div>

      {/* Stat cards */}
      <div className="relative mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: 'Tasks automated', value: '48,200', delta: '+12.3%' },
          { label: 'Time saved', value: '1,240h', delta: '+8.4%' },
          { label: 'Success rate', value: '98.6%', delta: 'stable' },
          { label: 'Active automations', value: '24', delta: '+3 this week' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-2.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
          >
            <p className="text-[9px] uppercase tracking-wide text-white/30">
              {stat.label}
            </p>

            <p className="mt-1 text-[13px] font-semibold text-white/85">
              {stat.value}
            </p>

            <p className="mt-0.5 text-[9px] text-cyan-300/70">
              {stat.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="relative mt-3 rounded-lg border border-white/[0.07] bg-white/[0.035] p-3 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-white/50">
            Tasks automated per day
          </p>

          <div className="flex gap-1">
            <span className="rounded border border-white/[0.05] bg-white/[0.05] px-2 py-0.5 text-[9px] text-white/50">
              Tasks
            </span>

            <span className="rounded px-2 py-0.5 text-[9px] text-white/25">
              Time saved
            </span>
          </div>
        </div>

        <div className="mt-3 flex h-24 items-end gap-1.5">
          {CHART_BARS.map((h, i) => (
            <div key={i} className="relative flex-1">
              {i === 6 && (
                <div className="absolute -top-9 left-1/2 z-10 w-max -translate-x-1/2 rounded-md border border-cyan-400/30 bg-slate-900/80 px-2 py-1 text-[8px] leading-tight text-white/70 shadow-lg backdrop-blur-xl">
                  <span className="block text-white">
                    June 7, 2026
                  </span>
                  <span className="block text-cyan-300">
                    218 tasks · 32h saved
                  </span>
                </div>
              )}

              <div
                className={`w-full rounded-t-sm ${
                  i === 6
                    ? 'bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.25)]'
                    : 'bg-teal-700/70'
                }`}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="relative mt-3 rounded-lg border border-white/[0.07] bg-white/[0.035] p-3 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-white/50">
            Top automations
          </p>

          <p className="text-[10px] text-cyan-300/70">
            View all
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between text-[10px] text-white/70">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.7)]" />
            Support Agent
          </div>

          <span className="text-white/40">2,840 runs</span>
          <span className="text-white/40">142h</span>
          <span className="text-emerald-400">+20.5%</span>
        </div>
      </div>
    </div>
  );
}

function IndustrySlider() {
  const [active, setActive] = useState('reporting');

  return (
    <section className="relative overflow-hidden bg-[#070b0d] px-4 py-20 sm:px-6 lg:px-8">
      {/* Liquid glass ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.08] blur-[140px]" />

        <div className="absolute right-[-100px] top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-teal-400/[0.08] blur-[160px]" />

        <div className="absolute bottom-[-250px] left-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-[150px]" />
      </div>

      {/* Main glass container */}
      <div className="relative mx-auto flex max-w-[1100px] flex-col overflow-hidden rounded-[30px] border border-white/[0.10] bg-white/[0.035] shadow-[0_40px_120px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl lg:flex-row">

        {/* Glass highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-cyan-400/[0.025]" />

        {/* LEFT — TABS */}
        <div className="relative w-full shrink-0 border-b border-white/[0.08] lg:w-[42%] lg:border-b-0 lg:border-r">
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
                      ? 'border-b border-white/[0.06]'
                      : ''
                  }`}
                >
                  {/* Active glass glow */}
                  {isActive && (
                    <div className="absolute inset-2 rounded-2xl bg-cyan-400/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
                  )}

                  <div className="relative px-6 py-5 sm:px-8">
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border backdrop-blur-xl transition-all duration-300 ${
                          isActive
                            ? 'border-cyan-300/30 bg-cyan-300/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.10)]'
                            : 'border-white/[0.08] bg-white/[0.025] text-white/35 group-hover:border-white/[0.15] group-hover:bg-white/[0.05]'
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

                      <h3
                        className={`flex-1 text-[15px] font-medium tracking-tight transition-colors duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-white/50 group-hover:text-white/75'
                        }`}
                      >
                        {feature.title}
                      </h3>

                      <svg
                        className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'translate-x-0.5 rotate-90 text-cyan-300'
                            : 'text-white/20 group-hover:text-white/40'
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
                        <p className="ml-[56px] max-w-[330px] pt-3 text-[13px] leading-6 text-white/40">
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

        {/* RIGHT — DASHBOARD / IMAGE */}
        <div className="relative flex min-h-[440px] flex-1 items-center overflow-hidden bg-white/[0.015] p-5 sm:p-7 lg:min-h-[560px] lg:p-8">
          {/* Liquid glass glow */}
          <div className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-400/[0.09] blur-[130px]" />

          <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[400px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[80px]" />

          <div className="relative w-full">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrySlider;