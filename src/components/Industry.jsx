export default function Industry() {
  return (
    <section
      id="projects"
      className="relative z-10 mt-0 w-full overflow-hidden bg-[#ffffff] px-6 py-24 text-[#111214] sm:px-8 lg:px-10"
    >
      {/* =========================================================
          BACKGROUND ATMOSPHERE — SAME THEME AS LEAD CAPTURE
          ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large warm glow */}
        <div
          className="absolute left-1/2 top-[-300px] h-[680px] w-[1200px] -translate-x-1/2 rounded-[50%] blur-[55px]"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(255,220,211,0.55) 0%, rgba(255,238,232,0.35) 32%, rgba(255,248,245,0.16) 52%, transparent 72%)',
          }}
        />

        {/* Inner orange glow */}
        <div
          className="absolute left-1/2 top-[-220px] h-[500px] w-[850px] -translate-x-1/2 rounded-[50%] blur-[65px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,190,174,0.20) 0%, rgba(255,220,211,0.12) 42%, transparent 72%)',
          }}
        />

        {/* Subtle center glow */}
        <div
          className="absolute left-1/2 top-[-110px] h-[330px] w-[520px] -translate-x-1/2 rounded-full blur-[75px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,130,105,0.08) 0%, rgba(255,160,140,0.03) 45%, transparent 72%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* =========================================================
            HEADING
            ========================================================= */}

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

        {/* =========================================================
            HORIZONTAL SCROLL
            ========================================================= */}

        <div
          id="scrollTrack"
          className="
            projects
            flex
            snap-x
            snap-mandatory
            gap-7
            overflow-x-auto
            pb-6
            cursor-grab
            select-none
            active:cursor-grabbing
            [scrollbar-width:none]
            [-webkit-overflow-scrolling:touch]
            [&::-webkit-scrollbar]:hidden
            max-[650px]:gap-4
          "
        >
          {/* =====================================================
              PROJECT 01
              ===================================================== */}

          <article
            className="
              group
              relative
              min-w-0
              flex-[0_0_600px]
              snap-start
              max-[650px]:flex-[0_0_84vw]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white
                bg-white/45
                p-6
                shadow-[0_25px_70px_-20px_rgba(255,107,74,0.16)]
                backdrop-blur-xl
                backdrop-saturate-150
                transition-all
                duration-500
                hover:-translate-y-1
                max-[650px]:rounded-[28px]
                max-[650px]:p-4
              "
            >
              {/* Glass highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/70 via-white/25 to-[#fff3ef]/20" />

              {/* Top reflection */}
              <div className="pointer-events-none absolute left-0 top-0 h-1/3 w-full rounded-t-[36px] bg-gradient-to-b from-white/50 to-transparent" />

              <div className="relative aspect-[2] w-full overflow-hidden rounded-[22px] bg-[#e9e9e7] max-[650px]:rounded-[18px]">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85"
                  alt="Real Estate"
                  draggable="false"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1000ms]
                    ease-[cubic-bezier(.16,1,.3,1)]
                    group-hover:scale-[1.045]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />

                {/* Image glass sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                <div className="pointer-events-none absolute left-0 top-0 h-1/3 w-full bg-gradient-to-b from-white/15 to-transparent" />

                <div
                  className="
                    absolute
                    inset-x-40
                    bottom-20
                    p-8
                    max-[650px]:inset-x-0
                    max-[650px]:bottom-0
                    max-[650px]:p-6
                  "
                >
                  <h2
                    className="
                      font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                      text-[clamp(32px,4vw,48px)]
                      font-medium
                      leading-[1]
                      tracking-[-0.045em]
                      text-white
                    "
                  >
                    Real Estate
                  </h2>
                </div>
              </div>
            </div>
          </article>

          {/* =====================================================
              PROJECT 02
              ===================================================== */}

          <article
            className="
              group
              relative
              min-w-0
              flex-[0_0_600px]
              snap-start
              max-[650px]:flex-[0_0_84vw]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white
                bg-white/45
                p-6
                shadow-[0_25px_70px_-20px_rgba(255,107,74,0.16)]
                backdrop-blur-xl
                backdrop-saturate-150
                transition-all
                duration-500
                hover:-translate-y-1
                max-[650px]:rounded-[28px]
                max-[650px]:p-4
              "
            >
              <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/70 via-white/25 to-[#fff3ef]/20" />

              <div className="pointer-events-none absolute left-0 top-0 h-1/3 w-full rounded-t-[36px] bg-gradient-to-b from-white/50 to-transparent" />

              <div className="relative aspect-[2] w-full overflow-hidden rounded-[22px] bg-[#e9e9e7] max-[650px]:rounded-[18px]">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85"
                  alt="Digital"
                  draggable="false"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1000ms]
                    ease-[cubic-bezier(.16,1,.3,1)]
                    group-hover:scale-[1.045]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                <div className="pointer-events-none absolute left-0 top-0 h-1/3 w-full bg-gradient-to-b from-white/15 to-transparent" />

                <div
                  className="
                    absolute
                    inset-x-40
                    bottom-20
                    p-8
                    max-[650px]:inset-x-0
                    max-[650px]:bottom-0
                    max-[650px]:p-6
                  "
                >
                  <h2
                    className="
                      font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                      text-[clamp(32px,4vw,48px)]
                      font-medium
                      leading-[1]
                      tracking-[-0.045em]
                      text-white
                    "
                  >
                    Digital&
                  </h2>
                </div>
              </div>
            </div>
          </article>

          {/* =====================================================
              PROJECT 03
              ===================================================== */}

          <article
            className="
              group
              relative
              min-w-0
              flex-[0_0_600px]
              snap-start
              max-[650px]:flex-[0_0_84vw]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white
                bg-white/45
                p-6
                shadow-[0_25px_70px_-20px_rgba(255,107,74,0.16)]
                backdrop-blur-xl
                backdrop-saturate-150
                transition-all
                duration-500
                hover:-translate-y-1
                max-[650px]:rounded-[28px]
                max-[650px]:p-4
              "
            >
              <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/70 via-white/25 to-[#fff3ef]/20" />

              <div className="pointer-events-none absolute left-0 top-0 h-1/3 w-full rounded-t-[36px] bg-gradient-to-b from-white/50 to-transparent" />

              <div className="relative aspect-[2] w-full overflow-hidden rounded-[22px] bg-[#e9e9e7] max-[650px]:rounded-[18px]">
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=85"
                  alt="Branding"
                  draggable="false"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1000ms]
                    ease-[cubic-bezier(.16,1,.3,1)]
                    group-hover:scale-[1.045]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                <div className="pointer-events-none absolute left-0 top-0 h-1/3 w-full bg-gradient-to-b from-white/15 to-transparent" />

                <div
                  className="
                    absolute
                    inset-x-40
                    bottom-20
                    p-8
                    max-[650px]:inset-x-0
                    max-[650px]:bottom-0
                    max-[650px]:p-6
                  "
                >
                  <h2
                    className="
                      font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                      text-[clamp(32px,4vw,48px)]
                      font-medium
                      leading-[1]
                      tracking-[-0.045em]
                      text-white
                    "
                  >
                    Branding
                  </h2>
                </div>
              </div>
            </div>
          </article>

          {/* =====================================================
              PROJECT 04
              ===================================================== */}

          <article
            className="
              group
              relative
              min-w-0
              flex-[0_0_600px]
              snap-start
              max-[650px]:flex-[0_0_84vw]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white
                bg-white/45
                p-6
                shadow-[0_25px_70px_-20px_rgba(255,107,74,0.16)]
                backdrop-blur-xl
                backdrop-saturate-150
                transition-all
                duration-500
                hover:-translate-y-1
                max-[650px]:rounded-[28px]
                max-[650px]:p-4
              "
            >
              <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/70 via-white/25 to-[#fff3ef]/20" />

              <div className="pointer-events-none absolute left-0 top-0 h-1/3 w-full rounded-t-[36px] bg-gradient-to-b from-white/50 to-transparent" />

              <div className="relative aspect-[2] w-full overflow-hidden rounded-[22px] bg-[#e9e9e7] max-[650px]:rounded-[18px]">
                <img
                  src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1800&q=85"
                  alt="Campaign"
                  draggable="false"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1000ms]
                    ease-[cubic-bezier(.16,1,.3,1)]
                    group-hover:scale-[1.045]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                <div className="pointer-events-none absolute left-0 top-0 h-1/3 w-full bg-gradient-to-b from-white/15 to-transparent" />

                <div
                  className="
                    absolute
                    inset-x-40
                    bottom-20
                    p-8
                    max-[650px]:inset-x-0
                    max-[650px]:bottom-0
                    max-[650px]:p-6
                  "
                >
                  <h2
                    className="
                      font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                      text-[clamp(32px,4vw,48px)]
                      font-medium
                      leading-[1]
                      tracking-[-0.045em]
                      text-white
                    "
                  >
                    Campaign
                  </h2>
                </div>
              </div>
            </div>
          </article>
            </div>
      </div>
    </section>
  );
}