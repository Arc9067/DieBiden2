import React from "react";
import logo from "../assets/logo2.svg";
import telegram from "../assets/icons/telegram.svg";
import ether from "../assets/icons/ether.svg";
import dextool from "../assets/icons/dextool.svg";
import twitter from "../assets/icons/twitter.svg";

function Footer() {
  return (
    <section className="py-20 w-full">
      <div className="container ">
        <div
          id="footerBg"
          className="px-8 py-20 rounded-tr-3xl rounded-bl-3xl w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16"
        >
          <article className="flex flex-col gap-3 items-start">
            <img src={logo} alt="" />
            <p className="max-w-[500px] text-white text-base font-normal leading-loose tracking-tight">
              Looking to join our army of Zegladoids?
            </p>
          </article>

          <article className="flex flex-col gap-5 ">
            <h1 className="text-white text-4xl font-futuraXBlkBT font-bold leading-10 tracking-wider">
              JOIN OUR COMMUNITY
            </h1>
            <div className="flex items-center gap-4">
              <a href="https://t.me/Zegladoid">
                <img src={telegram} alt="" />
              </a>
              <a href="https://twitter.com/Zegladoid">
                <img src={twitter} alt="" />
              </a>{" "}
              <a href="">
                <img src={dextool} alt="" />
              </a>{" "}
              <a href="">
                <img src={ether} alt="" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Footer;
