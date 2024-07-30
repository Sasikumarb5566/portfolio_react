import { useState } from "react";
import Work from "./Work";
import Internship from "./Internship";
import College from "./College";
import School from "./School";

const About = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const handleButton = (category) => {
    setVisibleSection((prevSection) =>
      prevSection === category ? null : category
    );
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#252829] md:w-9/12 rounded-3xl p-8 shadow-2xl ease-in-out delay-250 transition">
        <div className="">
          <h1 className="text-white font-semibold text-2xl md:text-start text-center">
            ABOUT
          </h1>
          <p className="mt-4 text-[#9ca3af] text-lg text-justify">
            I'm Sasikumar, pursuing final year B. Tech - Artificial Intelligence
            and Data Science in Erode Sengunthar Engineering College, Erode.{" "}
          </p>
        </div>
        <div className="flex gap-4 mt-6 flex-col md:flex-row">
          <button
            className={`border-2 px-4 py-2 border-white border-slate-800 rounded-full shadow-xl ${
              visibleSection === "work" ? "bg-white text-black" : "text-white"
            } hover:bg-white hover:text-black`}
            onClick={() => handleButton("work")}
          >
            Work
          </button>
          <button
            className={`border-2 px-4 py-2 border-white border-slate-800 rounded-full shadow-xl ${
              visibleSection === "internship"
                ? "bg-white text-black"
                : "text-white"
            } hover:bg-white hover:text-black`}
            onClick={() => handleButton("internship")}
          >
            Internship
          </button>

          <button
            className={`border-2 px-4 py-2 border-white border-slate-800 rounded-full shadow-xl ${
              visibleSection === "college"
                ? "bg-white text-black"
                : "text-white"
            } hover:bg-white hover:text-black`}
            onClick={() => handleButton("college")}
          >
            College
          </button>
          <button
            className={`border-2 px-4 py-2 border-white border-slate-800 rounded-full shadow-xl ${
              visibleSection === "school" ? "bg-white text-black" : "text-white"
            } hover:bg-white hover:text-black`}
            onClick={() => handleButton("school")}
          >
            School
          </button>
        </div>
        <div>
          {visibleSection === "work" && <Work />}
          {visibleSection === "internship" && <Internship />}
          {visibleSection === "college" && <College />}
          {visibleSection === "school" && <School />}
        </div>
      </div>
    </div>
  );
};

export default About;
