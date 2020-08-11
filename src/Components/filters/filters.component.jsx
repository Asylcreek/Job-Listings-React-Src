import React from "react";

import "./filters.component.scss";

import Filter from "../filter/filter.component";

const Filters = (props) => {
  return (
    <div className='bg-image'>
      <div className={`filters ${props.filters.length === 0 ? "" : "active"}`}>
        <div className='filters__container'>
          {props.filters.map((filter, index) => (
            <Filter
              key={index}
              filter={filter}
              handleFilterDeleteClick={props.handleFilterDeleteClick}
            />
          ))}
        </div>
        <p className='filters__clear' onClick={props.handleFilterClearClick}>
          Clear
        </p>
      </div>
    </div>
  );
};

export default Filters;
