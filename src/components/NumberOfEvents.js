import React from "react";

const NumberOfEvents = ({ eventsNumber, onEventNumberChange }) => {
  const handleInputChanged = (value) => {
    onEventNumberChange(value);
  };
  console.log(eventsNumber);

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="textbox"
        placeholder="number"
        value={eventsNumber}
        onChange={(e) => handleInputChanged(e.target.value)}
      />
    </div>
  );
};
export default NumberOfEvents;
