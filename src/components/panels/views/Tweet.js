import React from "react";

const Tweet = (props) => {
  const { tweet } = props;
  
   return (
      <div className="card">
        <div className="card-body text-center">
          {tweet.text}
        </div>
      </div>
    );
};

export default Tweet;