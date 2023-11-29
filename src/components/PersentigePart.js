import React from "react";

import { SelectTip } from "./appConteiner";
import { Button } from "./appConteiner";
import { PersentConteiner } from "./appConteiner";
import { PersentInput } from "./appConteiner";

const PersentigePart = ({ setTip, setCustomTip, tip, customTip }) => {
  return (
    <div className="persent-Section">
      <SelectTip>Select Tip %</SelectTip>
      <PersentConteiner>
        {[5, 10, 15, 25, 50].map((percentage) => (
          <Button
            key={percentage}
            onClick={() => {
              setTip(percentage / 100);
              setCustomTip(percentage);
            }}
            clicked={tip === percentage / 100}
          >
            {percentage}%
          </Button>
        ))}

        <PersentInput
          type="number"
          placeholder={customTip !== null ? "Custom" : "Custom"}
          onChange={(e) => {
            if (e.target.value.length < 3) {
              setCustomTip(parseFloat(e.target.value));
            }
          }}
          style={{ backgroundImage: "" }}
          value={customTip !== null ? customTip : ""}
          defaultValue={customTip === null ? "" : customTip}
        />
      </PersentConteiner>
    </div>
  );
};

export default PersentigePart;
