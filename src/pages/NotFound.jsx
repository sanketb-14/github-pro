import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold mb-8">Oooppss!!..</h1>
          <p className="text-4xl mb-8">404 - Page not Found!</p>
          <Link to="/">
            <button className="btn btn-primary"><FaHome className='mr-2'/>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound