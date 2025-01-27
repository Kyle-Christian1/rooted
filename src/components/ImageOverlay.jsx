import React from "react";
import { Box, Typography } from "@mui/material";

export default function TextOnImage() {
  return (
    <Box
      sx={{
        position: "relative", // This makes the image the "bounding box" for the text
        width: "100%", // Set the width of the image // Set the height of the image
      }}
    >
      {/* The image */}
      <Box
        component="img"
        src="https://static.wixstatic.com/media/41b1a1_c04774531cee49b980d36a84044cbfe1~mv2.jpg/v1/fill/w_1470,h_1560,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/41b1a1_c04774531cee49b980d36a84044cbfe1~mv2.jpg"
        alt="Random"
        sx={{
          width: "100%",
          objectFit: "cover",
        }}
      />

      {/* The text on top */}
      <Typography
        variant="h4"
        sx={{
          position: "absolute", // This places the text on top
          top: "20%", // Center the text vertically
          left: "50%", // Center the text horizontally
          transform: "translate(-50%, -50%)", // Adjust for true centering
          color: "white", // Make text visible on most images
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Add shadow for readability
          textAlign: "center",
        }}
      ></Typography>
    </Box>
  );
}
