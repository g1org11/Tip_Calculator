import { defaultTheme } from "./thame";
import styled from "styled-components";
import { Input } from "./input";

export const AppDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
`;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${defaultTheme.colors.white};
  padding: 15px;
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  width: 100%;
`;

export default AppContainer;

export const Text = styled.p`
  all: unset;
  font-size: 16px;
  font-family: "Space Mono";
  color: ${defaultTheme.colors.cyanDarkGrayish};
  padding-bottom: 10px;
`;
export const LeftPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Bill = styled.div`
  /* display: block; */
`;
export const SelectTip = styled.p`
  all: unset;
  font-size: 16px;
  font-family: "Space Mono";
  color: ${defaultTheme.colors.cyanDarkGrayish};
  padding-bottom: 20px;
`;
export const PersentInput = styled(Input)`
  width: 130px;
  height: 50px;
  margin: 0;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.clicked ? `${defaultTheme.colors.cyanStrong}` : defaultTheme.colors.cyandark};
  border: 0;
  border-radius: 5px;
  width: 130px;
  height: 50px;
  color: ${defaultTheme.colors.white};
  font-size: 16px;
  font-family: "Space Mono";
`;
export const PersentConteiner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  place-items: center;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 25px;
`;
export const PerPerson = styled.div``;
export const AmountContainer = styled.div``;
export const RightPart = styled.div`
  width: 100%;
  background-color: ${defaultTheme.colors.cyandark};
  border-radius: 15px;
`;
export const AmountWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  place-items: center;
  /* row-gap: 20px; */
  column-gap: 40px;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 25px;
`;
export const Amount = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: ${defaultTheme.colors.white};
`;
export const Person = styled.p`
  font-size: 12px;
  color: ${defaultTheme.colors.cyanDarkGrayish};
`;
export const PersentP = styled.p`
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 26px;
  color: ${defaultTheme.colors.cyanStrong};
`;
export const ResetConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
export const ResrtBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 90%;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 700;
  font-family: "Space Mono";
  color: ${defaultTheme.colors.cyandark};
  background-color: ${defaultTheme.colors.cyanStrong};
`;
export const Errormassage = styled.p`
  font-size: 14px;
  color: red;
  font-family: "Space Mono";
  margin-bottom: 20px;
  margin-top: -10px;
`;
