import React from 'react';
import Footer from "../footer/index.js";
import photo1 from "../../image/animalfan.png"
import photo2 from "../../image/pizzasite.png"
import photo3 from "../../image/abedsderm.png"

export default function Projects() {
  return (
    <div>
    <div className= "h-screen bg-slate-200">
      <div>
      <p>
    Check out these links to some of my favorite projects I've worked on!
      </p>
      <ul>
          <li>
            <a href="https://github.com/Jsuttle2/P1-animal-fan-tool"  target="_blank" rel="noopener noreferrer"
              className="text-purple-500 hover:text-blue-300 underline"
              > <img
              src={photo1}
              alt="animalfan"
              className="w-40 h-40 mr-2 inline-block"
            />
              Project 1- Animal Fan Tool. This was such a fun project to create along with a great team!</a>
          </li>
          <li>
            <a href="https://github.com/TiffanyParks/HTM-Pizza-More"  target="_blank" rel="noopener noreferrer"
              className="text-pink-500 hover:text-blue-600 underline"
              > <img
              src={photo2}
              alt="pizzasite"
              className="w-40 h-40 mr-2 inline-block"
            />
                 Project 2-Pizza restraunt menu and ordering, everyone loves pizza!</a>
          </li>
          <li>
            <a href="https://github.com/IsaiahGz/project-3"  target="_blank" rel="noopener noreferrer"
              className="text-purple-700 hover:text-blue-900 underline"
              > <img
              src={photo3}
              alt="abedsderm"
              className="w-40 h-40 mr-2 inline-block"
            />
                Project 3- Dermatology office website. Another great learning experience while building something useful with my group!</a>
          </li>
        </ul>
      </div>
     
    </div>
    <Footer />
    </div>
  );
}
