import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { PageModule } from '@abp/ng.components/page'
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [BookComponent],
  imports: [
    BookRoutingModule,
    SharedModule,
	PageModule,
  NgbDatepickerModule
  ]
})
export class BookModule { }

