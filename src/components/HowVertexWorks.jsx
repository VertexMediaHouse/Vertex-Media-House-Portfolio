import { useState } from "react";

const STEPS = [
  {
    number: "01",
    label: "INPUT",
    title: "Tell us what needs to happen",
    description:
      "You bring the business problem, workflow, campaign, brand requirement, or content requirement.",
  },
  {
    number: "02",
    label: "VERTEX STACK",
    title: "We assemble the right capabilities",
    description:
      "Automation, AI, design, development, editing, and integrations — combined around what the project actually needs.",
  },
  {
    number: "03",
    label: "BUILD",
    title: "We build and refine",
    description:
      "We turn the requirement into a working output and refine it against the actual objective.",
  },
  {
    number: "04",
    label: "OUTPUT",
    title: "It goes to work",
    description:
      "Website live. Leads routed. Content published. Workflow automated. Campaign running.",
  },
];

export default function HowVertexWorks() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-20 text-[#111214] sm:px-8 lg:px-10">

      {/* TOP CENTER ATMOSPHERE */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-280px] h-[560px] w-[1000px] -translate-x-1/2 rounded-full blur-[85px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(215,235,255,0.34) 0%, rgba(232,244,255,0.18) 42%, rgba(245,250,255,0.08) 62%, transparent 78%)",
        }}
      />

      <div className="relative mx-24 max-w-[1500px]">

        {/* HEADING */}
        <div className="mb-10 max-w-[700px]">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FF5A36]">
            How Vertex Works
          </p>

          <h2 className="font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif'] text-[clamp(40px,6vw,64px)] font-semibold leading-[0.98] tracking-[-0.045em]">
            From requirement
            <br />
            to <span className="text-[#FF5A36]">real output.</span>
          </h2>

          <p className="mt-5 max-w-[580px] text-[16px] font-medium leading-7 text-[#66645f]">
            You bring the problem. We build the system, creative, and execution
            around it.
          </p>
        </div>

        {/* MAIN GLASS PANEL */}
        <div
          onMouseMove={handleMouseMove}
          className="
            group relative overflow-hidden rounded-[32px]
            border border-[#e8e4dc]
            bg-[#f7f4ee]
            p-5
            shadow-[0_12px_45px_rgba(0,0,0,0.045)]
            md:p-7
          "
        >
          {/* MOUSE BLUE SHADE */}
          <div
            className="
              pointer-events-none absolute z-0
              h-[340px] w-[340px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-blue-200/25
              blur-[85px]
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            "
            style={{
              left: `${mouse.x}%`,
              top: `${mouse.y}%`,
            }}
          />

          {/* INNER WHITE GLASS */}
          <div
            className="
              relative z-10 overflow-hidden
              rounded-[26px]
              border border-white/80
              bg-white/75
              p-6
              shadow-[0_10px_35px_rgba(0,0,0,0.035)]
              backdrop-blur-xl
              md:p-8
            "
          >
            {/* SUBTLE GLASS REFLECTION */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-gradient-to-br
                from-white/80
                via-transparent
                to-white/30
              "
            />

            <div className="relative grid grid-cols-1 md:grid-cols-4">

              {STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className={`
                    relative px-2 py-5
                    md:px-7 md:py-4
                    ${
                      index !== STEPS.length - 1
                        ? "border-b border-[#e8e5df] md:border-b-0 md:border-r"
                        : ""
                    }
                  `}
                >
                  {/* NUMBER */}
                  <div className="mb-7 flex items-center justify-between">
                    <span
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full
                        border border-[#e8e4dc]
                        bg-[#f7f4ee]
                        text-[12px]
                        font-bold
                        text-[#111214]
                      "
                    >
                      {step.number}
                    </span>

                    <span className="text-[10px] font-semibold tracking-[0.15em] text-[#aaa69f]">
                      {step.label}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      max-w-[220px]
                      font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                      text-[23px]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-[#111214]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 max-w-[245px] text-[13px] font-medium leading-6 text-[#77736c]">
                    {step.description}
                  </p>

                  {/* CONNECTOR */}
                  {index !== STEPS.length - 1 && (
                    <div className="pointer-events-none absolute right-[-5px] top-[36px] z-20 hidden h-[9px] w-[9px] rounded-full border-2 border-white bg-[#FF5A36] md:block" />
                  )}
                </div>
              ))}

            </div>

            {/* BOTTOM RESULT BAR */}
            <div className="relative mt-7 flex flex-col gap-4 rounded-[20px] border border-[#e8e4dc] bg-[#f7f4ee]/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#aaa69f]">
                  The result
                </p>

                <p className="mt-1 font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif'] text-[20px] font-medium tracking-[-0.025em] text-[#111214]">
                  Less manual work. Better execution.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FF5A36]" />
                <span className="text-[12px] font-semibold text-[#77736c]">
                  Built around your objective
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}