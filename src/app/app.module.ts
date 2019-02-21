import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// region Components
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DataTableComponent } from './components/home-page/data-table/data-table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MessageComponent } from './components/message/message.component';
import { FormAddJobComponent } from './components/home-page/form-add-job/form-add-job.component';
// endregion


//region Service
// services
import {TodoService} from './services/TodoService/todo.service';
import {MessageService} from './services/MessageService/message.service';
import {MatDialogModule} from '@angular/material/dialog';
//endregion

//region MaterialDesign

import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material';
//endregion

//region lib
import { NgxSpinnerModule } from 'ngx-spinner';
import { EditTodoDialogComponent } from './components/dialog/edit-todo-dialog/edit-todo-dialog.component';
//endregion


const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'account', component: ContentComponent},
  { path: '**', component:  PagenotfoundComponent}
];





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    HomePageComponent,
    PagenotfoundComponent,
    DataTableComponent,
    FormAddJobComponent,
    MessageComponent,
    DialogComponent,
    EditTodoDialogComponent,



  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  providers: [
    TodoService,
    MessageService,
    MatDialogModule

  ],
  entryComponents: [DialogComponent, EditTodoDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
