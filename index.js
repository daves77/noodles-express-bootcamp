import express from "express";
import { getRecipe, getRecipeWithYield, getRecipeWithLabel } from "./route.js";

const PORT = 3001;

const app = express();

app.get("/recipe/:index", getRecipe);
app.get("/yield/:portion", getRecipeWithYield);
app.get("/recipe-label/:label", getRecipeWithLabel);

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
});
