import Header from '../components/Header';
import Industry from '../components/Industry';
import HowVertexWorks from '../components/HowVertexWorks';
import LeadCaptureForm from '../components/LeadCaptureForm';

/* =========================================================
   AUTOMATION VISUALS
   ========================================================= */

function WorkflowAutomationVisual() {
  return (
    <div className="w-full max-w-[600px]">
      <div className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Workflow builder
            </p>

            <h3 className="mt-1 text-[21px] font-bold tracking-[-0.03em] text-[#111214]">
              Lead routing automation
            </h3>
          </div>

          <span className="rounded-full bg-[#ff5a36]/10 px-3 py-1.5 text-[9px] font-bold text-[#ff5a36]">
            ACTIVE
          </span>
        </div>

        <div className="relative mt-6">
          <div className="absolute bottom-[24px] left-[12%] right-[12%] h-px bg-[#ddd8d0]" />

          <div className="relative grid grid-cols-3 gap-3">
            {[
              ['01', 'New lead', 'Trigger'],
              ['02', 'Qualify', 'AI step'],
              ['03', 'Assign', 'Action'],
            ].map(([number, title, type], index) => (
              <div
                key={number}
                className="relative z-10 rounded-[19px] border border-[#eee9df] bg-[#faf9f7] p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd8d0] bg-white text-[9px] font-bold text-[#111214]">
                    {number}
                  </span>

                  <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#aaa59d]">
                    {type}
                  </span>
                </div>

                <p className="mt-5 text-[11px] font-bold text-[#111214]">
                  {title}
                </p>

                <p className="mt-1 text-[9px] leading-4 text-[#8b8780]">
                  {index === 0
                    ? 'Website form submitted'
                    : index === 1
                      ? 'Intent and details checked'
                      : 'Owner notified instantly'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-[18px] border border-[#eee9df] bg-[#faf9f7] px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#aaa59d]">
                Automation result
              </p>

              <p className="mt-1 text-[12px] font-semibold text-[#111214]">
                47 leads processed today
              </p>
            </div>

            <span className="text-[10px] font-bold text-[#ff5a36]">
              +18%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   VOICE AGENT VISUAL
   ========================================================= */

function VoiceAgentVisual() {
  return (
    <div className="w-full max-w-[600px]">
      <div className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              AI Voice Agent
            </p>

            <h3 className="mt-1 text-[21px] font-bold tracking-[-0.03em] text-[#111214]">
              Calls handled automatically
            </h3>
          </div>

          <span className="rounded-full bg-[#ff5a36]/10 px-3 py-1.5 text-[9px] font-bold text-[#ff5a36]">
            LIVE
          </span>
        </div>

        {/* Voice status */}
        <div className="mt-5 flex items-center gap-4 rounded-[20px] border border-[#eee9df] bg-[#faf9f7] p-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#111214]">
            <svg
              className="h-5 w-5 text-[#ff5a36]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.33 1.78.62 2.63a2 2 0 01-.45 2.11L8 9.73a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0122 16.92z"
              />
            </svg>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-[#111214]">
                Incoming call
              </p>

              <span className="text-[9px] font-bold text-[#ff5a36]">
                00:42
              </span>
            </div>

            <p className="mt-1 text-[9px] text-[#8b8780]">
              AI agent is speaking with the customer
            </p>

            <div className="mt-3 flex items-center gap-1">
              {[3, 6, 10, 7, 13, 8, 5, 11, 6, 9, 4, 8].map(
                (height, index) => (
                  <span
                    key={index}
                    className="w-[3px] rounded-full bg-[#ff5a36]"
                    style={{ height: `${height}px` }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Call actions */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ['Answer', 'Call answered'],
            ['Qualify', 'Intent detected'],
            ['Book', 'Meeting scheduled'],
          ].map(([title, detail]) => (
            <div
              key={title}
              className="rounded-[15px] border border-[#eee9df] bg-[#faf9f7] px-3 py-3"
            >
              <p className="text-[10px] font-bold text-[#111214]">
                {title}
              </p>

              <p className="mt-1 text-[8px] leading-3 text-[#8b8780]">
                {detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom result */}
        <div className="mt-3 flex items-center justify-between rounded-[15px] border border-[#eee9df] bg-[#faf9f7] px-4 py-3">
          <span className="text-[9px] font-semibold text-[#111214]">
            Voice → Qualification → CRM
          </span>

          <span className="text-[9px] font-bold text-[#ff5a36]">
            24/7
          </span>
        </div>
      </div>
    </div>
  );
}

function CRMReportingVisual() {
  return (
    <div className="w-full max-w-[600px]">
      <div className="rounded-[28px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Operations dashboard
            </p>

            <h3 className="mt-1 text-[21px] font-bold tracking-[-0.03em] text-[#111214]">
              Business activity
            </h3>
          </div>

          <span className="rounded-full border border-[#eee9df] bg-white px-3 py-1.5 text-[9px] font-bold text-[#55534f]">
            LIVE
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ['1,284', 'Leads'],
            ['326', 'Deals'],
            ['74%', 'Response'],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-[18px] border border-[#eee9df] bg-[#faf9f7] p-4"
            >
              <p className="text-[21px] font-bold tracking-[-0.05em] text-[#111214]">
                {number}
              </p>

              <p className="mt-1 text-[9px] font-semibold text-[#8b8780]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-[20px] border border-[#eee9df] bg-[#faf9f7] p-4">
          <div className="flex items-end justify-between gap-2">
            {[38, 52, 46, 68, 58, 82, 74, 91, 86, 100].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex flex-1 items-end"
                  style={{ height: '110px' }}
                >
                  <div
                    className={`w-full rounded-t-[6px] ${
                      index === 9 ? 'bg-[#ff5a36]' : 'bg-[#111214]/10'
                    }`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              )
            )}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[9px] font-semibold text-[#aaa59d]">
              Workflow activity
            </span>

            <span className="text-[9px] font-bold text-[#ff5a36]">
              +24.8%
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3 rounded-[16px] border border-[#eee9df] bg-[#faf9f7] px-4 py-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#eee9df] bg-white">
            <svg
              className="h-3.5 w-3.5 text-[#ff5a36]"
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
          </span>

          <span className="text-[10px] font-semibold text-[#111214]">
            CRM data synced automatically
          </span>
        </div>
      </div>
    </div>
  );
}

function ChatbotWebsiteVisual() {
  return (
    <div className="w-full max-w-[620px]">
      <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/75 shadow-[0_30px_90px_rgba(0,0,0,0.08)] backdrop-blur-2xl">

        <div className="flex items-center gap-2 border-b border-[#eee9df] bg-white/60 px-5 py-3">
          <span className="h-2 w-2 rounded-full bg-[#ddd8d0]" />
          <span className="h-2 w-2 rounded-full bg-[#ddd8d0]" />
          <span className="h-2 w-2 rounded-full bg-[#ddd8d0]" />

          <div className="ml-3 flex-1 rounded-full bg-[#faf9f7] px-4 py-1.5">
            <span className="text-[8px] text-[#aaa59d]">
              yourbusiness.com
            </span>
          </div>
        </div>

        <div className="grid gap-5 p-5 md:grid-cols-[1fr_230px]">
          <div className="rounded-[20px] border border-[#eee9df] bg-[#faf9f7] p-5">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#aaa59d]">
              Your website
            </p>

            <h3 className="mt-3 max-w-[280px] text-[26px] font-bold leading-[1.05] tracking-[-0.05em] text-[#111214]">
              Turn visitors into conversations.
            </h3>

            <p className="mt-3 max-w-[300px] text-[10px] leading-5 text-[#8b8780]">
              Your AI assistant answers questions, qualifies visitors and
              captures enquiries while your team is away.
            </p>

            <div className="mt-5 flex gap-2">
              <div className="rounded-full border border-[#eee9df] bg-white px-4 py-2 text-[9px] font-bold text-[#111214]">
                Get started
              </div>

              <div className="rounded-full border border-[#ddd8d0] bg-white px-4 py-2 text-[9px] font-bold text-[#55534f]">
                Learn more
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-[20px] border border-[#eee9df] bg-white">
            <div className="flex items-center gap-2 border-b border-[#eee9df] px-4 py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#eee9df] bg-[#faf9f7] text-[9px] font-bold text-[#ff5a36]">
                AI
              </span>

              <div>
                <p className="text-[10px] font-bold text-[#111214]">
                  Vertex Assistant
                </p>

                <p className="text-[8px] text-[#aaa59d]">
                  Online now
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-3 p-3">
              <div className="max-w-[175px] rounded-[13px] bg-[#faf9f7] px-3 py-2 text-[9px] leading-4 text-[#55534f]">
                Hi. What are you looking for today?
              </div>

              <div className="ml-auto max-w-[155px] rounded-[13px] border border-[#eee9df] bg-white px-3 py-2 text-[9px] leading-4 text-[#55534f]">
                I want to learn more about your service.
              </div>

              <div className="max-w-[175px] rounded-[13px] bg-[#faf9f7] px-3 py-2 text-[9px] leading-4 text-[#55534f]">
                I can help with that. Would you like to book a call?
              </div>
            </div>

            <div className="border-t border-[#eee9df] p-3">
              <div className="flex items-center justify-between rounded-full bg-[#faf9f7] px-3 py-2">
                <span className="text-[8px] text-[#aaa59d]">
                  Type a message...
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff5a36] text-white">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 mb-5 flex items-center justify-between rounded-[16px] border border-[#eee9df] bg-[#faf9f7] px-4 py-3">
          <span className="text-[10px] font-semibold text-[#111214]">
            Chatbot → Qualification → Lead capture
          </span>

          <span className="text-[9px] font-bold text-[#ff5a36]">
            24/7
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   AUTOMATION FEATURES
   ========================================================= */

const AUTOMATION_FEATURES = [
  {
    key: 'workflow-automation',
    title: 'Workflow Automation',
    detail:
      'Connect forms, leads, internal tasks and business actions into automated workflows that run without manual intervention.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    visual: <WorkflowAutomationVisual />,
  },

  {
    key: 'voice-agent',
    title: 'Voice Agent',
    detail:
      'AI voice agents answer calls, qualify enquiries, handle routine conversations and book appointments automatically — 24/7.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.33 1.78.62 2.63a2 2 0 01-.45 2.11L8 9.73a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0122 16.92z"
      />
    ),
    visual: <VoiceAgentVisual />,
  },

  {
    key: 'crm-reporting',
    title: 'CRM & Reporting',
    detail:
      'Keep leads, customers and operational data synchronized while automatically tracking the activity and performance that matters.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M3 3v18h18M7 16v-5m5 5V7m5 9v-8"
      />
    ),
    visual: <CRMReportingVisual />,
  },

  {
    key: 'ai-chatbot-website',
    title: 'AI Chatbot & Website',
    detail:
      'Deploy an AI-powered website experience that answers questions, qualifies visitors and captures leads around the clock.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    ),
    visual: <ChatbotWebsiteVisual />,
  },
];

/* =========================================================
   PAGE
   ========================================================= */

function Automate() {
  return (
    <>
      <Header />

      <Industry
        category="Automation"
        eyebrow="Vertex Automation OS"
        title={
          <>
            Put your business on{' '}
            <span className="text-[#FF5A36]">autopilot.</span>
          </>
        }
        description="We build systems that handle the repetitive work behind your business — from workflow automation and voice agents to CRM operations, AI chatbots, and website experiences."
        features={AUTOMATION_FEATURES}
      >
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-9 bg-[#ff5a36]" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ff5a36]">
            Automate your Business.
          </span>

          <span className="h-px w-9 bg-[#ff5a36]" />
        </div>
      </Industry>

      <HowVertexWorks />

      <LeadCaptureForm />
    </>
  );
}

export default Automate;
