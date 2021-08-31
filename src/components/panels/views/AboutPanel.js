import React, { useEffect } from 'react';
import {API} from 'aws-amplify';
const AboutSidebarPanel =()=> {
  useEffect(()=>{
    API.get('twittercovid','/twitter/covid').then(res=>console.log(res));
    API.get('twitterflood','/twitter/flood').then(res=>console.log(res));
  },[]);
    return (
      <div>
          Hi DevX - About!!
      </div>
    );
  }

export default AboutSidebarPanel;