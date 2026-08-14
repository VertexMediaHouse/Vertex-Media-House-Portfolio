import { useState } from "react";

const WORKS = [
    {
        id: 1,
        title: "Product Films",
        category: "COMMERCIAL",
        image: "/images/product-film.jpg",
    },
    {
        id: 2,
        title: "Brand Stories",
        category: "BRAND FILM",
        image: "/images/brand-story.jpg",
    },
    {
        id: 3,
        title: "Social Content",
        category: "SOCIAL",
        image: "/images/social-content.jpg",
    },
    {
        id: 4,
        title: "Ad Campaigns",
        category: "PERFORMANCE CREATIVE",
        image: "/images/ad-campaign.jpg",
    },
    {
        id: 5,
        title: "Real Estate Films",
        category: "REAL ESTATE",
        image: "/images/real-estate.jpg",
    },
];

export default function SelectedWork() {
    const [active, setActive] = useState(0);

    const total = WORKS.length;

    const next = () => {
        setActive((current) => (current + 1) % total);
    };

    const prev = () => {
        setActive((current) => (current - 1 + total) % total);
    };

    /*
     * Returns the shortest relative distance between
     * a card and the active card.
     *
     * Example:
     * active = 0
     * card = 4
     *
     * Instead of treating card 4 as +4,
     * it becomes -1 because the carousel loops.
     */
    const getOffset = (index) => {
        let offset = index - active;

        if (offset > total / 2) {
            offset -= total;
        }

        if (offset < -total / 2) {
            offset += total;
        }

        return offset;
    };

    return (
        <section
            id="selected-work"
            className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-20
        sm:px-6
        lg:px-10
      "
        >
            {/* =========================================================
          TOP CENTER ATMOSPHERE
          ========================================================= */}

            <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] overflow-hidden">
                <div
                    className="
            absolute
            left-1/2
            top-[-260px]
            h-[600px]
            w-[1100px]
            -translate-x-1/2
            rounded-full
            blur-[90px]
          "
                    style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(215,235,255,0.35) 0%, rgba(235,245,255,0.20) 42%, transparent 72%)",
                    }}
                />
            </div>

            {/* =========================================================
          HEADER
          ========================================================= */}

            <div className="relative z-10 mx-auto max-w-[1100px] text-center">
                <div className="mb-5 flex items-center justify-center gap-3">
                    <span className="h-px w-9 bg-[#ff5a36]" />

                    <span
                        className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#ff5a36]
            "
                    >
                        Edit
                    </span>

                    <span className="h-px w-9 bg-[#ff5a36]" />
                </div>

                <h2
                    className="
            mx-auto
            max-w-[900px]
            font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
            text-[clamp(42px,6vw,60px)]
            font-semibold
            leading-[0.95]
            tracking-[-0.055em]
            text-[#111214]
          "
                >
                    Work that makes
                    <br />
                    <span className="text-[#ff5a36]">people stop scrolling.</span>
                </h2>

                <p
                    className="
            mx-auto
            mt-6
            max-w-[620px]
            text-[14px]
            font-medium
            leading-6
            text-[#77746f]
            sm:text-[15px]
          "
                >
                    Commercial films, brand stories, product videos, and social content
                    built to look sharp and hold attention.
                </p>
            </div>

        {/* =========================================================
          CAROUSEL STAGE
          ========================================================= */}

            <div
                className="
          relative
          z-10
          mx-auto
          mt-20 sm:mt-24
          h-[580px]
          w-full
          max-w-[1450px]
          overflow-hidden
          sm:h-[680px]
          lg:h-[780px]
        "
            >
                {/* Perspective layer */}
                <div
                    className="
            absolute
            inset-0
            [perspective:1400px]
          "
                >
                    {WORKS.map((work, index) => {
                        const offset = getOffset(index);
                        const isActive = offset === 0;

                        /*
                         * Only render cards close to the active card.
                         * This prevents distant cards from appearing
                         * on top of the page or causing visual bugs.
                         */
                        if (Math.abs(offset) > 2) {
                            return null;
                        }

                        const translateX =
                            offset === 0
                                ? "0%"
                                : offset < 0
                                    ? "-115%"
                                    : "115%";

                        const translateZ =
                            offset === 0
                                ? "0px"
                                : offset === -1 || offset === 1
                                    ? "-180px"
                                    : "-340px";

                        const rotateY =
                            offset === 0
                                ? "0deg"
                                : offset < 0
                                    ? "12deg"
                                    : "-12deg";

                        const scale =
                            offset === 0
                                ? 1
                                : offset === -1 || offset === 1
                                    ? 0.78
                                    : 0.62;

                        const opacity =
                            offset === 0
                                ? 1
                                : offset === -1 || offset === 1
                                    ? 0.82
                                    : 0.35;

                        return (
                            <article
  key={work.id}
  className="
    absolute
    left-50/75
    top-99/100
    w-[min(38vw,450px)]
    -translate-x-1/2
    -translate-y-1/2
    transition-all
    duration-700
    ease-[cubic-bezier(.22,1,.36,1)]
    will-change-transform
  "
                                style={{
                                    transform: `
                    translate3d(
                      calc(-50% + ${translateX}),
                      -50%,
                      ${translateZ}
                    )
                    rotateY(${rotateY})
                    scale(${scale})
                  `,
                                    opacity,
                                    zIndex: 20 - Math.abs(offset),
                                    pointerEvents: isActive ? "auto" : "none",
                                }}
                            >
                                {/* =================================================
                    CARD
                    ================================================= */}

                                <div
                                    className="
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-[#ebe8e2]
                    bg-white/70
                    p-3
                    shadow-[0_35px_90px_rgba(0,0,0,0.12)]
                    backdrop-blur-2xl
                    sm:rounded-[34px]
                    sm:p-4
                  "
                                >
                                    {/* Inner glass surface */}
                                    <div
                                        className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-[30px]
                      bg-gradient-to-br
                      from-white/90
                      via-white/35
                      to-white/10
                    "
                                    />

                                    {/* =================================================
                      MEDIA
                      ================================================= */}

                                    <div
                                        className="
                      relative
                      aspect-[9/16]
                      overflow-hidden
                      rounded-[23px]
                      bg-[#171717]
                      sm:rounded-[26px]
                    "
                                    >
                                        <img
  src={work.image}
  alt={work.title}
  draggable="false"
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
  "
/>
                                        {/* Dark cinematic overlay */}
                                        <div
                                            className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/75
                        via-black/15
                        to-black/5
                      "
                                        />

                                        {/* Top glass reflection */}
                                        <div
                                            className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0
                        h-1/3
                        bg-gradient-to-b
                        from-white/15
                        to-transparent
                      "
                                        />

                                        {/* =================================================
                        CARD CONTENT
                        ================================================= */}

                                        <div
                                            className="
                        absolute
                        inset-x-0
                        bottom-0
                        p-6
                        sm:p-8
                        lg:p-10
                      "
                                        >
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#ff5a36]
                          "
                                                />

                                                <span
                                                    className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-white/65
                            sm:text-[10px]
                          "
                                                >
                                                    {work.category}
                                                </span>
                                            </div>

                                            <h3
                                                className="
                          mt-2
                          font-['Bricolage_Grotesque','ui-sans-serif','system-ui','sans-serif']
                          text-[clamp(28px,4vw,52px)]
                          font-medium
                          leading-none
                          tracking-[-0.045em]
                          text-white
                        "
                                            >
                                                {work.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* =========================================================
            PREVIOUS BUTTON
            ========================================================= */}

                <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous work"
                    className="
            absolute
            bottom-4
            left-[calc(50%-28px)]
            z-50
            flex
            h-12
            w-12
            -translate-x-[calc(50%+120px)]
            items-center
            justify-center
            rounded-full
            border
            border-[#e7e3dc]
            bg-white/85
            text-[#111214]
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-x-[calc(50%+120px)]
            hover:bg-white
            active:scale-95
            sm:-translate-x-[calc(50%+270px)]
            sm:hover:-translate-x-[calc(50%+270px)]
          "
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                {/* =========================================================
            NEXT BUTTON
            ========================================================= */}

                <button
                    type="button"
                    onClick={next}
                    aria-label="Next work"
                    className="
            absolute
            bottom-4
            left-[calc(50%+28px)]
            z-50
            flex
            h-12
            w-12
            translate-x-[calc(50%+120px)]
            items-center
            justify-center
            rounded-full
            border
            border-[#e7e3dc]
            bg-white/85
            text-[#111214]
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-white
            active:scale-95
            sm:translate-x-[calc(50%+270px)]
          "
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* =========================================================
          DOT INDICATORS
          ========================================================= */}

            <div className="relative z-20 mt-1 flex justify-center gap-2">
                {WORKS.map((work, index) => (
                    <button
                        key={work.id}
                        type="button"
                        aria-label={`Go to ${work.title}`}
                        onClick={() => setActive(index)}
                        className={`
              h-1.5
              rounded-full
              transition-all
              duration-300
              ${active === index
                                ? "w-7 bg-[#ff5a36]"
                                : "w-1.5 bg-[#d9d6d0] hover:bg-[#aaa7a1]"
                            }
            `}
                    />
                ))}
            </div>
        </section>
    );
}
