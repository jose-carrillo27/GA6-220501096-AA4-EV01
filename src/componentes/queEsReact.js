import { Grid, Typography, Link, Card, CardMedia } from "@mui/material";
import { useRouter } from "next/router";

export default function QueEsReact() {
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
        ¿que es react?
      </Typography>
      <br />
      <Card sx={{ marginBottom: 3 }}>
        <CardMedia
          alt="imagenReact"
          sx={{ minHeight: 190 }}
          image="/React_Native_Logo.png"
          title="logoReact"
        />
      </Card>
      <Typography>
        React es una biblioteca de JavaScript para construir interfaces de
        usuario (UI) interactivas y reutilizables. Fue desarrollada por Facebook
        y se lanzó al público en 2013. React permite a los desarrolladores crear
        componentes de UI que pueden reutilizarse fácilmente en toda la
        aplicación, lo que hace que el desarrollo sea más eficiente y escalable.
        <br />
        <br />
        Una de las principales características de React es su modelo de
        programación declarativo, que permite a los desarrolladores describir
        cómo debería verse la interfaz de usuario en cualquier estado en lugar
        de escribir código imperativo para manipular directamente el DOM. Esto
        hace que la creación de interfaces de usuario sea más fácil de entender
        y mantener.
        <br />
        <br />
        Además, React utiliza el concepto de "unidireccionalidad de datos"
        (one-way data binding), lo que significa que los datos fluyen en una
        dirección específica a través de la aplicación. Esto hace que la
        aplicación sea más fácil de depurar y escalar.
        <br />
        <br />
        React es ampliamente utilizado en el desarrollo de aplicaciones web y
        móviles, y cuenta con una gran comunidad de desarrolladores y una amplia
        gama de herramientas y bibliotecas de apoyo.
      </Typography>
      <Link
        underline="none"
        color="primary"
        onClick={() => router.push("https://es.reactjs.org/")}
        sx={{ cursor: "pointer" }}
      >
        Conoce mas sobre React
      </Link>
    </Grid>
  );
}
