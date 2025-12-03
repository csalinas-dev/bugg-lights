"use client";

import React from "react";
import {
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Glass } from "@/components";
import { useInViewAnimation } from "./_useInViewAnimation";

export const AnimatedTimelineItem = ({ event, alignOpposite }) => {
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