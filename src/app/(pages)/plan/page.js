import { Box, Container } from "@mui/material";
import Image from "next/image";

export default function Page() {
  return (
    <Container maxWidth="xl">
      <Box>Plan Your Visit</Box>
      <Image src="/santa-calendar.png" width={450} height={500} alt="The Bugg Lights 2025 Santa Calendar"/>
    </Container>
  );
}