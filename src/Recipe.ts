class Recipe {
  private name: string;
  private ingredients: string[];
  private category: string;

  constructor(name: string, ingredients: string[], category: string) {
    this.name = name;
    this.ingredients = ingredients;
    this.category = category;
  }

  public getName(): string {
    return this.name;
  }

  public getIngredients(): string[] {
    return this.ingredients;
  }

  public getCategory(): string {
    return this.category;
  }
}

export default Recipe;