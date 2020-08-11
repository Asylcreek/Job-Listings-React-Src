import React from "react";

import "./listings.styles.scss";

import Listing from "../listing/listing.component";

const Listings = (props) => {
  return (
    <main className='main'>
      <div className='listings'>
        {props.listings.map((listing) => (
          <Listing
            key={listing.id}
            {...listing}
            handleClick={props.handleClick}
          />
        ))}
      </div>
    </main>
  );
};

export default Listings;
