import styled from "styled-components";

import { defaultTheme } from "../components/thame";

export const Input = styled.input`
  all: unset;
  border-radius: 5px;

  background-image: url($?{dollarIcon});
  background-color: ${defaultTheme.inputBackground};
  background-repeat: no-repeat;
  background-position: left 19px center;
  height: 48px;
  font-size: 24px;
  text-align: right;
  font-family: ${defaultTheme.fonts.primary};
  color: ${defaultTheme.colors.cyandark};
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;

  &::placeholder {
    font-family: ${defaultTheme.fonts.primary};
    padding-right: 5px;
    opacity: 0.35;
  }
  &:hover {
    outline: 2px solid ${defaultTheme.colors.cyanStrong};
  }
`;
