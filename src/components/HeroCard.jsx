import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function HeroCard() {
  const socialLinks = [
    { id: 1, icon: faGithub, url: "#" },
    { id: 2, icon: faLinkedin, url: "#" },
    { id: 3, icon: faEnvelope, url: "#" },
  ];

  return (
    <div className="max-w-6xl h-[70vh] mx-auto flex flex-col items-center justify-center bg-gray-200/20 backdrop-blur-xs glass_card">
      <div>
        <h1>Hi, I'm Chloe</h1>
        <h2>
          I build <span className="text-pink">modern</span> and{" "}
          <span className="text-blue">beautiful</span> web experiences.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa optio
          consectetur explicabo praesentium sit odit, dicta recusandae eligendi
          architecto beatae voluptatem quisquam a ab nostrum autem repudiandae
          accusamus, ut illo?
        </p>

        <p className="flex items-center gap-2">
          Let's connect{" "}
          <span className="inline-block w-10 h-0.5 bg-amber-600"></span>
        </p>

        <div className="">
            {socialLinks.map((socialLink, index)=> {
                return (
                    <FontAwesomeIcon key={index} icon={socialLink.icon}></FontAwesomeIcon>
                )
            }) }
        
          {/* <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faEnvelope} /> */}
        </div>
      </div>

      <div>
        <img></img>
      </div>
    </div>
  );
}

export default HeroCard;
