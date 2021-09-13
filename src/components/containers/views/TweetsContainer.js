import React , {useState} from "react";
import {API} from 'aws-amplify';
import TweetsPanel from '../../panels/views/TweetsPanel'

const TweetsContainer = () => {
 
  const [tweets,setTweets] = useState([]);
  const getTweets = async (searchValue)=>{
    const tweetResult  = await API.get('cdedashboardapi',`/api/tweets/${searchValue}`).then(res=>res);
    setTweets(tweetResult);
  }

  return (
    <TweetsPanel tweets={tweets} getTweets={getTweets} />
  );
};

export default TweetsContainer;