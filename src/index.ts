import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import RecipeManager from './RecipeManager';

const app = express();
const port = 8081;

app.use(bodyParser.json());

const recipeManager = new RecipeManager();

app.post('/recipes', (req: Request, res: Response) => {
  const { name, ingredients, category } = req.body;
  try {
    recipeManager.addRecipe(name, ingredients, category);
    res.status(201).send('Recipe added successfully');
  } catch (error) {
    res.status(400).send('Failed to add recipe');
  }
});

app.get('/recipes', (req: Request, res: Response) => {
  const { category, ingredients } = req.query;

  if (category) {
    const recipes = recipeManager.getRecipesByCategory(category.toString());
    res.send(recipes);
  } else if (ingredients) {
    const ingredientList = Array.isArray(ingredients)
      ? Array.from(ingredients as any).filter((ingredient): ingredient is string => typeof ingredient === 'string')
      : [ingredients].filter((ingredient): ingredient is string => typeof ingredient === 'string');
    const recipes = recipeManager.searchRecipesByIngredients(ingredientList);
    res.send(recipes);
  } else {
    res.status(400).send('Invalid request');
  }
});

app.listen(port, () => {
  console.log(`Recipe Organizer app listening at http://localhost:${port}`);
});