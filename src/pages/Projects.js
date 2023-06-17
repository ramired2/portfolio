import { setState, } from 'react';
import React from 'react';
import link from '../media/link15.png';
import linkB from '../media/link15blue.png';


const AboutMe = () => {

  return(
  <div className="centerDiv">
    <div className="content text">
      <h1>hi</h1>
      <div>
        <div className='indivProject section'>
          {/* <div className='projImg'><h2 className='projName'><a className='text' href="https://github.com/matyevaa/wikifamily">WikiFamily</a></h2> <a href="https://github.com/matyevaa/wikifamily"><img id='imgsrc' src={link} className="githubRepo" alt="github repo" /></a></div> */}

          <div className='projImg'><h2 className='projName'><a className='text' 
            href="https://github.com/matyevaa/wikifamily">WikiFamily</a></h2> 
            
            <a href="https://github.com/matyevaa/wikifamily">
            <img src={link} id='imgsrc' 
            onMouseEnter={e => (e.currentTarget.src = linkB)}
            onMouseOut={e => (e.currentTarget.src = link)}
            // onMouseOut={this.src = require('../media/link15blue.png')}
            alt="github repo" /></a></div>

          <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=1_nqloaa1h&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_0ygcxt4w" width="480" height="304" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="WikiFamily"></iframe>
          <ul className="langs projText">
            <li>Python Flask</li>
            <li>ReactJS</li>
            <li>MySQL</li>
          </ul>

          {/* <ul className="features projText">
            <li>Third party-login</li>
            <li>ReactJS</li>
            <li>MySQL</li>
          </ul> */}
          <p className='projText description'>Wikifamily is a </p>
        </div>

        <div className='indivProject section'>
        <div className='projImg'><h2 className='projName'><a className='text' 
            href="https://github.com/matyevaa/wikifamily">WikiFamily</a></h2> 
            
            <a href="https://github.com/matyevaa/wikifamily">
            <img src={link} id='imgsrc' 
            onMouseEnter={e => (e.currentTarget.src = linkB)}
            onMouseOut={e => (e.currentTarget.src = link)}
            // onMouseOut={this.src = require('../media/link15blue.png')}
            alt="github repo" /></a></div>
          <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=1_nqloaa1h&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_0ygcxt4w" width="480" height="304" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="WikiFamily"></iframe>
          <ul className="langs projText">
            <li>Python Flask</li>
            <li>ReactJS</li>
            <li>MySQL</li>
          </ul>

          {/* <ul className="features projText">
            <li>Third party-login</li>
            <li>ReactJS</li>
            <li>MySQL</li>
          </ul> */}
          <p className='projText description'>Wikifamily is a </p>
        </div>
      </div>
    </div>

    <div className='src text'><a className='text' target="_blank" href="https://icons8.com/icon/taSFocY7PAos/export">Export</a> icon by <a className='txtLink' target="_blank" href="https://icons8.com">Icons8</a></div>
  </div>

  
  );
}


export default AboutMe;
