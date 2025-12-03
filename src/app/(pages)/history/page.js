"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Glass } from "@/components";

const timelineEvents = [
  {
    id: "1971-origins",
    yearRange: "1971",
    title: "The First Lights",
    subtitle: "Norman Bugg starts it all",
    description:
      "Norman Bugg decorates the family home in Albuquerque’s Northeast Heights, starting a tradition that will grow into a citywide legend. Simple strings of lights and a few homemade cutouts mark the beginning of the Bugg Lights.",
    image: {
      src: "/images/bugg-lights/1971-first-display.jpg",
      alt: "Early Bugg family Christmas lights display in the 1970s",
      dateLabel: "Winter 1971",
    },
  },
  {
    id: "1980s-animatronics",
    yearRange: "1980s",
    title: "Homemade Animatronics Era",
    subtitle: "Penguins, Snoopy, and moving scenes",
    description:
      "Through the 1980s, Norman and his son Nathan add hand-built mechanical displays: penguins, Snoopy, rotating scenes, and a merry-go-round. The Bugg house becomes a must-see stop for families each December.",
    image: {
      src: "/images/bugg-lights/1985-animated-penguins.jpg",
      alt: "Animated penguin display at the Bugg Lights in the 1980s",
      dateLabel: "Mid-1980s",
    },
  },
  {
    id: "1990s-landmark",
    yearRange: "1990s",
    title: "Neighborhood Landmark",
    subtitle: "A local Christmas pilgrimage",
    description:
      "By the 1990s, traffic fills the neighborhood every night. Thousands of lights, animated displays, and handmade characters turn the Bugg home into an unofficial holiday attraction for the entire city.",
    image: {
      src: "/images/bugg-lights/1993-crowds.jpg",
      alt: "Crowds visiting the Bugg Lights in the 1990s",
      dateLabel: "Early 1990s",
    },
  },
  {
    id: "2001-final-home-year",
    yearRange: "2001",
    title: "The Last Season at the Original Home",
    subtitle: "Too big for one neighborhood",
    description:
      "After decades of growth, the display becomes too large for the residential street. The 2001 season is the final year of the original Bugg Lights at the family home before the display begins its traveling era.",
    image: {
      src: "/images/bugg-lights/2001-last-season.jpg",
      alt: "Final year of the original Bugg Lights at the home",
      dateLabel: "Christmas 2001",
    },
  },
  {
    id: "2000s-nomadic",
    yearRange: "Early–Mid 2000s",
    title: "The Nomadic Years",
    subtitle: "Santa Fe and Menaul School",
    description:
      "Rather than packing it in, the family moves portions of the display to new hosts, including a shopping center in Santa Fe and Menaul School in Albuquerque. Volunteers help rehab and set up the Bugg Lights each year.",
    image: {
      src: "/images/bugg-lights/2004-menual-school.jpg",
      alt: "Bugg Lights display at Menaul School in the 2000s",
      dateLabel: "Mid-2000s",
    },
  },
  {
    id: "2010s-belen",
    yearRange: "2010s",
    title: "Harvey House Museum, Belen",
    subtitle: "The Bugg Lights Museum",
    description:
      "The display finds a semi-permanent home at the Harvey House Museum in Belen. With hundreds of thousands of lights and dozens of decorated trees, the Bugg Lights become a regional attraction for families across New Mexico.",
    image: {
      src: "/images/bugg-lights/2015-belen-museum.jpg",
      alt: "Bugg Lights Museum at Harvey House in Belen",
      dateLabel: "2010s",
    },
  },
  {
    id: "2023-final-museum",
    yearRange: "2023",
    title: "The Final Museum Season",
    subtitle: "Passing the torch back home",
    description:
      "After nearly a decade in Belen, the Bugg Lights Museum hosts its final season. Newer decorations stay with the city, while the original handcrafted pieces return to the Bugg family to begin their next chapter.",
    image: {
      src: "/images/bugg-lights/2023-final-belen.jpg",
      alt: "Final Christmas season of the Bugg Lights Museum in Belen",
      dateLabel: "Christmas 2023",
    },
  },
  {
    id: "2024-return-home",
    yearRange: "2024",
    title: "Return to The Bugg House",
    subtitle: "A full-circle moment",
    description:
      "For the first time in more than twenty years, the Bugg Lights return to the original Bugg home in Albuquerque. Norman’s grandson, Jared Bugg, leads the setup, combining restored vintage pieces with updated lighting and control.",
    image: {
      src: "/images/bugg-lights/2024-return-home.jpg",
      alt: "Bugg Lights returned to the original Bugg home",
      dateLabel: "Christmas 2024",
    },
  },
  {
    id: "present-new-generation",
    yearRange: "Today",
    title: "A New Generation of Bugg Lights",
    subtitle: "Family, friends, and community",
    description:
      "Now led by Jared and supported by family and close friends, the Bugg Lights continue as a free community tradition. Vintage mechanical displays share the yard with new pieces, modern control, and a focus on giving back.",
    image: {
      src: "/images/bugg-lights/2025-present-day.jpg",
      alt: "Modern Bugg Lights display with classic and new elements combined",
      dateLabel: "Present Day",
    },
  },
];

const useInViewAnimation = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, inView };
};

const AnimatedTimelineItem = ({ event, alignOpposite }) => {
  const { ref, inView } = useInViewAnimation();
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(40px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: "auto 0",
            minWidth: { xs: "70px", sm: "120px" },
            textAlign: alignOpposite ? "right" : "left",
          }}
          variant="body2"
          color="text.secondary"
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {event.yearRange}
          </Typography>
          {event.image?.dateLabel && (
            <Typography variant="caption">{event.image.dateLabel}</Typography>
          )}
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot
            sx={{
              background:
                theme.palette.mode === "dark"
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
              boxShadow: "0 0 0 4px rgba(255,255,255,0.12)",
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: 3 }}>
          <Glass
            sx={{
              maxWidth: 520,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            {/* {event.image && (
              <Box
                component="img"
                sx={{
                  maxHeight: 260,
                  objectFit: "cover",
                }}
                src={event.image.src}
                alt={event.image.alt}
              />
            )} */}
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 0.5, letterSpacing: 0.4 }}
            >
              {event.title}
            </Typography>
            {event.subtitle && (
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                {event.subtitle}
              </Typography>
            )}
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              {event.description}
            </Typography>
          </Glass>
        </TimelineContent>
      </TimelineItem>
    </Box>
  );
};

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
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.06)",
            },
          }}
        >
          {timelineEvents.map((event, index) => (
            <AnimatedTimelineItem
              key={event.id}
              event={event}
              alignOpposite={index % 2 === 0}
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