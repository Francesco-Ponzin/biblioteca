import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookBoxComponent } from './book-box/book-box.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {NgxWebstorageModule} from 'ngx-webstorage';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    BookBoxComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
