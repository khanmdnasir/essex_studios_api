const express = require("express");
const bodyParser = require("body-parser");

const hospitalRoutes = require("./routes/hospitalRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/hospitals", hospitalRoutes);
app.use("/bookings", bookingRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
