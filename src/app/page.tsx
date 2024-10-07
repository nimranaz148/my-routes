import React from "react"
import Link from "next/link";

const HomePage = () =>{
  return (
    <div>
      <nav className="nav">
          <li><Link href="/">Home</Link></li>

          <li><Link href="/about" target="_blank">About</Link></li>

          <li><Link href="/contact" target="_blank">Contact</Link></li>
          <li><Link href="/service" target="_blank">Service</Link></li>
      </nav>
    <h1 className="green">Home Page</h1>
    
    </div>
   
    
  );
};
export default HomePage
