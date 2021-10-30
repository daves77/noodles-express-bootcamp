import { read } from "./jsonStorage.js";

const DATABASE_URL = "data.json";

export const getRecipe = (req, res) => {
    const { index } = req.params;

    read(DATABASE_URL, (jsonObj) => {
        const { recipes } = jsonObj;

        const recipe = recipes[index];

        recipe
            ? res.send(recipes[index])
            : res.status(404).send("Sorry that recipe is not available!");
    });
};

export const getRecipeWithYield = (req, res) => {
    const { portion } = req.params;

    read(DATABASE_URL, (jsonObj) => {
        const { recipes } = jsonObj;
        const matchedRecipes = recipes.filter(
            (recipe) => recipe.yield === parseInt(portion)
        );
        matchedRecipes.length > 0
            ? res.send(matchedRecipes)
            : res.status(404).send("no matched recipes");
    });
};

export const getRecipeWithLabel = (req, res) => {
    const { label } = req.params;
    const convertedLabel = label
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");

    console.log(convertedLabel);
    read(DATABASE_URL, (jsonObj) => {
        const { recipes } = jsonObj;
        const matchedRecipe = recipes.find(
            (recipe) => recipe.label === convertedLabel
        );

        matchedRecipe
            ? res.send(matchedRecipe)
            : res.status(404).send("no matched recipes");
    });
};
