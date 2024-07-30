import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Landing = () => {
  const pdfURL = "/Sasikumar.pdf";

  const handleGmail = () => {
    window.open(
      "https://mail.google.com/mail/?to=mr.inspiring5566@gmail.com#compose",
      "_blank"
    );
  };

  const handleGitHub = () => {
    window.open("https://github.com/sasikumarb5566/", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/sasikumarb5566", "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-around mt-40 items-center md:pb-32 pb-32">
      <div className="text-center md:text-start">
        <div>
          <p className="text-2xl md:text-3xl text-gray-500">Hello </p>
          <p className="text-4xl md:text-6xl font-bold mt-2 text-gray-500">
            I'm <span className="text-[#252829]">Sasikumar</span>
          </p>
          <p className="text-3xl md:text-3xl text-gray-500 font-semibold mt-2">
            MERN Stack Developer
          </p>
        </div>
        <div className="flex gap-8 mt-8 justify-center md:justify-start">
          <a href={pdfURL} target="_blank">
            <button className="border-2 px-4 py-2 border-slate-800 rounded-full hover:bg-[#252829] hover:text-white shadow-xl transition ease-in-out delay-50">
              Download CV
            </button>
          </a>
          <a href="#contact">
            <button className="bg-[#252829] text-white px-4 py-2 border-2 rounded-full border-slate-800 hover:bg-white hover:text-black hover:border-slate-800 shadow-xl transition ease-in-out delay-50">
              Contact Info
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-row md:flex-col gap-8 mt-8">
        <button
          onClick={handleGmail}
          className="border-2 px-4 py-2 border-slate-800 rounded-full hover:bg-[#252829] hover:text-white flex items-center shadow-xl cursor-pointer transition ease-in-out delay-50"
        >
          <FaEnvelope className="md:mr-2" />
          <span className="hidden md:inline">Gmail</span>
        </button>
        <button
          onClick={handleGitHub}
          className="border-2 px-4 py-2 border-slate-800 rounded-full hover:bg-[#252829] hover:text-white flex shadow-xl cursor-pointer transition ease-in-out delay-50"
        >
          <FaGithub className="md:mr-2 mt-1" />
          <span className="hidden md:inline">GitHub</span>
        </button>
        <button
          onClick={handleLinkedIn}
          className="border-2 px-4 py-2 border-slate-800 rounded-full hover:bg-[#252829] hover:text-white flex shadow-xl cursor-pointer transition ease-in-out delay-50"
        >
          <FaLinkedin className="md:mr-2 mt-1" />
          <span className="hidden md:inline">LinkedIn</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
