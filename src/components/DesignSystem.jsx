import { useState } from "react";

const DESIGN_MODES = [
  {
    id: "brand",
    label: "Brand Systems",
    number: "01",
    title: "Build a brand people recognize.",
    description:
      "Identity systems, visual language, typography, color, and assets designed to stay consistent everywhere your brand shows up.",
    tags: ["Identity", "Typography", "Visual System"],
  },
  {
    id: "web",
    label: "Web Design",
    number: "02",
    title: "Turn ideas into interfaces.",
    description:
      "Landing pages and digital experiences designed around hierarchy, clarity, conversion, and a visual system that feels unmistakably yours.",
    tags: ["UI", "Landing Pages", "UX"],
  },
  {
    id: "social",
    label: "Social Creative",
    number: "03",
    title: "Make the feed impossible to ignore.",
    description:
      "Social graphics, campaign systems, thumbnails, and creative assets built to create consistency without making every post look the same.",
    tags: ["Campaigns", "Social", "Creative"],
  },
  {
    id: "presentation",
    label: "Presentations",
    number: "04",
    title: "Make information look valuable.",
    description:
      "Pitch decks, sales presentations, and visual storytelling systems that make complicated ideas easier to understand and harder to forget.",
    tags: ["Pitch Decks", "Storytelling", "Sales"],
  },
];

export default function DesignSystem() {
  const [active, setActive] = useState("brand");

  const current =
    DESIGN_MODES.find((item) => item.id === active) || DESIGN_MODES[0];

  return (
    <section
      id="design"
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-24
        sm:px-6
        lg:px-10
      "
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[-260px]
            h-[620px]
            w-[1100px]
            -translate-x-1/2
            rounded-full
            blur-[100px]
          "
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(215,235,255,0.34) 0%, rgba(235,245,255,0.18) 42%, transparent 72%)",
          }}
        />

        <div
          className="
            absolute
            right-[-180px]
            top-[35%]
            h-[420px]
            w-[420px]
            rounded-full
            blur-[100px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(230,240,250,0.22), transparent 70%)",
          }}
        />
      </div>

      {/* =========================================================
          HEADER
          ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-9 bg-[#ff5a36]" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-[#ff5a36]
            "
          >
            Design
          </span>

          <span className="h-px w-9 bg-[#ff5a36]" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <h2
            className="
              max-w-[850px]
              font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
              text-[clamp(44px,6vw,78px)]
              font-semibold
              leading-[0.92]
              tracking-[-0.06em]
              text-[#111214]
            "
          >
            Design isn't decoration.
            <br />
            <span className="text-[#ff5a36]">It's the system.</span>
          </h2>

          <p
            className="
              max-w-[480px]
              pb-1
              text-[14px]
              font-medium
              leading-6
              text-[#77746f]
              lg:justify-self-end
            "
          >
            From identity to interface, every visual decision has a job —
            making your brand clearer, more memorable, and easier to scale.
          </p>
        </div>
      </div>

      {/* =========================================================
          MAIN DESIGN CANVAS
          ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-16
          max-w-[1250px]
          overflow-hidden
          rounded-[34px]
          border
          border-[#ebe8e2]
          bg-white/60
          shadow-[0_30px_90px_rgba(0,0,0,0.07)]
          backdrop-blur-2xl
        "
      >
        {/* Mouse-neutral glass highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-white/80
            via-transparent
            to-white/20
          "
        />

        <div className="relative grid min-h-[560px] lg:grid-cols-[330px_1fr]">
          {/* =====================================================
              LEFT NAVIGATION
              ===================================================== */}

          <div
            className="
              relative
              border-b
              border-[#ebe8e2]
              bg-white/35
              p-4
              lg:border-b-0
              lg:border-r
            "
          >
            <div className="flex h-full flex-col">
              <div className="px-4 pb-5 pt-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aaa7a1]">
                  What we design
                </span>
              </div>

              <div className="space-y-1">
                {DESIGN_MODES.map((item) => {
                  const isActive = active === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActive(item.id)}
                      className="group relative w-full text-left"
                    >
                      {isActive && (
                        <div
                          className="
                            absolute
                            inset-0
                            rounded-[20px]
                            border
                            border-white
                            bg-white/80
                            shadow-[0_10px_30px_rgba(0,0,0,0.055)]
                          "
                        />
                      )}

                      <div
                        className="
                          relative
                          flex
                          items-center
                          gap-4
                          rounded-[20px]
                          px-4
                          py-4
                        "
                      >
                        <span
                          className={`
                            text-[10px]
                            font-bold
                            tracking-[0.15em]
                            transition-colors
                            ${
                              isActive
                                ? "text-[#ff5a36]"
                                : "text-[#aaa7a1] group-hover:text-[#77746f]"
                            }
                          `}
                        >
                          {item.number}
                        </span>

                        <span
                          className={`
                            flex-1
                            text-[14px]
                            font-bold
                            transition-colors
                            ${
                              isActive
                                ? "text-[#111214]"
                                : "text-[#66635e] group-hover:text-[#111214]"
                            }
                          `}
                        >
                          {item.label}
                        </span>

                        <svg
                          className={`
                            h-4 w-4
                            transition-all duration-300
                            ${
                              isActive
                                ? "translate-x-0.5 text-[#ff5a36]"
                                : "text-[#bbb8b2] group-hover:text-[#55534f]"
                            }
                          `}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 18l6-6-6-6"
                          />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom note */}
              <div className="mt-auto hidden border-t border-[#ebe8e2] px-4 pb-3 pt-6 lg:block">
                <p className="text-[11px] font-medium leading-5 text-[#99958e]">
                  One visual language.
                  <br />
                  Multiple touchpoints.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — DESIGN ARTBOARD
              ===================================================== */}

          <div className="relative min-h-[500px] overflow-hidden p-5 sm:p-8 lg:p-12">
            {/* Grid */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.45]
              "
              style={{
                backgroundImage:
                  "linear-gradient(rgba(17,18,20,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(17,18,20,0.035) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Artboard */}
            <div
              key={current.id}
              className="
                relative
                flex
                min-h-[430px]
                animate-[designIn_450ms_ease-out]
                flex-col
                justify-between
                overflow-hidden
                rounded-[28px]
                border
                border-[#e8e4dc]
                bg-[#f7f5f1]
                p-7
                shadow-[0_25px_70px_rgba(0,0,0,0.08)]
                sm:p-10
              "
            >
              {/* Top bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5a36]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#77746f]">
                    Creative Direction
                  </span>
                </div>

                <span className="text-[9px] font-bold tracking-[0.16em] text-[#aaa7a1]">
                  {current.number} / 04
                </span>
              </div>

              {/* Main composition */}
              <div className="relative flex flex-1 items-center py-10">
                {/* Decorative frame */}
                <div
                  className="
                    absolute
                    right-[-50px]
                    top-1/2
                    h-[300px]
                    w-[300px]
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#dedad2]
                  "
                />

                <div
                  className="
                    absolute
                    right-[20px]
                    top-1/2
                    h-[210px]
                    w-[210px]
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#e5e1da]
                  "
                />

                {/* Typography */}
                <div className="relative z-10 max-w-[650px]">
                  <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff5a36]">
                    {current.label}
                  </span>

                  <h3
                    className="
                      max-w-[620px]
                      font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                      text-[clamp(38px,5vw,68px)]
                      font-semibold
                      leading-[0.92]
                      tracking-[-0.055em]
                      text-[#111214]
                    "
                  >
                    {current.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      max-w-[480px]
                      text-[13px]
                      font-medium
                      leading-6
                      text-[#77746f]
                      sm:text-[14px]
                    "
                  >
                    {current.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-[#dedad2]
                          bg-white/65
                          px-3
                          py-1.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#66635e]
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom art direction line */}
              <div className="flex items-end justify-between border-t border-[#dfdcd5] pt-5">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#aaa7a1]">
                  Visual system / {current.id}
                </span>

                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border border-[#aaa7a1]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#111214]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5a36]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes designIn {
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