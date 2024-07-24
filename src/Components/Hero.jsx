import React from "react";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="py-36 w-full">
      <div className="container flex flex-col justify-center items-center gap-5">
        <img src={logo} alt="" className="lg:max-w-[30rem]" />
        <h1 className="font-futuraXBlkBT font-bold text-[#FCF535] text-5xl md:text-5xl mt-8 text-center ">
          $OMG
          <span className="block mt-3 text-white">CTO</span>
        </h1>

        <p className="max-w-[500px] text-center text-white text-lg font-normal leading-loose tracking-tight break-all">
          9hQEjp5VioBoAfKprBAg25tDrDzSQgNwsr169QFcwHFE{" "}
        </p>
        <div className="flex-wrap font-bold !font-futuraXBlkBT justify-center flex-col md:flex-row items-stretch gap-3.5 flex">
          <a
            href="https://www.dextools.io/app/solana/pair-explorer/9hQEjp5VioBoAfKprBAg25tDrDzSQgNwsr169QFcwHFE"
            className="h-14 px-8 py-4 bg-green-600 rounded-full justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-bold leading-snug tracking-tight">
              BUY NOW
            </div>
          </a>
          <a
            href="https://twitter.com/"
            className="h-14 px-8 py-4 bg-red-700 rounded-full justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-bold leading-snug tracking-tight">
              TWITTER
            </div>
          </a>
          <a
            href="https://t.me/onmygrindcto"
            className="h-14 px-8 py-4 bg-amber-500 rounded-full justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-bold leading-snug tracking-tight">
              TELEGRAM
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
