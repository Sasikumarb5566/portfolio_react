import { useState } from "react";

const College = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const handleDetails = (category) => {
    setVisibleDetails((prevSection) =>
      prevSection === category ? null : category
    );
  };
  return (
    <div>
      <div className="mt-4 text-[#9ca3af] bg-white rounded-3xl p-6">
        <h2 className="text-xl font-semibold text-[#252829]">
          College Experience
        </h2>
        <p className="mt-3 text-black text-justify">
          Currently, I am pursuing Final Year B. Tech - Artificial Intelligence
          and Data Science in Erode Sengunthar Engineering College, Perundurai.
        </p>
        <button
          className="mt-4 bg-[#252829] text-white px-4 py-2 border-2 rounded-full border-slate-800 hover:bg-white hover:text-black  hover:border-slate-800 shadow-xl flex gap-1"
          onClick={() => handleDetails("collegeDetails")}
        >
          View More Details
        </button>
        {visibleDetails === "collegeDetails" && (
          <div className="mt-8">
            <table className="bg-[#252829] w-auto rounded-xl">
              <tr>
                <th className="text-white p-4 w-1/3 text-start">College</th>
                <td className="p-2">
                  Erode Sengunthar Engineering College (Autonomous)
                </td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Affiliated</th>
                <td className="p-2">Anna University</td>
              </tr>

              <tr>
                <th className="text-white p-4 w-1/3 text-start">
                  University Reg. No.
                </th>
                <td>730421243087</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Degree</th>
                <td>Bachelor of Technology</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Branch</th>
                <td>Artificial Intelligence and Data Science</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Medium</th>
                <td> English</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">CGPA</th>
                <td>8.1 (Upto VI semester)</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">
                  Year of Passing
                </th>
                <td>May 2025</td>
              </tr>
              <tr>
                <th className="text-white p-4 w-1/3 text-start">Address</th>
                <td>
                  Erode Sengunthar Engineering Colllege,
                  <br /> Perundurai, Erode - 638 057
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default College;
