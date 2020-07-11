// importar express
const express = require("express");
const app = express();

//configuracion del puerto
app.set("port", process.env.POST || 3000);

//Los Middlewares y rutas
app.use(express.json());

//rutas creadas
const usuarioRoutes = require("./routes/UsuarioRoute");
app.use("/usuario", usuarioRoutes);

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado en http://127.0.0.1:3000/");
});

//la ruta general-> esta debe ir abajo de las creadas sino las sobreescribe
app.use("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.sendFile(__dirname + "/routes/index-test.html");
});