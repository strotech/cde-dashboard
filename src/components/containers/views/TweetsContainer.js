import React , {useState} from "react";
import {API} from 'aws-amplify';
import TweetsPanel from '../../panels/views/TweetsPanel'

const TweetsContainer = () => {
 
  const [tweets,setTweets] = useState([]);
  const getTweets = async ()=>{
    const tweets  = await API.post('cdedashboardapi','/api/tweets').then(res=>res);
    setTweets(tweets);
  }

  return (
    <TweetsPanel tweets={tweets} getTweets={getTweets} />
  );
};

export default TweetsContainer;