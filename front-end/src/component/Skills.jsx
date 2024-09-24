import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className='flex flex-col items-center mb-8' id='skills'>
      <h1 className="text-2xl font-bold my-10">SKILLS</h1>
      <div className='relative flex flex-col sm:flex-row sm:justify-center w-9/12 gap-5'>
        <div className='relative border-2 border-slate-950 p-4 rounded-xl w-full sm:w-80 shadow-2xl transition-transform transform hover:scale-105 hover:z-50 hover:opacity-100 opacity-40 z-10'>
          <div className='font-bold text-xl mb-4'>Frontend Development</div>
          <ul className="flex flex-col gap-2">
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faHtml5} /> HTML</li>
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCss3} /> CSS</li>
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faJs} /> JavaScript</li>
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faReact} /> React.js</li>
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCss3} /> Tailwind CSS</li>
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faCss3} /> TypeScript</li>
          </ul>
        </div>
        <div className='relative border-2 border-slate-950 p-4 rounded-xl w-full sm:w-80 shadow-2xl transition-transform transform hover:scale-105 hover:z-50 hover:opacity-100 opacity-40 z-20'>
          <div className='font-bold text-xl mb-4'>Programming Language</div>
          <ul className="flex flex-col gap-2">
            <li>C Programming</li>
            <li>Java</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className='relative border-2 border-slate-950 p-4 rounded-xl w-full sm:w-80 shadow-2xl transition-transform transform hover:scale-105 hover:z-50 hover:opacity-100 opacity-40 z-30'>
          <div className='font-bold text-xl mb-4'>Others</div>
          <ul className="flex flex-col gap-2">
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faGit} /> Git</li>
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faGithub} /> GitHub</li>
            <li className='flex items-center gap-3'>Fast Typing (72 WPM)</li>
            <li>MS Office</li>
          </ul>
        </div>
        <div className='relative border-2 border-slate-950 p-4 rounded-xl w-full sm:w-80 shadow-2xl transition-transform transform hover:scale-105 hover:z-50 hover:opacity-100 opacity-40 z-40'>
          <div className='font-bold text-xl mb-4'>Backend Development</div>
          <ul className="flex flex-col gap-2">
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faJs} /> Node.js</li>
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faReact} /> Express.js</li>
            <li className='flex items-center gap-3'><FontAwesomeIcon icon={faGithub} /> MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
