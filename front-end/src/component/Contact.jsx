import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="items-center flex flex-col px-4 sm:px-0 mb-8" id="contact">
      <div>
        <div className="text-center font-bold text-2xl mt-20">CONTACT ME</div>
        <div className="text-center mt-2 mb-12">Get in Touch</div>
      </div>
        <div className="flex w-full sm:w-1/3 gap-4  sm:mt-0 sm:flex-row justify-center mb-8 mt-8">
          <Link to="https://mail.google.com/mail/?to=mr.inspiring5566@gmail.com#compose">
            <button className="border-2 px-4 py-2 border-slate-800 rounded-full hover:bg-[#252829] hover:text-white flex items-center justify-center shadow-xl cursor-pointer transition ease-in-out delay-50 gap-2">
              <FaEnvelope className="md:mr-2" />
              <span>Gmail</span>
            </button>
          </Link>
          <Link to="https://www.linkedin.com/in/sasikumarb5566">
            <button className="border-2 px-4 py-2 border-slate-800 rounded-full hover:bg-[#252829] hover:text-white flex items-center justify-center shadow-xl cursor-pointer transition ease-in-out delay-50 gap-2">
              <FaLinkedin className="md:mr-2" />
              <span>LinkedIn</span>
            </button>
          </Link>
        </div>
      </div>
  );
};

export default Contact;
