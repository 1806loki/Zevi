import express from "express";
import cors from "cors";
import { faker } from "@faker-js/faker";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    let user = {
      name: faker.commerce.productName(),
      email: faker.internet.email(),
      desc: faker.commerce.productDescription(),
    };
    data.push(user);
  }
  res.send(data);
});

app.listen(5000, () => console.log("Server is Listening at 5000"));
