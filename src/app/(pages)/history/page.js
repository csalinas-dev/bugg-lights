"use client";

import {
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import { timelineEvents } from "./_events";
import { AnimatedTimelineItem } from "./_Timeline";

export default function Page() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Hero */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            The Bugg Lights
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              mt: 1,
              mb: 2,
            }}
          >
            A Half-Century of Christmas Lights
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 760,
              mx: "auto",
              color: "text.secondary",
            }}
          >
            From Norman Bugg’s first strings of lights in 1971 to today’s
            multi-generational display, follow the story of how one family’s
            front yard became a New Mexico holiday tradition.
          </Typography>
        </Box>

        {/* Timeline */}
        <Timeline
          position="alternate"
          sx={{
            "&::before": {
              backgroundColor: "rgba(255,255,255,0.08)",
            },
          }}
        >
          {timelineEvents.map((event, index) => (
            <AnimatedTimelineItem
              key={event.id}
              event={event}
            />
          ))}
        </Timeline>

        {/* Footer note */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="caption" color="text.secondary">
            Timeline based on Bugg family history and public records. Some dates
            are grouped into eras where exact years are not documented.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}