import React from 'react';
import headphone from "../../image/headphone.jpg";
import Footer from "../footer/index.js";
export default function About() {
  return (
    <div>
    <div className="h-screen bg-purple-200 flex">
      <div className="w-1/2">
        <img className="object-cover w-full h-full" src={headphone} alt="headphone" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <p>
        I am a passionate and dedicated junior computer programmer with a strong foundation in coding principles and problem-solving. With a constant desire to learn and grow, I strive to contribute my skills and collaborate with teams to develop innovative software solutions. My attention to detail and ability to adapt make me a valuable asset in delivering high-quality code. When i'm not working on the computer you can find me camping, hiking, cooking or playing with my dogs!
        
        </p>
      </div>
    
    </div>
    <Footer />
    </div>
  );
}