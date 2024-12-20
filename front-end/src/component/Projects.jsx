import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col items-center mb-4 mt-20" id="projects">
      <div className="text-2xl font-bold text-center mb-8">PROJECTS</div>
      <div className="flex flex-col md:flex-row w-9/12 justify-center md:justify-evenly gap-20">
        <div className="w-full md:w-1/2 border-2 border-slate-950 p-4 rounded-xl shadow-2xl flex flex-col justify-between">
          <div className="font-bold text-xl mb-4"> Waitlist Application for Product Launch</div>
          <div className="text-justify">
          Developed a customer waitlist system where users sign up with an email, receive a unique referral 
          link, and move up the queue based on successful referrals. Implemented dynamic position tracking and email notifications for top-ranking users, including 
          coupon distribution for those reaching position 1. Built an admin dashboard for managing the waitlist, including customer insights and CRUD 
          operations for waitlist management. 
          </div>
          <div className="mt-4 mb-4">
            <span className="font-bold">Technologies Used:</span> MERN (MongoDB,
            Express.js, React.js, Node.js) stack.
          </div>
          <div>
            <Link
              to={
                "https://github.com/Sasikumarb5566/Waitlist-application"
              }
            >
              <button className="gap-2 flex border-2 p-3 rounded-full bg-[#252829] text-white hover:bg-white hover:text-black hover:border-slate-950 transition ease-in-out delay-50">
                <FaGithub className="md:mr-1 mt-1 gap" />
                <span>Source Code</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 border-2 border-slate-950 p-4 rounded-xl shadow-2xl flex flex-col justify-between">
          <div className="font-bold text-xl mb-4">
            Diet Food Delivery System - EATAS
          </div>
          <div className="text-justify">
            Worked as a Frontend Developer and developed a frontend for “Diet
            Food Delivery System” website during my internship program in
            EMGLITZ Technologies at Coimbatore.
          </div>
          <div className="mt-4 mb-4">
            <span className="font-bold">Technologies Used:</span> HTML, CSS,
            JavaScript, BootStrap
          </div>
          <div>
            <Link to={"https://github.com/Sasikumarb5566/Eatas-Project"}>
              <button className="gap-2 flex border-2 p-3 rounded-full bg-[#252829] text-white hover:bg-white hover:text-black hover:border-slate-950 transition ease-in-out delay-50">
                <FaGithub className="md:mr-1 mt-1" />
                <span>Source Code</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
