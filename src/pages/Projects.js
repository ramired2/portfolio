import { setState, } from 'react';
import React from 'react';
import link from '../media/link15.png';
import linkB from '../media/link15blue.png';
import DisplayProj from '../components/DisplayProj';


const AboutMe = () => {
// projects to add -- 
  // https://github.com/osu-cs492-w22/final-project-final_project_group11
  // https://github.com/osu-cs492-w22/assignment-4-ramired2
  // https://github.com/osu-cs290-f20/final-project-team-23
  // https://github.com/osu-cs290-f20/assignment-5-ramired2


  // diff projs infos
  const proj1 = {
      name:"WikiFamily",
      github:"https://github.com/matyevaa/wikifamily",
      type:"video",
      video:"https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=1_nqloaa1h&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_0ygcxt4w",
      langs: ["Python Flask", "ReactJS", "MySQL"],
      desc:"Wikifamily is a geneology website that helps users map out their family trees. Fun features include: third party login, two different family tree views, a collapsable family tree, and family tree sharing whether it be the complete family tree or a smaller segment of the family",
  };

  const proj2 = {
    name:"Randomate",
    github:"https://github.com/ramired2/randomate/tree/main",
    type:"video",
    video:"https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=1_ygo1y1if&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_g2dc6xud",
    langs: ["Python Flask"],
    desc:"A small webapp that uses the Spotify API to get a list of playlists based on a user's search word. Users can then see what songs are included from their choice of playlist. Moreover, Randomate uses webscraping to pull the top tracks from a variety of different Billboard charts.",
  };

  const proj3 = {
    name:"Space Colonization",
    github:"https://github.com/ramired2/cs340-spaceCol",
    type:"video",
    video:"https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=1_fjjoe04s&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_n6efynpq",
    langs: ["ReactJS", "Python Flask", "MySQL"],
    desc:"In the year xx34, Earth has reduced its number of natural resources available so nations have taken to exploring outer space for resources. This website is meant to help the UN keep track of nations and their presence in outer space to decrease the chances of space wars and to prevent nations from taking or hoarding too many resources as per UN mandates.",
  };

  const proj4 = {
    name:"BTSflix",
    github:"https://github.com/ramired2/btsflix",
    type:"video",
    video:"https://cdnapisec.kaltura.com/p/391241/sp/39124100/embedIframeJs/uiconf_id/22119142/partner_id/391241?iframeembed=true&playerId=kaltura_player&entry_id=1_1l6tkkd6&flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_4ch8ft3h",
    langs: ["ReactJS", "NodeJS", "MYSQL"],
    desc:"A website to view BTS' Run BTS! episodes and view some of their group and individual discography ",
  };

  // const proj5 = {
  //   name:"Randomate",
  //   github:"https://github.com/ramired2/randomate/tree/main",
  //   type:"gif",
  //   video:link,
  //   langs: ["Flask", "Python"],
  //   desc:"",
  // };
  
  return(
  <div className="centerDiv">
    <div className="content text">
      <h1>hi</h1>
      <div>
      <DisplayProj info={proj1}></DisplayProj>

      <DisplayProj info={proj2}></DisplayProj>

      <DisplayProj info={proj3}></DisplayProj>

      <DisplayProj info={proj4}></DisplayProj>
        
      </div>
    </div>

    <div className='src text'><a className='text' target="_blank" href="https://icons8.com/icon/taSFocY7PAos/export">Export</a> icon by <a className='txtLink' target="_blank" href="https://icons8.com">Icons8</a></div>
  </div>

  
  );
}


export default AboutMe;
