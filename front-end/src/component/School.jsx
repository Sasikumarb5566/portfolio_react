import { useState } from "react";

const School = () => {
  const [showDetails, setShowDetails] = useState(null);

  const handleDetails = (category) => {
    setShowDetails((prevSection) =>
      prevSection === category ? null : category
    );
  };

  return (
    <div>
      <div className="mt-4 text-[#9ca3af] bg-white rounded-3xl p-6">
        <h2 className="text-xl font-semibold text-[#252829]">
          School Experience
        </h2>
        <p className="mt-3 text-black text-justify flex gap-2">
          I have done my schooling in St. Paul Matriculation Higher Secondary
          School, Mangalampet.
        </p>
        <div className="flex gap-4">
          <button
            className={`mt-4 px-4 py-2 border-2 rounded-full border-slate-800 shadow-xl flex gap-1 ${
              showDetails === "hsc"
                ? "bg-[#252829] text-white"
                : "bg-white text-black"
            } hover:bg-[#252829] hover:text-white`}
            onClick={() => handleDetails("hsc")}
          >
            HSC
          </button>
          <button
            className={`mt-4 px-4 py-2 border-2 rounded-full border-slate-800 shadow-xl flex gap-1 ${
              showDetails === "sslc"
                ? "bg-[#252829] text-white"
                : "bg-white text-black"
            } hover:bg-[#252829] hover:text-white`}
            onClick={() => handleDetails("sslc")}
          >
            SSLC
          </button>
        </div>
        {showDetails === "hsc" && (
          <div className="mt-8">
            <table className="bg-[#252829] w-auto rounded-xl">
              <h1 className="text-white font-semibold p-4 text-xl">
                12th Grade
              </h1>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">School</th>
                <td className="p-2">St. Paul Matriculation Higher Secondary School
                </td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Reg. No.</th>
                <td>2016579409</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Field</th>
                <td>Computer Science</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Board</th>
                <td>State Board of Tamilnadu</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Session</th>
                <td>May 2021</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Medium</th>
                <td> English</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Total Mark</th>
                <td>600</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Scored</th>
                <td>524.35</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Pecentage</th>
                <td>87.39%</td>
              </tr>
              <tr className="">
                <th className="text-white p-4 w-1/3 text-start">Address</th>
                <td>
                  St. Paul Matriculation Higher Secondary School,
                  <br /> Mangalampet, Cuddalore - 606 108.
                </td>
              </tr>
            </table>
          </div>
        )}
        {showDetails === "sslc" && (
          <div className="mt-8">
          <table className="bg-[#252829] w-auto rounded-xl">
            <h1 className="text-white font-semibold p-4 text-xl">
              10th Grade
            </h1>
            <tr>
              <th className="text-white p-4 w-1/3 text-start">School</th>
              <td className="p-2">St. Paul Matriculation Higher Secondary School
              </td>
            </tr>
            <tr>
              <th className="text-white p-4 w-1/3 text-start">Reg. No.</th>
              <td>XM19R0926677045</td>
            </tr>
            <tr>
              <th className="text-white p-4 w-1/3 text-start">Board</th>
              <td>State Board of Tamilnadu</td>
            </tr>
            <tr>
              <th className="text-white p-4 w-1/3 text-start">Session</th>
              <td>Mar 2019</td>
            </tr>
            <tr>
              <th className="text-white p-4 w-1/3 text-start">Medium</th>
              <td> English</td>
            </tr>
            <tr>
              <th className="text-white p-4 w-1/3 text-start">Total Mark</th>
              <td>500</td>
            </tr>
            <tr>
              <th className="text-white p-4 w-1/3 text-start">Scored</th>
              <td>425</td>
            </tr>
            <tr>
              <th className="text-white p-4 w-1/3 text-start">Pecentage</th>
              <td>85%</td>
            </tr>
            <tr className="">
              <th className="text-white p-4 w-1/3 text-start">Address</th>
              <td>
                St. Paul Matriculation Higher Secondary School,
                <br /> Mangalampet, Cuddalore - 606 108.
              </td>
            </tr>
          </table>
        </div>
        )}
      </div>
    </div>
  );
};

export default School;
