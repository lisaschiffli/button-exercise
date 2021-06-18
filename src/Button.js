import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "4px 12px"
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "12px 20px"
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "16px 32px"
  }
};

const ButtonBase = styled.button`
  font-family: "Roboto", sans-serif;
  border: 2px solid transparent;
  text-transform: uppercase;
  outline-color: ${COLORS.primary};

  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);

  &:focus {
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${COLORS.gray};
  border: none;
  outline-color: ${COLORS.gray};

  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

// Josh Comeau's version
// const Button = ({ variant, size, children }) => {
//   const styles = SIZES[size];

//   let Component;
//   if (variant === "fill") {
//     Component = FillButton;
//   } else if (variant === "outline") {
//     Component = OutlineButton;
//   } else if (variant === "ghost") {
//     Component = GhostButton;
//   } else {
//     throw new Error(`Unrecognized Button variant: ${variant}`);
//   }

//   return <Component style={styles}>{children}</Component>;
// };

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  switch (variant) {
    case "fill":
      return <FillButton style={styles}> {children} </FillButton>;
    case "outline":
      return <OutlineButton style={styles}> {children} </OutlineButton>;
    case "ghost":
      return <GhostButton style={styles}> {children} </GhostButton>;
    default:
      return <FillButton style={styles}> {children} </FillButton>;
  }
};

export default Button;
