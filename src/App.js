import "./App.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import createGlobalStyle from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { defaultTheme } from "./components/thame";
import { Helmet } from "react-helmet";

import { Input } from "./components/input";
import dollarIcon from "./images/icon-dollar.svg";
import peopleIcon from "./images/icon-person.svg";
import logo from "./images/logo.svg";

import AppContainer from "./components/appConteiner";
import AppDiv from "./components/appConteiner";
import { Logo } from "./components/logo";

import { LeftPart } from "./components/appConteiner";
import { Text } from "./components/appConteiner";
import { Bill } from "./components/appConteiner";
import { SelectTip } from "./components/appConteiner";
import { Button } from "./components/appConteiner";
import { PersentInput } from "./components/appConteiner";
import { PersentConteiner } from "./components/appConteiner";
import { PerPerson } from "./components/appConteiner";
import { AmountWrapper } from "./components/appConteiner";
import { AmountContainer } from "./components/appConteiner";
import { Amount } from "./components/appConteiner";
import { Person } from "./components/appConteiner";
import { RightPart } from "./components/appConteiner";
import { PersentP } from "./components/appConteiner";
import { ResetConteiner } from "./components/appConteiner";
import { ResrtBtn } from "./components/appConteiner";
import { Errormassage } from "./components/appConteiner";

function App() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [people, setPeople] = useState(null);
  const [customTip, setCustomTip] = useState(null);
  const [showError, setShowError] = useState(false);

  const tipAmount = ((bill * (customTip !== null ? customTip / 100 : tip)) / people).toFixed(2);

  const totalPerPerson = (((1 + tip) * bill) / people).toFixed(2);

  const notShowTip = isNaN(tipAmount) || !isFinite(tipAmount);
  const notShowTotal = isNaN(totalPerPerson) || !isFinite(totalPerPerson);

  const resetValues = () => {
    console.log("Reset button clicked");
    resetInputs();
    setShowError(false);
  };

  const resetInputs = () => {
    setBill("");
    setTip("");
    setPeople("");
    setCustomTip(""); // Set to the default value
  };

  // ... (rest of your component)

  <ResrtBtn onClick={resetValues}>RESET</ResrtBtn>;

  const iconfun = (bill, people) => {
    return {
      backgroundImage: `url(${bill ? peopleIcon : dollarIcon})`,
    };
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Logo src={logo} />
      </div>

      <AppDiv>
        <AppContainer>
          <LeftPart>
            <Bill>
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
            </Bill>
            <div className="persent-Section">
              <SelectTip>Select Tip %</SelectTip>

              <PersentConteiner>
                <Button
                  onClick={() => {
                    setTip(0.05);
                    setCustomTip(null);
                  }}
                  clicked={tip === 0.05}
                >
                  5%
                </Button>
                <Button
                  onClick={() => {
                    setTip(0.1);
                    setCustomTip(null);
                  }}
                  clicked={tip === 0.1}
                >
                  10%
                </Button>
                <Button
                  onClick={() => {
                    setTip(0.15);
                    setCustomTip(null);
                  }}
                  clicked={tip === 0.15}
                >
                  15%
                </Button>
                <Button
                  onClick={() => {
                    setTip(0.25);
                    setCustomTip(null);
                  }}
                  clicked={tip === 0.25}
                >
                  25%
                </Button>
                <Button
                  onClick={() => {
                    setTip(0.5);
                    setCustomTip(null);
                  }}
                  clicked={tip === 0.5}
                >
                  50%
                </Button>
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
                }}
              />
              {showError && <Errormassage>Can't be Zero</Errormassage>}
            </div>
          </LeftPart>
          <RightPart>
            <AmountWrapper>
              <PerPerson>
                <Amount>
                  Tip Amount<Person>/person</Person>{" "}
                </Amount>
                <Amount>
                  Total <Person>/person</Person>
                </Amount>
              </PerPerson>
              <AmountContainer>
                <PersentP>{notShowTip ? "0.00" : tipAmount}</PersentP>

                <PersentP>{notShowTotal ? "0.00" : totalPerPerson}</PersentP>
              </AmountContainer>
            </AmountWrapper>
            <ResetConteiner>
              <ResrtBtn onClick={resetValues}>RESET</ResrtBtn>
            </ResetConteiner>
          </RightPart>
        </AppContainer>
      </AppDiv>
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default App;
