import React from "react";

import "./filter.styles.scss";
import LogoDelete from "../../Assets/images/icon-remove.svg";

const Filter = (props) => {
  return (
    <div className='filter'>
      <p className='filter__text'>{props.filter}</p>
      <div
        className='filter__delete__container'
        data-filter={props.filter}
        onClick={props.handleFilterDeleteClick}
      >
        <img
          src={LogoDelete}
          alt='remove button'
          className='filter__delete'
          data-filter={props.filter}
          onClick={props.handleFilterDeleteClick}
        />
      </div>
    </div>
  );
};

export default Filter;
