import { useState } from "react";
import { Link } from "react-router-dom";

const INDUSTRY_ICONS = {
  "Real Estate": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-5h6v5" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
    </svg>
  ),

  "Manufacture": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 9l2 2-2 2" />
      <path d="M11 13h3" />
    </svg>
  ),

  "Retail": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 013 3L8 18l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),

  "Jewelry": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11v2" />
      <path d="M6 9v6" />
      <path d="M9 7v10" />
      <path d="M12 5v14" />
      <path d="M16 8l5-3v14l-5-3V8z" />
    </svg>
  ),
};

export default function IndustrySlider() {
  const [glow, setGlow] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setGlow((prev) => ({
      ...prev,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const handleMouseLeave = (index) => {
    setGlow((prev) => ({
      ...prev,
      [index]: null,
    }));
  };

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85",
      alt: "Real Estate",
      title: "Real Estate",
      path: "/realestate",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85",
      alt: "Manufacturing",
      title: "Manufacture",
      path: "/manufacturing",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=85",
      alt: "Retail",
      title: "Retail",
      path: "/retail",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1800&q=85",
      alt: "Jewelry",
      title: "Jewelry",
      path: "/jewelry",
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative z-10 mt-0 w-full overflow-hidden
        bg-[#ffffff] px-6 text-[#111214]
        sm:px-8 lg:px-10
      "
    >
      {/* Top-center section glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-[-220px]
          h-[520px] w-[1000px]
          -translate-x-1/2
          rounded-full
          blur-[85px]
        "
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(215,235,255,0.42) 30%, rgba(232,244,255,0.24) 68%, rgba(245,250,255,0.10) 88%, transparent 94%)",
        }}
      />

      <div className="relative mx-18 mt-18 max-w-[1500px]">
        <h2
          className="
            mb-12
            font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
            text-[clamp(40px,6vw,64px)]
            font-semibold
            leading-[1]
            tracking-[-0.045em]
            text-[#111214]
          "
        >
          Industry We Serve
        </h2>

        <div
          id="scrollTrack"
          className="
            projects flex snap-x snap-mandatory gap-7 overflow-x-auto pb-6
            cursor-grab select-none active:cursor-grabbing
            [scrollbar-width:none]
            [-webkit-overflow-scrolling:touch]
            [&::-webkit-scrollbar]:hidden
            max-[650px]:gap-4
          "
        >
          {projects.map((project, index) => {
            const position = glow[index];

            return (
              <article
                key={project.title}
                className="
                  group relative min-w-0
                  flex-[0_0_600px] snap-start
                  max-[650px]:flex-[0_0_84vw]
                "
              >
                <div
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className="
                    relative overflow-hidden
                    rounded-[28px]
                    border border-[#e8e4dc]
                    bg-[#f7f4ee]
                    p-6
                    shadow-[0_8px_30px_rgba(0,0,0,0.045)]
                    transition-all duration-500
                    hover:-translate-y-1
                    max-[650px]:rounded-[24px]
                    max-[650px]:p-4
                  "
                >
                  {/* Mouse-follow glow */}
                  <div
                    className="
                      pointer-events-none absolute z-20
                      h-[280px] w-[280px]
                      -translate-x-1/2 -translate-y-1/2
                      rounded-full
                      bg-white/60
                      blur-[70px]
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                    style={{
                      left: position?.x ?? "50%",
                      top: position?.y ?? "50%",
                    }}
                  />

                  {/* Image */}
                  <div
                    className="
                      relative z-10
                      aspect-[2] w-full
                      overflow-hidden
                      rounded-[22px]
                      bg-[#e9eef4]
                      max-[650px]:rounded-[18px]
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      draggable="false"
                      className="
                        pointer-events-none absolute inset-0
                        h-full w-full object-cover
                        transition-transform duration-[1000ms]
                        ease-[cubic-bezier(.16,1,.3,1)]
                        group-hover:scale-[1.045]
                      "
                    />

                    {/* Image contrast */}
                    <div
                      className="
                        pointer-events-none absolute inset-0
                        bg-gradient-to-t
                        from-black/75
                        via-black/15
                        to-black/10
                      "
                    />

                    {/* Subtle image highlight */}
                    <div
                      className="
                        pointer-events-none absolute inset-0
                        bg-gradient-to-br
                        from-white/[0.08]
                        via-transparent
                        to-transparent
                      "
                    />

                     {/* Bottom-left content */}
                     <div
                       className="
                         absolute bottom-0 left-0 right-0
                         z-20
                         flex items-end justify-between
                         p-7
                         max-[650px]:p-5
                       "
                     >
                       <div>
                         {/* Industry icon */}
                         <div
                           className="
                             mb-4
                             flex h-[46px] w-[46px]
                             items-center justify-center
                             rounded-full
                             border border-white/25
                             bg-black/55
                             text-white
                             shadow-[0_6px_18px_rgba(0,0,0,0.18)]
                             backdrop-blur-md
                             transition-all duration-300
                             group-hover:-translate-y-0.5
                             group-hover:bg-black/70
                           "
                         >
                           {INDUSTRY_ICONS[project.title]}
                         </div>
 
                         {/* Title */}
                         <h2
                           className="
                             font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                             text-[clamp(32px,4vw,48px)]
                             font-medium
                             leading-[0.95]
                             tracking-[-0.045em]
                             text-white
                           "
                         >
                           {project.title}
                         </h2>
                       </div>
 
                       {/* Explore Button */}
                       <Link
                         to={project.path}
                         className="
                           flex h-[46px] px-5
                           items-center justify-center gap-2
                           rounded-full
                           border border-white/30
                           bg-white/90 text-black
                           text-[13px] font-bold
                           shadow-[0_6px_18px_rgba(0,0,0,0.1)]
                           backdrop-blur-md
                           transition-all duration-300
                           hover:bg-white hover:scale-105
                           max-[650px]:px-4 max-[650px]:h-[40px] max-[650px]:text-[12px]
                         "
                       >
                         Explore
                         <svg
                           width="14"
                           height="14"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                         >
                           <path d="M5 12h14" />
                           <path d="M12 5l7 7-7 7" />
                         </svg>
                       </Link>
                     </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}