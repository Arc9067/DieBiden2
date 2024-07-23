import React from "react";
import logo from "../assets/logo.svg";

function About() {
  return (
    <section className="py-20 w-full">
      <div className="container ">
        <div
          id="aboutBg"
          className="p-8 rounded-tr-3xl rounded-bl-3xl w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16"
        >
          <article className="flex flex-col gap-3">
            <h2 className="text-white text-2xl font-futuraXBlkBT font-bold">
              The beginning{" "}
            </h2>
            <h1 className="text-white text-4xl md:text-5xl font-futuraXBlkBT font-bold ">
              Glitch In The Matrix{" "}
            </h1>
            <p className="max-w-[500px] text-white text-base font-normal leading-loose tracking-tight">
              Zegladoids are among the rarest species mankind has ever known to
              see! They are a towering 13ft tall as adolescents and can reach
              heights of up to 32ft. They’ve come from a newly named planet
              known as ZOGZ which houses 111 different species.
            </p>
          </article>
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
