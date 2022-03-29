import express from "express"
import morgan from "morgan"
import db from "./db";
import routes from "./routes"

const port = process.env.PORT || 3000
const { NODE_ENV } = process.env

const app = express()

app.use(express.json())

app.use(morgan("combined"))

app.use(routes);

db.sync(() => console.log(`Banco de dados sincronizado`));

app.listen(port, () => {
  console.log(`API example app listening at http://localhost:${port}`)
})