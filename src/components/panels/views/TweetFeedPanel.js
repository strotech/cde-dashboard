import React from 'react';

const TwwetFeedPanel =(props)=> {
    const {reconnectMessage,errorMessage,waitingMessage,showTweets } = props;
    
    return (
     <div>
      {reconnectMessage()}
      {errorMessage()}
      {waitingMessage()}
      {showTweets()}
    </div>
    );
  }

export default TwwetFeedPanel;



