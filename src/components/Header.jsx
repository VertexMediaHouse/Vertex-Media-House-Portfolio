function Header() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-20 max-w-[1500px] px-5 py-6 md:px-6 md:py-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">

          {/* LEFT — VERTEX — NOT STICKY */}
          <div
            className="
              relative flex min-h-[148px] items-center
              overflow-hidden rounded-[24px]
              border border-[#e8e4dc]
              bg-white/40
              px-7 py-6
              shadow-[0_6px_24px_rgba(0,0,0,0.035)]
              md:px-8
            "
          >
            <div className="relative flex items-center gap-6">
              <div
                className="
                  flex h-[88px] w-[88px] shrink-0
                  items-center justify-center
                  rounded-[28px]
                  bg-white
                  shadow-[0_3px_12px_rgba(0,0,0,0.035)]
                  md:h-[114px] md:w-[114px]
                "
              >
                <img
                  src="/VERTEX-white.png"
                  alt="Vertex Media House"
                  className="h-[62px] w-[62px] object-contain md:h-[78px] md:w-[78px]"
                />
              </div>

              <div>
                <h2 className="text-[28px] font-normal leading-tight tracking-[-0.025em] text-black sm:text-[36px] md:text-[40px]">
                  Vertex Media House
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT — STICKY OFFER ONLY */}
          <div className="relative">
            <div
              className="
                sticky top-5 z-50
                flex min-h-[148px] items-center
                overflow-hidden rounded-[24px]
                bg-black
                px-5 py-5
                shadow-[0_6px_24px_rgba(0,0,0,0.14)]
                md:px-6
              "
            >
              <div className="flex w-full items-center gap-4 md:gap-5">

                {/* Maha Kumbh Logo */}
                <div
                  className="
                    flex h-[88px] w-[120px] shrink-0
                    items-center justify-center
                    overflow-hidden rounded-[24px]
                    bg-white
                    md:h-[114px] md:w-[155px]
                  "
                >
                  <img
                    src="/MahaKumbh.png"
                    alt="Pagariya JBN Maha Kumbh Mumbai"
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                {/* Offer */}
                <div className="min-w-0">
                  <p className="text-[24px] font-normal leading-tight tracking-[-0.02em] text-white sm:text-[28px] md:text-[29px]">
                    Flat 20% Off
                  </p>

                  <p className="mt-1 text-[24px] font-normal leading-tight tracking-[-0.02em] text-white sm:text-[28px] md:text-[29px]">
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