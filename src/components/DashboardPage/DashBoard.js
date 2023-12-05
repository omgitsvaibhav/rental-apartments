import "./DashBoard.css";
import { useAuth0 } from "@auth0/auth0-react";
import ApartmentList, {
  ApartmentsArr as list,
} from "../ApartmentContent/ApartmentList";
import React, { useState } from "react";
import Apartments from "../ApartmentContent/Apartments";

export default function DashBoard() {
  const { isAuthenticated, isLoading } = useAuth0();

  const [searchQuery, setsearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(event) {
    event.preventDefault();
    setsearchQuery(event.target.value);
  }

  function handleSearchResults(event) {
    event.preventDefault();
    const query = searchQuery.toLowerCase();
    if (!query) {
      setSearchResults(list);
      return;
    }
    const filterResults = list.filter((apartment) =>
      Object.values(apartment).join(" ").toLowerCase().includes(query)
    );
    console.log(filterResults);
    setSearchResults(filterResults);
    setsearchQuery("");
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="dashboard-outer-div">
        <p>Explore Your Dream Home</p>
        <div className="search">
          {isAuthenticated && (
            <div>
              <form role="search" id="form">
                <input
                  onChange={handleSearch}
                  type="search"
                  id="query"
                  placeholder="Enter an address, city or zipcode"
                  value={searchQuery}
                />
                <button className="searchButton" onClick={handleSearchResults}>
                  search
                </button>
              </form>
            </div>
          )}
          {!isAuthenticated && (
            <div className="loginRequest">
              <p>Please login to access the Search bar</p>
            </div>
          )}
        </div>
        <div className="dashboardImage">
          <img src="/Images/SearchBarImage.jpg" alt="" />
        </div>
      </div>
      {searchResults=="" && <ApartmentList/>}
      {searchResults && <Apartments apartments={searchResults} />}
    </>
  );
}
