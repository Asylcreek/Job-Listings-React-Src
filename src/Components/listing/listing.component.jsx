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

const Listing = (props) => {
  return (
    <div className='listing'>
      <div className='listing__container'>
        <img
          src={LogoPhotosnap}
          alt='company logo'
          className='listing__image'
        />
        <div className='listing__info'>
          <div className='listing__info__header'>
            <h2 className='listing__company'>Photosnap</h2>
            <p className='listing__type listing__type--new'>New!</p>
            <p className='listing__type listing__type--featured'>Featured</p>
          </div>
          <h3 className='listing__info__role'>Senior Frontend Developer</h3>
          <div className='listing__info__footer'>
            <p className='listing__stats'>1d ago</p>
            <p className='listing__stats'>Full Time</p>
            <p className='listing__stats'>USA only</p>
          </div>
        </div>
      </div>
      <div className='listing__tags'>
        <p className='listing__tag'>Frontend</p>
        <p className='listing__tag'>HTML</p>
        <p className='listing__tag'>CSS</p>
        <p className='listing__tag'>JavaScript</p>
      </div>
    </div>
  );
};

export default Listing;
