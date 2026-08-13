import { useState } from "react";

function Header() {
  const [showOffer, setShowOffer] = useState(true);

  return (
    <>
      {/* Fixed Offer Card */}
      {showOffer && (
        <div
          className="
            fixed
            left-3
            right-3
            top-3
            z-[9999]
            flex
            min-h-[82px]
            items-center
            rounded-[22px]
            bg-black
            px-4
            py-3
            shadow-[0_10px_35px_rgba(0,0,0,0.25)]

            sm:left-auto
            sm:right-4
            sm:top-4
            sm:w-[360px]
            sm:min-h-[100px]
            sm:rounded-[24px]

            md:right-6
            md:top-6
            md:w-[400px]
            md:min-h-[120px]
            md:rounded-[26px]

            lg:w-[420px]
            lg:min-h-[148px]
            lg:rounded-[28px]
            lg:px-6
          "
        >
          {/* X Button */}
          <button
            type="button"
            onClick={() => setShowOffer(false)}
            aria-label="Close offer"
            className="
              absolute
              right-3
              top-3
              z-10
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              text-white
              transition
              hover:bg-white/10
            "
          >
            <span className="text-[22px] font-light leading-none">×</span>
          </button>

          <div className="flex w-full items-center gap-3 sm:gap-4 md:gap-5">
            {/* Maha Kumbh Logo */}
            <div
              className="
                flex
                h-[58px]
                w-[78px]
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-[18px]
                bg-white

                sm:h-[72px]
                sm:w-[98px]
                sm:rounded-[20px]

                md:h-[88px]
                md:w-[120px]

                lg:h-[114px]
                lg:w-[155px]
                lg:rounded-[28px]
              "
            >
              <img
                src="/MahaKumbh.png"
                alt="Pagariya JBN Maha Kumbh Mumbai"
                className="h-full w-full object-contain p-1"
              />
            </div>

            {/* Offer Text */}
            <div className="min-w-0 flex-1">
              <p
                className="
                  whitespace-nowrap
                  text-[18px]
                  font-normal
                  leading-tight
                  text-white
                  sm:text-[21px]
                  md:text-[25px]
                  lg:text-[29px]
                "
              >
                Flat 20% Off
              </p>

              <p
                className="
                  mt-1
                  whitespace-nowrap
                  text-[18px]
                  font-normal
                  leading-tight
                  text-white
                  sm:text-[21px]
                  md:text-[25px]
                  lg:text-[29px]
                "
              >
                Claim Now
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="relative overflow-hidden bg-white">
        <div
          className="
            mx-auto
            max-w-[1494px]
            px-4
            pb-6
            pt-[115px]

            sm:px-5
            sm:pt-[135px]

            md:px-6
            md:pb-8
            md:pt-[160px]

            lg:px-8
            lg:pt-8
          "
        >
          <div
            className="
              relative
              flex
              min-h-[150px]
              items-center
              overflow-hidden
              rounded-[28px]
              border
              border-[#eee9df]
              bg-[#f7f4ee]
              px-5
              py-6
              shadow-[0_8px_30px_rgba(0,0,0,0.04)]

              sm:px-7
              md:px-8
            "
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/20" />

            <div
              className="
                relative
                flex
                w-full
                items-center
                gap-4
                sm:gap-5
                md:gap-6
              "
            >
              {/* Vertex Logo */}
              <div
                className="
                  flex
                  h-[68px]
                  w-[68px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[24px]
                  bg-white
                  shadow-[0_4px_15px_rgba(0,0,0,0.04)]

                  sm:h-[80px]
                  sm:w-[80px]

                  md:h-[100px]
                  md:w-[100px]

                  lg:h-[114px]
                  lg:w-[114px]
                "
              >
                <img
                  src="/VERTEX-white.png"
                  alt="Vertex Media House"
                  className="
                    h-[48px]
                    w-[48px]
                    object-contain

                    sm:h-[56px]
                    sm:w-[56px]

                    md:h-[68px]
                    md:w-[68px]

                    lg:h-[78px]
                    lg:w-[78px]
                  "
                />
              </div>

              {/* Vertex Text */}
              <div className="min-w-0">
                <h2
                  className="
                    text-[25px]
                    font-normal
                    leading-tight
                    tracking-[-0.02em]
                    text-black
                    sm:text-[30px]
                    md:text-[36px]
                    lg:text-[40px]
                  "
                >
                  Vertex Media House
                </h2>

                <p
                  className="
                    mt-2
                    text-[14px]
                    font-normal
                    leading-tight
                    text-black
                    sm:text-[17px]
                    md:mt-3
                    md:text-[21px]
                    lg:text-[26px]
                  "
                >
                  We are your creative and tech partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;