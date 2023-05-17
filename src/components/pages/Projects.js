import React from 'react';

export default function Projects() {
  return (
    <div className= "h-screen bg-slate-200">
      <div>
      <p>
    Check out these links to some of my favorite projects i've worked on!
      </p>
      <ul>
          <li>
            <a href="https://github.com/Jsuttle2/P1-animal-fan-tool"  target="_blank" rel="noopener noreferrer"
              className="text-purple-500 hover:text-blue-300 underline"
            >Project 1- Animal Fan Tool. This was such a fun project to create along with a great team!</a>
          </li>
          <li>
            <a href="https://github.com/TiffanyParks/HTM-Pizza-More"  target="_blank" rel="noopener noreferrer"
              className="text-pink-500 hover:text-blue-600 underline"
              > Project 2-Pizza restraunt menu and ordering, everyone loves pizza!</a>
          </li>
          <li>
            <a href="https://github.com/IsaiahGz/project-3"  target="_blank" rel="noopener noreferrer"
              className="text-purple-700 hover:text-blue-900 underline"
              >Project 3- Dermatology office website. Another great learning experience while building something useful with my group!</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
