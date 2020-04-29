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

  title: string = "aggiungi un libro";
  newBook: Book;

  ngOnInit(): void {
    this.newBook = {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: new Date(),
      coverUrl: ""
    };

  }


  add() {
    this.bookService.addBook(this.newBook);
    this.newBook = {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: new Date(),
      coverUrl: ""
    };
  }

}
