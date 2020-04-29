import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-box',
  templateUrl: './book-box.component.html',
  styleUrls: ['./book-box.component.css']
})
export class BookBoxComponent implements OnInit {

  constructor(private bookService: BookService) { }

  @Input() book:Book;

  coverUrl: String; 

  ngOnInit(): void {
  this.coverUrl   = (this.book.coverUrl == ""?"/assets/favicon.ico":this.book.coverUrl)


  }


  editBook(book: Book): void{
    this.bookService.selectedBook = book;
  
  }


}
