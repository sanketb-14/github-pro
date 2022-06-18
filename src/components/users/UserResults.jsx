import React, {  useContext } from "react";
import UserItem from "./UserItem";
import Loading from '../../components/layout/assets/Loading'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    const {users,loading,}=useContext(GithubContext)
     
  

  // if(!loading){
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid:cols-3 md:grid-cols-2">
        <UserItem key={users.id} users={users} />
      </div>
    );
   
  // }
  // else{
  //   return <Loading/>
   
  // }
   
}

export default UserResults;
