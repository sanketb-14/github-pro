import React, { useState,useContext } from "react";
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
  const [text, setText] = useState("");
  const {users,searchUsers,clearUsers,loading}=useContext(GithubContext)
  const handleChange=(e)=>{
    setText(e.target.value);
    
  }
  const handleSubmit=(e)=> {
    e.preventDefault();
    if(text===''){
        alert("Please enter something..")
    }
    else{
        searchUsers(text)
        setText('')

    }
}


  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols2 mb8 gap-8">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search users..."
              className="input input-bordered w-full input-lg text-primary"
              value={text}
              onChange={handleChange}
            />
            <button className="btn btn-primary-square btn-secondary w-32 h-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {users.length > 0 && (
            <div>
              <button className="btn mt-8 w-24" onClick={clearUsers}>Clear</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserSearch;
