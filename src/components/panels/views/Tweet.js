import React from "react";

const Tweet = ({ json }) => {
  const { id } = json.data;
  console.log("is id here", id)
  return (<div>{id}</div>);
};

export default Tweet;