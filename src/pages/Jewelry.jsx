import { useState } from 'react';
import Header from '../components/Header';
import HowVertexWorks from '../components/HowVertexWorks';
import LeadCaptureForm from '../components/LeadCaptureForm';

const JEWELRY_FEATURES = [
  {
    key: 'client-followups',
    title: 'Client Follow-Up Automation',
    detail:
      'Automatically follow up with high-value clients after consultations, purchases, enquiries, and showroom visits so no relationship goes cold.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M8 12h8m-8 4h5m6-8v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h6l6 6zM13 4v5h5"
      />
    ),
  },
  {
    key: 'order-automation',
    title: 'Custom Order Automation',
    detail:
      'Keep bespoke jewellery orders moving with automatic status updates, approval requests, payment reminders, and delivery notifications.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    ),
  },
  {
    key: 'concierge-chatbot',
    title: 'Luxury Concierge Chatbot',
    detail:
      'Give customers an always-on jewellery concierge that answers questions, qualifies enquiries, recommends pieces, and books private consultations.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M8 10h8M8 14h5m8-2a9 9 0 11-18 0c0 1.574.512 3.042 1.395 4.28L3 20l4.745-1.949A9.863 9.863 0 0012 21c4.97 0 9-4.03 9-9z"
      />
    ),
  },
  {
    key: 'website-design',
    title: 'Luxury Website Design',
    detail:
      'Create a premium digital showroom designed around your collections, craftsmanship, brand story, consultations, and high-intent enquiries.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm0 4h16M8 6.5h.01M11 6.5h.01"
      />
    ),
  },
];

/* =========================================================
   CLIENT FOLLOW-UP AUTOMATION
   ========================================================= */

function ClientFollowUpVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-[28px] border border-[#ebe7df] bg-white/85 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">

        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
              Client relationship
            </p>

            <p className="mt-1 text-[23px] font-semibold tracking-[-0.04em] text-[#111214]">
              Follow-ups running
            </p>
          </div>

          <span className="flex items-center gap-2 rounded-full border border-[#eee9df] bg-[#faf9f7] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#55534f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]" />
            Active
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {[
            ['Sophia Bennett', 'Private consultation', 'Follow-up sent'],
            ['Daniel Morgan', 'Custom ring enquiry', 'Reminder scheduled'],
            ['Olivia Carter', 'Recent purchase', 'Care message queued'],
          ].map(([name, context, status], index) => (
            <div
              key={name}
              className="rounded-[18px] border border-[#eee9df] bg-[#faf9f7] p-3.5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#55534f] shadow-sm">
                  {name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-bold text-[#111214]">
                    {name}
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#8b8780]">
                    {context}
                  </p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-[8px] font-bold ${
                    index === 0
                      ? 'bg-[#ff5a36] text-[#111214]'
                      : 'border border-[#e7e3dc] bg-white text-[#77746f]'
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[18px] bg-[#ff5a36] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.16em] text-black/50">
                Automation
              </p>

              <p className="mt-1 text-[12px] font-semibold text-[#111214]">
                Next client touchpoint in 2 days
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10">
              <svg
                className="h-4 w-4 text-[#111214]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 2"
                />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* =========================================================
   CUSTOM ORDER AUTOMATION
   ========================================================= */

function CustomOrderVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-[28px] border border-[#ebe7df] bg-white/85 p-5 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
              Bespoke order
            </p>

            <p className="mt-1 text-[23px] font-semibold tracking-[-0.04em] text-[#111214]">
              Order #1842
            </p>
          </div>

          <span className="rounded-full bg-[#fff3ee] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#ff5a36]">
            In production
          </span>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            {[
              ['Design', true],
              ['Approval', true],
              ['Crafting', true],
              ['Delivery', false],
            ].map(([label, complete], index) => (
              <div
                key={label}
                className="relative flex flex-1 flex-col items-center"
              >
                {index !== 0 && (
                  <div
                    className={`absolute right-1/2 top-4 h-px w-full ${
                      complete ? 'bg-[#ff5a36]' : 'bg-[#e5e1d9]'
                    }`}
                  />
                )}

                <div
                  className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border ${
                    complete
                      ? 'border-[#ff5a36] bg-[#ff5a36]'
                      : 'border-[#dedad2] bg-white'
                  }`}
                >
                  {complete ? (
                    <svg
                      className="h-3.5 w-3.5 text-[#111214]"
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
                    <span className="h-2 w-2 rounded-full bg-[#dedad2]" />
                  )}
                </div>

                <span className="mt-2 text-[9px] font-semibold text-[#77746f]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 rounded-[20px] border border-[#eee9df] bg-[#faf9f7] p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-[76px] w-[92px] items-center justify-center rounded-[16px] bg-white">
              <div className="relative h-10 w-10 rounded-full border-[5px] border-[#d8d1c6]">
                <div className="absolute left-1/2 top-[-8px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#eee8dd]" />
              </div>
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#aaa59d]">
                Custom piece
              </p>

              <p className="mt-1 text-[14px] font-bold text-[#111214]">
                Bespoke Solitaire
              </p>

              <p className="mt-1 text-[10px] text-[#77746f]">
                Platinum • 1.2ct • Custom setting
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[
            'Production update sent',
            'Client approval recorded',
            'Delivery notification scheduled',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-[14px] border border-[#eee9df] bg-white px-4 py-2.5"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ff5a36]">
                <svg
                  className="h-3 w-3 text-[#111214]"
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
    </div>
  );
}

/* =========================================================
   LUXURY CONCIERGE CHATBOT
   ========================================================= */

function ConciergeChatbotVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="overflow-hidden rounded-[28px] border border-[#ebe7df] bg-white/90 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">

        <div className="flex items-center justify-between border-b border-[#eee9df] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff5a36]">
              <span className="text-[10px] font-black tracking-tight text-[#111214]">
                V
              </span>
            </div>

            <div>
              <p className="text-[12px] font-bold text-[#111214]">
                Maison Concierge
              </p>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]" />
                <span className="text-[9px] text-[#8b8780]">
                  Online now
                </span>
              </div>
            </div>
          </div>

          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#aaa59d]">
            AI Concierge
          </span>
        </div>

        <div className="space-y-3 bg-[#faf9f7] p-5">
          <div className="max-w-[78%] rounded-[18px] rounded-tl-[5px] border border-[#eee9df] bg-white px-4 py-3 shadow-sm">
            <p className="text-[11px] leading-5 text-[#55534f]">
              Welcome. Are you looking for an engagement ring, a gift, or a
              bespoke piece?
            </p>
          </div>

          <div className="ml-auto max-w-[70%] rounded-[18px] rounded-tr-[5px] bg-[#ff5a36] px-4 py-3">
            <p className="text-[11px] leading-5 text-[#111214]">
              I&apos;m looking for something timeless around $8,000.
            </p>
          </div>

          <div className="max-w-[82%] rounded-[18px] rounded-tl-[5px] border border-[#eee9df] bg-white px-4 py-3 shadow-sm">
            <p className="text-[11px] leading-5 text-[#55534f]">
              I can help with that. Would you prefer a classic solitaire or
              something more distinctive?
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {['Classic solitaire', 'Distinctive', 'Show me both'].map(
                (option) => (
                  <span
                    key={option}
                    className="rounded-full border border-[#e5e0d7] bg-[#faf9f7] px-3 py-1.5 text-[9px] font-semibold text-[#55534f]"
                  >
                    {option}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-[#eee9df] bg-white p-4">
          <div className="flex-1 rounded-full border border-[#eee9df] bg-[#faf9f7] px-4 py-2.5 text-[10px] text-[#aaa59d]">
            Ask your jewellery concierge...
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff5a36]">
            <svg
              className="h-4 w-4 text-[#111214]"
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

/* =========================================================
   LUXURY WEBSITE DESIGN
   ========================================================= */

function WebsiteDesignVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-[28px] border border-[#ebe7df] bg-white/90 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.07)] backdrop-blur-xl">

        <div className="flex items-center justify-between border-b border-[#eee9df] px-2 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#dedad2]" />
            <span className="h-2 w-2 rounded-full bg-[#dedad2]" />
            <span className="h-2 w-2 rounded-full bg-[#dedad2]" />
          </div>

          <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
            maison-jewellery.com
          </span>
        </div>

        <div className="relative mt-3 overflow-hidden rounded-[20px] bg-[#ff5a36]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff704f] via-[#ff5a36] to-[#f04b28]" />

          <div className="relative flex min-h-[300px] flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black tracking-[0.18em] text-[#111214]">
                MAISON
              </span>

              <div className="flex items-center gap-4 text-[8px] font-semibold uppercase tracking-[0.12em] text-black/60">
                <span>Collections</span>
                <span>About</span>
                <span>Contact</span>
              </div>
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-black/60">
                Crafted with intention
              </p>

              <h3 className="mt-2 max-w-[340px] text-[34px] font-medium leading-[0.95] tracking-[-0.05em] text-[#111214]">
                Jewellery
                <br />
                worth keeping.
              </h3>

              <p className="mt-3 max-w-[270px] text-[9px] leading-4 text-black/55">
                Discover considered pieces shaped around craftsmanship,
                material, and timeless design.
              </p>

              <div className="mt-5 inline-flex items-center rounded-full bg-[#111214] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-white">
                Explore collection
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ['01', 'Collection'],
            ['02', 'Story'],
            ['03', 'Consultation'],
          ].map(([number, label]) => (
            <div
              key={number}
              className="rounded-[14px] border border-[#eee9df] bg-[#faf9f7] p-3"
            >
              <span className="text-[8px] font-bold text-[#ff5a36]">
                {number}
              </span>

              <p className="mt-2 text-[9px] font-bold text-[#55534f]">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* =========================================================
   DYNAMIC VISUAL
   ========================================================= */

function JewelryVisual({ active }) {
  switch (active) {
    case 'order-automation':
      return <CustomOrderVisual />;

    case 'concierge-chatbot':
      return <ConciergeChatbotVisual />;

    case 'website-design':
      return <WebsiteDesignVisual />;

    case 'client-followups':
    default:
      return <ClientFollowUpVisual />;
  }
}

/* =========================================================
   JEWELRY PAGE
   ========================================================= */

function Jewelry() {
  const [active, setActive] = useState(JEWELRY_FEATURES[0].key);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const activeFeature =
    JEWELRY_FEATURES.find((feature) => feature.key === active) ||
    JEWELRY_FEATURES[0];

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

        <div className="relative z-10 mx-auto mb-12 max-w-[1300px] lg:mx-20">

          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#FF5A36]">
            Luxury & Jewelry
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
            Automate your{' '}
            <span className="text-[#FF5A36]">
              boutique experience.
            </span>
          </h2>

          <p className="mt-5 max-w-[680px] text-[15px] font-medium leading-7 text-[#77746f] sm:text-[16px]">
            Build stronger client relationships, automate bespoke orders,
            give customers a luxury AI concierge, and create a digital
            showroom worthy of your brand.
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

          {/* Mouse-follow atmosphere */}

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

              {JEWELRY_FEATURES.map((feature, idx) => {
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
                        idx !== JEWELRY_FEATURES.length - 1
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
              RIGHT — UNIQUE JEWELRY VISUAL
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
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
                Vertex Luxury OS
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
              <JewelryVisual active={activeFeature.key} />
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

export default Jewelry;