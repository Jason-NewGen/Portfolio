import React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { styled, keyframes } from '@mui/material/styles';

const bounce = keyframes`
0%, 100% {
  transform: translateY(0);
}
50% {
  transform: translateY(-10px); /* Adjust bounce height */
}
`;

const BouncingArrow = styled(KeyboardArrowDown)(({
    animation: `${bounce} 1.5s infinite`
}))

export default BouncingArrow;