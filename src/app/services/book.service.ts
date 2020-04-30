import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private localStorage:LocalStorageService) { }

  books: Book[] = [
    {
      ISBN: "9780060012359",
      title: "The Amazing Maurice and His Educated Rodents",
      author: "Terry Pratchett",
      publisher: "HarperCollins",
      publicationDate: new Date("2008-04-01"),
      coverUrl: "https://m.media-amazon.com/images/I/51hl9XJwMUL._SL200_.jpg"
    },
    {
      ISBN: "9780743450072",
      title: "A Song for Arbonne",
      author: "Guy Gavriel Kay",
      publisher: "Gardners Books",
      publicationDate: new Date("2002-10-01"),
      coverUrl: "https://m.media-amazon.com/images/I/519DG3N4REL._SL200_.jpg"
    },
    {
      ISBN: "9780575079038",
      title: "The Dispossessed",
      author: " Ursula K. Le Guin",
      publisher: "Orion",
      publicationDate: new Date("2006-08-01"),
      coverUrl: "https://m.media-amazon.com/images/I/41kdQMz1cnL._SL200_.jpg"
    },
    {
      ISBN: "9781400030071",
      title: "Deus Irae",
      author: "Philip K. Dick & Roger Zelazny",
      publisher: "Vintage",
      publicationDate: new Date("2003-11-01"),
      coverUrl: "https://m.media-amazon.com/images/I/5172KJSKZRL._SL200_.jpg"
    },
    {
      ISBN: "9780886778699",
      title: "The Faded Sun Trilogy: Kesrith, Shon'jir, and Kutath",
      author: "C. J. Cherryh",
      publisher: "DAW",
      publicationDate: new Date("2000-01-01"),
      coverUrl: "https://m.media-amazon.com/images/I/51i9IXrU1WL._SL200_.jpg"
    }
  ]

  selectedBook: Book;

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  addBook(book: Book){
    this.books.push(book);
  } 

}
