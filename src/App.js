// importar express
const express = require("express");
const app = express();

//configuracion del puerto
app.set("port", process.env.POST || 3000);

//Los Middlewares y rutas
app.use(express.json());

app.use("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.sendFile(__dirname + "/views/index-test.html");
});

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado en http://127.0.0.1:3000/");
});
