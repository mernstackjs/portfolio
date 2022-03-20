import { Typography, Box, CardActions, Button } from "@mui/material";
import React from "react";
import me from "./me.png";
function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${me})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "300px",
          marginLeft: "130px",
          padding: "100px 0",
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "black", fontSize: "8px" }}
          gutterBottom
        >
          Hej ! Ahmed A.rizaak
        </Typography>
        <Typography sx={{ color: "#6A14EC", fontSize: "17px", width: "150px" }}>
          I am A Creative UI/UX Designer From Sweden
        </Typography>

        <Typography sx={{ color: "balck", fontSize: "8px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          sequi deserunt qui laboriosam fuga modi sapiente quaerat aut amet.
          Vero?
        </Typography>

        <CardActions
          sx={{
            marginTop: "10px",
            padding: "0",
          }}
        >
          <Button size="small" variant="contained" sx={{ fontSize: "5px" }}>
            Contect
          </Button>
          <Button sx={{ fontSize: "5px" }} size="small" variant="outlined">
            Hire me
          </Button>
        </CardActions>
      </Box>
    </div>
  );
}

export default Home;
