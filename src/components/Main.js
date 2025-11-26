"use client";

import { styled } from "@mui/material";

export const Main = styled('main')`
  background: linear-gradient(to bottom, #090806 0%, #0A0F1C 100%);
  padding: calc(1rem + 50px) 1rem 0 1rem;
  position: relative;
  min-height: 95vh;

  &::before {
    background-image: url('/stars.png'), url('/stars.png');
    background-position: 0 0, 200px 300px;
    background-repeat: repeat, repeat;
    background-size: 500px 500px, 750px 750px;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.9;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;