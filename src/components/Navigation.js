"use client";

import { Box, styled } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledNav = styled(Box)`
  background-color: #003366;
  color: white;
  padding: 1rem;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: underline;
    margin: 0 1rem;
  }

  a:hover {
    color: #FFD700;
  }
`;

export default function Navigation() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <StyledNav>
      <Link href="/">Home</Link>
      <Link href="/media">Media</Link>
      <Link href="/plan">Plan Your Visit</Link>
      <Link href="/sponsor">Sponsorship</Link>
      <Link href="/rules">Rules & Courtesies</Link>
    </StyledNav>
  );
}