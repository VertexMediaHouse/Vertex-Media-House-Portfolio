function Header() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-4 max-w-[1500px] px-2 py-5 sm:mx-6 sm:px-2 sm:py-6 lg:mx-8 lg:py-7 xl:mx-auto xl:px-5 xl:py-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.55fr_1fr] xl:grid-cols-[2fr_1fr]">

          {/* LEFT — VERTEX */}
          <div
            className="
              relative flex min-h-[125px] items-center
              overflow-hidden rounded-[24px]
              border border-[#e8e4dc]
              bg-white/40
              px-5 py-5
              shadow-[0_6px_24px_rgba(0,0,0,0.035)]
              sm:px-6
              lg:min-h-[135px] lg:px-7
              xl:min-h-[148px] xl:px-8
            "
          >
            <div className="relative flex items-center gap-4 sm:gap-5 lg:gap-5 xl:gap-6">

              {/* Vertex Logo */}
              <div
                className="
                  flex h-[76px] w-[76px] shrink-0
                  items-center justify-center
                  rounded-[24px]
                  bg-white
                  shadow-[0_3px_12px_rgba(0,0,0,0.035)]
                  sm:h-[88px] sm:w-[88px]
                  lg:h-[96px] lg:w-[96px]
                  xl:h-[114px] xl:w-[114px]
                "
              >
                <img
                  src="/VERTEX-white.png"
                  alt="Vertex Media House"
                  className="
                    h-[54px] w-[54px] object-contain
                    sm:h-[62px] sm:w-[62px]
                    lg:h-[68px] lg:w-[68px]
                    xl:h-[78px] xl:w-[78px]
                  "
                />
              </div>

              <div>
                <h2
                  className="
                    text-[27px] font-normal
                    leading-tight tracking-[-0.025em] text-black
                    sm:text-[32px]
                    lg:text-[35px]
                    xl:text-[40px]
                  "
                >
                  Vertex Media House
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT — OFFER */}
          <div className="relative">
            <div
              className="
                sticky top-5 z-50
                flex min-h-[125px] items-center
                overflow-hidden rounded-[24px]
                bg-black
                px-4 py-4
                shadow-[0_6px_24px_rgba(0,0,0,0.14)]
                sm:min-h-[135px] sm:px-5
                lg:min-h-[135px] lg:px-5
                xl:min-h-[148px] xl:px-6
              "
            >
              <div className="flex w-full items-center gap-3 sm:gap-4 lg:gap-4 xl:gap-5">

                {/* Maha Kumbh Logo */}
                <div
                  className="
                    flex h-[76px] w-[105px] shrink-0
                    items-center justify-center
                    overflow-hidden rounded-[20px]
                    bg-white
                    sm:h-[88px] sm:w-[120px]
                    lg:h-[96px] lg:w-[125px]
                    xl:h-[114px] xl:w-[155px]
                  "
                >
                  <img
                    src="/MahaKumbh.png"
                    alt="Pagariya JBN Maha Kumbh Mumbai"
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                {/* Offer */}
                <div className="min-w-0 flex-1">
                  <p
                    className="
                      whitespace-nowrap
                      text-[20px] font-normal
                      leading-tight tracking-[-0.02em] text-white
                      sm:text-[23px]
                      lg:text-[24px]
                      xl:text-[29px]
                    "
                  >
                    Flat 20% Off
                  </p>

                  <p
                    className="
                      mt-1 whitespace-nowrap
                      text-[20px] font-normal
                      leading-tight tracking-[-0.02em] text-white
                      sm:text-[23px]
                      lg:text-[24px]
                      xl:text-[29px]
                    "
                  >
                    Claim Now
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Header;