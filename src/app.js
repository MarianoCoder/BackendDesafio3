import express from "express";
import "./products.js";

app.use(express.urlenconded({ extended: true }));
const app = express();

app.get("/products", (req, res) => {
  let items = { products };

  res.send(items);
});

app.get("/products/:pid", (req, res) => {
  let pid = parseInt(req.params.pid);

  if (!isNaN(pid)) {
    if (pid >= 1 && pid <= items.length) {
      res.send(items[pid - 1]);
    } else {
      res.send({ error: "El id de producto no existe" });
    }
  } else {
    res.send({ error: "El id de producto no existe" });
  }
});

const port = 8080;
app.listen(port, () => {
  console.log("Servidor escuchando en el puerto: ", port);
});
