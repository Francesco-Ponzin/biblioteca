import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  placeholderBook: Book = {
    ISBN: "isbn code",
    title: "titolo",
    author: "autore",
    publisher: "editore",
    publicationDate: new Date(),
    coverUrl: "/assets/favicon.ico"
  };

  voidBook: Book = {
    ISBN: "",
    title: "",
    author: "",
    publisher: "",
    publicationDate: new Date(),
    coverUrl: ""
  };

  title: string = "aggiungi un libro";
  newBook: Book;

  add() {
    this.bookService.addBook(this.newBook);
    this.newBook = this.voidBook;

  }
  ngOnInit(): void {
    this.newBook = this.voidBook;

  }

}
