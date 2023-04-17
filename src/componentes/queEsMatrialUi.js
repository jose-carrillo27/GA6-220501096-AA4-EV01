import { Grid, Typography, Link, Card, CardMedia } from "@mui/material";
import { useRouter } from "next/router";

export default function QueEsMaterialUi() {
  const router = useRouter();
  return (
    <Grid
      sx={{
        paddingTop: 10,
        paddingLeft: 8,
        paddingRight: 6,
        paddingBottom: 10,
        backgroundColor: "#b0bec5",
        borderLeft: "1px solid #90a4ae",
      }}
    >
      <Typography sx={{ fontSize: 30, textAlign: "center" }}>
        ¿que es Material Ui?
      </Typography>
      <br />
      <Card sx={{ marginBottom: 3 }}>
        <CardMedia
          alt="imagenReact"
          sx={{ minHeight: 190 }}
          image="/1_FDNeKIUeUnf0XdqHmi7nsw.png"
          title="logoReact"
        />
      </Card>
      <Typography>
        Material-UI es una biblioteca de componentes de interfaz de usuario (UI)
        para React. Se basa en el sistema de diseño de Google, llamado Material
        Design, que se caracteriza por tener una apariencia clara, moderna y
        consistente en todas las plataformas y dispositivos.
        <br />
        <br />
        Material-UI ofrece una amplia gama de componentes, incluidos botones,
        tarjetas, formularios, barras de navegación, diálogos, iconos, entre
        otros. Estos componentes se construyen utilizando tecnologías modernas
        como Flexbox y Grid, lo que los hace altamente personalizables y fáciles
        de usar.
        <br />
        <br />
        Además de los componentes, Material-UI también ofrece herramientas
        útiles como un sistema de cuadrícula flexible, un sistema de tipografía,
        temas personalizables y soporte para diseños responsivos.
        <br />
        <br />
        Material-UI es una de las bibliotecas de UI más populares para React y
        es ampliamente utilizada por desarrolladores de todo el mundo para crear
        aplicaciones web y móviles de alta calidad. Al estar basada en React,
        Material-UI se integra fácilmente con otras bibliotecas y marcos de
        trabajo populares, lo que la hace ideal para proyectos de todos los
        tamaños.
      </Typography>
      <Link
        underline="none"
        color="primary"
        onClick={() => router.push("https://mui.com/")}
        sx={{ cursor: "pointer" }}
      >
        Conoce mas sobre Material Ui
      </Link>
    </Grid>
  );
}
