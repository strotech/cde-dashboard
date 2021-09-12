import React, {useState}  from 'react';
import Tweet from './Tweet'


const TweetsPanel =(props)=> {
    const {tweets,getTweets } = props;
    const [searchValue,setSearchValue] = useState('');
    return (
      <div>
        <form onSubmit={(e) => getTweets(e)}>
       
          <div className="input-group mb-3">
            <input
              type="text"
              autoFocus={true}
              className="form-control"
              placeholder="Rule details"
              aria-label="Rule details" 
              aria-describedby="basic-addon2"
              value={searchValue}        
              onChange={e=>setSearchValue(e.target.value)}    
            />
            <div class="input-group-append">
            <button type="button" className="btn btn-outline-secondary" onClick={(e) => getTweets(e)}>
              Get Tweets
            </button>
            </div>
          </div>
          {tweets.length>0 ? tweets.map((tweet) => (
            <Tweet key={tweet.data.id} json={tweet} />
          )):null}
        </form>
      </div>
    );
  }

export default TweetsPanel;



