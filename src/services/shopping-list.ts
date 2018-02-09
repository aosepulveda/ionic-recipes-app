import {Ingredient} from "../models/ingredient";

export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  addItem(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
  }

  addItems(items: Ingredient[]) {
    this.ingredients.push(...items); // ES6
  }

  removeItem(index: number) {
    this.ingredients.splice(index, 1);
  }

  getItems() {
    return this.ingredients.slice(); // GET A COPY
  }
}
