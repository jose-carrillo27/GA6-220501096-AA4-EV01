import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, CardMedia } from "@mui/material";

export default function Tutorial() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ backgroundColor: "#e0f7fa" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            1. Intalar nextJS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            npx create-next-app@latest
            <br />
            # or <br />
            yarn create next-app <br /># or
            <br /> pnpm create next-app
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ backgroundColor: "#b2ebf2" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            2 Instalar Material ui
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            npm install @mui/material @emotion/react @emotion/styled
            <br />
            # or <br />
            yarn add @mui/material @emotion/react @emotion/styled
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ backgroundColor: "#80deea" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            3 configurar las carpetas
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En la carpeta page crear el archivo contadorClick.js
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ backgroundColor: "#4dd0e1" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            4 crear el componente ContadorClick
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            importar los componetes necesarios para la vista del componente
            <br />
            <br />
            import (Grid, Typography, Button) from "@mui/material";
            <br /> import useState from "react";
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{ backgroundColor: "#26c6da" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            5 crear la function ContadorClick
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card>
            <CardMedia
              component="img"
              alt="t1"
              sx={{ minHeight: 190 }}
              image="/t1.png"
              title="t1"
            />
          </Card>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        sx={{ backgroundColor: "#00bcd4" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            6 retornar los componentes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card>
            <CardMedia
              component="img"
              alt="t2"
              sx={{ minHeight: 190 }}
              image="/t2.png"
              title="t2"
            />
          </Card>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
