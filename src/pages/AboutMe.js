import React from 'react';

const AboutMe = () => {

  return(
  
    <div className="content">
    {/* <div className="centerDiv"> */}
      <h1 className="subtopic centerDiv text">Daisy Ramirez</h1>

      <div>
         <h4 className='subsubtopic centerDiv text' >About Me</h4>
      </div>
      {/* </div> */}
      <div className='section'>
    {/* <div className=''> */}
      <h6 className='subsubtopic text'>My Interests</h6>
      <div className='description line text'>
        <p >i first became interested in CS in my 
            freshman year of high school. I watched a documentary about a variety
            of groups consisting of high school girls taking a problem within their 
            community and making an app to solve/ reduce the issue of their 
            chosen problem. Watching 
            <a className="link" href="https://www.codegirlmovie.com/" target="_blank"> CODEGirl </a>
            was insightful and introduced me into something that I had only ever 
            associated with hacking like i'd seen on TV or in movies.  
        </p>
        {/* </div> */}
        <p > I had become so interested in CS that for 
        my sophemore project, akin to a senior project, I taught myself how to code on 
        CodeAcademy. Looking back on that project and seeing the work I am and have been 
        able to produce since then is amazing! As someone who loves learning 
        new things, to see how I've progressed so far, I can't wait 
        to continue to become better through future projects!</p>
        </div>
        {/* <div className=''> */}
        <h6 className='subsubtopic  text interestAlign'>Quick Facts</h6>
      <ul className='listAlign line'>
        <li className='text description listAlign firstListItem'>i transfered to Oregon State from Pacific University in 2020</li>
        <li className='text description listAlign'>i first wanted to be a CS major in ~2015</li>
        <li className='text description listAlign'>i love learning new things whether it be for profesional or personal purposes</li>
      </ul>
      {/* </div> */}
      </div>
        
      <div>
      </div>
      
    </div>
  );
}


export default AboutMe;
