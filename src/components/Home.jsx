import { Typography, Box, CardActions, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import me from "./me.png";
import React from "react";
const useStyles = makeStyles((theme) => {
  return {
    computer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    mobile: {
      width: "100%",
      height: "100vh",
      position: "relative",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});
function Home() {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.computer}
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
          <Typography
            sx={{ color: "#6A14EC", fontSize: "17px", width: "150px" }}
          >
            I am A Creative UI/UX Designer From Sweden
          </Typography>

          <Typography sx={{ color: "balck", fontSize: "8px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium sequi deserunt qui laboriosam fuga modi sapiente quaerat
            aut amet. Vero?
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
      <div className={classes.mobile}>
        <img src={me} alt="" style={{ width: "100%", objectFit: "cover" }} />
        <Box
          sx={{
            position: "absolute",
            top: "30px",
            left: "50px",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "black", fontSize: "14px" }}
            gutterBottom
          >
            Hej ! Ahmed A.rizaak
          </Typography>
          <Typography
            sx={{ color: "#6A14EC", fontSize: "25px", width: "300px" }}
          >
            I am A Creative UI/UX Designer From Sweden
          </Typography>

          <Typography sx={{ color: "balck", fontSize: "10px", width: "270px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium sequi deserunt qui laboriosam fuga modi sapiente quaerat
            aut amet. Vero?
          </Typography>

          <CardActions
            sx={{
              marginTop: "10px",
              padding: "0",
            }}
          >
            <Button
              size="small"
              variant="contained"
              sx={{ fontSize: "5px", backgroundColor: "#6A14EC" }}
            >
              Contect
            </Button>
            <Button sx={{ fontSize: "5px" }} size="small" variant="outlined">
              Hire me
            </Button>
          </CardActions>
        </Box>
      </div>
    </>
  );
}

export default Home;
