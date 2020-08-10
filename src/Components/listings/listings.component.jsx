import React from "react";

import "./listings.styles.scss";

import Listing from "../listing/listing.component";

const Listings = (props) => {
  return (
    <main className='main'>
      <div className='listings'>
        <Listing />
      </div>
    </main>
  );
};

export default Listings;
