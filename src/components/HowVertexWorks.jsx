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
      
      {/* BACKGROUND ATMOSPHERE */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-220px] h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(215,235,255,0.32) 0%, rgba(232,244,255,0.16) 45%, transparent 75%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative mx-4 w-full max-w-[1240px]">

        {/* HEADING */}
        <div className="mb-10 max-w-[720px]">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF5A36]">
            How Vertex Works
          </p>

          <h2 className="font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif'] text-[clamp(38px,5vw,62px)] font-semibold leading-[0.98] tracking-[-0.045em]">
            From requirement
            <br />
            to <span className="text-[#FF5A36]">real output.</span>
          </h2>

          <p className="mt-5 max-w-[600px] text-[15px] font-medium leading-7 text-[#66645f]">
            You bring the problem. We build the system, creative, and
            execution around it.
          </p>
        </div>

        {/* OUTER PANEL */}
        <div
          onMouseMove={handleMouseMove}
          className="
            group relative overflow-hidden
            rounded-[28px]
            border border-[#e8e4dc]
            bg-[#f7f4ee]
            p-3
            shadow-[0_15px_50px_rgba(0,0,0,0.045)]
            sm:p-4
            lg:p-5
          "
        >
          {/* MOUSE LIGHT */}
          <div
            className="
              pointer-events-none absolute z-0
              h-[300px] w-[300px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              bg-blue-200/20
              blur-[90px]
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            "
            style={{
              left: `${mouse.x}%`,
              top: `${mouse.y}%`,
            }}
          />

          {/* INNER PANEL */}
          <div
            className="
              relative z-10
              overflow-hidden
              rounded-[23px]
              border border-white/80
              bg-white/80
              shadow-[0_8px_30px_rgba(0,0,0,0.025)]
              backdrop-blur-xl
            "
          >
            {/* REFLECTION */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-gradient-to-br
                from-white/80
                via-transparent
                to-white/20
              "
            />

            {/* STEPS */}

            <div
              className="
                relative grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
              "
            >
              {STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className={`
                    relative
                    px-6 py-7
                    sm:px-8 sm:py-8
                    xl:px-7 xl:py-8

                    ${
                      index !== STEPS.length - 1
                        ? `
                          border-b border-[#e8e5df]
                          md:[&:nth-child(odd)]:border-r
                          xl:border-b-0
                          xl:border-r
                          xl:last:border-r-0
                        `
                        : ""
                    }
                  `}
                >
                  {/* TOP ROW */}
                  <div className="mb-7 flex items-center justify-between">
                    <span
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-[#e8e4dc]
                        bg-[#f7f4ee]
                        text-[11px]
                        font-bold
                        text-[#111214]
                      "
                    >
                      {step.number}
                    </span>

                    <span className="text-[9px] font-bold tracking-[0.16em] text-[#aaa69f]">
                      {step.label}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      max-w-[250px]
                      font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                      text-[22px]
                      font-medium
                      leading-[1.08]
                      tracking-[-0.035em]
                      text-[#111214]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 max-w-[255px] text-[13px] font-medium leading-6 text-[#77736c]">
                    {step.description}
                  </p>

                  {/* CONNECTOR — DESKTOP ONLY */}
                  {index !== STEPS.length - 1 && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        right-[-5px]
                        top-[38px]
                        z-20
                        hidden
                        h-[9px]
                        w-[9px]
                        rounded-full
                        border-2
                        border-white
                        bg-[#FF5A36]
                        xl:block
                      "
                    />
                  )}
                </div>
              ))}
            </div>

            {/* RESULT */}
            <div className="mx-5 mb-5 mt-2">
              <div
                className="
                  flex flex-col gap-4
                  rounded-[18px]
                  border border-[#e8e4dc]
                  bg-[#f7f4ee]/80
                  px-5 py-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:px-6
                "
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#aaa69f]">
                    The result
                  </p>

                  <p
                    className="
                      mt-1
                      font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                      text-[19px]
                      font-medium
                      tracking-[-0.025em]
                      text-[#111214]
                    "
                  >
                    Less manual work. Better execution.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF5A36]" />

                  <span className="text-[11px] font-semibold text-[#77736c]">
                    Built around your objective
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}