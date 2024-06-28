import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCart, BsSearch } from "react-icons/bs";
import Dialog from "@mui/material/Dialog";
import { useQuery } from "@tanstack/react-query";
import { fetchLocation } from "../../util/http";

function Header() {
  const [showLocationDialog, setShowLocationDialog] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [locationClass, setLocationClass] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(
    "choose your location"
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["location"],
    queryFn: fetchLocation,
  });

  function handleLocationDialog() {
    setShowLocationDialog(true);
  }

  function closeLocationDialog() {
    setShowLocationDialog(false);
  }

  function handlingSelectedLocation(index, item) {
    setSelectedLocation(item.country);
    setLocationClass(index);
    setShowLocationDialog(false);
  }

  function selectingLocation(e) {
    const searchedLocation = e.target.value.toLowerCase();

    if (data) {
      const filteredList = data.filter((item) =>
        item.country.toLowerCase().includes(searchedLocation)
      );
      setFilteredLocations(filteredList);
    }
  }

  useEffect(() => {
    if (data) {
      setFilteredLocations(data);
    }
  }, [data]);

  let location = "You can easily search your country manully";

  if (isLoading) {
    location = <p>Loading...</p>;
  }

  if (isError) {
    location = <p>Something went wrong...</p>;
  }

  if (data) {
    location = filteredLocations.map((item, index) => (
      <li
        key={index}
        onClick={() => handlingSelectedLocation(index, item)}
        className={`${
          locationClass === index
            ? "locaitonActive locationName"
            : "locationName"
        }`}
      >
        {item.country}
      </li>
    ));
  }

  return (
    <div className="header">
      <header className="top-text">
        <div className="headerContainer">
          <div className="headerLeft">
            <div className="logo">
              <Link to="/" className="logoLink">
                <h2 className="logoleft">blink</h2>
                <h2 className="logoright">it</h2>
              </Link>
            </div>
            <div className="location" onClick={handleLocationDialog}>
              <h2 className="locationText">Delivery in 8 minutes</h2>
              <p className="locationSelect">{selectedLocation}</p>
            </div>
          </div>
          <div className="headerCenter">
            <form action="" className="serachForm">
              <BsSearch className="searchFormIcon" />
              <input
                type="search"
                placeholder='search "panner"'
                className="serachInput"
              />
            </form>
          </div>
          <div className="headerRight">
            <div className="loginBtn">
              <button>Login</button>
            </div>
            <div className="addCartBtn">
              <button className="cartLogo">
                <BsCart className="cartIcon" />
                My Cart
              </button>
            </div>
          </div>
        </div>
      </header>
      <Dialog open={showLocationDialog} className="dialogBoxLocation">
        <div className="changeLocation">
          <p className="changeLocationText">Change Location</p>
          <p className="closeLocation" onClick={closeLocationDialog}>
            X
          </p>
        </div>
        <div className="selectLocation">
          <div className="detectLocation">Detect my location</div>
          <p className="locationOR">OR</p>
          <input
            type="search"
            placeholder="Search delivery location"
            className="searchLocation"
            onChange={selectingLocation}
          />
        </div>
        <ul>{location}</ul>
      </Dialog>
    </div>
  );
}

export default Header;
