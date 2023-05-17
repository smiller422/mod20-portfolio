import React from 'react';
import photo from "../../image/HomePagePhoto.jpg"
import Footer from "../footer/index.js"

export default function Home() {
  return (
    <div>
    
      <img src = {photo} className='object-cover w-full h-1/10' alt="lake"></img> 
      <Footer />
    </div>
  );
}