import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { defaultTheme } from "./components/thame";
import { Helmet } from "react-helmet";
import logo from "./images/logo.svg";
import AppContainer from "./components/appConteiner";
import AppDiv from "./components/appConteiner";
import { Logo } from "./components/logo";
import { LeftPart } from "./components/appConteiner";
import { RightPart } from "./components/appConteiner";
import { ResetConteiner } from "./components/appConteiner";
import { ResrtBtn } from "./components/appConteiner";
import BillsPart from "./components/Billspart";
import PersentigePart from "./components/PersentigePart";
import PeoplesPart from "./components/PeoplesPart";
import AmountPart from "./components/AmountPart";

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
    setCustomTip("");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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
        <Logo src={logo} />
      </div>

      <AppDiv>
        <AppContainer>
          <LeftPart>
            <BillsPart bill={bill} setBill={setBill} people={people}></BillsPart>

            <PersentigePart
              setTip={setTip}
              setCustomTip={setCustomTip}
              tip={tip}
              customTip={customTip}
            ></PersentigePart>
            <PeoplesPart
              people={people}
              setPeople={setPeople}
              setShowError={setShowError}
              showError={showError}
            ></PeoplesPart>
          </LeftPart>
          <RightPart>
            <AmountPart
              notShowTip={notShowTip}
              notShowTotal={notShowTotal}
              tipAmount={tipAmount}
              totalPerPerson={totalPerPerson}
            ></AmountPart>
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
