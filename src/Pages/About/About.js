import React from "react";
import about from "../../assets/about.png";
import about_bg from "../../assets/about_bg.png";
const About = () => {
  return (
    <div
      style={{ color: "#e1e1e1" }}
      className="hero min-h-screen bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#0B1120] dark:bg-none"
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            src={about_bg}
            className="rounded-lg shadow-2xl w-4/5 h-full border-solid border-4 border-white"
            alt="Rezvi-Background-Img"
          />
          <img
            src={about}
            className="absolute rounded-lg shadow-2xl w-3/5 right-5 top-1/2 border-solid border-4 border-sky-500"
            alt="Rezvi-About-Img"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Biography!</h1>
          <p className="py-6 gap-4">
            <p>
              Born and Barisal in Bangladesh.{" "}
              <b>Currently working as a Freelancer on Fiverr & Upwork</b>{" "}
              working On <b>MERN Stack Development.</b>
            </p>{" "}
            <p className="mt-4">
              Also, Studied at the <b>Computer Science Technology (CST)</b>{" "}
              Infra Polytechnic Institute. Kashipur Barisal. (BTEB){" "}
            </p>
            <p className="mt-4">
              {" "}
              Especially when I learn <b>Programming</b> and{" "}
              <b>Mern Stack Development</b>. I have had to learn by competing a
              lot.{" "}
              <b>
                I am currently focusing more on software engineering & data
                science.
              </b>{" "}
              I like programming very much.
            </p>
            <p className="mt-4">
              Finished <b>Junior School Certificate (JSC)</b>. &{" "}
              <b>Secondary School Certificate (SSC)</b> Form Govt. Technical
              School & Collage Jhalakathi.
            </p>
            <p className="mt-4">
              Alumni of <b>Khayerhat Fazlul Hoq High School</b>. (2007-2015).
            </p>
            <p className="mt-4">
              I'm honest, <b>hard-working & extrovert in nature</b>. I like to
              take to <b>Challenges</b>. I dislike telling lies and back
              birthing. my favorite color is <b>blue</b> you know{" "}
              <b>blue symbol of love</b>. in my free time Likes{" "}
              <b>Programming</b> & reading <b>Programming books</b>. my{" "}
              <b>favorite person</b> is <b>Prophet Hazrat Muhammad (SM)</b> who
              is the last <b>messenger of Allah</b>. in The future, I wanna be a
              <b>Software Engineering</b>.
              <p className="mt-4">
                Fluent in <b> English & Bangal</b>.
                <b> Car and Tech enthusiast</b>.
              </p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
