// src/App.js

import CitySearch from "./components/CitySearch";
import CityEventsChart from "./components/CityEventsChart";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useState, useEffect } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";

import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };
  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("Warning! not online");
    }
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <h1>Meet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}

        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}

        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>

      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <CityEventsChart allLocations={allLocations} events={events} />
      <EventList events={events} />
    </div>
  );
};

export default App;
