"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, styled, Container, Button, Stack } from "@mui/material";

const StyledNav = styled(Box)`
  background-color: #090806;
  color: white;
  position: relative;
  position: sticky;
  top: 0;
  z-index: 10;

  &::after {
    background: url(/light-strand.png) repeat-x;
    background-size: 229px 35px;
    bottom: 0;
    content: '';
    height: 35px;
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
    <StyledNav sx={{ padding: { xs: "1rem 0 2rem", md: "1rem 2rem 1rem 0" } }}>
      <Container maxWidth="xl">
        <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={{ xs: 2, md: 4 }}>
          <Link href="/" style={{}}>
            <Image src="/logo.png" width={150} height={150} alt="The Bugg Lights Logo" />
          </Link>
          <Stack direction="row" flexWrap="wrap" justifyContent={{ xs: "center", md: "flex-start" }} spacing={{xs: 2, md: 4}} sx={{ flex: { xs: 'initial', md: '1 1 0px' } }} >
            <NavLink href="/plan">Plan Your Visit</NavLink>
            <NavLink href="/sponsor">Sponsorship</NavLink>
            <NavLink href="/in-the-news">In the News</NavLink>
          </Stack>
          <Box>
            <Button component={Link} href="/#food-drive" variant="contained" sx={{ display: 'flex', alignItems: "center", justifyContent: "center", padding: "0.625rem 1rem" }}>
              <Box component="span" sx={{ lineHeight: '1em' }}>Help Feed Local Families</Box>
            </Button>
          </Box>
        </Stack>
      </Container>
    </StyledNav>
  );
}