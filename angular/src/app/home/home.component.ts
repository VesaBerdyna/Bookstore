import { AuthService, ListService } from '@abp/ng.core';
import { Component,OnInit } from '@angular/core';

import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from '@proxy/books';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],

})
export class HomeComponent implements OnInit {
  book

  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  constructor(
    public readonly list: ListService,
    private authService: AuthService,
    private bookService: BookService) {}

  ngOnInit() {
    if(this.hasLoggedIn){
      const bookStreamCreator = (query) => this.bookService.getList(query);

      this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
        this.book = response;
        
      });
    }
 
  }
  login() {
    this.authService.navigateToLogin();
  }
}
