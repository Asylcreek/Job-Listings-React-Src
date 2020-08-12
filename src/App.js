import React from "react";
import "./App.css";

import data from "./data";

import Filters from "./Components/filters/filters.component";
import Listings from "./Components/listings/listings.component";
import Footer from "./Components/footer/footer.component";

//Function that takes an array of objects, maybe a filterArray or a filterItem and returns an array of objects that have filterKey/items in filterArray in them
const filterArrayOfObjects = (array, filterArray, filterItem) =>
  array.filter((element) => {
    //Get all the values in the object
    const values = Object.values(element);

    //Check if a value is an array an spread it into the values list
    values.forEach((value) => {
      if (Array.isArray(value)) {
        values.push(...value);
      }
    });

    //If filterArray is provided, check if all the items in the filterArray are in the values array
    if (filterArray) return filterArray.every((el) => values.includes(el));

    return values.includes(filterItem);
  });

function App() {
  //Initialize jobListings state and its setState function
  const [jobListings, setJobListings] = React.useState(data);

  //Initialize filters state and its setState function
  const [filters, setFilters] = React.useState([]);

  //To handle clicking of any of the tags
  const handleClick = (event) => {
    //Get filter from event
    const filter = event.target.innerText;

    //Check if filter is already in list, if not, add it to the list
    if (!filters.includes(filter)) {
      setFilters((previousValues) => [...previousValues, filter]);
    }

    //Use filter to filter jobListings
    const filteredJobListings = filterArrayOfObjects(jobListings, null, filter);

    //Update jobListings
    setJobListings(filteredJobListings);
  };

  //To handle clicking of the delete button on a filter
  const handleFilterDeleteClick = (event) => {
    //Get filter name from event
    const currentFilter = event.target.dataset.filter;

    //Remove filter from filters array
    const newFilters = filters.filter((filter) => filter !== currentFilter);

    //Update the filter array
    setFilters(newFilters);

    //Use the newFilters array to filter the original data
    const filteredListings = filterArrayOfObjects(data, newFilters);

    //Update jobListings
    setJobListings(filteredListings);
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
