"use client";

import { Main, Navigation } from "@/components";

export default function PageLayout({ children }) {
  return (
    <>
      <Navigation />
      <Main>
        {children}
      </Main>
    </>
  )
}