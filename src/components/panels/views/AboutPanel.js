import React, { useEffect } from 'react';
import {API} from 'aws-amplify';
import config from '../../../aws-exports';
API.configure(config);
const AboutSidebarPanel =()=> {
    useEffect(()=>{
      API.get('twittercovid','/twitter/covid').then(res=>console.log(res));
      API.get('twittercovid','/twitter/flood').then(res=>console.log(res));
    },[]);
    return (
      <div>
          Hi DevX - About!!
      </div>
    );
  }

export default AboutSidebarPanel;
