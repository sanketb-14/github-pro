import React from "react";
import { Link } from "react-router-dom";

function UserItem({ users }) {
  return users.map((user) => {
    const { login, avatar_url, html_url, id } = user;
    console.log(user);
    return (
      <div className="card compact bg-base-100 shadow-xl">
        <div className="avatar justify-center">
          <div className="w-24 mask mask-squircle">
            <img src={avatar_url} alt={login} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title justify-center">{login}</h2>
          <div className="card-actions justify-center">
            <a href={html_url}>
              <button className="btn btn-acent w-60">Visit Profile</button>
            </a>
          </div>
        </div>
      </div>
    );
  });
}

export default UserItem;
