import React from "react";

import "./listing.styles.scss";
import LogoAccount from "../../Assets/images/account.svg";
import LogoEyeCam from "../../Assets/images/eyecam-co.svg";
import LogoFaceIt from "../../Assets/images/faceit.svg";
import LogoInsure from "../../Assets/images/insure.svg";
import LogoLoopStudios from "../../Assets/images/loop-studios.svg";
import LogoManage from "../../Assets/images/manage.svg";
import LogoMyHome from "../../Assets/images/myhome.svg";
import LogoPhotosnap from "../../Assets/images/photosnap.svg";
import LogoShortly from "../../Assets/images/shortly.svg";
import LogoAirFilter from "../../Assets/images/the-air-filter-company.svg";

const logos = [
  [LogoAccount, "LogoAccount"],
  [LogoAirFilter, "LogoAirFilter"],
  [LogoEyeCam, "LogoEyeCam"],
  [LogoFaceIt, "LogoFaceIt"],
  [LogoInsure, "LogoInsure"],
  [LogoLoopStudios, "LogoLoopStudios"],
  [LogoManage, "LogoManage"],
  [LogoMyHome, "LogoMyHome"],
  [LogoPhotosnap, "LogoPhotosnap"],
  [LogoShortly, "LogoShortly"],
];

const Listing = (props) => {
  const logoSrc = logos.filter((logo) => logo.includes(props.logo));

  return (
    <div className='listing'>
      <div className='listing__container'>
        <img
          src={logoSrc[0][0]}
          alt='company logo'
          className='listing__image'
        />
        <div className='listing__info'>
          <div className='listing__info__header'>
            <h2 className='listing__company'>{props.company}</h2>
            {props.new && (
              <p className='listing__type listing__type--new'>New!</p>
            )}
            {props.featured && (
              <p className='listing__type listing__type--featured'>Featured</p>
            )}
          </div>
          <h3 className='listing__info__role'>{props.position}</h3>
          <div className='listing__info__footer'>
            <p className='listing__stats'>{props.postedAt}</p>
            <p className='listing__stats'>{props.contract}</p>
            <p className='listing__stats'>{props.location}</p>
          </div>
        </div>
      </div>
      <div className='listing__tags'>
        {[props.role, props.level, ...props.languages, ...props.tools].map(
          (item, index) => (
            <p
              className='listing__tag'
              key={index}
              name={item}
              onClick={props.handleClick}
            >
              {item}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Listing;
