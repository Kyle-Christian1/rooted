import React from "react";
import { Box, Typography } from "@mui/material";

export default function TextOnImage() {
  return (
    <Box>
      {/* The image */}
      <Box
        component="img"
        src="https://static.wixstatic.com/media/41b1a1_c04774531cee49b980d36a84044cbfe1~mv2.jpg/v1/fill/w_1470,h_1560,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/41b1a1_c04774531cee49b980d36a84044cbfe1~mv2.jpg"
        alt="Josie's family"
        sx={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
