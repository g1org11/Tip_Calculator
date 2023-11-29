import React from "react";
import { Amount, AmountWrapper, PersentP, Person, AmountDiv } from "./appConteiner";

const AmountPart = ({ tipAmount, notShowTip, notShowTotal, totalPerPerson }) => {
  return (
    <div>
      <AmountWrapper>
        <AmountDiv>
          <Amount>
            Tip Amount<Person>/person</Person>{" "}
          </Amount>
          <Amount>
            Total <Person>/person</Person>
          </Amount>
        </AmountDiv>
        <div>
          <PersentP>{notShowTip ? "0.00" : tipAmount}</PersentP>

          <PersentP>{notShowTotal ? "0.00" : totalPerPerson}</PersentP>
        </div>
      </AmountWrapper>
    </div>
  );
};

export default AmountPart;
