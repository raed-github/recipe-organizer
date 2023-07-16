import Recipe from './Recipe';

class RecipeManager {
  private recipes: Recipe[];

  constructor() {
    this.recipes = [];
  }

  public addRecipe(name: string, ingredients: string[], category: string): void {
    const recipe = new Recipe(name, ingredients, category);
    this.recipes.push(recipe);
  }

  public getRecipesByCategory(category: string): Recipe[] {
    return this.recipes.filter(recipe => recipe.getCategory() === category);
  }

  public searchRecipesByIngredients(ingredients: string[]): Recipe[] {
    return this.recipes.filter(recipe =>
      ingredients.every(ingredient => recipe.getIngredients().includes(ingredient))
    );
  }
}

export default RecipeManager;