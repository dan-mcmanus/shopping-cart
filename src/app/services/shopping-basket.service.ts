import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IShoppingBasket } from '../shared/models/shopping-basket.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService {

  private basketsUrl = 'api/baskets/';
  constructor(private httpClient: HttpClient) { }

  getBasketById(basketId: number): Observable<IShoppingBasket[]> {
    return this.httpClient.get<IShoppingBasket[]>(this.basketsUrl + basketId)
      .pipe(
        tap(data => console.log(JSON.stringify(data, null, 2))),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    // would normally log to a remote logger
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => new Error(errorMessage));
  }
}
