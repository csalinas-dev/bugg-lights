import { Box, Container, Typography, Grid, Card, CardContent, Stack } from "@mui/material";
import Image from "next/image";
import { Glass } from "@/components/Glass";

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Glass>
        <Box mb={8}>
          <Typography variant="h1">Plan Your Visit</Typography>
          <Typography variant="h4" sx={{ opacity: 0.54 }}>Everything you need to know before stopping by the display.</Typography>
        </Box>

        <Box mb={8}>
          <Typography variant="h4" gutterBottom>Season Schedule</Typography>
          <Grid container mb={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6">Opening Night</Typography>
              <Typography variant="body1">We will start the season on <strong>Friday, November 28th</strong> at 6pm!</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6">Nightly Schedule</Typography>
              <Typography variant="body1">The display is lit every evening from <strong>5pm to 10pm</strong> until the New Year</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1">Come bundled up, take your time, and enjoy the lights at your own pace.</Typography>
        </Box>

        <Box mb={8}>
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" gutterBottom>
                Santa Visits
              </Typography>
              <Typography variant="body1" gutterBottom>
                Santa stops by on select evenings from 6 pm to 9 pm. Kids can tell him what's on their wish list, and parents are welcome to take photos. All the Santa dates are shown on the calendar below.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Image
                src="/santa-calendar.png"
                width={450}
                height={500}
                alt="The Bugg Lights 2025 Santa Calendar"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box mb={8}>
          <Typography variant="h4" gutterBottom>
            Hot Chocolate Nights
          </Typography>
          <Typography variant="body1">
            On Friday and Saturday evenings, our sponsors provide free hot chocolate while supplies last. It's the perfect warm-up while walking the display.
          </Typography>
        </Box>

        <Box mb={8}>
          <Typography variant="h4" gutterBottom>
            Help Support Local Families
          </Typography>
          <Typography variant="body1">
            Guests are encouraged to bring non-perishable food items to support Storehouse Albuquerque. Your visit helps brighten the season for the community.
          </Typography>
        </Box>

        <Box mb={8}>
          <Typography variant="h4" gutterBottom>
            Parking & Accessibility
          </Typography>
          <Typography variant="body1">
            Street parking is available nearby. Walkways are stroller-friendly, and weeknights usually have lighter crowds for a quieter visit.
          </Typography>
        </Box>
      </Glass>
    </Container>
  );
}