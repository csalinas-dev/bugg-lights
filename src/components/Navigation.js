"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, styled, Container, Button, Stack } from "@mui/material";

const StyledNav = styled(Box)`
  background-color: #090806;
  color: white;
  padding: 1rem 0;
  position: relative;
  position: sticky;
  top: 0;
  z-index: 10;

  &::after {
    background: url(/light-strand.png) repeat-x;
    bottom: 0;
    content: '';
    height: 50px;
    left: 0;
    position: absolute;
    right: 0;
    transform: translateY(100%);
  }
`;

const NavLink = styled(Link)`
  color: white;

  &:hover {
    color: #FFD700;
  }
`;

export const Navigation = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <StyledNav>
      <Container maxWidth="xl">
        <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={4}>
          <Link href="/">
            <Image src="/logo.png" width={150} height={150} alt="The Bugg Lights Logo" />
          </Link>
          <Stack direction="row" spacing={2} sx={{ flex: '1 1 0px' }} >
            <NavLink href="/media">Media</NavLink>
            <NavLink href="/plan">Plan Your Visit</NavLink>
            <NavLink href="/sponsor">Sponsorship</NavLink>
            <NavLink href="/rules">Rules & Courtesies</NavLink>
          </Stack>
          <Box>
            <Link href="/food" component={Button} variant="contained">Donate</Link>
          </Box>
        </Stack>
      </Container>
    </StyledNav>
  );
}