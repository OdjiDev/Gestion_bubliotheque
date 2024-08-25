import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {authGuard} from './services/guard/auth.guard';
import {ActivateAccountComponent} from './pages/activate-account/activate-account.component';
import { MenuComponent } from './modules/book/components/menu/menu.component';
import { MainComponent } from './modules/book/pages/main/main.component';
import { BookListComponent } from './modules/book/pages/book-list/book-list.component';
import { BookCardComponent } from './modules/book/components/book-card/book-card.component';
import { ManageBookComponent } from './modules/book/pages/manage-book/manage-book.component';
import { BorrowedBookListComponent } from './modules/book/pages/borrowed-book-list/borrowed-book-list.component';
import { RatingComponent } from './modules/book/components/rating/rating.component';
import { MyBooksComponent } from './modules/book/pages/my-books/my-books.component';
import { BookDetailsComponent } from './modules/book/pages/book-details/book-details.component';
import { ReturnedBooksComponent } from './modules/book/pages/returned-books/returned-books.component';

const routes: Routes = [
  {
    path: 'login',
    component:     ManageBookComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'activate-account',
    component: ActivateAccountComponent
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule),
    // canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
