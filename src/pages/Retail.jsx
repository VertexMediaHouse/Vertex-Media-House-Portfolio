import { useState } from 'react';
import Header from '../components/Header';
import HowVertexWorks from '../components/HowVertexWorks';
import LeadCaptureForm from '../components/LeadCaptureForm';

const RETAIL_FEATURES = [
  {
    key: 'cart-recovery',
    title: 'Cart Recovery Automation',
    detail:
      'Automatically recover abandoned carts with timed reminders, personalized offers, and customer follow-ups across your preferred channels.',
  },
  {
    key: 'loyalty',
    title: 'Loyalty & Referral Automation',
    detail:
      'Automatically reward purchases, referrals, milestones, and repeat customers without manually managing points or reward delivery.',
  },
  {
    key: 'post-purchase',
    title: 'Post-Purchase Automation',
    detail:
      'Turn every completed order into an automated customer journey with delivery updates, review requests, and repeat-purchase campaigns.',
  },
  {
    key: 'website',
    title: 'Retail Website Design',
    detail:
      'A conversion-focused storefront designed around your products, brand, promotions, and customer journey.',
  },
];

/* =========================================================
   SHARED UI
   ========================================================= */

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
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
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
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
  );
}

function AutomationBadge({ children = 'AUTOMATION ACTIVE' }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5A36]/15 bg-[#FF5A36]/[0.07] px-3 py-1.5 text-[9px] font-bold tracking-[0.14em] text-[#FF5A36]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A36]" />
      {children}
    </span>
  );
}

/* =========================================================
   01 — CART RECOVERY AUTOMATION
   ========================================================= */

function CartRecoveryVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="rounded-[30px] border border-[#e9e5de] bg-white/85 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
              Customer recovery
            </p>

            <h3 className="mt-1.5 text-[21px] font-semibold tracking-[-0.04em] text-[#111214]">
              Abandoned cart flow
            </h3>
          </div>

          <AutomationBadge />
        </div>

        <div className="mt-7">
          <div className="relative">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="relative z-10 rounded-[20px] border border-[#eee9e2] bg-[#faf9f7] p-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white text-[10px] font-black text-[#111214] shadow-sm">
                    01
                  </span>

                  <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#aaa59d]">
                    Trigger
                  </span>
                </div>

                <p className="mt-4 text-[12px] font-bold text-[#111214]">
                  Cart abandoned
                </p>

                <p className="mt-1 text-[10px] leading-5 text-[#8b8780]">
                  Customer leaves without completing checkout.
                </p>
              </div>

              <div className="relative z-10 rounded-[20px] border border-[#FF5A36]/60 bg-[#FF5A36]/[0.045] p-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#FF5A36] text-[10px] font-black text-[#fff] shadow-sm">
                    02
                  </span>

                  <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#FF5A36]/60">
                    Action
                  </span>
                </div>

                <p className="mt-4 text-[12px] font-bold text-[#111214]">
                  Reminder sent
                </p>

                <p className="mt-1 text-[10px] leading-5 text-[#8b8780]">
                  Personalized WhatsApp or email message is triggered.
                </p>
              </div>

              <div className="relative z-10 rounded-[20px] border border-[#eee9e2] bg-[#faf9f7] p-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white text-[10px] font-black text-[#111214] shadow-sm">
                    03
                  </span>

                  <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#aaa59d]">
                    Outcome
                  </span>
                </div>

                <p className="mt-4 text-[12px] font-bold text-[#111214]">
                  Purchase recovered
                </p>

                <p className="mt-1 text-[10px] leading-5 text-[#8b8780]">
                  Follow-up offer is sent if the cart remains inactive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[20px] border border-[#FF5A36]/60 bg-[#FF5A36]/[0.045] text-black p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.18em]">
                Live automation
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                3 customers currently in recovery
              </p>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#FF5A36]/60">
              <ArrowIcon />
            </div>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {[
              ['Sarah M.', 'Reminder sent'],
              ['James W.', 'Offer queued'],
              ['Emma C.', 'Recovered'],
            ].map(([name, status]) => (
              <div
                key={name}
                className="rounded-[13px] px-3 py-2.5"
              >
                <p className="text-[10px] font-bold">{name}</p>
                <p className="mt-0.5 text-[9px]">{status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   02 — LOYALTY / REFERRAL AUTOMATION
   ========================================================= */

function LoyaltyAutomationVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="rounded-[30px] border border-[#e9e5de] bg-white/85 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
              Retention engine
            </p>

            <h3 className="mt-1.5 text-[21px] font-semibold tracking-[-0.04em] text-[#111214]">
              Loyalty automation
            </h3>
          </div>

          <AutomationBadge />
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[22px] border border-[#eee9e2] bg-[#faf9f7] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[11px] font-black text-[#111214] shadow-sm">
                AC
              </div>

              <div>
                <p className="text-[12px] font-bold text-[#111214]">
                  Alex Carter
                </p>

                <p className="mt-0.5 text-[9px] text-[#aaa59d]">
                  Returning customer
                </p>
              </div>

              <span className="ml-auto rounded-full bg-[#111214] px-2.5 py-1 text-[8px] font-bold text-white">
                GOLD
              </span>
            </div>

            <div className="mt-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#aaa59d]">
                    Available points
                  </p>

                  <p className="mt-1 text-[30px] font-bold tracking-[-0.05em] text-[#111214]">
                    2,840
                  </p>
                </div>

                <p className="text-[9px] font-semibold text-[#FF5A36]/60">
                  +420 this order
                </p>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e7e2da]">
                <div className="h-full w-[72%] rounded-full bg-[#FF5A36]/60" />
              </div>

              <div className="mt-2 flex justify-between text-[8px] font-semibold text-[#aaa59d]">
                <span>Gold</span>
                <span>4,000 pts → VIP</span>
              </div>
            </div>
          </div>

          <div className="rounded-[22px] border border-[#FF5A36]/60 bg-[#FF5A36]/[0.045] p-5">
            <p className="text-[8px] font-bold uppercase tracking-[0.18em]">
              Rules running
            </p>

            <div className="mt-4 space-y-2">
              {[
                ['Purchase completed', '+420 pts'],
                ['Referral accepted', '+800 pts'],
                ['2,500 pts reached', '$25 reward'],
                ['30 days inactive', 'Win-back'],
              ].map(([trigger, action]) => (
                <div
                  key={trigger}
                  className="rounded-[14px] px-3 py-3 border-black"
                >
                  <p className="text-[9px] font-semibold text-[#111214]">
                    {trigger}
                  </p>

                  <div className="mt-1 flex items-center gap-1.5 text-[8px] font-bold text-[#FF5A36]/60">
                    <ArrowIcon />
                    {action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-[18px] border border-[#eee9e2] bg-white px-4 py-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#aaa59d]">
            Automated outcome
          </span>

          <span className="h-1 w-1 rounded-full bg-[#ddd8d0]" />

          <span className="text-[10px] font-semibold text-[#55534f]">
            Reward generated
          </span>

          <span className="text-[#aaa59d]">→</span>

          <span className="text-[10px] font-semibold text-[#55534f]">
            Code delivered
          </span>

          <span className="text-[#aaa59d]">→</span>

          <span className="text-[10px] font-bold text-[#FF5A36]/60">
            Customer notified
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   03 — POST PURCHASE AUTOMATION
   ========================================================= */

function PostPurchaseAutomationVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="rounded-[30px] border border-[#e9e5de] bg-white/85 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
              Customer journey
            </p>

            <h3 className="mt-1.5 text-[21px] font-semibold tracking-[-0.04em] text-[#111214]">
              Post-purchase flow
            </h3>
          </div>

          <AutomationBadge />
        </div>

        <div className="mt-7">
          <div className="relative">
            <div className="absolute bottom-5 left-[11px] top-5 w-px bg-[#ddd8d0]" />

            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Order confirmed',
                  detail: 'Confirmation email + SMS',
                  status: 'Sent',
                },
                {
                  step: '02',
                  title: 'Shipment dispatched',
                  detail: 'Tracking notification',
                  status: 'Sent',
                },
                {
                  step: '03',
                  title: 'Delivery confirmed',
                  detail: 'Customer satisfaction check',
                  status: 'Queued',
                },
                {
                  step: '04',
                  title: 'Review requested',
                  detail: 'Product review + referral prompt',
                  status: 'Scheduled',
                },
              ].map((item, index) => (
                <div key={item.step} className="relative flex gap-4">
                  <div
                    className={`relative z-10 flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full ${index < 2
                        ? 'bg-[#FF5A36] text-white'
                        : 'border border-[#ddd8d0] bg-white text-[#aaa59d]'
                      }`}
                  >
                    {index < 2 ? (
                      <CheckIcon />
                    ) : (
                      <span className="text-[8px] font-black">
                        {item.step}
                      </span>
                    )}
                  </div>

                  <div className="flex min-w-0 flex-1 items-center justify-between gap-4 rounded-[17px] border border-[#eee9e2] bg-[#faf9f7] px-4 py-3">
                    <div>
                      <p className="text-[11px] font-bold text-[#111214]">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[9px] text-[#8b8780]">
                        {item.detail}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[8px] font-bold ${index < 2
                          ? 'bg-[#FF5A36] text-black'
                          : 'border border-[#e5e0d8] bg-white text-[#77746f]'
                        }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            ['98.4%', 'Delivery updates'],
            ['41%', 'Review opens'],
            ['18%', 'Repeat purchase'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[17px] border border-[#eee9e2] bg-[#faf9f7] p-3 text-center"
            >
              <p className="text-[17px] font-bold tracking-[-0.04em] text-[#111214]">
                {value}
              </p>

              <p className="mt-1 text-[8px] font-semibold text-[#aaa59d]">
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
   04 — RETAIL WEBSITE DESIGN
   ========================================================= */

function RetailWebsiteVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      <div className="overflow-hidden rounded-[28px] border border-[#e6e1d9] bg-[#f7f5f1] shadow-[0_35px_100px_rgba(0,0,0,0.12)]">
        <div className="flex h-10 items-center gap-1.5 border-b border-[#e5e0d8] bg-white px-4">
          <span className="h-2 w-2 rounded-full bg-[#ddd8d0]" />
          <span className="h-2 w-2 rounded-full bg-[#ddd8d0]" />
          <span className="h-2 w-2 rounded-full bg-[#ddd8d0]" />

          <div className="mx-auto hidden h-5 w-[42%] items-center justify-center rounded-full bg-[#f5f3ef] text-[7px] font-semibold text-[#aaa59d] sm:flex">
            yourstore.com
          </div>
        </div>

        <div className="bg-[#f8f6f2] p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-[#ded9d0] pb-4">
            <div className="text-[14px] font-black tracking-[-0.06em] text-[#111214]">
              ATELIER.
            </div>

            <div className="hidden items-center gap-5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#55534f] sm:flex">
              <span>New</span>
              <span>Women</span>
              <span>Men</span>
              <span>Collections</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <svg
                  className="h-3 w-3 text-[#111214]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4" />
                </svg>
              </div>

              {/* Cart / account button */}
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5A36] text-[#111214]">
                <span className="text-[8px] font-bold">2</span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[250px] overflow-hidden rounded-[22px] bg-[#dedbd4] p-5 sm:min-h-[290px]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 72% 25%, rgba(255,90,54,0.23), transparent 34%), linear-gradient(135deg, #e9e5dc 0%, #d2cec5 100%)',
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="w-fit rounded-full bg-white/70 px-2.5 py-1 text-[7px] font-bold uppercase tracking-[0.14em] text-[#55534f] backdrop-blur-md">
                  Spring collection
                </span>

                <div>
                  <p className="max-w-[280px] text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#111214] sm:text-[38px]">
                    Designed for
                    <br />
                    everyday.
                  </p>

                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FF5A36] px-4 py-2.5 text-[8px] font-bold uppercase tracking-[0.12em] text-black"
                  >
                    Shop collection
                    <ArrowIcon />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-[-30px] right-[7%] h-[190px] w-[125px] rotate-[8deg] rounded-[55%_45%_15%_15%] bg-[#b5b0a7] opacity-80 shadow-[inset_-15px_0_25px_rgba(0,0,0,0.08)]" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
              <div className="relative min-h-[140px] overflow-hidden rounded-[22px] bg-[#e6e1d8] p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-[#eeeae2] to-[#cfc9be]" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#77746f]">
                    Bestseller
                  </span>

                  <div>
                    <p className="text-[12px] font-bold text-[#111214]">
                      Everyday Runner
                    </p>

                    <p className="mt-1 text-[9px] text-[#77746f]">
                      $128
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-3 right-5 h-[72px] w-[90px] rotate-[-8deg] rounded-[50%_50%_35%_25%] bg-[#b8b3aa]" />
              </div>

              <div className="rounded-[22px] bg-[#FF5A36] p-4 text-[#111214]">
                <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#111214]/60">
                  Members
                </p>

                <p className="mt-5 text-[22px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#111214]">
                  15%
                  <br />
                  off
                </p>

                <p className="mt-2 text-[8px] text-[#111214]/60">
                  Join the rewards program.
                </p>

                <div className="mt-4 flex items-center gap-1 text-[8px] font-bold text-[#111214]">
                  Join now
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white bg-white/90 px-4 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.1)] backdrop-blur-xl">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A36]/60" />

        <span className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.16em] text-[#55534f]">
          Conversion-focused storefront
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   VISUAL SWITCHER
   ========================================================= */

function RetailVisual({ active }) {
  switch (active) {
    case 'loyalty':
      return <LoyaltyAutomationVisual />;

    case 'post-purchase':
      return <PostPurchaseAutomationVisual />;

    case 'website':
      return <RetailWebsiteVisual />;

    case 'cart-recovery':
    default:
      return <CartRecoveryVisual />;
  }
}

/* =========================================================
   RETAIL PAGE
   ========================================================= */

function Retail() {
  const [active, setActive] = useState(RETAIL_FEATURES[0].key);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const activeFeature =
    RETAIL_FEATURES.find((feature) => feature.key === active) ||
    RETAIL_FEATURES[0];

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
        {/* =====================================================
            BLUE LIQUID GLASS HALF BLOB
            ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Main centered blue half blob */}
          <div
            className="
              absolute
              left-1/2
              top-[-360px]
              h-[700px]
              w-[1800px]
              -translate-x-1/2
              rounded-[50%]
              blur-[75px]
            "
            style={{
              background:
                'radial-gradient(ellipse at 50% 58%, rgba(37,99,235,0.20) 0%, rgba(59,130,246,0.13) 30%, rgba(147,197,253,0.08) 50%, transparent 72%)',
            }}
          />

          {/* Soft blue center highlight */}
          <div
            className="
              absolute
              left-1/2
              top-[-130px]
              h-[360px]
              w-[760px]
              -translate-x-1/2
              rounded-[50%]
              blur-[90px]
            "
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, rgba(96,165,250,0.06) 45%, transparent 72%)',
            }}
          />

          {/* Glass reflection */}
          <div
            className="
              absolute
              left-1/2
              top-[-35px]
              h-[170px]
              w-[700px]
              -translate-x-1/2
              rotate-[-4deg]
              rounded-[50%]
              blur-[45px]
            "
            style={{
              background:
                'linear-gradient(105deg, transparent 10%, rgba(255,255,255,0.78) 34%, rgba(59,130,246,0.07) 50%, rgba(255,255,255,0.68) 68%, transparent 90%)',
            }}
          />

          <div
            className="absolute right-[-150px] top-[180px] h-[420px] w-[420px] rounded-full blur-[100px]"
            style={{
              background:
                'radial-gradient(circle, rgba(59,130,246,0.07), transparent 70%)',
            }}
          />
        </div>

        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="relative z-10 mx-auto mb-10 max-w-[1300px]">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#FF5A36]">
            Retail Systems
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
            Build a retail system that{' '}
            <span className="text-[#FF5A36]">sells for you.</span>
          </h2>

          <p className="mt-5 max-w-[680px] text-[15px] font-medium leading-7 text-[#77746f] sm:text-[16px]">
            Automate the customer journey, increase repeat purchases, and give
            your retail brand a storefront designed to convert.
          </p>
        </div>

        {/* =====================================================
            MAIN PRODUCT PANEL — REDUCED HEIGHT
            ===================================================== */}

        <div
          onMouseMove={handleMouseMove}
          className="
            group relative z-10 mx-auto
            flex max-w-[1440px]
            flex-col overflow-hidden
            rounded-[30px]
            border border-[#eee9df]
            bg-white/55
            shadow-[0_25px_80px_rgba(0,0,0,0.055)]
            backdrop-blur-2xl
            backdrop-saturate-150
            lg:flex-row
          "
        >
          {/* =================================================
              BLUE MOUSE-FOLLOW LIQUID GLASS
              ================================================= */}

          <div
            className="
              pointer-events-none
              absolute z-20
              h-[320px] w-[320px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              opacity-0
              blur-[80px]
              transition-opacity duration-300
              group-hover:opacity-100
            "
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              background:
                'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(59,130,246,0.10) 38%, transparent 72%)',
            }}
          />

          {/* =================================================
              LEFT TABS
              ================================================= */}

          <div
            className="
              relative z-10 w-full shrink-0
              border-b border-[#eee9df]
              lg:w-[40%]
              lg:border-b-0
              lg:border-r
            "
          >
            <div className="flex h-full flex-col justify-center py-2">
              {RETAIL_FEATURES.map((feature, idx) => {
                const isActive = active === feature.key;

                return (
                  <button
                    key={feature.key}
                    type="button"
                    onClick={() => setActive(feature.key)}
                    className={`
                      group relative w-full text-left
                      transition-all duration-300
                      ${idx !== RETAIL_FEATURES.length - 1
                        ? 'border-b border-[#eee9df]'
                        : ''
                      }
                    `}
                  >
                    {isActive && (
                      <div
                        className="
                          absolute inset-x-3 inset-y-1.5
                          rounded-[20px]
                          border border-white
                          bg-white/70
                          shadow-[0_8px_28px_rgba(0,0,0,0.055)]
                          backdrop-blur-xl
                        "
                      />
                    )}

                    <div className="relative px-6 py-4 sm:px-8">
                      <div className="flex items-center gap-4">
                        <span
                          className={`
                            flex h-10 w-10 shrink-0
                            items-center justify-center
                            rounded-[13px]
                            border
                            transition-all duration-300
                            ${isActive
                              ? 'border-[#FF5A36]/20 bg-[#FF5A36]/[0.07] text-[#FF5A36]/60'
                              : 'border-[#eee9df] bg-white/45 text-[#77746f] group-hover:border-[#ddd8ce] group-hover:bg-white/70 group-hover:text-[#111214]'
                            }
                          `}
                        >
                          {feature.key === 'cart-recovery' && (
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.3 2.3c-.63.63-.18 1.7.7 1.7H17"
                              />
                              <circle cx="9" cy="19" r="1.5" />
                              <circle cx="17" cy="19" r="1.5" />
                            </svg>
                          )}

                          {feature.key === 'loyalty' && (
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v13m0-13V5a2 2 0 114 0v3m-4 0V6a2 2 0 10-4 0v2m4 0h4m-4 0H8"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 11h16v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7z"
                              />
                            </svg>
                          )}

                          {feature.key === 'post-purchase' && (
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 4h14v16H5z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 8h8M8 12h8M8 16h5"
                              />
                            </svg>
                          )}

                          {feature.key === 'website' && (
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              viewBox="0 0 24 24"
                            >
                              <rect
                                x="3"
                                y="4"
                                width="18"
                                height="16"
                                rx="2"
                              />
                              <path
                                strokeLinecap="round"
                                d="M3 9h18M7 6.5h.01M10 6.5h.01"
                              />
                            </svg>
                          )}
                        </span>

                        <h3
                          className={`
    flex-1
    text-[15px]
    font-bold
    tracking-tight
    transition-colors duration-300
    ${isActive
                              ? 'text-[#FF5A36]/60'
                              : 'text-[#111214] group-hover:text-[#111214]'
                            }
  `}
                        >
                          {feature.title}
                        </h3>

                        <svg
                          className={`
                            h-4 w-4 shrink-0
                            transition-all duration-300
                            ${isActive
                              ? 'translate-x-0.5 rotate-90 text-[#FF5A36]/60'
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
                          ${isActive
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <p
                            className="
    ml-[56px]
    max-w-[350px]
    pt-2
    text-[13px]
    font-medium
    leading-6
    text-[#111214]
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

          {/* =================================================
              RIGHT — REDUCED HEIGHT
              ================================================= */}

          <div
            className="
              relative z-10 flex min-h-[420px]
              flex-1 items-center justify-center
              overflow-hidden
              bg-white/30
              p-5
              backdrop-blur-xl
              sm:p-6
              lg:min-h-[500px]
              lg:p-7
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

            <div className="pointer-events-none absolute left-8 top-5 z-20 hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A36]/60" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aaa59d]">
                Vertex Retail
              </span>
            </div>

            <div
              key={activeFeature.key}
              className="
                relative z-10
                w-full
                scale-[0.94]
                animate-[fadeIn_350ms_ease-out]
              "
            >
              <RetailVisual active={activeFeature.key} />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px) scale(0.965);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(0.94);
            }
          }
        `}</style>
      </section>

      <HowVertexWorks />
      <LeadCaptureForm />
    </>
  );
}

export default Retail;
