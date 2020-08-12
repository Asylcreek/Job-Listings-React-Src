import React from "react";
import "./App.css";

import data from "./data";

import Filters from "./Components/filters/filters.component";
import Listings from "./Components/listings/listings.component";
import Footer from "./Components/footer/footer.component";

function App() {
  const [jobListings, setJobListings] = React.useState(data);

  const [filters, setFilters] = React.useState([]);

  const handleClick = (event) => {
    //Get filter
    const filter = event.target.innerText;

    //Check if filter is already in list, if not, add it to the list
    if (!filters.includes(filter)) {
      setFilters((previousValues) => [...previousValues, filter]);
    }
  };

  const handleFilterDeleteClick = (event) => {
    //Get filter name from event
    const currentFilter = event.target.dataset.filter;

    //Remove filter from filters array
    const newFilters = filters.filter((filter) => filter !== currentFilter);

    //Update the filter array
    setFilters(newFilters);
  };

  const handleFilterClearClick = () => {
    //Clear all the filters and return the jobListings array to its original state
    setFilters([]);
  };

  React.useEffect(() => {
    setJobListings(data);
    console.log(jobListings);
    console.log(filters);
    filters.forEach((filter) => {
      const filteredJobListings = jobListings.filter((jobListing) => {
        const values = Object.values(jobListing);

        //Check if a value is an array an spread it into the values list
        values.forEach((value) => {
          if (Array.isArray(value)) {
            values.push(...value);
          }
        });

        return values.includes(filter);
      });

      setJobListings(filteredJobListings);
    });
  }, [filters]);

  return (
    <div className='App'>
      <Filters
        filters={filters}
        handleFilterDeleteClick={handleFilterDeleteClick}
        handleFilterClearClick={handleFilterClearClick}
      />
      <Listings listings={jobListings} handleClick={handleClick} />
      <Footer />
    </div>
  );
}

export default App;
