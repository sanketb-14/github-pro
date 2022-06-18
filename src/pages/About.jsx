import React from 'react'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

function About() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Github-Pro</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            consequuntur pariatur provident repudiandae temporibus atque.
          </p>
          <Link to="/">
            <button className="btn btn-primary">
              <FaHome className="mr-2" />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About