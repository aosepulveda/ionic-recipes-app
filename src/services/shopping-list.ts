import {Ingredient} from "../models/ingredient";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth";
import 'rxjs/Rx';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  constructor(private http: HttpClient,
              private authService: AuthService) {}

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

  storeList(token: string){
    //this.http.get('my-url')
    const userId = this.authService.getActiveUser().uid;

    // return observable
    return this.http
      .put('https://ionic2-recipes-app.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token, this.ingredients)
      .map((response: Response) => {
        return response;
      });
  }
}
