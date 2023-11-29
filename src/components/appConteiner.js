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
  @media (min-width: 1024px) {
    width: 1300px;
    flex-direction: row;
    align-items: center;
    border-radius: 25px;
    justify-content: space-between;
    margin: 0 auto;
    gap: 50px;
  }
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
  flex: 1 0 calc(50% - 8px);
  height: 48px;
  margin: 0;
  @media (min-width: 1024px) {
    flex-basis: calc(33.333% - 8px);
  }
`;

export const Button = styled.button`
  flex: 1 0 calc(50% - 8px);
  background-color: ${(props) =>
    props.clicked ? `${defaultTheme.colors.cyanStrong}` : defaultTheme.colors.cyandark};
  border: 0;
  border-radius: 5px;

  height: 48px;
  color: ${(props) =>
    props.clicked ? `${defaultTheme.colors.cyandark}` : `${defaultTheme.colors.white}`};
  font-size: 24px;
  font-family: "Space Mono";
  @media (min-width: 1024px) {
    flex-basis: calc(33.333% - 8px);
  }
`;
export const PersentConteiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 15px;
  margin-bottom: 25px;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

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
  &:hover {
    background-color: ${defaultTheme.colors.cyanLightGrayish};
  }
`;
export const Errormassage = styled.p`
  font-size: 14px;
  color: red;
  font-family: "Space Mono";
  margin-bottom: 20px;
  margin-top: -10px;
`;
