import { Component, OnInit } from '@angular/core';
import { BookService } from "../services/book.service";
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: Book[];
  title: string = "elenco libri"

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

}
