const express = require("express");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

const app = express();
dotenv.config();

const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// app.set("view engine", "ejs");

// app.get('/ejs', (req, res) => {
//   res.render('index', {data})
// });

// *******************    RUTA HTML ESTÁTICO  ************************
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Ruta para obtener el pronóstico del tiempo
app.get("/weather", async (req, res) => {
  try {
    const cityName = req.query.city;
    const apiKey ='632009ee31ca65e493e6bc49720e15ea'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    console.log(url)

    const respuesta = await fetch(url)
    const data = await respuesta.json();
    console.log(data)
    
    const temperature = data.main.temp;
    res.json({ temperature });
    

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Hubo un error al obtener la temperatura." });
  }
});

// ****************       INICIACIÓN SERVIDOR     ****************************
app.listen(port, () => {
  console.log(
    `Servidor escuchando en el puerto ${port}. Ir a http://localhost:${port}`
  );
});
