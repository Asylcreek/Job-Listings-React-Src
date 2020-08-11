import React from "react";
import "./App.css";

import data from "./data";

import Filters from "./Components/filters/filters.component";
import Listings from "./Components/listings/listings.component";
import Footer from "./Components/footer/footer.component";

function App() {
  const [jobListings, setJobListings] = React.useState(data);

  const [filters, setFilters] = React.useState([]);

  //This stores the values of the previous filter item
  const [oldValues, setOldValues] = React.useState([]);

  const handleClick = (event) => {
    //Get filter
    const filter = event.target.innerText;

    //Check if filter is already in list, if not, add it to the list
    if (!filters.includes(filter)) {
      setFilters((previousValues) => [...previousValues, filter]);
    }

    //Filter the jobListings with the filters array
    const filteredJobListings = jobListings.filter((jobListing) => {
      //Save all the values of the keys into an array
      const values = Object.values(jobListing);

      //Check if a value is an array an spread it into the values list
      values.forEach((value) => {
        if (Array.isArray(value)) {
          values.push(...value);
        }
      });

      return values.includes(filter);
    });

    //Update the jobListings array
    setJobListings(() => filteredJobListings);

    //Update the oldValues array
    setOldValues((previousValues) => [...previousValues, jobListings]);
  };

  const handleFilterDeleteClick = (event) => {
    //Get filter name from event
    const currentFilter = event.target.dataset.filter;

    //Remove filter from filters array
    const newFilters = filters.filter((filter) => filter !== currentFilter);

    //Update the filter array
    setFilters(newFilters);

    //Remove the last item from the oldValues array and update the oldValues array
    const values = oldValues.slice(0, -1);
    setOldValues(values);

    //Update the jobListings array with the last value in the oldValues array
    setJobListings(oldValues[oldValues.length - 1]);
  };

  const handleFilterClearClick = () => {
    //Clear all the filters and return the jobListings array to its original state
    setFilters([]);
    setJobListings(data);
  };

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
