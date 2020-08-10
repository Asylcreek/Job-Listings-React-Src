import React from "react";
import "./App.css";

// import data from "./data";

import Filters from "./Components/filters/filters.component";
import Listings from "./Components/listings/listings.component";
import Footer from "./Components/footer/footer.component";

function App() {
  // const [jobListings, setJobListings] = React.useState([]);

  return (
    <div className='App'>
      <Filters />
      <Listings />
      <Footer />
    </div>
  );
}

export default App;
