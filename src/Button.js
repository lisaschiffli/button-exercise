import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Wrapper = styled.button`

  /* background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border-color: ${COLORS.primary}; */
  /* background-color: transparent;
  color: ${COLORS.gray};
  border-color: transparent; */
  font-family: 'Roboto', sans-serif;
  font-size: 21px;
  width:  152px;
  height: 65px;
  border-radius: 4px;
  border-width: 1px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border-color: ${COLORS.black};
`;

const Button = ({ variant, size, children }) => {
  return (
    <Wrapper variant size>
      BUTTON
    </Wrapper>
  );
};

export default Button;
