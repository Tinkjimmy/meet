import React from "react";

const NumberOfEvents = ({ eventsNumber, setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (value) => {
    let info;
    if (isNaN(value)) {
      info = "This inputbox requires a number";
    } else {
      info = "";
      setCurrentNOE(value);
    }

    setErrorAlert(info);
  };

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
