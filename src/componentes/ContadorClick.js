import { Grid, Typography, Button } from "@mui/material";
import { useState } from "react";

export default function ContadorClick() {
  const [contador, setContador] = useState(0);

  const handleClick = (e) => {
    if (e.target.id == 1) {
      setContador(contador + 1);
    } else if (e.target.id == 2 && contador > 0) {
      setContador(contador - 1);
    } else {
      setContador(0);
    }
  };

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
          paddingTop: 10,
          paddingLeft: 8,
          paddingRight: 6,
          paddingBottom: 8,
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            textAlign: "center",
            paddingLeft: "20%",
            paddingRight: "20%",
            marginBottom: 5,
          }}
        >
          <Typography sx={{ border: "2px solid #000", fontSize: 200 }}>
            {contador}
          </Typography>
        </Grid>
        <Grid>
          <Button
            sx={{ fontSize: 20, marginRight: 1 }}
            variant="contained"
            id={1}
            onClick={handleClick}
          >
            +
          </Button>
          <Button
            sx={{ fontSize: 20, marginRight: 1 }}
            variant="contained"
            id={2}
            onClick={handleClick}
          >
            -
          </Button>
          <Button
            sx={{ fontSize: 20, marginRight: 1 }}
            variant="contained"
            id={3}
            onClick={handleClick}
          >
            C
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
