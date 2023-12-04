import "./DashBoard.css";
import { useAuth0 } from "@auth0/auth0-react";
import { ApartmentsArr as list} from "../ApartmentContent/ApartmentList";
import React,{useState} from "react";
import Apartments from "../ApartmentContent/Apartments";

export default function DashBoard() {
    const {isAuthenticated, isLoading} = useAuth0();

    const [searchQuery, setsearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    function handleSearch(event){
      event.preventDefault();
      setsearchQuery(event.target.value);
    }

    function handleSearchResults(event){
      event.preventDefault();
      const query = searchQuery.toLowerCase();
      if(!query){
        setSearchResults(list);
        return;
      }
      const filterResults = list.filter(apartment =>
        Object.values(apartment)
          .join(" ")
          .toLowerCase()
          .includes(query)
      );
      console.log(filterResults);
      setSearchResults(filterResults);
      setsearchQuery("");
    }

    if(isLoading){
      return <div>loading...</div>
    }

    return (
        isAuthenticated && (
          <>
      <div className="search">
        <p>Explore your dream Home</p>
        <form role="search" id="form">
          <input onChange={handleSearch} type="search" id="query" placeholder="Enter an address, city or zipcode" value={searchQuery} />
          <button className="searchButton" onClick={handleSearchResults}>search</button>
        </form>
      </div>
      {searchResults && (<Apartments apartments={searchResults}/>)}
      </>)
    );
}
