import { FaGithub } from "react-icons/fa";
const Internship = () => {

  const handleSourceCode = () => {
    window.open('https://github.com/Sasikumarb5566/Eatas-Project', '_blank');
  }
  return (
    <div>
      <div className="mt-4 text-[#9ca3af] bg-white rounded-3xl p-6">
              <h2 className="text-xl font-semibold text-[#252829]">
                Internship Experience
              </h2>
              <p className="mt-3 text-black text-justify">
                I completed an 2-weeks of internship at EMGLITZ Technologies in
                Coimbatore and learnt the fundamentals of Web Development like
                HTML, CSS, JavaScript and BootStrap. I had an opportunity to
                develop the frontend web page named as "Diet Food Delivery
                System - EATAS".
              </p>
              <button onClick={handleSourceCode} className=" mt-4 bg-[#252829] text-white px-4 py-2 border-2 rounded-full border-slate-800 hover:bg-white hover:text-black  hover:border-slate-800 shadow-xl flex gap-1 ">
                <FaGithub className="md:mr-2 mt-1" /> Source Code
              </button>
            </div>
    </div>
  )
}

export default Internship
