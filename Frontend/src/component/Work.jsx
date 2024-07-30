import { FaExclamationTriangle } from "react-icons/fa";

const Work = () => {
  return (
    <div>
      <div className="mt-4 text-[#9ca3af] bg-white rounded-3xl p-6">
        <h2 className="text-xl font-semibold text-[#252829]">
          Work Experience
        </h2>
        <p className="mt-3 text-black text-justify flex gap-2">
          <FaExclamationTriangle className=" text-red-500 mt-0.5" /> Still, I am
          studying
        </p>
      </div>
    </div>
  );
};

export default Work;
