import React from "react";
import { Input } from "./input";

import { Text } from "./appConteiner";
import peopleIcon from "../images/icon-person.svg";
import dollarIcon from "../images/icon-dollar.svg";

const Billspart = ({ bill, setBill, people }) => {
  const iconfun = (bill, people) => {
    return {
      backgroundImage: `url(${bill ? peopleIcon : dollarIcon})`,
    };
  };
  return (
    <div>
      <div>
        <Text>Bill</Text>
      </div>

      <div>
        <Input
          icontype="bill"
          placeholder="0"
          type="number"
          value={bill}
          onChange={(e) => {
            if (e.target.value.length <= 7) setBill(e.target.valueAsNumber);
            iconfun(e.target.value, people);
            console.log("changed");
          }}
          style={iconfun(bill, people)}
        />
      </div>
    </div>
  );
};

export default Billspart;
