import React from "react";
import peopleIcon from "../images/icon-person.svg";
import { Text } from "./appConteiner";
import { Input } from "./input";
import { defaultTheme } from "./thame";
import { Errormassage } from "./appConteiner";

const PeoplesPart = ({ people, setPeople, setShowError, showError }) => {
  return (
    <div className="peoples">
      <div>
        <Text>Numbers of People</Text>
      </div>

      <Input
        placeholder="0"
        type="number"
        value={people}
        onChange={(e) => {
          if (e.target.value.length <= 8) {
            const newPeopleValue = e.target.value;
            setPeople(e.target.value);
            setShowError(newPeopleValue === "0");
          }
        }}
        style={{
          backgroundImage: `url(${peopleIcon})`,
          outline: showError ? "2px solid red" : `${defaultTheme.colors.cyanStrong}`,
        }}
      />
      {showError && <Errormassage>Can't be Zero</Errormassage>}
    </div>
  );
};

export default PeoplesPart;
