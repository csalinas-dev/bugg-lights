"use client";

import { Box, styled } from "@mui/material";

const Wrapper = styled(Box)`
    backdrop-filter: blur(5px);
    background-color: #1a264480;
    border-radius: 3rem;
    border: 3px solid #435991;
`;

export const Glass = ({ children, sx, ...props }) => (
    <Wrapper sx={{ p: { xs: '1.5rem', md: "3rem" }, ...sx }} {...props}>{children}</Wrapper>
);