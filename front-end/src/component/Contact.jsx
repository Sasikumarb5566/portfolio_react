import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5174/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("Form submitted");
        setFormData({...formData, email: "", name:"", phone:""});
      } else {
        console.log("Try again...");
      }
    } catch (error) {
      console.log("Error in submitting form", error);
    }
  };  

  return (
    <div className="items-center flex flex-col px-4 sm:px-0 mb-8" id="contact">
      <div>
        <div className="text-center font-bold text-2xl mt-20">CONTACT ME</div>
        <div className="text-center mt-2 mb-12">Get in Touch</div>
      </div>
      <div className="flex flex-col sm:flex-row w-full sm:w-9/12 justify-between border-2 border-slate-950 items-center rounded-xl sm:p-0">
        <div className="w-full sm:w-1/2 bg-[#252829] p-8 sm:p-12 text-white rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2" method="POST">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border-2 border-slate-950 rounded-full mb-4 h-12 text-black text-md p-4"
              placeholder="Sasikumar"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="border-2 border-slate-950 rounded-full mb-4 h-12 text-black text-md p-4"
              placeholder="abc@gmail.com"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <label htmlFor="phone">Phone No.</label>
            <input
              type="tel"
              className="border-2 border-slate-950 rounded-full mb-4 h-12 text-black text-md p-4"
              placeholder="1234567890"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
            <input
              type="submit"
              className="bg-white text-black font-semibold p-2 rounded-full cursor-pointer mt-4"
            />
          </form>
        </div>
        <div className="text-center mt-8 sm:mt-0 font-bold text-xl">or</div>
        <div className="flex w-full sm:w-1/3 gap-4 mt-4 sm:mt-0 sm:flex-row justify-center mb-8 mt-8">
          <Link to={"https://mail.google.com/mail/?to=mr.inspiring5566@gmail.com#compose"}>
            <button className="border-2 px-4 py-2 border-slate-800 rounded-full hover:bg-[#252829] hover:text-white flex items-center justify-center shadow-xl cursor-pointer transition ease-in-out delay-50 gap-2">
              <FaEnvelope className="md:mr-2" />
              <span>Gmail</span>
            </button>
          </Link>
          <Link to={'https://www.linkedin.com/in/sasikumarb5566'}>
            <button className="border-2 px-4 py-2 border-slate-800 rounded-full hover:bg-[#252829] hover:text-white flex items-center justify-center shadow-xl cursor-pointer transition ease-in-out delay-50 gap-2">
              <FaLinkedin className="md:mr-2" />
              <span>LinkedIn</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
