import React from "react";
import {API} from 'aws-amplify';

const TweetsContainer = () => {
 
  const [tweets,setTweets] = useState([]);
  const getTweets = ()=>{
    const tweets  = await API.post('cdedashboardapi','/api/tweets').then(res=>res);
    setTweets(tweets);
  }

  return (
    <TweetsPanel tweets={tweets} getTweets={getTweets} />
  );
};

export default TweetsContainer;