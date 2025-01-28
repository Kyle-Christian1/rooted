import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <Box mt={2} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Item backgroundColor="#346186">
            <Typography variant="h4" component="h2">
              <span class="focus-words">Meet Josie</span>
            </Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Item>
            <Typography variant="h6" component="p" textAlign="justify">
              {"  "}Hi, I’m Josie! I’m a proud mom of two, a homemaker, and a
              passionate advocate for intentional living. After balancing a
              demanding corporate job with managing life at home, I’ve learned
              that small, mindful changes can create a profound impact on how we
              live—bringing more <span class="focus-words">peace</span>,{" "}
              <span class="focus-words">purpose</span>, and{" "}
              <span class="focus-words">balance</span> into our everyday
              routines.
            </Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Item>
            <Typography variant="h6" component="p" textAlign="justify">
              {"  "}Now, I’m focused on creating a{" "}
              <span class="focus-words">healthier</span>,{" "}
              <span class="focus-words">toxin-free home</span>, nurturing{" "}
              <span class="focus-words">meaningful family connections</span>,
              and embracing a life of intention. And I’m excited to help you do
              the same—whether it’s through simplifying your daily tasks,{" "}
              <span class="focus-words">reducing stress</span>, or guiding you
              through meaningful life changes.
            </Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Item>
            {" "}
            <Typography variant="h6" component="p" textAlign="justify">
              {"  "}In addition to my personal journey, I’m also here to assist
              you with event planning and personal assistant services. Whether
              you're planning a special event or need help with day-to-day
              tasks, I’m happy to lend my expertise in organizing and managing
              the details, so you can focus on what matters most. I’m so glad
              you’re here, and I can’t wait to support you on your journey to a
              more peaceful, purposeful, and organized life.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
