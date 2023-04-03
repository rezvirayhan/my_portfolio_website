import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import rezvirayhan from "../../assets/rezvi_Rayhan.png";
import "./Banner.css";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Mern Stack Developer", "React Expert", "Professional Coder"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div id="banner" className=" text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="rezvi rayhan"
          src={rezvirayhan}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mx-10">
          <h1
            style={{ textTransform: "uppercase", letterSpacing: "10px" }}
            className="text-xs mb-5 mx-12 font-semibold"
          >
            Welcome To My Development World.
          </h1>
          <h1 className="text-6xl font-bold mb-5">
            Hi, I'm <span className="font-extrabold">Rezvi Rayhan</span>{" "}
          </h1>
          <h1 className="text-5xl font-bold mb-5">
            {" "}
            a {text}{" "}
            <Cursor
              cursorBlinking="false"
              cursorStyle="."
              cursorColor="white"
            ></Cursor>
          </h1>
          {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
          <p className="py-6">
            Hey, Buddy! A great complement to all of you with a cluster of red
            roses. On behalf of our team, first of all, I would like to wish you
            a bunch of red roses. We believe that you & others like us will do
            the work of faith. Stay by our side all the time. We are always by
            your side. Thank you Rezvi Rayhan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
