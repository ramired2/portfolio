import React from "react";
import link from '../media/link15.png';
import linkB from '../media/link15blue.png';

function DisplayProj({info}) {
    // "https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=1_nqloaa1h&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_0ygcxt4w"

    const languages = info.langs.map((lang) =>
        <li>{lang}</li>
        );
    console.log(info)

    return (
        <div className='indivProject section'>
          {/* <div className='projImg'><h2 className='projName'><a className='text' href="https://github.com/matyevaa/wikifamily">WikiFamily</a></h2> <a href="https://github.com/matyevaa/wikifamily"><img id='imgsrc' src={link} className="githubRepo" alt="github repo" /></a></div> */}

          <div className='projImg'><h2 className='projName'><a className='text' 
            href= {info.github}>{info.name}</a></h2> 
            
            <a href={info.github}>
            <img src={link} id='imgsrc' 
            onMouseEnter={e => (e.currentTarget.src = linkB)}
            onMouseOut={e => (e.currentTarget.src = link)}
            alt="github repo link" /></a></div>

            {/* if gif show gif otherwise video */}
            {info.type !='gif'? 
                <iframe src={info.video} width="480" height="304" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title={info.name}></iframe>
                : <img src={info.video} alt="gif of project" />
          }
          <ul className="langs projText">
            {languages}
          </ul>

          <p className='projText description'>{info.desc}</p>
        </div>
    );
}

export default DisplayProj;