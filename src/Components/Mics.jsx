import React from "react";
import Token from "../assets/Mics.svg";
import Token2 from "../assets/Mics2.svg";

function Mics() {
  return (
    <section className="py-20 w-full">
      <div className="container  grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex flex-col gap-4">
          <h1 className="text-white text-5xl font-futuraXBlkBT font-bold">
            Tokenomics
          </h1>
          <h2 className="text-[#FCF535] text-2xl font-futuraXBlkBT font-bold">
            Total Supply : 100,000,000.
          </h2>
          <div className="max-w-[500px] text-white text-2xl  font-futuraXBlkBT font-semibold">
            Contract:{" "}
            <span className="block mt-4 font-openSans text-2xl">
              0x000000000000000..........
            </span>
          </div>
        </article>

        <article className="grid grid-cols-2 justify-center items-center gap-8 flex-wrap">
          <img src={Token} alt="" />
          <img src={Token2} alt="" />
        </article>
      </div>
    </section>
  );
}

export default Mics;
