import Head from "next/head";
import Image from "next/image";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Link,
  Divider,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/material";
import QueEsReact from "../componentes/queEsReact";
import QueEsMaterialUi from "../componentes/queEsMatrialUi";
import ContadorClick from "../componentes/ContadorClick";
import Tutorial from "../componentes/tutorial";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(3);

  const handleClick = (e) => {
    setPage(e.target.id);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            paddingTop: 10,
            paddingLeft: 5,
            paddingRight: 4,
            paddingBottom: 10,
          }}
        >
          <CardHeader
            subheader="con react y material ui"
            title="Contador de clicks"
          />
          <CardContent sx={{ marginBottom: 1 }}>
            <Typography sx={{ marginBottom: 5 }}>
              Un contador de clicks es una pequeña aplicacion que nos permite
              contar el nuero de clicks realizados por el usuario, y son de gran
              utilidad para comprender como funcionan los eventos en javaScript
            </Typography>
            <Typography>
              Pero primero hablemos un poco sobre react y material ui
            </Typography>
          </CardContent>
          <CardContent>
            <Link
              id={1}
              underline="none"
              color="primary"
              sx={{ display: "block" }}
              onClick={handleClick}
            >
              React
            </Link>
            <Link
              id={2}
              underline="none"
              color="primary"
              sx={{ display: "block" }}
              onClick={handleClick}
            >
              Material UI
            </Link>
            <Link
              id={3}
              underline="none"
              color="primary"
              sx={{ display: "block", marginBottom: 8 }}
              onClick={handleClick}
            >
              Encriptador de texto
            </Link>

            <Button variant="contained" id={4} onClick={handleClick}>
              contador
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        {page == 1 ? (
          <QueEsReact />
        ) : page == 2 ? (
          <QueEsMaterialUi />
        ) : page == 3 ? (
          <Tutorial />
        ) : (
          <ContadorClick />
        )}
      </Grid>
    </Grid>
  );
}
