import React from "react";

function Loading() {
    return (
      <div className="justify-center mr-40 flex flex-col gap-2">
        <progress className="progress w-56 bg-primary"></progress>
        <progress className="progress w-56 bg-secondary"></progress>
        <h1 className="text-3xl ">Loading....</h1>
        <progress className="progress w-56 bg-primary"></progress>
        <progress className="progress w-56 bg-secondary"></progress>
      </div>
    );
   

 
  
}

export default Loading;
